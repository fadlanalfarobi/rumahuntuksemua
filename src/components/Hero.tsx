
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-br from-muted to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Jual Rumah Anda <span className="text-gradient">Lebih Cepat</span> dan <span className="text-gradient">Lebih Tinggi</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Strategi pemasaran, fotografi profesional, dan keterampilan negosiasi ahli kami memberikan pengalaman dan hasil terbaik bagi penjual rumah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary">
                Dapatkan Penilaian Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Lihat Cara Kerjanya
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-muted-foreground text-sm">Tingkat Keberhasilan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">30K+</div>
                <div className="text-muted-foreground text-sm">Rumah Terjual</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">12%</div>
                <div className="text-muted-foreground text-sm">Di Atas Rata-Rata Pasar</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-custom">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=80"
                alt="Eksterior Rumah Cantik"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-custom z-20 max-w-[200px]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <p className="font-semibold">Baru Terjual</p>
              </div>
              <p className="text-lg font-bold text-secondary mt-1">Rp10.875.000.000</p>
              <p className="text-sm text-muted-foreground">12% di atas harga penawaran</p>
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-xl shadow-custom">
              <div className="text-lg font-bold text-secondary">Rata-rata Waktu Jual</div>
              <div className="text-3xl font-bold text-primary">21 Hari</div>
              <div className="text-sm text-muted-foreground">vs. rata-rata pasar 45 hari</div>
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
