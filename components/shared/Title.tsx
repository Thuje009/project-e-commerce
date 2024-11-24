import React from 'react';

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  return (
    <h1 className="text-3xl font-extrabold text-gray-800 text-center relative hover:text-[#81C784] hover:transform hover:translate-y-1 transition-all duration-300 w-fit">
      {title}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--button-primary)] to-[#fff] transform rotate-[-3deg] z-[-1]"></span>
    </h1>
  );
};

export default Title;



