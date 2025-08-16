import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  Trophy,
  Star,
  BadgeIcon as Certificate,
  Users,
  Target,
  Medal,
  Shield,
  BookOpen,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Нагороди та сертифікати - Drive Club",
  description:
    "Офіційні нагороди, сертифікати та ліцензії Drive Club. Підтвердження професіоналізму в підготовці водіїв.",
}

const certifications = [
  {
    id: 1,
    title: "Ліцензія на освітню діяльність",
    number: "АЕ № 285647",
    validUntil: "2025",
    issuer: "Міністерство освіти України",
    description: "Офіційний дозвіл на проведення освітньої діяльності з підготовки водіїв",
    image: "/images/certificates/education-license.png",
    category: "Ліцензія",
    priority: 1,
  },
  {
    id: 2,
    title: "Сертифікат якості ISO 9001:2015",
    number: "UA-QMS-001-2022",
    validUntil: "2025",
    issuer: "Міжнародна організація стандартизації",
    description: "Підтвердження відповідності міжнародним стандартам системи управління якістю",
    image: "/images/certificates/iso-9001.png",
    category: "Міжнародний стандарт",
    priority: 1,
  },
  {
    id: 3,
    title: "Акредитація центру підготовки водіїв",
    number: "ЦП-2023-156",
    validUntil: "2026",
    issuer: "Державна служба з безпеки на транспорті",
    description: "Офіційне визнання як акредитованого центру підготовки водіїв",
    image: "/images/certificates/accreditation.png",
    category: "Акредитація",
    priority: 1,
  },
  {
    id: 4,
    title: "Сертифікат інноваційних технологій",
    number: "IT-EDU-2023-089",
    validUntil: "2024",
    issuer: "Український інститут науково-технічної експертизи",
    description: "За впровадження VR-технологій та інтерактивних методів навчання",
    image: "/images/certificates/innovation.png",
    category: "Інновації",
    priority: 2,
  },
  {
    id: 5,
    title: "Сертифікат безпеки дорожнього руху",
    number: "БДР-2023-445",
    validUntil: "2024",
    issuer: "Національна поліція України",
    description: "Підтвердження високих стандартів навчання безпечного водіння",
    image: "/images/certificates/road-safety.png",
    category: "Безпека",
    priority: 2,
  },
  {
    id: 6,
    title: "Членство в Асоціації автошкіл України",
    number: "ААУ-2020-078",
    validUntil: "2024",
    issuer: "Асоціація автошкіл України",
    description: "Активне членство в професійній асоціації автошкіл",
    image: "/images/certificates/association.png",
    category: "Членство",
    priority: 3,
  },
]

const awards = [
  {
    year: "2023",
    title: "Найкращий центр підготовки водіїв року",
    organization: "Асоціація автошкіл України",
    description: "Головна нагорода за високі стандарти навчання та інноваційні методики",
    icon: Trophy,
    image: "/images/awards/best-center-2023.png",
  },
  {
    year: "2022",
    title: "Інноваційний підхід в освіті",
    organization: "Міністерство освіти України",
    description: "За впровадження сучасних технологій навчання",
    icon: Zap,
    image: "/images/awards/innovation-2022.png",
  },
  {
    year: "2021",
    title: "Найбезпечніша автошкола",
    organization: "Департамент транспорту м. Києва",
    description: "За найнижчий рівень аварійності серед випускників",
    icon: Shield,
    image: "/images/awards/safest-2021.png",
  },
]

const statistics = [
  { number: "18+", label: "років досвіду", description: "Надійний партнер з 2005 року", icon: BookOpen },
  { number: "5000+", label: "випускників", description: "Успішно підготовлених водіїв", icon: Users },
  { number: "95%", label: "успішність", description: "Здачі іспитів з першого разу", icon: Target },
  { number: "6", label: "офіційних ліцензій", description: "Та сертифікатів якості", icon: Certificate },
]

export default function RewardsPage() {
  const priorityCertifications = certifications.filter((cert) => cert.priority === 1)
  const otherCertifications = certifications.filter((cert) => cert.priority > 1)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
        <div className="absolute inset-0 bg-[url('/images/patterns/certificates-bg.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-2xl">
                <Certificate className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Нагороди та сертифікати
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Офіційне підтвердження нашого професіоналізму та якості навчання
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Award className="h-4 w-4 mr-2" />
                Ліцензовано МОН України
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Star className="h-4 w-4 mr-2" />
                ISO 9001:2015
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Medal className="h-4 w-4 mr-2" />
                18+ років досвіду
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Основні ліцензії та сертифікати</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Офіційні документи, що підтверджують наше право на освітню діяльність та відповідність міжнародним
              стандартам
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {priorityCertifications.map((cert) => (
              <Card
                key={cert.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                      {cert.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {cert.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-orange-600">{cert.issuer}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{cert.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Номер:</span>
                      <span className="font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded text-xs">
                        {cert.number}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Дійсний до:</span>
                      <span className="font-semibold text-green-600">{cert.validUntil}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Нагороди та відзнаки</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Визнання нашої роботи професійною спільнотою та державними органами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => {
              const IconComponent = award.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={award.image || "/placeholder.svg"}
                      alt={award.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 text-gray-900 border-0 mb-2">{award.year}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-xl">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-gray-900 mb-2">{award.title}</CardTitle>
                        <p className="text-sm font-medium text-orange-600 mb-2">{award.organization}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Certifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Додаткові сертифікати</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Спеціалізовані сертифікати та членство в професійних організаціях
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCertifications.map((cert) => (
              <Card key={cert.id} className="hover:shadow-lg transition-all duration-300 border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                      <Certificate className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {cert.category}
                      </Badge>
                      <CardTitle className="text-lg font-semibold text-gray-900">{cert.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cert.description}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Номер:</span>
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">{cert.number}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Дійсний до:</span>
                      <span className="font-semibold text-green-600">{cert.validUntil}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-500 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Навчайтесь у ліцензованих професіоналів</h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Наші офіційні ліцензії та сертифікати гарантують високу якість навчання та відповідність всім державним
              стандартам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4">
                <Link href="/courses">Обрати курс навчання</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4 bg-transparent"
              >
                <Link href="/contact">Отримати консультацію</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
