import { useSignupMutation } from '@animal-sitting/rtk';

export type SignupHook = {
  loginClicked: () => void;
};

export const useSignup = (): SignupHook => {
  const [signUpApi] = useSignupMutation();

  const loginClicked: SignupHook['loginClicked'] = () => {
    signUpApi({ userName: 'Aryansh', password: 'Aryansh1' });
  };

  return {
    loginClicked,
  };
};
