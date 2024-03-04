import Head from "next/head";
import { Container, Row, Col, Button } from "react-bootstrap";
import img from "../public/infused-agency.webp";

import InnerHero from "../components/innerHero/innerHero";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Infused Agency | Lincoln Medical Centre</title>
        <meta
          name="description"
          content="Infused Agency built Lincoln Medical Centre's new website design. Contact us today for a free quote."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Infused Agency" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="6">
              <h2>Website Design, Development &amp; Search Engine Optimization</h2>
              <p>
                Since our founding in 2013, we've assisted a wide range of businesses in St. Catharines, Niagara, and
                beyond, from local enterprises to large corporations. Our expertise spans website design, digital
                marketing, SEO, WordPress development, and e-commerce.
                <br />
                <br />
                We've played a crucial role in boosting our clients' online presence, fueling business growth through
                strategic digital solutions. Whether optimizing websites for search engines, creating visually appealing
                WordPress sites, or implementing effective e-commerce platforms, our team consistently delivers results.
                <br />
                <br />
                Our commitment to local businesses is evident in a diverse portfolio of success stories. We've not only
                increased website traffic but also crafted modern, responsive websites aligned with contemporary design
                trends. Our tailored solutions have significantly boosted revenue for businesses of all sizes.
                <br />
                <br />
                Since 2013, our journey has been defined by a passion for empowering businesses through comprehensive
                digital strategies, transforming online landscapes, and driving success in the competitive digital
                realm.
                <br />
                <br />
                <a href="https://infused.agency" target="_blank">
                  Niagara Web Design
                </a>{" "}
                Website by Infused Agency
              </p>
            </Col>
            <Col lg="6">
              <Image className="img-fluid" src={img} alt="infused agency" />
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h2>Why Infused Agency?</h2>
              <h3>Proven Excellence in Web Design</h3>
              <p>
                Why settle for a web design company that doesn't elevate your business? Choose Infused Agency, where our
                skilled team excels at crafting impactful websites and implementing strategies for sustainable business
                growth. With a track record dating back to 2013, we've consistently propelled numerous businesses to
                success. Rest assured, our expertise is geared to make a positive impact.
              </p>

              <h3>Unparalleled Web Design Craftsmanship</h3>
              <p>
                Amidst the multitude of web designers, our approach stands out. We meticulously handcraft each website,
                steering clear of ready-made templates. Our focus is on ensuring security, exceptional speed, and a
                distinctive appearance for every site. By employing the latest techniques, our websites stand out for
                their top-notch quality and uniqueness.
              </p>

              <h3>Swift and Punctual Delivery</h3>
              <p>
                We understand the urgency of your business needs, prioritizing swift and effective website development.
                From our initial discussions to presenting the design and ultimately launching the website, we maintain
                constant communication to ensure seamless alignment. Addressing your queries promptly, we guarantee that
                your website is ready precisely when you need it. Timely delivery is our commitment!
              </p>
              <h2>Schedule A Free Consulation</h2>

              <p>
                Click the link below to schedule your free consultation in order to get a free website or SEO quote:
              </p>
              <a href="https://calendly.com/infused-agency/project-discovery/" target="_blank">
                <Button>Free Consulation</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
