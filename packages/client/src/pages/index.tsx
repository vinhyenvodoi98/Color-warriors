import * as React from 'react';

import Layout from '@/components/layout/Layout';

import PageBoard from '@/components/PageBoard';
import { Metadata } from 'next';

export default function HomePage() {
  return (
    <Layout>
      <PageBoard />
    </Layout>
  );
}
