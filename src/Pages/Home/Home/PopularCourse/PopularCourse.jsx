import React from 'react';
import SectionHeader from '../../../../Shared/SectionHeader/SectionHeader';
import useCourse from '../../../../assets/Hooks/useCourse';
import img from '../../../../assets/Instructors/ins.png'

const PopularCourse = () => {
    const [course] = useCourse();
    return (
        <div className='mt-28 max-h-fit'>
        <SectionHeader heading={"Popular Courses"}></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-2 lg:grid-cols-3 place-items-center">
        {course.map((img) => (
          <div key={course._id}>
            <section className="card w-80  my-2 border-b-4 rounded-tr-none rounded-bl-none border-t-4 border-blue-700 shadow-md hover:border-gray-950 hover:bg-green-100 shadow-green-100">
              <figure>
                <img className="w-full rounded-br-2xl h-[215px]" src={img.image} alt="" />
              </figure>
              <p
                className="font-bold absolute right-0 mr-2 bg-yellow-500 p-1
           rounded-md text-black mt-2 "
              >
                {img.name}
              </p>

            </section>
          </div>
        ))
        }
      </div>
      <div className="grid text-center items-center">
        
        <h1 className="text-3xl font-bold text-blue-600">Our Popular Courses</h1>
        <div>
          <img src={img} alt="" />
        </div>
        </div>
        </div>
        </div>
    );
};

export default PopularCourse;