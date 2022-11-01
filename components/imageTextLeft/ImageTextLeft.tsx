import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "../ImageTextLeft/ImageTextLeft.module.scss";

interface Props {
  image: any;
  altText: string;
  title: string;
  text: string;
  btnText: string;
  btnLink: string;
}

const ImageTextLeft: React.FC<Props> = ({
  image,
  altText,
  title,
  text,
  btnText,
  btnLink,
}) => {
  return (
    <>
      <section className={styles.ImageTextLeft}>
        <Container>
          <Row>
            <Col lg="6">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link href={btnLink}>
                <Button>{btnText}</Button>
              </Link>
            </Col>
            <Col lg="6">
              <Image className="img-fluid" src={image} alt={altText} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ImageTextLeft;
