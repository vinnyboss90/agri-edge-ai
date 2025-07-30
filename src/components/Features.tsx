import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cpu, 
  Satellite, 
  Smartphone, 
  Droplets, 
  Bug, 
  TrendingUp 
} from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Smart Irrigation",
    description: "AI-powered irrigation scheduling based on soil moisture, weather forecasts, and evapotranspiration data.",
    benefit: "Save 30-50% water"
  },
  {
    icon: Bug,
    title: "Pest Detection",
    description: "Early warning system using multispectral imaging and ML models to detect pest outbreaks and disease stress.",
    benefit: "Reduce chemical use"
  },
  {
    icon: Satellite,
    title: "Satellite Integration",
    description: "Real-time satellite imagery analysis for biomass health monitoring and growth pattern assessment.",
    benefit: "Complete farm visibility"
  },
  {
    icon: Cpu,
    title: "IoT Sensor Network",
    description: "Comprehensive sensor deployment for soil moisture, pH, temperature, and environmental monitoring.",
    benefit: "Real-time data"
  },
  {
    icon: TrendingUp,
    title: "Yield Prediction",
    description: "Advanced analytics for accurate yield forecasting based on current growing conditions and trends.",
    benefit: "10-25% yield increase"
  },
  {
    icon: Smartphone,
    title: "Mobile Dashboard",
    description: "Intuitive mobile and web dashboard for real-time monitoring and automated recommendations.",
    benefit: "Manage anywhere"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Precision Farming Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our integrated platform combines cutting-edge technology with agricultural expertise to revolutionize your farming operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-agricultural transition-all duration-300 border-border bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow-pulse transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                  {feature.benefit}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;