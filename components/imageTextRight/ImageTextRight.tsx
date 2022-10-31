import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "../imageTextRight/ImageTextRight.module.scss";

interface Props {
  image: string;
  altText: string;
  title: string;
  text: string;
  btnText: string;
  btnLink: string;
}

const ImageTextRight: React.FC<Props> = ({
  image,
  altText,
  title,
  text,
  btnText,
  btnLink,
}) => {
  return (
    <>
      <section className={styles.imageTextRight}>
        <Container>
          <Row>
            <Col lg="6">
              <Image className="img-fluid" src={image} alt={altText} />
            </Col>
            <Col lg="6">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link href={btnLink}>
                <Button>{btnText}</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ImageTextRight;
