'use client';
import { type FC } from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

export const UnAuthAppbar: FC = () => {
  const router = useRouter();
  const handleLoginClicked = async () => {
    await router.push('/login');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Animal Sitting Admin
          </Typography>
          <Button color="inherit" onClick={handleLoginClicked}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
