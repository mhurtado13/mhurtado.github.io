import React, { useState } from "react";

const CategoryIcons = {
  "Transcriptomics": (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512"
    fill = "currentColor"
    className="w-6 h-6 text-[var(--sec)] opacity-70"
  >
    <path d="M416 0c17.7 0 32 14.3 32 32c0 59.8-30.3 107.5-69.4 146.6c-28 28-62.5 53.5-97.3 77.4l-2.5 1.7c-11.9 8.1-23.8 16.1-35.5 23.9c0 0 0 0 0 0s0 0 0 0s0 0 0 0l-1.6 1c-6 4-11.9 7.9-17.8 11.9c-20.9 14-40.8 27.7-59.3 41.5l118.5 0c-9.8-7.4-20.1-14.7-30.7-22.1l7-4.7 3-2c15.1-10.1 30.9-20.6 46.7-31.6c25 18.1 48.9 37.3 69.4 57.7C417.7 372.5 448 420.2 448 480c0 17.7-14.3 32-32 32s-32-14.3-32-32L64 480c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-59.8 30.3-107.5 69.4-146.6c28-28 62.5-53.5 97.3-77.4c-34.8-23.9-69.3-49.3-97.3-77.4C30.3 139.5 0 91.8 0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l320 0c0-17.7 14.3-32 32-32zM338.6 384l-229.2 0c-10.1 10.6-18.6 21.3-25.5 32l280.2 0c-6.8-10.7-15.3-21.4-25.5-32zM109.4 128l229.2 0c10.1-10.7 18.6-21.3 25.5-32L83.9 96c6.8 10.7 15.3 21.3 25.5 32zm55.4 48c18.4 13.8 38.4 27.5 59.3 41.5c20.9-14 40.8-27.7 59.3-41.5l-118.5 0z"></path>
  </svg>
  ),
  "Multiscale modeling": (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 640 512"
    fill = "currentColor"
    className="w-6 h-6 text-[var(--sec)] opacity-70"
  >
    <path d="M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z"></path>
  </svg>
  ),
  "Synthetic Biology": (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512"
    fill = "currentColor"
    className="w-6 h-6 text-[var(--sec)] opacity-70"
  >
    <path d="M423.1 30.6c3.6-12.7-3.7-26-16.5-29.7s-26 3.7-29.7 16.5l-4.2 14.7c-9.8-.4-19.9 .5-29.9 2.8c-12.1 2.8-23.7 5.9-34.9 9.4l-5.9-13.7c-5.2-12.2-19.3-17.8-31.5-12.6s-17.8 19.3-12.6 31.5l4.9 11.3c-22 9.4-42 20.1-60.2 31.8L196 82.7c-7.4-11-22.3-14-33.3-6.7s-14 22.3-6.7 33.3l7.8 11.6c-18 15-33.7 30.8-47.3 47.1L103 157.3c-10.4-8.3-25.5-6.6-33.7 3.7s-6.6 25.5 3.7 33.7l15 12c-2.1 3.2-4.1 6.5-6 9.7c-9.4 15.7-17 31-23.2 45.3l-9.9-3.9c-12.3-4.9-26.3 1.1-31.2 13.4s1.1 26.3 13.4 31.2l11.6 4.6c-.3 1.1-.6 2.1-.9 3.1c-3.5 12.5-5.7 23.2-7.1 31.3c-.7 4.1-1.2 7.5-1.6 10.3c-.2 1.4-.3 2.6-.4 3.6l-.1 1.4-.1 .6 0 .3 0 .1c0 0 0 .1 39.2 3.7c0 0 0 0 0 0l-39.2-3.6c-.5 5-.6 10-.4 14.9l-14.7 4.2C4.7 380.6-2.7 393.8 .9 406.6s16.9 20.1 29.7 16.5l13.8-3.9c10.6 20.7 27.6 37.8 48.5 48.5l-3.9 13.7c-3.6 12.7 3.7 26 16.5 29.7s26-3.7 29.7-16.5l4.2-14.7c23.8 1 46.3-5.5 65.1-17.6L215 473c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-10.6-10.6c9.1-14.1 15.1-30.5 17-48.3l.1-.8c.3-1.7 1-5.1 2.3-9.8l.2-.8 12.6 5.4c12.2 5.2 26.3-.4 31.5-12.6s-.4-26.3-12.6-31.5l-11.3-4.8c9.9-14.9 24.9-31.6 48.6-46l2.1 7.5c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7L371 259.2c6.9-2.2 14.3-4.3 22.2-6.1c12.9-3 24.7-8 35.2-14.8L439 249c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-10.6-10.6c12.2-19 18.6-41.6 17.6-65.1l14.7-4.2c12.7-3.6 20.1-16.9 16.5-29.7s-16.9-20.1-29.7-16.5l-13.7 3.9c-10.8-21.2-28-38-48.5-48.5l3.9-13.8zM92.1 363.3s0 0 0 0L144 368l-51.9-4.7zM112 320a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM240 184a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>
  </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Transcriptomics": [
      "Bulk RNA-Seq",
      "Single cell RNA-Seq",
      "Cell type deconvolution",
      "Transcription factor activity",
      "Network analysis",
    ],
    "Multiscale modeling": [
      "Agent Based modeling",
      "Physicell software",
      "HPC arquitecture",
      "Model exploration",
      "Sensitivity analysis",
      "Genetic algorithms"
    ],
    "Synthetic Biology": [
      "CRISPR-CAS9 gRNAs design",
      "Vector cloning",
      "Plasmid design",
      "Primers design"
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What do I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
