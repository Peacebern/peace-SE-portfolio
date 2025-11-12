import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Project.css';

const projects = [
    {
        id: 'easy-shop',
        title: 'EASY SHOP (E-commerce website)',
        type: 'I spearheaded the front-end development for the project "EASY SHOP", focused on creating a delightful user experience for product exploration. Curated product samples and direct links to purchase sites. Responsive design and efficient navigation.',
        bullets: [
            'Collaborated with cross-functional front-end and back-end engineers',
            'Responsive design and efficient navigation',
            'Curated product samples with direct purchase links'
        ],
        tools: 'React.js, JavaScript, Tailwind CSS, Git',
        demo: '#',
        repo: '#'
    },
    {
        id: 'bandage-ecommerce',
        title: 'Ecommerce Website App (Bandage)',
        type: 'Personal Project — Built a fully responsive eCommerce web application that allows users to browse products, add items to a cart, and manage their purchases.',
        bullets: [
            'UI implemented with React.js and Tailwind CSS',
            'State management and dynamic routing for shopping flow',
            'Performance and responsive optimization'
        ],
        tools: 'React.js, JavaScript, Tailwind CSS, Git',
        demo: '#',
        repo: '#'
    },
    {
        id: 'todo-app',
        title: 'To-Do List App',
        type: 'A simple yet functional to-do list web application enabling users to add, delete, and manage daily tasks. Focused on CRUD functionality and local storage persistence.',
        bullets: [
            'CRUD functions with clean UI',
            'Local storage persistence across sessions',
            'Minimal, accessible, responsive design'
        ],
        tools: 'HTML, CSS, JavaScript',
        demo: '#',
        repo: '#'
    },
    {
        id: 'dev-journal',
        title: 'Dev Journal – Blog Site',
        type: 'Personal Project — A personal blog built with Next.js to document coding knowledge and showcase projects. Uses static site generation and SEO-friendly structure.',
        bullets: [
            'Next.js with static site generation',
            'Clean routing and SEO-friendly structure',
            'Content via Markdown for easy writing'
        ],
        tools: 'Next.js, React.js, Markdown, Tailwind CSS',
        demo: '#',
        repo: '#'
    }
];

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage id="projects" defaultMessage="Projects" />
            </h2>

            <div className="projects-grid">
                {projects.map(p => (
                    <article className="project-card" key={p.id}>
                        <div className="project-card-inner">
                            <div className="content">
                                <h3>{p.title}</h3>
                                <p className="project-type">{p.type}</p>
                                <ul className="project-bullets">
                                    {p.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                                <p className="tecnologias"><strong>Tools:</strong> {p.tools}</p>
                                <div className="project-actions">
                                    <a href={p.demo} className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                                    <a href={p.repo} className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default React.memo(Project);