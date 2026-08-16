export const site = {
  name: "Isaac Kremer",
  shortName: "Isaac",
  title: "Electrical & Computer Engineering Student",
  tagline:
    "I work across electrical systems, embedded hardware, manufacturing, and hands-on engineering problem solving.",
  location: "Pennsylvania",
  email: "Isaac.Kremer05@gmail.com",
  github: "https://github.com/Ilkremer",
  linkedin: "https://www.linkedin.com/in/isaac-kremer/",
};

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Engineering Work", href: "#work" },
  { label: "Current Focus", href: "#current-focus" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    company: "Blue Origin",
    role: "Electrical Systems Intern",
    period: "January 2026 - April 2026",
    description:
      "Supported New Glenn electrical systems work spanning harness design and release, avionics-lab organization, and systems-engineering support.",
  },
  {
    company: "SFS Group",
    role: "Engineering Intern",
    period: "August 2025 - December 2025; June 2026 - August 2026",
    description:
      "Worked on manufacturing and product-support engineering projects involving tooling, fixtures, material compatibility, process improvements, and troubleshooting.",
  },
  {
    company: "Kline Process Systems",
    role: "Electrical Technician Intern",
    period: "March 2024 - August 2025",
    description:
      "Built and troubleshot industrial electrical systems, including control-panel wiring, terminations, and EMI-related debugging.",
  },
  {
    company: "East Penn Manufacturing",
    role: "Co-op",
    period: "June 2023 - August 2023",
    description:
      "Supported manufacturing equipment through preventive maintenance, troubleshooting, electrical work, and hands-on plant engineering.",
  },
];

export const engineeringWork = [
  {
    title: "Aerospace Electrical Systems",
    context: "Blue Origin · New Glenn",
    description:
      "Contributed to production-relevant electrical systems work involving harnessing, avionics support, documentation, and cross-functional engineering processes.",
    tags: ["Electrical Harnessing", "Creo", "Avionics", "Documentation"],
  },
  {
    title: "Manufacturing Tooling & Process Improvement",
    context: "SFS Group",
    description:
      "Worked on practical engineering problems where tooling, materials, process constraints, and manufacturability had to be considered together.",
    tags: ["Tooling", "Manufacturing", "Materials", "Process Improvement"],
  },
  {
    title: "Electrical & Mechatronics Troubleshooting",
    context: "Industrial + technical experience",
    description:
      "Hands-on work with wiring, electrical panels, equipment maintenance, instrumentation, troubleshooting, and debugging physical systems.",
    tags: ["Troubleshooting", "Panel Wiring", "Instrumentation", "Mechatronics"],
  },
];

export const currentFocus = [
  {
    title: "FPGA & Digital Hardware",
    status: "Early-stage learning",
    description:
      "Building fundamentals in synchronous digital logic, RTL design, SystemVerilog, simulation, and FPGA development through progressively larger exercises and projects.",
    tags: ["SystemVerilog", "RTL", "Digital Logic", "FPGA"],
  },
  {
    title: "ESP32 Smart Thermostat",
    status: "Planning / early development",
    description:
      "Planning an ESP32-based thermostat as a longer-term embedded systems project involving sensing, local controls, relay outputs, an OLED interface, and Home Assistant integration.",
    tags: ["ESP32-C6", "Embedded Systems", "Electronics", "Home Assistant"],
  },
];

export const skillGroups = [
  {
    title: "Electrical + Hardware",
    items: ["Electrical Harnessing", "Panel Wiring", "Circuit Debugging", "Instrumentation", "Soldering"],
  },
  {
    title: "Embedded Systems",
    items: ["ESP32", "GPIO & Peripheral Interfacing", "I2C / UART", "Embedded C/C++", "Hardware-Software Troubleshooting"],
  },
  {
    title: "Software + Systems",
    items: ["C / C++", "Python", "Linux"],
  },
  {
    title: "Engineering",
    items: ["Creo", "Fusion 360", "Troubleshooting", "Technical Documentation", "Mechatronics"],
  },
];
