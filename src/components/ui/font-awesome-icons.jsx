import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faBolt,
  faPaw,
  faDragon,
  faWandMagicSparkles,
  faStar,
  faCompass,
  faVideo,
  faCode,
  faMusic,
  faLeaf,
  faRobot,
  faTasks,
  faAward,
  faClock,
  faChartLine,
  faCalculator,
  faMicroscope,
  faShieldHeart,
  faArrowLeft,
  faGraduationCap,
  faLanguage,
  faGlobe,
  faRocket,
  faBus,
  faPlus,
  faCalendar,
  faChevronLeft,
  faChevronRight,
  faXmark,
  faInfoCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export const FontAwesomeCrown = ({ className }) => (
  <FontAwesomeIcon icon={faCrown} className={className} />
);
export const FontAwesomeBolt = ({ className }) => (
  <FontAwesomeIcon icon={faBolt} className={className} />
);
export const FontAwesomePaw = ({ className }) => (
  <FontAwesomeIcon icon={faPaw} className={className} />
);
export const FontAwesomeDragon = ({ className }) => (
  <FontAwesomeIcon icon={faDragon} className={className} />
);
export const FontAwesomeWandMagicSparkles = ({ className }) => (
  <FontAwesomeIcon icon={faWandMagicSparkles} className={className} />
);
export const FontAwesomeSparkles = ({ className }) => (
  <FontAwesomeIcon icon={faStar} className={className} />
); // Using faStar since faSparkles doesn't exist
export const FontAwesomeCompass = ({ className }) => (
  <FontAwesomeIcon icon={faCompass} className={className} />
);
export const FontAwesomeVideo = ({ className }) => (
  <FontAwesomeIcon icon={faVideo} className={className} />
);
export const FontAwesomeCode = ({ className }) => (
  <FontAwesomeIcon icon={faCode} className={className} />
);
export const FontAwesomeMusic = ({ className }) => (
  <FontAwesomeIcon icon={faMusic} className={className} />
);
export const FontAwesomeLeaf = ({ className }) => (
  <FontAwesomeIcon icon={faLeaf} className={className} />
);
export const FontAwesomeRobot = ({ className }) => (
  <FontAwesomeIcon icon={faRobot} className={className} />
);

// Activities page icons
export const FontAwesomeTasks = ({ className }) => (
  <FontAwesomeIcon icon={faTasks} className={className} />
);
export const FontAwesomeAward = ({ className }) => (
  <FontAwesomeIcon icon={faAward} className={className} />
);
export const FontAwesomeClock = ({ className }) => (
  <FontAwesomeIcon icon={faClock} className={className} />
);
export const FontAwesomeChartLine = ({ className }) => (
  <FontAwesomeIcon icon={faChartLine} className={className} />
);
export const FontAwesomeCalculator = ({ className }) => (
  <FontAwesomeIcon icon={faCalculator} className={className} />
);
export const FontAwesomeMicroscope = ({ className }) => (
  <FontAwesomeIcon icon={faMicroscope} className={className} />
);

// Mentor Detail page icons
export const FontAwesomeShieldHeart = ({ className }) => (
  <FontAwesomeIcon icon={faShieldHeart} className={className} />
);
export const FontAwesomeArrowLeft = ({ className }) => (
  <FontAwesomeIcon icon={faArrowLeft} className={className} />
);
export const FontAwesomeGraduationCap = ({ className }) => (
  <FontAwesomeIcon icon={faGraduationCap} className={className} />
);
export const FontAwesomeLanguage = ({ className }) => (
  <FontAwesomeIcon icon={faLanguage} className={className} />
);
export const FontAwesomeGlobe = ({ className }) => (
  <FontAwesomeIcon icon={faGlobe} className={className} />
);
export const FontAwesomeRocket = ({ className }) => (
  <FontAwesomeIcon icon={faRocket} className={className} />
);

// Career Excursions page icons
export const FontAwesomeBus = ({ className }) => (
  <FontAwesomeIcon icon={faBus} className={className} />
);
export const FontAwesomePlus = ({ className }) => (
  <FontAwesomeIcon icon={faPlus} className={className} />
);
export const FontAwesomeCalendar = ({ className }) => (
  <FontAwesomeIcon icon={faCalendar} className={className} />
);
export const FontAwesomeChevronLeft = ({ className }) => (
  <FontAwesomeIcon icon={faChevronLeft} className={className} />
);
export const FontAwesomeChevronRight = ({ className }) => (
  <FontAwesomeIcon icon={faChevronRight} className={className} />
);
export const FontAwesomeX = ({ className }) => (
  <FontAwesomeIcon icon={faXmark} className={className} />
);
export const FontAwesomeInfoCircle = ({ className }) => (
  <FontAwesomeIcon icon={faInfoCircle} className={className} />
);
export const FontAwesomePaperPlane = ({ className }) => (
  <FontAwesomeIcon icon={faPaperPlane} className={className} />
);

export const FAIcon = ({ icon, className }) => {
  // This is a placeholder implementation that safely renders icons
  // We're using a simple span with the class to let Font Awesome handle the rendering
  return <i className={`fa-solid fa-${icon} ${className || ""}`}></i>;
};
