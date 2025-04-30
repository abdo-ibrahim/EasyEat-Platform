import React from "react";
import SkillItem from "./SkillItem";

const SkillCategory = ({ title, skills, gridCols = "md:grid-cols-5" }) => {
  return (
    <>
      <h4 className="text-main text-xl mt-8 mb-6 font-[Fiber]">{title}</h4>
      <div className={`grid grid-cols-2 sm:grid-cols-3 ${gridCols} gap-6`}>
        {skills.map((skill, index) => (
          <SkillItem key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </>
  );
};

export default SkillCategory;