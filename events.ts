export type Event = {
  name: string;
  date: string;
  description: string;
  href?: string;
};

export const events: Event[] = [
  {
    name: "Mercedes-Benz Arena, Berlin",
    date: "May 15th, 2023",
    description:
      "Berlin's Mercedes-Benz Arena hosts Revenant's Rift, Drown The Sun,Zenith's Edge, Visceral Vortex, and Neural Nucleus.",
  },
  {
    name: "Olympiahalle, Munich",
    date: "August 3rd, 2023",
    description:
      " Death metal bands Nexus Aeon, Astral Inertia, Synaptic Surge, Drown The Sun and Chromatic Cascade play at Munich's Olympiahalle.",
  },
  {
    name: "Barclaycard Arena, Hamburg",
    date: "September 22nd, 2023",
    description:
      "Hamburg's Barclaycard Arena features Drown The Sun, Solar Eon, Binary Brigade, Fractal Frenzy, and Perpetual Pulse.",
  },
  {
    name: "Lanxess Arena, Cologne",
    date: "November 10th, 2023",
    description:
      "Cologne's Lanxess Arena hosts Cyborg Symphony, Digital Dimension, Quantum Quasar, Synergy Shift and Drown The Sun.",
  },
];
