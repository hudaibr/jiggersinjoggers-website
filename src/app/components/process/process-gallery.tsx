'use client';
import { useState } from "react";
import GalleryArea from "@/app/components/gallery/gallery-area";
import p_sketch_1 from '@/assets/img/process/img-01.jpg';
import p_final_1 from '@/assets/img/process/img-2.jpg';
import p_sketch_2 from '@/assets/img/process/img-4.png';
import p_final_2 from '@/assets/img/process/img-3.png';
import p_sketch_4 from '@/assets/img/process/img-7.jpg';
import p_final_4 from '@/assets/img/process/img-8.jpg';
import p_sketch_5 from '@/assets/img/process/img-9.jpg';
import p_final_5 from '@/assets/img/process/img-10.jpg';

const processGalleryData = [
  { id: 1, img: p_sketch_1, title: "Sketch", rate: "" },
  { id: 2, img: p_final_1, title: "Final Design", rate: "" },
  { id: 3, img: p_sketch_2, title: "Sketch", rate: "" },
  { id: 4, img: p_final_2, title: "Final Design", rate: "" },
  { id: 5, img: p_sketch_4, title: "Sketch", rate: "" },
  { id: 6, img: p_final_4, title: "Final Design", rate: "" },
  { id: 7, img: p_sketch_5, title: "Sketch", rate: "" },
  { id: 8, img: p_final_5, title: "Final Design", rate: "" },
];

export default function ProcessGallery() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="section-pt-120 section-pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section__title text-center mb-60 title-shape-none">
              <h6 className="sub-title2">OUR PROCESS</h6>
              <h3 className="title2">From Sketch to Final Design</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8">
            <div className="text-center">
              <div onClick={() => setShowVideo(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#45f882', fontSize: '18px', fontWeight: 600 }}>
                <span style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#45f882', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#11131c', flexShrink: 0 }}>&#9654;</span>
                Click Here To Play
              </div>
            </div>
          </div>
        </div>
      </div>

      {showVideo && (
        <div onClick={() => setShowVideo(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.9)', padding: '20px' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: '900px' }}>
            <button onClick={() => setShowVideo(false)} style={{ position: 'absolute', top: '-40px', right: '0', background: 'none', border: 'none', color: '#fff', fontSize: '30px', cursor: 'pointer' }}>&times;</button>
            <video controls autoPlay style={{ width: '100%', borderRadius: '8px' }}>
              <source src="/process/speedpaint-1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      <GalleryArea data={processGalleryData} uniform={true}/>
    </section>
  );
}
