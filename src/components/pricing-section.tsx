import React from "react";
import { Card, CardBody, CardHeader, Button, Divider, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Стартовый",
    price: "19 900",
    period: "в месяц",
    description: "Идеально для небольших команд и проектов",
    features: [
      "До 10 сайтов в месяц",
      "3 предустановленные темы",
      "Базовая локализация",
      "Обработка контента из Google Docs",
      "Базовая настройка меню",
      "Email-поддержка"
    ],
    isPopular: false
  },
  {
    name: "Бизнес",
    price: "49 900",
    period: "в месяц",
    description: "Для растущих компаний с активным производством контента",
    features: [
      "До 50 сайтов в месяц",
      "10 предустановленных тем",
      "Расширенная локализация",
      "Обработка контента из Google Docs и Word",
      "Расширенная настройка меню и навигации",
      "Приоритетная поддержка",
      "Обучение команды (2 часа)"
    ],
    isPopular: true
  },
  {
    name: "Корпоративный",
    price: "По запросу",
    period: "",
    description: "Для крупных компаний с высокими требованиями",
    features: [
      "Неограниченное количество сайтов",
      "Все доступные темы + кастомизация",
      "Полная локализация на любые языки",
      "Интеграция с любыми источниками контента",
      "Полная настройка под ваши процессы",
      "Выделенная линия поддержки 24/7",
      "Обучение команды (до 10 часов)",
      "Индивидуальная разработка функций"
    ],
    isPopular: false
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифные планы</h2>
          <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
            Выберите план, который подходит для ваших задач и масштабов производства сайтов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className={`w-full border ${plan.isPopular ? 'border-primary' : 'border-divider'} overflow-visible`}>
                {plan.isPopular && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <Chip color="primary" size="sm" className="font-medium">Популярный выбор</Chip>
                  </div>
                )}
                <CardHeader className="flex flex-col gap-2 pb-0">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">₽{plan.price}</span>
                    {plan.period && <span className="text-foreground-500 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-foreground-500">{plan.description}</p>
                </CardHeader>
                <CardBody className="gap-6">
                  <Divider />
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon icon="lucide:check" className="text-success mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    color={plan.isPopular ? "primary" : "default"} 
                    variant={plan.isPopular ? "solid" : "bordered"}
                    className="w-full"
                  >
                    Выбрать план
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};