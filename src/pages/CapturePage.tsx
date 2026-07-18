import { useEffect, useRef, useState } from "react";

import "../styles/capture.css";

import cameraFrame from "../assets/camera-frame.png";

import FloatingDecoration from "../components/ui/FloatingDecoration";

import star1 from "../assets/decorations/star-1.png";
import star2 from "../assets/decorations/star-2.png";
import star3 from "../assets/decorations/star-3.png";

import sparkle1 from "../assets/decorations/sparkle-1.png";
import sparkle4 from "../assets/decorations/sparkle-4.png";

import cucumber1 from "../assets/decorations/cucumber-1.png";
import cucumber2 from "../assets/decorations/cucumber-2.png";
import cucumber3 from "../assets/decorations/cucumber-3.png";
import cucumber4 from "../assets/decorations/cucumber-4.png";

import olives1 from "../assets/decorations/olives-1.png";
import olives2 from "../assets/decorations/olives-2.png";

import garlic1 from "../assets/decorations/garlic-1.png";
import garlic3 from "../assets/decorations/garlic-3.png";


import cilantro1 from "../assets/decorations/cilantro-1.png";
import cilantro2 from "../assets/decorations/cilantro-2.png";


const decorations = [

  { src: star1, top:"10%", left:"2%", size:90, rotation:0, strength:45 },
  { src: star2, top:"6%", left:"78%", size:82, rotation:8, strength:40 },
  { src: star3, top:"82%", left:"62%", size:72, rotation:-8, strength:35 },

  { src: sparkle1, top:"30%", left:"22%", size:26, strength:25 },
  { src: sparkle4, top:"74%", left:"64%", size:28, strength:24 },

  { src: cucumber1, top:"84%", left:"84%", size:110, rotation:-8, strength:14 },
  { src: cucumber2, top:"66%", left:"0%", size:90, rotation:10, strength:14 },
  { src: cucumber3, top:"21%", left:"90%", size:74, rotation:-12, strength:12 },
  { src: cucumber4, top:"90%", left:"36%", size:74, rotation:8, strength:12 },

  { src: olives1, top:"96%", left:"6%", size:58, rotation:8, strength:18 },
  { src: olives2, top:"24%", left:"65%", size:58, rotation:-8, strength:18 },

  { src: garlic1, top:"82%", left:"1%", size:80, rotation:-10, strength:18 },
  { src: garlic3, top:"1%", left:"46%", size:58, rotation:0, strength:16 },

  { src: cilantro1, top:"35%", left:"1%", size:66, rotation:-18, strength:30 },
  { src: cilantro2, top:"74%", left:"82%", size:72, rotation:18, strength:30 },

];


export default function CapturePage() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {

    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({

      x:(e.clientX-rect.left-rect.width/2)/(rect.width/2),

      y:(e.clientY-rect.top-rect.height/2)/(rect.height/2)

    });

  }

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [photo, setPhoto] = useState<string | null>(null);

  async function startCamera() {

    try {

      streamRef.current = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = streamRef.current;
      }

    } catch {

      alert("Camera permission denied.");

    }
  }
    useEffect(() => {

  startCamera();

 return () => {

  streamRef.current?.getTracks().forEach(track => track.stop());

};

}, []);

  function takePhoto(){

    if(
      !videoRef.current ||
      !canvasRef.current
    ) return;

    const video=videoRef.current;

    const canvas=canvasRef.current;

    canvas.width=video.videoWidth;
    canvas.height=video.videoHeight;

    const ctx=canvas.getContext("2d");

    if(!ctx) return;

    ctx.drawImage(video,0,0);

    setPhoto(canvas.toDataURL("image/png"));
    streamRef.current?.getTracks().forEach(track => track.stop());

  }
  return (

  <main
    className="capturePage"
    onMouseMove={handleMouseMove}
  >

    {decorations.map((item, index) => (

      <FloatingDecoration
        key={index}
        src={item.src}
        alt=""
        top={item.top}
        left={item.left}
        size={item.size}
        rotation={item.rotation}
        xOffset={mouse.x * item.strength}
        yOffset={mouse.y * item.strength}
      />

    ))}

    <div className="captureContainer">

      <h1>Capture your creation</h1>

      <div className="cameraWrapper">

        <div className="cameraFeed">

          {!photo ? (

            <video
              ref={videoRef}
              className="cameraView"
              autoPlay
              playsInline
              muted
            />

          ) : (

            <img
              src={photo}
              className="cameraView"
            />

          )}

        </div>

        <img
          src={cameraFrame}
          className="cameraFrame"
          alt=""
        />
        
        <canvas
  ref={canvasRef}
  style={{ display: "none" }}
/>

      </div>
    
  <div className="cameraControls">

  {!photo ? (

    <button
      className="cameraButton"
      onClick={takePhoto}
    >
      Take Photo
    </button>

  ) : (

    <>

      <button
        className="cameraButton"
        onClick={() => {

  setPhoto(null);

  startCamera();

}}
      >
        Retake
      </button>

      <a
        className="cameraButton"
        href={photo}
        download="tzatziki.png"
      >
        Save
      </a>

    </>

  )}

</div>

    </div>
    
  </main>
  );
}