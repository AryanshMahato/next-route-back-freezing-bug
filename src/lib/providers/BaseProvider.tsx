'use client';

import React, { type FC, ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { theme } from '../theme/theme';

type Props = {
  children: ReactNode;
};

export const BaseProvider: FC<Props> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
