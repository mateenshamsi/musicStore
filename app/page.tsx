import FeaturedCourses from "@/components/ui/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";
import TestimonialCards from "@/components/ui/TestimonialCards";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    </>
    );
}
