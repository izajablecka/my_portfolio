import ja from "../../img/img.png"

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src={ja} alt="Me" style={{ width: "50%", height: "auto"}}/>
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <h1 className="skills-section--heading">About Me</h1>
                    <p className="hero--section-description">
                       something about me
                    </p>
                    <p className="hero--section-description">
                       more about me...
                    </p>
                </div>
            </div>
        </section>
    );
}