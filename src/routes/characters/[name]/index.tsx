import { Resource, component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { fetchNameCharacter } from "~/api"
import { CardDetail, Loading, ToastCard } from "~/components"
import type { DocumentHead } from "@builder.io/qwik-city"

export const useCharacterDetails = routeLoader$(async (requestEvent) => {
  const characterId = requestEvent.url.searchParams.get("id")
  const res = await fetchNameCharacter(Number(characterId) || 0)
  return res
})

export default component$(() => {
  const dataCharacter = useCharacterDetails()

  return (
    <div>
      <Resource
        value={dataCharacter}
        onPending={() => <Loading />}
        onRejected={() => (
          <ToastCard
            title="Not Found!"
            desc="Character not found in database, please go back and select other character. Thanks"
            url="/characters"
          />
        )}
        onResolved={(character) => <CardDetail character={character} />}
      />
    </div>
  )
})

export const head: DocumentHead = ({ resolveValue }) => {
  const character = resolveValue(useCharacterDetails)

  return {
    title: `Details of ${character.name} from ${character.location.name}`,
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
