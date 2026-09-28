import heroImg from '../../images/iimg.avif'

const Hero: React.FC = () => {
    return (
        <section className="home" id="home">
            <p className="home-p"><span className="home-s">•</span> Mathematics & Computing</p>
            <div className="home-container">
                <div className="home-section">
                    <div className="info-home">
                        <h1>Aman Yadav</h1>
                        <h3>
                            • Backend Engineer <br />
                            • Distributed Systems <br />
                            • Ex-Intern @ Maruti Suzuki
                        </h3>
                        <div className="info-p">
                            <p>I engineer high-concurrency backend services, asynchronous queues, and data platforms.</p>
                            <p>Hands-on production experience with FastAPI, Django, Redis/Celery, Docker, and ML pipelines.</p>
                        </div>
                        <div className="info-p2">
                            <p><i className="fa-solid fa-location-dot"></i> India</p>
                            <p><i className="fa-solid fa-briefcase"></i> Open to opportunities</p>
                        </div>

                        <div className="hhr">
                            <hr />
                        </div>
                        <div className="follow">
                            <p className="followw">Follow me:</p>
                            <ul>
                                <li>
                                    <a href="https://github.com/AmanYdv77" target="_blank" rel="noreferrer noopener">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/Aman-Yadav77/" target="_blank" rel="noreferrer noopener">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/Aman-Yadav77/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="resume-btn"
                        >
                            <i className="fa-solid fa-eye"></i> Connect / Resume
                        </a>
                    </div>
                </div>
                <img src={heroImg} alt="Aman Yadav" />
            </div>
        </section>
    )
}

export default Hero
