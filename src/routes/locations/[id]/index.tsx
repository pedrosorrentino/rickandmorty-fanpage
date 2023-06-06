import { Resource, component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { fetchOneLocation } from "~/api"
import { CardLocationDetail, Loading, ToastCard } from "~/components"

import type { DocumentHead } from "@builder.io/qwik-city"

export const useLocationDetails = routeLoader$(async (requestEvent) => {
  const locationId = requestEvent.url.searchParams.get("id")
  const res = await fetchOneLocation(Number(locationId) || 0)
  return res
})

export default component$(() => {
  const dataLocation = useLocationDetails()

  return (
    <Resource
      value={dataLocation}
      onPending={() => <Loading />}
      onRejected={() => (
        <ToastCard
          title="Not Found!"
          desc="Location not found in database, please go back and select other location. Thanks"
          url="/locations"
        />
      )}
      onResolved={(location) => <CardLocationDetail location={location} />}
    />
  )
})

export const head: DocumentHead = ({ resolveValue }) => {
  const location = resolveValue(useLocationDetails)

  return {
    title: `Welcome to ${location.name} in ${location.dimension}`,
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
