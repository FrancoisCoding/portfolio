import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import { Row, Col } from "reactstrap";

class Cv extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage title="Preview of CV" className="cv-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className="cv-title">
                <a
                  download="francois_cv.pdf"
                  className="btn btn-primary"
                  href="/static/francois_cv.pdf"
                >
                  Download
                </a>
              </div>
              <iframe
                style={{ width: "100%", height: "800px" }}
                src="/static/francois_cv.pdf"
              ></iframe>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Cv;
