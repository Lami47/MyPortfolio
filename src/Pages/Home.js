import React, { useState } from "react";
import "../Css/Home.css";
import '../Components/Items';
import ItemList from "../Components/Items";
import DisplayCards from "../Components/DisplayCards";
import ContactUs from "../Components/ContactUs";
import Languages from "../Components/Languages";

const userData = {
  name: 'Liam Rosenberg',
  age: '22',
  workexperience: [
    {posititon: 'Software Developing Intern',start:'Aug 2024',end:'Current',duration: 'Ongoing'},
    {posititon: 'Tutor',start:'Aug 2023',end:'Nov 2024',duration: '1 year'},
  ],
  skills: [
    'Communication', 'Computer literate', 'Self-motivated', 'Punctual', 'Assertive', 'Research',
    'Time management', 'Planning', 'Team player', 'Analytical', 'English speaking',
  ],
  hobbies: ['Chess', 'Gaming', 'Hiking', 'Drawing', 'Cooking'],
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
                <h2 className="SubHeadings">Work Experience</h2>
                <br/>
                <ul>
                {userData.workexperience.map((items,index) => (
                    <li>
                      <h3 className="SubHeading">
                      {items.posititon}
                      </h3>
                      <ul>
                        <li key={index}>
                          Start: {items.start}
                        </li>
                        <li key={index}>
                          End: {items.end}
                        </li>
                        <li key={index}>
                          Duration: {items.duration}
                        </li>
                        <br/>
                      </ul>
                    </li>
                  ))}
                  </ul>
                  <br/>
                  <h2 className="SubHeadings">education</h2>
                  <br/>
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
                        <br/>
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
              <h1><strong>Welcome to</strong></h1>
              <br/>
              <h1><strong>{userData.name}'s Portfolio</strong></h1>
            </div>
            <button
              className={`SidebarToggleBtn ${isSidebarOpen ? 'open' : ''}`}
              onClick={toggleSidebar}
            >
            {isSidebarOpen ? <img className="sideNavIcon" src="https://i.postimg.cc/76STbZjY/12252572.png"/> : <img className="sideNavIcon" src="https://i.postimg.cc/q7P3k3b5/12252287.png"/>}
              </button>
              <ContactUs/>
          </div>
          {/* Display cards section */}
          <div className="exp">
              <DisplayCards />
          </div>
          <div>
            <div>
                <Languages/>
            </div>
              
                  
            {/* my certificates */}
            
          </div>
          {/* slideshow with brief summary of the websites and what i contributed */}
          {/* About me description */}
          <div className="SlideShow">
            <ItemList />
          </div>
          {/* Showcase past projects */}
          <br/>
          <h2 className="SubHeadings">Links to previous projects that I've worked on:</h2>
          <br/>
          <div className="ShowCase">
            <div className="GridItem1">
              <h2 className="LinkHeadings">Study-Sphere</h2>
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
            {/* need to deploy the python project */}
          </div>
        </div>
      </div>
    </>
  );
}
