import {
  Wheat,
  Sprout,
  Bean,
  Flower2,
  Leaf,
  SunDim,
  Droplets,
  SproutIcon as Seedling,
} from "lucide-react";

export default function AgriculturalCrops() {
  return (
    <section
      id="products"
      className="w-full py-8 md:py-24"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header with refined styling */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-3 text-gold-700 dark:text-gold-300">
            Основные культуры
          </h2>
        </div>

        {/* Main content with refined card design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Grain and Legume Crops */}
          <div
            className="group relative bg-card rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            style={{ borderColor: "var(--color-gold-200)" }}
          >
            <div
              className="absolute top-0 left-0 w-2 h-full"
              style={{ backgroundColor: "var(--color-gold-500)" }}
            ></div>
            <div className="pt-8 pb-6 px-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 text-gold-600 bg-gold-100 dark:bg-gold-900/50">
                  <Wheat
                    className="h-6 w-6 text-gold-600 dark:text-gold-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gold-700 dark:text-gold-400">
                  Зерновые и зернобобовые
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 pl-2 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gold-600 bg-gold-100 dark:bg-gold-900/50">
                    <Wheat
                      className="h-4 w-4 text-gold-600 dark:text-gold-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-medium text-gold-800 dark:text-gold-200">
                    Пшеница, ячмень, горох
                  </span>
                </li>
                <li className="flex items-center gap-3 pl-2 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gold-600 bg-gold-100 dark:bg-gold-900/50">
                    <Sprout
                      className="h-4 w-4 text-gold-600 dark:text-gold-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-medium text-gold-800 dark:text-gold-200">
                    Кукуруза, соя
                  </span>
                </li>
                <li className="flex items-center gap-3 pl-2 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gold-600 bg-gold-100 dark:bg-gold-900/50">
                    <Bean
                      className="h-4 w-4 text-gold-600 dark:text-gold-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-medium text-gold-800 dark:text-gold-200">
                    Нут, чечевица
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Oil Crops */}
          <div
            className="group relative bg-card rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            style={{ borderColor: "var(--color-gold-200)" }}
          >
            <div
              className="absolute top-0 left-0 w-2 h-full"
              style={{ backgroundColor: "var(--color-gold-600)" }}
            ></div>
            <div className="pt-8 pb-6 px-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 text-gold-600 bg-gold-100 dark:bg-gold-900/50">
                  <SunDim
                    className="h-6 w-6 text-gold-600 dark:text-gold-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gold-700 dark:text-gold-400">
                  Масличные культуры
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 pl-2 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gold-600 bg-gold-100 dark:bg-gold-900/50">
                    <Flower2
                      className="h-4 w-4 text-gold-600 dark:text-gold-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-medium text-gold-800 dark:text-gold-200">
                    Подсолнечник
                  </span>
                </li>
                <li className="flex items-center gap-3 pl-2 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gold-600 bg-gold-100 dark:bg-gold-900/50">
                    <Seedling
                      className="h-4 w-4 text-gold-600 dark:text-gold-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-medium text-gold-800 dark:text-gold-200">
                    Рапс
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Lower Crops */}
          <div
            className="group relative bg-card rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            style={{ borderColor: "var(--color-gold-200)" }}
          >
            <div
              className="absolute top-0 left-0 w-2 h-full"
              style={{ backgroundColor: "var(--color-gold-700)" }}
            ></div>
            <div className="pt-8 pb-6 px-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 text-gold-600 bg-gold-100 dark:bg-gold-900/50">
                  <Leaf
                    className="h-6 w-6 text-gold-600 dark:text-gold-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gold-700 dark:text-gold-400">
                  Низшие культуры
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 pl-2 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gold-600 bg-gold-100 dark:bg-gold-900/50">
                    <Sprout
                      className="h-4 w-4 text-gold-600 dark:text-gold-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-medium text-gold-800 dark:text-gold-200">
                    Лен
                  </span>
                </li>
                <li className="flex items-center gap-3 pl-2 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gold-600 bg-gold-100 dark:bg-gold-900/50">
                    <Droplets
                      className="h-4 w-4 text-gold-600 dark:text-gold-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-medium text-gold-800 dark:text-gold-200">
                    Кориандр
                  </span>
                </li>
                <li className="flex items-center gap-3 pl-2 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gold-600 bg-gold-100 dark:bg-gold-900/50">
                    <Seedling
                      className="h-4 w-4 text-gold-600 dark:text-gold-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-medium text-gold-800 dark:text-gold-200">
                    Горчица
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
