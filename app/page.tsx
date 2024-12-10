import Image from "next/image";
import profile from "@/images/profile.webp";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Projects from "@/projects/page"
import Contact from "@/contact/page";
import About from "@/about/page";

export default function Home() {
  return (
    <div className="whole">
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, It's <span>Ubaid</span>
          </h1>
          <h3 className="text-animation" >
            I'm a <span>Front-end Developer</span>
          </h3>
          <p>
            I am currently pursuing the Certified Cloud Applied Generative AI
            Engineering program at Governor House Karachi. With a solid
            foundation in TypeScript from the first quarter, I am now focused on
            mastering frontend development using Next.js. My academic journey is
            geared towards building modern, efficient web applications and
            contributing to the rapidly growing field of cloud and AI
            technologies.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100080917116155"target="_blank"> <FaFacebookF className="iconSize"/></a>
            <a href="https://www.instagram.com/ubaid__qurashi/"target="_blank"> <FaInstagram  className="iconSize" />
            </a>
            <a href="https://www.linkedin.com/in/ubaid-qureshi-138153328/"target="_blank"><FaLinkedinIn  className="iconSize" />
            </a>
            <a href="https://github.com/parween47/"target="_blank"><FaGithub className="iconSize" />
            </a>
          </div>
          <div className="button-box">
          <div className="btn-group">
            <a href="" className="btn">
              Hire
            </a>
            <a href="contact" className="btn" id="btn">
              Contact
            </a>
          </div>
          </div>
        </div>
        <div className="home-img">
          <Image
            src={profile}
            alt="profile pic"
            width={200}
            className="Image"
          />
        </div>
      </section>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

