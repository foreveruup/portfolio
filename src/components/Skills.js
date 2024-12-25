import reactIcon from "../assets/img/react.svg";
import vueIcon from "../assets/img/vue.svg";
import mongodbIcon from "../assets/img/mongodb.svg";
import pythonIcon from "../assets/img/python.svg";
import nodeIcon from "../assets/img/nodejs.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Throughout my journey, I have mastered a variety of tools and technologies <br></br> that enable me to create functional and innovative projects.</p>
                            <Carousel responsive={responsive} infinite={true}
                                      className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={nodeIcon} alt="NodeJS"/>
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={reactIcon} alt="ReactJS"/>
                                    <h5>ReactJS</h5>
                                </div>
                                <div className="item">
                                    <img src={vueIcon} alt="Vue JS"/>
                                    <h5>Vue JS</h5>
                                </div>
                                <div className="item">
                                    <img src={pythonIcon} alt="Python"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={mongodbIcon} alt="MongoDB"/>
                                    <h6>MongoDB</h6>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt=""/>
        </section>
    )
}