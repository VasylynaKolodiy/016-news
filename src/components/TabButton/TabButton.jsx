import React from 'react';
import './TabButton.scss'

const TabButton = ({tabName, feedName, setFeedName, setTagName, setPageNumber, tabText}) => {
  return (
    <button
      className={`feeds__tabs-button ${tabName} hoverLink ${feedName === tabName ? 'active' : ''}`}
      onClick={() => {
        setTagName && setTagName('')
        setFeedName(tabName);
        setPageNumber(1);
      }}
    >
      {tabName} {tabText}
    </button>
  );
};

export default TabButton;