"use client"

import { Building, Ship, Truck } from "lucide-react"
import { useEffect, useRef } from "react"

export function LogisticsPyramid() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = sectionRef.current?.querySelectorAll(".animate-hidden")
    animatedElements?.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      animatedElements?.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section id="logistics" ref={sectionRef} className="w-full py-8 md:py-24 bg-white dark:bg-gray-900">
      <div className="container px-2 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-hidden">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gold-600 dark:text-gold-400">
            Логистические возможности
          </h2>
        </div>

        {/* Pyramid Structure */}
        <div className="flex flex-col items-center animate-hidden">
          <div className="w-full max-w-3xl">
            {/* Top of Pyramid */}
            <div className="flex justify-center mb-0">
              <div className="w-1/3 md:w-1/4 p-4 md:p-6 bg-gold-600 text-white rounded-t-lg text-center shadow-lg relative z-30">
                <Ship className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2" />
                <h3 className="font-bold text-sm md:text-base">Порт Мариуполь</h3>
                <p className="text-xs md:text-sm mt-2 hidden md:block">
                  Глубоководный порт для экспорта - один из самых перспективных и глубоководных портов среди новых
                  присоединенных территорий.
                </p>
              </div>
            </div>

            {/* Connecting shape */}
            <div className="flex justify-center -mt-1">
              <div className="w-1/2 md:w-2/5 h-4 bg-gold-600 transform rotate-1 -ml-2"></div>
              <div className="w-1/2 md:w-2/5 h-4 bg-gold-600 transform -rotate-1 -mr-2"></div>
            </div>

            {/* Middle of Pyramid */}
            <div className="flex justify-center -mt-1">
              <div className="w-2/3 md:w-3/5 p-4 md:p-6 bg-gold-600 text-white text-center shadow-lg relative z-20">
                <Truck className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2" />
                <h3 className="font-bold text-sm md:text-base">Автомобильные перевозки</h3>
                <p className="text-xs md:text-sm mt-2">Доставка автотранспортом во всем регионам присутствия</p>
              </div>
            </div>

            {/* Connecting shape */}
            <div className="flex justify-center -mt-1">
              <div className="w-1/2 md:w-2/5 h-4 bg-gold-600 transform rotate-1 -ml-4"></div>
              <div className="w-1/2 md:w-2/5 h-4 bg-gold-600 transform -rotate-1 -mr-4"></div>
            </div>

            {/* Bottom of Pyramid */}
            <div className="flex justify-center -mt-1">
              <div className="w-full md:w-4/5 p-4 md:p-6 bg-gold-600 text-white rounded-b-lg text-center shadow-lg relative z-10">
                <Building className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2" />
                <h3 className="font-bold text-sm md:text-base">Складские комплексы</h3>
                <p className="text-xs md:text-sm mt-2">Хранение и отгрузка</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

