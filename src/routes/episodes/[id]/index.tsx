import { Resource, component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { fetchOneEpisode } from "~/api"
import { CardEpisodeDetail, Loading, ToastCard } from "~/components"
import type { DocumentHead } from "@builder.io/qwik-city"

export const useEpisodeDetails = routeLoader$(async (requestEvent) => {
  const episodeId =
    requestEvent.url.searchParams.get("id") || requestEvent.params.id
  const res = await fetchOneEpisode(`${episodeId}` || "")
  return res
})

export default component$(() => {
  const dataEpisode = useEpisodeDetails()

  return (
    <Resource
      value={dataEpisode}
      onPending={() => <Loading />}
      onRejected={() => (
        <ToastCard
          title="Not Found!"
          desc="Location not found in database, please go back and select other location. Thanks"
          url="/locations"
        />
      )}
      onResolved={(episode) => <CardEpisodeDetail episode={episode} />}
    />
  )
})

export const head: DocumentHead = ({ resolveValue }) => {
  const episode = resolveValue(useEpisodeDetails)

  return {
    title: `Welcome to ${episode.name} | ${episode.air_date}`,
    meta: [
      {
        name: "description",
        content: `Welcome to Rick and Morty Central, the go-to destination for devoted
        fans of the hit animated series. Dive into an interdimensional
        universe filled with mind-bending adventures, hilarious moments, and
        intriguing theories. Explore episode guides, character profiles, fan
        art, and the latest news from the multiverse.`,
      },
      {
        name: "keywords",
        content:
          "Rick and Morty, Rick, Morty, animated series, science fiction, comedy, adult swim",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "author",
        content: "Pedro Sorrentino",
      },
      {
        name: "publisher",
        content: "Pedro Sorrentino",
      },
    ],
  }
}
