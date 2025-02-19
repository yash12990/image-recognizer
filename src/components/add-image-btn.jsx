import React from "react";
import Image from "next/image";
import PlusIcon from "../../public/images/plus-icon.svg";

export default function AddImageButton({ handleImageChange }) {
  return (
    <label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        name="img-1"
      />

      <section
        htmlFor="img-1"
        className="sm:text-sm text-xs font-semibold flex flex-col items-center justify-center gap-y-1 text-center p-1 rounded-lg cursor-pointer border-2 sm:border-black bg-white border-dashed sm:w-[120px] w-20 h-[80px]"
      >
        <Image
          src={PlusIcon}
          alt="+"
          className="sm:h-[18px] sm:w-[18px] h-4 w-4"
        />
        <p>Upload</p>
      </section>
    </label>
  );
}
