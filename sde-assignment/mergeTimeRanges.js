/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
  if (!ranges || ranges.length === 0) return [];

  ranges.sort((a, b) => a[0] - b[0]);

  const merged = [ranges[0]];

  for (let i = 1; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    const last = merged[merged.length - 1];

    if (start <= last[1] + threshold) {
      last[1] = Math.max(last[1], end);
    } else {
      merged.push([start, end]);
    }
  }

  return merged;
};

module.exports = { mergeTimeRanges };
