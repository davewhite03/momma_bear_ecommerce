import React, { useState, useEffect } from 'react';
import classes from './DropDown.module.css';
const ul = (props) => {
  const clickHandler = (e) => {
    props.onClick(e.currentTarget.dataset.id);
  };

  return (
    <div>
      <ul className={classes.selector}>
        <li>
          <a className={classes.here}> Here</a>
          <ul value="Shirt" className={classes.categories}>
            <li>
              <a data-id="Shirt" value="Shirt" onClick={clickHandler}>
                {' '}
                Shirt
              </a>
            </li>
            <li>
              {' '}
              <a data-id="Pants" value="Shirt" onClick={clickHandler}>
                {' '}
                Pants
              </a>
            </li>
            <li>
              <a data-id="Cups" value="Shirt" onClick={clickHandler}>
                {' '}
                Cups
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ul;
