import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import for theming (optional)
import { CssBaseline, Grid } from '@mui/material'; // Import Grid for layout
import Header from './Header.js'; // Import your Header component
import Sidebar from './Sidebar.js'; // Import your Sidebar component
import Projects from './Projects.js';
import Skills from './skills.js';
import ContactForm from './Form.js';


const projectsData = [
  {
    id: 1,
    image: 'ML.png', // Assuming you have an image named ML.png in the public folder
    title: 'nCr-based Feature Selection Algorithm', // Add titles for each project
    description: `Received a DS and ML certification from LUMS (Lahore University of Management Sciences) at age 15. Developed an original nCr-based feature selection algorithm and led a team of 8 in completing the project, handling logic and code.`,
  },
  {
    id: 2,
    image: 'BTW.webp', // Assuming you have an image named BTW.webp in the public folder
    title: 'Shopify Web Developer Intern at BTW',
    description: `Worked as a Shopify web-developer intern at BTW. Created and designed visually appealing websites while adhering to client demands with ease.`,
  },
  {
    id: 3,
    image: 'WEBDEV1.jpeg', // Assuming you have an image named WEBDEV1.jpeg in the public folder
    title: 'Climate Change Awareness Website',
    description: 'Developed a website to raise awareness about climate change.',
  },
  {
    id: 4,
    image: 'lucky.png', // Assuming you have an image named lucky.png in the public folder
    title: 'Lucky Shrub Website',
    description: 'Created a website for Lucky Shrub.',
  },
  // ... Add more projects to the array with titles and descriptions
];

function App() {
  const theme = createTheme({ /* Define your theme here (optional) */ }); // For theming

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="App">
        <Header /> {/* Pass props to Header */}
        <Grid container spacing={2}> {/* Use Material UI Grid for layout */}
          <Grid item xs={4}> {/* Sidebar takes up 4 columns on small screens */}
            <Sidebar />
          </Grid>
          <Grid item xs={8}> {/* Projects take up 8 columns on small screens */}
            <Projects projects={projectsData} />
          </Grid>
        </Grid>
      </div>
      <Skills />
      <ContactForm />
    </ThemeProvider>
  );
}

export default App;