import React, { useEffect, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your response is Recorded!");
    setformData({ name: "", email: "", subject: "", message: "" });
  };

  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <section id="contact" className="reveal fade-bottom">
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div>
            <div id="map" className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472432.1740464999!2d86.73632827343751!3d22.320515300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d441b1d458095%3A0xd89cb176e5fc5d6f!2sDepartment%20Of%20Metallurgical%20and%20Materials%20Engineering!5e0!3m2!1sen!2sin!4v1703958226983!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <form method="post" onSubmit={handleSubmit} id="query_form">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="subject"
            onChange={handleChange}
            value={formData.subject}
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            rows="7"
            onChange={handleChange}
            value={formData.message}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" value="send message">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
// document.getElementById('query_form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   var formData = new FormData(event.target);
//   google.script.run.withSuccessHandler(function() {
//     alert('Form submitted successfully!');
//   }).postForm(formData);
// });

export default Contact;
