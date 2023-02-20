import React from 'react'

export const ImageList = () => {
  
  return (
    <ul className="p-20 gap-6 grid grid-cols-auto min-h-screen">
      {imageList.map((imageURL, index) => (
        <li
          key={index}
          className="relative w-full rounded-xl overflow-hidden shadow-lg shadow-primary/40"
        >
          <Image
            alt=""
            fill={true}
            src={imageURL}
            onLoad={() => console.log("Cargadito")}
          />
        </li>
      ))}
    </ul>
  );
}
