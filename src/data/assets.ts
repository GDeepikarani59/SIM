export interface Asset {
  id: string;
  name: string;
  type: string;
  productInfo: string;
  repairInstructions: string;
  billOfMaterials: string[];
  cadModelUrl: string;
}

export const assets: Asset[] = [
  {
    id: "1",
    name: "AlphaBot 3000",
    type: "Humanoid",
    productInfo: "AlphaBot 3000 is designed for personal assistance.",
    repairInstructions: "1. Unscrew the back panel. 2. Replace battery.",
    billOfMaterials: ["Motor X", "Sensor Y", "Battery Z"],
    cadModelUrl: "https://example.com/cad/alphabot",
  },
  {
    id: "2",
    name: "BetaDroid X",
    type: "Industrial",
    productInfo: "BetaDroid is an industrial automation robot.",
    repairInstructions: "1. Check circuit. 2. Update firmware.",
    billOfMaterials: ["Actuator A", "Camera B", "Processor C"],
    cadModelUrl: "https://example.com/cad/betadroid",
  },
  {
    id: "3",
    name: "GammaHelper 2",
    type: "Service",
    productInfo: "GammaHelper assists in hospital logistics.",
    repairInstructions: "1. Calibrate wheels. 2. Test navigation system.",
    billOfMaterials: ["Wheel Motor", "LIDAR Sensor", "Battery Pack"],
    cadModelUrl: "https://example.com/cad/gammahelper",
  },
  {
    id: "4",
    name: "DeltaArm Pro",
    type: "Industrial",
    productInfo: "DeltaArm Pro handles heavy-duty material lifting.",
    repairInstructions: "1. Lubricate joints. 2. Tighten bolts.",
    billOfMaterials: ["Hydraulic Pump", "Joint Bearing", "Control Unit"],
    cadModelUrl: "https://example.com/cad/deltaarm",
  },
  {
    id: "5",
    name: "EchoScout Mini",
    type: "Exploration",
    productInfo: "EchoScout Mini explores difficult terrains.",
    repairInstructions: "1. Clean treads. 2. Replace sensor module.",
    billOfMaterials: ["Tread Belt", "IMU Sensor", "Solar Panel"],
    cadModelUrl: "https://example.com/cad/echoscout",
  },
  {
    id: "6",
    name: "ZetaFlyer 1",
    type: "Drone",
    productInfo: "ZetaFlyer is a lightweight aerial survey drone.",
    repairInstructions: "1. Check propellers. 2. Calibrate GPS.",
    billOfMaterials: ["Propeller", "Flight Controller", "GPS Module"],
    cadModelUrl: "https://example.com/cad/zetaflyer",
  },
];
