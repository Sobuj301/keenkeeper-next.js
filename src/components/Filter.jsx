import React, { useState } from 'react';

const Filter = ({setFilter}) => {
  
    return (
        <div className="dropdown dropdown-hover dropdown-right">
            <div tabIndex={0} role="button" className="btn m-1">Filter</div>
            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><button onClick={() =>setFilter("all")}>All</button></li>
                <li><button onClick={() =>setFilter("call")}>Call</button></li>
                <li><button onClick={() =>setFilter("text")}>Text</button></li>
                <li><button onClick={() =>setFilter("video")}>Video</button></li>
            </ul>
        </div>
    );
};

export default Filter;