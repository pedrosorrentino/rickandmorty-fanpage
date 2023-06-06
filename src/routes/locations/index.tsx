import {
  $,
  component$,
  useOnDocument,
  useStore,
  useTask$,
} from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { fetchAllLocation } from "~/api"
import {
  CardLocationSimple,
  HeaderPage,
  NoMoreItems,
  ToastCard,
} from "~/components"

import type { LocationOne } from "~/interfaces"

interface DataProps {
  currentPage: number
  totalPages: number
  isLoading: boolean
  data: LocationOne[]
  error: boolean
}

export default component$(() => {
  const locationStore = useStore<DataProps>({
    currentPage: 1,
    totalPages: 7,
    isLoading: false,
    data: [],
    error: false,
  })

  useTask$(async ({ track }) => {
    track(() => locationStore.currentPage)

    if (locationStore.currentPage <= locationStore.totalPages) {
      locationStore.isLoading = true
      locationStore.error = false
      const res = await fetchAllLocation(locationStore.currentPage)
      if (res.error) {
        locationStore.error = true
      } else {
        locationStore.data = [...locationStore.data, ...res.results]
        locationStore.isLoading = false
      }
    }
  })

  useOnDocument(
    "scroll",
    $(() => {
      const maxScroll = document.body.scrollHeight
      const currentScroll = window.scrollY + window.innerHeight
      if (currentScroll + 150 >= maxScroll && !locationStore.isLoading) {
        locationStore.isLoading = true
        locationStore.currentPage++
      }
    })
  )
  return (
    <div>
      {locationStore.data.length > 0 && (
        <>
          <HeaderPage title="All the locations of the series" />
          <div class="fade-in mx-auto max-w-2xl grid sm:grid-cols-2 gap-10 px-10">
            {locationStore.data.map((i) => (
              <CardLocationSimple key={i.id} location={i} />
            ))}
          </div>
        </>
      )}

      {locationStore.error && (
        <ToastCard
          title="Error to load all locations"
          desc="Please refresh the page. Thanks"
          url="/locations"
        />
      )}
      {locationStore.currentPage >= locationStore.totalPages && <NoMoreItems />}
    </div>
  )
})

export const head: DocumentHead = {
  title: "All the locations of the series",
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
