import eduPulseImg from '../../images/edupulse.jpg'
import pingGuardImg from '../../images/pingguard.jpg'
import evLifespanImg from '../../images/ev_battery_lifespan.jpg'
import carPriceImg from '../../images/car_price_predictor.jpg'

interface ProjectTag {
    label: string
}

interface ProjectLink {
    href: string
    icon: string
    label: string
}

interface Project {
    id: number
    image: string
    imageAlt: string
    title: string
    description: string
    tags: ProjectTag[]
    links: ProjectLink[]
    color?: string
}

const projects: Project[] = [
    {
        id: 1,
        image: eduPulseImg,
        imageAlt: 'EduPulse Platform',
        title: 'EduPulse',
        description:
            'Full-stack academic early-warning & student performance prediction platform with role-based dashboards, PostgreSQL persistence, and CI/CD pipelines. Engineered dual-tier prior and longitudinal ML models with GroupedKFold cross-validation and demographic quarantine to prevent PII leakage.',
        tags: [{ label: 'FastAPI' }, { label: 'PostgreSQL' }, { label: 'Docker' }, { label: 'Scikit-Learn' }, { label: 'Redis' }],
        links: [
            { href: 'https://github.com/AmanYdv77/edupulse', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 2,
        image: pingGuardImg,
        imageAlt: 'PingGuard Monitoring',
        title: 'PingGuard',
        description:
            'Self-hosted distributed HTTP uptime monitoring engine built with asynchronous Celery workers, Redis broker, and PostgreSQL persistence. Decoupled API control plane from probing workers using row-level locking (FOR UPDATE SKIP LOCKED) and pre-flight DNS pinning to prevent TOCTOU rebinding attacks.',
        tags: [{ label: 'FastAPI' }, { label: 'Redis' }, { label: 'Celery' }, { label: 'PostgreSQL' }, { label: 'AsyncIO' }],
        links: [
            { href: 'https://github.com/AmanYdv77/PingGuard', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 3,
        image: evLifespanImg,
        imageAlt: 'EV-Lifespan Battery RUL Prediction',
        title: 'EV-Lifespan',
        description:
            'End-to-end deep learning prognostic platform estimating lithium-ion battery Remaining Useful Life (RUL) from multi-channel sensor telemetry using hybrid 1D-CNN + Stacked LSTM networks. Achieved an RMSE of 19.40 cycles with < 15ms inference latency, integrating voltage-current-temperature spatial feature extraction with temporal sequence modeling.',
        tags: [{ label: 'PyTorch' }, { label: 'FastAPI' }, { label: 'React' }, { label: '1D-CNN + LSTM' }, { label: 'Docker' }],
        links: [
            { href: 'https://github.com/AmanYdv77/ev-lifespan', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 4,
        image: carPriceImg,
        imageAlt: 'Car Price Predictor Application',
        title: 'Car Price Predictor',
        description:
            'Machine learning valuation engine accurately predicting market resale prices for pre-owned vehicles based on mileage, manufacturing year, brand, and vehicle specifications. Implemented end-to-end feature pipelines with categorical target encoding, outlier clipping, and gradient-boosted regression to deliver real-time interactive valuation appraisals.',
        tags: [{ label: 'Python' }, { label: 'Scikit-Learn' }, { label: 'Pandas' }, { label: 'Machine Learning' }],
        links: [
            { href: 'https://car-price-predictor-8oj4.onrender.com', icon: 'fas fa-external-link-alt', label: 'Live App' },
            { href: 'https://github.com/AmanYdv77/car-price-predictor', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
]

const Projects: React.FC = () => {
    return (
        <section className="project reveal" id="project">
            <h1>Featured Work</h1>
            <p>Selected engineering projects in distributed systems, backend architectures, and machine learning</p>
            <hr />
            <div className="projects-container">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.imageAlt} loading="lazy" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="skills">
                            {project.tags.map(tag => (
                                <a key={tag.label}>{tag.label}</a>
                            ))}
                        </div>
                        <div className="btns">
                            {project.links.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <i className={link.icon}></i> {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
