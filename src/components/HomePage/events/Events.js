import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  LightEffectDiv  from '../../LightEffectDiv'; // Update the import path accordingly
import EventsTimeline from './EventsTimeline';




// Styles

const ContainerWrapper = styled.div`
display:flex;
width:100%;
flex-direction:column;
rgba(255, 255, 255, 0.1);
justify-content:center;
align-items: center;
margin-top:2%;

`;
const Container = styled.div`
  width: 90%;
  display: flex;
  margin-top:2%;
  flex-direction: column;
  align-items: center;

`;

const EquinoxEventsHeader = styled.h1`
  text-align: right;
  width: 100%;
  padding: 2rem;
  right:10%;
  color: grey;
  z-index:1;
  // Additional styles for AOS and GSAP
`;

const TextedDivWrapper = styled(LightEffectDiv)`
//   width: 50%;
  text-align: left;
  padding: 2rem;
  margin: 2rem 0;
`;

const EventsContainer = styled.div`
width: 90%;
  padding: 4rem 2rem;
  margin: 2rem 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto; // ensures it takes up as much height as needed

  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s, transform 0.3s; // Smooth transition for the hover effect


`;

const EventsHeader = styled.h2`
  text-align: center;
  color: grey;
`;

// Component
const Events = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
<ContainerWrapper  >

      <EquinoxEventsHeader data-aos="fade-right">Equinox Events</EquinoxEventsHeader>
<Container>
      <TextedDivWrapper data-aos="fade-left">
        Here are the main events that took place during Equinox,Here are the main events that took place during Equinox,Here are the main events that took place during Equinox
        Here are the main events that took place during Equinox,Here are the main events that took place during EquinoxHere are the main events that took place during EquinoxHere are the main events that took place during EquinoxHere are the main events that took place during EquinoxHere are the main events that took place during Equinox
        Here are the main events that took place during Equinox

      </TextedDivWrapper>
      <EventsContainer data-aos="zoom-in">
        <EventsHeader>Events</EventsHeader>
<EventsTimeline/>
      </EventsContainer>
    </Container>

</ContainerWrapper>
    
  );
};

export default Events;
