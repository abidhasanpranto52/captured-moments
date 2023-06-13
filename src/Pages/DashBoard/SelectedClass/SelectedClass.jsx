import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import { AiTwotoneDelete } from "react-icons/ai";
import { AuthContext } from "../../../Providers/Authprovider";
import Swal from "sweetalert2";
import useCart from "../../../assets/Hooks/useCart";

const SelectedClass = () => {
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/carts?email=${user?.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [user]);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Captured Moments| Selected Courses</title>
      </Helmet>
      <SectionHeader heading={"My Selected Classes "}></SectionHeader>

      {cart.map((item) => (
        <div key={item._id}>
          <div className=" max-w-screen-md  mx-auto bg-gradient-to-r from-[#caab453b] to-[#2974d01b] rounded-md my-2">
            <div className="grid grid-cols-1 items-center md:grid-cols-4">
              <div className="">
                <div className="avatar border m-2 rounded-md">
                  <div className="w-32 rounded">
                    <img src={item.image}/>
                  </div>
                </div>
              </div>
              <div className="px-4 col-span-3">
                <div className=" flex my-2 place-items-center justify-between">
                  <div>
                    <h2 className="font-bold capitalize my-1 items-center text-black ">
                      Instructor Name:{" "}
                      <span className="text-red-500 text-3xl">
                        {item.instructor}
                      </span>
                    </h2>
                    <h2 className="font-semibold capitalize my-1 text-black ">
                      Course Name : {item.name}
                    </h2>
                    <h2 className="capitalize my-1 text-red-600  font-semibold">
                      Course Price :{" "}
                      <span className="border-2 border-green-700 px-2 rounded-lg">
                        {" "}
                        ${item.price}
                      </span>
                    </h2>
                  </div>
                  <div className="flex-col gap-4 place-items-center items-center">
                    <div className="mb-2">
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-ghost btn-sm border-black text-2xl btn-outline  text-red-600 hover:border-red-800 hover:text-black hover:bg-transparent"
                      >
                        <AiTwotoneDelete />
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => handlePay(item)}
                        className="btn btn-ghost btn-sm  capitalize text-white hover:text-black items-center bg-green-600"
                      >
                        Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    // <h1>hello</h1>
  );
};

export default SelectedClass;
