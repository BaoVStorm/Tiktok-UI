import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, props }) {
    return (
        <Button className={cx('menu-item')} iconLeft={data.icon} to={data.to} {...props}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
