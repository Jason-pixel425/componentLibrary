import classnames from 'classnames'
import { FcApproval, FcHighPriority, FcInfo } from "react-icons/fc";
import { IoWarningOutline } from "react-icons/io5";


export default function Banner({type='info', messageText='Update available', messageDesc = ''}) {
    const typeClass = type;
    const classes = classnames('banner', `banner-${typeClass}`);

    function getIcon(){
        switch(type){
            case 'success':
                return <FcApproval />
            case 'warning':
                return <IoWarningOutline style={{color: '#FBBF24'}}/>
            case 'error':
                return <FcHighPriority />
            case 'info':
                return <FcInfo />
            default:
                return <FcInfo />
        }
    }

    return (
        <div className={classes}>
            <p className='banner-icon'>{getIcon()}</p>
            <div className='banner-message-container'>
                <p className={`banner-message banner-message-${type}`}>{messageText}</p>
                {messageDesc ? <p className='banner-message-desc'>{messageDesc}</p> : null}
            </div>
        </div>
    )
}