import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import { AuthContext } from "../../../Providers/Authprovider";
import { json } from "react-router-dom";
import Swal from "sweetalert2";

const img_token = import.meta.env.VITE_image_upload_token;

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`;

  const onSubmit = (data) => {
    console.log("submitted Data", data);
    // Handle form submission logic here

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        console.log(imageResponse);
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const { name, seats, price } = data;
          const newItem = {
            name,
            displayName: user.displayName,
            email: user.email,
            instructorImg: user.photoURL,
            seats,
            price: parseFloat(price),
            image: imgURL,
          };
          console.log(newItem);
          fetch("https://captured-moment-server-abidhasanpranto52.vercel.app/course", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('access-token')}`,
            },

            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("new data", data);
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-middle",
                  icon: "success",
                  title: "Your Course has been Added",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };
  // console.log(img_token);
  return (
    <div className="w-full p-4">
      <Helmet>
        <title>Captured Moments | Add Item</title>
      </Helmet>

      <SectionHeader heading={"Add An Item"}></SectionHeader>
      <br />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl mx-auto border p-7 bg-gradient-to-r from-[#45ca833b] to-[#2974d01b] rounded-md"
      >
        <div className="form-control  w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Course Name</span>
          </label>
          <input
            type="text"
            placeholder="Course Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input bg-transparent input-bordered w-full "
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              placeholder="Instructor Name"
              defaultValue={user?.displayName}
              readOnly
              {...register("instructorName", {
                required: true,
              })}
              className="input bg-transparent font-bold input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              {...register("email", { required: true })}
              placeholder="Type here"
              className="input bg-transparent input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Seats</span>
            </label>
            <input
              type="number"
              {...register("seats", { required: true })}
              placeholder="Type here"
              className="input bg-transparent input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input bg-transparent input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Course Details</span>
          </label>
          <textarea
            {...register("details", { required: true })}
            className="textarea bg-transparent textarea-bordered h-24"
            placeholder="Course Details"
          ></textarea>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Course Thumbnail</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input bg-transparent file-input-bordered w-full "
          />
        </div>
        <input
          className="btn btn-block mt-4 bg-lime-600 hover:bg-orange-800 hover:text-white"
          type="submit"
          // disabled //todo
          value="Add Item "
        />
      </form>
    </div>
  );
};

export default AddCourse;
