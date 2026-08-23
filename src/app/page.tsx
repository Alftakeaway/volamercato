"use client";

export default function Home() {
  const volantini = [
    { 
      id: 1, 
      supermercato: "Eurospin", 
      scadenza: "10 - 23 Ago", 
      top: "15.5%", left: "18.3%", width: "15.8%", height: "31.5%",
      pdfUrl: "/pdf/EIT-OLBIA_GASTRO.pdf",
      colore: "from-green-500 to-green-700"
    },
    { 
      id: 2, 
      supermercato: "Superpan", 
      scadenza: "20 - 30 Ago", 
      top: "15.5%", left: "41.8%", width: "16%", height: "31.5%",
      pdfUrl: "/pdf/superpan-volantino.pdf",
      colore: "from-red-500 to-red-700"
    },
    { 
      id: 3, 
      supermercato: "Conad", 
      scadenza: "In corso", 
      top: "15.5%", left: "65.9%", width: "15.8%", height: "31.5%",
      pdfUrl: "https://www.conad.it/assets/common/volantini/cno/v20262/20262618ASPAZIOCONADSARDEGNA.pdf?_u=b32758261c699c9b72b16980c41056e992ccc02f",
      colore: "from-blue-500 to-blue-700"
    },
    { 
      id: 4, 
      supermercato: "Crai", 
      scadenza: "In corso", 
      top: "54%", left: "18.2%", width: "15.8%", height: "31.5%",
      pdfUrl: "https://strapi.crai.it/uploads/LR_AP_19_EXTRA_SARDEGNA_2a7a231ffe.pdf",
      colore: "from-yellow-500 to-orange-600"
    },
    { 
      id: 5, 
      supermercato: "Lidl", 
      scadenza: "20 - 26 Ago", 
      top: "54%", left: "41.8%", width: "16%", height: "31.5%",
      pdfUrl: "https://assets.leaflets.schwarz/leaflets/pdfs/019ffb0d-ba97-7ae5-8139-40315ff9ed6f/Offerte-valide-dal-20-08-al-26-08-Volantino-settimanale-00.pdf",
      colore: "from-blue-600 to-indigo-800"
    },
    { 
      id: 6, 
      supermercato: "Nonna Isa", 
      scadenza: "In corso", 
      top: "54%", left: "65.8%", width: "15.8%", height: "30.8%",
      pdfUrl: "https://www.palumboadv.it/nonnaisa/contenuto_app/volantini_pdf/nonnaisa_iper_oristano.pdf",
      colore: "from-purple-500 to-purple-700"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-600">🛒 VolantiniZone</h1>
          <input 
            type="text" 
            placeholder="Cerca..." 
            className="border border-gray-300 rounded-full px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 sm:w-64"
          />
        </div>
      </header>

      {/* Contenuto */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-gray-800 text-center">
          Volantini attivi questa settimana
        </h2>

        {/* ============================================ */}
        {/* LAYOUT MOBILE: Griglia di card (2 colonne)   */}
        {/* ============================================ */}
        <div className="md:hidden grid grid-cols-1 gap-3 max-w-sm mx-auto">
          {volantini.map((volantino) => (
            <div 
              key={volantino.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col"
            >
              {/* Fascia colorata */}
              <div className={`h-20 bg-gradient-to-br ${volantino.colore} flex flex-col items-center justify-center relative p-2`}>
                <span className="text-white font-black text-xs tracking-widest drop-shadow-md">
                  VOLANTINO
                </span>
                <div className="absolute top-1 right-1 bg-yellow-400 text-gray-900 text-[8px] font-bold px-1.5 py-0.5 rounded shadow">
                  OFFERTE
                </div>
              </div>
              
              {/* Info */}
              <div className="p-2 flex-1 flex flex-col justify-center items-center text-center bg-gray-50">
                <h3 className="font-black text-gray-800 text-xs uppercase leading-tight mb-1">
                  {volantino.supermercato}
                </h3>
                <div className="w-6 h-0.5 bg-gray-300 mb-1"></div>
                <p className="text-[9px] text-gray-600 font-medium leading-tight">
                  fino al <br/>
                  <span className="text-red-600 font-bold text-[10px]">{volantino.scadenza}</span>
                </p>
              </div>

              {/* Bottone */}
              <a 
                href={volantino.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2 text-[10px] font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                 Scarica
              </a>
            </div>
          ))}
        </div>

        {/* ============================================ */}
        {/* LAYOUT DESKTOP: Palazzo con finestre         */}
        {/* ============================================ */}
        <div className="hidden md:block">
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
                    className="absolute bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200 z-10 flex flex-col"
                    style={{ 
                      top: volantino.top, 
                      left: volantino.left,
                      width: volantino.width,
                      height: volantino.height
                    }}
                  >
                    <div className={`h-2/5 bg-gradient-to-br ${volantino.colore} flex items-center justify-center relative`}>
                      <span className="text-white font-black text-lg sm:text-xl tracking-widest drop-shadow-md">
                        VOLANTINO
                      </span>
                      <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
                        OFFERTE
                      </div>
                    </div>
                    
                    <div className="p-2 sm:p-3 flex-1 flex flex-col justify-center items-center text-center bg-gray-50">
                      <h3 className="font-black text-gray-800 text-xs sm:text-sm uppercase leading-tight mb-1">
                        {volantino.supermercato}
                      </h3>
                      <div className="w-8 h-0.5 bg-gray-300 mb-2"></div>
                      <p className="text-[10px] sm:text-xs text-gray-600 font-medium">
                        Valido fino al: <br/>
                        <span className="text-red-600 font-bold text-xs sm:text-sm">{volantino.scadenza}</span>
                      </p>
                    </div>
                  </div>

                  <a 
                    href={volantino.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bg-blue-600 text-white py-1.5 px-2 rounded text-[10px] sm:text-xs font-semibold hover:bg-blue-700 transition-colors shadow-lg z-20 whitespace-nowrap flex items-center justify-center gap-1 cursor-pointer"
                    style={{ 
                      top: `${bottoneTop}%`, 
                      left: volantino.left,
                      width: volantino.width
                    }}
                  >
                    📥 Scarica volantino
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm mt-12">
        <p>© {new Date().getFullYear()} VolantiniZone - Progetto personale di Alfredo</p>
      </footer>
    </div>
  );
}