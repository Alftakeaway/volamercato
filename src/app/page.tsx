"use client";

export default function Home() {
  const volantini = [
    // Piano superiore
    { 
      id: 1, 
      supermercato: "Eurospin", 
      scadenza: "10 - 23 Ago", 
      top: "15.5%", 
      left: "18.3%", 
      width: "15.8%", 
      height: "31.5%",
      pdfUrl: "https://www.eurospin.it/volantino/promotion?code=202620IT"
    },
    { 
      id: 2, 
      supermercato: "Superpan", 
      scadenza: "20 - 30 Ago", 
      top: "15.5%", 
      left: "41.8%", 
      width: "16%", 
      height: "31.5%",
      pdfUrl: "https://promo.supermercatipan.it/punti-vendita/oristano/promozioni/sconti-30-40-50-1/pdf"
    },
    { 
      id: 3, 
      supermercato: "Conad", 
      scadenza: "In corso", 
      top: "15.5%", 
      left: "65.9%", 
      width: "15.8%", 
      height: "31.5%",
      pdfUrl: "https://www.conad.it/assets/common/volantini/cno/v20262/20262618ASPAZIOCONADSARDEGNA.pdf?_u=b32758261c699c9b72b16980c41056e992ccc02f"
    },
    // Piano inferiore
    { 
      id: 4, 
      supermercato: "Crai", 
      scadenza: "In corso", 
      top: "54%", 
      left: "18.2%", 
      width: "15.8%", 
      height: "31.5%",
      pdfUrl: "https://strapi.crai.it/uploads/LR_AP_19_EXTRA_SARDEGNA_2a7a231ffe.pdf"
    },
    { 
      id: 5, 
      supermercato: "Lidl", 
      scadenza: "20 - 26 Ago", 
      top: "54%", 
      left: "41.8%", 
      width: "16%", 
      height: "31.5%",
      pdfUrl: "https://assets.leaflets.schwarz/leaflets/pdfs/019ffb0d-ba97-7ae5-8139-40315ff9ed6f/Offerte-valide-dal-20-08-al-26-08-Volantino-settimanale-00.pdf"
    },
    { 
      id: 6, 
      supermercato: "Nonna Isa", 
      scadenza: "In corso", 
      top: "54%", 
      left: "65.8%", 
      width: "15.8%", 
      height: "30.8%",
      pdfUrl: "https://www.palumboadv.it/nonnaisa/contenuto_app/volantini_pdf/nonnaisa_iper_oristano.pdf"
    },
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
                {/* Card dentro la finestra */}
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

                {/* Bottone sotto la finestra */}
                <button 
                  onClick={() => {
                    if (volantino.pdfUrl && volantino.pdfUrl !== '#') {
                      window.open(volantino.pdfUrl, '_blank');
                    } else {
                      alert('Volantino di ' + volantino.supermercato + ' in arrivo!');
                    }
                  }}
                  className="absolute bg-blue-600 text-white py-1.5 px-2 rounded text-[10px] sm:text-xs font-semibold hover:bg-blue-700 transition-colors shadow-lg z-20 whitespace-nowrap cursor-pointer"
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