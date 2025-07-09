import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// icon fontawesome
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import { logo } from '~/assets/images/index';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([1, 2, 3]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="Tiktok-Logo" />
                </div>

                <Tippy
                    interactive={true} // Cho phép tương tác được
                    visible={searchResult.length > 0} // Cho phép hiển thị hay không
                    render={(attrs) => (
                        // mặc định giúp hiển thị danh sách
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                    appendTo={() => document.querySelector('.tippy-wrapper')}
                >
                    <div className="tippy-wrapper">
                        <div className={cx('search')}>
                            <input placeholder="Search account and videos" spellCheck="false" />

                            <button className={cx('close')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>

                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                            {/* <Tippy content="Tìm kiếm" placement="right">
                                <button className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </Tippy> */}

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button typeButton="text">Upload</Button>
                    <Button typeButton="primary" iconRight={<FontAwesomeIcon icon={faSignIn} />}>
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
