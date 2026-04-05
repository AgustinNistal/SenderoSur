import { notFound } from "next/navigation"
import { getCity, type Accommodation } from "@/lib/data"
import { AccommodationDetail } from "@/components/accommodations/accommodation-detail"

interface AccommodationPageProps {
  params: Promise<{ accommodationId: string }>
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: AccommodationPageProps) {
  const { accommodationId } = await params
  const accommodation = await fetchAccommodation(accommodationId)

  if (!accommodation) return { title: "Hospedaje no encontrado" }

  return {
    title: `${accommodation.name} | Sendero Sur`,
    description: accommodation.description,
  }
}

async function fetchAccommodation(id: string): Promise<Accommodation | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002"
  const res = await fetch(`${apiUrl}/accommodations/${id}`, { cache: "no-store" })
  if (res.status === 404) return null
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export default async function AccommodationPage({ params }: AccommodationPageProps) {
  const { accommodationId } = await params
  const accommodation = await fetchAccommodation(accommodationId)

  if (!accommodation) {
    notFound()
  }

  const city = getCity(accommodation.cityId)

  return <AccommodationDetail accommodation={accommodation} city={city} />
}
