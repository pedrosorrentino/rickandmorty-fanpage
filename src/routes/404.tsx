import { component$ } from "@builder.io/qwik"
import { Image } from "@unpic/qwik"

export default component$(() => {
  return (
    <div class="flex justify-center my-20">
      <Image src="/404.png" width={400} height={390} />
    </div>
  )
})
