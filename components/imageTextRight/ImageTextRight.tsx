import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "../imageTextRight/ImageTextRight.module.scss";

interface Props {
  image: any;
  bgColor: string;
  altText: string;
  title: string;
  text: string;
  btnText: string;
  btnLink: string;
  targetValue: string;
}

const ImageTextRight: React.FC<Props> = ({
  image,
  bgColor,
  altText,
  title,
  text,
  btnText,
  btnLink,
  targetValue,
}) => {
  return (
    <>
      <section
        className={styles.imageTextRight}
        style={{ backgroundColor: bgColor }}
      >
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="5">
              <Image className="img-fluid" src={image} alt={altText} />
            </Col>
            <Col lg={{ span: 6, offset: 1 }}>
              <h2>{title}</h2>
              <p>{text}</p>
              <Link href={btnLink} target={targetValue}>
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
