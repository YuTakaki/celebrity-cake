import React, {useEffect} from 'react';
import '../styles/contact.scss';


const Contact = () => {


    const socialMedia = [
        {
            icon : 'facebook',
            link: '09063516689',
        },
        {
            icon : 'twitter',
            link: '09063516689',
        },
        {
            icon : 'instagram',
            link: '09063516689',
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <main className='contact'>
            <h1>Get in touch with us</h1>
            
            <div className='contact_container'>
                
                <div className='contact_lists'>
                    
                    <div className='contacts'>
                        <i className={ `fa fa-map-marker`}></i>
                        <a href='https://www.google.com/maps/search/Ab+plaza+9+block+b+nahda+2+dubai+uae/@25.292835,55.3672214,17z/data=!3m1!4b1' target='_blank'>Ab plaza 9 block b nahda 2 dubai uae</a>
                        
                    </div>
                    <div className='contacts'>
                        <i className={ `fa fa-phone`}></i>
                        <p>09063516689</p>
                        
                    </div>
                    <div className='contacts'>
                        <i className={ `fa fa-whatsapp`}></i>
                        <a href='https://api.whatsapp.com/send?phone=971502821739' target='_blank'>0971502821739</a>
                        
                    </div>
                    
                    <div className='social_media'>
                        {socialMedia.map( social=> (
                            <a>
                                <i className={ `fa fa-${social.icon}`}></i>
                            </a>
                            
                        ))}

                    </div>

                </div>

            </div>
            
        </main>
    )
}

export default Contact
