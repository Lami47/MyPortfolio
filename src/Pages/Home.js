import React, { useState } from "react";
import "../Css/Home.css";
import '../Components/Items';
import ItemList from "../Components/Items";

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
    { institute: 'College of Cape Town (Crawford)', duration: '1 year', year: '', course: 'ODETDP' },
    { institute: 'College of Cape Town (Crawford)', duration: '1 year', year: '', course: 'Cisco Networking' },
    { institute: 'Plumstead high school', duration: '4 years', year: '', course: '' },
  ],
  experienceInSoftware: 'About 4 months',
  experience: [
    {jobTitle: 'Tutor', where:'Face-2-Face', duration: '', startingDate: 'August 2023', endingDate: 'Current' },
    {jobTitle: 'Systems Developing Intern',where: 'Capaciti', duration: '', startingDate: 'August 2024', endingDate: 'Current' },
    // {jobTitle: '', where: '',duration: '', startingDate: '', endingDate: '' }
  ]
};
//Overview of:
const QueCards = [
    { id:'1', text:'Total years of experience', yearsOfExperience: 'I am closing in on 4 months of experience as a Software Developer and ', handler:'onSubmit'},
    { id:'2', text:'Projects completes', totalProjectsCompleted: '', handler:'onSubmit'},
    { id:'3', text:'Types of Components made', totalComponentsMade: '', handler:'onSubmit'},
]

function DisplayCards () {
    return (
        <>
            {QueCards.map(btn => (
            <button key={btn.id} className="cards" onClick={btn.handler}>
                {btn.text}
            </button>
            ))}
        </>
    )
}

export default function Home() {
  // State to toggle the sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle function for sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
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
            <button
                className={`SidebarToggleBtn ${isSidebarOpen ? 'open' : ''}`}
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </button>
          <img className="BackgroundImg" src="https://i.postimg.cc/Bnyfd5LV/OIP-6.jpg" alt="" />
          <div className="OverBackgroundImgText">
            <h1><strong>Welcome to {userData.name}'s Portfolio</strong></h1>
          </div>
        </div>

        <div className="Grid1">
            <DisplayCards />
        </div>

        {/* Main picture and description */}
        <div className="SlideShow">
          <ItemList />
        </div>

        {/* Showcase past projects */}
        <div className="ShowCase">
          
        </div>
      </div>
    </div>
  );
}
