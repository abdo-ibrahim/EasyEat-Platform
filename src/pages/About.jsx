import React from "react";
import Crumb from "../components/Banner/Crumb";
import HeaderLine from "../components/Tittles/HeaderLine";
import avatar from "../assets/imgs/abdo.png";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin, FaJava, FaNodeJs, FaBootstrap, FaSass, FaGit, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiTypescript, SiCplusplus, SiExpress, SiMongodb, SiAdobexd, SiAdobephotoshop, SiNextdotjs, SiPrisma } from "react-icons/si";
import { BiCodeAlt, BiData } from "react-icons/bi";
import { AiOutlineApi } from "react-icons/ai";
import { DiMysql } from "react-icons/di";
import { TbBrandMongodb } from "react-icons/tb";
import SkillCategory from "../components/Sections/SkillCategory";

const About = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { icon: FaJs, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiCplusplus, name: "C/C++" },
        { icon: FaJava, name: "Java" },
        { icon: DiMysql, name: "SQL" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { icon: FaHtml5, name: "HTML5" },
        { icon: FaCss3Alt, name: "CSS3" },
        { icon: FaReact, name: "React.js" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: SiRedux, name: "Redux Toolkit" },
        { icon: FaBootstrap, name: "Bootstrap" },
        { icon: FaSass, name: "Sass" },
        { icon: AiOutlineApi, name: "RESTful API" },
      ],
    },
    {
      title: "Backend Development",
      gridCols: "md:grid-cols-4",
      skills: [
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiExpress, name: "Express.js" },
        { icon: TbBrandMongodb, name: "MongoDB" },
        { icon: SiMongodb, name: "Mongoose" },
        { icon: SiPrisma, name: "Prisma" },
      ],
    },
    {
      title: "Software Development Concepts",
      gridCols: "grid-cols-2",
      skills: [
        { icon: BiCodeAlt, name: "Object-Oriented Programming" },
        { icon: BiData, name: "Algorithms & Data Structures" },
      ],
    },
    {
      title: "Tools & Workflow",
      gridCols: "md:grid-cols-4",
      skills: [
        { icon: FaGit, name: "Git & GitHub" },
        { icon: FaFigma, name: "Figma" },
        { icon: SiAdobexd, name: "Adobe XD" },
        { icon: SiAdobephotoshop, name: "Adobe Photoshop" },
      ],
    },
  ];

  return (
    <div className="about p-4 relative">
      <Crumb />
      <div className="container">
        <HeaderLine heading={"About Our Story"} desc={"Meet the Developer"} />

        <div className="developer-profile max-w-4xl mx-auto bg-gray rounded-xl shadow-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Avatar Section */}
            <div className="avatar-container w-52 h-52 rounded-full overflow-hidden border-4 border-main mx-auto md:mx-0 flex-shrink-0">
              <img src={avatar} alt="Abdulrahman Ibrahim" className="w-full h-full object-cover" />
            </div>

            {/* Bio Section */}
            <div className="bio text-center md:text-left">
              <h2 className="text-3xl mb-2">Abdulrahman Ibrahim</h2>
              <p className="text-main text-xl mb-4">Front End Developer</p>
              <p className="mb-6 text-white/80 leading-relaxed">
                Passionate about creating beautiful, responsive, and user-friendly web applications. With expertise in modern JavaScript frameworks and libraries, I specialize in building engaging digital experiences that combine aesthetic appeal
                with technical excellence.
              </p>

              {/* Social Links */}
              <div className="social-links flex gap-4 justify-center md:justify-start mb-6">
                <a href="https://github.com/abdo-ibrahim" 
                target="_blank" rel="noreferrer noopener"
                className="hover:text-main transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/abdo-ibrahim/"
                target="_blank" rel="noreferrer noopener"
                className="hover:text-main transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="projects mt-8">
            <h3 className="text-xl mb-4 border-b border-white/20 pb-2">Featured Projects</h3>
            <div className="grid grid-cols-1 gap-6 mt-6">
              <a href="https://my-portfolio-seven-weld-24.vercel.app/" target="_blank" rel="noreferrer noopener" className="project bg-[#252525] p-4 rounded-lg hover:bg-[#313131] transition-colors duration-300">
                <h4 className="text-main text-lg mb-2">My Portfolio Website</h4>
                <p className="text-white/70 text-sm mb-4">Personal portfolio showcasing projects and skills with smooth animations and responsive design for all device sizes.</p>
              </a>
            </div>
          </div>
          {/* Skills Section */}
          <div className="skills mt-10">
            <h3 className="text-xl mb-4 border-b border-white/20 pb-2">Technical Skills</h3>

            {skillCategories.map((category, index) => (
              <SkillCategory key={index} title={category.title} skills={category.skills} gridCols={category.gridCols} />
            ))}
          </div>

          {/* Contact Section */}
          <div className="contact mt-12 text-center">
            <h3 className="text-xl mb-4 border-b border-white/20 pb-2">Get In Touch</h3>
            <p className="mb-4">Interested in working together? Feel free to contact me.</p>
            <a href="mailto:abdo.ibrahim411@gmail.com" className="btn-red inline-block">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
