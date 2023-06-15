import { type FC, ReactNode } from 'react';
import { Appbar } from '../../components/Appbar/Appbar';
import { UnAuthAppbar } from '../../components/UnAuthAppbar/UnAuthAppbar';

type Props = {
  children: ReactNode;
  isAuthenticated?: boolean;
};

export const BaseLayout: FC<Props> = ({
  children,
  isAuthenticated = false,
}) => {
  return (
    <>
      {isAuthenticated ? <Appbar /> : <UnAuthAppbar />}
      {children}
    </>
  );
};
