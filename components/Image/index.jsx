import "./style.css";
import Image from "next/image";
const Img = ({ className, src, lazy, noFill, priority, alt, ...props }) => {
  return (
    <figure
      className={`img-figure aic ${className ? className : ""}`}
      {...props}
    >
      <Image
        className="img-img"
        src={src}
        draggable={false}
        loading={lazy ? "lazy" : "eager"}
        fill={!noFill}
        priority={!!priority}
        alt={alt}
      />
    </figure>
  );
};

export default Img;
