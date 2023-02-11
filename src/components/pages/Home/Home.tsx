import Head from 'next/head';
import Hero from './Sections/Hero/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Khod Khat</title>
        <meta name="description" content="Create article in English and Farsi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="flex flex-col items-center justify-center w-full min-h-[90vh] px-5">
        <Hero />
      </section>
      <section>info</section>
      <section>capabilities</section>
    </>
  );
}
