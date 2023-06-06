import {
  $,
  component$,
  useOnDocument,
  useStore,
  useTask$,
} from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { fetchAllCharacters } from "~/api"
import { CardSimple, HeaderPage, NoMoreItems, ToastCard } from "~/components"
import { slugify } from "~/helpers"
import type { Character } from "~/interfaces"
import type { DocumentHead } from "@builder.io/qwik-city"

interface DataProps {
  currentPage: number
  totalPages: number
  isLoading: boolean
  data: Character[]
  error: boolean
}

export default component$(() => {
  const characterStore = useStore<DataProps>({
    currentPage: 1,
    totalPages: 42,
    isLoading: false,
    data: [],
    error: false,
  })

  useTask$(async ({ track }) => {
    track(() => characterStore.currentPage)

    if (characterStore.currentPage <= characterStore.totalPages) {
      characterStore.isLoading = true
      characterStore.error = false
      const res = await fetchAllCharacters(characterStore.currentPage)
      if (res.error) characterStore.error = true
      characterStore.data = [...characterStore.data, ...res.results]
      characterStore.isLoading = false
    }
  })

  useOnDocument(
    "scroll",
    $(() => {
      const maxScroll = document.body.scrollHeight
      const currentScroll = window.scrollY + window.innerHeight
      if (currentScroll + 150 >= maxScroll && !characterStore.isLoading) {
        characterStore.isLoading = true
        characterStore.currentPage++
      }
    })
  )

  return (
    <div>
      {characterStore.data.length > 0 && (
        <>
          <HeaderPage title="All the characters of the series" />
          <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mx-10">
            {characterStore.data.map((i) => (
              <Link
                key={i.id}
                href={`/characters/${slugify(i.name)}?id=${i.id}`}
              >
                <CardSimple character={i} />
              </Link>
            ))}
          </div>
        </>
      )}

      {characterStore.error && (
        <ToastCard
          title="Error to load all characters"
          desc="Please refresh the page. Thanks"
          url="/characters"
        />
      )}
      {characterStore.currentPage >= characterStore.totalPages && (
        <NoMoreItems />
      )}
    </div>
  )
})

export const head: DocumentHead = {
  title: "All the characters of the series",
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
