export interface IBook {
  readonly id: string
  readonly name: string
  readonly isbn: string
  readonly numberOfPages: number
  readonly characters: Array<string>
  readonly released: Date
  readonly favorite?: boolean
}