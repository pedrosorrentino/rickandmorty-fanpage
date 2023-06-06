import { component$ } from "@builder.io/qwik"
import { Image } from "@unpic/qwik"

export const ErrorPage = component$(() => {
  return (
    <div class="mx-auto my-20">
      <Image src="/404.png" width={400} height={390} />
    </div>
  )
})
