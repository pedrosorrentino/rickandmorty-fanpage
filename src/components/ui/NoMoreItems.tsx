import { component$ } from "@builder.io/qwik"

export const NoMoreItems = component$(() => {
  return (
    <div class="flex justify-center my-10 ">
      <p class="p-2 bg-rose-500 rounded-md text-white font-semibold shadow-md">
        No more items!
      </p>
    </div>
  )
})
