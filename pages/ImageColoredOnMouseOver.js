import React, { useRef } from 'react';
import ImageToogleOnMouseOver from '../src/ImageToogleOnMouseOver'

const ImageColoredOnMouseOver = () => {
    return (
        <div>
            <ImageToogleOnMouseOver primaryImg="/static/1.jfif"
                secondaryImg="/static/3.jfif" />
            &nbsp;&nbsp;&nbsp;
            <ImageToogleOnMouseOver primaryImg="/static/2.jfif"
                secondaryImg="/static/4.jfif" />
        </div>
    )
}

export default ImageColoredOnMouseOver;