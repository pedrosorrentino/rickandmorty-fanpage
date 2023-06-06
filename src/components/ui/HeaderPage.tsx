import { component$ } from "@builder.io/qwik"

export interface HeaderPageProps {
  title: string
}

export const HeaderPage = component$<HeaderPageProps>(({ title }) => {
  return (
    <h1 class="text-3xl md:text-4xl text-slate-700 font-bold p-3 text-center mb-10">
      {title}
    </h1>
  )
})
