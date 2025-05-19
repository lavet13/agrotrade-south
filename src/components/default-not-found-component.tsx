import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { FC } from "react";

const DefaultNotFoundComponent: FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-gold-800 dark:text-gold-200 text-5xl lg:text-6xl font-bold">404</h1>
      <p
        className={
          "text-center leading-7 [&:not(:first-child)]:mt-6 text-gold-700 dark:text-gold-300"
        }
      >
        Похоже, вы забрели в неизведанные цифровые просторы.
      </p>
      <Button
        className="mt-8 bg-gold-800 text-gold-100 dark:text-gold-100 hover:bg-gold-700/90"
        asChild
      >
        <Link to="/">Вернуться на сайт</Link>
      </Button>
    </div>
  );
};

export default DefaultNotFoundComponent;
