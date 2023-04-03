import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles, { layout } from "../style";
import { aaa, kingsizeblack } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_elbtb2q",
        "template_4de695c",
        {
          from_name: form.name,
          to_name: "Keith Wilcox",
          from_email: form.email,
          to_email: "fishcuit99@gmail.com",
          message: form.message,
        },
        "aUJCKfY6l-mj9vfqY"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden py-10`}
    >
      <div className="flex-[0.75] p-8 rounded-2xl">
        <h3 className='font-poppins text-5xl text-white mb-7 text-center'>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-white py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-black"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className={`${layout.sectionImgReverse} `}>
        <img
          src={kingsizeblack}
          alt="sorceress"
          className="w-[300px] h-[300px] relative z-[5] object-bottom absolute inset-0 rounded-lg"
        />
      </div>
    </section>
  );
};

export default Contact;
