
import Navbar from "@/components/Navbar";
import ContactInfo from "@/components/ContactInfo";
import PropertyFilters from "@/components/PropertyFilters";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { useState } from "react";

const demoProperties = [
  {
    id: "prop1",
    title: "Rumah Modern di Pinggiran Kota",
    price: "Rp6.750.000.000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    bedrooms: 4,
    bathrooms: 2,
    area: "223 m²",
    location: "Pleasantville, Jakarta"
  },
  {
    id: "prop2",
    title: "Apartemen Mewah di Pusat Kota",
    price: "Rp5.700.000.000",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    bedrooms: 2,
    bathrooms: 2,
    area: "111 m²",
    location: "Distrik Pusat, Jakarta"
  },
  {
    id: "prop3",
    title: "Rumah Keluarga di Pedesaan",
    price: "Rp7.800.000.000",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    bedrooms: 5,
    bathrooms: 3,
    area: "297 m²",
    location: "Greendale, Bandung"
  },
];

const Buy = () => {
  const [properties] = useState(demoProperties);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container-custom py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Temukan Rumah Impian Anda</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jelajahi pilihan properti berkualitas kami dan temukan rumah sempurna untuk Anda dan keluarga.
          </p>
        </div>
        
        <PropertyFilters />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button size="lg">
            Muat Properti Lainnya
          </Button>
        </div>
      </div>
      
      <div className="bg-muted py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Punya Pertanyaan Tentang Pembelian?</h2>
              <p className="mb-6 text-muted-foreground">
                Tim profesional properti kami siap membantu Anda dengan pertanyaan yang mungkin Anda miliki tentang pembelian properti. Kami hadir untuk membimbing Anda melalui setiap langkah proses pembelian rumah.
              </p>
              <ContactInfo />
            </div>
            
            <div className="bg-secondary text-white p-8 rounded-xl shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Pembeli Pertama Kali?</h2>
              <p className="mb-6">
                Jika Anda baru dalam proses pembelian rumah, kami siap membantu! Kami menawarkan sumber daya dan dukungan khusus untuk pembeli pertama kali.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="rounded-full bg-primary h-6 w-6 flex items-center justify-center mr-2 mt-0.5">✓</div>
                  <span>Konsultasi gratis dengan spesialis pembelian</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary h-6 w-6 flex items-center justify-center mr-2 mt-0.5">✓</div>
                  <span>Akses ke sumber daya eksklusif untuk pembeli pertama kali</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary h-6 w-6 flex items-center justify-center mr-2 mt-0.5">✓</div>
                  <span>Panduan tentang pembiayaan dan opsi KPR</span>
                </li>
              </ul>
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Buy;
