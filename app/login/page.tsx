"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Login() {
  const { push } = useRouter();

  const schemaForm = z.object({
    password: z.string().min(6).max(20),
  });
  type SchemaForm = z.infer<typeof schemaForm>;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    setError,
  } = useForm<SchemaForm>({
    resolver: zodResolver(schemaForm),
    defaultValues: {
      password: "",
    },
  });
  const isDisabled = !(watch("password").length > 6);

  const handleFormSubmit = (data: SchemaForm) => {
    const password = data.password;
    if (typeof window !== "undefined") {
      if (password === "Hfra2006" && localStorage !== undefined) {
        localStorage.setItem("is_authenticated", JSON.stringify(true));
        const token = localStorage.getItem("is_authenticated");
        push("/auth");
        reset();
        setError("password", { message: "" });
      } else {
        setError("password", { message: "senha incorreta" });
      }
    }
  };

  return (
    <main className="w-full min-h-screen bg-zinc-900 grid grid-cols-2 antialiased">
      <section className="border-r border-zinc-700"></section>
      <section className="flex justify-center items-center">
        <form
          action=""
          className="w-full max-w-md space-y-4"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <h1 className="text-white font-bold text-2xl">Login</h1>
          <div className="space-y-2">
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              placeholder="password"
              {...register("password")}
              required
              min={6}
              max={20}
              className="bg-zinc-900 "
            />
            {errors.password?.message && (
              <span className="text-sm text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isDisabled}>
            Enviar
          </Button>
        </form>
      </section>
    </main>
  );
}
