
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin, Edit } from "lucide-react";

interface PropertyProps {
  property: {
    id: string;
    title: string;
    price: string;
    image: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    location: string;
  };
  showEdit?: boolean;
  onEdit?: (id: string) => void;
}

const PropertyCard = ({ property, showEdit = false, onEdit }: PropertyProps) => {
  return (
    <Card className="overflow-hidden hover-lift shadow-custom">
      <div className="relative h-48">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 m-2 px-2 py-1 bg-primary text-white rounded-md">
          {property.price}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center">
            <Bed size={18} className="mr-1" />
            <span>{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={18} className="mr-1" />
            <span>{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center">
            <Square size={18} className="mr-1" />
            <span>{property.area}</span>
          </div>
        </div>
      </CardContent>
      {showEdit && (
        <CardFooter className="border-t p-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => onEdit && onEdit(property.id)}
          >
            <Edit size={14} className="mr-2" />
            Edit Property
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default PropertyCard;
