import React from 'react'

const Image = ({ src, alt, className }) => {
    try {
        return <img src={src} alt={alt} className={className} />
    } catch (error) {
        console.error(`Image not found: ${src}`);
        return <p>Image not found</p>;
    }
};
export default Image