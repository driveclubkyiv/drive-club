import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Fact {
  label: string
  value: string | string[]
  icon?: React.ReactNode
}

interface FactListProps {
  facts: Fact[]
  title?: string
  className?: string
}

export function FactList({ facts, title = "Деталі курсу", className }: FactListProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4">{title}</h3>
        <dl className="space-y-4">
          {facts.map((fact, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <dt className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                {fact.icon}
                {fact.label}
              </dt>
              <dd className="text-sm font-medium">
                {Array.isArray(fact.value) ? (
                  <div className="space-y-1">
                    {fact.value.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-1 mb-1">
                        {item}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <span className="text-foreground">{fact.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  )
}
