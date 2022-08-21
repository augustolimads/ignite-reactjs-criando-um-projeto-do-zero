import { GetStaticProps } from 'next';
import { createClient } from '../../prismicio.js';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({postsResponse}) {
  return <div>oi</div>;
}

export const getStaticProps = async () => {
  const client = createClient();
  const postsResponse = await client.getAllByType('posts');

  return {
    props: {
      postsResponse,
    },
  };
};
