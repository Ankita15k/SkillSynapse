import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, GraduationCap, TrendingUp, BrainCircuit } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-5xl font-extrabold leading-tight text-white">
          Personalized <span className="text-cyan-800">AI Skill Coach</span> for Students
        </h2>
        <p className="mt-6 text-lg text-slate-300 leading-relaxed">
          SkillSynapse helps learners master skills with{" "}
          <span className="text-white font-semibold">explainable AI tutoring</span>
          , multilingual support, and adaptive mastery-based learning.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/assessment"
            className="px-6 py-3 rounded-2xl bg-slate-600 border border-slate-600 hover:bg-transparent hover:border-white transition flex items-center gap-2 font-semibold text-white"
          >
            Start Skill Assessment <ArrowRight size={18} />
          </Link>
          <Link
            to="/tutor"
            className="px-6 py-3 rounded-2xl border border-slate-600 hover:border-white transition flex items-center gap-2 text-white"
          >
            <BrainCircuit size={18} />Try AI Tutor
          </Link>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Bridging the gap between potential and mastery with explainable AI.
        </p>
      </div>

      {/* Right Preview Card */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-md">

    <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-400">
        <BrainCircuit />
        AI Tutor in Action
    </h3>

    <p className="mt-3 text-sm text-stone-300">
        SkillSynapse explains concepts step-by-step, helping learners gain mastery
        without anxiety.
    </p>

    {/* Chat Preview */}
    <div className="mt-6 space-y-4">

        {/* Student Message */}
        <div className="p-4 rounded-2xl bg-slate-500/40 border border-white/10">
        <p className=" text-slate-400 mb-1">Student :</p>
        <p className="text-xs leading-relaxed text-stone-300">
            I'm confused about Binary Search. How does it works?
        </p>
        </div>

        {/* AI Tutor Reply */}
        <div className="p-4 rounded-2xl bg-gray-500/20 border border-white/30">
            <p className=" text-gray-400 mb-1">SkillSynapse AI : </p>
            <p className="text-sm leading-relaxed text-stone-300">
                Great question! Let’s break it down:
            </p>
            <ul className="mt-2 text-xs  space-y-1 list-disc list-inside text-stone-300">
                <li>Binary Search works only on sorted arrays</li>
                <li>It repeatedly divides the search space in half</li>
                <li>This reduces time complexity to O(log n)</li>
            </ul>

            <p className="mt-3 text-xs text-teal-400">
                <TrendingUp size={16} className="inline mr-1" /> Confidence boosted: +12%
            </p>
        </div>

     </div>
    </div>

    </section>
  );
}