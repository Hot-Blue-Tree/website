import PipedriveContactForm from "../../components/PipedriveContactForm";

export default function Contact() {
  return (
    <>
      <section className="flex flex-col items-center w-full bg-slate-100 flex-1 p-8">
        <div className="container border max-w-xl mx-auto bg-white rounded-xl p-8">
          <PipedriveContactForm />
        </div>
      </section>
    </>
  );
}
