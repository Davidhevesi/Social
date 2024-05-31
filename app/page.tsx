import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold text-black drop-shadow-md">
          Auth{" "}
        </h1>
        <LoginButton>
          {" "}
          <Button size="lg">Hello</Button>
        </LoginButton>
      </div>
    </main>
  );
}
