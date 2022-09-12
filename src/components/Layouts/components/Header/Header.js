// import classNames from "classnames/bind";
// import styles from './Header.module.scss'
import { useEffect, useState } from 'react';
import './Header.scss'
import * as images from '~/assets/images/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '../AccountItem/AccountItem';

// const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
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
            </div>
        </div>
    </header>);
}

export default Header;