import React, { useState } from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Avatar = () => {
    const [src, setSrc] = useState(null);
    const [imgOk, setImgOk] = useState(true);

    React.useEffect(() => {
        // Try common public paths for the avatar (prefer .jpeg then .jpg)
        const tryPaths = async () => {
            const paths = ['/oluchi.jpeg', '/oluchi.jpg', '/oluchi.png'];
            for (const p of paths) {
                try {
                    const res = await fetch(p, { method: 'HEAD' });
                    if (res && (res.status === 200 || res.status === 0)) {
                        setSrc(p);
                        return;
                    }
                } catch (e) {
                    // ignore and try next
                }
            }
            setSrc(null);
        };
        tryPaths();
    }, []);

    if (src && imgOk) {
        return (
            <img
                src={src}
                alt="Oluchi"
                className="avatar-img"
                onError={() => setImgOk(false)}
            />
        );
    }
    return (
        <div className="avatar-fallback">OP</div>
    );
};

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg/>
        <section className="inicio" id="inicio">
        
            <div className="titulo">
            {/* Avatar: tries to load /oluchi.jpg from public folder; falls back to initials */}
            <div className="hero-avatar" data-aos="zoom-in" data-aos-delay="400">
                <Avatar />
            </div>
            
                <p data-aos="fade-up" data-aos-delay="600">
                    <FormattedMessage
                        id='greeting'
                        defaultMessage='Hello'
                    />
                </p>
                <h1 data-aos="fade-up" data-aos-delay="800">
                    <FormattedMessage
                        id='name'
                        defaultMessage='I am Oluchi Peace Okeke'
                    />
                </h1>
                <p data-aos="fade-up" data-aos-delay="1000">
                    <FormattedMessage
                        id='rol'
                        defaultMessage='Full-stack developer'
                    />
                </p>

                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/peace-oluchi-bernard-6b8811227/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Peacebern" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="fab fa-github"></i></a>
                    <a href="mailto:peace8282bern@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"><i className="fas fa-envelope"></i></a>
                </div>
                <div className="wrapper">
                    <a className="button" href="https://www.linkedin.com/in/peace-oluchi-bernard-6b8811227/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a className="button" href="https://github.com/Peacebern" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="button" href="https://api.whatsapp.com/send?phone=2349011912384" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
                        <div className="icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <span>Whatsapp</span>
                    </a>
                    <a className="button" href="mailto:peace8282bern@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <span>Email</span>
                    </a>
                </div>

                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;