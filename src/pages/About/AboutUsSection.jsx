import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "../../utils/cn";

export default function AboutUsSection() {
  return (
    <div className="relative w-full h-[32rem] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* 🔹 Animated Boxes Background (Hover Works) */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
       < Boxes />
      </div>

      {/* 🔹 Light Overlay (keeps text readable but allows hover through) */}
      <div className="absolute inset-0 bg-slate-900/50 z-10 pointer-events-none"></div>

      {/* 🔹 Foreground Text */}
      <div className="relative z-20 text-center px-6">
        <p className="font-semibold tracking-wider text-lg md:text-2xl mb-4 uppercase inline-block text-fuchsia-400 border-b border-fuchsia-500">
          About Us
        </p>
        <h1 className="font-bold text-3xl md:text-5xl text-white mb-4">
          Evren{" "}
          <span className="text-fuchsia-500">
            Research
          </span>
        </h1>
        <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
          We provide global KPO and RPO services with a skilled team,
          driving success and growth worldwide.
        </p>
      </div>
    </div>
  );
}