import { Wheat } from "lucide-react";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full py-6 bg-gold-50 dark:bg-gold-950/30 border-t border-gold-200 dark:border-gold-900">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Wheat className="h-6 w-6 text-gold-500" />
          <span className="text-xl font-bold">АГРОТРЭЙД-ЮГ</span>
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
