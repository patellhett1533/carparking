import React from "react";

const Gallery = () => {
  var gallery: JSX.Element[] = [];

  for (let i = 1; i <= 12; i++) {
    gallery.push(
      <div
        style={{ backgroundImage: `url('/images/gallery${i}.jpeg')` }}
        className={`w-full aspect-square bg-cover bg-center`}
      ></div>
    );
  }
  return (
    <div className="w-full text-center lg:px-16 px-8 my-8">
      <strong className="text-[3rem] text-sky tracking-widest">GALLERY</strong>
      <div className="grid lg:grid-cols-4 grid-cols-3 mt-6">{gallery}</div>
    </div>
  );
};

export default Gallery;
