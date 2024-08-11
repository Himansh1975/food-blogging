import React from 'react';

// eslint-disable-next-line react/prop-types
const ArticleCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-[21px] border max-md:border-gray-800 border-[#93A2D361] p-[27px]">
      <img src={imageUrl} alt={title} className="mx-auto" />
      <div className="p-[15px]">
        <h3 className="text-xl font-semibold text-blue-900 mb-[14px]">{title}</h3>
        <p className="text-gray-600 mb-[30.41px]">{description}</p>
        <button className="px-[26px] leading-[35px] py-[3px] border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
