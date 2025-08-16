import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft, Phone, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Сторінку не знайдено</h2>
          <p className="text-lg text-muted-foreground mb-8">
            На жаль, сторінка, яку ви шукаєте, не існує або була переміщена.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Що ви можете зробити?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button asChild variant="default" size="lg" className="h-auto p-4">
                <Link href="/" className="flex items-center gap-3">
                  <Home className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">На головну</div>
                    <div className="text-sm opacity-90">Повернутися на головну сторінку</div>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="h-auto p-4 bg-transparent">
                <Link href="/courses" className="flex items-center gap-3">
                  <ArrowLeft className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Наші курси</div>
                    <div className="text-sm opacity-90">Переглянути всі курси</div>
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <p className="text-muted-foreground">Потрібна допомога? Зв'яжіться з нами:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0639806051"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (063) 980-60-51
            </a>
            <a
              href="mailto:driveclub.cspv@gmail.com"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="h-4 w-4" />
              driveclub.cspv@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
