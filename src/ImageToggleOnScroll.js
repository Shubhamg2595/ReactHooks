import React, { useRef, useEffect, useState } from 'react';


const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {


    const imageRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInView(inView);
        return (() => {
            window.removeEventListener("scroll", scrollHandler);
        })

    }, [])

    const [inView, setInView] = useState(false);

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    }

    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        })
    }

    console.log('inView',inView)
    console.log('primary',primaryImg)
    console.log('secondaryImg',secondaryImg)

    return (
        <>
            <h1>sadasdsa</h1>
            <img src={inView ? secondaryImg : primaryImg}
                ref={imageRef}
                alt=""
                width="300"
                height="300"
            />
        </>
    )
}


export default ImageToggleOnScroll;