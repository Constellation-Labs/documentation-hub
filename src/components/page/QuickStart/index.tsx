import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function QuickStart(props) {
    return (
        <div {...props} className={clsx(props.className, 'app-wizard', styles.appWizard)}>
            <div className="heading-group">
                <header>Try our Quick Start Guide</header>
                <p>Ready to start building? Jump ahead to our Quick Start Guide.</p>
            </div>
            <div>
                <a href="/sdk/guides/quick-start" className="wizard-button">
                    Get started
                </a>
            </div>
        </div>
    );
}