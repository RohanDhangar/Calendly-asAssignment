import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleDown,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import SubTab from "./SubTab";

function Tab({ title, whichIcon, maxWidth }) {
  const [clicked, setClicked] = useState(false);
  const [className, setClassName] = useState("text-[#092640]");
  const [icon, setIcon] = useState();
  const [isVisible, setIsVisibility] = useState("hidden");

  useEffect(() => {
    if (clicked) {
      if (whichIcon) {
        setIcon(faMinus);
      } else {
        setIcon(faAngleDown);
      }
      setClassName("text-[#006bfe]");
      setIsVisibility("block");
    } else {
      if (whichIcon) {
        setIcon(faPlus);
      } else {
        setIcon(faAngleRight);
      }
      setClassName("text-[#092640]");
      setIsVisibility("hidden");
    }
  }, [clicked]);
  return (
    <div
      className={`rounded-[10px] border-[0.7px] border-solid border-[#e9edef] mx-[170px] mb-[10px] bg-white ${
        maxWidth ? maxWidth : "w-[1170px]"
      }
      xxll:w-[1000px] xxll:mx-[140px] xll:w-[800px] xll:mx-[100px] lgg:w-[600px] lgg:mx-[60px] mdd:w-[400px] smm:w-[300px] smm:mx-[20px]`}
    >
      <div
        className={`flex justify-between items-center  my-2.5 p-2.5 
      `}
      >
        <h1
          className={`flex-1 text-2xl  font-semibold bg-[#fefffe] px-5 py-[8px] border-r-[0.7px] border-r-[#e9edef] border-solid ${className}`}
        >
          {title}
        </h1>
        <FontAwesomeIcon
          icon={icon}
          className={`cursor-pointer px-5 py-3 text-[#006bfe]`}
          onClick={() => setClicked(!clicked)}
        />
      </div>
      {/* table passed */}
      {!whichIcon && (
        <div className={`${isVisible}`}>
          <SubTab
            table={true}
            data={{
              col1: "Calender connections per person",
              col2: "col2",
              col3: "-",
              col4: "-",
              col5: "col5",
              col6: "col6",
            }}
            TextBox={false}
            textAns=""
          />
          <SubTab
            table={true}
            data={{
              col1: "Calender connections per person",
              col2: "col2",
              col3: "-",
              col4: "-",
              col5: "col5",
              col6: "col6",
            }}
            TextBox={false}
            textAns=""
          />
          <SubTab
            table={true}
            data={{
              col1: "Calender connections per person",
              col2: "col2",
              col3: "-",
              col4: "-",
              col5: "col5",
              col6: "col6",
            }}
            TextBox={false}
            textAns=""
          />
          <SubTab
            table={true}
            data={{
              col1: "Calender connections per person",
              col2: "col2",
              col3: "-",
              col4: "-",
              col5: "col5",
              col6: "col6",
            }}
            TextBox={false}
            textAns=""
          />
          <SubTab
            table={true}
            data={{
              col1: "Calender connections per person",
              col2: "col2",
              col3: "-",
              col4: "-",
              col5: "col5",
              col6: "col6",
            }}
            TextBox={false}
            textAns=""
          />
          <SubTab
            table={true}
            data={{
              col1: "Calender connections per person",
              col2: "col2",
              col3: "-",
              col4: "-",
              col5: "col5",
              col6: "col6",
            }}
            TextBox={false}
            textAns=""
          />
          <SubTab
            table={true}
            data={{
              col1: "Calender connections per person",
              col2: "col2",
              col3: "-",
              col4: "-",
              col5: "col5",
              col6: "col6",
            }}
            TextBox={false}
            textAns=""
          />
        </div>
      )}
      {/* text box passed */}
      {whichIcon && (
        <div className={`${isVisible}`}>
          <SubTab
            table={false}
            data={{
              col1: "",
              col2: "",
              col3: "",
              col4: "",
              col5: "",
              col6: "",
            }}
            TextBox={true}
            textAns="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet
          inventore blanditiis error dolorum? Soluta tenetur id perspiciatis
          error pariatur fugit dicta quisquam officiis! Tenetur placeat numquam
          dolore in eos tempora veniam doloribus! Aperiam dolores id qui nulla
          quos laudantium corrupti cumque voluptate nam soluta, quidem accusamus
          eveniet suscipit voluptas provident eius impedit corporis fugit esse
          sequi expedita quas. Laboriosam architecto tenetur sequi animi
          officiis fugiat ut nobis fuga ipsam perferendis labore, iusto
          accusamus sint a pariatur. Quibusdam veritatis porro, placeat
          perferendis minus eum culpa libero magni pariatur perspiciatis a,
          consequuntur dicta non mollitia praesentium maxime! Explicabo
          voluptatem aut sit!"
          />
        </div>
      )}
    </div>
  );
}

export default Tab;
