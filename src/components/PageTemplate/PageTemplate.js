import React from 'react';
import './PageTemplate.scss';

const PageTemplate = ({ children }) => (
    <div className={'page-template'}>
        <h1>일정 관리</h1>
        <div className={'content'}>
            {children}
        </div>
    </div>
)

export default PageTemplate;