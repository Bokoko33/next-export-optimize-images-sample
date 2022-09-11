import Head from 'next/head';
import Image from 'next/image';
import styles from '~/styles/pages/PageIndex.module.scss';
import { SampleComponent } from '~/components/SampleComponent';

export default function Index() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Next.js Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>TOPページ</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <SampleComponent text="サンプル" />
    </div>
  );
}