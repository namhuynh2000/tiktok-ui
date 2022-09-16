import './Button.scss';
import { Link } from 'react-router-dom'

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    };

    //Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    let classes = 'btn-wrapper';

    if (className) {
        classes = `${classes} ${className}`;
    }
    if (primary) {
        classes = `${classes} primary`;
    }
    if (outline) {
        classes = `${classes} outline`;
    }
    if (text) {
        classes = `${classes} text`;
    }
    if (disabled) {
        classes = `${classes} disabled`;
    }
    if (rounded) {
        classes = `${classes} rounded`;
    }

    if (small) {
        classes = `${classes} small`;
    }
    if (large) {
        classes = `${classes} large`;
    }


    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className='icon'>{leftIcon}</span>}
            <span className='title'>{children}</span>
            {rightIcon && <span className='icon'>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;