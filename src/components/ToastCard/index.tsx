import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

export interface ToastCardProps {
  title: string
  desc: string
  url: string
}

export const ToastCard = component$<ToastCardProps>(({ title, desc, url }) => {
  return (
    <div
      role="alert"
      class="mx-auto max-w-sm rounded-xl border border-gray-100 bg-white p-4 shadow-xl mt-20 text-center"
    >
      <strong class="block font-lg text-gray-900">{title}</strong>
      <p class="mt-1 text-sm text-gray-700">{desc}</p>
      <div class="flex gap-5 justify-center">
        <Link
          href={url}
          class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 mt-4 text-white hover:bg-indigo-700"
        >
          <span class="text-sm">Go back</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
        <Link
          href="/"
          class="inline-flex items-center gap-2 rounded-lg bg-slate-400 px-4 py-2 mt-4 text-white hover:bg-slate-700"
        >
          <span class="text-sm">Home</span>
        </Link>
      </div>
    </div>
  )
})
