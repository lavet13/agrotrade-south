import Header from "@/components/header";
import Footer from "@/components/footer";
import { SonnerSpinner } from "@/components/sonner-spinner";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Suspense } from "react";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: "Агротрейд-ЮГ | Крупный экспортер зерновых и масличных культур",
        description:
          "Более 10 лет опыта работы на рынке экспорта сельскохозяйственной продукции. Производство и поставки пшеницы, ячменя, подсолнечника, рапса и других культур с высоким контролем качества.",
      },
      {
        name: "keywords",
        content:
          "Агротрейд-ЮГ, экспорт зерновых, пшеница, ячмень, подсолнечник, рапс, сельхозпродукция, Крым, Херсонская область, Запорожская область",
      },
      { name: "author", content: "ООО «АГРОТРЕЙД-ЮГ»" },
      {
        property: "og:title",
        content: "Агротрейд-ЮГ | Экспортер зерновых культур",
      },
      {
        property: "og:description",
        content:
          "Надёжный поставщик зерновых и масличных культур с более чем 10-летним опытом работы на рынке сельхозпродукции",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.agrotrade-yug.ru" },
      { property: "og:image", content: "/agrotrade-south-logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Агротрейд-ЮГ | Экспортер зерновых культур",
      },
      {
        name: "twitter:description",
        content:
          "Надёжный поставщик зерновых и масличных культур с более чем 10-летним опытом работы на рынке сельхозпродукции",
      },
      { name: "twitter:image", content: "/images/agrotrade-logo.jpg" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "Russian" },
      { httpEquiv: "Content-Language", content: "ru" },
    ],
  }),
  component: () => (
    <>
      <HeadContent />
      <div className="relative flex flex-col">
        <Header />
        <main className="flex flex-col grow shrink-0 border-b min-h-[calc(100svh-3.5rem)]">
          <Suspense
            fallback={
              <div className="flex-1 flex items-center justify-center min-h-screen">
                <SonnerSpinner />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
      <Scripts />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  ),
});
