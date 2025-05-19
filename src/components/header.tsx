import { Link } from "@tanstack/react-router";
import { Menu, Wheat, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-200 dark:border-gold-900 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm">
      <div className="container flex h-12 items-center px-4 md:px-6">
        <Link
          to="/"
          activeOptions={{ exact: true }}
          className="flex items-center dark:bg-gold-900 bg-gold-50 p-0.5 px-2 rounded-2xl gap-2 mr-6 whitespace-nowrap"
        >
          <Wheat className="h-6 w-6 dark:text-gold-300 text-gold-800" />
          <span className="text-lg text-gold-800 dark:text-gold-300 font-bold tracking-tight">АГРОТРЕЙД-ЮГ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-6">
          <Link
            to="."
            hash="company"
            className="whitespace-nowrap text-sm font-medium transition-colors hover:text-gold-500"
          >
            О компании
          </Link>
          <Link
            to="."
            hash="products"
            className="text-sm font-medium transition-colors hover:text-gold-500"
          >
            Продукция
          </Link>
          <Link
            to="."
            hash="productivity"
            className="text-sm font-medium transition-colors hover:text-gold-500"
          >
            Производство
          </Link>
          <Link
            to="."
            hash="regions"
            className="text-sm font-medium transition-colors hover:text-gold-500"
          >
            География
          </Link>
          <Link
            to="."
            hash="quality"
            className="text-sm font-medium transition-colors hover:text-gold-500"
          >
            Качество
          </Link>
          <Link
            to="."
            hash="logistics"
            className="text-sm font-medium transition-colors hover:text-gold-500"
          >
            Логистика
          </Link>
          <Link
            to="."
            hash="contacts"
            className="text-sm font-medium transition-colors hover:text-gold-500"
          >
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <ModeToggle />
          <Button
            variant="outline"
            className="size-8 border-gold-200 dark:border-gold-800 text-gold-600 hover:text-gold-700 dark:text-gold-400 hover:bg-gold-100 dark:hover:bg-gold-900/50 lg:hidden"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden container px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            <Link
              to="."
              hash="company"
              className="text-sm font-medium transition-colors hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О компании
            </Link>
            <Link
              to="."
              hash="products"
              className="text-sm font-medium transition-colors hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Продукция
            </Link>
            <Link
              to="."
              hash="productivity"
              className="text-sm font-medium transition-colors hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Производство
            </Link>
            <Link
              to="."
              hash="regions"
              className="text-sm font-medium transition-colors hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              География
            </Link>
            <Link
              to="."
              hash="quality"
              className="text-sm font-medium transition-colors hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Качество
            </Link>
            <Link
              to="."
              hash="logistics"
              className="text-sm font-medium transition-colors hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Логистика
            </Link>
            <Link
              to="."
              hash="contacts"
              className="text-sm font-medium transition-colors hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
