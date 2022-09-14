export interface IapiBook {
  readonly url: string
  readonly name: string
  readonly isbn: string
  readonly numberOfPages: number
  readonly characters: Array<string>
  readonly povCharacters: Array<string>
  readonly released: Date
}