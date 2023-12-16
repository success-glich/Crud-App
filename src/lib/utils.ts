import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const validatePhone = (phone: string) => {
  const phoneRegex = /^\d{7,}$/;

  return phoneRegex.test(phone);
};

export const getCurrentDate = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1; // Months are zero-indexed
  let day = today.getDate();

  // Ensure two-digit format for month and day
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;

  return `${year}-${formattedMonth}-${formattedDay}`;
};

export const generateUniqueId = (): string => {
  return "_" + Math.random().toString(36).slice(2, 9);
};
