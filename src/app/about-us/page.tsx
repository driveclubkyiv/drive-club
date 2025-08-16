import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Target, Heart, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Про нас - Drive Club",
  description:
    "Drive Club - провідний центр підготовки водіїв у Києві. 18+ років досвіду, професійні інструктори, сучасне обладнання.",
}

const values = [
  {
    icon: Shield,
    title: "Безпека",
    description:
      "Безпека на дорозі - наш головний пріоритет. Ми навчаємо не просто керувати автомобілем, а думати на дорозі.",
  },
  {
    icon: Target,
    title: "Професіоналізм",
    description: "Наші інструктори мають багаторічний досвід та постійно підвищують свою кваліфікацію.",
  },
  {
    icon: Heart,
    title: "Індивідуальний підхід",
    description: "Кожен учень унікальний. Ми адаптуємо програму навчання під індивідуальні потреби.",
  },
  {
    icon: Award,
    title: "Якість",
    description: "Високі стандарти навчання та сучасне обладнання забезпечують якісну підготовку.",
  },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-20 pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Про Drive Club</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Команда найкращих інструкторів з контр-аварійної підготовки України
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <blockquote className="text-2xl md:text-3xl font-bold text-primary mb-8 italic leading-relaxed">
              &#34;В критичній ситуації ти не піднімешся до рівня своїх очікувань, а впадеш до рівня своєї підготовки.&#34;
            </blockquote>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left max-w-3xl mx-auto">
              <p className="text-xl font-semibold text-foreground">
                Ми - команда найкращих інструкторів з контр-аварійної підготовки України - &#34;Драйв Клуб&#34;.
              </p>

              <p>Більше 18 років професійно навчаємо вправно і без страху керувати автомобілем в різних ситуаціях.</p>

              <p>
                Маємо великий досвід роботи як з водіями зі стажем (від 1 до 30+ р.), так і з людьми, які тільки
                вирішили стати водіями.
              </p>

              <p>
                Також ми маємо великий досвід роботи з силовими структурами України (ЦСО, КОРД, ЗСУ, Поліція, Поліція
                охорони, Титан, Кобра, ТОР, УДО, ДБР).
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full w-fit mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-orange-50/50 to-red-50/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Приєднуйтесь до нас</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Станьте частиною спільноти професійних водіїв Drive Club
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                <Link href="/courses">Обрати курс</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                <Link href="/about-us/rewards">Наші досягнення</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
