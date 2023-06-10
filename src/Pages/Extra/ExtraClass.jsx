import useInstructor from '../../assets/Hooks/useInstructor';
import { Helmet } from "react-helmet-async";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ClassCart from '../ClassCart/ClassCart';
const ExtraClass = () => {
    
    const catagories = ['commercialPhotography', 'eventPhotography', 'foodPhotography','architecturalPhotography','wildlifePhotography','sportsPhotography','travelPhotography']
    const {classes} = useParams();
    const initialIndex = catagories.indexOf(classes);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [instructor] = useInstructor();
    const commercialPhotograph = instructor.filter((item) => item.classes === "commercialPhotography");
    const eventPhotograph = instructor.filter((item) => item.classes === "eventPhotography");
    const foodPhotograph = instructor.filter((item) => item.classes === "foodPhotography");
    const architecturalPhotograph = instructor.filter((item) => item.classes === "architecturalPhotography");
    const wildlifePhotograph = instructor.filter((item) => item.classes === "wildlifePhotography");
    const sportsPhotograph = instructor.filter((item) => item.classes === "sportsPhotography");
    const travelPhotograph = instructor.filter((item) => item.classes === "travelPhotography");
    return (
        <div>
        <Helmet>
          <title>Bistro Boss | Shop</title>
        </Helmet>
        <Tabs className="border mb-2 rounded-md items-center" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center p-4 font-bold">
            <Tab>Commercial</Tab>
            <Tab>Event</Tab>
            <Tab>Food</Tab>
            <Tab>Architecture</Tab>
            <Tab>Wildlife</Tab>
            <Tab>Sports</Tab>
            <Tab>Travel</Tab>
          </TabList>
          <TabPanel >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
              {commercialPhotograph.map((item) => (
                <ClassCart key={item._id} item={item}></ClassCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  ">
              {eventPhotograph.map((item) => (
                <FoodCart key={item._id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
              {foodPhotograph.map((item) => (
                <FoodCart key={item._id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
              {architecturalPhotograph.map((item) => (
                <FoodCart key={item._id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
              {wildlifePhotograph.map((item) => (
                <FoodCart key={item._id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
              {sportsPhotograph.map((item) => (
                <FoodCart key={item._id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
              {travelPhotograph.map((item) => (
                <FoodCart key={item._id} item={item}></FoodCart>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default ExtraClass;