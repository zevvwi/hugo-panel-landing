import React from "react";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-content1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Какую проблему решает Hugo Panel?</h2>
          <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
            Hugo Panel устраняет неэффективность и высокие затраты при ручном создании множества сайтов или страниц.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border border-danger-200">
              <CardHeader className="flex gap-3">
                <Icon icon="lucide:x-circle" className="text-2xl text-danger" />
                <h3 className="text-xl font-semibold">Традиционный процесс</h3>
              </CardHeader>
              <Divider />
              <CardBody>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-danger-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-danger font-medium text-sm">1</span>
                    </div>
                    <p>Контент-менеджер готовит ТЗ</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-danger-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-danger font-medium text-sm">2</span>
                    </div>
                    <p>Копирайтер пишет текст в Google Docs</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-danger-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-danger font-medium text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Верстальщик вручную:</p>
                      <ul className="space-y-2 pl-4">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:minus" className="text-danger" />
                          <p>Создает структуру папок и файлов Hugo</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:minus" className="text-danger" />
                          <p>Копирует текст из Google Docs</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:minus" className="text-danger" />
                          <p>Форматирует его в Markdown</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:minus" className="text-danger" />
                          <p>Скачивает и размещает изображения</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:minus" className="text-danger" />
                          <p>Прописывает метаданные для страниц</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:minus" className="text-danger" />
                          <p>Конфигурирует hugo.toml</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:minus" className="text-danger" />
                          <p>Создает страницы для EEAT, FAQ</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:minus" className="text-danger" />
                          <p>Настраивает меню</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 p-3 bg-danger-50 rounded-lg">
                  <p className="text-danger-700 font-medium">Этот процесс повторяется для КАЖДОЙ страницы и КАЖДОГО сайта.</p>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border border-success-200">
              <CardHeader className="flex gap-3">
                <Icon icon="lucide:check-circle" className="text-2xl text-success" />
                <h3 className="text-xl font-semibold">С Hugo Panel</h3>
              </CardHeader>
              <Divider />
              <CardBody>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-success font-medium text-sm">1</span>
                    </div>
                    <p>Контент-менеджер готовит ТЗ</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-success font-medium text-sm">2</span>
                    </div>
                    <p>Копирайтер пишет текст в Google Docs</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-success font-medium text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Менеджер с Hugo Panel:</p>
                      <ul className="space-y-2 pl-4">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-success" />
                          <p>Загружает Excel с данными</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-success" />
                          <p>Выбирает тему и настройки</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-success" />
                          <p>Настраивает меню через интерфейс</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-success" />
                          <p>Редактирует FAQ (опционально)</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-success" />
                          <p>Скачивает готовый ZIP-архив</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 p-3 bg-success-50 rounded-lg">
                  <p className="text-success-700 font-medium">Hugo Panel автоматизирует 80-90% рутинной работы!</p>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};