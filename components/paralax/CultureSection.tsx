'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { CULTURE_CONTENT } from '@/constants/content';

const CultureSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',

        backgroundImage: "url('/office.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: {
          xs: 'fixed', // mobile fallback
          md: 'fixed',  // parallax effect on desktop
        },
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          py: { xs: 10, md: 0 },
        }}
      >
        {/* Heading */}
<Typography
  variant="h2"
  sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' } }}
>
  {CULTURE_CONTENT.heading}
</Typography>

<Typography sx={{ maxWidth: 700, fontSize: '1.1rem', lineHeight: 1.7, mb: 6, color: '#e5e7eb' }}>
  {CULTURE_CONTENT.description}
</Typography>

<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, mb: 6 }}>
  {CULTURE_CONTENT.values.map((val) => (
    <Box sx={{ maxWidth: 300 }} key={val.title}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        {val.title}
      </Typography>
      <Typography sx={{ color: '#d1d5db' }}>{val.text}</Typography>
    </Box>
  ))}
</Box>

<Button
  variant="contained"
  sx={{
    backgroundColor: '#7ed958',
    color: '#0f172a',
    textTransform: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '3rem',
    fontWeight: 700,
    '&:hover': { backgroundColor: '#6fd94b' },
  }}
>
  {CULTURE_CONTENT.buttonText}
</Button>
      </Container>
    </Box>
  );
};

export default CultureSection;
