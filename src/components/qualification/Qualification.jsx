import React from 'react';
import "./qualification.css";

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Bachelor Web Developer</h3>
                                <span className="qualification__subtitle">HETIC - Montreuil, France</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> September 2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Preparation for the professional title Web and Mobile
                                    Web Developer</h3>
                                <span className="qualification__subtitle">WebForce3 - Paris, France</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> September 2021 - September 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Preparation for the professional title of sound
                                    engineer</h3>
                                <span className="qualification__subtitle">Abbey Road Institute - Suresnes, France</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> September 2029 - January 2020
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Front-End Developer</h3>
                                <span className="qualification__subtitle">BASS AGENCY EMERSIO - Nice, France</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> September 2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full-Stack Developer</h3>
                                <span className="qualification__subtitle">TITLE-LIVE - Montrouge, France</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> March 2022 - September 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">After-Sales Communication Technician</h3>
                                <span className="qualification__subtitle">THE KASE - Levallois-Perret, France</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> February 2020 - February 2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;