import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  {
    category: "Water Management",
    items: [
      "Reduce water consumption by 30-50%",
      "Optimize irrigation timing and amounts",
      "Monitor soil moisture in real-time",
      "Prevent over and under-watering"
    ]
  },
  {
    category: "Crop Health",
    items: [
      "Early pest and disease detection",
      "Minimize chemical pesticide use",
      "Track plant health with NDVI monitoring",
      "Prevent large-scale infestations"
    ]
  },
  {
    category: "Yield Optimization",
    items: [
      "Increase yields by 10-25%",
      "Data-driven fertilizer recommendations",
      "Precise nutrient application timing",
      "Optimize crop rotation schedules"
    ]
  },
  {
    category: "Sustainability",
    items: [
      "Reduce environmental impact",
      "Lower carbon footprint tracking",
      "Support ESG compliance goals",
      "Minimize chemical runoff"
    ]
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Measurable Impact on Your Farm
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of farmers already seeing dramatic improvements in efficiency, sustainability, and profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {benefit.category}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-earth rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Farm?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your free trial today and see the AgriEdge difference. No setup fees, no long-term contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;