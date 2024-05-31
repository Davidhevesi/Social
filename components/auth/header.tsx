interface HeaderProps {
  label: string;
}
export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center">
      <h1 className="text-2xl font-semibold">Login</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
