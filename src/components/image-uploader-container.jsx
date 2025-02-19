"use client";

import React, { useState } from "react";
import AddImageButton from "./add-image-btn";
import Image from "next/image";
import ImagePreview from "./image-preview";

export default function ImageUploaderContainer() {
  const [images, setImages] = useState(Array(3).fill(null));
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImages((prev) => {
      const newPhotos = [...prev];
      const emptyIndex = newPhotos.findIndex((photo) => photo === null);
      if (emptyIndex !== -1) {
        newPhotos[emptyIndex] = file;
      }
      return newPhotos;
    });
    setSelectedImage(URL.createObjectURL(file));
  };
  return (
    <div className="h-[600px] w-[530px] sm:bg-white sm:rounded-3xl p-4">
      <section className="h-[250px] w-full bg-gray-200 rounded-2xl flex items-center justify-center py-3">
        <ImagePreview selectedImage={selectedImage} />
      </section>

      <section className="flex items-center justify-between w-full pt-6">
        <AddImageButton handleImageChange={handleImageChange} />
      </section>
    </div>
  );
}
