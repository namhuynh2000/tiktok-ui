import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./AccountItem.scss"

function AccountItem() {
    return (
        <div className="account-wrapper">
            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/en/e/e2/IMG_Academy_Logo.svg" alt="Hoang_Thuy_Linh" />
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