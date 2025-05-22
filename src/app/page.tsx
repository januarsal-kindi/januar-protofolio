import Link from "next/link";
import Experience from "@/components/Experience";
import Projects from "@/components/Project";
import IconMapper, { IconType } from "@/components/Stack/IconMapper";
import Footer from "@/components/Footer";

const myStack = [
  "Javascript",
  "Typescript",
  "React",
  "React-native",
  "Vue",
  "Webpack",
  "Nuxt",
  "Next",
  "CSS",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#191919] text-white">
      <header className="w-full z-40 fixed top-0 bg-[#191919]  mx-auto px-4 py-6 flex items-center justify-between">
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <div className="w-20">
            <div className="font-bold text-xl">JS.</div>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="#" className="text-white hover:text-[#5badff]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-white hover:text-[#5badff]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-white hover:text-[#5badff]"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white hover:text-[#5badff]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mt-32 mx-auto px-4 text-center">
        <h1 className="text-3xl  md:text-5xl font-bold mb-2 md:mb-6 bg-gradient-to-r  from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text">
          Hi, I am Januar Salman
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold  mb-4 md:mb-6">
          I do{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-bl from-[#FF8660] to-[#9A33FF]">
            code{" "}
          </span>
          for{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-bl  from-[#FF8660] to-[#9A33FF]">
            joy and speed⚡️.
          </span>
        </h1>
        <p className="max-w-2xl text-sm md:text-lg mx-auto text-[#c5c5c5] mb-6">
          I’m a passionate Frontend Engineer based in Malang,Indonesia 🇮🇩.
          passionate about building fast and user-friendly web interfaces. I’m
          always learning to keep up with the latest in frontend development.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="https://drive.google.com/uc?export=download&id=1ZTQ5zva_9mknPBLPLbPyb70Gm1_ORpH6"
            target="_blank"
            className="border text-sm md:text-lg font-semibold border-white text-white px-5 py-3 rounded-full  duration-300 hover:bg-gradient-to-bl hover:from-[#FF8660]  hover:to-[#9A33FF] hover:bg-opacity-10 transition"
          >
            Download CV / Resume
          </Link>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mt-0.5 md:mt-8 mx-auto px-4 py-16 text-center">
        <h2 className="text-xl uppercase tracking-wider text-[#C5C5C5] mb-4">
          EXPERIENCE WITH
        </h2>

        <div className="flex items-center justify-center">
          <div className="flex justify-center items-center space-2 mt-4 max-w-4xl flex-wrap gap-4">
            {myStack.map((stack) => {
              return (
                <div
                  key={stack}
                  className="w-auto px-3 py-1  bg-[#2a2a2a] rounded-full flex items-center justify-center space-x-1"
                >
                  <IconMapper
                    className="w-6 h-6 md:w-10 md:h-10 "
                    name={stack.toLowerCase() as IconType}
                  />
                  <p className="text-lg md:text-xl font-white font-light">{stack}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <Projects />

      {/* Experience */}
      <Experience />

      <Footer />
      {/* Contact */}
    </div>
  );
}
