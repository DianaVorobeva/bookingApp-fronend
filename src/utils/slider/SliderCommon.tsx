import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import  { type Image } from '../../components/sliderGallery/SliderGallery';


const SliderCommon = ({props}: {props:Image[]}) => {
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = props.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, props]);

 
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">

      <div className="section-center" key={index}>
        {props.map((photo, photoIndex) => {
          const { id, image } = photo;
          let position = "nextSlide";
          if (photoIndex === index) {
            position = "activeSlide";
          }
          if (
            photoIndex === index - 1 ||
            (index === 0 && photoIndex === props.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt="{img}" className="person-img" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default SliderCommon;