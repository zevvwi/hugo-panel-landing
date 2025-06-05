import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="bg-content1 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div>
          <div>
            <div className="flex items-center mb-4">
              <Icon icon="lucide:box" className="text-primary text-2xl" />
              <span className="font-semibold text-xl ml-2">Hugo Panel</span>
            </div>
            <p className="text-foreground-600 mb-4">
              Автоматизируйте создание сайтов на Hugo и экономьте время и ресурсы вашей команды.
            </p>
          </div>
        </div>
        
        <Divider className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-500">
            &copy; {new Date().getFullYear()} Hugo Panel. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};