import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: "lucide:clock",
    title: "Многократное ускорение процесса",
    description: "То, что раньше занимало дни или недели, теперь может быть сделано за часы или даже минуты."
  },
  {
    icon: "lucide:layers",
    title: "Масштабирование производства",
    description: "Легко создавайте десятки и сотни сайтов без пропорционального увеличения команды."
  },
  {
    icon: "lucide:wallet",
    title: "Снижение затрат на разработку",
    description: "Уменьшается потребность в ручном труде верстальщиков и Hugo-специалистов для стандартных операций."
  },
  {
    icon: "lucide:shield-check",
    title: "Уменьшение количества ошибок",
    description: "Автоматизация снижает влияние человеческого фактора и обеспечивает стабильное качество."
  },
  {
    icon: "lucide:layout-grid",
    title: "Стандартизация результата",
    description: "Все сайты или страницы создаются по единому, контролируемому процессу с гарантированным качеством."
  },
  {
    icon: "lucide:users",
    title: "Оптимизация команды",
    description: "Высвобождение времени специалистов для более сложных и творческих задач вместо рутинной работы."
  }
];

export const BenefitsSection = () => {
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
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ключевые преимущества</h2>
          <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
            Hugo Panel — это стратегическое вложение в эффективность вашего контентного производства и веб-разработки.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-divider">
                <CardBody className="gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon icon={benefit.icon} className="text-2xl text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-foreground-600">{benefit.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};