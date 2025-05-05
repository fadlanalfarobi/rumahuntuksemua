
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="py-10">
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-custom p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">Find Your Dream Home</h2>
          <p className="text-center text-muted-foreground mb-6">Search the largest inventory of homes in your area</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Input 
              placeholder="Enter address, city, ZIP or neighborhood" 
              className="md:col-span-2 lg:col-span-2"
            />
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="house">Houses</SelectItem>
                <SelectItem value="apartment">Apartments</SelectItem>
                <SelectItem value="condo">Condos</SelectItem>
                <SelectItem value="townhouse">Townhouses</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
