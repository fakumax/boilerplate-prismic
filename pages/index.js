import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { createClient } from '../prismicio';
import { components } from '../slices/';

const Index = ({ page }) => {
  return (
    <>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
};

export default Index;

// export async function getStaticProps({ locale, previewData }) {
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('page', 'home');
  // const navigation = await client.getSingle('navigation', { lang: locale });
  // const settings = await client.getSingle('settings', { lang: locale });

  return {
    props: {
      page,
      // navigation,
      // settings,
    },
  };
}
