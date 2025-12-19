import React from "react";
import { Box, Typography } from "@mui/material";
import { ISegmentsOptions, SEGMENTS_OPTIONS } from "../../lib/marksOptions";

interface IProgressSegmentProps {
  active: boolean;
  label: string;
  position: number;
  align: string;
}

export const ProgressSegment: React.FC<IProgressSegmentProps> = (props) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: 12,
        borderRadius: 999,
        backgroundColor: props.active ? "#111" : "#EAEAEA",
        transition: "background-color 0.25s ease",
        position: "relative",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          mt: 0.5,
          fontSize: 11,
          color: props.active ? "#111" : "#999",
          fontWeight: props.active ? 500 : 400,
          px: 0.5,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          textAlign: "center",
        }}
      >
        {props.label}
      </Typography>
    </Box>
  );
};

export const SegmentedProgress: React.FC<ISegmentsOptions> = ({ value }) => {
  const progress = Math.min(100, Math.max(0, value));

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ display: "flex", gap: 1 }}>
        {SEGMENTS_OPTIONS.map((segment) => (
          <ProgressSegment
            key={segment.label}
            label={segment.label || ""}
            position={segment.value}
            align={segment.align || "center"}
            active={progress >= segment.value}
          />
        ))}
      </Box>
    </Box>
  );
};
