// "use client";

// interface ModalProps {
//   onClose: () => void;
// }

// export default function AcercaDeModal({ onClose }: ModalProps) {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//       <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-2xl p-6 max-h-[80vh] overflow-y-auto">
//         <h2 className="text-xl font-bold text-blue-800 mb-4">Acerca de la aplicación</h2>

//         <div className="space-y-4 text-sm text-gray-700">
//           <p>
//             <strong>Propósito:</strong> El sistema está diseñado para clasificar una imagen
//             de una lesión cutánea como <strong>benigna o maligna</strong>.
//           </p>
//           <p>
//             <strong>Público objetivo:</strong> Dirigida exclusivamente a{" "}
//             <strong>personal de la salud</strong> (médicos, dermatólogos).
//           </p>
//           <p>
//             <strong>Guía de uso:</strong> El modelo trabaja con imágenes{" "}
//             <strong>dermatoscópicas</strong>, no con fotos de celular. Se requiere
//             dermatoscopio y no sustituye la consulta médica.
//           </p>
//           <p>
//             <strong>Recomendaciones de captura:</strong>
//           </p>
//           <ul className="list-disc list-inside space-y-1">
//             <li>Iluminación uniforme, evitar sombras o reflejos.</li>
//             <li>No usar luz solar directa.</li>
//             <li>Resolución mínima 1024x1024 px.</li>
//             <li>Imagen perpendicular a la piel.</li>
//             <li>Distancia máxima 8 cm.</li>
//           </ul>
//           <p>
//             <strong>Privacidad:</strong> Las imágenes no se almacenan, se eliminan tras el
//             análisis y no se comparten con terceros.
//           </p>
//         </div>

//         <div className="mt-6 text-right">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             Cerrar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

interface ModalProps {
  onClose: () => void;
}

export default function AcercaDeModal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-2xl p-6">
        
        {/* Título */}
        <h2 className="text-xl font-bold text-blue-800 mb-4">Acerca de la aplicación</h2>

        {/* Contenido */}
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <strong>Propósito:</strong> El sistema está diseñado para clasificar una imagen
            de una lesión cutánea como <strong>benigna o maligna</strong>.
          </p>
          <p>
            <strong>Público objetivo:</strong> Exclusivo para{" "}
            <strong>personal de la salud</strong> (médicos, dermatólogos).
          </p>
          <p>
            <strong>Guía de uso:</strong> El modelo trabaja con imágenes{" "}
            <strong>dermatoscópicas</strong>, no con fotos de celular. Se requiere
            dermatoscopio y no sustituye la consulta médica.
          </p>
          <p>
            <strong>Recomendaciones de captura:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Iluminación uniforme, evitar sombras o reflejos.</li>
            <li>No usar luz solar directa.</li>
            <li>Resolución mínima 1024x1024 px.</li>
            <li>Imagen perpendicular a la piel.</li>
            <li>Distancia máxima 8 cm.</li>
          </ul>
          <p>
            <strong>Privacidad:</strong> Las imágenes no se almacenan, se eliminan tras el
            análisis y no se comparten con terceros.
          </p>
        </div>

        {/* Créditos minimalistas */}
        <div className="mt-8 text-center text-xs text-gray-500 border-t pt-4">
          <p className="font-semibold text-gray-700 mb-1">Creado por:</p>
          <p>
            Jesús Villarreal Cuello · William Montenegro Realpe · Brian Neeley Amador  · 
            Carlos Tapia Castellanos · Gregory Garrido
          </p>
        </div>

        {/* Botón cerrar */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
