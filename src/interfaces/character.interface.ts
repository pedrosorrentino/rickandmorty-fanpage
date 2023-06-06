export interface CharacterList {
  error: any
  info: Info
  results: Character[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: string
}

export interface Character {
  error: any
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created?: Date
}

export interface Location {
  name: string
  url: string
}
