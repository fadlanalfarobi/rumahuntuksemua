
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-br from-muted to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Sell Your Home <span className="text-gradient">Faster</span> and For <span className="text-gradient">More</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Our proven marketing strategies, professional photography, and expert negotiation skills deliver the best experience and results for home sellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary">
                Get a Free Valuation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                See How It Works
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-muted-foreground text-sm">Listing Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">30K+</div>
                <div className="text-muted-foreground text-sm">Homes Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">12%</div>
                <div className="text-muted-foreground text-sm">Above Market Average</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-custom">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful Home Exterior"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-custom z-20 max-w-[200px]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <p className="font-semibold">Recently Sold</p>
              </div>
              <p className="text-lg font-bold text-secondary mt-1">$725,000</p>
              <p className="text-sm text-muted-foreground">12% above asking price</p>
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-xl shadow-custom">
              <div className="text-lg font-bold text-secondary">Average Time to Sell</div>
              <div className="text-3xl font-bold text-primary">21 Days</div>
              <div className="text-sm text-muted-foreground">vs. market avg. 45 days</div>
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
