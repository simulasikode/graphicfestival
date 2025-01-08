// FloatingImages.tsx
import { useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const FloatingImages = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Select all images with the class .floating-image
    const images = document.querySelectorAll(".floating-image");

    images.forEach((image, index) => {
      // Add a floating animation for each image with the yoyo effect
      gsap.fromTo(
        image,
        {
          y: 0, // Initial vertical position
          opacity: 1, // Initial opacity
        },
        {
          y: index % 0 === 2 ? -100 : 100, // Alternate direction: up for even, down for odd
          opacity: 0.6, // Fade out as it floats
          scrollTrigger: {
            trigger: image,
            start: "top 80%", // Start when the top of the image is near the viewport
            end: "top 30%", // End when the image is near the top of the viewport
            scrub: 1, // Smooth scrolling effect
            markers: false, // Disable markers after debugging
          },
        },
      );
    });
  }, []);

  return (
    <>
      {/* Image 1 */}
      <Image
        className="floating-image"
        src="/images/image2.png"
        alt="Floating Image 1"
        position="absolute"
        top={{ base: "50%", md: "60%" }} // Position for Image 1
        left="6%"
        transform="translateX(-50%)"
        width="80px"
        zIndex={2}
      />

      {/* Image 2 */}
      <Image
        className="floating-image"
        src="/images/image1.png"
        alt="Floating Image 2"
        position="absolute"
        top={{ base: "0%", md: "-5%" }} // Position for Image 2
        left="90%"
        transform="translateX(-80%)"
        width="80px"
        zIndex={2}
      />

      {/* Image 3 */}
      <Image
        className="floating-image"
        src="/images/image3.png"
        alt="Floating Image 2"
        position="absolute"
        top={{ base: "90%", md: "30%" }} // Position for Image 2
        left={{ base: "20%", md: "60%" }}
        transform="translateX(-50%)"
        width="140px"
        zIndex={2}
      />
    </>
  );
};

export default FloatingImages;
