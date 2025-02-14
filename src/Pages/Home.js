import React, { useState } from "react";
import "../Css/Home.css";
import '../Components/Items';
import ItemList from "../Components/Items";
import DisplayCards from "../Components/DisplayCards";
import Languages from "../Components/Languages";
import Navbar from "../Components/Navbar";

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
      <div className={`Grid0 ${isSidebarOpen ? 'SidebarOpen' : ''}`}>
        {/* Left side */}
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
            <br />
            <h3>Age: {userData.age}</h3>
            <br />
            <section className="SideNavText">
              <h2 className="SubHeadings">Work Experience</h2>
              <br />
              <ul>
                {userData.workexperience.map((items, index) => (
                  <li key={index}>
                    <h3 className="SubHeading">
                      {items.posititon}
                    </h3>
                    <ul>
                      <li>
                        Start: {items.start}
                      </li>
                      <li>
                        End: {items.end}
                      </li>
                      <li>
                        Duration: {items.duration}
                      </li>
                      <br />
                    </ul>
                  </li>
                ))}
              </ul>
              <br />
              <h2 className="SubHeadings">Education</h2>
              <br />
              <ul>
                {userData.education.map((items, index) => (
                  <li key={index}>
                    <h3 className="SubHeading">
                      {items.institute}
                    </h3>
                    <ul>
                      <li>
                        {items.course}
                      </li>
                      <li>
                        {items.year}
                      </li>
                      <li>
                        {items.duration}
                      </li>
                      <br />
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
            <br />
            <section className="SideNavText">
              <h2 className="SubHeadings">Skills</h2>
              <ul>
                {userData.skills.map((skill, index) => (
                  <li key={index}> {skill} </li>
                ))}
              </ul>
            </section>
            <br />
            <section className="SideNavText">
              <h2 className="SubHeadings">Hobbies</h2>
              <ul>
                {userData.hobbies.map((hobby, index) => (
                  <li key={index}> {hobby} </li>
                ))}
              </ul>
            </section>
            <br />
            <section className="SideNavText">
              <div className="">
                <a 
                  className="CVLink"
                  href="https://docs.google.com/document/d/1FcPtwSDnWu8pZPbdHSOpIAZumgT-s40N/edit?usp=sharing&ouid=109684216417095121636&rtpof=true&sd=true"  // Updated path
                  download="LiamRosenbergCV.pdf"
                  target="blank"
                >
                  <h2 class="CVLinkText">Download CV</h2>
                </a>
              </div>
            </section>
          </div>
        </div>
        
        {/* Right side */}
        <div className="MainScreen">
          <div className="MainImg">
            {/* NavBar */}
            <div className={`NavBarHome" ${isSidebarOpen ? 'SidebarOpen' : ''}`}>
              <Navbar />
            </div>
            {/* Button to open/close sidebar */}
            <button
              className={`SidebarToggleBtn ${isSidebarOpen ? 'open' : ''}`}
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <img alt="NavIcon is on holiday rn...refresh the page" className="sideNavIcon" src="https://i.postimg.cc/76STbZjY/12252572.png" /> : <img alt="NavIcon is on holiday rn...refresh the page" className="sideNavIcon" src="https://i.postimg.cc/q7P3k3b5/12252287.png" />}
            </button>
          </div>
          {/* Display cards section */}
          <section id="" className="exp">
            <DisplayCards />
          </section>
          {/* Languages */}
          <section id="Languages" className="Languages">
            <Languages />
          </section>
          {/* Favourite project that I've worked on thus far */}
          <section id="FavouriteProject">
          </section>
          {/* Most recent project that I've worked on */}
          <section id="MostRecentProject">
          </section>
          {/* PastProjects */}
          <section id="PastProjects" className="SlideShow">
            <ItemList />
          </section>
          {/* Footer*/}
        </div>
      </div>
    </>
  );
}
