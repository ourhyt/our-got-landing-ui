import { EventCard } from '@/components/event/EventCard'

export function EventsSection() {
  return (
    <section id="eventos" className="py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <EventCard
        title="Ourhyt Invites: Melodic Takeover"
        date="15 Junio 2025"
        location="Medellín, Colombia"
        imageUrl="/images/events/our-rave.jpg"
        ticketUrl="https://ourhyt.com/tickets/melodic"
      />
    </section>
  )
}