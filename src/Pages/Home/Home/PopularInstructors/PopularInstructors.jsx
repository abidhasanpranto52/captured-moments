import {useState, useEffect} from "react";
import SectionHeader from "../../../../Shared/SectionHeader/SectionHeader";
import img from '../../../../assets/Instructors/ins.png'

<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossorigin="anonymous" />

const PopularInstructors = () => {

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        console.log(data);
      });
  }, []);


  return (
    <div className="mt-28 max-h-fit">
      <SectionHeader heading={"Popular Instructors"}></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
        <div className="grid text-center items-center">
        
        <h1 className="text-3xl font-bold text-blue-600">Our Popular Instructors</h1>
        <div>
          <img src={img} alt="" />
        </div>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-2 place-items-center">
        {instructors.map((instructor) => (
          <div key={instructor._id}>
            <section className="card h-[270px] border-b-4 rounded-tr-none rounded-bl- border-green-700 shadow-md shadow-green-200">
              <figure>
                <img
                  className="h-full"
                  src={instructor.image}
                  alt={""}
                />
              </figure>
              <div className="card-body">
                <div className="flex  items-center justify-between">
                  <div>
                    <p className="font-medium">{instructor.name}</p>
                    <small className="bg-black text-white p-1 rounded font-medium">{instructor.email}</small>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )) }
      </div>
        
      </div>
    </div>
  );
};

export default PopularInstructors;
