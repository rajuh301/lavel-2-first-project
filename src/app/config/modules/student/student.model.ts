import validator from 'validator';
import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  // StudentMethod,
  StudentModel,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name are required'],
    trim: true,
    maxlength: [20, 'First name can not be more then 20 characters'],

    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);

        return firstNameStr === value;
      },
      message: '{VALUE} is not in capitalize format',
    },
  },

  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last name are required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: [true, 'Father name are required'] },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String, required: [true, 'Mother name are required'] },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, 'Local guardian name are required'] },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation are required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number are required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address are required'],
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: [true, 'ID is reqired'], unique: true },

    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User ID is reqired'],
      unique: true,
      ref: 'User',
    },

    name: {
      type: userNameSchema,
      required: [true, 'Student name are required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not valid',
      },
      required: true,
    },
    dateOfBirth: { type: Date },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not a valid email type',
      },
    },

    contactNo: {
      type: String,
      required: [true, 'Student contuct number are required'],
    },
    emergencyContactNo: {
      type: String,
      // required: [true, 'Student emargency contuct number are required'],
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },

    permanentAddress: {
      type: String,
      required: [true, 'Permanent address are required'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address are required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian are required'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian are required'],
    },
    profileImage: { type: String },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AdmissionSemester',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// virtual
studentSchema.virtual('fullName').get(function () {
  return `${this?.name?.firstName} ${this?.name?.middleName} ${this?.name?.lastName}`;
});

// Query Middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });

  next();
});

// Creating custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existsingUser = await Student.findOne({ id });
  return existsingUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
