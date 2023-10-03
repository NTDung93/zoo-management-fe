import React, { useState, useEffect } from 'react';

interface ImageSplitterProps {
    imageUrls: string[];
}

const ImageSplitter: React.FC<ImageSplitterProps> = ({ imageUrls }) => {
    const [randomIndex, setRandomIndex] = useState<number>(0);

    useEffect(() => {
        const randomIdx = Math.floor(Math.random() * imageUrls.length);
        setRandomIndex(randomIdx);
    }, []);

    const randomImageUrl = imageUrls[randomIndex];

    return (
        <div>
            <img src={randomImageUrl} className='animal-card__img' alt="Random Image" />
        </div>
    );
};

export default ImageSplitter;
