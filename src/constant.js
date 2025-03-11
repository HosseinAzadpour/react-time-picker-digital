export const Hours_24 = Array.from({ length: 24 }, (_, i) =>
  String(i).padStart(2, "0")
);
export const Minutes_60 = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0")
);
export const Hours = Array(8).fill(Hours_24).flat();
export const Minutes = Array(8).fill(Minutes_60).flat();
