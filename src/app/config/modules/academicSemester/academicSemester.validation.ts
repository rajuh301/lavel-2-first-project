import { z } from 'zod';
import {
  AcadamicSemesterCode,
  AcadamicSemesterName,
  Months,
} from './academicSemester.constent';

const createAcdemicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcadamicSemesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcadamicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcadamicSemesterName] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    code: z.enum([...AcadamicSemesterCode] as [string, ...string[]]).optional(),
    startMonth: z.enum([...Months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...Months] as [string, ...string[]]).optional(),
  }),
});

export const AcademicSemesterValidations = {
  createAcdemicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
};
