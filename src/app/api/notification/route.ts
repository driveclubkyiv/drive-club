// app/api/notification/route.ts
import { NextResponse } from 'next/server';

function escapeHTML(str = '') {
  return String(str).replace(
    /[&<>"']/g,
    (c) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[c] as string
  );
}

enum RequiredFieldUA {
  firstName = "Ім'я",
  lastName = 'Прізвище',
  phone = 'Телефон',
}

type RequiredKey = keyof typeof RequiredFieldUA;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // required fields (with UA labels)
    const required: RequiredKey[] = ['firstName', 'lastName', 'phone'];
    for (const key of required) {
      if (!body?.[key] || String(body[key]).trim() === '') {
        const label = RequiredFieldUA[key];
        return NextResponse.json(
          { error: `Заповніть, будь ласка: ${label}` },
          { status: 400 }
        );
      }
    }

    // simple honeypot (hidden field named "company")
    if (body?.company && String(body.company).trim().length > 0) {
      // Pretend success (don’t hit Telegram)
      return NextResponse.json({ ok: true });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          error:
            'Server misconfigured: TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID missing',
        },
        { status: 500 }
      );
    }

    const val = (v: unknown) => String(v ?? '').trim() || '—';

    const text =
      `<b>Нова заявка з сайту Drive Club</b>\n` +
      `\n<b>Ім'я:</b> ${escapeHTML(val(body.firstName))}` +
      `\n<b>Прізвище:</b> ${escapeHTML(val(body.lastName))}` +
      `\n<b>Телефон:</b> ${escapeHTML(val(body.phone))}` +
      `\n<b>Email:</b> ${escapeHTML(val(body.email))}` +
      `\n<b>Курс:</b> ${escapeHTML(val(body.course))}` +
      `\n<b>Повідомлення:</b>\n${escapeHTML(val(body.message))}\n` +
      `\n<b>Дата/час:</b> ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' })}`;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      }
    );

    const json = await tgRes.json().catch(() => null);
    if (!tgRes.ok || !json?.ok) {
      return NextResponse.json(
        { error: 'Telegram API error', details: json ?? null },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
