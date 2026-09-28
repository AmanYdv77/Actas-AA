import eduPulseImg from '../../images/edupulse.jpg'
import telematicsImg from '../../images/telematics.jpg'
import pingGuardImg from '../../images/pingguard.jpg'

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
        description: 'Full-stack academic early-warning & student performance prediction platform with role-based dashboards, PostgreSQL persistence, and CI/CD pipelines.',
        tags: [{ label: 'FastAPI' }, { label: 'PostgreSQL' }, { label: 'Docker' }, { label: 'Scikit-Learn' }],
        links: [
            { href: 'https://github.com/AmanYdv77/edupulse', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 2,
        image: pingGuardImg,
        imageAlt: 'PingGuard Monitoring',
        title: 'PingGuard',
        description: 'Self-hosted distributed HTTP uptime and keep-alive monitoring service built with asynchronous Celery workers and Redis broker.',
        tags: [{ label: 'FastAPI' }, { label: 'Redis' }, { label: 'Celery' }, { label: 'PostgreSQL' }],
        links: [
            { href: 'https://github.com/AmanYdv77/PingGuard', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
    {
        id: 3,
        image: telematicsImg,
        imageAlt: 'TelematicsPro Maruti Suzuki',
        title: 'TelematicsPro (Maruti Suzuki)',
        description: 'Industrial 6-stage telemetry data processing & ML analysis suite developed during internship at Maruti Suzuki for raw vehicle sensor data.',
        tags: [{ label: 'Streamlit' }, { label: 'Python' }, { label: 'Pandas' }, { label: 'Telemetry ML' }],
        links: [
            { href: 'https://github.com/AmanYdv77/telematics_pro', icon: 'fab fa-github', label: 'GitHub' },
        ],
    },
]

const Projects: React.FC = () => {
    return (
        <section className="project reveal" id="project">
            <h1>Featured Work</h1>
            <hr />
            <div className="projects-container">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.imageAlt} />
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
