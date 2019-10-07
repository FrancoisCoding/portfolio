import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Index extends React.Component {
  render() {
    return (
      <BaseLayout>
        <div className="container">
          <Button color="danger">Danger!</Button>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
