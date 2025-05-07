import { Badge } from "@/components/ui/badge";
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
import { createFileRoute } from "@tanstack/react-router";
import {
  Building,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Ship,
  Sprout,
  Sun,
  Tractor,
  Truck,
  Wheat,
  BarChart as BarChartIcon,
} from "lucide-react";
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from "recharts";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  // Data for regional production volumes (in million tons)
  const regionalData = [
    { name: "Республика Крым", value: 1.4, label: "1.4 млн. тонн" },
    { name: "Херсонская область", value: 1.6, label: "1.6 млн. тонн" },
    { name: "Запорожская область", value: 1.7, label: "1.7 млн. тонн" },
    { name: "ЛНР и ДНР", value: 0.82, label: "820 тыс. тонн" },
  ];

  // Data for Kherson region crop production (in tons)
  const khersonCropsData = [
    { name: "Пшеница", value: 1015787, label: "1,015,787" },
    { name: "Ячмень", value: 261810, label: "261,810" },
    { name: "Подсолнечник", value: 251742, label: "251,742" },
    { name: "Рапс", value: 49016, label: "49,016" },
    { name: "Горох", value: 23992, label: "23,992" },
  ];

  // Custom formatter for Y axis values (in millions)
  const formatYAxis = (value: any, index: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)} млн.`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)} тыс.`;
    return value;
  };

  return (
    <>
      {/* Hero Section with Floating Icons */}
      <section className="w-full py-8 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-gradient-to-b from-gold-50 to-white dark:from-gray-950 dark:to-gray-900">
        {/* Floating Icons Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="hidden sm:block absolute left-1/3 bottom-2 animate-[float_8s_ease-in-out_infinite]">
            <Wheat className="h-16 w-16 text-gold-500/70" />
          </div>
          <div className="hidden sm:block absolute right-1/3 bottom-1 animate-[float_10s_ease-in-out_infinite_1s]">
            <Tractor className="h-20 w-20 text-gold-400/60" />
          </div>
          <div className="hidden sm:block absolute bottom-1 left-1/8 animate-[float_13s_ease-in-out_infinite_0.7s]">
            <Sprout className="h-16 w-16 text-gold-500/60" />
          </div>
        </div>

        <div className="container px-2 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-hidden">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Wheat className="h-8 w-8 sm:h-12 sm:w-12 text-gold-500" />
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text">
                  АГРОТРЭЙД-ЮГ
                </h1>
              </div>
              <p className="text-xl md:text-2xl font-semibold text-gold-600 dark:text-gold-400">
                Солнечная сельскохозяйственная продукция
              </p>
              <div className="flex justify-center mt-4">
                <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900 text-sm">
                  10+ лет на рынке
                </Badge>
              </div>
              <p className="max-w-[800px] mx-auto mt-6 text-gray-600 dark:text-gray-300 md:text-xl">
                Надежный поставщик сельскохозяйственной продукции с многолетним
                опытом работы на рынке зерновых и масличных культур
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8 animate-hidden">
              <Card className="p-4 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                    <Building className="h-5 w-5 text-gold-500" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">10+ лет</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      опыта работы на рынке
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                    <Wheat className="h-5 w-5 text-gold-500" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Аккредитация</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      у крупнейших экспортеров СНГ
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                    <MapPin className="h-5 w-5 text-gold-500" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">География</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Крым, Херсон, Запорожье, ДНР и ЛНР
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section
        id="regions"
        className="w-full py-8 md:py-24 bg-gradient-to-b from-white to-gold-50/50 dark:from-gray-900 dark:to-gold-950/30"
      >
        <div className="container px-2 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
              Территории сотрудничества
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
              География работы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-hidden">
            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="h-full flex flex-col gap-y-4">
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Республика Крым
                </h3>
                <div className="h-1 w-20 bg-gold-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">
                  1,4 миллиона тонн зерновых культур
                </p>
                <div className="mt-auto p-4 bg-gradient-to-br from-gold-100 to-gold-50 dark:from-gold-900/40 dark:to-gold-900/20 rounded-lg">
                  <p className="text-sm text-gold-700 dark:text-gold-300 font-medium">
                    Основные культуры: пшеница, ячмень, подсолнечник
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="h-full flex flex-col gap-y-4">
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Херсонская и Запорожская области
                </h3>
                <div className="h-1 w-20 bg-gold-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">
                  Херсон: 1,6 млн тонн, Запорожье: 1,7 млн тонн
                </p>
                <div className="mt-auto p-4 bg-gradient-to-br from-gold-100 to-gold-50 dark:from-gold-900/40 dark:to-gold-900/20 rounded-lg">
                  <p className="text-sm text-gold-700 dark:text-gold-300 font-medium">
                    Основные культуры: пшеница, рапс, подсолнечник
                  </p>
                </div>
              </div>
            </Card>

            <Card className="md:col-span-full lg:col-span-1 p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="h-full flex flex-col gap-y-4">
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  ДНР и ЛНР
                </h3>
                <div className="h-1 w-20 bg-gold-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">
                  820 тысяч тонн зерновых культур
                </p>
                <div className="mt-auto p-4 bg-gradient-to-br from-gold-100 to-gold-50 dark:from-gold-900/40 dark:to-gold-900/20 rounded-lg">
                  <p className="text-sm text-gold-700 dark:text-gold-300 font-medium">
                    Основные культуры: пшеница, ячмень, кукуруза
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Production Chart Using Shadcn/UI Component */}
          <div className="mt-16 animate-hidden">
            <div className="flex flex-col gap-3 justify-center">
              <h3 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
                Объемы производства зерновых культур по регионам
              </h3>
              {/* Regional Production Chart */}
              <Badge className="self-center bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
                Производство зерновых культур в миллионах тонн
              </Badge>
            </div>
            <ChartContainer
              config={{}}
              className="min-h-[300px] max-h-[550px] w-full"
            >
              <BarChart
                data={regionalData}
                margin={{ top: 20, right: 30, left: 40, bottom: 70 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={70}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  tickFormatter={(value) => `${value} млн.`}
                  label={{
                    value: "млн тонн",
                    angle: -90,
                    position: "left",
                    style: { textAnchor: "middle" },
                  }}
                />
                <Tooltip
                  formatter={(value) => [`${value} млн. тонн`, "Объем"]}
                  labelStyle={{ fontWeight: "bold" }}
                  contentStyle={{
                    backgroundColor: "var(--color-gold-50)",
                    borderColor: "var(--color-gold-300)",
                    color: "var(--color-gold-900)",
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

          <div className="mt-16 animate-hidden">
            <div className="flex flex-col gap-3 justify-center">
              <h3 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
                Производство в Херсонской области
              </h3>
              {/* Regional Production Chart */}
              <Badge className="self-center bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
                Объемы производства по культурам (в тоннах)
              </Badge>
            </div>
            <ChartContainer
              config={{}}
              className="min-h-[300px] max-h-[550px] w-full"
            >
              <BarChart
                data={khersonCropsData}
                margin={{ top: 20, right: 30, left: 40, bottom: 70 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={70}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  tickFormatter={formatYAxis}
                  label={{
                    value: "тонн",
                    angle: -90,
                    position: "left",
                    style: { textAnchor: "middle" },
                  }}
                />
                <Tooltip
                  formatter={(value) => [
                    `${value.toLocaleString()} тонн`,
                    "Объем",
                  ]}
                  labelStyle={{ fontWeight: "bold" }}
                  contentStyle={{
                    backgroundColor: "var(--color-gold-50)",
                    borderColor: "var(--color-gold-300)",
                    color: "var(--color-gold-900)",
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
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="w-full py-8 md:py-24 bg-gradient-to-b from-gold-50/50 to-white dark:from-gold-950/30 dark:to-gray-900"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
              Продукция
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
              Основные культуры
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-hidden">
            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                  <Wheat className="h-5 w-5 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Пшеница
                </h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <BarChartIcon className="h-4 w-4 text-gold-500" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  1 015 787 тонн
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Влажность до 14%, Сор до 2%, Примеси до 5%
              </p>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                  <Wheat className="h-5 w-5 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Ячмень
                </h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <BarChartIcon className="h-4 w-4 text-gold-500" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  261 810 тонн
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Влажность до 13%, Сор до 2%, Примеси до 5%
              </p>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                  <Sun className="h-5 w-5 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Подсолнечник
                </h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <BarChartIcon className="h-4 w-4 text-gold-500" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  251 742 тонн
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Влажность до 8%, Сор до 3%, Масличность 42-52%
              </p>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                  <Sprout className="h-5 w-5 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Рапс
                </h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <BarChartIcon className="h-4 w-4 text-gold-500" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  49 016 тонн
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Влажность до 8%, Сор до 3%, Масличность 40-46%
              </p>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                  <Sprout className="h-5 w-5 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Горох
                </h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <BarChartIcon className="h-4 w-4 text-gold-500" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  23 992 тонн
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Влажность до 14%, Сор до 2%, Примеси до 5%
              </p>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                  <Leaf className="h-5 w-5 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Другие культуры
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Кукуруза, соя, нут, чечевица, лен, кориандр, горчица
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Строгий контроль качества всей продукции
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Parameters Section */}
      <section
        id="quality"
        className="w-full py-8 md:py-24 bg-gradient-to-b from-white to-gold-50/50 dark:from-gray-900 dark:to-gold-950/30"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
              Качество
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
              Параметры качества культур
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 animate-hidden">
            <Card className="py-0 gap-0 border-gold-200 dark:border-gold-900 shadow-gold-md overflow-hidden">
              <div className="border-b bg-gold-100 dark:bg-gold-900/50 p-4">
                <h3 className="font-bold text-gold-600 dark:text-gold-400">
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
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Пшеница</TableCell>
                      <TableCell>до 14</TableCell>
                      <TableCell>0,5 - 4</TableCell>
                      <TableCell>клоп 0,5 - 15, зерновая 1 - 8</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Ячмень</TableCell>
                      <TableCell>до 13</TableCell>
                      <TableCell>0,5 - 4</TableCell>
                      <TableCell>до 5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Горох</TableCell>
                      <TableCell>9 - 14</TableCell>
                      <TableCell>0,8 - 2</TableCell>
                      <TableCell>
                        другого цвета 0,5 - 3, измельченные до 6
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Кукуруза</TableCell>
                      <TableCell>до 14</TableCell>
                      <TableCell>0,5 - 2</TableCell>
                      <TableCell>2 - 5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Соя</TableCell>
                      <TableCell>до 12</TableCell>
                      <TableCell>0,5 - 2</TableCell>
                      <TableCell>масленичная 2 - 6, ГМО/не ГМО</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Нут</TableCell>
                      <TableCell>10 - 13,5</TableCell>
                      <TableCell>0,5 - 2</TableCell>
                      <TableCell>до 5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Чечевица</TableCell>
                      <TableCell>12 - 14</TableCell>
                      <TableCell>0,5 - 4</TableCell>
                      <TableCell>до 5</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>

            <Card className="py-0 gap-0 border-gold-200 dark:border-gold-900 shadow-gold-md overflow-hidden">
              <div className="border-b bg-gold-100 dark:bg-gold-900/50 p-4">
                <h3 className="font-bold text-gold-600 dark:text-gold-400">
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
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Подсолнечник
                      </TableCell>
                      <TableCell>5 - 8</TableCell>
                      <TableCell>1 - 7</TableCell>
                      <TableCell>42 - 51</TableCell>
                      <TableCell>Не указано</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Рапс</TableCell>
                      <TableCell>5 - 8</TableCell>
                      <TableCell>0,5 - 4</TableCell>
                      <TableCell>40 - 46</TableCell>
                      <TableCell>ГМО и не ГМО</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>

            <Card className="py-0 gap-0 border-gold-200 dark:border-gold-900 shadow-gold-md overflow-hidden">
              <div className="border-b bg-gold-100 dark:bg-gold-900/50 p-4">
                <h3 className="font-bold text-gold-600 dark:text-gold-400">
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
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Лён</TableCell>
                      <TableCell>6 - 9</TableCell>
                      <TableCell>0,5 - 7</TableCell>
                      <TableCell>2 - 5</TableCell>
                      <TableCell>32 - 42</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Кориандр</TableCell>
                      <TableCell>5 - 8</TableCell>
                      <TableCell>2 - 9</TableCell>
                      <TableCell>2 - 7</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Горчица</TableCell>
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

          <div className="mt-12 text-center animate-hidden">
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Особое внимание уделяется качеству: строго контролируются
              влажность, сор, содержание масла и зерновые примеси.
            </p>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section
        id="logistics"
        className="w-full py-8 md:py-24 bg-gradient-to-b from-gold-50/50 to-white dark:from-gold-950/30 dark:to-gray-900"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
              Логистика
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
              Логистические возможности
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-hidden">
            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-3 rounded-full bg-gold-100 dark:bg-gold-900/50">
                  <Ship className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Порт Мариуполь
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Глубоководный порт для экспорта - один из самых перспективных и
                глубоководных портов среди новых присоединенных территорий.
              </p>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-3 rounded-full bg-gold-100 dark:bg-gold-900/50">
                  <Truck className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Автомобильные перевозки
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Доставка автотранспортом во всем регионам присутствия
              </p>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-3 rounded-full bg-gold-100 dark:bg-gold-900/50">
                  <Building className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Складские комплексы
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Хранение и обработка продукции
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacts"
        className="w-full py-8 md:py-24 bg-gradient-to-b from-white to-gold-50/50 dark:from-gray-900 dark:to-gold-950/30"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
              Контакты
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
              Контактные данные «АГРОТРЭЙД - ЮГ»
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-hidden">
            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <h3 className="text-xl font-bold mb-4 text-gold-600 dark:text-gold-400">
                Адрес
              </h3>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gold-500 mt-0.5" />
                <p className="text-gray-600 dark:text-gray-300">
                  Республика Крым, р-н Джанкойский, с.Днепровка, ул.
                  Житомирская, д.72
                </p>
              </div>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <h3 className="text-xl font-bold mb-4 text-gold-600 dark:text-gold-400">
                Регистрационные данные
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div>
                  <p className="font-medium">ОГРН</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    1159102102500
                  </p>
                </div>
                <div>
                  <p className="font-medium">ИНН</p>
                  <p className="text-gray-600 dark:text-gray-300">9105013878</p>
                </div>
                <div>
                  <p className="font-medium">КПП</p>
                  <p className="text-gray-600 dark:text-gray-300">910501001</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
              <h3 className="text-xl font-bold mb-4 text-gold-600 dark:text-gold-400">
                Контакты руководства
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gold-500 mt-0.5" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Генеральный директор: +7 978 063-06-10, Бессмертный Виктор
                      Викторович
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gold-500 mt-0.5" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Первый заместитель: +7-978-466-14-56, Антонова Юлия
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
                <Mail className="h-5 w-5 text-gold-500 mt-0.5" />
                <p className="text-gray-600 dark:text-gray-300">
                  zerno_ru@bk.ru
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
