import React from "react";
import "./AccountContainer.css";

const AccountContainer: React.FC = () => {
  return (
    <div className="account">
      <div className="header-container">
        <img
          src="https://source.unsplash.com/Qp7Z8qakD6w"
          alt=""
          className="header-image"
        />
        <div className="header">
          <h1 className="main-heading">Yes Sir</h1>
          <span className="tag">Traveller</span>
          <span className="tag">Photograper</span>
          <div className="stats">
            <span className="stat-module">
              Article <span className="stat-number">56</span>
            </span>
            <span className="stat-module">
              Picture <span className="stat-number">29</span>
            </span>
            <span className="stat-module">
              Reviews <span className="stat-number">11</span>
            </span>
          </div>
        </div>
      </div>

      <div className="overlay-header"></div>

      <div className="body">
        <img
          src="https://source.unsplash.com/85R6lhqmb4k"
          alt="profile"
          className="body-image"
        />
        <span className="body-stats">
          Followers <span>3.5k</span>
        </span>
        <span className="body-stats">
          Following <span>1.9k</span>
        </span>
        <div className="u-clearfix"></div>
        <div className="body-info">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            atque odio, ipsam quibusdam ducimus neque harum voluptatem in
          </p>
        </div>
        <div className="card u-clearfix">
          <span className="card-heading">Articles</span>
          <ul className="card-list">
            <li>
              <img src="https://source.unsplash.com/QjdKoOKl4PM" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/lwGe7vHZ_OY" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/k8qZy4EcUnw" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/lxHbhkTw114" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/QXNY6SUTr80" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/ZVmKivW07EA" alt="" />
            </li>
          </ul>
        </div>
        <div className="card u-clearfix">
          <span className="card-heading">Picture</span>
          <ul className="card-list">
            <li>
              <img src="https://source.unsplash.com/ZVmKivW07EA" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/lxHbhkTw114" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/QXNY6SUTr80" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/QjdKoOKl4PM" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/lwGe7vHZ_OY" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/k8qZy4EcUnw" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountContainer;
