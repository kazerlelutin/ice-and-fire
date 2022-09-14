import { IapiBook } from "../types/apiBook.interface";
import { IBook } from "../types/book.interface";
import urlSplitter from "./urlSplitter";

export default function bookParser(book:IapiBook):IBook{

  return {
    id:urlSplitter(book.url),
    isbn: book.isbn,
    name: book.name,
    released: book.released,
    numberOfPages: book.numberOfPages,
    //merge all type of characters, just IDs
    characters: [...book.characters, ...book.povCharacters].reduce(
      (previousValue, currentValue) => {
        const 
        characterId = urlSplitter(currentValue),
        isExist = previousValue.find((id) => id === characterId)
        if (!isExist) previousValue.push(characterId)
        return previousValue
      },
      []
    ),
  }
}