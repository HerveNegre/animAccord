import React, { useState, useEffect, useRef } from 'react';
import './Toggle.css';
import Chevron from './chevron.svg';

export default function Toggle() {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    }

    const heightRef = useRef();

    useEffect(() => {
        setHeightEl(`
        ${heightRef.current.scrollHeight}px
        `);
    }, [])

    return (
        <div className="toggle">
            <div
                onClick={toggleState}
                className="toggle-visible">

                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Chevron} alt="chevron"/>
            
            </div>

            <div
                ref={heightRef}
                className={toggle ?
                    "toggle-start animated" :
                    "toggle-start"}
                style={{ height: toggle ? `${heightEl}` : "0px" }}>
                
                <p aria-hidden={toggle ? "true" : "false" }>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tenetur vero, ipsam qui aliquam quas suscipit.
                </p>
            </div>

        </div>
    );
}