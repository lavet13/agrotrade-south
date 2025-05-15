"use client"

import { useEffect, useState } from "react"
import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { GrapeIcon as Grain, Wheat, Flower2, Leaf, Sprout } from "lucide-react"

export default function CropProductionChart() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Calculate responsive dimensions
  const outerRadius = windowWidth < 640 ? 100 : windowWidth < 768 ? 130 : 180
  const innerRadius = windowWidth < 640 ? 80 : windowWidth < 768 ? 110 : 150

  const data = [
    {
      name: "Пшеница",
      value: 1015787,
      icon: Wheat,
      color: "var(--color-gold-500)",
    },
    {
      name: "Ячмень",
      value: 261810,
      icon: Grain,
      color: "var(--color-gold-600)",
    },
    {
      name: "Подсолнечник",
      value: 251742,
      icon: Flower2,
      color: "var(--color-gold-700)",
    },
    { name: "Рапс", value: 49016, icon: Leaf, color: "var(--color-gold-800)" },
    {
      name: "Горох",
      value: 23992,
      icon: Sprout,
      color: "var(--color-gold-900)",
    },
  ]

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  return (
    <div className="w-full">
      <div className="w-full" style={{ height: windowWidth < 640 ? "300px" : windowWidth < 768 ? "350px" : "450px" }}>
        <ChartContainer config={{}} className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={outerRadius}
                innerRadius={innerRadius}
                fill="var(--color-gold-600)"
                paddingAngle={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-background text-gold-600 dark:text-gold-200 dark:bg-gold-900 p-2 rounded shadow-sm border text-sm">
                        <p>
                          {payload[0].name}: {formatNumber(payload[0].value as number)} тонн
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8">
        {data.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="relative">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: item.color, opacity: 0.8 }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-medium mt-2 md:mt-3 text-gold-600 dark:text-gold-300 text-center">
                {item.name}
              </h3>
              <p className="text-sm sm:text-base text-gold-800 dark:text-gold-500 text-center">
                {formatNumber(item.value)} тонн
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

