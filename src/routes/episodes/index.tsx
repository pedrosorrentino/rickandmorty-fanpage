import {
  $,
  component$,
  useOnDocument,
  useStore,
  useTask$,
} from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import { fetchAllEpisodes } from "~/api"
import {
  CardEpisodeSimple,
  HeaderPage,
  NoMoreItems,
  ToastCard,
} from "~/components"

import type { Episode } from "~/interfaces"

interface DataProps {
  currentPage: number
  totalPages: number
  isLoading: boolean
  data: Episode[]
  error: boolean
}

export default component$(() => {
  const episodesStore = useStore<DataProps>({
    currentPage: 1,
    totalPages: 3,
    isLoading: false,
    data: [],
    error: false,
  })

  useTask$(async ({ track }) => {
    track(() => episodesStore.currentPage)

    if (episodesStore.currentPage <= episodesStore.totalPages) {
      episodesStore.isLoading = true
      episodesStore.error = false
      const res = await fetchAllEpisodes("", `${episodesStore.currentPage}`)
      if (res.error) {
        episodesStore.error = true
      } else {
        episodesStore.data = [...episodesStore.data, ...res.results]
        episodesStore.isLoading = false
      }
    }
  })

  useOnDocument(
    "scroll",
    $(() => {
      const maxScroll = document.body.scrollHeight
      const currentScroll = window.scrollY + window.innerHeight
      if (currentScroll + 150 >= maxScroll && !episodesStore.isLoading) {
        episodesStore.isLoading = true
        episodesStore.currentPage++
      }
    })
  )
  return (
    <div>
      {episodesStore.data.length > 0 && (
        <>
          <HeaderPage title="All the episodes of the series" />
          <div class="fade-in mx-auto max-w-2xl grid sm:grid-cols-2 gap-10 px-10">
            {episodesStore.data.map((i) => (
              <CardEpisodeSimple key={i.id} episodes={i} />
            ))}
          </div>
        </>
      )}

      {episodesStore.error && (
        <ToastCard
          title="Error to load all episodes"
          desc="Please refresh the page. Thanks"
          url="/episodes"
        />
      )}
      {episodesStore.currentPage >= episodesStore.totalPages && <NoMoreItems />}
    </div>
  )
})

export const head: DocumentHead = {
  title: "All the episodes of the series",
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
