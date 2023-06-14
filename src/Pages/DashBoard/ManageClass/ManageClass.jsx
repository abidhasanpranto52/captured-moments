import React from "react";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../Providers/Authprovider";
import useCart from "../../../assets/Hooks/useCart";

const ManageClass = () => {
  const [coursesClass, setCourseClass] = useState([]);
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/course")
      .then((res) => res.json())
      .then((data) => {
        setCourseClass(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="w-full">
      <Helmet>
        <title>Captured Moments | All Users</title>
      </Helmet>

      <SectionHeader heading={"Manage Courses"}></SectionHeader>

      <h3 className="text-2xl font-semibold text-center mb-2">
        Total Courses: {coursesClass.length}
      </h3>

      <div className="overflow-x-auto lg:overflow-visible w-full min-h-screen relative  md:px-20 px-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Course Name</th>
              <th>Instructor Name</th>
              <th>Available seats</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {coursesClass.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={course.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{course.name}</p>
                </td>
                <td>
                  <p className="font-medium">{course.displayName}</p>
                  <small>{course.email}</small>
                </td>
                <td></td>
                <td>$ {course.price}</td>
                <td className="flex gap-2 justify-center items-center">
                  <button className="btn btn-sm text-white  bg-lime-600 hover:text-black">
                    Approve
                  </button>
                  <button className="btn btn-sm text-white  bg-error hover:text-black">
                    Denied
                  </button>

                  {/* Open the modal using ID.showModal() method */}
                  <button
                    className="btn btn-sm capitalize "
                    onClick={() => window.my_modal_5.showModal()}
                  >
                    FeedBack
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <form method="dialog" className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click the button below to close
                      </p>
                      <div className="modal-action">
                        <button className="btn">Okay</button>
                      </div>
                    </form>
                  </dialog>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
