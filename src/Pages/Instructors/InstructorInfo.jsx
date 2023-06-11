import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import topImg from "../../assets/Banner/Instructors.jpg";
import TopCover from "../../Shared/TopCover/TopCover";

const InstructorInfo = () => {
  const instructorInfo = useLoaderData();
  console.log(instructorInfo);

  return (
    <>
      <TopCover img={topImg} title={instructorInfo.instructor} />
      <div className="border-2 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border m-2  shadow-lg rounded-md">
            <img className="flex " src={instructorInfo.instructorImg} alt="" />
          </div>
          <div className="px-4">
            <div className=" flex my-5 place-items-center justify-between">
              <div><h2 className="font-bold my-2 text-3xl">
                {instructorInfo.instructor}
              </h2>
                {/* <p className="font-medium">{instructorInfo.classes [0]+"  "}</p> */}
                {instructorInfo.classes.map( (item, index)=> <p key={index} className="capitalize bg-yellow-300 rounded-sm m-1 font-semibold">
                  {item}
                </p> )}
              </div>
              <div className="flex gap-2">
                <FaFacebookF className="btn btn-circle btn-outline btn-sm p-1" />
                <FaInstagram className="btn btn-circle btn-outline btn-sm p-1" />
                <FaYoutube className="btn btn-circle btn-outline btn-sm p-1" />
                <FaTwitter className="btn btn-circle btn-outline btn-sm p-1" />
              </div>
            </div>
            <hr />
          <div>
            <h4 className="font-semibold text-2xl my-3">Short Bio :</h4>
            <p>suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti bulum a nec odio aea theawr dumm ipsumm ipsum that dolocons rsus suada and fadolorit consectetur elit. All the Lorem Ipsum generators on their the Internet tend repeat predefined chunks dumme lisis Lorem.</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorInfo;
