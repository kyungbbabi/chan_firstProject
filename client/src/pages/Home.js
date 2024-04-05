import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Home(props) {
  const [images, setImages] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: { client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY, count: 30 }
        })
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    getImages();
  }, []);

  console.log(images)

  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);

    if (step === maxSteps) {
      setActiveStep(0);
    }
  };

  return (

    <>
      <Box>
        {images}
      </Box>
    </>
    // <Box>
    //   {images.length > 0 && (
    //     <>
    //       <Paper square elevation={0} sx={{ display: 'flex', alignItems: 'center', height: 50, pl: 2, bgcolor: 'background.default', }} >
    //         <Typography>{images[activeStep].label}</Typography>
    //       </Paper>
    //       <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents >
    //         {images.map((step, index) => (
    //           <div key={step.label}>
    //             {Math.abs(activeStep - index) <= 2 ? (
    //               <Box component="img" sx={{ height: 255, display: 'block', maxWidth: 400, overflow: 'hidden', width: '100%', }} src={step.imgPath} alt={step.label} />
    //             ) : null}
    //           </div>
    //         ))}
    //       </AutoPlaySwipeableViews>
    //       <MobileStepper steps={maxSteps} position="static" activeStep={activeStep}
    //         nextButton={
    //           <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} >
    //             Next
    //             {theme.direction === 'rtl' ? (<KeyboardArrowLeft />) : (<KeyboardArrowRight />)}
    //           </Button>
    //         }
    //         backButton={
    //           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
    //             {theme.direction === 'rtl' ? (<KeyboardArrowRight />) : (<KeyboardArrowLeft />)}
    //             Back
    //           </Button>
    //         }
    //       />
    //     </>
    //   )}
    // </Box>
  );
}
