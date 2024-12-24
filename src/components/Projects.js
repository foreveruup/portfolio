import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import back1 from "../assets/img/back1.png";
import back2 from "../assets/img/back2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const tabOneProjects = [
        {
            title: "Gym Admin Panel",
            description: "API and Database Design",
            imgUrl: back1,
        },
        {
            title: "Uni Admin Panel",
            description: "API and Database Design",
            imgUrl: back2,
        },
    ];

    const tabTwoProjects = [
        {
            title: "Ophtalmology",
            description: "Design & Development",
            imgUrl: projImg1,
            link: "https://oculoplastica.kz/"
        },
        {
            title: "Marketing Agency",
            description: "Design & Development",
            imgUrl: projImg2,
            link: "https://qdigit.agency/landing"
        },
        {
            title: "Residential Complex «Baqsaray»",
            description: "Design & Development",
            imgUrl: projImg3,
            link: "https://baqsaray.kz/"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>I create modern digital solutions using cutting-edge technologies. Each project
                                        combines creative design, functionality and high performance.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills"
                                             className="nav-pills mb-5 justify-content-center align-items-center"
                                             id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Backend Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Fullstack Projects</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp"
                                                     className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        tabOneProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        tabTwoProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}