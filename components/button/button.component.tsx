import classnames from 'classnames';

import styles from './button.module.scss';

interface ButtonProps
{
    name: string;
    type?: string;
}

const Button = (props: ButtonProps) =>
{
    return (
        <button
            className={classnames(styles.button, [props.type === 'Primary' ? styles.buttonPrimary : styles.buttonSecondary])}>
            {props.name}
        </button>
    );
};

export default Button;
