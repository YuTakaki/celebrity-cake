import React, {useEffect} from 'react';
import chef from '../media/cakechef.png';
import '../styles/about.scss';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='about'>
            <img src={chef}/>
            <div className='aboutContent'>
                <p>Dolore dolore ex veniam sit duis aute voluptate labore cillum ut. Labore tempor proident fugiat magna. Elit non velit aliquip aute cillum consectetur nisi officia in esse quis ipsum et. Laboris ipsum sit aliqua ut irure veniam.

Est officia ex minim exercitation. Aliquip dolor elit non proident magna aute. Officia cillum aliquip anim excepteur eiusmod et non consequat esse sint magna laborum sint sit. Qui non sit consectetur id elit velit deserunt. Elit in nostrud occaecat ex. Et proident velit quis irure nisi do aute labore consequat ex do mollit nulla dolore. Ut est nostrud pariatur sit cupidatat enim duis sunt labore.</p>

            </div>
            
        </div>
    )
}

export default About
