import { Wheat } from "lucide-react";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full py-6 border-t border-gold-800/20 dark:border-gold-300 bg-white dark:bg-gold-900">
      <div className="container px-4 md:px-6 text-center">
        <div className="inline-flex p-0.5 px-2 rounded-2xl items-center justify-center gap-2 mb-4 bg-gold-100/50 dark:bg-gold-200">
          <img className="w-[200px] mix-blend-multiply" src="/logo.jpg" />
        </div>
        <p className="text-sm text-gold-700 dark:text-gold-300">
          Надежный поставщик сельскохозяйственной продукции с многолетним опытом
          работы на рынке зерновых и масличных культур.
        </p>
        <p className="text-sm text-gold-700 dark:text-gold-300 mt-2">
          © {new Date().getFullYear()} ООО «АГРОТРЕЙД-ЮГ». Все права
          защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
