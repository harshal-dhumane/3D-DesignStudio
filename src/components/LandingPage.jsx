// import {
//   ArrowRight,
//   LogIn,
//   ShieldCheck,
//   Sparkles,
//   UploadCloud,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import ThemeToggle from "./ThemeToggle";

// const highlights = [
//   "Pick tees, hoodies, or caps in seconds",
//   "Upload art and place it in 3D",
//   "Export high-res PNG/JPG or short clips",
// ];

// const microFeatures = [
//   {
//     title: "Fast mockups",
//     desc: "Drop your logo and see it on a live 3D preview.",
//   },
//   { title: "Print-ready", desc: "Keep crisp edges with masked design areas." },
//   {
//     title: "Brand-safe",
//     desc: "Your assets stay local — no uploads required.",
//   },
// ];


// export default function LandingPage({ onStart, onLogin, onSignup }) {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#fdf4e5] via-[#eef4ff] to-white text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
//       <div className="max-w-6xl mx-auto px-6 py-10 lg:py-16">
//         <header className="flex items-center justify-between mb-12">
//           <div className="flex items-center gap-3">
//             <div className="h-10 w-10 rounded-full bg-slate-900 text-white grid place-items-center font-semibold dark:bg-white dark:text-slate-900">
//               DC
//             </div>
//             <div className="leading-tight">
//               <p className="text-sm text-slate-500 dark:text-slate-400">
//                 Design Cloud
//               </p>
//               <p className="font-semibold">Mockups & 3D</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
//             <ThemeToggle />
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={onLogin}
//               className="gap-1 px-3"
//             >
//               <LogIn size={16} />
//               Login
//             </Button>
//             <Button size="sm" onClick={onSignup} className="px-4">
//               Sign up
//             </Button>
//           </div>
//         </header>

//         <div className="grid lg:grid-cols-2 gap-10 items-center">
//           <div className="space-y-6">
//             <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm dark:bg-slate-800/80 dark:text-slate-100">
//               <Sparkles size={16} className="text-amber-500" />
//               Launch in under 5 minutes
//             </div>
//             <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
//               Clothing design software for instant, shareable mockups.
//             </h1>
//             <p className="text-lg text-slate-600 max-w-xl dark:text-slate-300">
//               Upload your art, pick the garment, and preview it in 3D — then
//               export crisp, print-ready files for your team or clients.
//             </p>
//             <div className="flex flex-wrap gap-3">
//               <Button size="lg" className="gap-2" onClick={onLogin}>
//                 Design clothing
//                 <ArrowRight size={18} />
//               </Button>
//               <Button size="lg" variant="outline" className="gap-2">
//                 Watch a quick demo
//               </Button>
//             </div>
//             <ul className="space-y-2 text-slate-700 dark:text-slate-200">
//               {highlights.map((item) => (
//                 <li key={item} className="flex items-start gap-2">
//                   <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="relative">
//             <div
//               className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-amber-200/60 blur-2xl dark:bg-amber-500/30"
//               aria-hidden
//             />
//             <div
//               className="absolute -bottom-8 -right-10 h-24 w-24 rounded-full bg-sky-200/60 blur-2xl dark:bg-sky-500/30"
//               aria-hidden
//             />
//             <Card className="bg-white/90 shadow-2xl backdrop-blur border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
//               <CardHeader className="pb-4">
//                 <CardTitle className="flex items-center justify-between text-lg">
//                   Product preview
//                   <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
//                     Real-time 3D
//                   </span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid gap-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 dark:from-slate-900 dark:to-slate-800 dark:border-slate-800">
//                   <div className="grid grid-cols-2 gap-3">
//                     <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:bg-slate-800 dark:border-slate-700">
//                       <p className="text-xs text-slate-500 mb-2 dark:text-slate-400">
//                         Upload your images
//                       </p>
//                       <div className="flex items-center justify-center h-28 rounded-lg border border-dashed border-slate-300 bg-slate-50 text-slate-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300">
//                         <UploadCloud size={28} className="mr-2" />
//                         Drop PNG or JPG
//                       </div>
//                     </div>
//                     <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:bg-slate-800 dark:border-slate-700">
//                       <p className="text-xs text-slate-500 mb-2 dark:text-slate-400">
//                         Material
//                       </p>
//                       <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200">
//                         Cross knitted
//                       </div>
//                       <p className="text-xs text-slate-500 mt-3 dark:text-slate-400">
//                         Parts
//                       </p>
//                       <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200">
//                         8 panels
//                       </div>
//                     </div>
//                   </div>

