
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Robert & Maria Thompson",
      quote: "Kami menjual rumah kami hanya dalam 9 hari dan mendapatkan Rp450 juta di atas harga penawaran! Fotografi profesional dan penataan virtual membuat rumah kami menonjol dari pesaingnya.",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      location: "Jakarta Selatan"
    },
    {
      id: 2,
      name: "Jennifer Wilson",
      quote: "Sebagai penjual pertama kali, saya gugup tentang prosesnya. HomeFind membuat semuanya sederhana dengan panduan yang jelas di setiap langkah. Saya tidak bisa lebih bahagia dengan hasilnya!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      location: "Bandung"
    },
    {
      id: 3,
      name: "James & David Rodriguez",
      quote: "Setelah rumah kami berada di pasar selama berbulan-bulan dengan agen lain, HomeFind menjualnya dalam waktu kurang dari 3 minggu. Strategi pemasaran dan keterampilan negosiasi mereka tidak tertandingi.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      location: "Surabaya"
    }
  ];

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Klien Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dengarkan dari pemilik rumah yang berhasil menjual properti mereka bersama kami
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden hover-lift shadow-custom">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
