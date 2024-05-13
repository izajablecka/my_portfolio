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
                <button className="btn btn--primary">Let's get in touch!</button>
            </div>
            <div className="hero--section--img">
                <img src="" alt=""/>
            </div>
        </section>
    )
}