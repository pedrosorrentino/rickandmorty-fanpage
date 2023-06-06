import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { Image } from "@unpic/qwik"
import { slugify } from "~/helpers"
import type { Character } from "~/interfaces"
import { CardCopyCode } from "./CardCopyCode"
import { CardTextTemplate } from "./CardTextTemplate"

export interface CardDetailProps {
  character: Character
}

export const CardDetail = component$<CardDetailProps>(({ character }) => {
  let locationId
  let locationName
  if (character.location.name === "unknown") {
    locationId = character.origin.url.split("/").at(-1)
    locationName = character.origin.name
  } else {
    locationId = character.location.url.split("/").at(-1)
    locationName = character.location.name
  }

  return (
    <div class="fade-in p-8 tracking-wider shadow-xl rounded-xl m-10 sm:mx-auto sm:max-w-5xl">
      <div class="grid md:grid-cols-2 justify-items-center gap-5 ">
        <div>
          <Link
            href="/characters/"
            class="text-slate-500 hover:text-green-500 transition duration-300"
          >
            ↶ Go back
          </Link>
          <Image
            class="mt-5 rounded-lg"
            width={500}
            height={500}
            src={character.image}
            title={character.name}
            alt={character.name}
          />
        </div>
        <div class="py-5">
          {locationName === "unknown" ? (
            <p class="border-b-2 border-b-yellow-300 hover:text-rose-500 transition-colors duration-300">
              Unknown
            </p>
          ) : (
            <Link
              class="border-b-2 border-b-yellow-300 hover:text-rose-500 transition-colors duration-300"
              href={`/locations/${slugify(locationName)}?id=${locationId}`}
            >
              {locationName}
            </Link>
          )}

          <div class="flex justify-between items-center">
            <h1 class="sm:text-4xl font-bold mt-2">{character.name}</h1>
            <p
              class={`sm:text-lg px-2 font-semibold rounded-md capitalize ${
                character.status === "Alive"
                  ? "bg-green-500 text-white"
                  : "bg-rose-500 text-white"
              }`}
            >
              {character.status}
            </p>
          </div>
          <CardTextTemplate character={character} />
        </div>
      </div>

      <div>
        <h2 class="inline text-2xl font-bold border-b-2 border-b-yellow-300">
          You can see it in these episodes
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
          {character.episode.map((i) => (
            <Link
              class="link-episode"
              href={`/episodes/${i.split("/").at(-1)}`}
              key={i}
            >
              Episode {i.split("/").at(-1)}
            </Link>
          ))}
        </div>
      </div>
      <div class="mt-10">
        <h2 class="inline text-2xl font-bold border-b-2 border-b-yellow-300">
          Do you want to have {character.name} picture as your avatar?
        </h2>
        <CardCopyCode code={character.image} name={character.name} />
      </div>
    </div>
  )
})
