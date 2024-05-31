import { TriangleAlert } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center bg-destructive/15 text-destructive text-sm gap-x-2 p-2 rounded-md font-semibold">
      <TriangleAlert size={24} />
      <span>{message}</span>
    </div>
  );
};
