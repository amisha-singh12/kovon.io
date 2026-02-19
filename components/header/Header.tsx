'use client';

import Image from "next/image";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ColorModeContext } from '@/theme/ThemeProvider';



import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import CloseIcon from '@mui/icons-material/Close';
import { NAV_LINKS } from '@/constants/content';
import Link from 'next/link';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: theme.palette.background.default,
          transition: 'all 0.3s ease',
          borderBottom: `1px solid ${theme.palette.divider}`

        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            padding: { xs: '0.5rem 1rem', md: '0.75rem 2rem' },
            minHeight: { xs: '64px', md: '80px' },
          }}
        >
          <Link href="/" className="flex items-center">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Image
               src="/logo.webp"
               alt="Kovon Logo"
               width={140}
               height={40}
               priority
               />

            </Box>
          </Link>

          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href}>
                <Button
                  sx={{
                    color:
                      link.label === 'Home'
                      ? '#7ed958'
                      : theme.palette.text.primary,

                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 500,
                    padding: '0.5rem 1rem',
                    '&:hover': {
                      color: '#7ed958',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
           <IconButton
           onClick={colorMode.toggleColorMode}
          sx={{
           color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
           display: { xs: 'none', md: 'flex' },
            }}
         >
        {theme.palette.mode === 'dark' ? (
        <LightModeIcon />
        ) : (
        <DarkModeIcon />
       )}
        </IconButton>


            <Button
              variant="contained"
              sx={{
                backgroundColor: '#7c3aed',
                color: theme.palette.text.primary,
                textTransform: 'none',
                padding: { xs: '0.5rem 1rem', md: '0.625rem 1.5rem' },
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: { xs: '13px', md: '14px' },
                '&:hover': {
                  backgroundColor: '#6d28d9',
                },
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Go to Dashboard
            </Button>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { lg: 'none' },
                color: theme.palette.text.primary,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: '320px',
            backgroundColor: '#1e293b',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <span className="text-white text-xl font-bold">Menu</span>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ padding: '1rem' }}>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                onClick={handleDrawerToggle}
                sx={{
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '0.5rem',
                  '&:hover': {
                    backgroundColor: 'rgba(134, 239, 172, 0.1)',
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: '#ffffff',
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ marginTop: '1rem' }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#7c3aed',
                color: '#ffffff',
                textTransform: 'none',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#6d28d9',
                },
              }}
            >
              Go to Dashboard
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
