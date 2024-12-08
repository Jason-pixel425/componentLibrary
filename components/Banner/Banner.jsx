import classnames from 'classnames'
import { FcApproval, FcHighPriority, FcInfo } from "react-icons/fc";
import { IoWarningOutline } from "react-icons/io5";


export default function Banner({type='neutral', messageText='Update available', messageDesc = ''}) {
    const typeClass = type;
    const classes = classnames('banner', typeClass);

    function getIcon(){
        switch(type){
            case 'success':
                return <FcApproval />
            case 'warning':
                return <IoWarningOutline style={{color: '#FBBF24'}}/>
            case 'error':
                return <FcHighPriority />
            case 'neutral':
                return <FcInfo />
            default:
                return <FcInfo />
        }
    }

    return (
        <div>
            <span>{getIcon()} {messageText}</span>
        </div>
    )
}