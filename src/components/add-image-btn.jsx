import React from "react";
import Image from "next/image";
import PlusIcon from "../../public/svgs/plus-icon.svg";

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

      <span
        htmlFor="img-1"
        className="text-base font-semibold flex items-center gap-1 border-2 border-black w-fit px-2 py-1 rounded-lg cursor-pointer"
      >
        <Image src={PlusIcon} alt="+" className="h-[18px] w-[18px]" />
        Add Image
      </span>
    </label>
  );
}
