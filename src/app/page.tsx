"use client";

import Head from "next/head";
import ImageUploader from "@/app/components/ImageUploader";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  const year = new Date().getFullYear(); // ✅ se calcula 1 sola vez, mismo en SSR y cliente

  return (
    <>
      <Head>
        <title>Soporte al Diagnóstico de Melanoma</title>
        <meta 
          name="description" 
          content="Herramienta de apoyo para médicos en la evaluación de lesiones cutáneas" 
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Fondo principal */}
      <main className="h-screen flex items-center justify-center bg-gradient-to-br from-[#7c83fd] via-[#a5b4fc] to-[#dcd6f7] p-4 overflow-hidden">
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-blue-100 transition-all duration-300 mt-16">
          
          {/* Encabezado */}
          <header className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-800">
              Sistema de Apoyo al Diagnóstico
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2 leading-snug max-w-lg mx-auto">
              Esta herramienta está diseñada exclusivamente para{" "}
              <strong>médicos y profesionales de la salud</strong>.  
              Permite analizar imágenes dermatoscópicas y ofrecer una orientación preliminar 
              en la detección de <strong>melanoma</strong>.
            </p>
          </header>

          {/* Área de carga */}
          <section className="bg-gradient-to-br from-blue-50/70 to-teal-50/70 rounded-xl p-4 sm:p-5 shadow-inner">
            <ImageUploader compact maxHeight={320} />
          </section>

          {/* Nota para médicos */}
          <section className="mt-4 text-center text-xs sm:text-sm text-gray-700">
            <p>
              ⚠️ Este sistema es un <strong>apoyo complementario</strong> y no reemplaza 
              la evaluación clínica ni el juicio médico especializado.
            </p>
          </section>

          {/* Pie */}
          <footer className="mt-5 text-center text-xs sm:text-sm text-gray-600 leading-tight">
            © {year} Sistema de apoyo al diagnóstico. <br />
            Los resultados son orientativos y deben integrarse con la historia clínica y examen físico.
          </footer>
        </div>
      </main>
    </>
  );
}
