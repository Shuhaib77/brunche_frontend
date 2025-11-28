import React from "react";

function ProductCard({ name, image, price }) {
  return (
    <>
      <div className="h-full w-full   ">
        <div className="    border">
          <img
            src={image}
            alt=""
            className="w-full min-h-[900px] min-w-[500px] object-contain"
          />
        </div>
        <div className="h-full">
          <h1>{name}</h1>
          <h1>{price}</h1>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
