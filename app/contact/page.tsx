import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <>
      <section className="container max-w-3xl mx-auto flex-1 p-8">
        <div className="border max-w-xl mx-auto rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Schedule a free consultation
          </h2>
          <p className="text-lg mb-6 text-center">
            Ready to explore how AI can transform your business?
            <br />
            Schedule a free consultation with our team to discuss a partnership.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
