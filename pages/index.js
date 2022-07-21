import React from "react";
import Typed from "react-typed";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import { Link } from "../routes";

class Index extends React.Component {
  // Changed file name
  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false,
    };

    this.roles = [
      "Senior Developer",
      "SEO Optimization",
      "Team Player",
      "Freelancer",
      "Back End Developer",
      "Detail Oriented",
    ];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping,
      });
    }, 5000);
  }

  render() {
    const { isFlipping } = this.state;

    return (
      <BaseLayout
        className={`cover ${isFlipping ? "cover-1" : "cover-0"}`}
        headerType="index"
        title="Isaiah Francois - Portfolio"
      >
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index-min.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <Link to="/projects">
                  <div className="hero-section work">
                    <div
                      className={`flipper ${isFlipping ? "isFlipping" : ""}`}
                    >
                      <div className="front">
                        <div className="hero-section-content">
                          <h2> Full Stack Web Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history.
                          </div>
                        </div>
                        <img
                          alt="Guy programming welcome picture"
                          className="image"
                          src="/static/images/section-1-min.png"
                        />
                        <div className="shadow-custom">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>
                      <div className="back">
                        <div className="hero-section-content">
                          <h2> Get Your Projects Done </h2>
                          <div className="hero-section-content-intro">
                            Profesional and top quality service in web
                            development.
                          </div>
                        </div>
                        <img
                          alt="Guy programming welcome picture"
                          className="image"
                          src="/static/images/section-2-min.png"
                        />
                        <div className="shadow-custom shadow-custom-2">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Isaiah Francois. Get
                    informed, collaborate and discover projects I worked on
                    throughout the years!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />

                <div className="hero-welcome-bio">
                  <Link to="/projects">
                    <h2 className="work strong">
                      Let's take a look at my work.
                    </h2>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
