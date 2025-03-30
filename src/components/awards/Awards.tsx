import { awards } from '@/config/projects'
import { Card } from '@/components/shared/Card'
import { Section } from '@/components/layout/Section'

export function Awards() {
  return (
    <Section title="Awards">
      <div className="grid grid-cols-1 gap-4">
        {awards.map((award, index) => (
          <Card key={index}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{award.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {award.date ? `${award.date}` : 'Up to Now'}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {award.description}
              </p>
              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Learn more →
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
