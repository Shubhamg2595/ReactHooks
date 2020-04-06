import React, { useRef } from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll'

const ImageColoredOnScroll = () => {
    return (
        <div>
            {
                [1,2,3,4].map(imgId => {
                    return (
                        <div key={imgId}>
                            {console.log()}
                            <ImageToggleOnScroll
                                primaryImg={`/static/${Math.floor(Math.random() * 4) + 1 }.jfif`}
                                secondaryImg={`/static/${Math.floor(Math.random() * 4) + 1 }.jfif`}
                            />

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ImageColoredOnScroll;