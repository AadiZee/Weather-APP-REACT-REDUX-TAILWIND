import React from "react";

const Loader = () => {
  return (
    <div className="bg-black h-screen w-screen d-flex">
      <lottie-player
        src="https://assets7.lottiefiles.com/private_files/lf30_jmgekfqg.json"
        mode="bounce"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Loader;
