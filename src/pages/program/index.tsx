// pages/program/index.tsx
import Link from "next/link";
import Head from "next/head";

export default function Program() {
  return (
    <>
      <Head>
        <title>Program | Graphic Art Festival</title>
        <meta
          name="description"
          content="Explore our program featuring exhibitions, symposiums, and public events at the Graphic Art Festival."
        />
      </Head>
      <main>
        <h1>Our Program</h1>
        <p>
          Discover the various activities and events happening during the
          Graphic Art Festival.
        </p>
        <ul>
          <li>
            <Link href="/program/exhibition">Exhibition</Link>
          </li>
          <li>
            <Link href="/program/symposium">Symposium</Link>
          </li>
          <li>
            <Link href="/program/public-program">Public Program</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
