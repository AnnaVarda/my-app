import React from 'react';
import aboutimage from '../images/aboutimage.jpg';
function About() {

    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt="" />
            </div>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT ME</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Culpa ea, labore incidunt animi alias modi nobis minus doloribus nulla sint voluptates
                 deleniti deserunt debitis voluptatum eos ullam in? In, dolore.</p>
                <button>READ MORE</button>
            </div>

        </div>
    )
}

export default About;