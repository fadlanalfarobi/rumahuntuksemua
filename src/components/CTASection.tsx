
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-16 bg-secondary relative">
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Menjual Rumah Anda?</h2>
          <p className="text-lg mb-8">
            Dapatkan penilaian rumah dan konsultasi gratis dengan salah satu agen ahli kami.
            Tanpa kewajiban, hanya saran profesional untuk membantu Anda membuat keputusan terbaik.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Dapatkan Penilaian Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Jadwalkan Konsultasi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
