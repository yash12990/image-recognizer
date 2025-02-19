"use client";

import React, { useState } from "react";
import AddImageButton from "./add-image-btn";
import ImagePreview from "./image-preview";
import Image from "next/image";
import { cn } from "@/utils";

export default function ImageUploaderContainer() {
  const [images, setImages] = useState(Array(3).fill(null));
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImages((prev) => {
      const newPhotos = [...prev];
      const emptyIndex = newPhotos.findIndex((photo) => photo === null);
      if (emptyIndex !== -1) {
        newPhotos[emptyIndex] = { ...file, imgUrl: URL.createObjectURL(file) };
      }
      return newPhotos;
    });
  };

  const onImageSelection = (imgUrl) => {
    setSelectedImage(imgUrl);
  };
  return (
    <div className="h-[600px] w-[530px] sm:bg-white sm:rounded-3xl p-4">
      <section className="h-[250px] w-full bg-gray-200 rounded-2xl flex items-center justify-center py-3">
        <ImagePreview selectedImage={selectedImage} />
      </section>

      <section className="flex items-center justify-between w-full pt-6">
        {images.map((image, index) =>
          image === null ? (
            <AddImageButton
              key={index}
              image={image}
              handleImageChange={handleImageChange}
            />
          ) : (
            <section
              key={index}
              onClick={() => onImageSelection(image.imgUrl)}
              className={cn(
                "rounded-lg border-2 border-black border-dashed w-[120px] h-[80px] flex items-center justify-center p-1",
                selectedImage === image.imgUrl &&
                  "border-solid border-green-300"
              )}
            >
              <div className="h-full flex items-center justify-center">
                <Image
                  src={image.imgUrl}
                  height={80}
                  width={80}
                  className="h-full w-full rounded-lg"
                  alt="img"
                />
              </div>
            </section>
          )
        )}
      </section>
    </div>
  );
}
