import Header from "@/components/header";
import ImageUploaderContainer from "@/components/image-uploader-container";

export default function Home() {
  return (
    <div className="">
      <Header />

      <main className="w-full flex items-center justify-center sm:pt-10">
        <ImageUploaderContainer />
      </main>
    </div>
  );
}
