import React, { useState } from "react";
import "../Css/Home.css";
import '../Components/Items';
import ItemList from "../Components/Items";
import DisplayCards from "../Components/DisplayCards";
import ContactUs from "../Components/ContactUs";

const userData = {
  name: 'Liam Rosenberg',
  age: '22',
  skills: [
    'Communication', 'Computer literate', 'Self-motivated', 'Punctual', 'Assertive', 'Research',
    'Time management', 'Planning', 'Team player', 'Analytical', 'English speaking',
  ],
  hobbies: ['Chess', 'Gaming', 'Hikes', 'Drawing', 'Foody'],
  careerObj: 'Within the next 4 years I plan to expand my knowledge, understanding on a variety of areas in IT as well as business practices...',
  education: [
    { institute: 'College of Cape Town (Crawford)', duration: '1 year', year: '2022-2023', course: 'ODETDP' },
    { institute: 'College of Cape Town (Crawford)', duration: '1 year', year: '2021', course: 'Cisco Networking' },
    { institute: 'Plumstead high school', duration: '4 years', year: '2016-2020', course: 'HighSchool' },
  ],
  experienceInSoftware: 'About 4 months',
  experience: [
    {jobTitle: 'Tutor', where:'Face-2-Face', duration: '', startingDate: 'August 2023', endingDate: 'Current' },
    {jobTitle: 'Systems Developing Intern',where: 'Capaciti', duration: '', startingDate: 'August 2024', endingDate: 'Current' },
    // {jobTitle: '', where: '',duration: '', startingDate: '', endingDate: '' }
  ]
};

export default function Home() {
  // State to toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle functions
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <>
      <div className="Grid0">
        {/* Button to open/close sidebar */}
        <div className={`SideBar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="TopOfSideBar">
            <img className="Icon" src="https://i.postimg.cc/SN4ChRHv/Whats-App-Image-2024-11-19-at-10-35-07-f60543c5.jpg" alt="Brb" />
            <h3 className="text-heading">
              <strong>
                Liam Rosenberg
              </strong>
            </h3>
          </div>
          <div className="BottomOfSideBar">
              <br/>
              <h3>Age: {userData.age}</h3>
              <br/>
              <section className="SideNavText">
                  <h2 className="SubHeadings">education</h2>
                  <ul>
                  {userData.education.map((items,index) => (
                    <li>
                      <h3 className="SubHeading">
                        {items.institute}
                      </h3>
                      <ul>
                        <li key={index}>
                          {items.course}
                        </li>
                        <li key={index}>
                          {items.year}
                        </li>
                        <li key={index}>
                          {items.duration}
                        </li>
                      </ul>
                    </li>
                  ))}
                  </ul>
              </section>
              <br/>
              <section className="SideNavText">
                  <h2 className="SubHeadings">Skills</h2>
                  <ul>
                  {userData.skills.map((skill, index) => (
                      <li key={index}> {skill} </li>
                  ))}
                  </ul>
              </section>
              <br/>
              <section className="SideNavText">
                  <h2 className="SubHeadings">Hobbies</h2>
                  <ul>
                  {userData.hobbies.map((hobby, index) => (
                      <li key={index}> {hobby} </li>
                  ))}
                  </ul>
              </section>
          </div>
        </div>

        <div className="MainScreen">
          <div className="MainImg">
            <div className="OverBackgroundImgText" >
              <h1><strong>Welcome to {userData.name}'s Portfolio</strong></h1>
            </div>
            <button
              className={`SidebarToggleBtn ${isSidebarOpen ? 'open' : ''}`}
              onClick={toggleSidebar}
            >
            {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
              </button>
              <ContactUs/>
            <img className="BackgroundImg" src="https://i.postimg.cc/hjCtXc0V/gk4cplcv63v61.webp" alt="" />
          </div>
          {/* Display cards section */}
          <div className="Exp">
              <DisplayCards />
          </div>
          {/* slideshow with brief summary of the websites and what i contributed */}
          {/* About me description */}
          <div className="SlideShow">
            <ItemList />
          </div>
          {/* Showcase past projects */}
          <br/>
          <h2 className="SubHeadings">A few Projects I've previously worked on:</h2>
          <br/>
          <div className="ShowCase">
            <div className="GridItem1">
              <h2 className="LinkHeadings">Study-Sphere</h2>
              <a className="LinkStyles" href="https://study-sphere-spa.netlify.app/" target="blank">
                <img className="ImgWithLinks" src="https://i.postimg.cc/fb5V967j/Screenshot-2024-11-21-102404.png" alt="AFK" />
              </a>
            </div>
            <div className="GridItem2">
              <h2 className="LinkHeadings">Task management Web-applicaiton</h2>
              <a className="LinkStyles" href="https://study-sphere-spa.netlify.app/" target="blank">
                <img className="ImgWithLinks" src="https://i.postimg.cc/fb5V967j/Screenshot-2024-11-21-102404.png" alt="AFK" />
              </a>
            </div>
            <div className="GridItem3">
              <h2 className="LinkHeadings">Hackathon - Ecolink - e-commerce project</h2>
              <a className="LinkStyles" href="https://e-commerce-project-e24b8.web.app/" target="blank">
                <img className="ImgWithLinks" src="https://i.postimg.cc/pXxYKtz3/image-2024-11-21-105312861.png" alt="AFK" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
