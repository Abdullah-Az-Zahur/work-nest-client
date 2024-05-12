import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TabCategories = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getData();
  }, []);

  return (
    <div className="">
      <Tabs>
        <div className="container mx-auto">
          <div className="text-center mx-auto my-9">
            <h1 className="text-3xl font-bold mb-6">Popular Job Categories</h1>
            <p className="text-gray-500">
              Know your worth and find the job that qualify your life
            </p>
          </div>
          <div className="flex items-center justify-center">
            <TabList>
              <Tab>On Site Job</Tab>
              <Tab>Remote Job</Tab>
              <Tab>Hybrid Job</Tab>
              <Tab>Part Time Job</Tab>
              <Tab>All Jobs</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jobs
                // eslint-disable-next-line react/prop-types
                .filter((j) => j.category === "On Site")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jobs
                // eslint-disable-next-line react/prop-types
                .filter((j) => j.category === "Remote")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jobs
                // eslint-disable-next-line react/prop-types
                .filter((j) => j.category === "Hybrid")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jobs
                // eslint-disable-next-line react/prop-types
                .filter((j) => j.category === "Part Time")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jobs
                // eslint-disable-next-line react/prop-types
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabCategories;
