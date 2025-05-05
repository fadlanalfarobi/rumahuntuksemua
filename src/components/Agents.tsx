
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      phone: "(555) 123-4567",
      email: "sarah.j@homefind.com",
      experience: "12 years"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Luxury Home Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      phone: "(555) 234-5678",
      email: "michael.c@homefind.com",
      experience: "9 years"
    },
    {
      id: 3,
      name: "Jessica Martinez",
      title: "First-time Seller Expert",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=80",
      phone: "(555) 345-6789",
      email: "jessica.m@homefind.com",
      experience: "7 years"
    }
  ];
  
  return (
    <div className="py-16 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Agents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of experienced professionals is ready to guide you through the selling process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden hover-lift shadow-custom">
              <div className="h-64">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="text-center py-6">
                <h3 className="text-xl font-bold">{agent.name}</h3>
                <p className="text-primary font-medium mb-3">{agent.title}</p>
                <p className="text-muted-foreground mb-4">{agent.experience} of experience</p>
                <div className="flex flex-col gap-3 mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{agent.email}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Contact Agent</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
