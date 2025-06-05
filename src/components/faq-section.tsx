import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "Какие технические требования для использования Hugo Panel?",
    answer: "Hugo Panel работает в облаке, поэтому вам нужен только современный браузер и стабильное интернет-соединение. Никаких установок на ваш компьютер не требуется. Для доступа к Google Docs потребуется аккаунт Google с соответствующими разрешениями."
  },
  {
    question: "Могу ли я использовать свои собственные темы Hugo?",
    answer: "Да, Hugo Panel поддерживает загрузку и использование пользовательских тем. Вы можете загрузить свою тему в формате ZIP, и система интегрирует ее в процесс создания сайтов. Для корпоративных клиентов мы также предлагаем услуги по адаптации существующих тем под ваши потребности."
  },
  {
    question: "Как происходит интеграция с Google Docs?",
    answer: "Hugo Panel использует безопасную авторизацию OAuth2 для доступа к вашим документам. После предоставления разрешения система может извлекать контент из указанных в Excel-файле документов, сохраняя форматирование и структуру. Мы не храним ваши документы на наших серверах — только обрабатываем их для конвертации в Markdown."
  },
  {
    question: "Поддерживает ли система многоязычные сайты?",
    answer: "Да, Hugo Panel полностью поддерживает многоязычные сайты. Вы можете указать основной язык сайта и дополнительные языки. Система автоматически создаст необходимую структуру файлов и конфигурацию для многоязычности в Hugo. Для перевода интерфейсных элементов используется интеграция с Google Gemini."
  },
  {
    question: "Как обрабатываются изображения?",
    answer: "Изображения могут быть указаны в Excel-файле как URL или как ссылки на изображения внутри Google Docs. Hugo Panel автоматически загружает их, оптимизирует (сжатие, изменение размера при необходимости) и включает в структуру проекта Hugo с правильными путями в Markdown-файлах."
  },
  {
    question: "Можно ли экспортировать только часть проекта?",
    answer: "Да, Hugo Panel позволяет выборочно экспортировать компоненты проекта. Вы можете экспортировать только контент, только конфигурацию или только определенные страницы. Это особенно полезно при обновлении существующих сайтов или при работе с большими проектами."
  }
];

export const FaqSection = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["0"]));

  return (
    <section id="faq" className="py-20 bg-content1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
            Ответы на популярные вопросы о Hugo Panel и его возможностях.
          </p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion 
            selectedKeys={selectedKeys} 
            onSelectionChange={setSelectedKeys}
            variant="bordered"
            className="bg-background"
          >
            {faqItems.map((item, index) => (
              <AccordionItem key={index.toString()} title={item.question}>
                <p className="text-foreground-600">{item.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};