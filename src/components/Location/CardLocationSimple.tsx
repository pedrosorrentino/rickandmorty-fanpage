import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { slugify } from "~/helpers"
import type { LocationOne } from "~/interfaces"

export interface CardLocationSimpleProps {
  location: LocationOne
}

export const CardLocationSimple = component$<CardLocationSimpleProps>(
  ({ location }) => {
    return (
      <Link
        href={`/locations/${slugify(location.name)}?id=${location.id}`}
        class="tracking-wider rounded-lg p-2 hover:bg-slate-100 hover:text-green-600 transition duration-200"
      >
        <h2 class="text-lg font-semibold">{location.name}</h2>
        <p class="text-sm">⚬ {location.type}</p>
      </Link>
    )
  }
)
