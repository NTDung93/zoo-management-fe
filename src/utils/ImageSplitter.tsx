import React, { useState, useEffect } from 'react';

interface ImageSplitterProps {
    imageUrls: string[];
    nameClass: string;
}

const ImageSplitter: React.FC<ImageSplitterProps> = ({ imageUrls, nameClass }) => {
    const [randomIndex, setRandomIndex] = useState<number>(0);

    useEffect(() => {
        const randomIdx = Math.floor(Math.random() * imageUrls.length);
        setRandomIndex(randomIdx);
    }, []);

    const randomImageUrl = imageUrls[randomIndex];

    return (
        <div>
            <img src={randomImageUrl} className={nameClass} alt="Random Image" />
        </div>
    );
};

export default ImageSplitter;

