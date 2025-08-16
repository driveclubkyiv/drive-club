import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакти - Drive Club',
  description:
    "Зв'яжіться з Drive Club. Адреса, телефони, графік роботи. Центр спеціальної підготовки водіїв у Києві.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
