import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { logo } from '~/assets/images/index';

const sx = classNames.bind(styles);

function Header() {
    return (
        <header className={sx('wrapper')}>
            <div className={sx('inner')}>
                <div className={sx('logo')}>
                    <img src={logo} alt="Tiktok-Logo" />
                </div>
            </div>
        </header>
    );
}

export default Header;
