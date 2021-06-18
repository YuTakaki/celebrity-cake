import '../styles/gallery.scss';
import {useRef, useState, useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {

    const galleryFilter = useRef();
    const [images, set_images] = useState([]);
    const filterOptions = [
        'All',
        'Customized Cake',
        'Minimalist Cake',
        'Cake Pops',
        'Cupcakes'
    ]

    const [filter, set_filter] = useState('All')

    const showFilter = () => {
        galleryFilter.current.classList.toggle('showFilter')
    }

    const changeFilter = (e) => {
        set_filter(e.target.textContent);
    }
    const importAll = (r) => {
        return r.keys().map(r);
    }

    useEffect(() => {
        const imageLists = importAll(require.context('../media/allImage', false, /\.(png|jpe?g|svg)$/));
        set_images(imageLists);
    }, [])
    return ( 
        <main className='gallery'>
            {/* <div ref={galleryFilter} className='gallery-filter-container'>
                <div onClick={showFilter} className='gallery-filter'>
                    <ul className='filterList'>
                        {filterOptions.map(li => (
                            <li onClick={changeFilter} className={li === filter ? 'activeFilter' : ''}>{li}</li>
                        ))}
                    </ul>

                </div>
            </div>
            <i className='filter-icon' onClick={showFilter}>filter</i> */}
            <div className='gallery-images'>
                {images.map(image => (
                    <img src={image.default} />
                ))}
            </div>
        </main>
     );
}
 
export default Gallery;