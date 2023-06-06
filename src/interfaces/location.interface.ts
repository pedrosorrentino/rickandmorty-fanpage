interface Info {
  count: number
  pages: number
  next: string
  prev?: any
}

export interface LocationOne {
  error: boolean
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

export interface LocationList {
  error: boolean
  info: Info
  results: LocationOne[]
}
