import styles from "../style";
import { arrowUp } from "../assets";
import Image from "next/image";

const GetStarted = () => (
  <div className={`flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <div className="w-[23px] h-[23px] object-contain relative">
          <Image src={arrowUp} alt="arrow-up" layout="fill" />
        </div>
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;