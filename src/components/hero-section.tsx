import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ваш персональный конвейер для создания сайтов на Hugo
            </h1>
            <p className="text-lg md:text-xl text-foreground-600 mb-8 max-w-2xl">
              Автоматизируйте создание десятков и сотен сайтов на Hugo. Экономьте время и ресурсы, сохраняя высокое качество.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-lg border border-divider overflow-hidden">
              <CardBody className="p-0">
                <img 
                  src="images/dashboard.png" 
                  alt="Hugo Panel Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};