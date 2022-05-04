import React from 'react';
import classnames from 'classnames';

import styles from './main.module.scss';

interface MainProps
{
    children: React.ReactNode;
}

const Main = ({ children }: MainProps) =>
{
    return (
        <main className={classnames([styles.main, 'container'])}>
            {children}
        </main>
    );
};

export default Main;
