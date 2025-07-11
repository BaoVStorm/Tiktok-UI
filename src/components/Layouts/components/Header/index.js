import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// icon fontawesome
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faMessage,
    faCoins,
    faUser,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import { logo } from '~/assets/images/index';
import AccountItem from '~/components/AccountItem';
import { UploadIcon } from '~/components/icon';
import Image from '~/components/image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/viewProfile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

const currentUser = true;

function Header() {
    // handle MenuChange ()
    const handleMenuChange = (item) => {
        // console.log(item);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={logo} alt="Tiktok-Logo" />
                </Link>

                <Search />

                {
                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button typeButton="text">Upload</Button>
                                <Button typeButton="primary" iconRight={<FontAwesomeIcon icon={faSignIn} />}>
                                    Log in
                                </Button>
                            </>
                        )}

                        <Menu
                            items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS}
                            hideOnClick={false}
                            onChange={handleMenuChange}
                        >
                            {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/5c7f92798e3944ca5f28263549d12b27~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=258d647b&x-expires=1752238800&x-signature=EmhtDnQC8NcMXwuvkVZqxik2%2FZg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                                    alt="VStorm"
                                    // fallback="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/3dc06a1b77c02469857b4f3c9549579b~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=e11f0d87&x-expires=1752292800&x-signature=YGEXg8ZquomMYVuSwC%2BaMP%2FpVx8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                }
            </div>
        </header>
    );
}

export default Header;
