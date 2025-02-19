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
        className="text-sm font-semibold flex flex-col items-center justify-center gap-y-1 text-center p-1 rounded-lg cursor-pointer border-2 border-black border-dashed w-[120px] h-[80px]"
      >
        <Image src={PlusIcon} alt="+" className="h-[18px] w-[18px]" />
        <p>Upload</p>
      </section>
    </label>
  );
}
