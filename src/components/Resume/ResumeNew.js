import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import CertificationCard from "./CertificationCard";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  const certifications = [
    {
      id: 1,
      title: "Certification Title 1",
      issuer: "Issuer Name",
      description: "Add your certification description here.",
      certificateLink: "#",
    },
    {
      id: 2,
      title: "Certification Title 2",
      issuer: "Issuer Name",
      description: "Add your certification description here.",
      certificateLink: "#",
    },
    {
      id: 3,
      title: "Certification Title 3",
      issuer: "Issuer Name",
      description: "Add your certification description here.",
      certificateLink: "#",
    },
  ];

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Certifications Section */}
        <Row style={{ justifyContent: "center", marginTop: "50px" }}>
          <h1 className="heading">Certifications</h1>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          {certifications.map((cert) => (
            <Col md={4} className="project-card" key={cert.id}>
              <CertificationCard
                title={cert.title}
                issuer={cert.issuer}
                description={cert.description}
                certificateLink={cert.certificateLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
