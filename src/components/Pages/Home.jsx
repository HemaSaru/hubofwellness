import Slider from "../Slider";
import WhoWeAre from "./HomeSections/WhoWeAre";
import OurTherapies from "./HomeSections/OurTherapies";
import CTASection2 from "./HomeSections/CTA2";
import WhatClientsSay from "./HomeSections/WhatClientsSay";

const DEFAULT_SLIDES = [
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/img5.jpeg",
    title: "Step Into Serenity",
    caption: "Explore our portal for limitleess transformation",
    buttonText: "Know More",
    buttonLink: ""
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/img1.jpeg",
    title: "Inspire Your Journey",
    caption: "Dive into Wellness Insights on Our Blog",
    buttonText: "Know More",
    buttonLink: ""
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/img4.jpeg",
    title: "Discover Our Mission",
    caption: "Your Partner in Holistic Health and Healing",
    buttonText: "Know More",
    buttonLink: ""
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/img2.jpeg",
    title: "Hear The Stories",
    caption: "Real Transformations, Real People, Real Stories",
    buttonText: "Know More",
    buttonLink: ""
  },
];

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden flex flex-col">
      <Slider slides={DEFAULT_SLIDES} />
      <WhoWeAre />
      <OurTherapies />
      <CTASection2 />
      <WhatClientsSay />
    </main>
  );
}