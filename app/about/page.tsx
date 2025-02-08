import FakeTerminalWindow from "../components/about/FakeTerminalWindow";
import Prompt from "../components/about/Prompt";
import { skillSections } from "../../lib/constants";

const SkillList = ({ title, items }: { title: string; items: string[] }) => (
  <>
    <li className="text-secondary font-semibold">{title}/</li>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      <FakeTerminalWindow>
        <Prompt content="cd aboutToyib/" />
        <Prompt directory="/aboutToyib" branch={true} content="cat README.md" />
        <p>
          Hi, I'm Toyib. With over 7 years of experience as a Senior Frontend
          Engineer and a degree in Cybersecurity Engineering, I blend technical
          expertise with security knowledge to craft well-rounded web
          applications. I specialize in{" "}
          <b>JavaScript, ReactJS, and TypeScript</b>, focusing on developing
          secure, user-centric sites. My skills extend to integrating external
          libraries and building responsive, mobile-first designs using Figma.
          Additionally, I excel at optimizing page load times and implementing
          effective SEO strategies.
        </p>
        <p>
          My cybersecurity background equips me with a security-first mindset in
          development, while my collaborative spirit makes me a valuable team
          player. Outside of coding, I am passionate about mentoring and guiding
          individuals into the tech industry. I continuously seek to enhance my
          skills and stay updated with the latest industry technologies.
        </p>
      </FakeTerminalWindow>

      {skillSections.map(({ title, directory, skills }, index) => (
        <FakeTerminalWindow key={index}>
          <Prompt content={`cd ${directory}`} />
          <Prompt directory={`/${directory}`} branch={true} content="ls" />
          <div className="flex justify-start flex-wrap md:justify-between">
            <ul>
              <SkillList title={title} items={skills} />
            </ul>
          </div>
        </FakeTerminalWindow>
      ))}
    </div>
  );
};

export default About;
