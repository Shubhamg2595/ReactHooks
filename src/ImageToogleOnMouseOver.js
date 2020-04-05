import React, { useRef } from 'react';


const ImageToogleOnMouseOver = ({ primaryImg, secondaryImg }) => {


    const imageRef = useRef(null);

    return (
        <>
            <img src={primaryImg}
            ref={imageRef}
            onMouseOver={() => 
                {
                    imageRef.current.src = secondaryImg;
                } }
            onMouseOut={() => 
                {
                    imageRef.current.src = primaryImg;
                } }
            alt="" />
        </>
    )
}

export default ImageToogleOnMouseOver;