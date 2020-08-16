import React from 'react';
import './SideBar.scss';

export const SideBar = () => {
    return (
        <div className="SideBar">
            <img src="https://picsum.photos/200/200" />

            <ul>
                <li>
                    <i class="far fa-comment-alt"></i>
                </li>
                <li>
                    <i class="fas fa-user-friends"></i>
                </li>
                <li>
                    <i class="fas fa-clipboard"></i>
                </li>
            </ul>
        </div>
    );
};
