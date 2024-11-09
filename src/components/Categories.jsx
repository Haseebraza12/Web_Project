import { useState, useRef } from "react";
import "../Styles/Categories.css";
import categories from "../categories";
import { MdFilterList } from "react-icons/md";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const YourComponent = () => {
  const [icon, setIcon] = useState(categories);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isOn, setIsOn] = useState(false);
  const [showForwardArrow, setShowForwardArrow] = useState(true);
  const [showBackwardArrow, setShowBackwardArrow] = useState(false);

  const iconsRef = useRef(null);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const scrollForward = () => {
    if (iconsRef.current) {
      iconsRef.current.scrollLeft += 200;
      handleArrowVisibility();
    }
  };

  const scrollBackward = () => {
    if (iconsRef.current) {
      iconsRef.current.scrollLeft -= 200;
      handleArrowVisibility();
    }
  };

  const handleArrowVisibility = () => {
    const scrollLeft = iconsRef.current.scrollLeft;
    const scrollWidth = iconsRef.current.scrollWidth;
    const clientWidth = iconsRef.current.clientWidth;

    setShowBackwardArrow(scrollLeft > 0);
    setShowForwardArrow(scrollLeft + clientWidth < scrollWidth);
  };

  const selectIcon = (index) => {
    setSelectedIcon(index);
  };

  return (
    <div className="container">
      <div className="hr"></div>
      <div className="sub-container">
        <div className="icons-wrapper">
          {showBackwardArrow && (
            <div className="arrows arrow-left" onClick={scrollBackward}>
              <FaChevronLeft />
            </div>
          )}
          <div
            className="icons"
            ref={iconsRef}
            onScroll={handleArrowVisibility}
          >
            {icon.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`product ${
                    selectedIcon === index ? "selected" : ""
                  }`}
                  onClick={() => selectIcon(index)}
                >
                  <img src={item.url} alt="" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>{" "}
          {showForwardArrow && (
            <div className="arrows arrow-right" onClick={scrollForward}>
              <FaChevronRight />
            </div>
          )}
        </div>
        <div className="buttons">
          <button className="first-btn">
            <MdFilterList /> <span>Filter</span>
          </button>
          <button className="second-btn" onClick={handleToggle}>
            <p>Display total before taxes</p>
            {isOn ? (
              <FaToggleOn className="toggle-icon" size={20} />
            ) : (
              <FaToggleOff className="toggle-icon off" size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
