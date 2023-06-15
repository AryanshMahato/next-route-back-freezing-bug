import { type FC } from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

export const Appbar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Animal Sitting Admin
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
