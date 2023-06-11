import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaUsers } from "react-icons/fa";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const Users = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    console.log(users);
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-middle',
            icon: 'success',
            title: `${user.name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  const handleUseDelete = user => {
    Swal.fire({
        title: "Are you sure?",
        text: `$Do you want to delete {user.name} Now`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/users/${user._id}`,{
            method: "DELETE"
          }).then((res) => res.json())
          .then(data => {
            if (data.deletedCount> 0) {
              refetch()
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
        }
      });
  }

  const handleInstructor = id =>{

  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Captured Moments | All Users</title>
      </Helmet>

      <SectionHeader heading={"Manage Users"}></SectionHeader>

      <h3 className="text-2xl font-semibold text-center mb-2">
        Total Users: {users.length}
      </h3>

      <div className="overflow-x-auto lg:overflow-visible w-full min-h-screen relative  md:px-20 px-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {" "}
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost text-2xl text-black  bg-green-500"
                    >
                      <FaUsers />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleUseDelete(user)}
                    className="btn btn-ghost text-2xl text-white  bg-red-600"
                  >
                    <AiTwotoneDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
