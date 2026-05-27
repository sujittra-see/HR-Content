import type { ImageMetadata } from "astro";

import archAiArchives from "../assets/4.jpg";
import kkuArchivesAgent from "../assets/2.jpg";
import kkuArchivesHub from "../assets/3.jpg";
import activityCareer from "../assets/Ac1.jpg";
import activityShowcase from "../assets/Ac2.jpeg";
import activityItalk from "../assets/Ac3.jpg";
import activityCamp from "../assets/Ac4-1.jpg";
import activityCarnival from "../assets/Ac5-1.jpg";
import illustratorIcon from "../assets/Adobe_Illustrator_CC_icon.svg.png";
import photoshopIcon from "../assets/Adobe_Photoshop_CC_icon.svg.png";
import lightroomIcon from "../assets/Adobe_Photoshop_Lightroom_Classic_CC_icon.svg.png";
import certUxUi from "../assets/Cert1.png";
import certData from "../assets/Cert2.png";
import certIko from "../assets/Cert3.JPG";
import certEtiquette from "../assets/Cert4.JPG";
import certMobiLib from "../assets/Cert5.JPG";
import landscapeEdited from "../assets/DSC00908-1.jpg";
import landscapeOriginal from "../assets/DSC00908.jpg";
import portraitEdited from "../assets/DSC04801-1.jpg";
import portraitOriginal from "../assets/DSC04801.jpg";
import cinematicEdited from "../assets/DSC07085-1.jpg";
import cinematicOriginal from "../assets/DSC07085.jpg";
import lanternEdited from "../assets/DSC09156-1.jpg";
import lanternOriginal from "../assets/DSC09156.jpg";
import restaurantPoster from "../assets/DS_Poster-Final_page-0001 (1).jpg";
import sheetsIcon from "../assets/Google_Sheets_Logo_512px.png";
import slidesIcon from "../assets/Google_Slides_Logo_512px.png";
import profileImage from "../assets/IMG_2598-Photoroom-1.png";
import powerpointIcon from "../assets/Microsoft_Office_PowerPoint.svg.png";
import powerBiIcon from "../assets/New_Power_BI_Logo.svg-2.png";
import canvaIcon from "../assets/canva.svg";
import capcutIcon from "../assets/capcut.png.webp";
import figmaIcon from "../assets/figma.png.webp";
import italkPost from "../assets/iTalk-1.jpg";
import italkDescription from "../assets/iTalk-3.jpg";
import showcasePoster from "../assets/showcase.jpg";

const images: Record<string, ImageMetadata> = {
  "2.jpg": kkuArchivesAgent,
  "3.jpg": kkuArchivesHub,
  "4.jpg": archAiArchives,
  "Ac1.jpg": activityCareer,
  "Ac2.jpeg": activityShowcase,
  "Ac3.jpg": activityItalk,
  "Ac4-1.jpg": activityCamp,
  "Ac5-1.jpg": activityCarnival,
  "Adobe_Illustrator_CC_icon.svg.png": illustratorIcon,
  "Adobe_Photoshop_CC_icon.svg.png": photoshopIcon,
  "Adobe_Photoshop_Lightroom_Classic_CC_icon.svg.png": lightroomIcon,
  "Cert1.png": certUxUi,
  "Cert2.png": certData,
  "Cert3.JPG": certIko,
  "Cert4.JPG": certEtiquette,
  "Cert5.JPG": certMobiLib,
  "DSC00908-1.jpg": landscapeEdited,
  "DSC00908.jpg": landscapeOriginal,
  "DSC04801-1.jpg": portraitEdited,
  "DSC04801.jpg": portraitOriginal,
  "DSC07085-1.jpg": cinematicEdited,
  "DSC07085.jpg": cinematicOriginal,
  "DSC09156-1.jpg": lanternEdited,
  "DSC09156.jpg": lanternOriginal,
  "DS_Poster-Final_page-0001 (1).jpg": restaurantPoster,
  "Google_Sheets_Logo_512px.png": sheetsIcon,
  "Google_Slides_Logo_512px.png": slidesIcon,
  "IMG_2598-Photoroom-1.png": profileImage,
  "Microsoft_Office_PowerPoint.svg.png": powerpointIcon,
  "New_Power_BI_Logo.svg-2.png": powerBiIcon,
  "canva.svg": canvaIcon,
  "capcut.png.webp": capcutIcon,
  "figma.png.webp": figmaIcon,
  "iTalk-1.jpg": italkPost,
  "iTalk-3.jpg": italkDescription,
  "showcase.jpg": showcasePoster,
};

export function getImage(name: string) {
  const image = images[name];
  if (!image) throw new Error(`Missing image asset: ${name}`);
  return image;
}
