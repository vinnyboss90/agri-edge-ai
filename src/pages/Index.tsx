import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-muted-foreground">Coming soon - flexible pricing for farms of all sizes</p>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-4">Ready to transform your farming operations?</p>
          <p className="text-muted-foreground">Get in touch: contact@agriedge.com</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
