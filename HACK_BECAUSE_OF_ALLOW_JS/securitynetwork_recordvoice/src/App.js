import React, { useState, useEffect } from 'react';
const App = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recognition, setRecognition] = useState(null);
    useEffect(() => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert('El reconocimiento de voz no está soportado en este navegador.');
            return;
        }
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = true;
        recognitionInstance.lang = 'es-ES'; // Idioma español
        recognitionInstance.onresult = (event) => {
            const currentTranscript = event.results[event.resultIndex][0].transcript.toLowerCase();
            setTranscript(currentTranscript);
            if (currentTranscript.includes('auxilio')) {
                triggerAlarm();
            }
        };
        recognitionInstance.onerror = (event) => {
            console.error('Error en el reconocimiento de voz:', event.error);
        };
        setRecognition(recognitionInstance);
    }, []);
    const triggerAlarm = () => {
        alert('¡Palabra de emergencia detectada: auxilio!');
    };
    const startListening = () => {
        if (recognition) {
            recognition.start();
            setIsListening(true);
        }
    };
    const stopListening = () => {
        if (recognition) {
            recognition.stop();
            setIsListening(false);
        }
    };
    return (<div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Aplicación de Reconocimiento de Voz</h1>
      <p>{isListening ? 'Escuchando...' : 'Presiona "Iniciar" para comenzar a escuchar'}</p>
      <button onClick={startListening} disabled={isListening}>
        Iniciar
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Detener
      </button>
      <p>Transcripción: {transcript}</p>
    </div>);
};
export default App;
