import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="bg-content1 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Icon icon="lucide:box" className="text-primary text-2xl" />
              <span className="font-semibold text-xl ml-2">Hugo Panel</span>
            </div>
            <p className="text-foreground-600 mb-4">
              Автоматизируйте создание сайтов на Hugo и экономьте время и ресурсы вашей команды.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <Icon icon="lucide:facebook" className="text-xl text-foreground-500 hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Icon icon="lucide:twitter" className="text-xl text-foreground-500 hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Icon icon="lucide:linkedin" className="text-xl text-foreground-500 hover:text-primary" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Icon icon="lucide:github" className="text-xl text-foreground-500 hover:text-primary" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li><Link href="#features" color="foreground" className="text-foreground-600 hover:text-primary">Возможности</Link></li>
              <li><Link href="#workflow" color="foreground" className="text-foreground-600 hover:text-primary">Как это работает</Link></li>
              <li><Link href="#pricing" color="foreground" className="text-foreground-600 hover:text-primary">Тарифы</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Документация</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">О нас</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Блог</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Карьера</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Партнеры</Link></li>
              <li><Link href="#contact" color="foreground" className="text-foreground-600 hover:text-primary">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Центр помощи</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Обучение</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Статус сервиса</Link></li>
              <li><Link href="#faq" color="foreground" className="text-foreground-600 hover:text-primary">FAQ</Link></li>
              <li><Link href="#" color="foreground" className="text-foreground-600 hover:text-primary">Сообщество</Link></li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-500">
            &copy; {new Date().getFullYear()} Hugo Panel. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link href="#" color="foreground" className="text-sm text-foreground-500 hover:text-primary">Условия использования</Link>
            <Link href="#" color="foreground" className="text-sm text-foreground-500 hover:text-primary">Политика конфиденциальности</Link>
            <Link href="#" color="foreground" className="text-sm text-foreground-500 hover:text-primary">Правовая информация</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};