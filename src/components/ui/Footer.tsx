import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

export const Footer = component$(() => {
  return (
    <footer>
      <div class="text-center text-sm mt-20 ">
        Created by{" "}
        <Link
          href="https://pedrosorrentino.com"
          target="_blank"
          class="font-semibold"
          title="Pedro Sorrentino"
        >
          OrdepDev
        </Link>{" "}
        with permission of Rick
      </div>
      <Link
        href="https://qwik.builder.io/"
        target="_blank"
        title="Powered by Qwik"
      >
        <p class="text-center text-sm my-2">Powered by Qwik</p>
      </Link>
    </footer>
  )
})
