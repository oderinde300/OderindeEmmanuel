import React from "react";

const ImageComp = ({ image, alt = "image", width, height, styles = "" }) => {
  // console.log(image);

  return (
    <img
      src={image}
      alt={alt}
      width={width}
      height={height}
      className={styles}
    />
  );
};

export default ImageComp;
