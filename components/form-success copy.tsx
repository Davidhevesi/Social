import { CheckCircle } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center bg-emerald-500/15 text-emerald-500 text-sm gap-x-2 p-2 rounded-md font-semibold">
      <CheckCircle size={24} />
      <span>{message}</span>
    </div>
  );
};
