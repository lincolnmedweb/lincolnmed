import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Lincoln Medical Center</title>
        <meta
          name="description"
          content="Lincoln Medical Centre is comprised of a team of family physicians, nurses and support staff that work together to ensure that excellent quality patient care is provided in a respectful and compassionate environment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Privacy Policy" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                This policy outlines how we protect the privacy of your personal
                information and medical record. Everyone working for this office
                is required to adhere to the protections described in this
                policy. If you have any questions regarding our privacy
                practices, please contact your doctor or the office manager.
              </p>
              <p>
                <strong>
                  Collection, Use and Disclosure of Personal Information
                </strong>
              </p>
              <p>What personal information do we collect?</p>
              <p>We collect the following personal information:</p>
              <ul>
                <li>
                  Identification and Contact information (name, address, date of
                  birth, emergency contact, etc)
                </li>
                <li>
                  Billing information (provincial plan and/or private insurer)
                </li>
                <li>
                  Health information (symptoms, diagnosis, medical history, test
                  results, reports and treatment, record of allergies,
                  prescriptions, etc)
                </li>
              </ul>
              <p>
                <strong>Limits on Collection</strong>
              </p>
              <p>
                We collect only the information that is required to provide
                care, administrate the care that is provided, and communication
                with you. We do not collect any other information, or allow
                information to be used for other purposes, without your express
                (i.e., verbal or written) consent – except where authorized to
                do so by law.
              </p>
              <p>
                <strong>
                  When and to whom do we disclose personal information?
                </strong>
              </p>
              <p>
                Implied consent for provision of care: By virtue of seeking care
                from us, your consent is implied (i.e., assumed) for your
                information to be used by this office to provide you with care,
                and to share with other providers involved in your care.
                <br />
                <br />
                Disclosure to other health care providers: Relevant health
                information is shared with other providers involved in your
                care, including (but not limited to) other physicians and
                specialists, pharmacists, lab technicians, nutritionists,
                physiotherapists and occupational therapists.
                <br />
                <br />
                Disclosures authorized by law: There are limited situations
                where we are legally required to disclose your personal
                information without your consent. These situations include (but
                are not limited to) billing provincial health plans, reporting
                infectious diseases and fitness to drive, or by court order.
              </p>
              <p>
                <strong>Disclosures to all other parties:</strong>
              </p>
              <p>
                Your express consent is required before we will disclose your
                information to third parties for any purpose other than to
                provide you with care or unless we are authorized to do so by
                law. Examples of disclosures to other parties requiring your
                express consent include (but are not limited to) third party
                medical examinations, enrolment in clinical (research) trials
                and provision of charts of chart summaries to insurance
                companies.
              </p>
              <p>
                <strong>Can you withdraw consent?</strong>
              </p>
              <p>
                You can withdraw your consent to have your information shared
                with other health care providers or other parties at any time,
                except where the disclosure is authorized by law. However,
                please discuss this with your physician first.
              </p>
              <p>
                <strong>Patient Rights</strong>
              </p>
              <p>
                How do you access the personal information held by this office?
                <br />
                <br />
                You have the right to access your record in a timely manner. If
                you request a copy of your record, one will be provided to you
                at a reasonable cost. If you wish to view the original record,
                one of our staff must be present to maintain the integrity of
                the record, and a reasonable fee may be charged for this access.
                Patient requests for access to the medical record can be made
                verbally or in writing to myself or my staff (see office address
                at top of Policy).
              </p>
              <p>
                <strong>Limitations on access</strong>
              </p>
              <p>
                In extremely limited circumstances you may be denied access to
                your records, but only if providing access would create a
                significant risk to you or another person.
              </p>
              <p>
                <strong>What if you feel your record is not accurate?</strong>
              </p>
              <p>
                We make every effort to ensure that all of your information is
                recorded accurately. If an inaccuracy is identified, you can
                request that a note be made to reflect this on your file.
              </p>
              <p>
                <strong>How Secure is your information?</strong>
              </p>
              <p>
                Safeguards are in place to protect the security of your
                information. These safeguards include a combination of physical,
                technological and administrative security measures that are
                appropriate to the sensitivity of the information. These
                safeguards are aimed at protecting personal information against
                loss or theft, as well as unauthorized access, disclosure,
                copying, use or modification.
              </p>
              <p>
                <strong>What is our communication policy?</strong>
              </p>
              <p>
                We protect personal information regardless of the format.
                Specific procedures are in place for communicating by phone,
                email, fax, and post/courier.
              </p>
              <p>
                <strong>How long do we keep information?</strong>
              </p>
              <p>
                We retain patient records as required by law and professional
                regulations.
              </p>
              <p>
                <strong>
                  How do we dispose of information when it is no longer
                  required?
                </strong>
              </p>
              <p>
                When information is no longer required, it is destroyed in a
                secure manner, according to set procedures that govern the
                storage and destruction of personal information.
              </p>
              <p>
                <strong>Complaints Process</strong>
              </p>
              <p>
                If you believe that this office has not replied to your access
                request or has not handled your personal information in a
                reasonable manner, please address your concerns first with your
                doctor.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
