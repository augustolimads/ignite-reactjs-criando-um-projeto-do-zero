import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { AppProps } from 'next/app';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../../prismicio.js';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href} passHref>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
