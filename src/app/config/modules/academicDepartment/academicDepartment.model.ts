import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import AppError from '../../../errors/AppError';
import httpStatus from 'http-status';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
  },
);

// academicDepartmentSchema. ('save', async function (next) {
//   const isDepartmentExits = await AcademicDepartment.findOne({
//     name: this.name,
//   });

//   if (isDepartmentExits) {
//     throw new AppError(
//       httpStatus.NOT_ACCEPTABLE,
//       'This department is already exist',
//     );
//   }

//   next();
// });

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isDepartmentExits = await AcademicDepartment.findOne(query);

  if (!isDepartmentExits) {
    throw new AppError(httpStatus.NOT_FOUND, 'This department does not exist');
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
