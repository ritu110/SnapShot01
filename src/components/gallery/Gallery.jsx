import {GalleryContext} from '../../App';
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const temp = useContext(GalleryContext);    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fbdb26cbe6c25a8dcdece034d4c7d35a&tags=${temp}&per_page=20&format=json&nojsoncallback=1`
            );
            if(response.data.photos?.photo){
                const imageArray = response.data.photos.photo.map((picture) => {
                    return `https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`;
                });
                setImages(imageArray);
            }
        };
        fetchImages();
    }, [temp]);

    return (
		temp &&
        <div className="gallery">
            <h2>{temp && `${temp} Pictures`}</h2>
            {
                images.map((image, index) => {
                    return(
                        <div key={index} className="image-container">
                            <img src={image} alt="flickr" />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Gallery;