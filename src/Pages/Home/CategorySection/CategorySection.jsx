import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./CategorySection.css";
import CarCard from "../CarCard/CarCard";

const CategorySection = () => {
  const [currentCategory, setCurrentCategory] = useState("racing car");
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/alltoys?category=${currentCategory}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [currentCategory]);
  return (
    <div className="my-5 mx-10 flex flex-col justify-center items-center">
      <h2 className="my-5 text-3xl font-semibold">Shop By Category</h2>

      <div>
        <Tabs>
          <TabList>
            <Tab onClick={() => setCurrentCategory("racing car")}>
              Racing Car
            </Tab>
            <Tab onClick={() => setCurrentCategory("medical vehicle")}>
              Medical Vehicle
            </Tab>
            <Tab onClick={() => setCurrentCategory("remote car")}>
              Remote Car
            </Tab>
            <Tab onClick={() => setCurrentCategory("electric car")}>
              Electric Car
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {cars &&
                cars
                  .slice(0, 3)
                  .map((car) => (
                    <CarCard key={car._id} carinfo={car}></CarCard>
                  ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-3">
              {cars &&
                cars
                  .slice(0, 3)
                  .map((car) => (
                    <CarCard key={car._id} carinfo={car}></CarCard>
                  ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {cars &&
                cars
                  .slice(0, 3)
                  .map((car) => (
                    <CarCard key={car._id} carinfo={car}></CarCard>
                  ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {cars &&
                cars
                  .slice(0, 3)
                  .map((car) => (
                    <CarCard key={car._id} carinfo={car}></CarCard>
                  ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CategorySection;
