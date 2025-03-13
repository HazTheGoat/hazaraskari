import React from 'react';

type Props = {
  title: string;
  subtitle: string;
  imgSrc: string;
  paragraph: React.ReactNode;
};
export const Avatar = ({ title, subtitle, imgSrc, paragraph }: Props) => {
  return (
    <>
      <div className="col-span-2 text-right">
        <img
          src={imgSrc}
          className="inline-block size-100 rounded-full"
          alt="Avatar"
        />
      </div>
      <div className="col-span-4 ">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-2xl text-gray-500  mb-4">{subtitle}</p>
        {paragraph}
      </div>
    </>
  );
};
