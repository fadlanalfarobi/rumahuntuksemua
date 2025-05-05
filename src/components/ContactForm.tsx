
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, propertyType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "We'll contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      message: ""
    });
  };
  
  return (
    <div id="contact" className="py-16 bg-muted">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us Today</h2>
            <p className="text-lg text-muted-foreground">
              Have questions about selling your home? We're here to help.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-custom">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="propertyType" className="block mb-2 font-medium">
                    Property Type
                  </label>
                  <Select onValueChange={handleSelectChange} value={formData.propertyType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
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
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your property and questions"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full btn-primary">
                Submit Inquiry
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                By submitting, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a> and <a href="#" className="text-primary hover:underline">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
