import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, Icon }) {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <div className={cx('menu-item', { active: isActive })}>
                <Icon bold={isActive} />
                <span className={cx('title')}>{title}</span>
                </div>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    Icon: PropTypes.func,
};

export default MenuItem;
