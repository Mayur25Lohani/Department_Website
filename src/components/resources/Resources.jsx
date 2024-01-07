import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa"
import "./resources.css";

import IMG1 from "../../assests/resources/comp.jpg";
import IMG2 from "../../assests/resources/birc.jpg";
import IMG3 from "../../assests/resources/form.png";
import IMG4 from "../../assests/resources/book.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "UG 2nd Year",
    resources: "#",
  },

  {
    id: 2,
    image: IMG2,
    title: "UG 3rd Year",
    resources: "#",
  },

  {
    id: 3,
    image: IMG3,
    title: "UG 4th Year",
    resources: "#",
  },

  {
    id: 4,
    image: IMG4,
    title: "UG 5th Year",
    resources: "#",
  },
];

const Resources = () => {
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
    <section id="resources" className="reveal fade-bottom">
      <h2 className="head2">Resources and Study Materials</h2>
      <div className="container resources__container">
        {data.map(({ id, image, title, resources }) => {
          return (
            <article key={id} className="resources__item">
              <div className="resources__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="resources__item-cta">
                <a href={resources} className="btn btn-primary" target="_blank">
                  Go to Resources <FaExternalLinkAlt />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Resources;
