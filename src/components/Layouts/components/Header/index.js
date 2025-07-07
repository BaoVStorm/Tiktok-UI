import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const sx = classNames.bind(styles);

function Header() {
    return (
        <header className={sx('wrapper')}>
            <div className={sx('inner')}></div>
        </header>
    );
}

export default Header;
