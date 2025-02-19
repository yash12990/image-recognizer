import Image from "next/image";
import React from "react";

export default function ImagePreview({ selectedImage }) {
  return (
    <Image
      src={selectedImage}
      alt="Image"
      width={500}
      height={250}
      className="w-fit max-h-[220px]"
    />
  );
}
