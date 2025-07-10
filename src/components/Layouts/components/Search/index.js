import { useState, useRef, useEffect } from 'react';
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
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        const encodeSearch = encodeURIComponent(searchValue);

        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeSearch}&type=less`)
            .then((response) => response.json())
            .then((response) => {
                // console.log(JSON.stringify(response));
                setSearchResult(response.data);
                setLoading(false);
            })
            .catch((error) => {
                // console.log(error);
                setLoading(false);
            });
    }, [searchValue]);

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

                        {searchResult.map((res) => (
                            <AccountItem key={res.id} data={res} />
                        ))}
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

                    {!loading && !!searchValue && (
                        <button className={cx('close')} onClick={handleClose}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
