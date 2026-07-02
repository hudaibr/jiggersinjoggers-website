'use client';
import GalleryArea from "@/app/components/gallery/gallery-area";
import anime_1 from '@/assets/img/anime/img-1.jpeg';
import anime_2 from '@/assets/img/anime/img-2.jpeg';
import anime_3 from '@/assets/img/anime/img-3.webp';

const animeGalleryData = [
  { id: 1, img: anime_1, title: "Concept Art", rate: "" },
  { id: 2, img: anime_2, title: "Concept Art", rate: "" },
  { id: 3, img: anime_3, title: "Concept Art", rate: "" },
];

export default function AnimeGallery() {
  return (
    <section className="section-pt-120 section-pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section__title text-center mb-60 title-shape-none">
              <h6 className="sub-title2">ANIME ART</h6>
              <h3 className="title2">Character Concept Art</h3>
            </div>
          </div>
        </div>
      </div>
      <GalleryArea data={animeGalleryData} uniform={true}/>
    </section>
  );
}
