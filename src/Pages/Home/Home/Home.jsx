import React from 'react';
import Banner from './Banner/Banner';
import PopularCourse from './PopularCourse/PopularCourse';
import PopularInstructors from './PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularCourse/>
            <PopularInstructors/>
        </div>
    );
};

export default Home;