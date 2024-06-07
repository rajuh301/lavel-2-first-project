export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcadamicSemesterName = 'Autumn' | 'Summar' | 'Faii';
export type TAcadamicSemesterCode = '01' | '02' | '03';

export type TAcademicSemester = {
  name: TAcadamicSemesterName;
  code: TAcadamicSemesterCode;
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};

export type TAcademicSemesterNameCodeMapper = {
  [key: string]: string;
};
