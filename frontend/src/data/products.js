// Product content — verbatim from source docs
const products = {
  "universal-testing-machines": {
    name: "Universal Testing Machines",
    eyebrow: "UTM · Servo-Electric & Servo-Hydraulic",
    overview:
      "BISS Labs offers a comprehensive range of Universal Testing Machines (UTMs) designed to evaluate the mechanical properties of materials and components with exceptional accuracy and repeatability. Built on advanced testing technology, our systems support tensile, compression, flexural, shear, peel, and other mechanical tests across metals, composites, plastics, elastomers, and engineering materials. Our Universal Testing Machines help manufacturers, research institutions, and quality laboratories validate product performance while complying with ASTM, ISO, BIS, and international testing standards.",
    features: [
      "High precision load measurement",
      "Load capacities from laboratory to industrial scale",
      "Servo-electric and servo-hydraulic systems",
      "Automated testing software",
      "Advanced data acquisition",
      "Temperature chamber compatibility",
      "Custom fixtures and grips",
      "ASTM & ISO compliant testing",
    ],
    applications: ["Tensile Testing", "Compression Testing", "Flexural Testing", "Peel Testing", "Shear Testing", "Component Validation"],
    industries: ["Automotive", "Aerospace", "Medical Devices", "Research", "Manufacturing", "Education"],
    image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=1600",
  },
  "damper-test-systems": {
    name: "Damper Test Systems",
    eyebrow: "Servo-Hydraulic · Multi-Station",
    overview:
      "BISS Labs provides advanced Damper Test Systems engineered for the performance evaluation and durability testing of suspension components. Our systems accurately simulate real-world operating conditions to measure damping characteristics, endurance, and dynamic behaviour. Available in single-station, dual-station, and multi-station configurations, these systems are ideal for automotive OEMs, component manufacturers, and research laboratories.",
    features: ["Servo-hydraulic control", "Dynamic load simulation", "Single & Multi-station systems", "Real-time performance analysis", "Automated reporting"],
    applications: ["Shock Absorbers", "Dampers", "Suspension Systems", "Vehicle Components"],
    industries: ["Automotive", "Motorsport", "Rail", "Research"],
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1600",
  },
  "structural-test-systems": {
    name: "Structural Test Systems",
    eyebrow: "Multi-Axis · Full-Scale",
    overview:
      "BISS Structural Test Systems are designed for full-scale component and assembly testing. These systems enable engineers to evaluate structural integrity, durability, fatigue life, and performance under complex loading conditions. Using multi-axis actuators and programmable controls, structural systems simulate real operating environments for automotive, aerospace, railway, and industrial applications.",
    features: ["Multi-axis loading", "Servo-hydraulic actuators", "Modular frame design", "Custom test rigs", "Large-capacity systems"],
    applications: ["Vehicle Chassis", "EV Components", "Aircraft Structures", "Industrial Equipment"],
    industries: ["Automotive", "Aerospace", "Railway", "Renewable Energy"],
    image: "https://images.unsplash.com/photo-1581093577421-f561a654a353?w=1600",
  },
  "upgrades-retrofits": {
    name: "Machine Upgrades & Retrofits",
    eyebrow: "Modernise · Extend Machine Life",
    overview:
      "Extend the life and performance of your existing testing equipment with BISS upgrade and retrofit solutions. Our engineering team modernizes legacy systems by integrating advanced controllers, software, sensors, actuators, and safety features without replacing the complete machine.",
    features: ["Controller upgrades", "Software modernization", "Hydraulic upgrades", "Servo conversion", "Safety enhancements", "Machine refurbishment"],
    applications: ["Lower investment", "Improved performance", "Reduced downtime", "Extended machine life"],
    industries: ["Manufacturing", "Research", "Universities", "Legacy OEM fleets"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600",
  },
  "accessories": {
    name: "Testing Accessories",
    eyebrow: "OEM · Specimen Handling",
    overview:
      "BISS provides a comprehensive range of testing accessories to enhance the capability, flexibility, and accuracy of material testing systems. Every accessory is designed for precise specimen handling and repeatable testing.",
    features: ["Grips", "Fixtures", "Compression Platens", "Environmental Chambers", "Alignment Tools", "Calibration Fixtures"],
    applications: ["Tensile", "Compression", "Flexural", "Environmental"],
    industries: ["All BISS UTM & Structural systems"],
    image: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?w=1600",
  },
  "controllers": {
    name: "Testing System Controllers",
    eyebrow: "Digital · Closed-Loop",
    overview:
      "Our intelligent digital controllers deliver accurate machine control, data acquisition, and test automation for mechanical and structural testing applications.",
    features: ["Closed-loop control", "Multi-channel operation", "Real-time monitoring", "Safety interlocks", "Programmable test sequences"],
    applications: ["UTM control", "Structural rigs", "Fatigue systems", "Custom multi-actuator setups"],
    industries: ["Automotive", "Aerospace", "Research"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600",
  },
  "actuators": {
    name: "Servo-Hydraulic & Servo-Electric Actuators",
    eyebrow: "Static · Dynamic · Fatigue",
    overview:
      "BISS offers high-performance actuators for static, dynamic, fatigue, and structural testing. Designed for long-term reliability, they provide precise force and displacement control across a wide range of applications.",
    features: ["Precise force control", "Precise displacement control", "Static & dynamic capability", "Long service life", "Modular integration"],
    applications: ["Fatigue Testing", "Structural Testing", "Component Validation", "Dynamic Testing"],
    industries: ["Automotive", "Aerospace", "Rail"],
    image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=1600",
  },
  "grips-fixtures": {
    name: "Grips & Fixtures",
    eyebrow: "Reliable Specimen Gripping",
    overview:
      "Reliable specimen gripping is essential for accurate testing. BISS provides a wide selection of grips and fixtures for tensile, compression, flexural, shear, peel, and torsion testing across various materials.",
    features: ["Wedge Grips", "Hydraulic Grips", "Mechanical Grips", "Compression Fixtures", "Bend Fixtures", "Torsion Fixtures", "Custom Fixtures"],
    applications: ["Metals", "Composites", "Plastics", "Elastomers"],
    industries: ["Automotive", "Aerospace", "Medical"],
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600",
  },
  "load-cells": {
    name: "Precision Load Cells",
    eyebrow: "1N to 2MN · ASTM Compliant",
    overview:
      "BISS precision load cells provide highly accurate force measurement for mechanical testing systems. Engineered for durability and repeatability, they ensure reliable data collection across low-force and high-capacity applications.",
    features: ["High accuracy", "Wide force ranges", "Long-term stability", "Easy integration", "ASTM compliant"],
    applications: ["UTM", "Structural rigs", "Component test benches"],
    industries: ["Automotive", "Aerospace", "Medical", "Research"],
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1600",
  },
  "extensometers": {
    name: "Extensometers",
    eyebrow: "Contact & Non-Contact Strain",
    overview:
      "Measure strain with exceptional precision using BISS extensometers. Our solutions support contact and non-contact strain measurement for tensile, compression, fatigue, and high-temperature testing.",
    features: ["Contact extensometers", "Non-contact extensometers", "High-temperature capability", "Fatigue-rated", "ASTM / ISO compliant"],
    applications: ["Metals", "Plastics", "Composites", "Elastomers", "High-temperature materials"],
    industries: ["Automotive", "Aerospace", "Research"],
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=1600",
  },
  "software": {
    name: "Testing Software",
    eyebrow: "Workflows · Reports · Data",
    overview:
      "BISS testing software simplifies machine operation, data acquisition, analysis, and report generation. Designed for research, production, and quality laboratories, our software enables efficient testing with customizable workflows and automated reporting.",
    features: ["Test automation", "Graphical data analysis", "ASTM & ISO templates", "Custom report generation", "Database management", "Secure user access"],
    applications: ["UTM software", "Structural test control", "Fatigue analysis", "Composite test suites"],
    industries: ["Automotive", "Aerospace", "Research", "Manufacturing"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600",
  },
  "calibration-equipment": {
    name: "Calibration Equipment",
    eyebrow: "NABL · Traceable Standards",
    overview:
      "Accurate testing begins with precise calibration. BISS offers calibration equipment and services to ensure testing machines maintain accuracy, repeatability, and compliance with national and international standards.",
    features: ["Force Calibration", "Displacement Calibration", "Extensometer Calibration", "Verification Services", "Preventive Maintenance"],
    applications: ["Improved measurement accuracy", "Regulatory compliance", "Reduced testing uncertainty", "Enhanced equipment reliability"],
    industries: ["Manufacturing", "Automotive", "Aerospace", "Research"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600",
  },
};

export default products;
