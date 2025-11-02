# 🛠️ Merge Time Ranges – SDE Assignment (Saralweb)

This project solves the problem of merging overlapping or closely spaced time ranges using a given threshold.

---

## Problem Statement

You are given an array of time ranges (`[start, end]`) where:
- Time is given in **UNIX timestamps (milliseconds)**
- Ranges may **overlap or touch**
- Small gaps between ranges (≤ threshold) should also be **merged**
- Return sorted and non-overlapping merged ranges

---

## Approach

1. **Sort the input ranges** by their `start` time to make processing easier.

2. **Initialize a result array** with the first range.

3. **Iterate through each range**:
   - Compare current range with the last merged range.
   - If current range starts:
     - **Before or within threshold** of the previous end → merge them  
       `if (current.start <= last.end + threshold)`  
       → Update the last range’s end to `max(last.end, current.end)`
     - Else → add it as a **new separate range**

4. **Return the result** array which now contains clean, non-overlapping ranges.

This ensures merging of:
- Overlapping ranges  
- Touching ranges  
- Ranges with small gaps (≤ threshold)

---

## 📂 Project Structure

sde-assignment/

  -├── mergeTimeRanges.js # Main logic (NodeJS module)

  -├── test.js # Test cases

  -├── package.json # Project metadata & script

└── README.md # Documentation 
