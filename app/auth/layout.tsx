const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-lime-50">
      {children}
    </div>
  );
};
export default AuthLayout;
