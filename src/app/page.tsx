export default function Home() {
  const volantini = [
    // Piano superiore - larghezze uniformate a 456, centrate
    { id: 1, supermercato: "Coop", scadenza: "15 Ottobre", top: "15.5%", left: "18.3%", width: "15.8%", height: "31.5%" },
    { id: 2, supermercato: "Esselunga", scadenza: "12 Ottobre", top: "15.5%", left: "41.8%", width: "16%", height: "31.5%" },
    { id: 3, supermercato: "Lidl", scadenza: "10 Ottobre", top: "15.5%", left: "65.9%", width: "15.8%", height: "31.5%" },
    // Piano inferiore - INTATTE
    { id: 4, supermercato: "Carrefour", scadenza: "18 Ottobre", top: "54%", left: "18.2%", width: "15.8%", height: "31.5%" },
    { id: 5, supermercato: "Conad", scadenza: "14 Ottobre", top: "54%", left: "41.8%", width: "16%", height: "31.5%" },
    { id: 6, supermercato: "Eurospin", scadenza: "16 Ottobre", top: "54%", left: "65.8%", width: "15.8%", height: "30.8%" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">🛒 VolantiniZone</h1>
          <input 
            type="text" 
            placeholder="Cerca un prodotto..." 
            className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 sm:w-64"
          />
        </div>
      </header>

      {/* Contenuto */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
          Volantini attivi questa settimana
        </h2>

        <div className="relative w-full" style={{ aspectRatio: '1536 / 1024' }}>
          <img 
            src="/palazzo-moderno.png" 
            alt="Palazzo" 
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
          />

          {volantini.map((volantino) => {
            const bottoneTop = parseFloat(volantino.top) + parseFloat(volantino.height) + 0.4;

            return (
              <div key={volantino.id}>
                <div 
                  className="absolute bg-white/90 backdrop-blur-sm flex items-center justify-center border-2 border-gray-400 shadow-lg z-10"
                  style={{ 
                    top: volantino.top, 
                    left: volantino.left,
                    width: volantino.width,
                    height: volantino.height
                  }}
                >
                  <div className="text-center p-2">
                    <div className="text-2xl mb-1">📄</div>
                    <p className="font-bold text-gray-800 text-xs sm:text-sm">{volantino.supermercato}</p>
                    <p className="text-[10px] sm:text-xs text-gray-600">{volantino.scadenza}</p>
                  </div>
                </div>

                <button 
                  className="absolute bg-blue-600 text-white py-1.5 px-2 rounded text-[10px] sm:text-xs font-semibold hover:bg-blue-700 transition-colors shadow-lg z-20 whitespace-nowrap"
                  style={{ 
                    top: `${bottoneTop}%`, 
                    left: volantino.left,
                    width: volantino.width
                  }}
                >
                  📥 Scarica volantino
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm mt-12">
        <p>© {new Date().getFullYear()} VolantiniZone - Progetto personale di Alfredo</p>
      </footer>
    </div>
  );
}