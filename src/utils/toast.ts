import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface toastProps {
  title: string;
  type?: string;
}
toast.configure();

export const toastTypes = toast.TYPE;

export const Notify = ({ title, type }: toastProps): any => {
  if (type === toast.TYPE.SUCCESS)
    return toast.success(title, {
      position: toast.POSITION.TOP_RIGHT,
    });
  if (type === toast.TYPE.WARNING)
    return toast.warning(title, {
      position: toast.POSITION.TOP_RIGHT,
    });
  if (type === toast.TYPE.INFO)
    return toast.info(title, {
      position: toast.POSITION.TOP_RIGHT,
    });
  if (type === toast.TYPE.ERROR)
    return toast.error(title, {
      position: toast.POSITION.TOP_RIGHT,
    });
  return false;
};
