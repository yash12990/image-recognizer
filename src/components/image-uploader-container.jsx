"use client";

import React, { useState } from "react";
import ImagePreview from "./image-preview";
import ImageUploader from "./image-uploader";

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

  const deletePhoto = (imgUrl) => {
    setImages((prev) =>
      prev.map((photo) => (!!photo && photo.imgUrl === imgUrl ? null : photo))
    );
    selectedImage === imgUrl && setSelectedImage("");
  };
  return (
    <div className="h-[600px] w-[500px] sm:bg-white sm:rounded-3xl p-4">
      <section className="h-[210px] w-full bg-gray-200 rounded-2xl flex items-center justify-center py-3">
        <ImagePreview selectedImage={selectedImage} />
      </section>

      <ImageUploader
        images={images}
        onImageSelection={onImageSelection}
        handleImageChange={handleImageChange}
        selectedImage={selectedImage}
        deletePhoto={deletePhoto}
      />
    </div>
  );
}
