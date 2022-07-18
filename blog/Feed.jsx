import React, { useEffect } from 'react';
import { urlFor } from '../lib/client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import classes from './Feed.module.css';
import Vlog from './Vlog';

const Feed = ({ post }) => {
  const vlogs = [
    {
      video: 'https://www.youtube.com/watch?v=s64vRtrPkkg',
      title: 'Fight Highlights',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Nisi vitae suscipit tellus mauris a. Vitae congue mauris rhoncus aenean. Habitasse platea dictumst quisque sagittis purus sit amet. Enim tortor at auctor urna.!',
    },
    {
      video: 'https://www.youtube.com/watch?v=5wZ_elEhxt8',
      title: 'Full Fight Highlight!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Nisi vitae suscipit tellus mauris a. Vitae congue mauris rhoncus aenean. Habitasse platea dictumst quisque sagittis purus sit amet. Enim tortor at auctor urna.',
    },

    {
      video: 'https://www.youtube.com/watch?v=ajdEZ7L6Tko',
      title: 'Post Fight Interview',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Nisi vitae suscipit tellus mauris a. Vitae congue mauris rhoncus aenean. Habitasse platea dictumst quisque sagittis purus sit amet. Enim tortor at auctor urna.!',
    },
    {
      video: 'https://www.youtube.com/watch?v=nKD97d9vdFU',
      title: 'Post Fight Scrum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Nisi vitae suscipit tellus mauris a. Vitae congue mauris rhoncus aenean. Habitasse platea dictumst quisque sagittis purus sit amet. Enim tortor at auctor urna.',
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const posted = post.map((posts) => (
    <div data-aos="fade-right" className={classes.box}>
      <Vlog
        url={urlFor(posts.mainImage)}
        description={posts.body}
        title={posts.title}
      />
    </div>
  ));
  return <div className={classes.feed}>{posted}</div>;
};

export default Feed;
