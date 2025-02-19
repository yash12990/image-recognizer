import Image from "next/image";
import React from "react";

export default function ImagePreview({ selectedImage }) {
  return (
    <>
      {!!selectedImage ? (
        <Image
          src={selectedImage}
          alt="Image"
          width={500}
          height={220}
          className="w-fit max-h-[220px]"
        />
      ) : (
        <div className="w-full h-full text-center flex items-center justify-center">
          <p>Select an image see preview</p>
        </div>
      )}
    </>
  );
}
