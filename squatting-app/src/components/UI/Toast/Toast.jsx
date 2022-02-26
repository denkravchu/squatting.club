import './Toast.scss'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CloseButton = ({ closeToast }) => (
    <div onClick={closeToast} className="toast-close">
        Close
    </div>
  );

const SuccessMessage = ({ closeToast, toastProps }) => (
    <div>
        <p className='toast-message'>Success!</p>
        <p className='toast-subtitle'>Mint 3 NFT Success</p>
    </div>
)

const toastSuccess = () => toast.success(<SuccessMessage/>, {
    className: 'toast-wrapper',
})

export { CloseButton, toastSuccess }