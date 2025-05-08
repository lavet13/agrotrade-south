import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
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
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Pie,
  PieChart,
  LabelList,
  Legend,
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

  // Data for Kherson region crop production (in tons)
  const khersonCropsData = [
    { name: "Пшеница", value: 1015787, fill: "var(--color-gold-200)" },
    { name: "Ячмень", value: 261810, fill: "var(--color-gold-300)" },
    { name: "Подсолнечник", value: 251742, fill: "var(--color-gold-400)" },
    { name: "Рапс", value: 49016, fill: "var(--color-gold-500)" },
    { name: "Горох", value: 23992, fill: "var(--color-gold-600)" },
  ];

  const khersonCropsConfig = {
    value: {
      label: "тонн",
    },
  } satisfies ChartConfig;

  return (
    <>
      {/* Hero Section with Floating Icons */}
      <section className="flex flex-col w-full min-h-[calc(100vh-3.5rem)] relative overflow-hidden">
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
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/50 via-gold-500/50 via-70% to-background dark:to-gray-900 dark:bg-gold-900/50"></div>
        </div>
        <div className="container flex flex-col justify-center flex-1 px-2 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Wheat className="h-8 w-8 min-w-8 min-h-8 sm:h-12 sm:w-12 text-gold-50" />
                <h1 className="whitespace-nowrap text-4xl xs:text-5xl font-bold tracking-tighter sm:text-6xl md:text-6xl lg:text-7xl gradient-text">
                  АГРОТРЭЙД-ЮГ
                </h1>
              </div>
              <p className="text-lg md:text-2xl font-semibold text-gold-100 dark:text-gold-200">
                Сельскохозяйственная продукция
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* О компании */}
      <section
        id="company"
        className="w-full py-12 md:py-16 bg-white dark:bg-gray-900"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-center gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 animate-hidden">
              <div className="col-span-full flex flex-col items-center justify-end space-y-4 text-center mb-8 animate-hidden">
                <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
                  +10 лет опыта работы
                </Badge>
                <h2 className="text-center pr-5 text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
                  О компании
                </h2>
              </div>
              <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
                <div className="flex items-center gap-2 mb-4">
                  <div className="self-start p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                    <Building className="min-w-5 min-h-5 h-5 w-5 text-gold-500" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gold-300">
                      Опыт работы
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Компания на рынке более 10 лет
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
                <div className="flex items-center gap-2 mb-4">
                  <div className="self-start p-2 rounded-full bg-gold-100 dark:bg-gold-900/50">
                    <Wheat className="min-w-5 min-h-5 h-5 w-5 text-gold-500" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gold-300">
                      Аккредитация
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Аккредитованы у крупнейших экспортеров ЮФО
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="col-span-full p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 self-start rounded-full bg-gold-100 dark:bg-gold-900/50">
                    <MapPin className="min-w-5 min-h-5 h-5 w-5 text-gold-500" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gold-300">
                      География
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
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
        className="w-full py-8 md:py-24 bg-gradient-to-b from-white to-gold-50/50 dark:from-gray-900 dark:to-gold-950/30"
      >
        <div className="container px-2 md:px-6">
          {/* Production Chart Using Shadcn/UI Component */}
          <div className="mt-4 animate-hidden">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
              <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
                Производство
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
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
                  angle={-45}
                  style={{ fill: "var(--color-foreground)" }}
                  textAnchor="end"
                  height={70}
                  tick={{ fontSize: 12 }}
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

          <div className="mt-4 animate-hidden">
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
              config={khersonCropsConfig}
              className="min-h-[300px] max-h-[550px] w-full [&_.recharts-text]:fill-gold-800 [&_.recharts-text]:font-semibold"
            >
              <PieChart>
                <Tooltip
                  formatter={(value, name) => [
                    `${value.toLocaleString()} тонн`,
                    name,
                  ]}
                  labelStyle={{ fontWeight: "bold" }}
                  contentStyle={{
                    backgroundColor: "var(--color-gold-50)",
                    borderColor: "var(--color-gold-300)",
                    color: "var(--color-gold-800)",
                  }}
                />
                <Pie innerRadius={60} data={khersonCropsData} dataKey="value">
                  <LabelList
                    className="pointer-events-none"
                    dataKey="name"
                    stroke="none"
                    fontSize={12}
                    formatter={(value: keyof typeof khersonCropsConfig) =>
                      value
                    }
                  />
                </Pie>
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  formatter={(value, _entry, index) => (
                    <span className="text-gold-700 dark:text-gold-300">
                      {value}: {khersonCropsData[index].value.toLocaleString()}{" "}
                      тонны
                    </span>
                  )}
                />
              </PieChart>
            </ChartContainer>
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
              География
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
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
                <p className="text-gray-600 dark:text-gray-300">
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
                <p className="text-gray-600 dark:text-gray-300">
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
                <p className="text-gray-600 dark:text-gray-300">
                  820 тысяч тонн зерновых культур
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Основные культуры Section */}
      <section
        id="products"
        className="w-full py-12 md:py-16 bg-white dark:bg-gray-900"
      >
        <div className="container px-2 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
              Продукция
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
              Основные культуры
            </h2>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 animate-hidden">
            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-gold-100 dark:bg-gold-900/50 mb-4">
                  <Wheat className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Пшеница
                </h3>
              </div>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-gold-100 dark:bg-gold-900/50 mb-4">
                  <Wheat className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Ячмень
                </h3>
              </div>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-gold-100 dark:bg-gold-900/50 mb-4">
                  <Sun className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Подсолнечник
                </h3>
              </div>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-gold-100 dark:bg-gold-900/50 mb-4">
                  <Sprout className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Рапс
                </h3>
              </div>
            </Card>

            <Card className="p-6 border-gold-200 dark:border-gold-900 shadow-gold-md card-hover-effect text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-gold-100 dark:bg-gold-900/50 mb-4">
                  <Sprout className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-600 dark:text-gold-400">
                  Горох
                </h3>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center animate-hidden">
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Зерновые и зернобобовые культуры: пшеница, ячмень, горох,
              кукуруза, соя, нут, чечевица с тщательным контролем влажности и
              уровня примесей.
            </p>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
              Масличные культуры: подсолнечник и рапс с высоким содержанием
              масла и гарантированной сортовой чистотой, включая как ГМО, так и
              не ГМО варианты.
            </p>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
              Низшие культуры: лен, кориандр, горчица с нормированными
              показателями влажности и уровня примесей.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Parameters Section */}
      <section
        id="quality"
        className="w-full py-8 md:py-24 bg-gradient-to-b from-white to-gold-50/50 dark:from-gray-900 dark:to-gold-950/30"
      >
        <div className="container px-2 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
              Качество
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-0 lg:gap-8 mb-8 animate-hidden">
            <div
              className="sepia-50 aspect-video bg-cover bg-center rounded-b-none rounded-lg lg:rounded-lg overflow-hidden w-full h-[211px]"
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-0 lg:gap-8 animate-hidden">
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

          <div className="mt-8 text-center animate-hidden">
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Особое внимание уделяется качеству: строго контролируются
              влажность, сор, содержание масла и зерновые примеси.
            </p>
          </div>
        </div>
      </section>

      {/* Логистические возможности Section - Pyramid Style */}
      <section
        id="logistics"
        className="w-full py-12 md:py-16 bg-white dark:bg-gray-900"
      >
        <div className="container px-2 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
            <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100 dark:bg-gold-900 dark:text-gold-300 dark:hover:bg-gold-900">
              Логистика
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
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
                  <p className="text-sm mt-2">Хранение и обработка продукции</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacts"
        className="w-full py-8 md:py-24 bg-gradient-to-b from-white to-gold-50/50 dark:from-gray-900 dark:to-gold-950/30"
      >
        <div className="container px-2 md:px-6">
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
                <MapPin className="min-w-5 min-h-5 h-5 w-5 text-gold-500 mt-0.5" />
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
              <div className="grid grid-cols-1 gap-4">
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
                  <Phone className="min-h-5 min-w-5 h-5 w-5 text-gold-500 mt-0.5" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Генеральный директор: +7 978 063-06-10, Бессмертный Виктор
                      Викторович
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="min-w-5 min-h-5 h-5 w-5 text-gold-500 mt-0.5" />
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
                <Mail className="min-w-5 min-h-5 h-5 w-5 text-gold-500 mt-0.5" />
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
