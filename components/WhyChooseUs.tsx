import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'
const content = [ {
    title: "Guitar Fundamentals",
    description: "Learn the basics of playing guitar with our comprehensive beginner's course.",
  },
  {
    title: "Piano for Beginners",
    description: "Start your musical journey with foundational piano skills taught by expert instructors.",
   },
  {
    title: "Advanced Vocal Techniques",
    description: "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
   },
  {
    title: "Drumming Mastery",
    description: "Master the drums with our comprehensive course covering all skill levels.",
   },
  {
    title: "Jazz Improvisation",
    description: "Learn the art of jazz improvisation with this course designed for all levels.",
   },
  {
    title: "Music Production Fundamentals",
    description: "Dive into music production with this introductory course on the basics of sound engineering and mixing.",
   },
  {
    title: "Songwriting Essentials",
    description: "Learn the essentials of songwriting to express your musical creativity.",
   },
  {
    title: "Electronic Music Production",
    description: "Create compelling electronic music with our course designed for beginners to advanced users.",
   },
  {
    title: "Classical Music History",
    description: "Explore the rich history of classical music from its origins to the present day.",
   },
  {
    title: " Blues Guitar Techniques",
    description: "Discover the techniques of blues guitar to add soul and depth to your playing.",
    }] 
function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content}></StickyScroll>
    </div>
  )
}

export default WhyChooseUs
