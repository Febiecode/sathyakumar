"use client"
import ImageGallery from "@/components/organisms/ImageGallery";

import HeroBanner from "@/components/organisms/HeroBanner";


import MainLayout from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        
          
          <HeroBanner />
          <ImageGallery />
          
       
      </MainLayout>
    </>
  );
}
