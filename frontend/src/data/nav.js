// Navigation data — mega-menu structure
export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Products",
    to: "/products",
    groups: [
      {
        title: "Testing Machines & Systems",
        items: [
          { name: "Universal Testing Machines", slug: "universal-testing-machines", tag: "UTM" },
          { name: "Damper Test Systems", slug: "damper-test-systems", tag: "DYNAMIC" },
          { name: "Structural Test Systems", slug: "structural-test-systems", tag: "MULTI-AXIS" },
          { name: "Upgrades & Retrofits", slug: "upgrades-retrofits", tag: "SERVICE" },
        ],
      },
      {
        title: "Components & Instrumentation",
        items: [
          { name: "Controllers", slug: "controllers", tag: "DIGITAL" },
          { name: "Actuators", slug: "actuators", tag: "SERVO" },
          { name: "Grips & Fixtures", slug: "grips-fixtures", tag: "PRECISION" },
          { name: "Load Cells", slug: "load-cells", tag: "1N–2MN" },
          { name: "Extensometers", slug: "extensometers", tag: "STRAIN" },
          { name: "Accessories", slug: "accessories", tag: "OEM" },
        ],
      },
      {
        title: "Software & Calibration",
        items: [
          { name: "Testing Software", slug: "software", tag: "ASTM/ISO" },
          { name: "Calibration Equipment", slug: "calibration-equipment", tag: "NABL" },
        ],
      },
    ],
  },
  {
    label: "Testing",
    to: "/testing",
    groups: [
      {
        title: "Mechanical Testing",
        items: [
          { name: "Tensile Testing", slug: "tensile-testing", tag: "ASTM E8" },
          { name: "Fracture Toughness", slug: "fracture-toughness", tag: "ASTM E399" },
          { name: "Low Cycle Fatigue", slug: "low-cycle-fatigue", tag: "ASTM E606" },
          { name: "Creep & Stress Rupture", slug: "creep-stress-rupture", tag: "≤ 1000°C" },
          { name: "Fatigue (S-N Curve)", slug: "fatigue-sn", tag: "DURABILITY" },
          { name: "High Strain Rate & DIC", slug: "high-strain-rate-dic", tag: "DYNAMIC" },
          { name: "Mechanical Testing", slug: "mechanical-testing", tag: "OVERVIEW" },
        ],
      },
      {
        title: "Composite Testing",
        items: [
          { name: "GFRP Composite Testing", slug: "gfrp-composite", tag: "ISO 527-4" },
          { name: "CFRP Composite Testing", slug: "cfrp-composite", tag: "ASTM D3039" },
        ],
      },
      {
        title: "Structural & Automotive",
        items: [
          { name: "Structural Testing", slug: "structural-testing", tag: "16 ACTUATORS" },
          { name: "EV Structural Testing", slug: "ev-structural-testing", tag: "EV" },
          { name: "Automotive Durability", slug: "automotive-durability", tag: "FATIGUE" },
        ],
      },
      {
        title: "Medical",
        items: [
          { name: "Medical Device Testing", slug: "medical-device", tag: "IMPLANTS" },
        ],
      },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export const flatProducts = nav.find((n) => n.label === "Products").groups.flatMap((g) =>
  g.items.map((i) => ({ ...i, group: g.title }))
);

export const flatTests = nav.find((n) => n.label === "Testing").groups.flatMap((g) =>
  g.items.map((i) => ({ ...i, group: g.title }))
);