//                   <div className="relative rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 p-6 shadow-lg text-slate-900 dark:from-amber-400 dark:via-amber-500 dark:to-amber-600">
//                     <div className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700">
//                       3D preview
//                     </div>
//                     <div className="h-64 rounded-xl bg-white/80 backdrop-blur-sm grid place-items-center shadow-inner dark:bg-slate-950/70">
//                       <div className="h-40 w-32 rounded-xl bg-gradient-to-b from-yellow-100 via-amber-200 to-amber-300 shadow-md dark:from-slate-800 dark:via-slate-700 dark:to-slate-600" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid gap-3 sm:grid-cols-3">
//                   {microFeatures.map((item) => (
//                     <div
//                       key={item.title}
//                       className="rounded-xl border border-slate-200 bg-white p-3 text-sm shadow-sm dark:bg-slate-800 dark:border-slate-700"
//                     >
//                       <p className="font-semibold text-slate-800 dark:text-slate-100">
//                         {item.title}
//                       </p>
//                       <p className="text-slate-600 text-xs mt-1 leading-relaxed dark:text-slate-300">
//                         {item.desc}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-400/50 dark:bg-amber-500/10 dark:text-amber-100">
//                   <ShieldCheck size={18} />
//                   Brand-safe previews. Assets stay on your machine.
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import {
//   ArrowRight,
//   LogIn,
//   ShieldCheck,
//   Sparkles,
//   UploadCloud,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import ThemeToggle from "./ThemeToggle";

// const highlights = [
//   "Pick tees, hoodies, or caps in seconds",
//   "Upload art and place it in 3D",
//   "Export high-res PNG/JPG or short clips",
// ];

// const microFeatures = [
//   {
//     title: "Fast mockups",
//     desc: "Drop your logo and see it on a live 3D preview.",
//   },
//   { title: "Print-ready", desc: "Keep crisp edges with masked design areas." },
//   {
//     title: "Brand-safe",
//     desc: "Your assets stay local — no uploads required.",
//   },
// ];

// export default function LandingPage({ onStart, onLogin, onSignup }) {
//   return (
//     <div className="relative min-h-screen overflow-hidden text-white">

//       {/* BACKGROUND IMAGE */}
//       <div className="absolute inset-0">
//         <img
//           src="/golden-bg.png"
//           alt="Luxury background"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* overlay */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,200,120,0.35),transparent_50%)]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 lg:py-20">

//         {/* HEADER */}
//         <header className="flex items-center justify-between mb-16">

//           <div className="flex items-center gap-3">
//             <div className="h-11 w-11 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 text-black grid place-items-center font-bold shadow-lg">
//               DC
//             </div>

//             <div>
//               <p className="text-sm text-gray-300">Design Studio</p>
//               <p className="font-semibold tracking-wide">Mockups & 3D</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">

//             <ThemeToggle />

//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={onLogin}
//               className="text-gray-200 hover:text-white hover:bg-white/10"
//             >
//               <LogIn size={16} className="mr-1" />
//               Login
//             </Button>

//             <Button
//               size="sm"
//               onClick={onSignup}
//               className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-semibold hover:scale-105 transition shadow-md"
//             >
//               Sign up
//             </Button>

//           </div>
//         </header>

//         {/* HERO */}
//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* LEFT */}
//           <div className="space-y-7 text-center lg:text-left">

//             <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 px-4 py-1 text-sm text-yellow-300">
//               <Sparkles size={16} />
//               Launch in under 5 minutes
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               We Design Smart Fashion Experiences
//             </h1>

//             <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
//               AI-powered T-shirt & hoodie mockups with real-time 3D previews.
//               Design, customize and export instantly.
//             </p>

//             <div className="flex flex-wrap justify-center lg:justify-start gap-4">

//               <Button
//                 size="lg"
//                 onClick={onStart}
//                 className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-semibold shadow-lg hover:scale-105 transition"
//               >
//                 Start Designing
//                 <ArrowRight size={18} className="ml-2" />
//               </Button>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black transition"
//               >
//                 Watch Demo
//               </Button>

//             </div>

//             <ul className="space-y-3 text-gray-300 pt-4">
//               {highlights.map((item) => (
//                 <li
//                   key={item}
//                   className="flex items-center gap-3 justify-center lg:justify-start"
//                 >
//                   <span className="h-2 w-2 rounded-full bg-yellow-400" />
//                   {item}
//                 </li>
//               ))}
//             </ul>

//           </div>

        
         
//           {/* RIGHT CARD */}
// <div className="w-full">

//   <Card className="bg-black/60 border border-yellow-400/30 backdrop-blur-xl shadow-2xl rounded-3xl">

//     <CardHeader>
//       <CardTitle className="flex justify-between items-center text-white">
//         AI Design Workspace
//         <span className="text-xs text-gray-400">
//           3D Preview Engine
//         </span>
//       </CardTitle>
//     </CardHeader>

//     <CardContent className="space-y-6">

//       {/* DESIGN WORKSPACE IMAGE */}
//       <div className="relative rounded-2xl overflow-hidden border border-yellow-400/30">

//         <img
//          // src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
//          src="https://images.unsplash.com/photo-1558655146-9f40138edfeb"

//           alt="3D Design Workspace"
//           className="w-full h-64 object-cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
//           <div>
//             <p className="text-yellow-300 text-sm font-semibold">
//               AI Powered Design
//             </p>

//             <p className="text-white text-lg font-semibold">
//               Create 3D Fashion Mockups
//             </p>
//           </div>
//         </div>

//       </div>

//       {/* MINI DESIGN CONTROLS */}
//       <div className="grid sm:grid-cols-3 gap-4">

//         <div className="rounded-xl bg-black/40 border border-white/20 p-4 text-center">
//           <UploadCloud className="mx-auto mb-2 text-yellow-400" />
//           <p className="text-sm text-white font-semibold">
//             Upload Logo
//           </p>
//         </div>

//         <div className="rounded-xl bg-black/40 border border-white/20 p-4 text-center">
//           <Sparkles className="mx-auto mb-2 text-yellow-400" />
//           <p className="text-sm text-white font-semibold">
//             AI Generate
//           </p>
//         </div>

//         <div className="rounded-xl bg-black/40 border border-white/20 p-4 text-center">
//           <ShieldCheck className="mx-auto mb-2 text-yellow-400" />
//           <p className="text-sm text-white font-semibold">
//             Export Mockup
//           </p>
//         </div>

//       </div>

//       {/* FEATURES */}
//       <div className="grid sm:grid-cols-3 gap-4">

//         {microFeatures.map((item) => (
//           <div
//             key={item.title}
//             className="rounded-xl bg-black/40 border border-white/20 p-4"
//           >
//             <p className="font-semibold text-white">
//               {item.title}
//             </p>

//             <p className="text-xs text-gray-400 mt-2">
//               {item.desc}
//             </p>
//           </div>
//         ))}

//       </div>

//       {/* FOOTER */}
//       <div className="flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3 text-sm text-yellow-300">
//         <ShieldCheck size={18} />
//         AI generated mockups with real-time 3D preview.
//       </div>

//     </CardContent>

//   </Card>

// </div>
//   </div>
// {/* HOW AI MOCKUP WORKS */}
// {/* AI FEATURES SECTION */}

// <section className="mt-28">

//   <div className="text-center mb-14">

//     <p className="text-yellow-400 text-sm mb-2">
//       PLATFORM FEATURES
//     </p>

//     <h2 className="text-3xl md:text-4xl font-bold">
//       Powerful Tools for Modern Designers
//     </h2>

//     <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//       Our AI powered design studio helps creators build stunning
//       fashion mockups faster than ever.
//     </p>

//   </div>

//   <div className="grid md:grid-cols-3 gap-8">

//     {/* FEATURE 1 */}

//     <div className="group rounded-2xl border border-yellow-400/30 bg-black/50 backdrop-blur-xl p-7 hover:border-yellow-400 transition hover:scale-[1.02]">

//       <Sparkles className="text-yellow-400 mb-4 group-hover:scale-110 transition" size={28} />

//       <h3 className="text-lg font-semibold mb-2">
//         AI Design Generator
//       </h3>

//       <p className="text-gray-400 text-sm">
//         Generate professional clothing mockups instantly using
//         our AI powered design engine.
//       </p>

//     </div>

//     {/* FEATURE 2 */}

//     <div className="group rounded-2xl border border-yellow-400/30 bg-black/50 backdrop-blur-xl p-7 hover:border-yellow-400 transition hover:scale-[1.02]">

//       <UploadCloud className="text-yellow-400 mb-4 group-hover:scale-110 transition" size={28} />

//       <h3 className="text-lg font-semibold mb-2">
//         Smart Asset Upload
//       </h3>

//       <p className="text-gray-400 text-sm">
//         Upload logos, artwork or graphics and instantly preview
//         them on 3D apparel models.
//       </p>

//     </div>

//     {/* FEATURE 3 */}

//     <div className="group rounded-2xl border border-yellow-400/30 bg-black/50 backdrop-blur-xl p-7 hover:border-yellow-400 transition hover:scale-[1.02]">

//       <ShieldCheck className="text-yellow-400 mb-4 group-hover:scale-110 transition" size={28} />

//       <h3 className="text-lg font-semibold mb-2">
//         High Resolution Export
//       </h3>

//       <p className="text-gray-400 text-sm">
//         Export PNG, JPG or short product videos ready for
//         marketing, e-commerce or printing.
//       </p>

//     </div>

//   </div>

// </section>
      

//       </div>
//     </div>
//   );
// }



import {
  ArrowRight,
  LogIn,
  ShieldCheck,
  Sparkles,
  UploadCloud,
} from "lucide-react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeToggle from "./ThemeToggle";

/* ---------------- HIGHLIGHTS ---------------- */

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

/* ---------------- FRAMER MOTION VARIANTS ---------------- */

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/* ---------------- COMPONENT ---------------- */

export default function LandingPage({ onStart, onLogin, onSignup }) {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/golden-bg.png"
          alt="Luxury background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,200,120,0.35),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 lg:py-20">

        {/* HEADER */}

        <header className="flex items-center justify-between mb-16">

          <div className="flex items-center gap-3">

            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 text-black grid place-items-center font-bold shadow-lg">
              DC
            </div>

            <div>
              <p className="text-sm text-gray-300">Design Studio</p>
              <p className="font-semibold tracking-wide">Mockups & 3D</p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <ThemeToggle />

            <Button
              variant="ghost"
              size="sm"
              onClick={onLogin}
              className="text-gray-200 hover:text-white hover:bg-white/10"
            >
              <LogIn size={16} className="mr-1" />
              Login
            </Button>

            <Button
              size="sm"
              onClick={onSignup}
              className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-semibold hover:scale-105 transition shadow-md"
            >
              Sign up
            </Button>

          </div>

        </header>

        {/* HERO */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7 text-center lg:text-left"
          >

            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 px-4 py-1 text-sm text-yellow-300">
              <Sparkles size={16} />
              Launch in under 5 minutes
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We Design Smart Fashion Experiences
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              AI-powered T-shirt & hoodie mockups with real-time 3D previews.
              Design, customize and export instantly.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">

              <Button
                size="lg"
                onClick={onStart}
                className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-semibold shadow-lg hover:scale-105 transition"
              >
                Start Designing
                <ArrowRight size={18} className="ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black transition"
              >
                Watch Demo
              </Button>

            </div>

            <ul className="space-y-3 text-gray-300 pt-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>

          </motion.div>

          {/* RIGHT CARD */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >

            <Card className="bg-black/60 border border-yellow-400/30 backdrop-blur-xl shadow-2xl rounded-3xl">

              <CardHeader>
                <CardTitle className="flex justify-between items-center text-white">
                  AI Design Workspace
                  <span className="text-xs text-gray-400">
                    3D Preview Engine
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">

                <div className="relative rounded-2xl overflow-hidden border border-yellow-400/30">

                  <img
                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb"
                    alt="3D Design Workspace"
                    className="w-full h-64 object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-yellow-300 text-sm font-semibold">
                        AI Powered Design
                      </p>

                      <p className="text-white text-lg font-semibold">
                        Create 3D Fashion Mockups
                      </p>
                    </div>
                  </div>

                </div>

                <div className="grid sm:grid-cols-3 gap-4">

                  <div className="rounded-xl bg-black/40 border border-white/20 p-4 text-center">
                    <UploadCloud className="mx-auto mb-2 text-yellow-400" />
                    <p className="text-sm text-white font-semibold">
                      Upload Logo
                    </p>
                  </div>

                  <div className="rounded-xl bg-black/40 border border-white/20 p-4 text-center">
                    <Sparkles className="mx-auto mb-2 text-yellow-400" />
                    <p className="text-sm text-white font-semibold">
                      AI Generate
                    </p>
                  </div>

                  <div className="rounded-xl bg-black/40 border border-white/20 p-4 text-center">
                    <ShieldCheck className="mx-auto mb-2 text-yellow-400" />
                    <p className="text-sm text-white font-semibold">
                      Export Mockup
                    </p>
                  </div>

                </div>

              </CardContent>

            </Card>

          </motion.div>

        </div>

        {/* FEATURES SECTION */}

        <motion.section
          className="mt-28"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <div className="text-center mb-14">

            <p className="text-yellow-400 text-sm mb-2">
              PLATFORM FEATURES
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Powerful Tools for Modern Designers
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Our AI powered design studio helps creators build stunning
              fashion mockups faster than ever.
            </p>

          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariant}
          >

            <motion.div
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.04 }}
              className="group rounded-2xl border border-yellow-400/30 bg-black/50 backdrop-blur-xl p-7"
            >

              <Sparkles className="text-yellow-400 mb-4" size={28} />

              <h3 className="text-lg font-semibold mb-2">
                AI Design Generator
              </h3>

              <p className="text-gray-400 text-sm">
                Generate professional clothing mockups instantly using
                our AI powered design engine.
              </p>

            </motion.div>

            <motion.div
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.04 }}
              className="group rounded-2xl border border-yellow-400/30 bg-black/50 backdrop-blur-xl p-7"
            >

              <UploadCloud className="text-yellow-400 mb-4" size={28} />

              <h3 className="text-lg font-semibold mb-2">
                Smart Asset Upload
              </h3>

              <p className="text-gray-400 text-sm">
                Upload logos, artwork or graphics and instantly preview
                them on 3D apparel models.
              </p>

            </motion.div>

            <motion.div
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.04 }}
              className="group rounded-2xl border border-yellow-400/30 bg-black/50 backdrop-blur-xl p-7"
            >

              <ShieldCheck className="text-yellow-400 mb-4" size={28} />

              <h3 className="text-lg font-semibold mb-2">
                High Resolution Export
              </h3>

              <p className="text-gray-400 text-sm">
                Export PNG, JPG or short product videos ready for
                marketing, e-commerce or printing.
              </p>

            </motion.div>

          </motion.div>

        </motion.section>

      </div>

    </div>
  );
}