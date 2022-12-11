import React from 'react';
import './TabButton.scss'
import {useSelector} from "react-redux";

const TabButton = ({tabName, feedName, setFeedName, setTagName, setPageNumber, setOffset, tabText}) => {
  let user = useSelector((state) => state.users.user);

  return (
    <button
      className={`feeds__tabs-button ${tabName} hoverLink ${feedName === tabName ? 'active' : ''}`}
      onClick={() => {
        setTagName && setTagName('')
        setFeedName(tabName);
        setPageNumber(1);
        setOffset && setOffset(0);
      }}
    >
      {user?.username === tabName ? 'My' :  tabName  } {tabText}
    </button>
  );
};

export default TabButton;