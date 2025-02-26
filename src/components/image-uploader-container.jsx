"use client";

import React, { useState } from "react";
import ImagePreview from "./image-preview";
import ImageUploader from "./image-uploader";
import toast from "react-hot-toast";
import { submitImages } from "@/api";

export default function ImageUploaderContainer() {
  const [images, setImages] = useState(Array(3).fill(null));
  const [selectedImage, setSelectedImage] = useState("");
  const [promptNumber, setPromptNumber] = useState("1");

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

  const onPromptSelection = (e) => {
    const value = e.target.value;
    setPromptNumber(value);
  };

  const deletePhoto = (e, imgUrl) => {
    e.stopPropagation();

    setImages((prev) =>
      prev.map((photo) => (!!photo && photo.imgUrl === imgUrl ? null : photo))
    );
    selectedImage === imgUrl && setSelectedImage("");
  };

  const onSubmit = async () => {
    if (images.length === 0) {
      alert("Please select at least one image");
      return;
    }

    const formData = new FormData();
    // images.forEach((image, index) => {
    formData.append(`files`, images);
    // });

    formData.append(`promptNumber`, promptNumber);

    try {
      const res = await submitImages(formData);
      console.log("🚀 ~ onSubmit ~ res:", res);
      // throw new Error("Cannot submit image");
    } catch (error) {
      console.log("Error in submitting images: ", error);
      toast.error("Error submitting images");
    }
  };
  return (
    <>
      <select
        name="promptNumber"
        id="promptNumber"
        onChange={onPromptSelection}
        className="absolute top-28"
      >
        <option value="1">Wrong Item</option>
        <option value="2">Missing Item</option>
        <option value="3">Item</option>
      </select>

      <div className="h-[650px] w-[500px] sm:bg-white sm:rounded-3xl p-4">
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
    </>
  );
}
