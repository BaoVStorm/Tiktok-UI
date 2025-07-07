import classNames from 'classnames/bind';

import style from './Sidebar.module.scss';

const cx = classNames.bind(style);

function Sidebar() {
    return <aside className={cx('wrapper')}>Sidebar</aside>;
}

export default Sidebar;
