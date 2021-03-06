import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

// Define tipagem de objetos
interface PageHeaderProps {
    title: string,
    subTitle?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({title, subTitle, children}) => (
    <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="header-content">
            <strong>{title}</strong>
            { subTitle && <p>{subTitle}</p> }
            

            {children}
        </div>
    </header>
);

export default PageHeader;