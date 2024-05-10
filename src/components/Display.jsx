import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DispalyHome from "./DispalyHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from '../assets/assets';

const Display = () => {
  const dispalyRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : '';
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if(isAlbum){
      dispalyRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      dispalyRef.current.style.background = `#121212`;
      
    }
  })

  return (
    <div
      ref={dispalyRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    
    >

      <Routes>
        <Route path="/" element={<DispalyHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
