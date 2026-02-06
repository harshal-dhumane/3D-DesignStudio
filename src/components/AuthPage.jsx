import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ThemeToggle from "./ThemeToggle";

const tabs = [
  { id: "login", label: "Login" },
  { id: "signup", label: "Sign up" },
];

export default function AuthPage({
  initialMode = "login",
  onBack,
  onContinue,
}) {
  const [mode, setMode] = useState(initialMode);

  const title = mode === "login" ? "Welcome back" : "Create your account";
  const cta = mode === "login" ? "Login" : "Create account";
  const helper =
    mode === "login" ? "Don't have an account?" : "Already have an account?";
  const helperCta = mode === "login" ? "Sign up" : "Login";
  const toggleMode = () => setMode(mode === "login" ? "signup" : "login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf4e5] via-[#eef4ff] to-white text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-10 lg:py-16">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-900 text-white grid place-items-center font-semibold dark:bg-white dark:text-slate-900">
              DC
            </div>
            <div className="leading-tight">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Design Cloud
              </p>
              <p className="font-semibold">Mockups & 3D</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={onBack}>
              Back
            </Button>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm dark:bg-slate-800/80 dark:text-slate-100">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Secure workspace access
            </div>
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              {title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Keep your designs synced, save canvases, and export print-ready
              mockups after you sign in.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-200">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <p className="font-semibold">Save states</p>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Autosave your layouts and pick up later.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <p className="font-semibold">Team-ready</p>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Share exports with teammates instantly.
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-white/90 shadow-2xl backdrop-blur border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    size="sm"
                    variant={mode === tab.id ? "default" : "outline"}
                    onClick={() => setMode(tab.id)}
                    className="rounded-full px-4"
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>
              <CardTitle className="text-2xl mt-4">{title}</CardTitle>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {mode === "login"
                  ? "Access your saved designs and exports."
                  : "Create an account to save and share your mockups."}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                {mode === "signup" && (
                  <div className="space-y-2">
                    <Label htmlFor="company">Team / Brand (optional)</Label>
                    <Input id="company" type="text" placeholder="Brand name" />
                  </div>
                )}
              </div>

              <Button className="w-full" onClick={onContinue}>
                {cta}
              </Button>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                {helper}{" "}
                <button className="underline" onClick={toggleMode}>
                  {helperCta}
                </button>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
