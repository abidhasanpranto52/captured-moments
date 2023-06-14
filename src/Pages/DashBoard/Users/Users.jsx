import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaUsers } from "react-icons/fa";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../assets/Hooks/useAxiosSecure";

const Users = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    console.log(users);
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = user => {
    fetch(`https://captured-moment-server-abidhasanpranto52.vercel.app/users/admin/${user._id}`,{
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
  const handleMakeInstructor = user => {
    fetch(`https://captured-moment-server-abidhasanpranto52.vercel.app/users/instructor/${user._id}`,{
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
            title: `${user.name} is an Instructor Now`,
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
          fetch(`https://captured-moment-server-abidhasanpranto52.vercel.app/users/${user._id}`,{
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
              <th className="text-center">Role</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td className="font-semibold">{user.name}</td>
                <td>{user.email}</td>
                <td className="text-center">
                    {user?.role ? <p className="font-semibold capitalize bg-red-400 text-black btn btn-sm">{user.role}</p> : <p className="btn btn-xs">Student</p> }
                </td>
                <td className="flex gap-2 text-center">
                <div>
                  {" "}
                  {user.role  === "admin" ? (
                    <p className="font font-semibold bg-red-700 text-white  p-1 rounded-lg">Admin</p> 
                  ) : (
                    <button disabled={user.role === "admin" || user.role === "instructor"}
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm btn-ghost text-2xl text-black  bg-green-500"
                    >
                      <FaUsers />
                    </button>
                  )}
                </div>
                <div>
                  {" "}
                  {user.role === "instructor" ? (
                    <p className="font font-semibold bg-blue-800 text-white  p-1 rounded-lg">Instructor</p>
                  ) : (
                    <button disabled={user.role === "admin" || user.role === "instructor"}
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-ghost btn-sm text-2xl text-black  bg-green-500"
                    >
                      <FaUsers />
                    </button>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => handleUseDelete(user)}
                    className="btn btn-ghost text-2xl text-red-700 btn-sm border-black btn-outline "
                  >
                    <AiTwotoneDelete />
                  </button>
                </div>
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
