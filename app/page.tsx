import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

interface SocialLink {
  icon: JSX.Element;
  href: string;
}

const ProfilePicture: React.FC = () => (
  <div className="bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-500 rounded-full p-3">
    <Image
      src="/self.png"
      alt="Profile picture of Ola"
      className="rounded-full w-full"
      width={200}
      height={200}
      priority
    />
  </div>
);

const BulletPoints: React.FC = () => (
  <ul className="space-y-1 text-xl text-center md:text-left">
    <li>📍 Based in Dublin, Ireland</li>
    <li>👨🏾‍💻 Career Coach & Software Engineer</li>
    <li>👨🏾‍🏫 I’ve helped over 20 people get into TECH</li>
    <li>
      <a href="mailto:ahmedtoyib1@gmail.com">📧 let's get in touch!</a>
    </li>
    <li>
      📋 Download my{" "}
      <a
        className="bg-gradient-to-tl from-cyan-500 via-teal-500 to-blue-500 text-white px-4 py-2 rounded-md inline-block"
        href="/Toyib-Ahmed-Resume.pdf"
        download="Toyib-Ahmed-Resume"
      >
        resume
      </a>
    </li>
  </ul>
);

const SocialLinks: React.FC<{ socials: SocialLink[] }> = ({ socials }) => (
  <ul className="flex justify-center text-3xl gap-10 mt-4">
    {socials.map((social, index) => (
      <li
        key={index}
        className="hover:scale-125 hover:text-white transition-all ease-in-out"
      >
        <Link href={social.href} target="_blank">
          {social.icon}
        </Link>
      </li>
    ))}
  </ul>
);

const Home: React.FC = () => {
  const socials: SocialLink[] = [
    { icon: <FaGithub />, href: "https://github.com/tobzzy/" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/tobzzy/" },
    { icon: <FaXTwitter />, href: "https://x.com/codewithdrealola/" },
    { icon: <FaInstagram />, href: "//www.instagram.com/codewithdrealola/" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      <ProfilePicture />
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-tl from-cyan-500 via-teal-500 to-blue-500 text-transparent bg-clip-text font-bold">
              Toyib (Ola)
            </span>
            <span className="animate-wave inline-block">🤚🏾</span>
          </h1>
          <h2 className="text-3xl">I'm a Senior Frontend Engineer.</h2>
        </div>
        <BulletPoints />
        <SocialLinks socials={socials} />
      </div>
    </div>
  );
};

export default Home;
