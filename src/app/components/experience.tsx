import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
  jobTitle?: string;
  paragraph: React.ReactNode;
  titleColor?: string;
};
export const Experience = ({
  title,
  subtitle,
  jobTitle,
  paragraph,
  titleColor,
}: Props) => {
  return (
    <div>
      <h3
        className={`text-4xl font-extrabold ${
          !subtitle && 'mb-4'
        } ${titleColor}`}
      >
        {title}
      </h3>
      {subtitle && <p className="text-2xl text-gray-500 mb-4">{subtitle}</p>}
      {jobTitle && <h3 className="text-2xl font-bold mb-4">{jobTitle}</h3>}
      {paragraph}
    </div>
  );
};
