import React from "react";
import styles from "./Image.module.css";

// Import all your images
import facebookImage from "./facebook.png";
import xImage from "./x.png";
import instagramImage from "./instagram.png";
import youtubeImage from "./youtube.png";

const imageMap = {
    facebook: facebookImage,
    x: xImage,
    instagram: instagramImage,
    youtube: youtubeImage,
};

function Image({ imageName, alt = "Image", className }) {
    const imageSrc = imageMap[imageName];

    if (!imageSrc) {
        return <p>Image not found</p>;
    }

    return (
        <img 
            src={imageSrc} 
            alt={alt} 
            className={`${styles.image} ${className || ""}`} // Corrected className concatenation
        />
    );
};

export default Image;