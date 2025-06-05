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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                color="primary" 
                size="lg" 
                className="font-medium"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Начать бесплатно
              </Button>
              <Button 
                variant="bordered" 
                size="lg" 
                className="font-medium"
                startContent={<Icon icon="lucide:play" />}
              >
                Посмотреть демо
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 text-xs">ИК</div>
                <div className="w-8 h-8 rounded-full bg-success-200 flex items-center justify-center text-success-700 text-xs">АП</div>
                <div className="w-8 h-8 rounded-full bg-warning-200 flex items-center justify-center text-warning-700 text-xs">МС</div>
                <div className="w-8 h-8 rounded-full bg-danger-200 flex items-center justify-center text-danger-700 text-xs">ЕВ</div>
              </div>
              <p className="text-sm text-foreground-500">
                <span className="font-semibold">120+ компаний</span> уже используют Hugo Panel
              </p>
            </div>
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
                  src="https://img.heroui.chat/image/dashboard?w=800&h=500&u=hugo-panel-dashboard" 
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