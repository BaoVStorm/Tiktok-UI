import classNames from 'classnames/bind';

import style from './Sidebar.module.scss';
import config from '~/config';
import { Menu, MenuItem } from '~/layouts/components/Sidebar/Menu';
import { HomeIcon, FollowingIcon, LiveIcon } from '~/components/icon';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title={'For You'} to={config.routes.home} Icon={HomeIcon} />
                <MenuItem title={'Following'} to={config.routes.following} Icon={FollowingIcon} />
                <MenuItem title={'LIVE'} to={config.routes.live} Icon={LiveIcon} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
