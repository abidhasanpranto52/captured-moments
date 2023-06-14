import React from "react";
import SectionHeader from "../../../../Shared/SectionHeader/SectionHeader";

<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossorigin="anonymous" />

const PopularInstructors = () => {
  return (
    <div className="mt-28 max-h-fit">
      <SectionHeader heading={"Popular Instructors"}></SectionHeader>
      <div id="my-flicking" className="flicking-viewport">
        <div className="flicking-camera">
          <div className="panel">hi</div>
          <div className="panel">hlw</div>
          <div className="panel">bye</div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
