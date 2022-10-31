import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "../hero/Hero.module.scss";

interface Props {
  title: string;
  subTitle: string;
  btnText: string;
  btnLink: string;
}

const Hero: React.FC<Props> = ({ title, subTitle, btnLink, btnText }) => {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <Row>
            <div className="box">
              <Col lg="12">
                <h1 className={styles.hero__title}>{title}</h1>
                <h2 className={styles.hero__subtitle}>{subTitle}</h2>
                <Link href={btnLink}>
                  <Button className={styles.hero__button}>{btnText}</Button>
                </Link>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
