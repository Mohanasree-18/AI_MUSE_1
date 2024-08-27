import React from "react";
import { ArrowPathIcon, AcademicCapIcon } from "@heroicons/react/20/solid";
import TeluguLetterIcon from "./telugu"; // Adjust the import path as needed

const features = [
  {
    name: "Natural Language Understanding and Generation",
    description:
      "Generates human-like text, making it capable of engaging in conversations, answering questions, and providing information in a coherent and contextually relevant manner.",
    href: "#",
    icon: TeluguLetterIcon, // Use the custom Telugu letter icon
  },
  {
    name: "Wide Range of Knowledge",
    description:
      "MuseAI is trained on a diverse dataset, allowing it to have knowledge across various domains, including technology, science, history, entertainment, and more. This enables it to provide insights and information on a broad spectrum of topics.",
    href: "#",
    icon: AcademicCapIcon,
  },
  {
    name: "Assistance in Various Tasks",
    description:
      "Assist with a variety of tasks such as coding help, content creation, brainstorming ideas, providing explanations, tutoring in different subjects, and more. It can be a versatile tool for both personal and professional use cases.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function AppFeatures() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400"></h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            MuseAI: Ignite Your Creativity with Intelligence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            MuseAI is an AI-driven platform that sparks creativity by offering
            intelligent ideas.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
