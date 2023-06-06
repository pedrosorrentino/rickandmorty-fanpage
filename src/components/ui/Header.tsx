import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import { Image } from "@unpic/qwik"

export const Header = component$(() => {
  const links = [
    {
      name: "Characters",
      link: "/characters",
    },
    {
      name: "Locations",
      link: "/locations",
    },
    {
      name: "Episodes",
      link: "/episodes",
    },
  ]

  return (
    <header class="max-w-full flex justify-between items-center p-5 mb-20">
      <div>
        <Link href="/" title="Rick and morty home">
          <Image
            src="/rickandmorty.png"
            width={70}
            height={88}
            title="Rick and morty Fan page"
            alt="Rick and morty Fan page"
          />
        </Link>
      </div>
      <nav>
        <ul class="flex gap-6">
          {links.map((i) => (
            <li key={i.name}>
              <Link
                class="text-green-500 md:text-xl font-semibold tracking-wide transition-colors hover:text-slate-600 hover:border-b-2 hover:border-b-yellow-300"
                href={i.link}
                title={i.name}
              >
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
})
