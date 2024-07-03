import React from 'react';
import { NavLink } from 'react-router-dom';

const TestPage = () => {
    return (
        <div>
            <div className="direct-chat-contacts">
            <ul className="contacts-list">
                <li>
                <a href="#">
                    <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Avatar" />
                    <div className="contacts-list-info">
                    <span className="contacts-list-name">
                        Count Dracula
                        <small className="contacts-list-date float-right">2/28/2015</small>
                    </span>
                    <span className="contacts-list-msg">How have you been? I was...</span>
                    </div>
                    {/* /.contacts-list-info */}
                </a>
                </li>
                {/* End Contact Item */}
                <li>
                <a href="#">
                    <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Avatar" />
                    <div className="contacts-list-info">
                    <span className="contacts-list-name">
                        Sarah Doe
                        <small className="contacts-list-date float-right">2/23/2015</small>
                    </span>
                    <span className="contacts-list-msg">I will be waiting for...</span>
                    </div>
                    {/* /.contacts-list-info */}
                </a>
                </li>
                {/* End Contact Item */}
                <li>
                <a href="#">
                    <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Avatar" />
                    <div className="contacts-list-info">
                    <span className="contacts-list-name">
                        Nadia Jolie
                        <small className="contacts-list-date float-right">2/20/2015</small>
                    </span>
                    <span className="contacts-list-msg">I'll call you back at...</span>
                    </div>
                    {/* /.contacts-list-info */}
                </a>
                </li>
                {/* End Contact Item */}
                <li>
                <a href="#">
                    <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Avatar" />
                    <div className="contacts-list-info">
                    <span className="contacts-list-name">
                        Nora S. Vans
                        <small className="contacts-list-date float-right">2/10/2015</small>
                    </span>
                    <span className="contacts-list-msg">Where is your new...</span>
                    </div>
                    {/* /.contacts-list-info */}
                </a>
                </li>
                {/* End Contact Item */}</ul>
            </div>

        </div>
    );
};

export default TestPage;