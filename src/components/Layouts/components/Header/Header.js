// import classNames from "classnames/bind";
// import styles from './Header.module.scss'
import './Header.scss'
import * as images from '~/assets/images/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// const cx = classNames.bind(styles)

function Header() {
    return (<header className='header-wrapper'>
        <div className="inner">
            <div className="logo">
                <img src={images.logo} alt="logoTiktok" />
            </div>
            <div className="search">
                <input type="text" placeholder='Search accounts and videos' spellCheck={false} />
                <button className='clear'>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className='loading' icon={faSpinner} />

                <span className='split'></span>

                <button className='search-btn'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className="actions"></div>
        </div>
    </header>);
}

export default Header;