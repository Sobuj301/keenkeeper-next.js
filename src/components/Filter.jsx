import React from 'react';

const Filter = ({ setFilter }) => {
    const handleSelect = (type) => {
        setFilter(type);
        if (document.activeElement) {
            document.activeElement.blur();
        }
    };

    return (
        <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Filter</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm">
                <li><button onClick={() => handleSelect("all")}>All</button></li>
                <li><button onClick={() => handleSelect("call")}>Call</button></li>
                <li><button onClick={() => handleSelect("text")}>Text</button></li>
                <li><button onClick={() => handleSelect("video")}>Video</button></li>
            </ul>
        </div>
    );
};

export default Filter;