import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  AcadamicSemesterCode,
  AcadamicSemesterName,
  Months,
} from './academicSemester.constent';
import AppError from '../../../errors/AppError';
import httpStatus from 'http-status';

const AcdemicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcadamicSemesterName,
    },

    year: {
      type: String,
      required: true,
    },

    code: {
      type: String,
      required: true,
      enum: AcadamicSemesterCode,
    },
    startMonth: {
      type: String,
      enum: Months,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

AcdemicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExists) {
    throw new AppError(httpStatus.NOT_EXTENDED, 'Semester is already exists');
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcadamicSemester',
  AcdemicSemesterSchema,
);
