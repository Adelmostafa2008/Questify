import React from "react";

const ActivityGrid = ({ data }) => {
  // Generate all days of the current year
  const year = new Date().getFullYear();
  const start = new Date(year, 0, 1); // Jan 1
  const end = new Date(year, 11, 31); // Dec 31
  const days = [];

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }

  // Custom shades of #ce7d63 (light → dark)
  const shades = [
    "bg-[#2b1b17]", // empty
    "bg-[#f2c6bc]", // very light
    "bg-[#e79e8b]", // light
    "bg-[#d37b63]", // medium
    "bg-[#ce7d63]", // main
  ];

  // Function to pick color based on activity count
  const getColor = (count) => {
    if (count === 0) return shades[0];
    if (count < 2) return shades[1];
    if (count < 4) return shades[2];
    if (count < 6) return shades[3];
    return shades[4];
  };

  // Format date as yyyy-mm-dd
  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  // Group days into weeks
  const weeks = Array.from({ length: Math.ceil(days.length / 7) }).map(
    (_, weekIndex) => days.slice(weekIndex * 7, (weekIndex + 1) * 7)
  );

  return (
    <div className="flex gap-1">
      {weeks.map((week, weekIndex) => {
        // Check if this week starts a new month
        const firstDay = week[0];
        const isMonthStart = firstDay.getDate() === 1;

        return (
          <div
            key={weekIndex}
            className={`flex flex-col gap-1 ${isMonthStart ? "ml-2" : ""}`}
          >
            {week.map((day, dayIndex) => {
              const dateKey = formatDate(day);
              const count = data[dateKey] || 0;
              return (
                <div
                  key={dayIndex}
                  title={`${dateKey}: ${count} submissions`}
                  className={`w-3 h-3 rounded-sm ${getColor(count)}`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ActivityGrid;
