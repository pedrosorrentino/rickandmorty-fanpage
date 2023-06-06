import { component$ } from "@builder.io/qwik"
import type { LocationOne } from "~/interfaces"

export interface CardLocationTextTemplateProps {
  location: LocationOne
}

export const CardLocationTextTemplate =
  component$<CardLocationTextTemplateProps>(({ location }) => {
    const templateText = [
      `This extraordinary place, known as ${location.name}, stands out for its unique ${location.type} and its enigmatic dimension. Prepare to be immersed in a landscape filled with intrigue and awe ${location.dimension}. Embark on a journey to explore every hidden corner of this captivating location and embrace the thrilling adventure that awaits you.`,
      `Welcome to ${location.name}, a remarkable destination characterized by its exceptional ${location.type} and its elusive dimension. Brace yourself to delve into a breathtaking landscape of mystery and wonder ${location.dimension}. Uncover the secrets that lie within every nook and cranny of this mesmerizing place and surrender to the thrill of the unknown adventure that awaits.`,
      `Prepare to enter a realm like no other, known as ${location.name}, renowned for its extraordinary ${location.type} and its enigmatic dimension. Immerse yourself in a mesmerizing landscape filled with endless mystery and awe ${location.dimension}. Embrace the journey that awaits as you explore every captivating corner of this enigmatic place, allowing curiosity to guide you.`,
      `Step into the realm of ${location.name}, a place of wonder defined by its intriguing ${location.type} and its mysterious dimension. Lose yourself in a captivating landscape that teems with enigma and marvel ${location.dimension}. Embrace the thrill of exploration as you traverse every hidden crevice of this enigmatic destination, where adventure beckons at every turn.`,
      `Behold ${location.name}, an extraordinary location distinguished by its mesmerizing ${location.type} and its unknown dimension. Prepare to be enchanted by a landscape veiled in intrigue and splendor ${location.dimension}. Allow yourself to wander through the captivating allure of this enigmatic place, unveiling the secrets that await your discovery.`,
    ]
    const randomIndex = Math.floor(Math.random() * templateText.length)
    const showAleatoryText = templateText[randomIndex]

    return <p class="my-10 text-justify">{showAleatoryText}</p>
  })
