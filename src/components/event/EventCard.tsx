'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface EventCardProps {
  title: string
  date: string // formato: "15 Junio 2025"
  location: string
  imageUrl: string
  ticketUrl: string
  className?: string
}

export function EventCard({
  title,
  date,
  location,
  imageUrl,
  ticketUrl,
  className,
}: EventCardProps) {
  const eventDate = new Date(date)
  const isPast = eventDate < new Date()

  return (
    <Card
      className={cn(
        'relative w-full max-w-sm overflow-hidden bg-zinc-950 text-white rounded-2xl shadow-md hover:shadow-xl transition-all',
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={225}
        className="object-cover w-full h-auto rounded-t-2xl"
        priority
      />

      {isPast && (
        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm z-10">
          Finalizado
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-1">
        <p className="text-sm text-muted-foreground">{date}</p>
        <p className="text-sm text-muted-foreground">{location}</p>

        <Button
          asChild
          className="w-full mt-4"
          variant={isPast ? 'secondary' : 'default'}
          disabled={isPast}
        >
          <a href={ticketUrl} target="_blank" rel="noopener noreferrer">
            {isPast ? 'Evento Finalizado' : 'Comprar Entrada'}
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}