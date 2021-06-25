import '../styles/gallery.scss';
import {useRef, useState, useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import isVisible from '../method/onScroll';
import { LaptopWindowsRounded } from '@material-ui/icons';

const Gallery = () => {

    const galleryFilter = useRef();
    const [images, set_images] = useState([]);
    const importAll = (r) => {
        return r.keys().map(r);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        const imageLists = importAll(require.context('../media/allImageCompress', false, /\.(png|jpe?g|svg)$/));
        set_images(imageLists);
        
        
        
        
    }, [])

    useEffect(() => {
        const images = document.querySelectorAll('.gallery-images img');
        [...images].slice(0, 11).forEach(img => {
            img.classList.add('animate');
        })
        console.log([...images].slice(0, 12));
    }, [images])


    window.onscroll = () => {
        const images = document.querySelectorAll('.gallery-images img');
        isVisible([...images]);
    }
    return ( 
        <main className='gallery'>
            <div className='gallery-images'>
                {images.map(image => (
                    <img src={image.default} />
                ))}
            </div>
        </main>
     );
}
 
export default Gallery;