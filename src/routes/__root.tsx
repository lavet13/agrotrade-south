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
        title: "ТехСмарт - Цифровая и домашняя электроника",
        description:
          "Ваш универсальный магазин для всей электроники и технических товаров",
      },
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
