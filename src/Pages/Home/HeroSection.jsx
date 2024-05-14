import photo1 from "../../img/img_theme.png"
import {Link} from "react-scroll";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Izabela</p>
                    <h1 className="hero--section--tile">
                        <span className="hero--section--title--color">Frontend</span>
                        {" "}<br/> Developer
                    </h1>
                    <p>I embarked on my programming journey in 2023 and haven't looked back since.
                        <br/> Constantly learning and evolving, I'm passionate about coding and eager to explore new horizons every day.
                    </p>
                </div>
                <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Contact"
                    className="btn btn-outline-primary-hero"
                >
                    Let's get in touch!
                </Link>
            </div>
            <div className="hero--section--img">
                <img src={photo1} alt="profilowe" style={{ width: "50%", height: "auto"}} />
            </div>
        </section>
    )
}