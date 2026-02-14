import { notFound } from "next/navigation"
import { getAccommodation, getCity, accommodations } from "@/lib/data"
import { AccommodationDetail } from "@/components/accommodations/accommodation-detail"

interface AccommodationPageProps {
  params: Promise<{ accommodationId: string }>
}

export async function generateStaticParams() {
  return accommodations.map((acc) => ({
    accommodationId: acc.id,
  }))
}

export async function generateMetadata({ params }: AccommodationPageProps) {
  const { accommodationId } = await params
  const accommodation = getAccommodation(accommodationId)

  if (!accommodation) return { title: "Hospedaje no encontrado" }

  return {
    title: `${accommodation.name} | Sendero Sur`,
    description: accommodation.description,
  }
}

export default async function AccommodationPage({ params }: AccommodationPageProps) {
  const { accommodationId } = await params
  const accommodation = getAccommodation(accommodationId)

  if (!accommodation) {
    notFound()
  }

  const city = getCity(accommodation.cityId)

  return <AccommodationDetail accommodation={accommodation} city={city} />
}
