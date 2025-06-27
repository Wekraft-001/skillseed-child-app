import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AgeSelection from "../../components/AgeSelection";
import FeaturesPreview from "../../components/FeaturesPreview";
import Sound from "../../assets/music.wav"

const QuizHome = () => {
  const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState(null);
  const audioRef = useRef(null);

  const handleAgeSelect = (age) => {
    setSelectedAge(age);
  };

  const handleContinue = () => {
    if (selectedAge) {
      navigate(`/quiz/${selectedAge}`);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((e) => {
        // Handle autoplay restrictions on some browsers
        console.log("Audio play prevented:", e);
      });
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <main>
        <AgeSelection
          selectedAge={selectedAge}
          onAgeSelect={handleAgeSelect}
          onContinue={handleContinue}
        />
        <FeaturesPreview />
      </main>
      {/* Background Music */}
      <audio
        ref={audioRef}
        // src="/sounds/fun-music.mp3"
        src={Sound}
        loop
        volume={0.3} // Note: volume attribute is not valid here, set via JS below
        preload="auto"
      />
    </div>
  );
};

export default QuizHome;
