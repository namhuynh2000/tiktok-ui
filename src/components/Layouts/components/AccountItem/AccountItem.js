import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./AccountItem.scss"

function AccountItem() {
    return (
        <div className="account-wrapper">
            <img className="avatar" src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/fbc76ba07c81b5186bffb82315735b70~c5_300x300.webp?x-expires=1662753600&x-signature=QrBoRSxxXmYr9va%2BHNOEUwF8aXs%3D" alt="Hoang_Thuy_Linh" />
            <div className="info">
                <h4 className="name">
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className='check' icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className="username">nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;