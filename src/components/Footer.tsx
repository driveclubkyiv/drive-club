import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-bold text-lg text-primary">Drive Club</div>
            <p className="text-sm text-muted-foreground">Центр спеціальної підготовки водіїв</p>
            <p className="text-sm text-muted-foreground">18+ років професійного досвіду у навчанні водіїв</p>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Графік роботи
            </h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>Пн–Пт: 7:00–19:00</div>
              <div>Сб: 7:00–17:00</div>
              <div>Нд: вихідний</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Інформація</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                {[
                  { number: "0639806051", display: "(063) 980-60-51" },
                  { number: "0667824728", display: "(066) 782-47-28" },
                ].map((phone) => (
                  <a
                    key={phone.number}
                    href={`tel:${phone.number}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {phone.display}
                  </a>
                ))}
              </div>
              <a
                href="mailto:driveclub.cspv@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                driveclub.cspv@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Розташування</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>вул. Велика Васильківська, 55А, Київ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Drive Club. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}
