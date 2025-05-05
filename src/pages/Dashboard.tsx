
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  location: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 sq ft",
    location: "Los Angeles, CA"
  });

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/account");
      return;
    }

    setUser(JSON.parse(storedUser));
    
    // Load products from localStorage
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/account");
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newProductWithId = {
      ...newProduct,
      id: Date.now().toString()
    };
    
    const updatedProducts = [...products, newProductWithId];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    
    setNewProduct({
      title: "",
      description: "",
      price: "",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sq ft",
      location: "Los Angeles, CA"
    });
    
    setShowForm(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gray-50 py-12">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-600">Welcome, {user.name}</p>
            </div>
            <div className="space-x-4 flex">
              <Button onClick={() => setShowForm(!showForm)}>
                <Plus className="mr-2 h-4 w-4" /> Add Property
              </Button>
              <Button variant="outline" onClick={handleLogout}>Logout</Button>
            </div>
          </div>

          {showForm && (
            <Card className="mb-8 shadow-custom">
              <form onSubmit={handleAddProduct}>
                <CardHeader>
                  <CardTitle>Add New Property</CardTitle>
                  <CardDescription>Add details about the property you want to sell</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Property Title</Label>
                      <Input 
                        id="title" 
                        value={newProduct.title} 
                        onChange={(e) => setNewProduct({...newProduct, title: e.target.value})} 
                        placeholder="Modern Home in Downtown"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input 
                        id="price" 
                        value={newProduct.price} 
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        placeholder="$450,000" 
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bedrooms">Bedrooms</Label>
                      <Input 
                        id="bedrooms" 
                        type="number"
                        value={newProduct.bedrooms} 
                        onChange={(e) => setNewProduct({...newProduct, bedrooms: parseInt(e.target.value)})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bathrooms">Bathrooms</Label>
                      <Input 
                        id="bathrooms" 
                        type="number"
                        value={newProduct.bathrooms} 
                        onChange={(e) => setNewProduct({...newProduct, bathrooms: parseInt(e.target.value)})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="area">Area</Label>
                      <Input 
                        id="area" 
                        value={newProduct.area} 
                        onChange={(e) => setNewProduct({...newProduct, area: e.target.value})}
                        placeholder="1,800 sq ft"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location" 
                      value={newProduct.location} 
                      onChange={(e) => setNewProduct({...newProduct, location: e.target.value})}
                      placeholder="Los Angeles, CA"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input 
                      id="image" 
                      value={newProduct.image} 
                      onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                      placeholder="https://example.com/image.jpg"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      value={newProduct.description} 
                      onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                      placeholder="Describe the property features and amenities..."
                      rows={4}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => setShowForm(false)}>Cancel</Button>
                  <Button type="submit">Add Property</Button>
                </CardFooter>
              </form>
            </Card>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-4">Your Properties</h2>
            {products.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-medium mb-2">No properties yet</h3>
                <p className="text-gray-600 mb-4">Add your first property to get started</p>
                <Button onClick={() => setShowForm(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Add Property
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <PropertyCard 
                    key={product.id} 
                    property={{
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      bedrooms: product.bedrooms,
                      bathrooms: product.bathrooms,
                      area: product.area,
                      location: product.location,
                    }}
                    showEdit={true}
                    onEdit={() => {}}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
