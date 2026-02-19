'use client';

import React, { useState } from 'react';
import { Box, Button, Container, TextField, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { HERO_CONTENT, POPULAR_SEARCHES } from '@/constants/content';
import { Typography } from '@mui/material';

const HeroSection: React.FC = () => {
  const [jobRole, setJobRole] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handleSearch = () => {
    console.log('Searching for:', jobRole, location);
  };

  return (
    <Box
       sx={{
        backgroundColor: 'background.default',
        minHeight: { xs: '100vh', md: 'calc(100vh - 80px)' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'center', lg: 'flex-start' },
       alignItems: 'center',
       overflow: 'hidden',
       position: 'relative',
       paddingTop: { xs: '4rem', md: '6rem' },
       paddingBottom: { xs: 0, md: '4rem'  },
  }}
    >
      <Container
        maxWidth="xl"
        sx={{
           display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', lg: 'flex-start' },
          textAlign: { xs: 'center', lg: 'left' },
           zIndex: 2,
           width: '100%',
           px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.9fr 1.1fr' },
            gap: { xs: '2rem', lg: '4rem' },
            alignItems: { xs: 'center', lg: 'flex-start' },
          }}
        >
          <Box>
            <Typography
           variant="h1"
          sx={{
            color: 'text.primary',


            fontWeight: 700,
             fontSize: {
              xs: '4rem',
              md: '3rem',
              lg: '4rem',
              xl: '5rem',
            },
             lineHeight: 1.1,
             mb: 3,
            }}
            >
          {HERO_CONTENT.headline}
         <br />
           <Box component="span" sx={{ color: '#7ed958' }}>
           {HERO_CONTENT.highlightedText}
           </Box>
          </Typography>

            <Box
              component="p"
                sx={{
                 color: '#a0aec0',       // theme-aware text color (white in dark mode)
                 fontSize: { xs: '1.25rem', md: '1.25rem', lg: '1.5rem' }, // responsive text
                 mb: 3,                        // margin-bottom
                 maxWidth: '48rem',            // approx max-w-3xl
                 lineHeight: 1.8,              // same as leading-[1.8]
                 }}
              >
            {HERO_CONTENT.description}
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
                 flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', md: 'flex-start' },
                marginBottom: '3rem',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#7ed958',
                  color: '#0f172a',
                  textTransform: 'none',
                  padding: '0.875rem 2rem',
                  borderRadius: '3rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  //  boxShadow: '0 6px 0 #4ade80',
                   transition: 'all 0.3s ease',
                  '&:hover': {
                       boxShadow: '0 12px 25px rgba(34,197,94,0.5)',
                      transform: 'translateY(-2px)',
                  },
                }}
              >
                {HERO_CONTENT.primaryCta}
              </Button>
              <Button
                 variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#7ed958',
                  color: '#0f172a',
                  textTransform: 'none',
                  padding: '0.875rem 2rem',
                  borderRadius: '3rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                   boxShadow: 'none',
                   transition: 'all 0.3s ease',
                  '&:hover': {
                      boxShadow: '0 10px 20px rgba(34,197,94,0.5)',
                      transform: 'translateY(-2px)',
                  },
                }}
              >
                {HERO_CONTENT.secondaryCta}
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', lg: 'block' },
              position: 'relative',
              height: '600px',
              //  backgroundColor: 'red', // temporary
            }}
          >
         {/* Image 1 - Top Right */}
<Box
  component="img"
  src="/worker1.avif"
  alt="worker"
  sx={{
    width: 190,
    height: 190,
    borderRadius: "50%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    right: 240,
  }}
/>

{/* Image 2 */}
<Box
  component="img"
  src="/worker2.avif"
  alt="worker"
  sx={{
    width: 150,
    height: 150,
    borderRadius: "50%",
    objectFit: "cover",
    position: "absolute",
    top: 120,
    left: 60,
  }}
/>

{/* Image 3 */}
<Box
  component="img"
  src="/worker3.avif"
  alt="worker"
  sx={{
    width: 120,
    height: 120,
    borderRadius: "50%",
    objectFit: "cover",
    position: "absolute",
    top: 360,
    left: 120,
  }}
/>

