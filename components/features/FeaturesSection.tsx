'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FeatureCard from './FeatureCard';
import { FEATURES}  from '@/constants/content';
import PrimaryButton from '@/components/common/PrimaryButton';
import DescriptionIcon from '@mui/icons-material/Description';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import HandshakeIcon from '@mui/icons-material/Handshake';

const FeaturesSection: React.FC = () => {
  return (
    <Box
      sx={{
       backgroundColor: 'background.default',
        paddingY: { xs: '4rem', md: '6rem', lg: '4rem' },
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        mb: 2,
        fontSize: { xs: '2rem', md: '2.5rem', lg: '3.5rem' },
        color: 'text.primary',
      }}
    >
      Featured Jobs
    </Typography>

    <Typography
      sx={{
        fontSize: { xs: '1rem', md: '1.25rem' },
        maxWidth: '768px',
        mx: 'auto',
        color: 'text.secondary',
      }}
    >
      The #1 Job Board for Hiring Creative Professionals
    </Typography>

        </Box>

        <Grid container spacing={4 }>
          {FEATURES.map((feature) => (
            <Grid size={{ xs: 12, md: 6 }} key={feature.id}>
              <FeatureCard
                // icon={feature.icon}
                title={feature.title}
                company={feature.company}
                location={feature.location}
                description={feature.description}
                salary={feature.salary}
                posted={feature.posted}
                type={feature.type} id={feature.id}              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{mt: 4, display: 'flex', justifyContent: 'center' }}>
        <PrimaryButton>
          View All Jobs
        </PrimaryButton>
        </Box>
      </Container>

      {/* WHY KOVON SECTION */}
<Box
  sx={{
    mt: 10,
    textAlign: 'center',
  }}
>
  <Box sx={{ mb: 8 }}>
    <Typography
    sx={{
      fontWeight: 700,
      mb: 2,
      fontSize: { xs: '2rem', md: '2.5rem', lg: '3.5rem' },
      color: 'text.primary',
    }}
  >
    Why Kovon
  </Typography>
   <Typography
    sx={{
      fontSize: { xs: '1rem', md: '1.25rem' },
      maxWidth: '768px',
      mx: 'auto',
      color: 'text.secondary',
    }}
  >
    Kovon is redefining how the world discovers and hires talent.
    Our mission is to make overseas job opportunities accessible
    and transparent for everyone.
  </Typography>
  </Box>

 {/* Cards */}
  <Grid container spacing={6} justifyContent="center">
    
    {/* Card 1 */}
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          py: 6,
          px: 3,
          textAlign: 'center',
        }}
      >
        <Box sx={{ fontSize: 70, color: '#7ed958', mb: 2 }}>
        <DescriptionIcon sx={{ fontSize: 70, color: '#7ed958' }} />
        </Box>
        <Typography
  sx={{
    fontSize: '1.5rem',
    fontWeight: 600,
    mb: 1,
    color: 'text.primary',
  }}
>
  Complete Employer Network
</Typography>

<Typography
  sx={{
    fontSize: '1.125rem',
    color: 'text.secondary',
  }}
>
  Jobs across 50+ countries.
</Typography>

      </Box>
    </Grid>

    {/* Card 2 */}
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          py: 6,
          px: 3,
        }}
      >
        <Box sx={{ fontSize: 70, color: '#7ed958', mb: 2 }}>
          <HandshakeIcon sx={{ fontSize: 70, color: '#7ed958' }} />
        </Box>
        <Typography
  sx={{
    fontSize: '1.5rem',
    fontWeight: 600,
    mb: 2,
    color: 'text.primary',
  }}
>
  Fully Transparent Process
</Typography>

<Typography
  sx={{
    fontSize: '1.125rem',
    color: 'text.secondary',
  }}
>
  Clear steps, fair fees, zero misinformation.
</Typography>

      </Box>
    </Grid>

    {/* Card 3 */}
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          py: 6,
          px: 3,
        }}
      >
        <Box sx={{ fontSize: 50, color: '#7ed958', mb: 2 }}>
          <HeadsetMicIcon sx={{ fontSize: 70, color: '#7ed958' }} />
        </Box>
        <Typography
  sx={{
    fontSize: '1.5rem',
    fontWeight: 600,
    mb: 2,
    color: 'text.primary',
  }}
>
  One-Stop Solution
</Typography>

<Typography
  sx={{
    fontSize: '1.125rem',
    color: 'text.secondary',
  }}
>
  Verification, training, documents, and placement in one place.
</Typography>

      </Box>
    </Grid>

  </Grid>
</Box>

    </Box>
  );
};

export default FeaturesSection;
