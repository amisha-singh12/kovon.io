'use client';

import React from 'react';
import { Card, CardContent, Box, Typography, Chip } from '@mui/material';

interface FeatureCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  posted: string;
  salary: string;
  description: string;
  type?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  
  id,
  title,
  company,
  location,
  posted,
  salary,
  description,
  type = 'FULL TIME',
}) => {
  return (
    <Card
      sx={{
        backgroundColor: '#1e293b',
        borderRadius: '16px',
        border: '1px solid rgba(134, 239, 172, 0.15)',
        transition: '0.3s',
        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor: '#7ed958',
          boxShadow: '0 20px 40px rgba(134, 239, 172, 0.15)',
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        {/* Top Row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {/* Left Side */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Avatar */}
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: '#e5e7eb',
                color: '#7c3aed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '1.25rem',
              }}
            >
              {company.charAt(0)}
            </Box>

            {/* Title + Meta */}
            <Box>
              <Typography
                variant="h6"
                sx={{ color: 'white', fontWeight: 600 }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  color: '#7c3aed',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  mt: 0.5,
                }}
              >
                {company}
              </Typography>

              <Typography
                sx={{
                  color: '#9ca3af',
                  fontSize: '0.85rem',
                  mt: 0.5,
                }}
              >
                {location} • {posted}
              </Typography>
            </Box>
          </Box>

          {/* Salary */}
          <Typography
            sx={{
              color: '#7ed958',
              fontWeight: 600,
              fontSize: '1rem',
              alignSelf: { xs: 'flex-start', md: 'flex-start' },
            }}
          >
            {salary}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          sx={{
            color: '#cbd5e1',
            fontSize: '0.95rem',
            mt: 3,
          }}
        >
          {description}
        </Typography>

        {/* Bottom Tag */}
        <Box sx={{ mt: 3 }}>
          <Chip
            label={type}
            sx={{
              backgroundColor: '#7ed958',
              color: '#0f172a',
              fontWeight: 600,
              borderRadius: '999px',
              px: 2,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
