"use client";

import React, { useState } from "react";
import ImagePreview from "./image-preview";
import ImageUploader from "./image-uploader";
import toast from "react-hot-toast";

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

  const onSubmit = async () => {
    try {
      throw new Error("Cannot submit image");
    } catch (error) {
      console.log("Error in submitting images: ", error);
      toast.error("Error submitting images");
    }
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

      <button
        className="w-full h-10 bg-[#512771] mt-5 text-base font-semibold text-white rounded-lg shadow-lg hover:opacity-85 transition-all duration-300 flex items-center justify-center text-center"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
}
