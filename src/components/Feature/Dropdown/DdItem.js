import React, { useState, useEffect, useRef } from 'react';
import './DdItem.css';

function DdItem({onSelectOrder}) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Newest First");
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelected(item);
    setIsActive(false);
  };
  const handleOrderClick = (order) => {
    onSelectOrder(order);
    setIsActive(false);
  };
  const handleCombinedClick = (item, order) => {
    handleItemClick(item);
    handleOrderClick(order);
  };

  return (

      <div className="dropdown" ref={dropdownRef}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="dropdownBtn"
        >
          {selected}
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >
          <div
            onClick={() => handleCombinedClick("Newest First", 'newest')}
            className="item"
          >
            Newest First
          </div>
          <div
            onClick={() => handleCombinedClick("Oldest First", 'oldest')}
            className="item"
          >
            Oldest First
          </div>
        </div>
      </div>
  );
}

export default DdItem;
