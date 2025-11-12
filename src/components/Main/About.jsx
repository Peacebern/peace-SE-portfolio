import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='Professional Summary'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Esteban Oluchi Peace Okeke and I am a full stack developer.'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='I have been working on web designing and web development for 4 years. Constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer.'
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                Contact:{" "}
                            </span>
                                +234 9011912384
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> peace8282bern@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            Lagos, Nigeria
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>Technical Skills</h3>
                <h4>Languages</h4>
                <div className="skill">
                    <div>
                        <img alt="JavaScript" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="Python" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
                        <h5>Python</h5>
                    </div>
                    <div>
                        <img alt="HTML5" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML 5</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Java" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
                        <h5>Java</h5>
                    </div>
                    <div>
                        <img alt="Bash" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg" />
                        <h5>Bash Scripting</h5>
                    </div>
                </div>
                
                <h4>Framework</h4>
                <div className="skill">
                    <div>
                        <img alt="Django" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                        <h5>Django</h5>
                    </div>
                    <div>
                        <img alt="Next.js" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                        <h5>Next.js</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React.js</h5>
                    </div>
                    <div>
                        <img alt="Tailwind" className="icons-skils" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" />
                        <h5>TailwindCSS</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <img alt="Sass" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                        <h5>Sass</h5>
                    </div>
                    <div>
                        <img alt="Angular" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
                        <h5>Angular</h5>
                    </div>
                    <div>
                        <img alt="jQuery" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
                        <h5>jQuery</h5>
                    </div>
                </div>

                <h4>Database</h4>
                <div className="skill">
                    <div>
                        <img alt="MySQL" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <img alt="MongoDB" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                        <h5>MongoDB</h5>
                    </div>
                </div>

                <h4>Version Control</h4>
                <div className="skill">
                    <div>
                        <img alt="Git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                        <h5>Github</h5>
                    </div>
                    <div>
                        <img alt="GitLab" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" />
                        <h5>Gitlab</h5>
                    </div>
                </div>

                <h4>IDE</h4>
                <div className="skill">
                    <div>
                        <img alt="VS Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" />
                        <h5>Visual Studio Code</h5>
                    </div>
                    <div>
                        <img alt="PyCharm" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" />
                        <h5>PyCharm</h5>
                    </div>
                    <div>
                        <img alt="IntelliJ" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" />
                        <h5>IntelliJ</h5>
                    </div>
                </div>

                <h4>Pipeline</h4>
                <div className="skill">
                    <div>
                        <img alt="Docker" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                        <h5>Docker</h5>
                    </div>
                </div>

                <h4>Others</h4>
                <div className="skill">
                    <div>
                        <img alt="Restful" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" />
                        <h5>Restful API</h5>
                    </div>
                    <div>
                        <img alt="Testing" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                        <h5>Unit and Integration Testing</h5>
                    </div>
                    <div>
                        <img alt="DevOps" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devops/devops-plain.svg" />
                        <h5>DevOps</h5>
                    </div>
                    <div>
                        <img alt="Shell" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
                        <h5>Shell</h5>
                    </div>
                    <div>
                        <img alt="Web API" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" />
                        <h5>Web API</h5>
                    </div>
                    <div>
                        <img alt="Wordpress" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" />
                        <h5>Wordpress CMS</h5>
                    </div>
                    <div>
                        <img alt="Figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                        <h5>Figma</h5>
                    </div>
                    <div>
                        <img alt="Node.js" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>Node.js</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);