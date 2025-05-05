
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const PropertyFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-2">
            Location
          </label>
          <Input id="location" placeholder="City, neighborhood, or ZIP" />
        </div>
        
        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium mb-2">
            Property Type
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Bedrooms
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Bathrooms
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mt-6">
        <label className="block text-sm font-medium mb-4">
          Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
        </label>
        <Slider
          defaultValue={[0, 1000000]} 
          max={2000000} 
          step={50000}
          onValueChange={(value) => setPriceRange(value)} 
          className="py-4"
        />
      </div>
      
      <div className="mt-6 flex flex-wrap gap-4">
        <Button className="flex-1">Search Properties</Button>
        <Button variant="outline" className="flex-1">Reset Filters</Button>
      </div>
    </div>
  );
};

export default PropertyFilters;
