import Head from 'next/head';
import Banner from './Sections/Hero/Banner';
import InputField from './Sections/Hero/InputField';

export default function Home() {
  return (
    <>
      <Head>
        <title>Khod Khat</title>
        <meta name="description" content="Create article in English and Farsi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <Banner />
        <InputField />
      </section>
      <section>info</section>
      <section>capabilities</section>
    </>
  );
}
