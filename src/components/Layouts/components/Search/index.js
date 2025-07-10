import { useState, useRef } from 'react';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([1, 2, 3]);
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef();

    const handleClose = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive={true} // Cho phép tương tác được
            visible={showResult && searchResult.length > 0} // Cho phép hiển thị hay không
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
            onClickOutside={handleHideResult}
            appendTo={() => document.querySelector('.tippy-wrapper')}
        >
            <div className="tippy-wrapper">
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Search account and videos"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        spellCheck="false"
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && (
                        <button className={cx('close')} onClick={handleClose}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
