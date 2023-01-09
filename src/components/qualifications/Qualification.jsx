import React from 'react';

function Qualification({title, subtitle, calendar, linePosition}) {
    const line =
        <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
        </div>

    return (
        <div className="qualification__data">
            {linePosition === "start" ? [<div></div>, line] : null}
            <div>
                <h3 className="qualification__title">{title}</h3>
                <span className="qualification__subtitle">{subtitle}</span>
                <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    {calendar}
                </div>
            </div>
            {linePosition === "end" ? line : null}
        </div>

    );
}

export default Qualification;