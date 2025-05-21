import AgriculturalCrops from "@/components/agricultural-crops";
import CropProductionChart from "@/components/crop-production-chart";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building,
  Mail,
  MapPin,
  Phone,
  Ship,
  Truck,
  Wheat,
} from "lucide-react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  // Data for regional production volumes (in million tons)
  const regionalData = [
    { name: "Республика Крым", value: 1.4, label: "1.4" },
    { name: "Херсонская область", value: 1.6, label: "1.6" },
    { name: "Запорожская область", value: 1.7, label: "1.7" },
    { name: "ЛНР и ДНР", value: 0.82, label: "820" },
  ];

  return (
    <>
      {/* Hero Section with Floating Icons */}
      <section className="flex flex-col w-full min-h-[400px] sm:min-h-[calc(100vh-3.5rem)] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-section.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <img
              src="/agrotrade-south-logo.webp"
              alt="Agricultural fields"
              className="z-10 w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/40 via-gold-500/30 via-70% to-background dark:to-background"></div>
        </div>
        <div className="container flex flex-col justify-center sm:justify-start sm:mt-32 flex-1 px-2 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 mb-4 bg-gold-50/20 px-2 sm:px-10 rounded-xl">
                <Wheat className="h-8 w-8 min-w-8 min-h-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-white" />
                <h1 className="whitespace-nowrap text-4xl xs:text-5xl font-bold leading-normal tracking-tighter sm:text-6xl md:text-6xl lg:text-8xl text-white">
                  АГРОТРЕЙД-ЮГ
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О компании */}
      <section
        id="company"
        className="w-full py-12 md:py-16"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-center gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 animate-hidden">
              <div className="col-span-full flex flex-col items-center justify-end space-y-4 text-center mb-8 animate-hidden">
                <h2 className="text-center pr-5 text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-gold-700 dark:text-gold-300">
                  О компании
                </h2>
              </div>
              <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
                <div className="flex items-center gap-2 mb-4">
                  <div className="self-start p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                    <Building className="min-w-5 min-h-5 h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gold-700 dark:text-gold-300">
                      Опыт работы
                    </h3>
                    <p className="text-gold-800 dark:text-gold-100">
                      Компания на рынке более 10 лет
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
                <div className="flex items-center gap-2 mb-4">
                  <div className="self-start p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                    <Wheat className="min-w-5 min-h-5 h-5 w-5 text-gold-600 dark:text-gold-300" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gold-700 dark:text-gold-300">
                      Аккредитация
                    </h3>
                    <p className="text-gold-800 dark:text-gold-100">
                      Аккредитованы у крупнейших экспортеров ЮФО
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="col-span-full p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 self-start rounded-full bg-gold-100 dark:bg-gold-900/50">
                    <MapPin className="min-w-5 min-h-5 h-5 w-5 text-gold-600 dark:text-gold-300" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gold-700 dark:text-gold-300">
                      География
                    </h3>
                    <p className="text-gold-800 dark:text-gold-100">
                      Работаем в Крыму, Херсонской и Запорожской областях, ЛНР и
                      ДНР
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <img
              className="aspect-video lg:aspect-auto sepia rounded-xl w-full h-full lg:max-w-[300px] xl:max-w-[400px] object-cover"
              src="/office.png"
            />
          </div>
        </div>
      </section>

      <section
        id="productivity"
        className="w-full py-8 md:py-24"
      >
        <div className="container px-2 md:px-6">
          {/* Production Chart Using Shadcn/UI Component */}
          <div className="mt-4 animate-hidden">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-gold-700 dark:text-gold-300">
                Объемы производства с/х продукции
              </h2>
            </div>
            <ChartContainer
              config={{}}
              className="min-h-[400px] max-h-[550px] w-full"
            >
              <BarChart
                data={regionalData}
                margin={{ top: 20, right: 30, left: 40, bottom: 70 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  angle={0}
                  className="[&_tspan]:fill-gold-800 dark:[&_tspan]:fill-gold-200"
                  height={70}
                  tick={{ fontSize: 14, fontWeight: 700 }}
                />
                <YAxis
                  tickFormatter={(value) => `${value}`}
                  label={{
                    angle: -90,
                    position: "left",
                    style: {
                      textAnchor: "middle",
                    },
                  }}
                />
                <Tooltip
                  formatter={(value) => [`${value}`, "Объем"]}
                  labelStyle={{ fontWeight: "bold", color: 'var(--color-gold-800)' }}
                  contentStyle={{
                    backgroundColor: "var(--color-gold-50)",
                    borderColor: "var(--color-gold-300)",
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="var(--color-gold-600)"
                  name="Объем производства"
                />
              </BarChart>
            </ChartContainer>
          </div>

          <div className="mt-4 animate-hidden">
            <div className="flex flex-col gap-3 justify-center">
              <h3 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-gold-700 dark:text-gold-300">
                Производство в Херсонской области
              </h3>
            </div>
            <CropProductionChart />
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section
        id="regions"
        className="w-full py-8 md:py-24"
      >
        <div className="container px-2 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-gold-700 dark:text-gold-300">
              Территории сотрудничества
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-hidden">
            <Card className="py-0 overflow-hidden border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div
                className="sepia h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/map-crimea.png')",
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gold-600 dark:text-gold-400">
                  Республика Крым
                </h3>
                <p className="text-gold-800 dark:text-gold-200">
                  1,4 миллиона тонн зерновых культур
                </p>
              </div>
            </Card>

            <Card className="py-0 overflow-hidden border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div
                className="sepia h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/kherson_zaporoj.jpg')",
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gold-600 dark:text-gold-400">
                  Херсонская и Запорожская области
                </h3>
                <p className="text-gold-800 dark:text-gold-200">
                  Херсон: 1,6 млн тонн, Запорожье: 1,7 млн тонн
                </p>
              </div>
            </Card>

            <Card className="py-0 overflow-hidden border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div
                className="h-48 sepia bg-cover bg-center"
                style={{
                  backgroundImage: "url('/DPR_LPR.jpg')",
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gold-600 dark:text-gold-400">
                  ДНР и ЛНР
                </h3>
                <p className="text-gold-800 dark:text-gold-200">
                  820 тысяч тонн зерновых культур
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <AgriculturalCrops />

      {/* Quality Parameters Section */}
      <section
        id="quality"
        className="w-full py-8 md:py-24"
      >
        <div className="container px-2 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-700 dark:text-gold-300">
              Параметры качества культур
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mb-8 gap-0 lg:gap-8 animate-hidden">
            <div
              className="sepia-50 bg-cover bg-center rounded-b-none rounded-lg lg:rounded-lg overflow-hidden h-full lg:h-full aspect-video w-full"
              style={{
                backgroundImage: "url('/process-1.jpg')",
              }}
            ></div>

            <Card className="py-0 rounded-t-none lg:rounded-t-xl gap-0 border-gold-200 dark:border-gold-900 shadow-gold-md overflow-hidden">
              <div className="border-b bg-gold-100 dark:bg-gold-900/50 p-4">
                <h3 className="text-center lg:text-start font-bold text-gold-600 dark:text-gold-400">
                  Параметры качества зерновых и зернобобовых культур
                </h3>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[120px]">Культура</TableHead>
                      <TableHead className="min-w-[120px]">
                        Влажность, %
                      </TableHead>
                      <TableHead className="min-w-[120px]">Сор, %</TableHead>
                      <TableHead className="min-w-[150px]">
                        Примеси, %
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="[&_td]:not-first:text-gold-800 dark:[&_td]:not-first:text-gold-100">
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">Пшеница</TableCell>
                      <TableCell>до 14</TableCell>
                      <TableCell>0,5 - 4</TableCell>
                      <TableCell>клоп 0,5 - 15, зерновая 1 - 8</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">Ячмень</TableCell>
                      <TableCell>до 13</TableCell>
                      <TableCell>0,5 - 4</TableCell>
                      <TableCell>до 5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">Горох</TableCell>
                      <TableCell>9 - 14</TableCell>
                      <TableCell>0,8 - 2</TableCell>
                      <TableCell>
                        другого цвета 0,5 - 3, измельченные до 6
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">Кукуруза</TableCell>
                      <TableCell>до 14</TableCell>
                      <TableCell>0,5 - 2</TableCell>
                      <TableCell>2 - 5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">Соя</TableCell>
                      <TableCell>до 12</TableCell>
                      <TableCell>0,5 - 2</TableCell>
                      <TableCell>масленичная 2 - 6, ГМО/не ГМО</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">Нут</TableCell>
                      <TableCell>10 - 13,5</TableCell>
                      <TableCell>0,5 - 2</TableCell>
                      <TableCell>до 5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">Чечевица</TableCell>
                      <TableCell>12 - 14</TableCell>
                      <TableCell>0,5 - 4</TableCell>
                      <TableCell>до 5</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0 lg:gap-8 mb-8 animate-hidden">
            <div
              className="sepia-50 aspect-video bg-cover bg-center rounded-b-none rounded-lg lg:rounded-lg overflow-hidden w-full h-[200px]"
              style={{
                backgroundImage: "url('/process-2.jpg')",
              }}
            ></div>

            <Card className="py-0 rounded-t-none lg:rounded-t-xl gap-0 border-gold-200 dark:border-gold-900 shadow-gold-md overflow-hidden">
              <div className="border-b bg-gold-100 dark:bg-gold-900/50 p-4">
                <h3 className="text-center lg:text-start font-bold text-gold-600 dark:text-gold-400">
                  Параметры качества масличных культур
                </h3>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[120px]">Культура</TableHead>
                      <TableHead className="min-w-[120px]">
                        Влажность, %
                      </TableHead>
                      <TableHead className="min-w-[120px]">Сор, %</TableHead>
                      <TableHead className="min-w-[150px]">
                        Массовая доля масла, %
                      </TableHead>
                      <TableHead className="min-w-[150px]">ГМО</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="[&_td]:not-first:text-gold-800 dark:[&_td]:not-first:text-gold-100">
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">
                        Подсолнечник
                      </TableCell>
                      <TableCell>5 - 8</TableCell>
                      <TableCell>1 - 7</TableCell>
                      <TableCell>42 - 51</TableCell>
                      <TableCell>Не указано</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">Рапс</TableCell>
                      <TableCell>5 - 8</TableCell>
                      <TableCell>0,5 - 4</TableCell>
                      <TableCell>40 - 46</TableCell>
                      <TableCell>ГМО и не ГМО</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0 lg:gap-8 animate-hidden">
            <div
              className="bg-cover bg-center rounded-b-none rounded-lg lg:rounded-lg overflow-hidden w-full aspect-video h-[256px]"
              style={{
                backgroundImage: "url('/process-3.jpg')",
              }}
            ></div>

            <Card className="py-0 rounded-t-none lg:rounded-t-xl gap-0 border-gold-200 dark:border-gold-900 shadow-gold-md overflow-hidden">
              <div className="border-b bg-gold-100 dark:bg-gold-900/50 p-4">
                <h3 className="text-center lg:text-start font-bold text-gold-600 dark:text-gold-400">
                  Параметры качества низших культур
                </h3>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[120px]">Культура</TableHead>
                      <TableHead className="min-w-[120px]">
                        Влажность, %
                      </TableHead>
                      <TableHead className="min-w-[120px]">Сор, %</TableHead>
                      <TableHead className="min-w-[150px]">
                        Зерновая примесь, %
                      </TableHead>
                      <TableHead className="min-w-[120px]">Масло, %</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="[&_td]:not-first:text-gold-800 dark:[&_td]:not-first:text-gold-100">
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">Лён</TableCell>
                      <TableCell>6 - 9</TableCell>
                      <TableCell>0,5 - 7</TableCell>
                      <TableCell>2 - 5</TableCell>
                      <TableCell>32 - 42</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">Кориандр</TableCell>
                      <TableCell>5 - 8</TableCell>
                      <TableCell>2 - 9</TableCell>
                      <TableCell>2 - 7</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-gold-700 dark:text-gold-300">Горчица</TableCell>
                      <TableCell>5 - 8,5</TableCell>
                      <TableCell>0,1 - 4</TableCell>
                      <TableCell>1,5 - 5</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Логистические возможности Section - Pyramid Style */}
      <section
        id="logistics"
        className="w-full py-8 md:py-24"
      >
        <div className="container px-2 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-700 dark:text-gold-300">
              Логистические возможности
            </h2>
          </div>

          {/* Pyramid Structure */}
          <div className="flex flex-col items-center animate-hidden">
            <div className="w-full max-w-3xl">
              {/* Top of Pyramid */}
              <div className="flex justify-center mb-4">
                <div className="w-1/2 p-6 bg-gold-600 text-white rounded-lg text-center shadow-lg">
                  <Ship className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-bold">Порт Мариуполь</h3>
                  <p className="text-sm mt-2">
                    Глубоководный порт для экспорта - один из самых
                    перспективных и глубоководных портов среди новых
                    присоединенных территорий.
                  </p>
                </div>
              </div>

              {/* Middle of Pyramid */}
              <div className="flex justify-center mb-4">
                <div className="w-3/4 p-6 bg-gold-600 text-white rounded-lg text-center shadow-lg">
                  <Truck className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-bold">Автомобильные перевозки</h3>
                  <p className="text-sm mt-2">
                    Доставка автотранспортом во всем регионам присутствия
                  </p>
                </div>
              </div>

              {/* Bottom of Pyramid */}
              <div className="flex justify-center">
                <div className="w-full p-6 bg-gold-600 text-white rounded-lg text-center shadow-lg">
                  <Building className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-bold">Складские комплексы</h3>
                  <p className="text-sm mt-2">Хранение и отгрузка</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacts"
        className="w-full py-8 md:py-24"
      >
        <div className="container px-2 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-700 dark:text-gold-300">
              Контактные данные «АГРОТРЕЙД - ЮГ»
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-hidden">
            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <h3 className="text-xl font-bold mb-4 text-gold-600 dark:text-gold-400">
                Адрес
              </h3>
              <div className="flex items-start gap-4">
                <MapPin className="min-w-5 min-h-5 h-5 w-5 text-gold-600 dark:text-gold-400 mt-0.5" />
                <p className="text-gold-800 dark:text-gold-200">
                  Республика Крым, р-н Джанкойский, с.Днепровка, ул.
                  Житомирская, д.72
                </p>
              </div>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <h3 className="text-xl font-bold mb-4 text-gold-600 dark:text-gold-400">
                Регистрационные данные
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="font-semibold text-gold-700 dark:text-gold-300">ОГРН</p>
                  <p className="text-gold-800 dark:text-gold-200">
                    1159102102500
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gold-700 dark:text-gold-300">ИНН</p>
                  <p className="text-gold-800 dark:text-gold-200">9105013878</p>
                </div>
                <div>
                  <p className="font-semibold text-gold-700 dark:text-gold-300">КПП</p>
                  <p className="text-gold-800 dark:text-gold-200">910501001</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <h3 className="text-xl font-bold mb-4 text-gold-600 dark:text-gold-400">
                Контакты руководства
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="min-h-5 min-w-5 h-5 w-5 text-gold-600 dark:text-gold-400 mt-0.5" />
                  <div>
                    <p className="text-gold-800 dark:text-gold-200">
                      Генеральный директор: <a className="text-gold-600 dark:text-gold-200 decoration-1 underline hover:decoration-2 underline-offset-4" href="tel:+79780630610">+7(978) 063-06-10</a>, Бессмертный Виктор
                      Викторович
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="min-w-5 min-h-5 h-5 w-5 text-gold-600 dark:text-gold-400 mt-0.5" />
                  <div>
                    <p className="text-gold-800 dark:text-gold-200">
                      Первый заместитель: <a className="text-gold-600 dark:text-gold-200 decoration-1 underline hover:decoration-2 underline-offset-4" href="tel:+79784661456">+7(978) 466-14-56</a>, Антонова Юлия
                      Александровна
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <h3 className="text-xl font-bold mb-4 text-gold-600 dark:text-gold-400">
                Электронная почта
              </h3>
              <div className="flex items-start gap-4">
                <Mail className="min-w-5 min-h-5 h-5 w-5 text-gold-600 dark:text-gold-400 mt-0.5" />
                <a href="mailto:zerno_ru@bk.ru" className="text-gold-600 dark:text-gold-200 decoration-1 underline hover:decoration-2 underline-offset-4">
                  zerno_ru@bk.ru
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
