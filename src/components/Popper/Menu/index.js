import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            placement="bottom-end"
            interactive={true} // Cho phép tương tác được
            delay={[0, 500]}
            render={(attrs) => (
                // mặc định giúp hiển thị danh sách
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
