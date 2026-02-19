'use client';

import React from 'react';
import { Button, ButtonProps } from '@mui/material';

const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <Button
      variant="contained"
      size="large"
      {...props}
      sx={{
        justifyContent: 'center',
        backgroundColor: '#7ed958',
        color: '#0f172a',
        textTransform: 'none',

        padding: '1rem 2rem',
        borderRadius: '3rem',
        fontSize: '1rem',
        fontWeight: 700,
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 12px 25px rgba(34,197,94,0.5)',
          transform: 'translateY(-2px)',
        },
        ...sx, // allows override if needed
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
