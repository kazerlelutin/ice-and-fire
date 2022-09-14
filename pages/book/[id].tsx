import Book from "../../components/_page_related/Book/Book"

interface Props {
  readonly id: string
}

export default function HomePage({id}:Props) {
  return <Book id={id}/>
}

export async function getServerSideProps({ req, params }) {
  return  { props: { id: params.id } }
}
