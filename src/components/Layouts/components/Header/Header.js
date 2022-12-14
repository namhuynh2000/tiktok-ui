// import classNames from "classnames/bind";
// import styles from './Header.module.scss'
import { useEffect, useState } from 'react';
import './Header.scss'
import * as images from '~/assets/images/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../AccountItem/AccountItem';
import Menu from '~/components/Popper/Menu/Menu';

// const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([12, 54, 54, 231])
        }, 0)
    }, []);

    return (<header className='header-wrapper'>
        <div className="inner">
            <div className="logo">
                <img src={images.logo} alt="logoTiktok" />
            </div>
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className="search-result" tabIndex="-1" {...attrs}>
                        <PopperWrapper >
                            <h4 className='search-title'>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
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
            </Tippy>

            <div className="actions">
                <Button text>Upload</Button>
                <Button primary>Log in</Button>

                <Menu items={MENU_ITEMS}>
                    <button className="more-btn">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
            </div>
        </div>
    </header>);
}

export default Header;