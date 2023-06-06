export interface InfoEpisode {
  count: number
  pages: number
  next: string
  prev?: any
}

export interface Episode {
  error: boolean
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export interface EpisodeList {
  error: boolean
  info: InfoEpisode
  results: Episode[]
}
