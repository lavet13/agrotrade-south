import { useRef, useState } from "react";
import TurndownService from "turndown";

import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text?: string;
  html?: string;
  htmlRef?: React.RefObject<HTMLElement | null>;
  className?: string;
}

export function CopyButton({
  text,
  html,
  htmlRef,
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const copyToClipboard = async () => {
    try {
      if (!text && !html && !htmlRef?.current) {
        console.error("No text, HTML, or HTML reference to copy");
        return;
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const htmlContent = html || htmlRef?.current?.innerHTML || "";
      let textContent = text ?? "";

      if (textContent != "" && htmlContent) {
        const turndownService = new TurndownService();
        textContent = turndownService.turndown(htmlContent);
      }

      if (htmlContent) {
        const clipboardData = new ClipboardItem({
          "text/plain": new Blob([textContent], { type: "text/plain" }),
          "text/html": new Blob([htmlContent], { type: "text/html" }),
        });
        await navigator.clipboard.write([clipboardData]);
      } else {
        await navigator.clipboard.writeText(textContent);
      }

      setCopied(true);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        "dark:text-gold-300 dark:hover:bg-gold-800/50 text-gold-500 hover:text-gold-600 hover:bg-gold-100",
        className,
      )}
      onClick={copyToClipboard}
    >
      {copied ? (
        <Check className="min-h-4 min-w-4 h-4 w-4" />
      ) : (
        <Copy className="min-h-4 min-w-4 h-4 w-4" />
      )}
      {copied && 'Скопировано!'}
    </Button>
  );
}
