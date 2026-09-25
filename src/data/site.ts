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
    title: "Unix Compute Cluster",
    status: "Primary focus · In progress",
    description:
      "Building a small Linux compute cluster from repurposed desktop hardware to develop practical experience with system administration, networking, and distributed computing. Current work centers on the cluster hardware and network setup, with node automation, SLURM scheduling, MPI applications, and benchmarking planned next.",
    tags: ["Debian Linux", "Networking", "Cluster Management", "Distributed Computing"],
  },
  {
    title: "ECE 1111 · Programming & Embedded Systems",
    status: "Coursework · In progress",
    description:
      "Developing C/C++ and Python fundamentals through ECE 1111 assignments and labs, including Unix command-line workflows, Makefile builds, standard input/output, and input validation. Arduino and micro:bit exercises in Tinkercad connect programming to analog temperature sensing and LED control. Recent work focuses on streaming sensor data, serial plotting, and introductory discrete Fourier transforms—learning how sampling and frequency bins relate to a signal.",
    tags: ["C/C++ & Python", "Unix & Makefiles", "Arduino & micro:bit", "Sensor Interfacing", "Signal Processing Basics"],
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
