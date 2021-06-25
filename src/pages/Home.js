import cakeCover2 from '../media/coverCake2.png';
import {useEffect, useState, useRef} from 'react';
import '../styles/home.scss';
import '../styles/faq.scss';
import {Link} from 'react-router-dom';
import FAQ from './faq';
import isVisible from '../method/onScroll';


const Home = () => {

    const [images, set_images] = useState([]);
    const howToOrder = [
        {
            icon : 'fa fa-wechat',
            description : 'message us on we chat'
        },
        {
            icon : 'fa fa-birthday-cake',
            description : 'send sample cakes'
        },
        {
            icon : 'fa fa-truck',
            description : 'cake is delivered'
        },
    ]

    const feedbacks = [
        {
            feedback : '',
            name : '',
        },
        {
            feedback : '',
            name : '',
        },
        {
            feedback : '',
            name : '',
        },
    ]

    

    const importAll = (r) => {
        return r.keys().map(r);
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        const imageLists = importAll(require.context('../media/shortgallery', false, /\.(png|jpe?g|svg)$/));
        set_images(imageLists);
        slogan.current.classList.add('animate');
        coverImage.current.classList.add('animate');
        

    }, [])

    const slogan = useRef();
    const coverImage = useRef();
    const shortGallery = useRef();
    const orderBtn = useRef();
    const howToOrderRef = useRef();

    window.onscroll = () => {
        const li = document.querySelectorAll('.question_answer');
        isVisible([...li, shortGallery.current, orderBtn.current, howToOrderRef.current]);
    }
    return ( 
        <main className='home'>
            <div className='cover-photo'>
                <img className='cakeCover2' src={cakeCover2} ref={coverImage} />
                <div className='slogan' ref={slogan}>
                    <h1>We create your wish a reality</h1>
                    <a href='https://api.whatsapp.com/send?phone=971502821739' target='_blank'><button>Order now</button></a>
                </div>

            </div>
            <div className='short-gallery'>
                <div className='short-gallery-content'>
                    
                </div>
                <h2>Some of our Cakes</h2>
                
                <div className='short-gallery-images' ref={shortGallery}>
                    {images.map(image => (
                        <img src={image.default} />
                    ))}
                </div>
                <Link to='/Gallery'><button>Open Gallery</button></Link>
            </div>
            <div className='how-to-order'>

                <h2>How to order</h2>

                <ul ref={howToOrderRef}>
                    {howToOrder.map((order, i) => (
                        <li>
                            <i className={order.icon}></i>
                            <p>{i + 1}</p>
                            <h4>{order.description}</h4>
                        </li>
                    ))}
                </ul>

            </div>
            <FAQ />
            <div className='consult'>
                <h2>Arrange cake consultation with us</h2>
                <a href='https://api.whatsapp.com/send?phone=971502821739' target='_blank' ref={orderBtn}><button>Message us on whatsapp</button></a>

            </div>
            
        </main>
     );
}
 
export default Home;