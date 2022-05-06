import classnames from 'classnames';

import styles from './button.module.scss';

interface ButtonProps
{
    name: string;
    type?: string;
    link?: boolean;
}

const Button = (props: ButtonProps) =>
{
    return (
        !props.link
        ?
            (
                <button className={classnames(styles.button, [props.type === 'Primary' ? styles.buttonPrimary : styles.buttonSecondary])}>
                    {props.name}
                </button>
            )
        :
            (
                <a className={classnames(styles.button, [props.type === 'Primary' ? styles.buttonPrimary : styles.buttonSecondary])}>
                    {props.name}
                </a>
            )
    );
};

export default Button;
