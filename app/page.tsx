import FeaturedCourses from "@/components/ui/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";
import TestimonialCards from "@/components/ui/TestimonialCards";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Image from "next/image";
import UpcomingWebinars from "@/components/ui/UpcomingWebinars";
import Instructor from "@/components/ui/Instructor";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Instructor/>
    </>
    );
}
