
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Bath, Square, MapPin } from "lucide-react";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Villa Modern Tepi Pantai",
      price: "Rp18.750.000.000",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      address: "1234 Jalan Pantai, Jakarta",
      beds: 4,
      baths: 3.5,
      sqft: "297 m²",
      tag: "Premium"
    },
    {
      id: 2,
      title: "Loft Nyaman di Pusat Kota",
      price: "Rp10.275.000.000",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80",
      address: "789 Jalan Urban, Jakarta",
      beds: 2,
      baths: 2,
      sqft: "116 m²",
      tag: "Baru Terdaftar"
    },
    {
      id: 3,
      title: "Rumah Keluarga Pinggiran Kota",
      price: "Rp13.875.000.000",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=80",
      address: "456 Jalan Maple, Bandung",
      beds: 5,
      baths: 4,
      sqft: "260 m²",
      tag: "Open House"
    }
  ];
  
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Properti Unggulan</h2>
            <p className="text-lg text-muted-foreground">Temukan pilihan eksklusif kami dari properti premium</p>
          </div>
          <a href="#" className="text-primary font-medium mt-4 md:mt-0 hover:text-primary/80 transition-colors">
            Lihat Semua Properti →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover-lift shadow-custom">
              <div className="relative h-64">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary">{property.tag}</Badge>
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold line-clamp-1">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <p className="text-sm">{property.address}</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-primary">{property.price}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6 py-4 border-t">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{property.beds} Kamar</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{property.baths} K.Mandi</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{property.sqft}</span>
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

export default Properties;
