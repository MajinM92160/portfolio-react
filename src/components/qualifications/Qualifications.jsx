import { React, useState } from 'react';
import Qualification from "./Qualification";
import "./qualification.css";
import qualifications from "./qualificationsList"
import gsap from 'gsap'

const Qualifications = () => {

    const education = qualifications.education
    const experience = qualifications.experience

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
        gsap.fromTo('.qualification__data', {autoAlpha: 0, y: "-10px"}, {autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1})
    }

    return (
        <section className="qualification section">
           <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                         onClick={() => {
                             toggleTab(1)
                         }}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                         onClick={() => {
                             toggleTab(2)
                         }}>
                        <i className="uil uil-briefcase-alt  qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} >
                        {education.map((item, index) => <Qualification
                            title = {item.title}
                            subtitle = {item.subtitle}
                            calendar = {item.calendar}
                            linePosition = {index % 2 === 0  ? "end" : "start" }
                        />)}
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {experience.map((item, index) => <Qualification
                            title = {item.title}
                            subtitle = {item.subtitle}
                            calendar = {item.calendar}
                            linePosition = {index % 2 === 0  ? "end" : "start" }
                        />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualifications;