import { component$ } from "@builder.io/qwik"
import type { Episode } from "~/interfaces"
import { ImageResident } from "../Location/ImageResident"
import { ToastCard } from "../ToastCard"

export interface CardEpisodeDetailProps {
  episode: Episode
}

export const CardEpisodeDetail = component$<CardEpisodeDetailProps>(
  ({ episode }) => {
    return (
      <>
        {episode.error && (
          <ToastCard
            title="Episode not found"
            desc="This Episode not exist in database"
            url="/episodes"
          />
        )}
        {!episode.error && (
          <div class="fade-in p-8 tracking-wider shadow-xl rounded-xl m-10 sm:mx-auto sm:max-w-5xl">
            <span class="border-b-2 border-b-yellow-300 hover:text-rose-500 transition-colors duration-300">
              Seen for the first time {episode.air_date}
            </span>

            <div class="flex justify-between items-center mb-10">
              <h1 class="sm:text-4xl font-bold mt-2">{episode.name}</h1>
              <p class={`sm:text-lg px-2 font-semibold rounded-md capitalize`}>
                {episode.episode}
              </p>
            </div>

            <ImageResident episode={episode} />
          </div>
        )}
      </>
    )
  }
)
