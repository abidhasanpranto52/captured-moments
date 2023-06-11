import React, { useEffect, useState } from "react";
import TopCover from "../../Shared/TopCover/TopCover";
import topImg from "../../assets/Banner/Instructors.jpg";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
import useInstructor from "../../assets/Hooks/useInstructor";
import useCourse from "../../assets/Hooks/useCourse";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [course] = useCourse();
  const ourInstructors = course.filter((item) => item.name === "commercialPhotography");

  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        console.log(data);
      });
  }, []);

  // const [instructor] = useInstructor();
  return (
    <>
      <TopCover img={topImg} title={"Our Instructors"} subtitle={'You can enrolled '}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  place-items-center">
        {instructors.map((instructor) => (
          <div key={instructor._id}>
            <section className="card w-80   my-5 border-b-4 rounded-tr-none rounded-bl- border-green-700 shadow-md shadow-green-200">
              <figure>
                <img
                  className="w-full"
                  src={instructor.instructorImg}
                  alt={instructor.instructor}
                />
              </figure>

                  <hr />
              <div className="card-body">
                <div className="flex  items-center justify-between">
                  <div>
                    <p className="text-2xl font-medium">{instructor.instructor}</p>
                    <small className="bg-success p-1 capitalize rounded font-medium">{instructor.name}</small>
                  </div>
                  <div>
                    <Link to={`/instructorsInfo/${instructor._id}`}>
                      <button className="btn btn-circle  opacity-80 btn-outline bg-blue-100 border-1 border-blue-400 item-center hover:bg-indigo-300 hover:border-none hover:text-black">
                        <AiOutlineShareAlt className="text-3xl opacity-70 "/>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )) }
      </div>
    </>
  );
};

export default Instructors;
