import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

class Projects extends React.Component {
  render() {
    return (
      <BaseLayout title="Isaiah Francois - Work">
        <BasePage className="projects-page">
          <div>
            <Card>
              <CardImg
                top
                width="60%"
                src="/static/images/DevChat.png"
                alt="DevChat Thumbnail"
              />
              <CardBody>
                <CardTitle className="bold-font">DevChat</CardTitle>
                <CardText>
                  Full-stack chat application with React, Redux, Firebase 5, and
                  Semantic UI React
                </CardText>
                <Button
                  color="primary"
                  href="https://react-slack-clone-bed12.web.app/"
                  target="_blank"
                >
                  View Project
                </Button>{" "}
                <Button
                  color="secondary"
                  href="https://github.com/FrancoisCoding/Slack-Clone"
                  target="_blank"
                >
                  Code
                </Button>{" "}
                <CardText>
                  <small className="text-muted">
                    ReactJS | Redux | Firebase | Semantic UI | Moment |
                    Emoji-Mart
                  </small>
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="60%"
                src="/static/images/AI.jpg"
                alt="AI Thumbnail"
              />
              <CardBody>
                <CardTitle className="bold-font">AI Application</CardTitle>
                <CardText>
                  Full stack AI application featuring AI intelligence that can
                  conversate, provide latest news updates, and even do some
                  amazing calculations.
                </CardText>
                <Button
                  color="primary"
                  href="https://ai-app.netlify.app/"
                  target="_blank"
                >
                  View Project
                </Button>{" "}
                <Button
                  color="secondary"
                  href="https://github.com/FrancoisCoding/AI-News-App"
                  target="_blank"
                >
                  Code
                </Button>{" "}
                <CardText>
                  <small className="text-muted">ReactJS | Alan</small>
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="60%"
                src="/static/images/coachme-min.png"
                alt="CoachMe Thumbnail"
              />
              <CardBody>
                <CardTitle className="bold-font">CoachMe Health</CardTitle>
                <CardText>
                  Patient first non-profit organization dedicated to improving
                  the health of low-income Americans with diabetes and heart
                  disease with health coaching for those who need it most.
                </CardText>
                <Button
                  color="primary"
                  href="https://app.coachmehealth.org/register"
                  target="_blank"
                >
                  View Project
                </Button>{" "}
                <Button
                  color="secondary"
                  href="https://www.coachmehealth.org/"
                  target="_blank"
                >
                  Official Page
                </Button>{" "}
                <CardText>
                  <small className="text-muted">
                    ReactJS | Redux | SASS | Twillio | Cron Jobs | ChartJS |
                    Cypress
                  </small>
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="90%"
                src="/static/images/gamecenter-min.png"
                alt="Francois Games Thumbnail"
              />
              <CardBody>
                <CardTitle className="bold-font">Francois Games</CardTitle>
                <CardText>Platform where game information is stored.</CardText>
                <Button
                  color="primary"
                  href="https://francois-game-center.netlify.com/"
                  target="_blank"
                >
                  View Project
                </Button>{" "}
                <Button
                  color="secondary"
                  href="https://github.com/FrancoisCoding/francois-games"
                  target="_blank"
                >
                  Code
                </Button>{" "}
                <CardText>
                  <small className="text-muted">ReactJS | Bootstrap</small>
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="90%"
                src="/static/images/reactmovie-min.png"
                alt="React Movies Thumbnail"
              />
              <CardBody>
                <CardTitle className="bold-font">React Movies</CardTitle>
                <CardText>
                  An IMDB style real world Web Application in ReactJS.
                </CardText>
                <Button
                  color="primary"
                  href="https://reactmovies-rmdb.netlify.com/"
                  target="_blank"
                >
                  View Project
                </Button>{" "}
                <Button
                  color="secondary"
                  href="https://github.com/FrancoisCoding/react-rmdb"
                  target="_blank"
                >
                  Code
                </Button>{" "}
                <CardText>
                  <small className="text-muted">ReactJS | Bootstrap</small>
                </CardText>
              </CardBody>
            </Card>
          </div>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Projects;
