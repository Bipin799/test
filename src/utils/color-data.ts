export type PaletteGroup = {
  name: string;
  colors: {
    label: string;
    value: string;
  }[];
};

export const colorData: PaletteGroup[] = [
  {
    name: "grey",
    colors: [
      { label: "0", value: "#FFFFFF" },
      { label: "50", value: "#F8FAFC" },
      { label: "100", value: "#EEF2F6" },
      { label: "200", value: "#E3E8EF" },
      { label: "300", value: "#C3CCD8" },
      { label: "400", value: "#9FAAB8" },
      { label: "500", value: "#697586" },
      { label: "600", value: "#4B5565" },
      { label: "700", value: "#364152" },
      { label: "900", value: "#121926" },
    ],
  },

  {
    name: "primary",
    colors: [
      { label: "lighter", value: "#E3F2FD" },
      { label: "light", value: "#90CAF9" },
      { label: "main", value: "#2196F3" },
      { label: "dark", value: "#1E88E5" },
      { label: "darkest", value: "#1565C0" },
    ],
  },

  {
    name: "secondary",
    colors: [
      { label: "lighter", value: "#EDE7F6" },
      { label: "light", value: "#B39DDB" },
      { label: "main", value: "#673AB7" },
      { label: "dark", value: "#5E35B1" },
      { label: "darkest", value: "#4527A0" },
    ],
  },

  {
    name: "success",
    colors: [
      { label: "lighter", value: "#D4FFE0" },
      { label: "light", value: "#61FFB2" },
      { label: "main", value: "#11C86F" },
      { label: "dark", value: "#00C853" },
      { label: "darkest", value: "#079442" },
    ],
  },

  {
    name: "error",
    colors: [
      { label: "lighter", value: "#FFE3E3" },
      { label: "light", value: "#EF9A9A" },
      { label: "main", value: "#F44336" },
      { label: "dark", value: "#C62828" },
      { label: "darkest", value: "#A21313" },
    ],
  },

  {
    name: "orange",
    colors: [
      { label: "lighter", value: "#FFEBD5" },
      { label: "light", value: "#FFB266" },
      { label: "main", value: "#FF8000" },
      { label: "dark", value: "#CC6600" },
      { label: "darkest", value: "#AE5802" },
    ],
  },

  {
    name: "warning",
    colors: [
      { label: "lighter", value: "#FFF6D7" },
      { label: "light", value: "#FFE479" },
      { label: "main", value: "#F8BB05" },
      { label: "dark", value: "#E6AD00" },
      { label: "darkest", value: "#C29614" },
    ],
  },
];
