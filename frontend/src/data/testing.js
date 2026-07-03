// Testing content — verbatim from source docs
const testing = {
  "mechanical-testing": {
    name: "Mechanical Testing",
    tagline: "Comprehensive Mechanical Testing Solutions",
    overview:
      "BISS offers advanced mechanical testing services to evaluate the strength, durability, deformation, fatigue life, and fracture behaviour of engineering materials. Testing is performed using advanced servo-hydraulic and electromechanical systems in accordance with ASTM, ISO, and customer-specific standards.",
    standards: [
      { code: "ASTM", label: "American Society for Testing & Materials" },
      { code: "ISO", label: "International Organization for Standardization" },
    ],
    tempMin: -150, tempMax: 1200,
    specs: ["Sample Geometry: Flat & Round Specimens", "Static & Dynamic Loading", "Crack Growth Analysis", "Stress-Strain Measurement"],
    applications: ["Automotive", "Aerospace", "Defence", "Power", "Oil & Gas", "Railways", "Heavy Engineering"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600",
  },
  "tensile-testing": {
    name: "Tensile Testing",
    tagline: "Accurate Tensile Property Evaluation",
    overview:
      "BISS performs tensile testing to determine yield strength, ultimate tensile strength, elongation, and modulus of elasticity for metallic materials.",
    standards: [
      { code: "ASTM E8", label: "Tension Testing of Metallic Materials" },
      { code: "ASTM E21", label: "Elevated Temperature Tension" },
      { code: "ASTM E132", label: "Poisson's Ratio at Room Temperature" },
    ],
    tempMin: -150, tempMax: 1200,
    specs: ["Flat & Round Specimens", "Stress-Strain Curve Generation", "Elevated Temperature Testing"],
    applications: ["Metallic materials", "Alloys", "Structural steel", "Aerospace metals"],
    image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=1600",
  },
  "fracture-toughness": {
    name: "Fracture Toughness Testing",
    tagline: "Measuring Crack Resistance",
    overview:
      "Fracture Toughness testing evaluates a material's resistance to crack initiation and crack propagation under critical loading conditions.",
    standards: [
      { code: "ASTM E399", label: "Plane-Strain Fracture Toughness KIC" },
      { code: "ASTM E1820", label: "Measurement of Fracture Toughness" },
    ],
    tempMin: -150, tempMax: 1000,
    specs: ["Compact Tension Specimens", "Crack Opening Displacement Analysis"],
    applications: ["Structural components", "Pressure vessels", "Pipelines", "Aerospace structures"],
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600",
  },
  "low-cycle-fatigue": {
    name: "Low Cycle Fatigue Testing",
    tagline: "Fatigue Life Under Cyclic Loading",
    overview:
      "Low Cycle Fatigue (LCF) testing evaluates material performance under repeated cyclic loading with high strain amplitudes.",
    standards: [
      { code: "ASTM E606", label: "Strain-Controlled Fatigue Testing" },
    ],
    tempMin: -40, tempMax: 1000,
    specs: ["Flat & Round Specimens", "Hysteresis Curve Analysis", "Cyclic Stress-Strain Evaluation"],
    applications: ["Turbine components", "Aerospace structures", "Automotive powertrain", "Nuclear components"],
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1600",
  },
  "creep-stress-rupture": {
    name: "Creep & Stress Rupture Testing",
    tagline: "Long-Term High Temperature Performance",
    overview:
      "BISS performs creep and stress rupture testing to determine material deformation and failure under sustained loads at elevated temperatures.",
    standards: [
      { code: "ASTM E139", label: "Creep, Creep-Rupture Testing" },
      { code: "ASTM E2714", label: "Creep-Fatigue Testing" },
    ],
    tempMin: 25, tempMax: 1000,
    specs: ["Flat & Round Specimens", "Long Duration Testing", "Creep Curve Analysis", "Time-to-Failure Evaluation"],
    applications: ["Power generation", "Aerospace engines", "Petrochemical", "Nuclear"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600",
  },
  "gfrp-composite": {
    name: "GFRP Composite Testing",
    tagline: "Glass Fibre Reinforced Polymer Testing",
    overview:
      "BISS provides comprehensive mechanical testing for GFRP composite materials used in wind energy, marine, transportation, and structural engineering.",
    standards: [
      { code: "ISO 527-4", label: "Tensile properties — Isotropic & orthotropic FRP" },
      { code: "ASTM D2344", label: "Short-Beam Strength" },
      { code: "ASTM C273", label: "Shear Properties of Sandwich Core" },
      { code: "ISO 14129", label: "In-plane Shear" },
      { code: "ISO 13003", label: "Fatigue behaviour" },
      { code: "ASTM D1781", label: "Climbing Drum Peel" },
      { code: "ASTM D695", label: "Compressive Properties" },
      { code: "ISO 14126", label: "Compressive Properties" },
      { code: "ASTM D3410", label: "Compressive Properties" },
      { code: "ASTM C393", label: "Sandwich Flexure" },
    ],
    tempMin: -60, tempMax: 200,
    specs: ["Tensile", "Compression", "ILSS", "Core Shear", "Tensile Shear", "Drum Peel", "Peel", "Fatigue", "Combined Loading", "Flatwise Compression", "Fatigue Testing (S-N Curve)"],
    applications: ["Wind energy", "Marine", "Transportation", "Structural engineering"],
    image: "https://images.unsplash.com/photo-1507214617719-4a3daf41b9ac?w=1600",
  },
  "cfrp-composite": {
    name: "CFRP Composite Testing",
    tagline: "Carbon Fibre Reinforced Polymer Testing",
    overview:
      "BISS performs advanced testing for aerospace, defence, automotive, and high-performance composite structures.",
    standards: [
      { code: "ASTM D3039", label: "Tensile Properties of Polymer Matrix Composites" },
      { code: "ASTM D3518", label: "In-Plane Shear Response" },
      { code: "ASTM D2344", label: "Short-Beam Strength" },
      { code: "ASTM D6641", label: "Compressive Combined Loading" },
      { code: "ASTM D6742", label: "Filled-Hole Tension / Compression" },
      { code: "ASTM D5961", label: "Bearing Response" },
      { code: "ASTM D6415", label: "Curved Beam Strength" },
      { code: "ASTM D6484", label: "Open-Hole Compressive Strength" },
      { code: "ASTM D1002", label: "Lap-Shear Strength" },
      { code: "ASTM D5868", label: "Lap Shear Adhesion" },
    ],
    tempMin: -60, tempMax: 200,
    specs: ["Un-Notched Tensile", "In-Plane Shear", "Short Beam Shear", "Compression", "Filled Hole Tensile", "Bearing Strength", "Double Shear Bearing", "Curved Beam", "Filled Hole Compression", "Lap Shear", "Adhesive Lap Shear", "Product Validation", "Fastener Pull Through", "Final Product Testing"],
    applications: ["Aerospace", "Defence", "Automotive", "High-performance composite structures"],
    image: "https://images.unsplash.com/photo-1483959651481-dc75b89291f1?w=1600",
  },
  "fatigue-sn": {
    name: "Fatigue Testing (S-N Curve)",
    tagline: "Durability Performance Analysis",
    overview:
      "Fatigue testing evaluates component life under repeated cyclic loading and generates S-N curves to predict service life.",
    standards: [
      { code: "ASTM E466", label: "Force Controlled Constant Amplitude" },
      { code: "ISO 12106", label: "Metallic Materials — Fatigue" },
    ],
    tempMin: -40, tempMax: 600,
    specs: ["Constant Amplitude Loading", "Variable Amplitude Loading", "S-N Curve Generation", "Failure Cycle Analysis", "Durability Validation"],
    applications: ["Automotive components", "Aerospace structures", "Rail bogies", "Wind turbine parts"],
    image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=1600",
  },
  "high-strain-rate-dic": {
    name: "High Strain Rate & DIC Testing",
    tagline: "Dynamic Material Behaviour Analysis",
    overview:
      "BISS offers High Strain Rate Testing integrated with Digital Image Correlation (DIC) for full-field strain measurement and deformation analysis.",
    standards: [
      { code: "ASTM E2208", label: "Full-Field Strain Measurement" },
    ],
    tempMin: -40, tempMax: 300,
    specs: ["High-Speed Camera Measurement", "Speckle Pattern Analysis", "Full Field Strain Mapping", "Displacement Vector Analysis", "Contour Mapping", "Low, Medium & High Strain Rate Testing"],
    applications: ["Automotive crash", "Ballistic materials", "Impact studies", "Advanced research"],
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=1600",
  },
  "structural-testing": {
    name: "Structural Testing",
    tagline: "Full Scale Structural Validation",
    overview:
      "BISS provides structural testing solutions for complete assemblies and engineering structures under static and dynamic loading conditions.",
    standards: [
      { code: "ISO 16750", label: "Environmental Conditions & Testing" },
      { code: "IEC 60068", label: "Environmental Testing" },
    ],
    tempMin: -40, tempMax: 150,
    specs: ["16 Servo-Hydraulic Actuators", "4 T-Slot Test Bed", "Multi-Axis Testing", "Programmable Load Profiles", "Static & Dynamic Loading", "Custom Fixture Design"],
    applications: ["Complete assemblies", "Engineering structures", "Chassis", "Rail bogies"],
    image: "https://images.unsplash.com/photo-1581093577421-f561a654a353?w=1600",
  },
  "ev-structural-testing": {
    name: "EV Structural Testing",
    tagline: "Electric Vehicle Component Validation",
    overview:
      "The structural testing laboratory supports durability and validation testing for EV components under simulated service conditions.",
    standards: [
      { code: "AIS-048", label: "Battery pack durability" },
      { code: "ECE R100", label: "EV safety requirements" },
    ],
    tempMin: -20, tempMax: 85,
    specs: ["EV Chassis", "Suspension Systems", "Battery Mounting Structures", "Vehicle Frames", "Motor Assemblies", "Multi-Axis Road Load Simulation"],
    applications: ["EV chassis", "Battery mounts", "Motor housings", "Powertrain assemblies"],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600",
  },
  "automotive-durability": {
    name: "Automotive Durability Testing",
    tagline: "Component Life Validation",
    overview:
      "BISS validates critical automotive components through durability and fatigue testing.",
    standards: [
      { code: "ISO 26262", label: "Functional Safety Support" },
      { code: "AIS-113", label: "Automotive Component Validation" },
    ],
    tempMin: -40, tempMax: 125,
    specs: ["Latch Durability", "Front Fork Durability", "Motor Housing Durability", "Structural Load Testing", "Fatigue Life Assessment"],
    applications: ["Door latches", "Two-wheeler forks", "Motor housings", "Sub-frames"],
    image: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=1600",
  },
  "medical-device": {
    name: "Medical Device Testing",
    tagline: "Mechanical Testing for Medical Devices",
    overview:
      "BISS provides precision testing solutions for medical devices and implants to ensure safety, durability, and regulatory compliance.",
    standards: [
      { code: "ISO 7206", label: "Hip Joint Prostheses" },
      { code: "ASTM F543", label: "Metallic Medical Bone Screws" },
      { code: "ASTM F1717", label: "Spinal Implant Constructs" },
    ],
    tempMin: 20, tempMax: 60,
    specs: ["Strength Testing on Sutures", "Bone Screw Strength Testing", "Implant Fatigue Testing", "Drug Delivery Device Testing", "Static & Fatigue Loading", "Precision Force Measurement"],
    applications: ["Sutures", "Bone screws", "Implants", "Drug delivery devices"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600",
  },
};

export default testing;

export const labStatistics = [
  { capability: "Temperature Range", value: "−150°C to +1200°C" },
  { capability: "Structural Test Bed", value: "4 T-Slot Bed" },
  { capability: "Servo-Hydraulic Actuators", value: "16 Actuators" },
  { capability: "Loading Type", value: "Static, Dynamic & Multi-Axis" },
  { capability: "Material Categories", value: "Metals, GFRP, CFRP, Medical Devices" },
  { capability: "Standards Supported", value: "ASTM, ISO, EN, BIS" },
  { capability: "Composite Tests", value: "20+ Test Methods" },
  { capability: "Mechanical Test Types", value: "15+" },
  { capability: "Medical Device Applications", value: "Sutures, Bone Screws, Implants, Drug Delivery" },
  { capability: "Structural Applications", value: "EV, Automotive, Latch, Front Fork, Motor Housing" },
];
