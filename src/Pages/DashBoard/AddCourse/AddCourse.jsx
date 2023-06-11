import React from "react";

const AddCourse = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="className"
              className="block text-sm font-medium text-gray-700"
            >
              Class Name
            </label>
            <input
              type="text"
              id="className"
              name="className"
              required
              className="form-input"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="classImage"
              className="block text-sm font-medium text-gray-700"
            >
              Class Image
            </label>
            <input
              type="file"
              id="classImage"
              name="classImage"
              required
              className="form-input"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="instructorName"
              className="block text-sm font-medium text-gray-700"
            >
              Instructor Name
            </label>
            <input
              type="text"
              id="instructorName"
              name="instructorName"
              readOnly
              value="John Doe" // Replace with the instructor's name
              className="form-input"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="instructorEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Instructor Email
            </label>
            <input
              type="email"
              id="instructorEmail"
              name="instructorEmail"
              readOnly
              value="john@example.com" // Replace with the instructor's email
              className="form-input"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="availableSeats"
              className="block text-sm font-medium text-gray-700"
            >
              Available Seats
            </label>
            <input
              type="number"
              id="availableSeats"
              name="availableSeats"
              required
              className="form-input"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              className="form-input"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
