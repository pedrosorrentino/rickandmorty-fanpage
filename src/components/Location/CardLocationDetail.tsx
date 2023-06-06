import { component$ } from "@builder.io/qwik"
import { ImageResident } from "./ImageResident"
import { GenerateImage } from "../StableDiffusion/GenerateImage"
import type { LocationOne } from "~/interfaces"
import { ToastCard } from "../ToastCard"

export interface CardLocationDetailProps {
  location: LocationOne
}

export const CardLocationDetail = component$<CardLocationDetailProps>(
  ({ location }) => {
    const templateText = [
      `This extraordinary place, known as ${location.name}, stands out for its unique ${location.type} and its enigmatic dimension. Prepare to be immersed in a landscape filled with intrigue and awe ${location.dimension}. Embark on a journey to explore every hidden corner of this captivating location and embrace the thrilling adventure that awaits you.`,
      `Welcome to ${location.name}, a remarkable destination characterized by its exceptional ${location.type} and its elusive dimension. Brace yourself to delve into a breathtaking landscape of mystery and wonder ${location.dimension}. Uncover the secrets that lie within every nook and cranny of this mesmerizing place and surrender to the thrill of the unknown adventure that awaits.`,
      `Prepare to enter a realm like no other, known as ${location.name}, renowned for its extraordinary ${location.type} and its enigmatic dimension. Immerse yourself in a mesmerizing landscape filled with endless mystery and awe ${location.dimension}. Embrace the journey that awaits as you explore every captivating corner of this enigmatic place, allowing curiosity to guide you.`,
      `Step into the realm of ${location.name}, a place of wonder defined by its intriguing ${location.type} and its mysterious dimension. Lose yourself in a captivating landscape that teems with enigma and marvel ${location.dimension}. Embrace the thrill of exploration as you traverse every hidden crevice of this enigmatic destination, where adventure beckons at every turn.`,
      `Behold ${location.name}, an extraordinary location distinguished by its mesmerizing ${location.type} and its unknown dimension. Prepare to be enchanted by a landscape veiled in intrigue and splendor ${location.dimension}. Allow yourself to wander through the captivating allure of this enigmatic place, unveiling the secrets that await your discovery.`,
    ]
    const randomIndex = Math.floor(Math.random() * templateText.length)
    const showAleatoryText = templateText[randomIndex]

    return (
      <>
        {location.error && (
          <ToastCard
            title="Location not found"
            desc="This location not exist in database"
            url="/locations"
          />
        )}
        {!location.error && (
          <div class="fade-in p-8 tracking-wider shadow-xl rounded-xl m-10 sm:mx-auto sm:max-w-5xl">
            <div class="grid md:grid-cols-2 justify-items-center gap-5 ">
              <div>
                <GenerateImage props={showAleatoryText} />
              </div>
              <div class="py-5">
                <p class="border-b-2 border-b-yellow-300 hover:text-rose-500 transition-colors duration-300">
                  {location.dimension}
                </p>

                <div class="flex justify-between items-center">
                  <h1 class="sm:text-4xl font-bold mt-2">{location.name}</h1>
                  <p
                    class={`sm:text-lg px-2 font-semibold rounded-md capitalize`}
                  >
                    {location.type}
                  </p>
                </div>
                <p class="my-10 text-justify">{showAleatoryText}</p>
              </div>
            </div>

            <div>
              <h2 class="inline text-2xl font-bold border-b-2 border-b-yellow-300">
                Residents of the planet
              </h2>
              <ImageResident location={location} />
            </div>
          </div>
        )}
      </>
    )
  }
)
