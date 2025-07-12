import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    typeButton,
    rounded = false,
    disable = false,
    small = false,
    large = false,
    iconLeft,
    iconRight,
    className,
    children,
    ...pastProps
}) {
    let Comp = 'button';

    let props = {
        onClick,
        ...pastProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    }
    if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Disable (Remove event listener)
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] == 'function') {
                delete props[key];
            }
        });
    }

    // typeButton: {'primary', 'outline'}
    const classes = cx(
        'wrapper',
        {
            [typeButton]: typeButton,
            disable,
            small,
            large,
            rounded,
        },
        className,
    );

    return (
        <Comp className={classes} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    typeButton: PropTypes.string,
    onClick: PropTypes.func,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Button;
