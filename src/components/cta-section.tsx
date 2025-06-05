import React from "react";
import { Card, CardBody, Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const CtaSection = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы оптимизировать создание сайтов?</h2>
              <p className="text-lg text-foreground-600 mb-8">
                Свяжитесь с нами, чтобы узнать больше о Hugo Panel и как он может помочь вашей компании экономить время и ресурсы при создании сайтов.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon icon="lucide:mail" className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-foreground-600">info@hugopanel.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon icon="lucide:phone" className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Телефон</h3>
                    <p className="text-foreground-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon icon="lucide:map-pin" className="text-xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Адрес</h3>
                    <p className="text-foreground-600">Москва, ул. Тверская, 1, офис 42</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border border-divider">
                <CardBody className="gap-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <div className="w-16 h-16 rounded-full bg-success-100 flex items-center justify-center mb-4">
                        <Icon icon="lucide:check" className="text-3xl text-success" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Сообщение отправлено!</h3>
                      <p className="text-center text-foreground-600">
                        Спасибо за ваш интерес к Hugo Panel. Мы свяжемся с вами в ближайшее время.
                      </p>
                      <Button 
                        color="primary" 
                        variant="flat" 
                        className="mt-6"
                        onPress={() => setIsSubmitted(false)}
                      >
                        Отправить еще сообщение
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="text-xl font-semibold">Свяжитесь с нами</h3>
                      
                      <Input
                        label="Имя"
                        placeholder="Введите ваше имя"
                        value={name}
                        onValueChange={setName}
                        isRequired
                      />
                      
                      <Input
                        label="Email"
                        placeholder="Введите ваш email"
                        type="email"
                        value={email}
                        onValueChange={setEmail}
                        isRequired
                      />
                      
                      <Input
                        label="Компания"
                        placeholder="Название вашей компании"
                        value={company}
                        onValueChange={setCompany}
                      />
                      
                      <Textarea
                        label="Сообщение"
                        placeholder="Расскажите о ваших потребностях"
                        value={message}
                        onValueChange={setMessage}
                        isRequired
                        minRows={4}
                      />
                      
                      <Button 
                        type="submit" 
                        color="primary" 
                        className="w-full"
                        isLoading={isSubmitting}
                      >
                        Отправить сообщение
                      </Button>
                    </form>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};