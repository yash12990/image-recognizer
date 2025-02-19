import Image from "next/image";
import React from "react";
import AddImageButton from "./add-image-btn";
import { cn } from "@/utils";

export default function ImageUploader({
  images,
  onImageSelection,
  handleImageChange,
  selectedImage,
}) {
  return (
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
                "border-solid border-[#3d206e] border-[3px]"
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
  );
}
