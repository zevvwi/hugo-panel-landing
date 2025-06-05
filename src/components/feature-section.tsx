import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "lucide:layout-template",
    title: "Автоматическая генерация структуры",
    description: "Создавайте структуру сайта и контент на основе Excel-файла с доменами, URL и ссылками на Google Документы."
  },
  {
    icon: "lucide:palette",
    title: "Гибкая настройка внешнего вида",
    description: "Выбирайте из предустановленных тем Hugo, настраивайте стили, загружайте логотипы и favicon."
  },
  {
    icon: "lucide:globe",
    title: "Локализация и персонализация",
    description: "Автоматически генерируйте контактные данные для нужного региона и переводите элементы интерфейса."
  },
  {
    icon: "lucide:file-text",
    title: "Обработка специфического контента",
    description: "Интеллектуально разделяйте и формируйте страницы для юридических документов и FAQ-секций."
  },
  {
    icon: "lucide:menu",
    title: "Управление навигацией",
    description: "Визуально настраивайте структуру меню сайта, включая вложенность и пункты-заглушки."
  },
  {
    icon: "lucide:package",
    title: "Готовый результат",
    description: "Скачивайте полностью сконфигурированный проект Hugo в виде ZIP-архива, готовый к развертыванию."
  }
];

export const FeatureSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="py-20 bg-content1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что делает Hugo Panel?</h2>
          <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
            Hugo Panel автоматизирует сложный процесс создания сайтов, превращая его в управляемый и масштабируемый конвейер.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-divider">
                <CardBody className="gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon icon={feature.icon} className="text-2xl text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-foreground-600">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};