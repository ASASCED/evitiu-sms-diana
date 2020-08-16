import React from 'react';
import { SideBar } from '../SideBar/SideBar';
import { UserInfo } from '../UserInfo/UserInfo';
// TODO: El reto es lograr integrar el componente de UserChat en el Dashboard para completar el sistema.
// import { UserChat } from '../UserChat/UserChat';
import { Contacts } from '../Contacts/Contacts';

import './Dashboard.scss';

export const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="components side-bar">
                <SideBar />
            </div>
            <div className="components user-info">
                <UserInfo />
            </div>
            <div className="components user-chat">userchat</div>
            <div className="components contacts">
                <Contacts />
            </div>
        </div>
    );
};
