import telematicsImg from '../../images/telematics.jpg'

interface ExperienceDetail {
    company: string
    department: string
    role: string
    period: string
    location: string
    projectTitle: string
    projectSummary: string
    highlights: string[]
    tags: string[]
    links: { href: string; icon: string; label: string }[]
    image: string
}

const experienceData: ExperienceDetail = {
    company: 'Maruti Suzuki India Limited',
    department: 'Engineering / EN-DAX Department',
    role: 'Engineering Intern (Applied ML & Telematics)',
    period: '20 May – 15 July',
    location: 'Gurugram, India',
    projectTitle: 'TelematicsPro — Industrial Sensor Processing & Analytics Suite',
    projectSummary:
        'Engineered an industrial 6-stage vehicle telematics pipeline and analytics suite for raw automotive sensor telemetry, processing CAN-bus data streams, calculating kinematic metrics, and identifying aggressive driver behaviors.',
    highlights: [
        'Architected a 6-stage modular pipeline normalizing raw vehicle sensor streams into a standardized 40-feature automotive taxonomy with automated trip segmentation.',
        'Engineered kinematic derivations including continuous Haversine trajectory distances, idle duration metrics, and event triggers for rapid acceleration and harsh braking.',
        'Implemented dual-stage statistical anomaly cleansing (IQR & Z-score filtering) with structured JSON audit trails for high-noise CAN-bus telemetry.',
        'Built and deployed an interactive Streamlit engineering console for vehicle dynamics engineers to analyze trip telemetry and sensor time-series profiles in real time.',
    ],
    tags: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Sensor Telemetry', 'Kinematics ML', 'Data Ingestion'],
    links: [
        {
            href: 'https://telematicspro.streamlit.app/',
            icon: 'fas fa-external-link-alt',
            label: 'Live Application',
        },
        {
            href: 'https://github.com/AmanYdv77/telematics_pro',
            icon: 'fab fa-github',
            label: 'GitHub Repository',
        },
    ],
    image: telematicsImg,
}

const Experience: React.FC = () => {
    return (
        <section className="experience reveal" id="experience">
            <h1 className="section-title">Experience</h1>
            <p className="section-subtitle">Industrial Engineering & Applied Machine Learning</p>
            <hr />

            <div className="experience-container">
                <div className="experience-card">
                    <div className="experience-header">
                        <div className="experience-title-group">
                            <div className="company-badge">
                                <i className="fas fa-building"></i>
                                <span>{experienceData.company}</span>
                            </div>
                            <h2 className="role-title">{experienceData.role}</h2>
                            <div className="meta-info">
                                <span className="department">
                                    <i className="fas fa-microchip"></i> {experienceData.department}
                                </span>
                                <span className="period">
                                    <i className="far fa-calendar-alt"></i> {experienceData.period}
                                </span>
                                <span className="location">
                                    <i className="fas fa-map-marker-alt"></i> {experienceData.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="experience-content">
                        <div className="experience-body">
                            <div className="project-banner">
                                <span className="badge">Featured Project</span>
                                <h3>{experienceData.projectTitle}</h3>
                                <p>{experienceData.projectSummary}</p>
                            </div>

                            <div className="experience-highlights">
                                <h4>Key Engineering Deliverables:</h4>
                                <ul>
                                    {experienceData.highlights.map((highlight, index) => (
                                        <li key={index}>
                                            <i className="fas fa-check-circle"></i>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="experience-tags">
                                {experienceData.tags.map(tag => (
                                    <span key={tag} className="tag-pill">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="experience-actions">
                                {experienceData.links.map(link => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="btn btn-primary"
                                    >
                                        <i className={link.icon}></i> {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="experience-media">
                            <div className="media-wrapper">
                                <img
                                    src={experienceData.image}
                                    alt="TelematicsPro Dashboard Preview"
                                    loading="lazy"
                                />
                                <div className="media-overlay">
                                    <span>TelematicsPro Streamlit Live Interface</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
