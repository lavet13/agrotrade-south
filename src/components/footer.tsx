import { Wheat } from "lucide-react";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full py-6 border-t dark:border-gold-300 bg-white dark:bg-gold-900">
      <div className="container px-4 md:px-6 text-center">
        <div className="inline-flex p-0.5 px-2 rounded-2xl items-center justify-center bg-gold-50 gap-2 mb-4">
          <Wheat className="h-6 w-6 text-gold-800 dark:text-gold-300" />
          <span className="text-xl font-bold text-gold-800 dark:text-gold-300">АГРОТРЭЙД-ЮГ</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Надежный поставщик сельскохозяйственной продукции с многолетним опытом
          работы на рынке зерновых и масличных культур.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          © {new Date().getFullYear()} ООО «АГРОТРЭЙД - ЮГ». Все права
          защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
