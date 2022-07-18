import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import Aos from 'aos';
import classes from './Vlog.module.css';
import 'aos/dist/aos.css';
import BlockContent from '@sanity/block-content-to-react';
const Vlog = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={classes.box}>
      <ReactPlayer width={'80%'} height={'50%'} url={props.url} />

      <img className={classes.img} src={props.url} />
      <h3>{props.title}</h3>
      <p className={classes.p} data-aos="fade-right">
        <BlockContent
          blocks={props.description}
          projectId="o0zrjubv"
          dataset="production"
        />
      </p>
      <span>05/04/2022</span>
    </div>
  );
};

export default Vlog;
