import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

function MenuItem({
  title,
  subtitle,
  imageUrl,
  size,
  linkUrl,
  match,
  history,
}) {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`${size} menu-item`}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}
export default withRouter(MenuItem);
