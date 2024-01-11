import React from "react";
import "./Filter.css";
import Popup from 'reactjs-popup';
import { IoSearchSharp } from "react-icons/io5";


function Filter({labels, onInputChange, searchTerm}) {

    const handleInputChange = (event, label) => {
            onInputChange(label, event.target.value);
        };

    const getSearchTermValue = (label) => {
        const term = searchTerm.find((term) => term[0] === label.toLowerCase().replace(/\s+/g, ''));
        if (term) {
            return term[1];
        }
        return "";
    }

    const clearFilters = () => {
        searchTerm.map((term) => {
            term[1] = "";
        });
    }

    return (
        <Popup trigger={<button className="filter-popup-button"> <IoSearchSharp /> <span className="tooltip-text">Open Filter</span> </button>} position="left center">
            <div className="filter-popup">
                <section className="filter-section">
                    <h4>Filter by: </h4>
                    {labels.map((label) => (
                        <div>
                            <label>{label}</label>
                            <input type="text" name={label} maxLength="60" value={getSearchTermValue(label)} onChange={(event) => handleInputChange(event, label)}/>
                        </div>
                    ))}
                </section>
                <button className="clear-button" onClick={clearFilters}>Clear</button>
            </div>
        </Popup>
    );
}

export default Filter;