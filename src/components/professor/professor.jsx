import React, { useState,useEffect } from 'react'
import Card from './Card.jsx'
import hod from "../../assests/sbsingh.jpeg";
import './professor.css'
// import professorData from './professorData.json';
import Data from './professorData.js';





const Professor = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [professorsPerPage, setProfessorsPerPage] = useState(calculateProfessorsPerPage());
  
  useEffect(() => {
    function handleResize() {
      setProfessorsPerPage(calculateProfessorsPerPage());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  function calculateProfessorsPerPage() {
    const screenWidth = window.innerWidth;
    // Define breakpoints and corresponding number of professors per page
    if (screenWidth > 712) {
      return 6;
    } else if (screenWidth < 712) {
      return 3;
    } 
  }
  
  // const screenWidth = window.innerWidth
  // const professorsPerPage = 6;

   // Number of professors to show per page
 
console.log(professorsPerPage)
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = currentPage * professorsPerPage;
  const endIndex = startIndex + professorsPerPage;
  const currentProfessors = Data.slice(startIndex, endIndex);

  return (
    <>
      <section className="professor" id="professors">
        <h1>Professors</h1>
        <div className="show-cards">
          {currentProfessors.map((professor, index) => (
            <Card
              key={index}
              img={professor.img}
              name={professor.name}
              contact={professor.contact}
              mail={professor.mail}
              link={professor.link}
            />
          ))}
        </div>
        <div className="pagination-buttons">
          <button onClick={prevPage} disabled={currentPage === 0}>
          <i class="fa-solid fa-arrow-left"></i> Previous
          </button>
          <button onClick={nextPage} disabled={endIndex >= Data.length}>
            Next <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default Professor;
