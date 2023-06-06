import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"
import { stableDiffusion } from "~/api"
import { Image } from "@unpic/qwik"
import { Link, useLocation } from "@builder.io/qwik-city"

export interface GenerateImageProps {
  props: string
}

export const GenerateImage = component$<GenerateImageProps>(({ props }) => {
  const image = useSignal("")
  const isLoading = useSignal(true)
  const loc = useLocation().url.pathname.split("/").at(1)

  useVisibleTask$(async ({ track }) => {
    track(() => props)
    const res = await stableDiffusion(props)
    image.value = `${res}`
    isLoading.value = false
  })

  return (
    <>
      {isLoading.value && (
        <Image
          src={"/loader.webp"}
          width={150}
          height={150}
          class="rounded-md py-20 fade-in"
        />
      )}
      {image.value && (
        <>
          <Link
            href={`/${loc}`}
            class="text-slate-500 hover:text-green-500 transition duration-300"
          >
            ↶ Go back
          </Link>
          <Image
            src={image.value}
            width={400}
            height={400}
            class="rounded-md my-10 fade-in "
          />
        </>
      )}
    </>
  )
})
