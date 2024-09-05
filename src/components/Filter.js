import React from "react";

const Filter = ({ filterData }) => {
  return (
    <div className="w-11/12 flex flex-wrap max-w-max gap-y-4 space-x-4 mx-auto py-4 justify-centre">
      {filterData.map((data) => {
        return (
        <button 
          className={`text-lg px-2 py-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300`}
        >
          {data.title}
        </button>)
      })}
    </div>
  );
}

export default Filter;