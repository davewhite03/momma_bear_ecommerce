import React from 'react';
import { Toaster } from 'react-hot-toast';
import { StateContext } from '../context/StateContext';
import { Layout, Navbar } from '../components';
import classes from './App.module.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Navbar />
      <div className={classes.parallax}> </div>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
