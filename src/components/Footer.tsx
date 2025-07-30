import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">AgriEdge</span>
            </div>
            <p className="text-primary-foreground/80">
              Precision farming technology that helps you grow more with less impact on the environment.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">IoT Sensors</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">AI Analytics</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Automation</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Crop Management</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Water Optimization</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pest Control</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Yield Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 AgriEdge. All rights reserved. Transforming agriculture through technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;