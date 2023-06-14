import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Providers/Authprovider";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import Swal from "sweetalert2";
import useCart from "../../../assets/Hooks/useCart";
import { FiEdit, FiDelete } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

const CourseCard = () => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const [course, setCourse] = useState([]);

  const url = `http://localhost:5000/myCourse/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        console.log(data);
      });
  }, [user]);


  const handleCourseUpdate = (myClass) => {
    
  }


  const handleDelete = (myClass) => {
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
        fetch(`http://localhost:5000/myCourse/${myClass._id}`, {
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
      <SectionHeader
        heading={`My Added Course : ${course.length}`}
      ></SectionHeader>
      <p className="text-center text-red-800">
        -----------------------------------
      </p>
      <div className="overflow-x-auto lg:overflow-visible w-full min-h-screen relative  md:px-20 px-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th className="text-center">Students</th>
              <th className="text-center">Status</th>
              <th className="text-center">Feedback</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {course.map((myClass, index) => (
              <tr key={myClass._id}>
                <td>{index + 1}</td>
                <td className="font-semibold">{myClass.name}</td>
                <td className="text-red-700 font-medium">$ {myClass.price}</td>
                <td className="text-center">{"Students"}</td>
                <td className="text-center">{"Approve"}</td>
                <td className="text-center">
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
                <td className="text-center">
                  <div className="tooltip tooltip-info" data-tip="Update">
                    <Link to={`/dashboard/updateCourse/${myClass._id}`}>
                      <button
                        onClick={() => handleCourseUpdate(myClass)}
                        className="btn btn-ghost btn-sm  text-white hover:text-black items-center bg-green-600"
                      >
                        <FiEdit />
                      </button>
                    </Link>
                  </div>

                  <div className="tooltip tooltip-warning" data-tip="Delete">
                    <button
                      onClick={() => handleDelete(myClass)}
                      className="btn btn-ghost btn-sm  text-white hover:text-black items-center bg-red-600"
                    >
                      <FiDelete />
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

export default CourseCard;
