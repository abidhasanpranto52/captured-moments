import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [coursesClass, setCourseClass] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => {
        setCourseClass(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
      {coursesClass.map((course) => (
        <div key={course._id} >
          <section className="card w-80 h-[450px] my-5 border-b-4 rounded-tr-none rounded-bl-none border-t-4 border-green-700 shadow-2xl">
            <figure>
              <img className="w-full" src={course.image} alt={name} />
            </figure>
            <p
              className="font-bold absolute right-0 mr-2 bg-yellow-500 p-1
           rounded-md text-black mt-2 "
            >
              {course.name}
            </p>
            <div className="card-body flex flex-col items-center">
              <h2 className="card-title text-2xl font-bold">{name}</h2>
              <p>{course.instructor}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleCart(item)}
                  className="btn  btn-outline border-1 item-center border-b-4 mt-4"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </section>
        </div>
      )) || {}}
    </div>
  );
};

export default Courses;
