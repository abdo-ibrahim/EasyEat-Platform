import React from "react";

const SkillItem = ({ icon: Icon, name }) => {
  return (
    <div className="skill-item flex flex-col items-center">
      <Icon size={40} className="text-main mb-2" />
      <span>{name}</span>
    </div>
  );
};

export default SkillItem;