import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { slugify } from "~/helpers"
import type { Episode } from "~/interfaces"

export interface CardEpisodeSimpleProps {
  episodes: Episode
}

export const CardEpisodeSimple = component$<CardEpisodeSimpleProps>(
  ({ episodes }) => {
    return (
      <Link
        href={`/episodes/${slugify(episodes.name)}?id=${episodes.id}`}
        class="tracking-wider rounded-lg p-2 hover:bg-slate-100 hover:text-green-600 transition duration-200"
      >
        <h2 class="text-lg font-semibold">{episodes.name}</h2>
        <p class="text-sm">⚬ {episodes.episode}</p>
      </Link>
    )
  }
)
