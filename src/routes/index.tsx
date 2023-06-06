import { component$ } from "@builder.io/qwik"
import { Image } from "@unpic/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"

export default component$(() => {
  return (
    <div class="md:flex justify-between items-center px-20">
      <div class="sm:mr-10">
        <h1 class="mb-6 text-3xl font-bold tracking-tight text-slate-700 md:text-5xl ">
          Rick and Morty Fan Zone <br />
          <span class="inline-block font-bold text-green-500">
            Explore the Multiverse!
          </span>
        </h1>
        <p class="text-gray-700 sm:text-lg">
          Welcome to Rick and Morty Central, the go-to destination for devoted
          fans of the hit animated series. Dive into an interdimensional
          universe filled with mind-bending adventures, hilarious moments, and
          intriguing theories. Explore episode guides, character profiles, fan
          art, and the latest news from the multiverse.
        </p>
      </div>

      <Image
        src="/rickandmorty-home.jpg"
        width={350}
        height={435}
        alt="Rick and morty fan page"
        title="Rick and morty fan page"
      />
    </div>
  )
})

export const head: DocumentHead = {
  title: "Welcome to Rick and Morty Fan Zone",
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
