import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Articles = () => {
  const articles = [
    {
      title: "Grilled Tomatoes at Home",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "latest-articles/1.png"
    },
    {
      title: "Snacks for Travel",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "latest-articles/2.png"
    },
    {
      title: "Post-workout Recipes",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "latest-articles/3.png"
    },
    {
      title: "How To Grill Corn",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "latest-articles/4.png"
    },
    {
      title: "Crunchwrap Supreme",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "latest-articles/5.png"
    },
    {
      title: "Broccoli Cheese Soup",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "latest-articles/6.png"
    }
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const currentArticles = articles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="py-8 md:py-[158px] px-4 md:px-[108px] w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 md:mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[41px]">
          {currentArticles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 md:mt-[49px] space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-md border ${currentPage === 1 ? 'border-gray-400 text-gray-400' : 'border-blue-900 text-blue-900'}`}
          >
            <FaChevronLeft size={16} />
          </button>
          <span className="text-blue-900 text-lg px-2">
            {`${currentPage} / ${totalPages}`}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md border ${currentPage === totalPages ? 'border-gray-400 text-gray-400' : 'border-blue-900 text-blue-900'}`}
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;