{/* Image 4 */}
<Box
  component="img"
  src="/worker4.avif"
  alt="worker"
  sx={{
    width: 150,
    height: 150,
    borderRadius: "50%",
    objectFit: "cover",
    position: "absolute",
    bottom: 250,
    right: 40,
  }}
/>

{/* Image 5 */}
<Box
  component="img"
  src="/worker5.avif"
  alt="worker"
  sx={{
    width: 200,
    height: 200,
    borderRadius: "50%",
    objectFit: "cover",
    position: "absolute",
    bottom: 20,
    right: 160,
  }}
/>

          </Box>
        </Box>
       
             
{/* Mobile / Tablet Images */}
<Box
  sx={{
    display: { xs: 'flex', lg: 'none' },
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
  }}
>
  {[1, 2, 3].map((n, index) => (
    <Box
      key={n}
      component="img"
      src={`/worker${n}.avif`}
      alt={`worker${n}`}
      sx={{
        width: 100,
        height: 100,
        borderRadius: '50%',
        objectFit: 'cover',
        marginLeft: index === 0 ? 0 : '-30px', // overlap effect
        zIndex: 10 - index,
      }}
    />
  ))}
</Box>

      </Container>
     <Box
  sx={{
    width: '100%',                       // full width background
    minHeight: { xs: '65vh', md: 'calc(80vh - 100px)' },
    marginTop: { xs: '7rem', md: '4rem' },
    backgroundColor: '#1a203c',          // full-width background color
    display: 'flex',
    justifyContent: 'center',            // horizontal centering of inner container
    py: { xs: 8, md: 12 },               // vertical padding
  }}
>
  {/* Inner container: content centered and constrained in width */}
  <Box
    sx={{
      width: '100%',
      maxWidth: '900px',                 // limits how wide content can go
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',              // center all children horizontally
      textAlign: 'center',               // center text
      gap: '2rem',                        // spacing between elements
    }}
  >
    {/* Headline */}
    <Typography
      variant="h2"
      sx={{
        color: 'white',
        fontWeight: 600,
        fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
        lineHeight: 1.2,
      }}
    >
      There Are {HERO_CONTENT.jobsCount} Open
      <br />
      Opportunities Here For You!
    </Typography>

    {/* Search Box */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: '1rem',
        width: '100%',
        padding: { xs: '5rem', sm: '2rem' },
        backgroundColor:'#0f172a', 
        borderRadius: '2rem',
      }}
    >
      <TextField
        placeholder="Search Job Role"
        value={jobRole}
        onChange={(e) => setJobRole(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#ffffff',
            borderRadius: '2rem',
            '& fieldset': { borderColor: 'transparent' },
            '&:hover fieldset': { borderColor: 'transparent' },
            '&.Mui-focused fieldset': { borderColor: '#7ed958' },
          },
          '& .MuiInputBase-input': { padding: '0.875rem 1.5rem' },
        }}
      />
      <TextField
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#ffffff',
            borderRadius: '2rem',
            '& fieldset': { borderColor: 'transparent' },
            '&:hover fieldset': { borderColor: 'transparent' },
            '&.Mui-focused fieldset': { borderColor: '#7ed958' },
          },
          '& .MuiInputBase-input': { padding: '0.875rem 1.5rem' },
        }}
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleSearch}
        startIcon={<SearchIcon />}
        sx={{
          backgroundColor: '#7ed958',
          color: '#0f172a',
          textTransform: 'none',
          padding: '0.875rem 2.5rem',
          borderRadius: '2rem',
          fontSize: '1rem',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          '&:hover': { backgroundColor: '#7ed958' },
        }}
      >
        Search
      </Button>
    </Box>

    {/* Popular Searches */}
    <Box
      sx={{
        display: 'flex',
        gap: '0.75rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Typography color="white" fontWeight={700} fontSize="0.875rem">
        Popular Searches:
      </Typography>
      {POPULAR_SEARCHES.map((search) => (
        <Chip
          key={search}
          label={search}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: '#0f172a',
            fontWeight: 500,
            fontSize: '0.875rem',
            padding: '0.25rem 0.5rem',
            height: 'auto',
            '&:hover': { backgroundColor: '#ffffff', cursor: 'pointer' },
          }}
          onClick={() => setJobRole(search)}
        />
      ))}
    </Box>
  </Box>
</Box>

    </Box>
  );
};

export default HeroSection;
