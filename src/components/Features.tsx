
import { Building, Heart, Home, MapPin, Award, Banknote } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Building className="w-6 h-6 text-primary" />,
      title: "Expert Market Analysis",
      description: "Get a competitive price analysis based on comparable homes in your area"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Professional Photography",
      description: "Showcase your home with high-quality photos that attract serious buyers"
    },
    {
      icon: <Home className="w-6 h-6 text-primary" />,
      title: "Virtual Staging",
      description: "Modern virtual staging to help buyers visualize your property's potential"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Maximum Exposure",
      description: "Your listing is promoted across all major real estate platforms"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Experienced Agents",
      description: "Work with top-rated agents with deep local market knowledge"
    },
    {
      icon: <Banknote className="w-6 h-6 text-primary" />,
      title: "Smart Pricing",
      description: "Data-driven pricing strategies to maximize your profit"
    }
  ];

  return (
    <div className="py-16 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Sell With Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From listing to closing, we handle every aspect of selling your home with care and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-custom hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
