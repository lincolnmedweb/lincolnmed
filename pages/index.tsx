import Head from "next/head";

import Hero from "../components/hero/Hero";
import ImageTextRight from "../components/imageTextRight/ImageTextRight";

import clinicImage from "../public/our-clinic.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lincoln Medical Center</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero
        title="Lincoln Medical Centre"
        subTitle="Family Health Organization"
        btnText="HealthMyself Login"
        btnLink="#"
      />
      <ImageTextRight
        image={clinicImage}
        altText="our clinic"
        title="Our Clinic"
        text="Lincoln Medical Centre is comprised of a team of family physicians, nurses and support staff that work together to ensure that excellent quality patient care is provided in a respectful and compassionate environment."
        btnText="Learn More"
        btnLink="/about/"
      />
    </>
  );
}
