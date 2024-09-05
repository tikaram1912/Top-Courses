import React from "react";
import {apiUrl, filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const[courses, SetCourses] = useState("");
  const[loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchData = async() => {
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // console.log(output);
        SetCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);

  return (
    <div>
      <div><Navbar/></div>
      <div>
      <Filter
       filterData = {filterData}
      />
      </div>
      <div>
        {
          loading ? <Spinner/> : <Cards 
          courses = {courses}
        />
        }
      </div>
    </div>
  );
}

export default App;