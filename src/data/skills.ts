// The skill taxonomy. Projects and experience entries reference skills by `id`
// in their `skills:` frontmatter; the build fails on an unknown id.
// `featured: true` puts a skill in the "Key skills" block on the home page.

export type Skill = { id: string; name: string; note?: string; featured?: boolean };
export type SkillCategory = {
  id: string;
  name: string;
  blurb: string;
  // Hue for this category's pills and accents (see --cat-* in global.css).
  tone: 'forest' | 'sky' | 'honey' | 'plum' | 'slate' | 'moss' | 'violet' | 'rose' | 'teal' | 'cobalt';
  skills: Skill[];
};

export const categories: SkillCategory[] = [
  {
    id: 'pcb',
    name: 'PCB Design & EDA',
    blurb: 'Taking a circuit from schematic to a board that can be fabricated.',
    tone: 'forest',
    skills: [
      { id: 'kicad', name: 'KiCAD', featured: true },
      { id: 'schematic-capture', name: 'Schematic capture', featured: true },
      { id: 'pcb-layout', name: 'PCB layout', featured: true },
      { id: 'drc', name: 'Design rule checks (DRC)' },
    ],
  },
  {
    id: 'analog',
    name: 'Analog & Circuit Analysis',
    blurb: 'Working out what a circuit should do before it is built.',
    tone: 'sky',
    skills: [
      { id: 'nodal-analysis', name: 'Nodal analysis', featured: true },
      { id: 'transfer-functions', name: 'Transfer function derivation' },
      { id: 'filter-design', name: 'Filter design', featured: true },
      { id: 'component-selection', name: 'Component selection' },
      { id: 'ltspice', name: 'LTSpice simulation', featured: true },
      { id: 'op-amps', name: 'Op-amp circuits', featured: true },
      { id: 'comparator-logic', name: 'Comparator and latch logic' },
    ],
  },
  {
    id: 'bench',
    name: 'Bench & Build',
    blurb: 'Putting hardware together and getting it to behave.',
    tone: 'honey',
    skills: [
      { id: 'soldering', name: 'Hand-soldering', featured: true },
      { id: 'bench-tuning', name: 'Bench tuning' },
      { id: 'netlist-verification', name: 'Netlist verification' },
      { id: 'oscilloscope', name: 'Oscilloscope measurement' },
      { id: 'breadboarding', name: 'Breadboard prototyping' },
      { id: 'logic-analyzer', name: 'Logic analyzer debugging' },
      { id: 'test-circuits', name: 'Test circuit design' },
    ],
  },
  {
    id: 'test',
    name: 'Integration & Test',
    blurb: 'Bringing up chips and testing flight hardware.',
    tone: 'moss',
    skills: [
      { id: 'analog-ic-bring-up', name: 'Analog IC bench bring-up', featured: true },
      { id: 'acceptance-testing', name: 'Acceptance testing', featured: true },
      { id: 'environmental-test', name: 'Environmental test', note: 'vibration, thermal cycling' },
      { id: 'charge-discharge', name: 'Charge and discharge testing' },
      { id: 'flight-hardware', name: 'Flight hardware handling' },
      { id: 'smu', name: 'Source Measure Units (SMUs)' },
      { id: 'test-scripts', name: 'Running test scripts' },
      { id: 'test-data-processing', name: 'Test data post-processing' },
      { id: 'excel', name: 'Excel' },
    ],
  },
  {
    id: 'systems',
    name: 'Systems Engineering',
    blurb: 'Requirements, constraints, and making sure the pieces fit.',
    tone: 'plum',
    skills: [
      { id: 'doors', name: 'IBM DOORS/Jazz', featured: true },
      { id: 'requirements', name: 'Requirements management' },
      { id: 'swap-c', name: 'SWAP-C analysis' },
      { id: 'matlab-sim', name: 'MATLAB simulation testing' },
      { id: 'mil-std-681f', name: 'MIL-STD-681F' },
      { id: 'harness-docs', name: 'Wire harness documentation' },
      { id: 'technical-docs', name: 'Technical documentation' },
      { id: 'data-validation', name: 'Test data validation' },
    ],
  },
  {
    id: 'programming',
    name: 'Programming',
    blurb: 'Languages I write code in.',
    tone: 'slate',
    skills: [
      { id: 'python', name: 'Python', featured: true },
      { id: 'c-cpp', name: 'C/C++', featured: true },
      { id: 'data-analysis', name: 'Data analysis' },
      { id: 'matlab', name: 'MATLAB', featured: true },
      { id: 'java', name: 'Java', note: 'FIRST Robotics' },
    ],
  },
  {
    id: 'digital',
    name: 'Digital Design & FPGA',
    blurb: 'RTL, verification, and the FPGA flow.',
    tone: 'cobalt',
    skills: [
      { id: 'verilog', name: 'SystemVerilog / Verilog', featured: true },
      { id: 'cocotb', name: 'cocotb' },
      { id: 'verilator', name: 'Verilator' },
      { id: 'vivado', name: 'Vivado' },
      { id: 'fpga-artix7', name: 'Basys 3 / Artix-7 FPGA' },
      { id: 'git-ci', name: 'Git and GitHub Actions CI' },
      { id: 'linux', name: 'Linux (WSL2)' },
    ],
  },
  {
    id: 'embedded',
    name: 'Embedded & Interfaces',
    blurb: 'Talking to hardware.',
    tone: 'rose',
    skills: [
      { id: 'raspberry-pi', name: 'Raspberry Pi' },
      { id: 'arduino', name: 'Arduino', featured: true },
      { id: 'closed-loop-control', name: 'Closed-loop control' },
      { id: 'mqtt', name: 'MQTT' },
      { id: 'i2c', name: 'I2C' },
      { id: 'spi', name: 'SPI' },
      { id: 'uart', name: 'UART' },
      { id: 'gpio', name: 'GPIO' },
      { id: 'adc', name: 'ADC' },
      { id: 'data-acquisition', name: 'Data acquisition' },
    ],
  },
  {
    id: 'quantum',
    name: 'Quantum',
    blurb: 'Quantum computing, from circuits to community.',
    tone: 'violet',
    skills: [
      { id: 'qiskit', name: 'Qiskit', featured: true },
      { id: 'quantum-fundamentals', name: 'Quantum fundamentals' },
    ],
  },
  {
    id: 'leadership',
    name: 'Leadership',
    blurb: 'Running teams and events.',
    tone: 'teal',
    skills: [
      { id: 'team-lead', name: 'Team leadership', featured: true },
      { id: 'event-organizing', name: 'Event organizing' },
      { id: 'pitching', name: 'Scoping and pitching' },
    ],
  },
];

const byId = new Map<string, { skill: Skill; category: SkillCategory }>();
for (const category of categories) {
  for (const skill of category.skills) {
    if (byId.has(skill.id)) throw new Error(`Duplicate skill id: ${skill.id}`);
    byId.set(skill.id, { skill, category });
  }
}

export function lookupSkill(id: string) {
  const hit = byId.get(id);
  if (!hit) throw new Error(`Unknown skill id "${id}". Add it to src/data/skills.ts.`);
  return hit;
}

/** Group a list of skill ids by category, keeping taxonomy order. */
export function groupSkills(ids: string[]) {
  const wanted = new Set(ids.map((id) => lookupSkill(id).skill.id));
  return categories
    .map((c) => ({ category: c, skills: c.skills.filter((s) => wanted.has(s.id)) }))
    .filter((g) => g.skills.length > 0);
}
