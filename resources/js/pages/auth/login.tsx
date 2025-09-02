import { FormEventHandler, useEffect } from "react";
// Solo si GuestLayout es esencial y no afecta el diseño principal, de lo contrario, puedes eliminarlo.
// import GuestLayout from "@/layouts/guest-layout"; 
import { Head, Link, useForm } from "@inertiajs/react";
import { GalleryVerticalEnd } from "lucide-react"; // Para el icono del logo
import { Github } from "lucide-react"; // Para el icono de GitHub
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InputError } from "@/components/ui/input-error";
import AppearanceDropdown from "@/components/appearance-dropdown";
// Puedes importar Separator si lo has añadido con shadcn-ui add separator
import { Separator } from "@/components/ui/separator"; 

export default function LoginPage({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route("login"));
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <Head title="Log in" />

      {/* Columna del formulario de login */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Logo de Acme Inc. */}
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
          <AppearanceDropdown className="w-full sm:ml-auto sm:w-auto" />
        </div>

        {/* Contenedor central para el formulario */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs"> {/* max-w-xs para el ancho del formulario */}
            {/* Si usas GuestLayout, deberías decidir si lo envuelves aquí
                o si su contenido ya está diseñado para ser el formulario.
                Si GuestLayout añade un Card o padding no deseado,
                será mejor quitarlo o modificarlo.
                Por ahora, lo quito para replicar el diseño de la imagen.
            */}
            {/* <GuestLayout> */}
              <form onSubmit={submit}>
                <div className="grid gap-2 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight">Login to your account</h1>
                  <p className="text-sm text-muted-foreground">
                    Enter your email below to login to your account
                  </p>
                </div>

                {status && (
                  <div className="mb-4 mt-4 font-medium text-sm text-green-600">
                    {status}
                  </div>
                )}

                <div className="grid gap-4 mt-4"> {/* Añadí un mt-4 para separar del título/desc */}
                  {/* Campo Email */}
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={data.email}
                      onChange={(e) => setData("email", e.target.value)}
                      required
                      autoFocus // Para que se enfoque al cargar
                      autoComplete="username" // Buena práctica para accesibilidad
                    />
                    <InputError message={errors.email} />
                  </div>

                  {/* Campo Password */}
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      {canResetPassword && (
                        <Link
                          href={route("password.request")}
                          className="ml-auto inline-block text-sm underline"
                        >
                          Forgot your password?
                        </Link>
                      )}
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={data.password}
                      onChange={(e) => setData("password", e.target.value)}
                      required
                      autoComplete="current-password" // Buena práctica para accesibilidad
                    />
                    <InputError message={errors.password} />
                  </div>

                  {/* Botón de Login */}
                  <Button type="submit" className="w-full" disabled={processing}>
                    {processing ? "Logging in..." : "Login"}
                  </Button>
                </div>

                {/* Divisor "Or continue with" */}
                <div className="relative mt-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Botón de Login con GitHub */}
                <Button variant="outline" className="w-full mt-4">
                  <Github className="mr-2 h-4 w-4" /> Login with GitHub
                </Button>

                {/* Enlace para registrarse */}
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="underline">
                    Sign up
                  </Link>
                </div>
              </form>
            {/* </GuestLayout> */}
          </div>
        </div>
      </div>

      {/* Columna de la imagen o placeholder */}
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/images/login.png" // Asegúrate de que esta ruta sea correcta o cámbiala por tu imagen
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}