import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import useCourse from "../../../assets/Hooks/useCourse";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const SelectedClass = () => {
  const [carts, setCarts] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/carts")
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionHeader
        heading={"My Selected Items "}
        subHeading={"I Choose This Courses"}
      ></SectionHeader>

      <div className="uppercase flex  items-center justify-evenly ">
        {/* <h3 className="text-2xl">Total items: {length}</h3> */}
      </div>

      <div className="overflow-x-auto lg:overflow-visible w-full min-h-screen relative  md:px-20 px-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost text-2xl text-white  bg-red-600"
                  >
                    <AiTwotoneDelete />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost text-2xl text-white  bg-green-600"
                  >Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // <h1>hello</h1>
  );
};

export default SelectedClass;
