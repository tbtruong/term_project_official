import { Box, Typography } from '@mui/material';
import * as React from 'react';
import AppBar from './Components/AppBar';
import SchoolCard from './Components/SchoolCard';
import './index.css';
import ProjectCard from './Components/ProjectCards'

export const App: React.FC = () =>{

  const headerStyling = {
    fontFamily: 'Bebas Neue',
    // // fontWeight: 700,
    margin: '1rem 1rem',
    letterSpacing: '.3rem',
    // color: 'inherit'
  }

  const paragraphStyling = {
    fontFamily: 'Bebas Neue',
    marginLeft: '2rem',
    marginBottom: '2rem'
  }

  const topLevelStyling = {
    display: 'flex',
    flexDirection: 'column'
  }

  const videoStyling = {
    marginLeft: '2rem'
  }

  const splitPageStyling = {
    display: 'flex',
    justifyContent: 'space-evenly'
  }

  const projectStyle = {
    display: "flex",
    flexDirection: "horizontal",
    flexWrap: "wrap",
    marginTop: "1rem",
    gap: "5rem",
    rowGap: "2rem",
    justifyContent: 'space-evenly',
    textDecoration: 'none!important'
  }

    return (
      <Box sx={topLevelStyling}>
        <AppBar/>
        <Typography variant={'h3'} sx={headerStyling}> Background </Typography>
        <Typography variant={'h6'} sx={paragraphStyling}>
            My name is Tung Truong. I am from a small island called Guam which is a U.S territory in the middle of the Pacific Ocean. 
            I attended Boston University for my undergrad where I graduated with a degree in Computer Science.
            After graduation, I joined Kessel Run which is a software detachment of the Air Force.
        </Typography>
        <Box sx={videoStyling}> 
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Nc5fxOVD6bo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Box>
        <Typography variant={'h3'} sx={headerStyling}> History </Typography>
        <Typography variant={'h6'} sx={paragraphStyling}> I am currently pursuing a Masters in Software Development at Boston University. I am passionate about creating applications, and I hope 
            to be able to carry the knowledge I learned from this course and effectively utilize it in future jobs and classes. I am excited to continue learning other languages and framework and will carefully utilize my limited time 
            at Boston University.  </Typography>
          <Box sx={splitPageStyling}>
            <SchoolCard title='Bachelor of Arts in Computer Science' description='Graduated 2020' details={["GPA: 3.5", "Minors: Chemistry, Biology", "Coursework: Software Engineering, Full Stack Development,  Mobile App Development, Intro to Artificial Intelligence"]}/>
            <SchoolCard title='Masters of Science in Software Development' description='Expected Graduation 2023' details={["GPA: N/A", "Minors: N/A", "Coursework: Software Engineering, Frontend Development"]}/>
          </Box>
        <Typography variant={'h3'} sx={headerStyling}> Projects </Typography>
        <Box sx={projectStyle}>
          <ProjectCard name={'Quarantine Exercise'} points={["??? Employed Java and Android Studios to create a mobile application that enables users to exercise with various difficulty levels.",
          "??? Expanded app versatility by incorporating simulated training weights that allows user to increase force needed to count as a rep.",
          "??? Increased user enjoyment by integrating a reward system that plays music and strobe lights after user hits a certain rep count."]} 
          link={''} />
          <ProjectCard name={'Travelers'} points={["??? Created an Angular and NodeJS web application that matches user to a travel destination based on their music preferences.",
            "??? Implemented weather forecast feature to provide the user key information to plan their travels enhancing user experience.",
            "??? Designated scrum master and coordinated with teammates to set up an agile/scrum environment boosting productivity."]} link={''}/>
          <ProjectCard name={'Optimized Space Invaders'} points={["??? Created an Angular and NodeJS web application that matches user to a travel destination based on their music preferences.",
            "??? Implemented weather forecast feature to provide the user key information to plan their travels enhancing user experience.",
            "??? Designated scrum master and coordinated with teammates to set up an agile/scrum environment boosting productivity."]} link={''}/>
          <ProjectCard name={'Discrete Event Simulator'} points={["??? Devised system scheduling simulator using Java to mimic a wide range of real life scenarios through use of numerous scheduling methods accounting for varying service times, arrival rates, number of processors, and data handling procedures.",
            "??? Analyzed system performance metrics and run times of various data structures employing the most suitable that imitates caches crucial for meeting task deadlines, successfully avoids scheduling deadlocks, and schedules in the most efficient time."]} link={'a'}/>
        </Box>
      </Box>
    );



  }

export default App;
