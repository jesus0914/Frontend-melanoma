"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { FaStethoscope } from 'react-icons/fa';
import ImageUploader from '@/app/components/ImageUploader';

export default function Home() {
  const [year, setYear] = useState<string>('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <>
      <Head>
        <title>Detección de Melanoma</title>
        <meta
          name="description"
          content="Clasificador de imágenes de piel"
        />
      </Head>

      {/* Fondo lavanda grisáceo → azul lavanda → azul violáceo */}
      <main className="h-screen flex items-center justify-center bg-gradient-to-br from-[#7c83fd] via-[#a5b4fc] to-[#dcd6f7] p-4 overflow-hidden">
        {/* Contenedor principal con más transparencia */}
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-blue-100 transition-all duration-300 overflow-hidden">
          
          {/* Encabezado */}
          <header className="text-center mb-6">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-3 rounded-full shadow-md">
                <FaStethoscope className="text-blue-600 text-3xl sm:text-4xl" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-800">
              Detección de Melanoma
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2 leading-snug max-w-lg mx-auto">
              Sube una imagen de tu piel para recibir una orientación preliminar.
            </p>
          </header>

          {/* Área de carga */}
          <section className="bg-gradient-to-br from-blue-50/70 to-teal-50/70 rounded-xl p-4 sm:p-5 shadow-inner">
            <ImageUploader compact maxHeight={320} />
          </section>

          {/* Pie */}
          <footer className="mt-5 text-center text-xs sm:text-sm text-gray-600 leading-tight">
            © {year} Sistema de apoyo al diagnóstico. <br />
            Este servicio no sustituye la consulta médica.
          </footer>

        </div>
      </main>
    </>
  );
}
