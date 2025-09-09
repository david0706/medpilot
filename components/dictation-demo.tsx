"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function DictationDemo() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  // Texte de dictée simulée
  const dictationText = "Scanner thoracique réalisé ce jour pour Monsieur Dubois Jean-Pierre, contrôle post-opératoire à J+30 d'une lobectomie supérieure droite. Pas de signe d'épanchement pleural, les scissures sont libres, absence de condensation parenchymateuse...";
  
  useEffect(() => {
    // Démarrer l'animation après 2 secondes
    const startTimeout = setTimeout(() => {
      setIsRecording(true);
    }, 2000);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (isRecording && textIndex < dictationText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(dictationText.slice(0, textIndex + 5));
        setTextIndex(prev => prev + 5);
      }, 100);

      return () => clearTimeout(timeout);
    } else if (textIndex >= dictationText.length && isRecording) {
      // Fin de la dictée, attendre 2s puis reset
      const resetTimeout = setTimeout(() => {
        setIsRecording(false);
        setCurrentText("");
        setTextIndex(0);
        
        // Relancer après 2s
        setTimeout(() => {
          setIsRecording(true);
        }, 2000);
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [isRecording, textIndex, dictationText.length]);

  return (
    <div className="flex flex-col items-center h-full w-full max-w-md mx-auto">
      {/* Zone de texte avec hauteur fixe */}
      <div className="w-full h-64 flex items-center justify-center px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isRecording ? 1 : 0 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {currentText}
          </p>
        </motion.div>
        
        {!isRecording && (
          <p className="text-gray-400 text-lg">Appuyez pour dicter</p>
        )}
      </div>

      {/* Spacer flexible */}
      <div className="flex-1" />

      {/* Bouton d'enregistrement - ancré en bas */}
      <div className="flex flex-col items-center pb-32">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center"
        >
          {/* Cercles animés */}
          {isRecording && (
            <>
              <motion.div
                className="absolute w-20 h-20 rounded-full bg-blue-400"
                animate={{
                  scale: [1, 2, 2],
                  opacity: [0.5, 0.2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute w-20 h-20 rounded-full bg-blue-400"
                animate={{
                  scale: [1, 1.7, 1.7],
                  opacity: [0.5, 0.25, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.75,
                }}
              />
              <motion.div
                className="absolute w-20 h-20 rounded-full bg-blue-500"
                animate={{
                  scale: [1, 1.4, 1.4],
                  opacity: [0.4, 0.2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1.5,
                }}
              />
              <motion.div
                className="absolute w-20 h-20 rounded-full bg-blue-300"
                animate={{
                  scale: [1, 1.1, 1.1],
                  opacity: [0.3, 0.1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 2.25,
                }}
              />
            </>
          )}
          
          {/* Bouton principal */}
          <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-colors ${
            isRecording ? "bg-blue-500" : "bg-red-500"
          }`}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10M12 16C9.79086 16 8 14.2091 8 12V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V12C16 14.2091 14.2091 16 12 16Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.button>
      </div>
    </div>
  );
}