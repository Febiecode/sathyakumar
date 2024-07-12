"use client"
import ImageGallery from "@/components/organisms/ImageGallery";
import Footer from "@/components/organisms/Footer";
import HeroBanner from "@/components/organisms/HeroBanner";
import Navbar from "@/components/organisms/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
        <Navbar />
        <HeroBanner />
        <ImageGallery />
        <Footer />
      </div>
    </>
  );
}
