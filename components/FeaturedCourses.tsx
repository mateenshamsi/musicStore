"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="uppercase text-teal-500 text-base tracking-wide  font-semibold ">
            Featured Courses
          </h2>
          <p className="uppercase  text-base tracking-wide  font-semibold ">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
        {featuredCourses.map((course: Course) => (
          <div key={course.id} className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px]  p-4 sm:p-10 bg-white overflow-hidden h-full max-w-sm  dark:bg-zinc-900">
              <div className="flex flex-col p-4 sm:p-6 items-center overflow-hidden text-center  ">
                <p>{course.title}</p>
                <p>{course.description}</p>
                <Link href={`/courses/${course.slug}`}>
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>View All Courses</Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
