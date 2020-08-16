import React from 'react';
import './UserInfo.scss';

export const UserInfo = () => {
    return (
        <div className="UserInfo">
            <img src="https://picsum.photos/200/200" />

            <div className="info">
                <h3>Wade Warren</h3>
                <label>+525620192588</label>
                <span>jesus_heaven117@outlook.com</span>
            </div>

            <div className="tags">
                <h3>Tags</h3>

                <ul>
                    <li>
                        <i class="fas fa-tag"></i> Follow
                    </li>
                    <li>
                        <i class="fas fa-tag"></i> Subscribe
                    </li>
                    <li>
                        <i class="fas fa-tag"></i> Sold
                    </li>
                    <li>
                        <i class="fas fa-tag"></i> New Customer
                    </li>
                </ul>
            </div>

            <div className="media">
                <h3>Media</h3>

                <div className="files">
                    <img src="https://picsum.photos/200/200" />
                    <img src="https://picsum.photos/200/200" />
                    <img src="https://picsum.photos/200/200" />
                    <img src="https://picsum.photos/200/200" />
                    <img src="https://picsum.photos/200/200" />
                    <img src="https://picsum.photos/200/200" />
                    <img src="https://picsum.photos/200/200" />
                    <img src="https://picsum.photos/200/200" />
                    <img src="https://picsum.photos/200/200" />
                </div>
            </div>
        </div>
    );
};
