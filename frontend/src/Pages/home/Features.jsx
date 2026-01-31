import React from "react";
import { Sparkles, Globe, BarChart3, BrainCircuit, Languages, ChartArea } from "lucide-react";

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white-400/50 transition shadow-lg">
      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-black/40 mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-8 py-16">
      <h3 className="text-3xl font-bold text-center text-white">Why SkillSynapse?</h3>
      <p className="text-slate-400 text-center mt-3 max-w-2xl mx-auto">
        Designed to reduce anxiety, improve mastery, and boost confidence with
        AI-driven personalized guidance.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<BrainCircuit className="text-gray-400" />}
          title="Explainable AI Tutor"
          desc="Step-by-step hints and reasoning, not just answers."
        />
        <FeatureCard
          icon={<Languages className="text-gray-400" />}
          title="Multilingual Learning"
          desc="Learn comfortably in your preferred language."
        />
        <FeatureCard
          icon={<ChartArea className="text-gray-400" />}
          title="Mastery & Skill Gap Engine"
          desc="Detect weak areas and generate adaptive learning plans."
        />
      </div>
    </section>
  );
}