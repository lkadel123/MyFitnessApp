import React from "react";
import "./membershipOptions.css";

const MembershipOptions = () => {
  return (
    <section>
      <div className=" row justify-center items-center gap-8 p-6 gx-0">
        <div className="col-md-3 col-sm-11 flex flex-col items-center border p-6 rounded-lg shadow-lg bg-white">
          <img src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753ba716580f05b3e042cf_5-stars.svg" alt="5 stars" className="w-12" />
          <p className="mt-4">“6 months after joining I lost 15lbs and I’m getting stronger.”</p>
          <img src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/625f3d9abce1fa5c807ad37c_Male.png" alt="Male customer smiling" className="mt-4 w-16 h-16 rounded-full" />
        </div>
        <div className="col-md-3 col-sm-11 flex flex-col items-center border p-6 rounded-lg shadow-lg bg-white">
          <img src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753ba716580f05b3e042cf_5-stars.svg" alt="5 stars" className="w-12" />
          <p className="mt-4">“I've gotten so much stronger after joining it's insane. My deadlift increased by 65lbs.”</p>
          <img src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753e3b11a53c5e65da2299_woman-potrait-smiling.png" alt="Female customer smiling" className="mt-4 w-16 h-16 rounded-full" />
        </div>
        <div className="col-md-3 col-sm-11 flex flex-col items-center border p-6 rounded-lg shadow-lg bg-white">
          <img src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753ba716580f05b3e042cf_5-stars.svg" alt="5 stars" className="w-12" />
          <p className="mt-4">“While I am passionate about health and fitness this gym is more like a community”</p>
          <img src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753e3b9f62bc34c1f9e865_man-potrait-smiling.png" alt="Male customer smiling" className="mt-4 w-16 h-16 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default MembershipOptions;

