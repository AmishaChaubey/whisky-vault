import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full h-[600px] overflow-hidden rounded-2xl shadow-lg">
      <iframe
        title="Blu Kings Distillers Location"
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=sector-63,%20Noida,%20UttarPradesh%20201301+(Blu%20Kings%20Distillers)&t=&z=13&ie=UTF8&iwloc=B&output=embed"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        className="border-0 w-full h-full"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
