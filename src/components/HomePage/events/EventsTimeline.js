import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CentralLine = styled.div`
position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 2px;
    background-color: black;
    z-index: 0;
`;

const EventCard = styled.div`
width: 40%;  // Adjusting the width to make it more prominent
    height: 60vh;  // Making the height of each card 80% of the viewport height
    background-color: rgba(0, 150, 255, 0.7);
    margin: 2rem 0;
    color: #fff;
    padding: 1rem;
    border-radius: 8px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;  // Centering the content vertically

    &:nth-child(odd) {
        align-self: flex-start;
    }
    
    &:nth-child(even) {
        align-self: flex-end;
    }
`;

const MovingSpot = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 10px;
    height: 10px;
    background: blue;
    border-radius: 50%;
    transform: translateX(-50%);
`;

const EventsTimeline = () => {


    const events = [
        { id: 1, title: 'Event 1', description: 'Description for Event 1'},
        { id: 2, title: 'Event 2', description: 'Description for Event 2' },
        { id: 3, title: 'Event 3', description: 'Description for Event 3'},
        { id: 4, title: 'Event 4', description: 'Description for Event 4' },
        { id: 5, title: 'Event 5', description: 'Description for Event 5'},
        { id: 6, title: 'Event 6', description: 'Description for Event 6' },
        { id: 7, title: 'Event 7', description: 'Description for Event 7'},
        { id: 8, title: 'Event 8', description: 'Description for Event 8' },
        { id: 9, title: 'Event 9', description: 'Description for Event 9'},
        { id: 10, title: 'Event 10', description: 'Description for Event 10'}
        
    ];


  
  
    return (
        <TimelineContainer>
            <CentralLine />
            <MovingSpot />
            {events.map(event => (
                <EventCard key={event.id}>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                </EventCard>
            ))}
        </TimelineContainer>
    );

};

export default EventsTimeline;
