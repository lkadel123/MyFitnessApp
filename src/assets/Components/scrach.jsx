import React from "react";

const GradientCircles = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="flex justify-center items-center" style={{ width: 700, height: 700 }}>
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg"
          alt="pink-circle"
          className="rounded-full"
          loading="lazy"
          width={700}
          height={700}
        />
      </div>
      <div className="flex justify-center items-center" style={{ width: 700, height: 700 }}>
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/golden-blur-circle.svg"
          alt="gold-circle"
          className="rounded-full"
          loading="lazy"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default GradientCircles;