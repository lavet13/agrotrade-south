import {
  Wheat,
  Droplets,
  Sun,
  Sprout,
  FlaskConical,
  Leaf,
  Flower2,
  Pipette,
  Scale,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AgriculturalCrops() {
  return (
    <section
      id="products"
      className="w-full py-8 md:py-24 bg-white dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
            Основные культуры
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {/* Grain and Legume Crops */}
          <Card className="py-0 overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
            <CardHeader className="bg-[#a47b29] text-white pb-4">
              <div className="flex items-center gap-2">
                <Wheat className="h-6 w-6" />
                <CardTitle className="font-bold">
                  Зерновые и зернобобовые культуры
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7f1e1] text-[#7a5c1f]">
                    <Sprout className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gold-300">
                      Пшеница, ячмень, горох
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Основные зерновые культуры
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7f1e1] text-[#7a5c1f]">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gold-300">
                      Кукуруза, соя
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Высокопродуктивные культуры
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7f1e1] text-[#7a5c1f]">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gold-300">
                      Нут, чечевица
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Контроль влажности и примесей
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium text-gray-800 dark:text-gold-300">
                Пшеница, ячмень, горох, кукуруза, соя, нут, чечевица с
                тщательным контролем влажности и уровня примесей.
              </p>
            </CardContent>
          </Card>

          {/* Oil Crops */}
          <Card className="py-0 overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
            <CardHeader className="bg-[#ce9e33] text-white pb-4">
              <div className="flex items-center gap-2">
                <Sun className="h-6 w-6" />
                <CardTitle className="font-bold">Масличные культуры</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efe4c3] text-[#a47b29]">
                    <Flower2 className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gold-300">
                      Подсолнечник
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Высокое содержание масла
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efe4c3] text-[#a47b29]">
                    <Sprout className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gold-300">
                      Рапс
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Гарантированная сортовая чистота
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efe4c3] text-[#a47b29]">
                    <FlaskConical className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gold-300">
                      ГМО и не ГМО варианты
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Различные варианты культур
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium text-gray-800 dark:text-gold-300">
                Подсолнечник и рапс с высоким содержанием масла и
                гарантированной сортовой чистотой, включая как ГМО, так и не ГМО
                варианты.
              </p>
            </CardContent>
          </Card>

          {/* Lower Crops */}
          <Card className="py-0 overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
            <CardHeader className="bg-[#7a5c1f] text-white pb-4">
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6" />
                <CardTitle className="font-bold">Низшие культуры</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fbf8f0] text-[#7a5c1f]">
                    <Sprout className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gold-300">
                      Лен
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Нормированные показатели
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fbf8f0] text-[#7a5c1f]">
                    <Pipette className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gold-300">
                      Кориандр
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Контроль качества
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fbf8f0] text-[#7a5c1f]">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gold-300">
                      Горчица
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Контроль влажности и примесей
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium text-gray-800 dark:text-gold-300">
                Лен, кориандр, горчица с нормированными показателями влажности и
                уровня примесей.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center animate-hidden">
          <p className="text-primary-foreground dark:text-gray-300 font-bold max-w-3xl mx-auto">
            Особое внимание уделяется качеству:
            <br /> строго контролируются влажность, сор, содержание масла и
            зерновые примеси.
          </p>
        </div>
      </div>
    </section>
  );
}
