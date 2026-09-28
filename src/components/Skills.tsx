interface SkillTag {
    label: string
}

interface ServiceCard {
    id: number
    icon: string
    title: string
    description: string
    tags: SkillTag[]
}

const serviceCards: ServiceCard[] = [
    {
        id: 1,
        icon: 'fas fa-server',
        title: 'Backend Engineering',
        description: 'Architecting robust RESTful APIs, relational schema design, and high-concurrency server backends.',
        tags: [
            { label: 'FastAPI' },
            { label: 'Django' },
            { label: 'PostgreSQL' },
            { label: 'REST APIs' },
            { label: 'Alembic' },
            { label: 'Authentication' },
        ],
    },
    {
        id: 2,
        icon: 'fas fa-network-wired',
        title: 'Distributed Systems',
        description: 'Implementing asynchronous background worker queues, task scheduling, and distributed uptime monitoring.',
        tags: [
            { label: 'Celery' },
            { label: 'Redis' },
            { label: 'AsyncIO' },
            { label: 'Task Queues' },
            { label: 'Heartbeat Monitoring' },
        ],
    },
    {
        id: 3,
        icon: 'fas fa-brain',
        title: 'Applied Machine Learning',
        description: 'End-to-end model development, classification/regression pipelines, and predictive inference engines.',
        tags: [
            { label: 'Scikit-Learn' },
            { label: 'Pandas' },
            { label: 'NumPy' },
            { label: 'Feature Engineering' },
            { label: 'Model Evaluation' },
        ],
    },
    {
        id: 4,
        icon: 'fas fa-square-root-alt',
        title: 'Computational Mathematics',
        description: 'Rigorous mathematical foundations underpinning numerical computing, matrix algorithms, and optimization.',
        tags: [
            { label: 'Linear Algebra' },
            { label: 'Calculus' },
            { label: 'Probability & Statistics' },
            { label: 'Numerical Methods' },
            { label: 'Discrete Math' },
        ],
    },
    {
        id: 5,
        icon: 'fas fa-car-side',
        title: 'Data Engineering & Telematics',
        description: 'Processing industrial vehicle sensor streams, trip segmentation, data validation, and interactive analytics.',
        tags: [
            { label: 'Streamlit' },
            { label: 'Sensor Telemetry' },
            { label: 'Data Cleaning' },
            { label: 'Data Profiling' },
            { label: 'EDA' },
        ],
    },
    {
        id: 6,
        icon: 'fas fa-terminal',
        title: 'DevOps & Tooling',
        description: 'Containerized deployment environments, automated CI/CD validation pipelines, and version control.',
        tags: [
            { label: 'Docker' },
            { label: 'Git & GitHub' },
            { label: 'CI/CD Pipelines' },
            { label: 'Linux' },
            { label: 'Pre-commit' },
        ],
    },
]

const Skills: React.FC = () => {
    return (
        <section id="service" className="section services reveal">
            <h1 className="section-title">Skills</h1>
            <div className="services-container">
                {serviceCards.map(card => (
                    <div className="service-card" key={card.id}>
                        <div className="card-top">
                            <i className={card.icon}></i>
                            <h3>{card.title}</h3>
                        </div>
                        <p>{card.description}</p>
                        <div className="tags">
                            {card.tags.map(tag => (
                                <span
                                    className="magnify-text"
                                    data-text={tag.label}
                                    key={tag.label}
                                >
                                    {tag.label}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
