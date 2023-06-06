import { component$, useSignal, useStore, useTask$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { fetchMultipleNameCharacter } from "~/api"
import { slugify } from "~/helpers"
import type { Character, Episode, LocationOne } from "~/interfaces"
import { Image } from "@unpic/qwik"

interface ImageResidentProps {
  location?: LocationOne
  episode?: Episode
}

interface DataProps {
  data: any
}

export const ImageResident = component$<ImageResidentProps>(
  ({ location, episode }) => {
    const characterStore = useStore<DataProps>({
      data: [],
    })

    const error = useSignal(false)
    let imagesId: any[]

    if (location) {
      imagesId = location.residents.map((i) => {
        const id = i.split("/").at(-1)
        return id
      })
    }

    if (episode) {
      imagesId = episode?.characters.map((i) => {
        const id = i.split("/").at(-1)
        return id
      })
    }

    useTask$(async () => {
      const response = await fetchMultipleNameCharacter(imagesId.join(","))
      if (!response.length) {
        characterStore.data = [response]
      } else {
        response.map((i) => (characterStore.data = [...characterStore.data, i]))
      }
    })

    return (
      <>
        {error.value && (
          <div class="mt-5">
            Error to load images of residents, Refresh page!
          </div>
        )}
        {characterStore.data && (
          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-10 justify-items-center">
            {characterStore.data.map((i: Character) => (
              <Link
                key={i.id}
                href={`/characters/${slugify(i.name)}?id=${i.id}`}
              >
                <Image
                  src={i.image}
                  width={100}
                  height={100}
                  class="fade-in rounded-full shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"
                />
              </Link>
            ))}
          </div>
        )}
      </>
    )
  }
)
