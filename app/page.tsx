import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { Button } from "@nextui-org/button";
import { IconCheckList, IconGuage, IconHandShake, IconTools, IconUsersGroup } from "../components/Icons";

const Home = () => {
  return (
    <div className="container max-w-5xl mx-auto px-8 space-y-8 py-8 md:space-y-24 md:py-24">
      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Stop Being Nervous About AI—Partner with Hot Blue Tree and Get Excited About AI</h1>
        <p className="text-xl mb-6">We specialize in building long-term partnerships to deliver tailored AI deployments that transform businesses and drive measurable results.</p>
        <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            href="#values"
            as={Link}
            size="lg"
            color="default"
            variant="solid"
          >
            Learn more
          </Button>
          <Button
            href="/contact"
            as={Link}
            className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white"
            size="lg"
            color="primary"
            variant="solid"
          >
            Get in touch
          </Button>
        </div>        
      </section>
      {/* <section className="">
        <h2 className="text-3xl font-bold mb-4 text-center">Your AI Transformation Partner</h2>
        <p className="text-lg mb-6 text-center">At Hot Blue Tree, we don’t just consult and tell you what to do. We become your AI deployment partner, guiding you every step of the way—from roadmap development to ongoing monitoring and optimization.</p>
        <div className="text-center">
          <button className="bg-brand-blue text-white py-2 px-4 rounded">Explore Our AI Solutions</button>
        </div>
        <div className="mt-8">
          <img src="/images/team-placeholder.jpg" alt="A team collaborating with futuristic AI tools" className="mx-auto" />
        </div>
      </section> */}
      <section id="values" className="bg-gray-100 flex flex-col items-center p-4 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Partner with Hot Blue Tree?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 justify-center text-center mb-6 gap-8 p-4">
          <li className="flex flex-col items-center space-y-2">
            <span className="text-8xl text-cyan-500">
              <IconHandShake />
            </span>
            Long-term partnerships to ensure sustained success
          </li>
          <li className="flex flex-col items-center space-y-2">
            <span className="text-8xl text-cyan-500">
              <IconTools />
            </span>
            Customized AI deployments tailored to your needs
          </li>
          <li className="flex flex-col items-center space-y-2">
            <span className="text-8xl text-cyan-500">
              <IconCheckList />
            </span>
            End-to-end support, from planning to integration and training
          </li>
          <li className="flex flex-col items-center space-y-2">
            <span className="text-8xl text-cyan-500">
              <IconGuage />
            </span>
            Ongoing monitoring and updates to keep your systems optimized
          </li>
          <li className="flex flex-col items-center space-y-2">
            <span className="text-8xl text-cyan-500">
              <IconUsersGroup />
            </span>
            A dedicated pod supported by an R&D team for expert service
          </li>
        </ul>
        <Button
          className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white"
          size="lg"
        >
          Get started
        </Button>
      </section>
      <section className="bg-gray-300 max-w-xl mx-auto rounded-2xl p-4">
        <h2 className="text-center font-bold text-3xl mb-4">Schedule a free consultation</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
