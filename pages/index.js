import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next App in Hapi.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          引入的项目 <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
