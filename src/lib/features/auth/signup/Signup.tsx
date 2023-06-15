import { type FC } from 'react';
import { useSignup } from './Signup.hook';

export const Signup: FC = () => {
  const { loginClicked } = useSignup();

  return (
    <>
      <button onClick={loginClicked}>Login</button>
    </>
  );
};
