import React from 'react';
import './aboutUs.css';

const teamMembers = [
  {
    name: 'Manas Garge',
    role: 'Team Leader',
    photo: require('../img/Manas.jpg'),
  },
  {
    
  },
  {
    
  },
  {
   
  },
  
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>We are Team ZENO, a team of dedicated individuals collaborating to create a powerful stress detection system.</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <img src={member.photo} alt={`${member.name}`} className="member-photo" />
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
