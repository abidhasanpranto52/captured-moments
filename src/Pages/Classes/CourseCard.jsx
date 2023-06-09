import React from "react";

const CourseCard = ({ course }) => {
  const {name, instructor, availableSeats, price, image}= course;
  return (
    <>
      <div className="card w-80 h-[450px] my-5 border-b-2 border-t-2 border-red-800 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <p
        className="font-bold absolute right-0 mr-2 bg-black p-1
           rounded-md text-yellow-600 mt-2 "
      >
        Price: $ {price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p>{instructor}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleCart(item)}
            className="btn  btn-outline border-1 item-center border-b-4 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CourseCard;
