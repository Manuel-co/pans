import Image from "next/image"

interface OfficialCardProps {
  official: {
    id: string
    name: string
    position: string
    image: string
  }
}

export default function OfficialCard({ official }: OfficialCardProps) {
  return (
    <div className="flex flex-col items-center text-center hover-scale transition-all duration-300">
      <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4 group">
        <Image
          src={official.image || "/placeholder.svg"}
          alt={official.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 160px, 160px"
        />
      </div>
      <h3 className="text-xl font-bold">{official.name}</h3>
      <p className="text-pansblue-700 font-medium">{official.position}</p>
    </div>
  )
}

