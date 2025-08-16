import type { Metadata } from "next"
import { COURSES_LIST } from "@/constant/courses/COURSES_LIST.constant"
import { ProgramCard } from "@/components/ProgramCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Users, Award, Star, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Програми навчання - Drive Club",
  description:
    "Професійні програми підготовки водіїв: для новачків, підвищення кваліфікації, захисне водіння. Досвідчені інструктори, сучасні тренажери.",
}

const features = [
  {
    icon: Users,
    title: "Досвідчені інструктори",
    description: "18+ років досвіду навчання",
  },
  {
    icon: Clock,
    title: "Гнучкий графік",
    description: "Підберемо зручний час",
  },
  {
    icon: Award,
    title: "Високі результати",
    description: "95% успішність здачі іспитів",
  },
  {
    icon: Star,
    title: "Сучасні методики",
    description: "VR-тренажери та інновації",
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-red-50/30">
      {/* Hero Section */}
      <section className="relative py-20 pt-20 bg-gradient-to-r from-orange-500 to-red-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/driving-bg.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2">18+ років досвіду</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Програми навчання водіїв</h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Професійна підготовка від базових навичок до спеціальної підготовки. Сучасні методики, досвідчені
              інструктори, гарантований результат.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm font-medium">{feature.title}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Оберіть програму навчання</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Від базового курсу для новачків до спеціалізованих програм підвищення кваліфікації
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {COURSES_LIST.map((course, index) => {
                const minPrice = Math.min(...course.pricing.options.map((option) => option.amount))

                return (
                  <div key={course.id} className="group h-full">
                    <ProgramCard
                      id={course.id}
                      title={course.title}
                      blurb={course.subtitle}
                      priceFrom={minPrice}
                      href={`/courses/${course.id}`}
                      img={`/images/programs/${course.id}-card.png`}
                      duration={course.duration.label}
                      featured={course.id === "novice-course"}
                      index={index}
                    />
                  </div>
                )
              })}

              <div className="group h-full">
                <ProgramCard
                  id="certificate"
                  title="Подарунковий сертифікат"
                  blurb="Ідеальний подарунок для тих, хто хоче навчитися водити або підвищити свою кваліфікацію"
                  priceFrom={2000}
                  href="/courses/certificate"
                  img="/images/programs/certificate-card.png"
                  isGift={true}
                  index={COURSES_LIST.length}
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card
                    key={index}
                    className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
                  >
                    <CardContent className="pt-8 pb-6">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-gray-50 to-white border-0 shadow-xl">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Не знаєте, який курс обрати?</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Наші консультанти допоможуть підібрати програму, що найкраще відповідає вашим потребам та рівню
                  підготовки.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <a
                    href="tel:0639806051"
                    className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    <Phone className="h-4 w-4" />
                    (063) 980-60-51
                  </a>
                  <a
                    href="tel:0667824728"
                    className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    <Phone className="h-4 w-4" />
                    (066) 782-47-28
                  </a>
                </div>

                <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4">
                  <a href="/contact" className="flex items-center gap-2">
                    Отримати консультацію
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
