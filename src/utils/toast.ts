import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface toastProps {
  title: string,
}
export const Notify = ({ title }: toastProps) => {
  return toast.success(title, {
    position: toast.POSITION.TOP_CENTER
  });
}