import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge class names safely.
 * Works just like the TypeScript version, but plain JavaScript.
 *
 * Example:
 *   cn("p-2", condition && "bg-red-500", "p-4")
 *   → "bg-red-500 p-4"
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
