import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'; // Import Grid from Material UI
import { animated, useSpring } from 'react-spring'; // Import from react-spring


function Projects({ projects }) {
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    setAnimationDelay((prevDelay) => prevDelay + 200); // Adjust delay between animations (optional)
  }, []);

  const animatedStyle = useSpring({
    opacity: animationDelay > 0 ? 1 : 0, // Animate opacity
    transform: animationDelay > 0 ? 'translateY(0px)' : 'translateY(20px)', // Animate transform (optional)
    from: { opacity: 0, transform: 'translateY(20px)' }, // Initial animation state
    config: { duration: 400 }, // Animation duration
  });

  const [isHovered, setIsHovered] = useState([]); // State to track hovered cards

  const handleCardHover = (index, hoverState) => {
    setIsHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = hoverState;
      return updatedHovered;
    });
  };

  return (
    <div  className="projects">  {/* Attach ref to the main container */}
      <h2 style={{ fontSize: '5em', color: '#f0545e', textAlign: 'justify', fontFamily: 'Verdana', marginBottom: '1em' }}>  {/* Added margin-bottom */}
        Projects
      </h2> {/* Added h2 element with content "Projects" */}
      <Grid container spacing={1}> {/* Wrap cards in Grid container with spacing of 1 */}
        {projects.map((project, index) => (
          <Grid item xs={6} key={project.id}> {/* Each project takes 6 columns on small screens */}
            <animated.div style={animatedStyle}> {/* Wrap card with animated div */}
              <Card
                className="card"
                sx={{ maxWidth: '25em', mb: '1em' }} // Set max-width and margin
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              > {/* Add hover event handlers */}
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title || project.description}
                />
                <CardContent>
                  <Typography variant="h5" component="div" className="card-title">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
