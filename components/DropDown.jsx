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
          <ul value="" className={classes.categories}>
            <li>
              <a data-id="speech" onClick={clickHandler}>
                {' '}
                Speech_Therapy
              </a>
            </li>
            <li>
              {' '}
              <a data-id="dance" onClick={clickHandler}>
                {' '}
                Dance
              </a>
            </li>
            <li>
              <a data-id="nurse" value="Shirt" onClick={clickHandler}>
                {' '}
                Nurse
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ul;
