import React from "react";
import Card from "./Card";

const Cards = ({courses}) => {

  let allCourses = [];

  //returns you a list of all courses received from the api response
  const getCourses = () => {
    Object.values(courses).forEach ((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      })
    })
    return allCourses;
  }

  return(
    <div>
       {getCourses().map( (course) => {
        return <Card course = { course} />
       })}
    </div>
  );
}

export default Cards;