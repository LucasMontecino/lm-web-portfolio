'use client';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Navbar {
  id: number;
  name: string;
  href: string;
}

const drawerWidth = 240;
const navbarList: Navbar[] = [
  { id: 1, name: 'Hero', href: '#hero' },
  { id: 2, name: 'Work', href: '#work' },
  { id: 3, name: 'Tech Stack', href: '#tech-stack' },
  { id: 4, name: 'Resume', href: '#resume' },
  { id: 5, name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Divider />
      <List>
        {navbarList.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link href={item.href} passHref legacyBehavior>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Determine scroll direction
      if (currentScrollPos > prevScrollPos && visible) {
        // Scrolling down
        setVisible(false);
      } else if (
        currentScrollPos < prevScrollPos &&
        !visible
      ) {
        // Scrolling up
        setVisible(true);
      }

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: '#2c3e50',
          transition: 'transform 0.3s ease-in-out',
          transform: visible
            ? 'translateY(0)'
            : 'translateY(-100%)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {navbarList.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                passHref
                legacyBehavior
              >
                <Button sx={{ color: '#fff' }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
