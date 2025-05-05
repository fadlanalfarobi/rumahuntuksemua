
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const PropertyFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 15000000000]);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-2">
            Lokasi
          </label>
          <Input id="location" placeholder="Kota, lingkungan, atau kode pos" />
        </div>
        
        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium mb-2">
            Tipe Properti
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Semua Tipe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">Rumah</SelectItem>
              <SelectItem value="apartment">Apartemen</SelectItem>
              <SelectItem value="condo">Kondominium</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="land">Tanah</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Kamar Tidur
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Semua" />
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
            Kamar Mandi
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Semua" />
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
          Rentang Harga: Rp{priceRange[0].toLocaleString()} - Rp{priceRange[1].toLocaleString()}
        </label>
        <Slider
          defaultValue={[0, 15000000000]} 
          max={30000000000} 
          step={750000000}
          onValueChange={(value) => setPriceRange(value)} 
          className="py-4"
        />
      </div>
      
      <div className="mt-6 flex flex-wrap gap-4">
        <Button className="flex-1">Cari Properti</Button>
        <Button variant="outline" className="flex-1">Atur Ulang Filter</Button>
      </div>
    </div>
  );
};

export default PropertyFilters;
