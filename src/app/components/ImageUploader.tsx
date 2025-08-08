'use client';

import { useState, ChangeEvent } from "react";

export default function ImageUploader() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    setLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data.prediccion || data.error);
    } catch (error) {
      setResult("Error al conectarse con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
  };

  const renderRecommendation = () => {
    if (!result) return null;

    const lowerResult = result.toLowerCase();

    if (lowerResult === "maligno") {
      return (
        <div className="mt-2 text-red-700 bg-red-100 p-4 rounded">
          <h2 className="font-bold">Recomendación:</h2>
          <p>
            La lesión tiene características malignas. Se recomienda agendar una cita médica con un dermatólogo lo antes posible para evaluación y posible biopsia.
          </p>
        </div>
      );
    }

    if (lowerResult === "benigno") {
      return (
        <div className="mt-2 text-green-700 bg-green-100 p-4 rounded">
          <h2 className="font-bold">Recomendación:</h2>
          <p>
            La lesión es de tipo benigno. Se sugiere hacer seguimiento periódico y usar protector solar para evitar futuras alteraciones en la piel.
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-center">Sube una imagen para analizar</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 w-full file:bg-blue-600 file:text-white file:rounded file:px-4 file:py-2 file:border-none"
      />

      {preview && (
        <div className="mb-4">
          <img
            src={preview}
            alt="Vista previa"
            className="rounded-lg w-full object-contain"
          />
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={handleUpload}
          disabled={!image || loading}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          {loading ? "Analizando..." : "Subir imagen"}
        </button>
        <button
          onClick={handleReset}
          className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded transition"
        >
          Limpiar
        </button>
      </div>

      {result && (
        <div className="mt-6 text-center">
          <p className="text-lg font-bold">
            Resultado:{" "}
            <span
              className={
                result.toLowerCase() === "maligno"
                  ? "text-red-600"
                  : "text-green-600"
              }
            >
              {result}
            </span>
          </p>
          {renderRecommendation()}
        </div>
      )}
    </div>
  );
}
