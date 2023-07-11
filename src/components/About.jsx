import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Hello there! I'm thrilled to introduce myself as a software developer
        with a passion for creating beautiful and user-friendly interfaces. With
        a background in mechanical engineering, a minor in computer science, a
        data science certificate, and ongoing completion of a full-time
        immersive software engineering bootcamp, I possess a diverse skill set
        that empowers me to excel in the world of software development.
        Throughout my career, I have been fortunate to work in various
        industries, from technical consulting to robotics. In my role as a
        technical consultant, I had the opportunity to explain complex technical
        concepts to non-technical audiences, providing exceptional customer
        support along the way. Moreover, my time in robotics allowed me to merge
        my mechanical engineering background with self-taught knowledge of robot
        programming language, propelling me into the position of a robotics
        engineer. I am excited to bring my expertise, creative flair, and
        dedication to every project I undertake. As a software developer, my
        ultimate goal is to craft aesthetically pleasing, modern, and intuitive
        interfaces that delight users. Let's collaborate and bring your ideas to
        life in the most innovative and visually stunning ways possible.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
