'use client';

import Head from 'next/head';
import ImageUploader from './components/ImageUploader';

export default function Home() {
  return (
    <>
      <Head>
        <title>Detección de Melanoma</title>
        <meta name="description" content="Clasificador de imágenes de piel" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-6">Detección de Melanoma</h1>
        <ImageUploader />
      </main>
    </>
  );
}
