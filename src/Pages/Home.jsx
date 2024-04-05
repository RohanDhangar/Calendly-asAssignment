import React, { useState } from "react";
import Card from "../Component/Card";
import Button from "../Component/Button";
import bannerImg from "../Resources/banner.png";
import Tab from "../Component/Tab";

function Home() {
  const [isToogled, setIsToogled] = useState(false);

  const handleChange = () => {
    setIsToogled(!isToogled);
  };
  return (
    <div className="mt-[100px]">
      <div>
        <div>
          <h1 className="text-[70px] font-[600] text-[#0b345b] text-center mdd:text-[40px] smm:text-[30px]">
            Scheduling should be easy
          </h1>
          <h1 className="text-[70px] font-[600] text-[#056af3] text-center mdd:text-[40px] smm:text-[30px]">
            Start free
          </h1>
        </div>
        <div className="flex justify-center mt-[10%] mdd:mt-[5%] smm:mt-[3%]">
          <div className="flex items-center">
            <span
              className={`text-[14px] cursor-pointer transition-[0.3s] p-2.5 mdd:text-[12px] ${
                !isToogled
                  ? "text-[#0e6bec] font-[700] text-base"
                  : "text-[grey] font-[700] text-base"
              }`}
              onClick={handleChange}
            >
              Billed Monthly
            </span>
            <div className="relative" onClick={handleChange}>
              <button
                className={`relative w-[60px] h-[30px] bg-[#ccc] cursor-pointer mx-[10px] my-0 rounded-[20px] border-[none] mdd:w-[40px] mdd:h-[20px] smm:w-10 smm:h-5 ${
                  isToogled ? "on" : "off"
                }`}
                aria-label="Toggle button"
              ></button>
              <div
                className={`absolute w-[30px] h-[30px] transition-transform duration-[0.3s] rounded-[50%] left-0 top-0 mdd:absolute mdd:w-5 mdd:h-5 mdd:transition-transform mdd:duration-[0.3s] mdd:rounded-[50%] mdd:left-0 mdd:top-0 
                ${
                  isToogled
                    ? "translate-x-[50px] bg-[#0e6bec] mdd:translate-x-[30px] mdd:bg-[#0e6bec]"
                    : "translate-x-0 bg-[grey] mdd:translate-x-2.5 mdd:bg-[grey]"
                }`}
              ></div>
            </div>

            <span
              className={`text-[14px] cursor-pointer transition-[0.3s] p-2.5 mdd:text-[12px] smm:text-[10px] ${
                isToogled
                  ? "text-[#0e6bec] font-[700] text-base"
                  : "text-[grey] font-[700] text-base"
              }`}
              onClick={handleChange}
            >
              Billed Annually
            </span>
          </div>
          <div className="text-[14px] font-[700] text-[#0b345b] ml-20 mt-[10px] mdd:text-xs mdd:ml-10 smm:text-[10px] smm:ml-5">
            <p>save 20% with annual plan </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap mx-[60px] my-[30px] mdd:m-5 smm:m-2.5">
        <Card
          title="basic"
          heading="Always Free"
          discription="when you just want the basic"
          btn_text="Get Started"
        />
        <Card
          title="basic"
          heading="Always Free"
          discription="when you just want the basic"
          btn_text="Get Started"
        />
        <Card
          title="basic"
          heading="Always Free"
          discription="when you just want the basic"
          btn_text="Get Started"
        />
        <Card
          title="basic"
          heading="Always Free"
          discription="when you just want the basic"
          btn_text="Get Started"
        />
        <Card
          title="basic"
          heading="Always Free"
          discription="when you just want the basic"
          btn_text="Get Started"
        />
        <Card
          title="basic"
          heading="Always Free"
          discription="when you just want the basic"
          btn_text="Get Started"
          bgColor="bg-[#092640]"
          fontColor="text-[#fafffc]"
          borderColor="border-[white]"
        />
      </div>

      <div className="flex justify-center flex-wrap mx-[60px] my-[70px] mdd:m-5 smm:m-2.5">
        <Card
          title="basic"
          heading="Always Free"
          discription="when you just want the basic snhfdsjnjf kjhfksxn "
          margin="mt-[10px]"
          fontColor="text-[#0f2c50]"
          borderColor="border-[#0f2c50]"
        />
        <Card
          title="basic"
          heading="Always Free"
          btn_text="Get Started"
          margin="mt-[10px]"
          fontColor="text-[#0f2c50]"
          borderColor="border-[#0f2c50]"
        />
        <Card
          title="basic"
          heading="Always Free"
          btn_text="Get Started"
          margin="mt-[10px]"
          fontColor="text-[#0f2c50]"
          borderColor="border-[#0f2c50]"
        />
        <Card
          title="basic"
          heading="Always Free"
          btn_text="Get Started"
          margin="mt-[10px]"
          fontColor="text-[#0f2c50]"
          borderColor="border-[#0f2c50]"
        />
        <Card
          title="basic"
          heading="Always Free"
          btn_text="Get Started"
          margin="mt-[10px]"
          fontColor="text-[#0f2c50]"
          borderColor="border-[#0f2c50]"
        />
        <Card
          title="basic"
          heading="Always Free"
          btn_text="Get Started"
          margin="mt-[10px]"
          fontColor="text-[#0f2c50]"
          borderColor="border-[#0f2c50]"
        />
      </div>

      {/* <SubTab /> */}
      <div className="tabs">
        <Tab title="Core Features" whichIcon={false} />
        <Tab title="Core Features" whichIcon={false} />
        <Tab title="Core Features" whichIcon={false} />
        <Tab title="Core Features" whichIcon={false} />
        <Tab title="Core Features" whichIcon={false} />
      </div>

      <div className="w-full h-auto bg-[#f9f9f8] mt-[80px]">
        <div className="flex justify-between px-[230px] py-[60px] xxll:flex-col xxll:p-[20px] mdd:flex-col mdd:p-5 smm:flex-col smm:p-5">
          <div className="faqs-heading">
            <h1 className="text-[40px] font-[500] text-[#0b345b] xxll:text-[30px] xxll:text-center mdd:text-3xl mdd:text-center smm:text-3xl smm:text-center">
              Frequently <br /> Asked <br /> Questions
            </h1>
          </div>
          <div className="faqs-tabs">
            <Tab
              title="what happens at the end of my trail"
              whichIcon={true}
              maxWidth="w-[740px]"
            />
            <Tab
              title="what happens at the end of my trail"
              whichIcon={true}
              maxWidth="w-[740px]"
            />
            <Tab
              title="what happens at the end of my trail"
              whichIcon={true}
              maxWidth="w-[740px]"
            />
            <Tab
              title="what happens at the end of my trail"
              whichIcon={true}
              maxWidth="w-[740px]"
            />
            <Tab
              title="what happens at the end of my trail"
              whichIcon={true}
              maxWidth="w-[740px]"
            />
            <Tab
              title="what happens at the end of my trail"
              whichIcon={true}
              maxWidth="w-[740px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#092640] h-[350px] mb-[90px] mdd:h-[300px] smm:h-[250px]">
        <h1 className="text-[white] text-[40px] font-[700] text-center pt-[55px] mdd:text-3xl mdd:pt-[35px] smm:text-[25px] smm:pt-[25px]">
          Easy Access for easy bookings
        </h1>
        <p className="text-[white] text-[16px] font-[350] text-center pt-5 mdd:text-sm mdd:pt-2.5 smm:text-xs smm:pt-2">
          Share your calendly link right from brwoser, so you can schdule
          meetings <br /> without the back-and-forth
        </p>
        <div className="flex">
          <img
            src={bannerImg}
            alt="Image is not displayed"
            className="w-[500px] pt-3.5 mdd:w-[300px] mdd:pt-[87px] smm:w-[100px] smm:pt-[102px]" // doubts
          />
          <div className="text-center pl-[120px] pt-[35px] xll:pl-[80px] mdd:pl-[40px] smm:pl-[5px] smm:pt-[15px]">
            <Button title="Start for free" className="py-[8px] mdd:py-[2px]" />
            <button className="text-[white] font-semibold text-base cursor-pointer ml-[22px] px-4 py-2 rounded-[7px] border-2 border-solid border-[white] mdd:text-sm mdd:ml-2.5 mdd:px-3 mdd:py-1.5 smm:text-xs smm:ml-[5px] smm:px-2 smm:py-1">
              Talk with Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
