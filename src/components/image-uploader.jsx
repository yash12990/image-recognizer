import Image from "next/image";
import React from "react";
import AddImageButton from "./add-image-btn";
import { cn } from "@/utils";
import Bin from "../../public/images/bin.png";

export default function ImageUploader({
  images,
  onImageSelection,
  handleImageChange,
  selectedImage,
  deletePhoto,
}) {
  return (
    <section className="flex items-center justify-between w-full pt-6">
      {images.map((image, index) =>
        image === null ? (
          <AddImageButton key={index} handleImageChange={handleImageChange} />
        ) : (
          <div
            key={index}
            onClick={() => onImageSelection(image.imgUrl)}
            className={cn(
              "rounded-lg border-2 border-black border-dashed w-[120px] h-[80px] flex items-center justify-center p-1 relative",
              selectedImage === image.imgUrl &&
                "border-solid border-[#3d206e] border-[3px]"
            )}
          >
            <Image
              src={image.imgUrl}
              height={80}
              width={80}
              className="h-full w-fit rounded-lg"
              alt="img"
            />

            <button
              onClick={() => deletePhoto(image.imgUrl)}
              className="absolute w-6 h-6 bg-slate-200 border-black border-[0.5px] -bottom-[6px] -right-[5px] flex items-center justify-center rounded-full hover:scale-[1.2] transition"
            >
              <Image
                src={Bin}
                alt="delete image"
                className="w-[14px] h-[14px] "
              />
            </button>
          </div>
        )
      )}
    </section>
  );
}
