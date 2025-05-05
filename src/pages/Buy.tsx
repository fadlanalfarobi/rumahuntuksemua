
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
    title: "Modern Suburban Home",
    price: "$450,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    bedrooms: 4,
    bathrooms: 2,
    area: "2,400 sq ft",
    location: "Pleasantville, CA"
  },
  {
    id: "prop2",
    title: "Downtown Luxury Apartment",
    price: "$380,000",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
    location: "Central District, CA"
  },
  {
    id: "prop3",
    title: "Countryside Family Home",
    price: "$520,000",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    bedrooms: 5,
    bathrooms: 3,
    area: "3,200 sq ft",
    location: "Greendale, CA"
  },
];

const Buy = () => {
  const [properties] = useState(demoProperties);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container-custom py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our selection of quality properties and find the perfect home for you and your family.
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
            Load More Properties
          </Button>
        </div>
      </div>
      
      <div className="bg-muted py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-custom">
              <h2 className="text-2xl font-bold mb-4">Have Questions About Buying?</h2>
              <p className="mb-6 text-muted-foreground">
                Our team of real estate professionals is ready to assist you with any questions you may have about buying property. We're here to guide you through every step of the home buying process.
              </p>
              <ContactInfo />
            </div>
            
            <div className="bg-secondary text-white p-8 rounded-xl shadow-custom">
              <h2 className="text-2xl font-bold mb-4">First Time Buyer?</h2>
              <p className="mb-6">
                If you're new to the home buying process, we're here to help! We offer special resources and support for first-time buyers.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="rounded-full bg-primary h-6 w-6 flex items-center justify-center mr-2 mt-0.5">✓</div>
                  <span>Free consultation with a buying specialist</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary h-6 w-6 flex items-center justify-center mr-2 mt-0.5">✓</div>
                  <span>Access to exclusive first-time buyer resources</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary h-6 w-6 flex items-center justify-center mr-2 mt-0.5">✓</div>
                  <span>Guidance on financing and mortgage options</span>
                </li>
              </ul>
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Learn More
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
