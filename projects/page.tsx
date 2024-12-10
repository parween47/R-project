import Image from "next/image";
import blog1 from "@/images/atm-management.webp";
import blog2 from "@/images/weather-app.webp";
import blog3 from "@/images/fizzbuzz.webp";
import blog4 from "@/images/clock.webp";
import blog5 from "@/images/currency-converter.webp";
import blog6 from "@/images/number-g-g.webp";
import blog7 from "@/images/calculator.webp";
import blog8 from "@/images/resume-builder.webp";
import blog9 from "@/images/word-count.webp";
import blog10 from "@/images/library.webp";
import { StaticImageData } from 'next/image';

interface Blog {
  image:  StaticImageData;
  alt: string;
  description: string;
  heading: string;
  backHeading: string;
  link: string;
  vercel?: string;
}

const blogs: Blog[] = [
  {
    image: blog8,
    alt: "blog-8",
    description:
      "This application helps users create and personalize resumes online. Starting with a simple static display, it evolves into a fully customizable tool where users can input their details and make edits. It's perfect for building a professional resume without any design or coding skills.",
    backHeading: "Customizable Resume Builder",
    heading: "RESUME BUILDER",
    link: "https://github.com/parween47/Milestone-5-Fully-Dynamic-Resume-Builder",
    vercel: "https://milestone-5-fully-dynamic-resume-builder.vercel.app/",
  },
  {
    image: blog2,
    alt: "blog-2",
    description:
      "This website lets users enter the name of any city or country to instantly view weather details for that location, accompanied by a relevant picture. It’s designed to make checking the weather quick and visually engaging. Just type in the location and get up-to-date weather info at a glance!",
    backHeading: "Instant Weather Snapshot",
    heading: "WEATHER APP",
    link: "https://github.com/parween47/weather-app",
    vercel: "https://weather-app-gold-chi.vercel.app/",
  },
  {
    image: blog4,
    alt: "blog-4",
    description:
      "This website features a stylish analog clock inspired by Dr. Strange, designed to display the exact time with a magical theme. The clock updates accurately, blending functionality with a unique, mystical look. It’s a fun way to check the time while enjoying a bit of superhero flair!",
    backHeading: "Dr. Strange-Themed Analog Clock",
    heading: "ANALOG CLOCK",
    link: "https://github.com/parween47/AnalogClock",
    vercel: "https://analog-clock-peach-sigma.vercel.app/",
  },
  {
    image: blog7,
    alt: "blog-7",
    description:
      "This website functions as a basic calculator, allowing users to perform simple operations like addition, subtraction, multiplication, and division. It’s user-friendly, with buttons for each number and operation to make calculations quick and easy. It’s ideal for anyone needing a straightforward tool for everyday math tasks.",
    backHeading: "Basic Calculator Website",
    heading: "SIMPLE CALCULATOR",
    link: "https://github.com/parween47/Working-calculator",
    vercel: "https://working-calculator-gamma.vercel.app/",
  },
  {
    image: blog3,
    alt: "blog-3",
    description:
      "This function counts from 1 to 100, printing “Fizz” for multiples of 3, “Buzz” for multiples of 5, and “FizzBuzz” for multiples of both. The twist is that any number containing the digit 3 also shows Fizz instead, even if it doesn't follow the usual rules.",
    backHeading: "FizzBuzz with a Twist",
    heading: "FIZZ BUZZ",
    link: "https://github.com/parween47/FizzBuzz-Variation",
  },
  {
    image: blog1,
    alt: "blog-1",
    description:
      "This code simulates an ATM system where users enter a PIN to access their account options. If the PIN is correct, they can choose to withdraw a custom amount, withdraw a quick cash option, or check their balance. When withdrawing money, the code verifies if the balance is enough, and updates it accordingly. If the PIN is incorrect, access is denied.",
    backHeading: "ATM MANAGEMENT SYSTEM",
    heading: "ATM MANAGEMENT",
    link: "https://github.com/parween47/ATM",
  },
  {
    image: blog5,
    alt: "blog-5",
    description:
      "This code is a currency converter that lets users select two currencies and input an amount. It uses exchange rates to calculate the equivalent amount in the chosen target currency. Users simply pick the “from” and “to” currencies, enter an amount, and see the converted result instantly.",
    backHeading: "Quick Currency Converter",
    heading: "CURRENCY CONVERTER",
    link: "https://github.com/parween47/currency-converter",
  },
  {
    image: blog6,
    alt: "blog-6",
    description:
      "This code is a fun number guessing game where players try to guess a randomly generated number between 1 and 10. After entering their guess, the program checks if it matches the secret number and displays a congratulatory message if correct. If the guess is wrong, it reveals the correct number.",
    backHeading: "Simple Number Guessing Game",
    heading: "NUMBER GAME",
    link: "https://github.com/parween47/Number-Guessing-Game",
  },
  {
    image: blog9,
    alt: "blog-9",
    description:
      "This tool counts the number of words in a text, ideal for writers or students who need to keep track of word count for essays or projects. Just paste or type your text, and it will display the total word count instantly.",
    backHeading: "Simple Word Counter",
    heading: "WORD COUNTER",
    link: "https://github.com/parween47/Word_counter",
  },
  {
    image: blog10,
    alt: "blog-10",
    description:
      "This system organizes and manages a collection of books, divided into eBooks and printed books, each with specific details. Users can add, remove, and search for books and view available categories. It’s a helpful tool for keeping track of a digital library collection.",
    backHeading: "Library Management System in TypeScript",
    heading: "MANAGEMENT SYSTEM",
    link: "https://github.com/parween47/Library-Management-System",
  },
];

export default function Projects() {
  return (
    <main id="project">
      <h1>PROJECTS</h1>
      <div className="blogsContainer">
        {blogs.map((blog, index) => (
          <div key={index} className="blog">
            <div className="blog-front">
              <Image src={blog.image} alt={blog.alt} className="blogImg h-[80%]" />
              <h3>{blog.heading}</h3>
            </div>
            <div className="blog-back">
              <h3 id="blogBackH3">{blog.backHeading}</h3>
              <p id="blogBackP">{blog.description}</p>
              <button id="learnMore" className="viewCode">
                <a href={blog.link} target="_blank" rel="noopener noreferrer">View Code</a>
              </button>
              {blog.vercel ? (
                <button id="learnMore" >
                  <a href={blog.vercel} target="_blank" rel="noopener noreferrer">View Website</a>
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
