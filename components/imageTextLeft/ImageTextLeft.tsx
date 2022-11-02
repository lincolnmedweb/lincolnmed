import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "../imageTextLeft/ImageTextLeft.module.scss";

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
      <section className={styles.imageTextLeft}>
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="7">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link href={btnLink}>
                <Button>{btnText}</Button>
              </Link>
            </Col>
            <Col lg="5">
              <Image className="img-fluid" src={image} alt={altText} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ImageTextLeft;
