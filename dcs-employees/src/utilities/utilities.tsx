//Convert Dates to years
export const getEmploymentYears = (startDate: Date, endDate: Date) => {
  const end = new Date(endDate);
  const start = new Date(startDate);

  let diff = (end.getTime() - start.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return Math.abs(Math.round(diff / 365.25));
};

// Calculate One year from start date - for on-going employees)
export const onGoingOneYr = (startDate: any) => {
  let start = new Date(startDate);
  let oneYearFromDate = start.setFullYear(start.getFullYear() + 1);
  let convertedDate = new Date(oneYearFromDate);
  return convertedDate.toISOString().split("T")[0];
};

export const confirmBeforeExecution = (
  message: string,
  ifOk: string,
  ifCancel: string
) => {
  let text = message;
  if (confirm(text) == true) {
    text = ifOk;
  } else {
    text = ifCancel;
  }
};
