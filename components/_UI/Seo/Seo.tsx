import Head from 'next/head'

interface Props {
  readonly title?: string
}

export default function Seo({ title = 'Ice And Fire' }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="It's my technical test !" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
