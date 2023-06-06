import type {
  Character,
  CharacterList,
  Episode,
  EpisodeList,
  LocationList,
  LocationOne,
} from "~/interfaces"

export const fetchAllCharacters = async (
  page: number
): Promise<CharacterList> => {
  const baseApiUrl = "https://rickandmortyapi.com/api/character"
  const urlWithPage = page ? `${baseApiUrl}?page=${page}` : baseApiUrl
  const response = await fetch(urlWithPage)

  if (!response.ok) {
    return {
      error: true,
      info: { count: 0, pages: 0, next: "", prev: "" },
      results: [],
    }
  }
  const data = (await response.json()) as CharacterList
  return data
}

export const fetchNameCharacter = async (id: number): Promise<Character> => {
  try {
    const baseApiUrl = `https://rickandmortyapi.com/api/character/${id}`
    const response = await fetch(baseApiUrl)
    const data = (await response.json()) as Character
    return data
  } catch (error) {
    throw new Error("Error in fetchNameCharacter")
  }
}

export const fetchMultipleNameCharacter = async (id: string) => {
  try {
    const baseApiUrl = `https://rickandmortyapi.com/api/character/${id}`
    const response = await fetch(baseApiUrl)
    const data = (await response.json()) as Character[]
    return data
  } catch (error) {
    return []
  }
}

export const fetchAllLocation = async (
  page: number = 1
): Promise<LocationList> => {
  try {
    const baseApiUrl = "https://rickandmortyapi.com/api/location"
    const urlWithPage = page ? `${baseApiUrl}?page=${page}` : baseApiUrl
    const response = await fetch(urlWithPage)
    const data = (await response.json()) as LocationList
    return data
  } catch (error) {
    return {
      error: true,
      info: { count: 0, pages: 0, next: "", prev: "" },
      results: [],
    }
  }
}

export const fetchOneLocation = async (id: number): Promise<LocationOne> => {
  try {
    const baseApiUrl = `https://rickandmortyapi.com/api/location/${id}`
    const response = await fetch(baseApiUrl)

    const data = await response.json()
    if (data.error) throw new Error("Error in fetchOneLocation")
    return data
  } catch (error) {
    return {
      error: true,
      id: 0,
      name: "",
      type: "",
      dimension: "",
      residents: [],
      url: "",
      created: "",
    }
  }
}

export const fetchAllEpisodes = async (
  id?: string,
  page?: string
): Promise<EpisodeList> => {
  try {
    const baseApiUrl = `https://rickandmortyapi.com/api/episode/${id}`
    const urlWithPage = page ? `${baseApiUrl}?page=${page}` : baseApiUrl
    const response = await fetch(urlWithPage)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error("Error in fetchAllEpisodes")
  }
}

export const fetchOneEpisode = async (id?: string): Promise<Episode> => {
  try {
    const baseApiUrl = `https://rickandmortyapi.com/api/episode/${id}`
    const response = await fetch(baseApiUrl)
    const data = await response.json()
    if (data.error) throw new Error("Error in fetchOneEpisode")
    return data
  } catch (error) {
    return {
      error: true,
      id: 0,
      name: "",
      air_date: "",
      episode: "",
      characters: [],
      url: "",
      created: "",
    }
  }
}
