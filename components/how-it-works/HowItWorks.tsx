'use client';

import React from 'react';
import { Box, Container, Grid , Typography} from '@mui/material';
import { STEPS } from '@/constants/content';
import CultureSection from '@/components/paralax/CultureSection';
import PrimaryButton from '@/components/common/PrimaryButton';



const HowItWorks: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        paddingY: { xs: '4rem', md: '6rem', lg: '8rem' },
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Typography
  sx={{
    fontSize: { xs: '1.875rem', md: '2.25rem', lg: '3rem' }, // same 3xl, 4xl, 5xl sizes
    fontWeight: 700,
    mb: 2,
    color: 'text.primary',
  }}
>
  Your Journey to a Global Career
</Typography>

<Typography
  sx={{
    fontSize: { xs: '1.125rem', md: '1.25rem' }, // same lg, xl sizes
    maxWidth: '768px',
    mx: 'auto',
    color: 'text.secondary',
  }}
>
  A simple, transparent process with our team guiding you all the way.
</Typography>

        </Box>

        {/* Steps Section */}
         <Box
          sx={{
          position: "relative",
          mt: 10,
         }}
>
  {/* Horizontal Line */}
  <Box 
    sx={{
      position: "absolute",
      top: 35, // half of circle height
      left: 0,
      right: 0,
      height: "3px",
      backgroundColor: "#7ed958",
      zIndex: 0,
      display: { xs: "none", md: "block" },
    }}
  />

  {/* Steps Container */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      zIndex: 1,
      flexWrap: { xs: "wrap", md: "nowrap" },
      gap: { xs: 6, md: 0 },
    }}
  >
    {STEPS.map((step) => (
      <Box
        key={step.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: { xs: "100%", md: "auto" },
        }}
      >
        {/* Circle */}
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: 'background.paper',
            border: "1px solid grey",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="text-[#7ed958] text-2xl font-bold">
            {step.stepNumber}
          </span>
        </Box>

        {/* Title */}
        <Box sx={{ mt: 3 }}>
           <Box
           component="h3"
            sx={{
              fontSize: { xs: '1.125rem', md: '1.25rem' }, // same as text-lg md:text-xl
             fontWeight: 600,
             color: 'text.primary',
             }}
          >
           {step.title}
         </Box>
        </Box>
      </Box>
    ))}
  </Box>
</Box>


        <Box
          sx={{
            textAlign: 'center',
            marginTop: '4rem',
          }}
        >
        </Box>
      </Container>

      <CultureSection />

      <Box sx={{ mt: 12, mb: 5, textAlign: 'center' }}>
  
      <Box
      component="h2"
      sx={{
      fontSize: { xs: '2.25rem', md: '3rem', lg: '3.75rem' }, // same 4xl, 5xl, 6xl
      fontWeight: 700,
      mb: 2,
      color: 'text.primary',
      }}
      >
      Let's Connect
      </Box>

       <Box
       component="p"
       sx={{
        fontSize: { xs: '1.125rem', md: '1.25rem' }, // same lg, xl
        maxWidth: '768px',
        mx: 'auto',
        color: 'text.secondary',
       }}
       >
        Kovon is transforming how talent moves across borders, creating pathways that Bridge Gaps, Build Futures!
       </Box>

    </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8, mb: 8 }}>
       <PrimaryButton>
        Get in touch
       </PrimaryButton>
      </Box>
    </Box>
  );
};

export default HowItWorks;
