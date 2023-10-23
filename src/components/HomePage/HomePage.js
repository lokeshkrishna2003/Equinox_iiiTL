import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Typed from 'react-typed';
import ParticleBackground from '../ParticleBackground';
import LightEffectDiv from '../LightEffectDiv';
import Carousel from '../3DCarousel/Carousel';
import ScrollIndicator from '../ScrollIndicator';
import ScrollProgress from '../ScrollProgress';
import Events from './events/Events';



function getCurrentGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
      return "Good Morning";
  } else if (currentHour < 18) {
      return "Good Afternoon";
  } else {
      return "Good Evening";
  }
}


const HomePageContainer = styled.div`
    position: relative;
    z-index: 10;
    box-sizing: border-box;
    
    color:grey;
    height: 100vh;
    width: 100vw;
    background-color:transparent;
    
`;

const Logo = styled.img`
    width: 35vw;  // Increased size for better visibility
    height: 35vw;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 0.2s ease-out;

    &:hover {
        transform: translateY(-50%) scale(1.1);
    }
`;

const WelcomeText = styled.h1`
    position: absolute;
    top: 17%;
    left: 10%;
    font-size: 3rem;  // Increased size for better visibility
`;

const Description = styled.div`
    position: relative;

    top: 40%;
    left: 10%;
    width: 50%;
    font-size: 1.2rem;
    line-height: 1.5;
`;

const HighlightsHeading = styled.h2`
margin-top: -5%;
    font-size: 2.5rem;
    color: grey;
    margin-bottom: 8%;
    margin-left:3%;  // Adjust this value for the space between the heading and the carousel
    transition: transform 0.5s, opacity 0.5s;
`;


const CarouselContainer = styled.div`

    
`;

function HomePage() {

  const greeting = getCurrentGreeting();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);


    useEffect(() => {

// Lock the scroll when HomePage mounts
document.body.style.overflow = 'hidden';


// Unlock the scroll after a delay (e.g., 1 second)
const unlockTimeout = setTimeout(() => {
  document.body.style.overflow = '';
}, 50);  // Adjust this delay as needed
      

      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = ((window.scrollY / totalHeight) * 100);
  
        if (scrolled > 80 && showScrollIndicator) {
          setShowScrollIndicator(false);
        } else if (scrolled <= 80 && !showScrollIndicator) {
          setShowScrollIndicator(true);
        }
      };
      // GSAP animation for the Equinox logo
      gsap.fromTo(".logo", 
          { scale: 2,borderRadius:'40%' },  
          { duration: 2, x: '80%',y:'-15%', scale: 0.8, ease: 'power3.out' } 
      );

      // Initialize AOS
      AOS.init({
          duration: 1000,
          once: false,
          mirror: true 
      });
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);

    // Cleanup: Ensure to clear the timeout when component unmounts
    clearTimeout(unlockTimeout);
      };


    }, [showScrollIndicator]);

    return (
        <>
            <ParticleBackground />
            <HomePageContainer>
            

                <Logo className="logo" src='https://yt3.googleusercontent.com/pJvCO5M-E5TOHP0I_553lLV0BPb7HY99Dm0Ih-33-9IV2yAaRVVZxcJ84z7PiezoAk2VSLBK1w=s900-c-k-c0x00ffffff-no-rj' alt="Equinox Logo" />
                <WelcomeText data-aos="fade-right">
                  <span style={{color:'white'}}> {greeting}, </span>
                    <Typed
                        strings={[`Welcome to Equinox Universe of IIITL`]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </WelcomeText>
                <Description data-aos="fade-up" data-aos-duration="1000">
                  
                <LightEffectDiv data-aos="fade-up">After trying the steps, let me know what you find. If the issue persists, we might need to look into more advanced troubleshooting or consider restructuring the component or its parent components.</LightEffectDiv>
                <h1 data-aos-delay="500" data-aos="fade-up"style={{marginTop:'5%',}} > 
                IIITL's Annual TechnoCultural fest 
                </h1>
                <h1 data-aos-delay="500" data-aos="fade-up"style={{marginTop:'5%'}} >

                <Typed
                        strings={[` A Conclave of Culture`]}
                        typeSpeed={80}
                        backSpeed={20}
                        
                    />
                    
                    </h1>

                  
                </Description>
   
            </HomePageContainer>

            <HighlightsHeading data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                Equinox '23 Highlights
            </HighlightsHeading>

            <CarouselContainer data-aos="fade-up">
                <Carousel images={['https://media.licdn.com/dms/image/D4D12AQG5orpqLkkA3Q/article-cover_image-shrink_720_1280/0/1662447772061?e=2147483647&v=beta&t=GutkIX3Oq-8hNCIjd1IpZ6uWocef4TDHe3u-qxwbmH4', 'https://hanumanimages.com/wp-content/uploads/2023/08/hanuman-ji-danger-photo-HD-576x1024.jpg', 'https://media.licdn.com/dms/image/D4D12AQG5orpqLkkA3Q/article-cover_image-shrink_720_1280/0/1662447772061?e=2147483647&v=beta&t=GutkIX3Oq-8hNCIjd1IpZ6uWocef4TDHe3u-qxwbmH4', 'https://media.licdn.com/dms/image/D4D12AQG5orpqLkkA3Q/article-cover_image-shrink_720_1280/0/1662447772061?e=2147483647&v=beta&t=GutkIX3Oq-8hNCIjd1IpZ6uWocef4TDHe3u-qxwbmH4', 'https://media.licdn.com/dms/image/D4D12AQG5orpqLkkA3Q/article-cover_image-shrink_720_1280/0/1662447772061?e=2147483647&v=beta&t=GutkIX3Oq-8hNCIjd1IpZ6uWocef4TDHe3u-qxwbmH4', 'https://media.licdn.com/dms/image/D4D12AQG5orpqLkkA3Q/article-cover_image-shrink_720_1280/0/1662447772061?e=2147483647&v=beta&t=GutkIX3Oq-8hNCIjd1IpZ6uWocef4TDHe3u-qxwbmH4']} />
            </CarouselContainer>



<Events/>



           { showScrollIndicator&&<ScrollIndicator data-aos="fade-up"/> } {/* This will be at the bottom, hinting users to scroll */}
            <ScrollProgress />  {/* This will always be at the top of the viewport */}

            

           

        </>
    );
}

export default HomePage;
