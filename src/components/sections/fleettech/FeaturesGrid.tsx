"use client";

import { useState } from "react";

const features = [
  {
    title: "GPS Мониторинг",
    description: "Точность до 1 метра в реальном времени.",
    icon: "satellite_alt",
  },
  {
    title: "Контроль Топлива",
    description: "Защита от сливов и анализ расхода.",
    icon: "local_gas_station",
  },
  {
    title: "Глубокая Аналитика",
    description: "BI-отчеты и предиктивная диагностика.",
    icon: "analytics",
  },
  {
    title: "Умная Маршрутизация",
    description: "Оптимизация логистики AI алгоритмами.",
    icon: "route",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark hover:border-primary/50 transition-colors"
        >
          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">{feature.icon}</span>
          </div>
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-1">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
