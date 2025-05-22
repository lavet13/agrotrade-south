import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-200 dark:border-gold-900 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm">
      <div className="container flex h-12 items-center my-2 px-4 md:px-6">
        <div className="flex gap-2 items-center">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="flex items-center p-0.5 px-2 rounded-2xl gap-2 whitespace-nowrap bg-gold-100/50 dark:bg-gold-50"
          >
            <img
              className="rounded-2xl w-[200px] mix-blend-multiply"
              src="/logo.jpg"
            />
          </Link>
          <ModeToggle className="hidden lg:flex" />
        </div>

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
          <div className="inline-flex gap-2">
            <a
              className="inline-flex items-center rounded-xl p-1 active:bg-gold-500/20 gap-1 text-gold-500 dark:text-gold-200 decoration-1 underline hover:decoration-2 underline-offset-4"
              href="https://t.me/+79785280549"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 333334 333334"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                className={
                  "self-center w-[22px] h-[22px] fill-gold-500 dark:fill-gold-200 transition-colors"
                }
              >
                <path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm80219 91205l-29735 149919s-4158 10396-15594 5404l-68410-53854s76104-68409 79222-71320c3119-2911 2079-3534 2079-3534 207-3535-5614 0-5614 0l-100846 64043-42002-14140s-6446-2288-7069-7277c-624-4992 7277-7694 7277-7694l166970-65498s13722-6030 13722 3951zm-87637 122889l-27141 24745s-2122 1609-4443 601l5197-45965 26387 20619z" />
              </svg>
            </a>
            <a
              className="inline-flex items-center rounded-xl p-1 active:bg-gold-500/20 text-gold-500 dark:text-gold-200 decoration-1 underline hover:decoration-2 underline-offset-4"
              href="https://wa.me/+79785280549"
            >
              <svg
                className={
                  "self-center w-[22px] h-[22px] fill-gold-500 dark:fill-gold-200 transition-colors"
                }
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 308 308"
                fill="none"
                stroke="currentColor"
              >
                <g id="XMLID_468_">
                  <path
                    id="XMLID_469_"
                    d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"
                  />
                  <path
                    id="XMLID_470_"
                    d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"
                  />
                </g>
              </svg>
            </a>
          </div>
          <ModeToggle className="flex lg:hidden" />
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
              className="text-sm font-medium transition-colors dark:text-gold-400 text-gold-800 hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О компании
            </Link>
            <Link
              to="."
              hash="products"
              className="text-sm font-medium transition-colors dark:text-gold-400 text-gold-800 hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Продукция
            </Link>
            <Link
              to="."
              hash="productivity"
              className="text-sm font-medium transition-colors dark:text-gold-400 text-gold-800 hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Производство
            </Link>
            <Link
              to="."
              hash="regions"
              className="text-sm font-medium transition-colors dark:text-gold-400 text-gold-800 hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              География
            </Link>
            <Link
              to="."
              hash="quality"
              className="text-sm font-medium transition-colors dark:text-gold-400 text-gold-800 hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Качество
            </Link>
            <Link
              to="."
              hash="logistics"
              className="text-sm font-medium transition-colors dark:text-gold-400 text-gold-800 hover:text-gold-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Логистика
            </Link>
            <Link
              to="."
              hash="contacts"
              className="text-sm font-medium transition-colors dark:text-gold-400 text-gold-800 hover:text-gold-500 py-2"
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
