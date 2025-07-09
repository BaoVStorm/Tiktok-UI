import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            let props = {};

            if (item.children) {
                props.onClick = () => {
                    // console.log('Change Menu');
                    setHistory((prev) => [...prev, item.children]);
                };
            } else {
                props.onClick = () => onChange(item);
            }

            return <MenuItem key={index} props={props} data={item} />;
        });
    };

    return (
        <Tippy
            placement="bottom-end"
            interactive={true} // Cho phép tương tác được
            delay={[0, 500]}
            render={(attrs) => (
                // mặc định giúp hiển thị danh sách
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <HeaderMenu
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.splice(prev.length - 1, 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
