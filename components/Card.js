"use client";

import Image from "next/image";

const Card = ({ name, price, description, image_url }) => {
  return (
    <div className="card p-4 w-[17.25rem] h-96 text-white bg-[#111111] rounded-2xl cursor-pointer shadow-lg">
      <div className="flex  py-4  img-container h-[64%] relative">
        <Image
          height="400"
          width="400"
          className="object-fill absolute -top-10 -right-10 transform transition-transform hover:scale-110"
          src="https://res.cloudinary.com/dcgbzqanx/image/upload/v1701261381/Permian/Ellipse_4_delmet.png"
          alt="Gradient"
        />

        <Image
          height={"1800"}
          width={"1800"}
          className="h-[9.5rem] w-[15.25rem] object-cover z-10 transform transition-transform hover:scale-110"
          src={image_url}
          alt="Nike"
        />
      </div>
      <div className="img-content">
        <div className="flex justify-between mb-4">
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-sm font-semibold">${price}</p>
        </div>
        <div>
          <p className="text-sm font-normal leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
