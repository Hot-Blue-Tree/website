import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { Button } from "@nextui-org/button";
import { IconCaretRightFilled, IconChartBarPopular, IconCheckList, IconClipboardData, IconGuage, IconHandShake, IconTools, IconUpload, IconUsersGroup } from "../components/Icons";

const Home = () => {
  return (
    <div className="container max-w-5xl mx-auto px-8 space-y-8 py-8 md:space-y-24 md:py-24">
      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">From AI Anxiety to Excitement — Hot Blue Tree Makes It Happen!</h1>
        <p className="text-xl mb-6">We specialise in building long-term partnerships to deliver tailored AI deployments that transform businesses and drive measurable results.</p>
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
      <section id="values" className="bg-gray-100 flex flex-col items-center p-4 rounded-xl">
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
            Customised AI deployments tailored to your needs
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
            Ongoing monitoring and updates to keep your systems optimised
          </li>
          <li className="flex flex-col items-center space-y-2">
            <span className="text-8xl text-cyan-500">
              <IconUsersGroup />
            </span>
            A dedicated pod supported by an R&D team for expert service
          </li>
        </ul>
        <Button
          href="/contact"
          as={Link}
          className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white"
          size="lg"
        >
          Get started
        </Button>
      </section>
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Your AI Transformation Partner</h2>
        <p className="text-lg mb-6">Hot Blue Tree is all about helping small and medium-sized businesses unlock the potential of AI to make their operations smoother, smarter, and more innovative. We focus on creating custom solutions that fit your business needs, from streamlining processes to boosting productivity and showing clear, measurable results. Think of us as your partner in making AI work for you — whether that's building a roadmap for new technology, training your team to get comfortable with it, or making sure your data stays safe. We work with businesses that are ready to embrace change and see the value AI can bring, even if they're not tech experts. Our goal is to make AI approachable, affordable, and a game-changer for your business.</p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-brand-blue gap-2">
          <div className="text-lg font-bold flex flex-row md:flex-col items-center uppercase gap-4">
            <span className="text-7xl md:text-8xl text-cyan-500">
              <IconClipboardData />
            </span>
            Assessment
          </div>
          <div className="text-2xl text-brand-blue rotate-90 md:rotate-0 mx-6 md:mx-0">
            <IconCaretRightFilled />
          </div>
          <div className="text-lg font-bold flex flex-row md:flex-col items-center uppercase gap-4">
            <span className="text-7xl md:text-8xl text-cyan-500">
              <IconTools />
            </span>
            Custom&nbsp;solutions
          </div>
          <div className="text-2xl text-brand-blue rotate-90 md:rotate-0 mx-6 md:mx-0">
            <IconCaretRightFilled />
          </div>
          <div className="text-lg font-bold flex flex-row md:flex-col items-center uppercase gap-4">
            <span className="text-7xl md:text-8xl text-cyan-500">
              <IconUpload />
            </span>
            Implementation
          </div>
          <div className="text-2xl text-brand-blue rotate-90 md:rotate-0 mx-6 md:mx-0">
            <IconCaretRightFilled />
          </div>
          <div className="text-lg font-bold flex flex-row md:flex-col items-center uppercase gap-4">
            <span className="text-7xl md:text-8xl text-cyan-500">
              <IconChartBarPopular />
            </span>
            Results
          </div>
        </div>
      </section>
      <section className="border max-w-xl mx-auto rounded-xl p-8">
        <h2 className="text-center font-bold text-3xl mb-6">Schedule a free consultation</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
