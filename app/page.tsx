import Link from "next/link";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <main>
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Stop Being Nervous About AI—Partner with Hot Blue Tree and Get Excited About AI</h1>
          <p className="text-xl mb-6">We specialize in building long-term partnerships to deliver tailored AI deployments that transform businesses and drive measurable results.</p>
          <button className="bg-brand-blue text-white py-2 px-4 rounded">Learn How AI Can Transform Your Business. Schedule a Free Consultation to Discuss a Partnership.</button>
          <div className="mt-8">
            <img src="/images/tree-placeholder.jpg" alt="A vibrant tree with glowing blue lights symbolizing growth and innovation" className="mx-auto" />
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Your AI Transformation Partner</h2>
          <p className="text-lg mb-6 text-center">At Hot Blue Tree, we don’t just consult and tell you what to do. We become your AI deployment partner, guiding you every step of the way—from roadmap development to ongoing monitoring and optimization.</p>
          <div className="text-center">
            <button className="bg-brand-blue text-white py-2 px-4 rounded">Explore Our AI Solutions</button>
          </div>
          <div className="mt-8">
            <img src="/images/team-placeholder.jpg" alt="A team collaborating with futuristic AI tools" className="mx-auto" />
          </div>
        </section>

        <section className="py-12 bg-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Partner with Hot Blue Tree?</h2>
          <ul className="list-disc list-inside text-lg mb-6">
            <li>Long-term partnerships to ensure sustained success.</li>
            <li>Customized AI deployments tailored to your needs.</li>
            <li>End-to-end support, from planning to integration and training.</li>
            <li>Ongoing monitoring and updates to keep your systems optimized.</li>
            <li>A dedicated pod supported by an R&D team for expert service.</li>
          </ul>
          <div className="text-center">
            <button className="bg-brand-blue text-white py-2 px-4 rounded">Discover Our Process</button>
          </div>
          <div className="mt-8">
            <img src="/images/success-placeholder.jpg" alt="A professional team celebrating a successful deployment" className="mx-auto" />
          </div>
        </section>
        <ContactForm />
      </main>
    </div>
  );
};

export default Home;
