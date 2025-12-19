export interface ISegmentsOptions {
  value: number;
  label?: string;
  align?: string;
}

export const SEGMENTS_OPTIONS: ISegmentsOptions[] = [
  { label: "min", value: 0, align: "left" },
  { label: "50%", value: 50 },
  { label: "75%", value: 75 },
  { label: "max", value: 100, align: "right" },
];
