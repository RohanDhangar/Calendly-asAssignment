import React from "react";

function SubTab({ table, data, TextBox, textAns }) {
  const { col1, col2, col3, col4, col5, col6 } = data;
  return (
    <div className="SubTab">
      {table && (
        <div className="flex justify-center px-2.5 py-0">
          <p className="w-[285px] bg-[#fefffe] text-[#122c45] text-base font-medium justify-center px-[30px] py-1 mdd:w-[200px] smm:w-[100px]">
            {col1}
          </p>
          <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
            {col2}
          </p>
          <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
            {col3}
          </p>
          <p className="w-[180px] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 bg-[#f3f6fe] p-0 mdd:w-[100px] smm:w-[50px]">
            <div className="px-2.5 py-1">{col4}</div>
          </p>
          <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
            {col5}
          </p>
          <p className="w-[180px] bg-[#fefffe] text-[#122c45] text-base text-center font-[450] flex items-center justify-center px-0 py-1 mdd:w-[100px] smm:w-[50px]">
            {col6}
          </p>
        </div>
      )}
      {TextBox && (
        <div className="bg-[#f3f6fe] text-[#122c45] text-[17px] font-[250px] px-[50px] py-[30px]">
          {textAns}
        </div>
      )}
    </div>
  );
}

export default SubTab;
