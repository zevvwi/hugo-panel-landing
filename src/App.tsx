import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, Image, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { HeroSection } from "./components/hero-section";
import { FeatureSection } from "./components/feature-section";
import { WorkflowSection } from "./components/workflow-section";
import { ProblemSolutionSection } from "./components/problem-solution-section";
import { BenefitsSection } from "./components/benefits-section";
import { FaqSection } from "./components/faq-section";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar maxWidth="xl" className="bg-background/80 backdrop-blur-md border-b border-divider">
        <NavbarBrand>
          <Icon icon="lucide:box" className="text-primary text-2xl" />
          <p className="font-semibold text-inherit ml-2">Hugo Panel</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#features">
              Возможности
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#workflow">
              Как это работает
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#benefits">
              Преимущества
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#faq">
              FAQ
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main>
        <HeroSection />
        <FeatureSection />
        <WorkflowSection />
        <ProblemSolutionSection />
        <BenefitsSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;