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
          <ul value="" className={classes.categories}>
            <li className={classes.speech}>
              <a data-id="speech" onClick={clickHandler}>
                {' '}
                Speech Therapy
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
            <li>
              <a data-id="police" value="Police" onClick={clickHandler}>
                {' '}
                Police
              </a>
            </li>
            <li>
              <a data-id="bridal" value="Bridal" onClick={clickHandler}>
                {' '}
                Bridal
              </a>
            </li>
            <li className={classes.speech}>
              <a data-id="ota" value="OTA" onClick={clickHandler}>
                {' '}
                Occupational Therapy
              </a>
            </li>
            <li className={classes.speech}>
              <a data-id="pta" value="OTA" onClick={clickHandler}>
                {' '}
                Physical Therapy
              </a>
            </li>
            <li className={classes.speech}>
              <a data-id="fire" value="Fire" onClick={clickHandler}>
                {' '}
                Fire Fighter
              </a>
            </li>
            <li className={classes.speech}>
              <a data-id="emt" value="Emt" onClick={clickHandler}>
                {' '}
                EMT/EMS/Paramedic
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ul;
