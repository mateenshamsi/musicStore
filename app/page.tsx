import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import UpcomingWebinars from "@/components/ui/UpcomingWebinars";
import Instructor from "@/components/Instructor";
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <>
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Instructor/>
    <Footer/> 
    </>
    );
}
