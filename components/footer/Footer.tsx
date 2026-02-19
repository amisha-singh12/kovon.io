'use client';

import React from 'react';
import { Box, Container, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
   <Box
  component="footer"
  sx={{
    backgroundColor: '#1a203c',
    py: { xs: '3rem', md: '4rem' },
  }}
>
  <Container
    maxWidth={false}
    sx={{
      px: { xs: 3, md: 8, lg: 12 }, // responsive side padding
    }}
  >
    <Grid container spacing={{ xs: 4, md: 6, lg: 8 }}>
      
      {/* LEFT SECTION */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 300, // keeps text elegant
          }}
        >
          <Image
            src="/logo.webp"
            alt="Kovon Logo"
            width={150}
            height={60}
            priority
          />

          <p className="text-gray-300 text-sm leading-relaxed">
            Kovon is redefining how the world discovers and hires talent.
            Our mission is to make overseas job opportunities accessible
            and transparent for everyone.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed">
            Kovon Global Private Limited, MANA, UBER VERDANT PHASE 2,
            Carmelram, Bangalore South, Bangalore - 560035, Karnataka
          </p>

          <p className="text-gray-300 text-sm">
            Contact @ +91-9019917618
          </p>
        </Box>
      </Grid>

      {/* CANDIDATES */}
      <Grid item xs={6} md={6}>
        <h4 className="text-white font-semibold mb-4">Candidates</h4>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">
            Find Jobs
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">
            How it Works
          </Link>
        </Box>
      </Grid>

      {/* EMPLOYERS */}
      <Grid item xs={6} md={6}>
        <h4 className="text-white font-semibold mb-4">Employers</h4>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">
            Hire Talent
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">
            Book a Demo
          </Link>
        </Box>
      </Grid>

      {/* COMPANY */}
      <Grid item xs={6} md={6}>
        <h4 className="text-white font-semibold mb-4">Company</h4>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">
            About Us
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">
            Culture
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">
            Privacy Policy
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">
            Terms & Conditions
          </Link>
        </Box>
      </Grid>
    </Grid>

    {/* BOTTOM */}
    <Box
      sx={{
        mt: 5,
        pt: 3,
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Kovon Global Private Limited. All Rights Reserved.
      </p>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <IconButton sx={{ color: '#9ca3af' }}><LinkedInIcon /></IconButton>
        <IconButton sx={{ color: '#9ca3af' }}><TwitterIcon /></IconButton>
        <IconButton sx={{ color: '#9ca3af' }}><InstagramIcon /></IconButton>
      </Box>
    </Box>
  </Container>
</Box>

  );
};

export default Footer;
