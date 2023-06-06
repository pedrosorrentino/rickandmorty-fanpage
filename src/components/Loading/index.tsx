import { component$ } from "@builder.io/qwik"

export const Loading = component$(() => {
  return (
    <div class="fade-in animate-pulse border border-grey-300 p-8 shadow-xl rounded-xl sm:mx-auto sm:max-w-5xl mx-10 ">
      <div class="grid sm:grid-cols-2">
        <div class="rounded-md bg-slate-200 h-[300px] w-full"></div>
        <div class="sm:ml-4 space-y-4">
          <div class="h-2 bg-slate-200 rounded"></div>
          <div class="grid grid-cols-2">
            <div class="w-40 h-5 bg-slate-200 rounded place-self-start"></div>
            <div class="w-16 h-5 bg-slate-200 rounded place-self-end"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>
          <div class="w-56 h-2 bg-slate-200 rounded"></div>
          <div class="w-56 h-2 bg-slate-200 rounded"></div>
          <div class="w-36 h-2 bg-slate-200 rounded"></div>
          <div class="w-56 h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  )
})
