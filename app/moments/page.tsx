import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MomentsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text mb-4">Momentos</h1>
          <p className="text-[#9ca3af] text-sm max-w-xl mx-auto leading-relaxed">
            como é a vida além da tela? um pouco dos lugares por onde passei, coisas que vi e momentos que valem a pena lembrar.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[...Array(9)].map((_, i) => (
            <div key={i}
              className="aspect-square bg-[#111] rounded-lg border border-[#1f1f1f] flex items-center justify-center hover:border-[#2f2f2f] transition-colors overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br"
                style={{
                  background: `linear-gradient(${135 + i * 20}deg, #${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}22, #11111100)`,
                  backgroundImage: `linear-gradient(${135 + i * 20}deg, #1a1a2e, #0d0d0d)`
                }}
              />
            </div>
          ))}
        </div>
        <p className="text-center text-[#4b5563] text-sm mt-8">viva e não sobreviva...</p>
      </main>
      <Footer />
    </>
  );
}
