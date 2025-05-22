import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, LaptopIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/lib/atoms/theme";
import { cn } from "@/lib/utils";
import { FC } from "react";

type ModeToggle = React.ComponentProps<"button">;

export const ModeToggle: FC<ModeToggle> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const activeStyles =
    "text-gold-700 dark:text-gold-400 focus:text-gold-700 focus:bg-gold-300/10 opacity-100";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn("h-8 w-8 shrink-0 hover:bg-gold-400/10", className)}
          variant="ghost"
          size="icon"
        >
          <SunIcon
            className={cn(
              "text-gold-700 size-5 -rotate-120 scale-0 transition-all",
              theme === "light" && "rotate-0 scale-100",
            )}
          />
          <MoonIcon
            className={cn(
              "text-gold-400 size-5 absolute h-[1.2rem] w-[1.2rem] -rotate-120 scale-0 transition-all",
              theme === "dark" && "rotate-0 scale-100",
            )}
          />
          <LaptopIcon
            className={cn(
              "text-gold-400 size-5 absolute h-[1.2rem] w-[1.2rem] -rotate-120 scale-0 transition-all",
              theme === "system" && "rotate-0 scale-100",
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          className={cn(
            "transition-none",
            theme === "light" ? activeStyles : "opacity-40",
          )}
          onClick={() => setTheme("light")}
        >
          <SunIcon
            className={cn("mr-2 size-4", theme === "light" && "text-gold-700")}
          />{" "}
          Светлая
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "transition-none",
            theme === "dark" ? activeStyles : "opacity-40",
          )}
          onClick={() => setTheme("dark")}
        >
          <MoonIcon
            className={cn("mr-2 size-4", theme === "dark" && "text-gold-400")}
          />{" "}
          Темная
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "transition-none",
            theme === "system" ? activeStyles : "opacity-40",
          )}
          onClick={() => setTheme("system")}
        >
          <LaptopIcon
            className={cn("mr-2 size-4", theme === "system" && "text-gold-400")}
          />{" "}
          Системная
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
