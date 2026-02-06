import { ArrowRight, ShieldCheck, Sparkles, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeToggle from "./ThemeToggle";

const highlights = [
  "Pick tees, hoodies, or caps in seconds",
  "Upload art and place it in 3D",
  "Export high-res PNG/JPG or short clips",
];

const microFeatures = [
  {
    title: "Fast mockups",
    desc: "Drop your logo and see it on a live 3D preview.",
  },
  { title: "Print-ready", desc: "Keep crisp edges with masked design areas." },
  {
    title: "Brand-safe",
    desc: "Your assets stay local — no uploads required.",
  },
];

export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf4e5] via-[#eef4ff] to-white text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-16">
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
          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-1">
              <span className="text-amber-500">★</span>
              <span className="font-semibold">4.9</span>
              <span className="text-slate-500 dark:text-slate-400">/ 5</span>
            </div>
            <span className="text-slate-400 dark:text-slate-500">·</span>
            <span>Trusted by 1,200+ teams</span>
            <ThemeToggle />
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm dark:bg-slate-800/80 dark:text-slate-100">
              <Sparkles size={16} className="text-amber-500" />
              Launch in under 5 minutes
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Clothing design software for instant, shareable mockups.
            </h1>
            <p className="text-lg text-slate-600 max-w-xl dark:text-slate-300">
              Upload your art, pick the garment, and preview it in 3D — then
              export crisp, print-ready files for your team or clients.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="gap-2" onClick={onStart}>
                Design clothing
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Watch a quick demo
              </Button>
            </div>
            <ul className="space-y-2 text-slate-700 dark:text-slate-200">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-amber-200/60 blur-2xl dark:bg-amber-500/30"
              aria-hidden
            />
            <div
              className="absolute -bottom-8 -right-10 h-24 w-24 rounded-full bg-sky-200/60 blur-2xl dark:bg-sky-500/30"
              aria-hidden
            />
            <Card className="bg-white/90 shadow-2xl backdrop-blur border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-lg">
                  Product preview
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Real-time 3D
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 dark:from-slate-900 dark:to-slate-800 dark:border-slate-800">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                      <p className="text-xs text-slate-500 mb-2 dark:text-slate-400">
                        Upload your images
                      </p>
                      <div className="flex items-center justify-center h-28 rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300">
                        <UploadCloud size={28} className="mr-2" />
                        Drop PNG or JPG
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                      <p className="text-xs text-slate-500 mb-2 dark:text-slate-400">
                        Material
                      </p>
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200">
                        Cross knitted
                      </div>
                      <p className="text-xs text-slate-500 mt-3 dark:text-slate-400">
                        Parts
                      </p>
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200">
                        8 panels
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 p-6 shadow-lg text-slate-900 dark:from-amber-400 dark:via-amber-500 dark:to-amber-600">
                    <div className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700">
                      3D preview
                    </div>
                    <div className="h-64 rounded-xl bg-white/80 backdrop-blur-sm grid place-items-center shadow-inner dark:bg-slate-950/70">
                      <div className="h-40 w-32 rounded-xl bg-gradient-to-b from-yellow-100 via-amber-200 to-amber-300 shadow-md dark:from-slate-800 dark:via-slate-700 dark:to-slate-600" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {microFeatures.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 bg-white p-3 text-sm shadow-sm dark:bg-slate-800 dark:border-slate-700"
                    >
                      <p className="font-semibold text-slate-800 dark:text-slate-100">
                        {item.title}
                      </p>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed dark:text-slate-300">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-400/50 dark:bg-amber-500/10 dark:text-amber-100">
                  <ShieldCheck size={18} />
                  Brand-safe previews. Assets stay on your machine.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
