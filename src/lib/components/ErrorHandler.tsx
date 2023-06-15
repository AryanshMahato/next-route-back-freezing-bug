import { type FC, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@animal-sitting/rtk';
import { adminCommonActions } from '@animal-sitting/rtk';
import { toast } from 'react-toastify';

type Props = {
  children: ReactNode;
};

export const ErrorHandler: FC<Props> = ({ children }) => {
  const error = useSelector((state: RootState) => state.adminCommon.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      console.log('caught error');
      dispatch(adminCommonActions.removeError());
    }
  }, [error, dispatch]);

  return <>{children}</>;
};
