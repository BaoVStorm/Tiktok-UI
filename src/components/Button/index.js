import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    typeButton,
    rounded,
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

export default Button;
