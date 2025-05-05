
import { Building, Heart, Home, MapPin, Award, Banknote } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Building className="w-6 h-6 text-primary" />,
      title: "Analisis Pasar Ahli",
      description: "Dapatkan analisis harga kompetitif berdasarkan rumah yang sebanding di area Anda"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Fotografi Profesional",
      description: "Tampilkan rumah Anda dengan foto berkualitas tinggi yang menarik pembeli serius"
    },
    {
      icon: <Home className="w-6 h-6 text-primary" />,
      title: "Penataan Virtual",
      description: "Penataan virtual modern untuk membantu pembeli memvisualisasikan potensi properti Anda"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Eksposur Maksimal",
      description: "Daftar properti Anda dipromosikan di semua platform real estate utama"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Agen Berpengalaman",
      description: "Bekerja dengan agen berperingkat teratas dengan pengetahuan pasar lokal yang mendalam"
    },
    {
      icon: <Banknote className="w-6 h-6 text-primary" />,
      title: "Harga Cerdas",
      description: "Strategi penetapan harga berbasis data untuk memaksimalkan keuntungan Anda"
    }
  ];

  return (
    <div className="py-16 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Menjual Bersama Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dari pendaftaran hingga penutupan, kami menangani setiap aspek penjualan rumah Anda dengan hati-hati dan keahlian
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-custom hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
