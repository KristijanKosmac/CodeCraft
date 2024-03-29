"use client";
import { motion } from "framer-motion";
import { card } from "../../public";
import { slideIn } from "../styles/animations";
import Button from "./Button";
import Image from "next/image";
import Lottie from "react-lottie";
import technologiesIcons from "../../public/technologies.svg";
import technologiesIcons1 from "../../public/technologies1.svg";
// import animation from "../../public/animation-test.json"
// import animation1 from "../../public/Animation1.json"
// import animation2 from "../../public/Animation2.json"
// import animation3 from "../../public/Animation3.json"
// import animation4 from "../../public/Animation4.json"
// import animation5 from "../../public/Animation5.json"

import { animation2 } from "../../public/animations"

const CardDeal = () => (
  <section className="section">
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
        Cutting-Edge Technologies
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
      Seamlessly integrating cutting-edge technologies with powerful cloud infrastructure to drive innovation and scalability in every project.
      </p>
      <Image src={technologiesIcons1} alt="discount" priority={true} className="mt-10"/>

      {/* <Button styles={`mt-10`} name="some name"/> */}
    </motion.div>

    <motion.div
      className="sectionImg"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
        <Lottie 
        options={{
          loop: true,
          autoplay: true,
          animationData: animation2,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        }}
        width="100%"
        height="100%"
        />
      {/* <Image
        src={card}
        width={0}
        height={0}
        alt="billing"
        className="w-[100%] h-[100%]"
      /> */}
    </motion.div>
  </section>
);

export default CardDeal;
