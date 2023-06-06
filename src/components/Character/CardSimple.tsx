import { component$ } from "@builder.io/qwik"
import { Image } from "@unpic/qwik"
import type { Character } from "~/interfaces"

export interface CardSimpleProps {
  character: Character
}

export const CardSimple = component$<CardSimpleProps>(({ character }) => {
  return (
    <div class="card-character-fx fade-in">
      <Image
        class="rounded-lg"
        src={character.image}
        width={600}
        height={600}
        alt={character.name}
        title={character.name}
      />
      <div class="p-2">
        <h2 class="text-2xl font-bold text-center">{character.name}</h2>
      </div>
    </div>
  )
})
