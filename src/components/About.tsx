import aboutImg from '../../images/aman_avatar.jpg'

const About: React.FC = () => {
    return (
        <section className="about reveal" id="about">
            <div className="about-info">
                <div className="img-about">
                    <img src={aboutImg} alt="Aman Yadav" />
                </div>
                <div className="info-text">
                    <h5>@AmanYdv77</h5>
                    <p>Backend Engineer • Distributed Systems • Applied ML Specialist</p>
                </div>
            </div>
            <h3>ABOUT ME</h3>
            <div className="about-info2">
                <div className="about-text">
                    <p>
                        I am an undergraduate student in <span className="magnify-text" data-text="Mathematics & Computing">Mathematics and Computing</span>,
                        specializing in <span className="magnify-text" data-text="Backend Engineering">Backend Engineering</span>, <span className="magnify-text" data-text="Distributed Systems">Distributed Systems</span>, and <span className="magnify-text" data-text="Applied ML">applied machine learning</span>. My work centers on architecting
                        high-concurrency, data-driven platforms backed by robust asynchronous processing and clean API design.<br />
                        <br />
                        During my internship at <span className="magnify-text" data-text="Maruti Suzuki">Maruti Suzuki</span>, I developed industrial-grade vehicle telematics pipelines, handling large-scale sensor feeds, trip segmentation, and driver analytics. I am the architect of <span className="magnify-text" data-text="EduPulse">EduPulse</span> (an academic early-warning & student performance forecasting platform) and <span className="magnify-text" data-text="PingGuard">PingGuard</span> (a distributed uptime monitoring engine using <span className="magnify-text" data-text="FastAPI">FastAPI</span>, <span className="magnify-text" data-text="Redis">Redis</span>, and <span className="magnify-text" data-text="Celery">Celery</span>).<br />
                        <br />
                        I am passionate about applying mathematical rigor to real-world engineering challenges, optimizing complex computational systems, and delivering production-ready software.
                    </p>
                </div>
                <div className="photo-container">
                    <img src={aboutImg} alt="Aman Yadav" />
                    <span className="tape tape1"></span>
                    <span className="tape tape2"></span>
                </div>
            </div>
        </section>
    )
}

export default About
