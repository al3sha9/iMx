import { Overview } from "@/components/overview/overview";
import { Services } from "@/components/services/Services";
import { Expertise } from "@/components/expertise/exertise";
import { Products } from "@/components/products/products";
import { Clients } from "@/components/clients/clients";
import { Traction } from "@/components/traction/traction";
import { Team } from "@/components/team/team";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";





export default function Home() {
  return (
    <>
      <Header />
      <Overview />
      <Services />
      <Expertise />
      <Products />
      <Clients />
      <Traction />
      <Team />
      <Footer />
    </>
  );
}
