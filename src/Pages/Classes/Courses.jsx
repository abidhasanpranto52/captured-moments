import React, { useEffect, useState } from "react";
import topBg from "../../assets/Banner/Topbg.jpg";
import { AiOutlineFieldTime } from "react-icons/ai";
import TopCover from "../../Shared/TopCover/TopCover";
import ClassCart from "../ClassCart/ClassCart";

const Courses = () => {
  const [coursesClass, setCourseClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => {
        setCourseClass(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <TopCover img={topBg} title={"Our Classes"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
        {coursesClass.map((course) => (
          <div key={course._id}>
          <section className="card w-80  my-5 border-b-4 rounded-tr-none rounded-bl-none border-t-4 border-green-700 shadow-md shadow-green-100">
              <figure>
                <img className="w-full" src={course.image} alt={name} />
              </figure>
              <p
                className="font-bold absolute right-0 mr-2 bg-yellow-500 p-1
           rounded-md text-black mt-2 "
              >
                {course.name}
              </p>

              <div className="card-body">
                <div className="flex  items-center justify-around">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-green-800 ring-offset-base-100 ring-offset-2">
                      <img src={course.instructorImg} />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-medium">{course.instructor}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-around">
                  <p className="card-title mb-2 text-green-600">
                    <AiOutlineFieldTime className="text-3xl"/> : {course.time}
                  </p>
                  <h2 className="card-title font-semibold">
                    Available Seats :{course.availableSeats}
                  </h2>
                </div>
                <hr />
                <div className="card-actions justify-between items-center">
                <h2 className="card-title  text-red-600 font-semibold">
                    Price : ${course.price}
                  </h2>
                  <button
                    onClick={() => handleCart(item)}
                    className="btn  btn-outline border-1 border-orange-500 item-center border-b-4 hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </section>
          </div>
        )) || {}}
      </div>
    </>
  );
};

export default Courses;
