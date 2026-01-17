import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";

import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.jpeg";
import image6 from "../assets/6.JPG";
import image7 from "../assets/7.JPG";
import image8 from "../assets/8.JPG";
import image9 from "../assets/9.JPG";
import image10 from "../assets/10.JPG";
import image11 from "../assets/11.JPG";
import image12 from "../assets/12.JPG";
import image13 from "../assets/13.JPG";
import image14 from "../assets/14.JPG";
import image15 from "../assets/15.JPG";
import image16 from "../assets/16.JPG";
import image17 from "../assets/17.JPG";
import image18 from "../assets/18.jpeg";
import image19 from "../assets/19.JPG";
import image20 from "../assets/20.JPG";
import image21 from "../assets/21.JPG";
import image22 from "../assets/22.JPG";
import image23 from "../assets/23.JPG";
import image24 from "../assets/24.JPG";  

const ITEMS_PER_LOAD = 8;

const Gallery = () => {
  const images = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12,
    image13, image14, image15, image16, image17, image18,
    image19, image20, image21, image22, image23, image24
  ];

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 640: 2, 768: 3, 1024: 4 }}
      >
        <Masonry gutter="16px">
          {visibleImages.map((src, index) => (
            <img
              key={src}    
              src={src}
              className="w-full rounded-lg"
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              setVisibleCount(v => Math.min(v + ITEMS_PER_LOAD, images.length))
            }
            className="bg-blue-600 text-white mr-4 text-sm md:text-base md:px-8 md:py-3 px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
