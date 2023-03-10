import React from 'react';
import Header from '~/components/Layouts/components/Header';

const HeaderOnlyLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnlyLayout;
