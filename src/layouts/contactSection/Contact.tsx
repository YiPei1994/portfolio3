import ChangingColor from "../../components/animated/ChangingTextColor";
import SectionWrapper from "../../components/SectionWrapper";
import SideSectionHeader from "../../components/SideSectionHeader";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Reveal from "../../components/animated/Reveal";
import Link from "../../components/Link";

function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="bg-neutral-100/5 overflow-hidden rounded-xl flex items-center justify-center gap-6 xl:gap-8  flex-col  text-center py-8 relative before:content before:w-48 before:h-48 before:rounded-full before:absolute before:ring-[15px] before:ring-inset before:ring-[#50CAE4] before:-left-[100px] before:-top-[70px] after:content after:w-48 after:h-48 after:rounded-full after:absolute after:ring-[15px] after:ring-inset after:ring-[#9B5CFF] after:-right-[150px] after:-bottom-[70px] ">
        <SideSectionHeader className="flex items-center justify-center gap-4">
          <Reveal> Let's</Reveal>
          <Reveal delayTime={0.4}>
            <ChangingColor text="Talk!" />
          </Reveal>
        </SideSectionHeader>
        <p className="text-lg md:text-center md:w-[85%] mx-auto xl:text-2xl w-4/5 lg:w-[65%]">
          Interested in working together or have a question? Feel free to reach
          out. I'm here to help you turn your ideas into amazing digital
          realities. Looking forward to hearing from you soon!
        </p>

        <a
          className="flex items-center gap-2 py-4 px-8 font-bold  rounded-xl border border-neutral-400/25 bg-black"
          href="mailto:studentypz@gmail.com"
        >
          <MdEmail className="text-2xl" />

          <p className="lg:text-xl text-white">studentypz@gmail.com</p>
        </a>

        <div className="flex justify-center items-center gap-8 w-full">
          <Link link="https://github.com/YiPei1994">
            <FaGithubSquare />
          </Link>
          <Link link="https://www.linkedin.com/in/yipeizhu">
            <FaLinkedin />
          </Link>

          <Link link="https://www.facebook.com/yeipei.zhu">
            <FaFacebookSquare />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
