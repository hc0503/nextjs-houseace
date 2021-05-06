import Link from 'next/link'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>My First Post</title>
      </Head>
      Hello World.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
