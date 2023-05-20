import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategorySection = () => {
  return (
    <div className="my-5 mx-10 flex justify-center">
      <Tabs>
        <TabList>
          <Tab>Racing Car</Tab>
          <Tab>Medical Vehicle</Tab>
          <Tab>Remote Car</Tab>
          <Tab>Electric Car</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategorySection;
