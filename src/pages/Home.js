import cakeCover from '../media/coverCake.png';
import cakeCover2 from '../media/coverCake2.png';
import {useEffect, useState} from 'react';
import '../styles/home.scss';
import '../styles/faq.scss';
import {Link} from 'react-router-dom';
import FAQ from './faq';

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
            icon : 'fas fa-truck',
            description : 'message us on we chat'
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
        const imageLists = importAll(require.context('../media/shortgallery', false, /\.(png|jpe?g|svg)$/));
        set_images(imageLists);

    }, [])
    return ( 
        <main className='home'>
            <div className='cover-photo'>
                <img className='cakeCover1' src={cakeCover} />
                <img className='cakeCover2' src={cakeCover2} />
                <div className='slogan'>
                    <h1>We create your wish a reality</h1>
                    <a href='https://api.whatsapp.com/send?phone=971502821739' target='_blank'><button>Order now</button></a>
                </div>

            </div>
            <div className='short-gallery'>
                <div className='short-gallery-content'>
                    
                </div>
                <h2>Some of our Cakes</h2>
                
                <div className='short-gallery-images'>
                    {images.map(image => (
                        <img src={image.default} />
                    ))}
                </div>
                <Link to='/Gallery'><button>Open Gallery</button></Link>
            </div>
            <div className='how-to-order'>

                <h2>How to order</h2>

                <ul>
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
                <h2>Arrang cake consultation with us</h2>
                <a href='https://api.whatsapp.com/send?phone=971502821739' target='_blank'><button>Message us on whatsapp</button></a>

            </div>
            
        </main>
     );
}
 
export default Home;