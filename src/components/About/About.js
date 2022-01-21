import React from 'react';
import { pageTextContent } from '../../data/pageTextContent';

const About = () => {
  const { leadersList: { name, position } } = pageTextContent;
  return (
    <section>
      <div>
        <h2>Your team of professionals</h2>
        <p>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
      </div>
      <div>
        <div>
          <h2>Our Heritage</h2>
          <p>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
          <p>Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. </p>
          <p>Our small team of world-class professionals provides input on every project.</p>
        </div>
        <img src='' alt='' />
        </div>
      <div>
        <h2>The Leaders</h2>
        {pageTextContent.leadersList.map((leader) => {
          return (
            <div>
              <img src='' alt='' />
              <p>{leader.name}</p>
              <p>{leader.position}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default About;
