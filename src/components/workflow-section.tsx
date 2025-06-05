import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const workflowSteps = [
  {
    icon: "lucide:upload",
    title: "Загрузка и анализ",
    description: "Загрузите Excel-файл с данными о доменах и страницах. Система проанализирует его и извлечет необходимую информацию."
  },
  {
    icon: "lucide:settings",
    title: "Выбор и конфигурация",
    description: "Выберите домен и тему Hugo. Настройте ключевые параметры сайта: язык, заголовок, логотипы, стиль и другие опции."
  },
  {
    icon: "lucide:file-text",
    title: "Обработка контента",
    description: "Система подключается к Google Docs, извлекает тексты, конвертирует их в Markdown и обрабатывает связанные изображения."
  },
  {
    icon: "lucide:edit",
    title: "Дополнительные штрихи",
    description: "Добавьте или отредактируйте FAQ для каждой страницы и настройте структуру навигационного меню по вашему усмотрению."
  },
  {
    icon: "lucide:package",
    title: "Сборка и отдача",
    description: "Все данные, конфигурации и контент собираются в готовую структуру проекта Hugo, который вы скачиваете одним архивом."
  }
];

export const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
          <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
            Hugo Panel работает как пошаговый веб-мастер, проводя вас через весь процесс создания сайта.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workflowSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="mb-8 border border-divider">
                <CardBody className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                      <Icon icon={step.icon} className="text-3xl text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-foreground-600">{step.description}</p>
                  </div>
                </CardBody>
              </Card>
              {index < workflowSteps.length - 1 && (
                <div className="flex justify-center my-4">
                  <Icon icon="lucide:arrow-down" className="text-2xl text-foreground-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};