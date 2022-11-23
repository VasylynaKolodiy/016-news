import React from 'react';
import './BreadCrumbs.scss'
import {Link, useLocation} from "react-router-dom";

const BreadCrumbs = ({name}) => {
  const location = useLocation();
  const data = location.pathname.split('/').slice(1);

  return (
    <section className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__first-item">
          <Link className="breadcrumbs__first-item-link hoverLink" to='/'>Home</Link>
        </li>
        {data.map((item, i) =>
          <li className="breadcrumbs__item" key={i}>
            {i < (data.length - 1) ?
              <Link className="breadcrumbs__item-link hoverLink" to={`/${item}`}>
                {(item.charAt(0).toUpperCase() + item.slice(1)).replace('-', ' ')}
              </Link>
              : data.length === 2
                ? <span className="breadcrumbs__item-link">
                {name}
              </span>
                : <span className="breadcrumbs__item-link">
                  {(item.charAt(0).toUpperCase() + item.slice(1)).replace(/-/g, ' ')}
              </span>
            }
          </li>
        )}
      </ul>
    </section>
  )
}


export default BreadCrumbs;