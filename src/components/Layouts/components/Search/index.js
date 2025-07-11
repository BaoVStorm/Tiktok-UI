import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import * as request from '~/utils/request';
import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        // ---- way 1: fetch
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //     .then((response) => response.json())
        //     .then((response) => {
        //         // console.log(JSON.stringify(response));
        //         setSearchResult(response.data);
        //         setLoading(false);
        //     })
        //     .catch((error) => {
        //         // console.log(error);
        //         setLoading(false);
        //     });

        // ---- way 2: request
        // request
        //     .get(`users/search`, {
        //         params: {
        //             q: debounced,
        //             type: 'less',
        //         },
        //     })
        //     .then((response) => {
        //         // console.log(response);

        //         setSearchResult(response.data);
        //         setLoading(false);
        //     })
        //     .catch((error) => {
        //         // console.log(error);
        //         setLoading(false);
        //     });

        // ---- way 3: async function
        // const fetchApi = async () => {
        //     try {
        //         const res = await request.get(`users/search`, {
        //             params: {
        //                 q: debounced,
        //                 type: 'less',
        //             },
        //         });

        //         setSearchResult(res.data);
        //         setLoading(false);
        //     } catch (error) {
        //         setLoading(false);
        //     }
        // };
        // fetchApi();

        // ---- way 4: import
        const fetchApi = async () => {
            setLoading(true);

            const res = await searchServices.search(debounced, 'less');
            setSearchResult(res);

            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    const handleClose = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const value = e.target.value;

        if (!value.startsWith(' ')) setSearchValue(value);
    };

    const handleSubmit = () => {};

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
                        onChange={handleChange}
                        spellCheck="false"
                        onFocus={() => setShowResult(true)}
                    />

                    {!loading && !!searchValue && (
                        <button className={cx('close')} onClick={handleClose}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
