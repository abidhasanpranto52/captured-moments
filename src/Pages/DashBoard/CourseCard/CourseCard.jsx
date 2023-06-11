import React from 'react';

const CourseCard = ({ className, classImage, status, enrolledStudents, feedback }) => {
    return (
        <div className="p-4 border rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">{className}</h2>
        <span className="px-2 py-1 text-sm font-semibold uppercase bg-gray-200 rounded-full">
          {status}
        </span>
      </div>
      <img src={classImage} alt={className} className="w-full h-32 object-cover mb-4" />
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div>
          Enrolled Students:{' '}
          <span className="font-medium text-gray-900">{enrolledStudents}</span>
        </div>
        <div>
          Feedback:{' '}
          {status === 'denied' ? (
            <span className="italic">{feedback}</span>
          ) : (
            <span className="italic text-gray-500">No feedback available</span>
          )}
        </div>
      </div>
      <button className="btn btn-primary mt-4">Update</button>
    </div>
    );
};

export default CourseCard;