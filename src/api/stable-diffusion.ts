export const stableDiffusion = async (prompt: string) => {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1-base",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify(prompt),
      }
    )
    const result = await response.blob()
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        resolve(reader.result)
      }
      reader.onerror = reject
      reader.readAsDataURL(result)
    })
  } catch (error) {
    console.log("ERROR STABLEDIFFUSION", error)
  }
}
