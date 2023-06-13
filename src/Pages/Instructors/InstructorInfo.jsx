import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import topImg from "../../assets/Banner/Instructors.jpg";
import TopCover from "../../Shared/TopCover/TopCover";
import useInstructor from "../../assets/Hooks/useInstructor";

const instructor = () => {


  return (
    <>
      <TopCover img={topImg}  subtitle={'You can enrolled My Course'} />
      {/* <div className="border-2 max-w-screen-lg mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="border m-2  shadow-lg rounded-md">
            <img className="flex " src={instructors.image} alt="" />
          </div>
          <div className="px-4 col-span-2">
            <div className=" flex my-5 place-items-center justify-between">
              <div>
                <h2 className="font-bold my-2 text-3xl">
                  {instructors.instructor}
                </h2>
                <small className="capitalize bg-yellow-300 rounded-sm px-2 m-1 font-semibold">
                  {instructors.name}
                </small>
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
              <p>
                suada faci lisis Lorem ipsum dolarorit more ametion consectetur
                elit. Vesti bulum a nec odio aea theawr dumm ipsumm ipsum that
                dolocons rsus suada and fadolorit consectetur elit. All the
                Lorem Ipsum generators on their the Internet tend repeat
                predefined chunks dumme lisis Lorem.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default instructor;
