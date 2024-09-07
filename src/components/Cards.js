import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  let allCourses = [];

  //returns you a list of all courses received from the api response
  const getCourses = () => {
    if(category == "All"){
      Object.values(courses).forEach ((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }
    else{
      //category wise data array pass krega
      return courses[category];
    }
  }

  return(
    <div className="flex flex-wrap justify-center gap-4 mb-4" >
       {getCourses().map( (course) => {
        return <Card course = { course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses}/>
       })}
    </div>
  );
}

export default Cards;