"use client";

import { useState, ChangeEvent } from 'react';
import { FaCloudUploadAlt, FaLightbulb, FaLeaf } from 'react-icons/fa';

interface ImageUploaderProps {
  maxHeight?: number;
  compact?: boolean;
}

export default function ImageUploader({ maxHeight = 220, compact = false }: ImageUploaderProps) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
    formData.append('file', image);
    setLoading(true);
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL || 'https://backend-melanoma-production-8fb4.up.railway.app/predict',

        { method: 'POST', body: formData }
      );

      const data = await res.json();
      setResult(data.prediccion || data.error);
    } catch {
      setResult('Error al conectarse con el servidor.');
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
    const lower = result.toLowerCase();

    const styles = {
      maligno: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        icon: <FaLightbulb className="text-yellow-600 text-lg" />,
        title: 'text-yellow-700',
        text: 'text-yellow-800',
      },
      benigno: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: <FaLeaf className="text-green-600 text-lg" />,
        title: 'text-green-700',
        text: 'text-green-800',
      },
    };

    const type = lower === 'maligno' ? styles.maligno : styles.benigno;

    return (
      <div className={`mt-3 p-3 rounded-xl shadow-sm border ${type.bg} ${type.border}`}>
        <div className="flex items-center gap-2 mb-1">
          {type.icon}
          <h2 className={`text-sm font-bold ${type.title}`}>Consejo de cuidado</h2>
        </div>
        <p className={`text-xs leading-snug ${type.text}`}>
          {lower === 'maligno'
            ? (
              <>
                Detecté cambios que sería bueno que un médico revise pronto.  
                No implica algo grave de inmediato, pero sí es importante confirmarlo.  
                Mientras tanto, evita sol intenso, hidrata tu piel y observa cambios.
              </>
            )
            : (
              <>
                Todo indica que tu piel está bien.  
                Aun así, sigue cuidándola: usa protector solar a diario, hidrátala  
                y revisa periódicamente para asegurarte de que todo siga igual.
              </>
            )}
        </p>
      </div>
    );
  };

  return (
    <div className={`w-full space-y-3 ${compact ? 'text-xs' : ''}`}>
      
      {/* Dropzone */}
      {!preview && (
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition">
          <FaCloudUploadAlt className="text-blue-500 text-3xl mb-1" />
          <span className="text-gray-600 text-xs text-center">
            Haz clic o arrastra una imagen aquí
          </span>
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </label>
      )}

      {/* Preview */}
      {preview && (
        <img
          src={preview}
          alt="Vista previa"
          className="rounded-lg object-contain shadow border mx-auto max-w-full"
          style={{ maxHeight: `${maxHeight}px`, maxWidth: '150px' }}
        />
      )}

      {/* Botones */}
      {preview && (
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleUpload}
            disabled={!image || loading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-xs font-semibold transition"
          >
            {loading ? 'Analizando...' : 'Analizar'}
          </button>
          <button
            onClick={handleReset}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg text-xs font-semibold transition"
          >
            Limpiar
          </button>
        </div>
      )}

      {/* Resultado */}
      {result && (
        <p className="text-center text-sm font-bold">
          Resultado:{' '}
          <span className={result.toLowerCase() === 'maligno' ? 'text-yellow-600' : 'text-green-600'}>
            {result}
          </span>
        </p>
      )}

      {renderRecommendation()}
    </div>
  );
}
