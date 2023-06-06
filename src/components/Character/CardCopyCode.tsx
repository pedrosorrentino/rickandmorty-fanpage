import { $, component$, useSignal } from "@builder.io/qwik"

export interface CardCopyCodeProps {
  code: string
  name: string
}

export const CardCopyCode = component$<CardCopyCodeProps>(({ code, name }) => {
  const copied = useSignal(false)
  const codeGenerate = `<img src="${code}" alt="${name}" width="400px" height="400px" />`

  const copyCodeToClipboard = $((code: string) => {
    navigator.clipboard.writeText(code)
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
  })
  return (
    <div class="bg-gray-100 p-4 rounded-lg mt-10">
      <p class="font-mono text-sm text-gray-700 break-words">{codeGenerate}</p>
      <br></br>
      <button
        class={`mt-2 py-2 px-4 text-xs bg-gray-500 hover:bg-gray-600 text-white rounded ${
          copied ? "cursor-default" : ""
        }`}
        onClick$={() => copyCodeToClipboard(codeGenerate)}
      >
        {copied.value ? "Copied!" : "Copy code"}
      </button>
    </div>
  )
})
