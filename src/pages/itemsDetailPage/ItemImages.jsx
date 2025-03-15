import React, {useState} from 'react'

export default function ItemImages() {
    const images = [
        {
            id: 1,
            main: "/shirt2-bg.png",
            thumbnail: "/shirt2.png",
        },
        {
            id: 2,
            main: "/shirt3.png",
            thumbnail: "/shirt3.png",
        },
        {
            id: 3,
            main: "/shirt4.png",
            thumbnail: "/shirt4.png",
        },
        {
            id: 4,
            main: "/shirt5.png",
            thumbnail: "/shirt5.png",
        },
        {
            id: 5,
            main: "/shirt6.png",
            thumbnail: "/shirt6.png",
        },
        {
            id: 6,
            main: "/shirt2-bg.png",
            thumbnail: "/shirt2.png",
        },
    ];
    const [selectedImage, setSelectedImage] = useState(images[0]);


    const handleKeyNavigation = (e) => {
        const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
        if (e.key === "ArrowLeft" && currentIndex > 0) {
            setSelectedImage(images[currentIndex - 1]);
        } else if (e.key === "ArrowRight" && currentIndex < images.length - 1) {
            setSelectedImage(images[currentIndex + 1]);
        }
    };
    return (
        <div
            className="w-full bg-gray-200 sm:w-5/12 sm:mx-auto md:w-6/12 md:mx-auto lg:w-3/12 grid gap-3"
            onKeyDown={handleKeyNavigation}
            tabIndex="0"
        >
            <div
                className="relative sm:border border-gray-200 rounded-sm overflow-hidden"
                style={{
                    aspectRatio: "1 / 1",
                    width: "100%",
                }}
            >
                <img
                    src={selectedImage.main}
                    alt={selectedImage.alt}
                    className="absolute inset-0 w-full h-full object-contain"
                />
            </div>
            <div className="flex items-center justify-evenly lg:justify-between gap-1 overflow-x-auto scrollbar-hide">
                {images.map((image) => (
                    <button
                        key={image.id}
                        onClick={() => setSelectedImage(image)}
                        className={`flex-shrink-0 rounded-sm transition-transform hover:scale-105 ${selectedImage.id === image.id ? "border border-black" : ""
                            }`}
                    >
                        <img
                            src={image.thumbnail}
                            alt={image.alt}
                            className="w-12 h-12 object-cover border border-gray-200 rounded-sm"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}
