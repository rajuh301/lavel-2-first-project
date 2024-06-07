// import Joi from 'joi';

// const userNameValidationSchema = Joi.object({
//   firstName: Joi.string()
//     .trim()
//     .max(20)
//     .required()
//     .regex(/^[A-Z][a-z]*$/, 'capitalize format')
//     .messages({
//       'string.base': 'First name must be a string',
//       'string.empty': 'First name is required',
//       'string.max': 'First name can not be more than 20 characters',
//       'string.pattern.name': 'First name must start with a capital letter',
//     }),
//   middleName: Joi.string().optional(),
//   lastName: Joi.string()
//     .required()
//     .regex(/^[A-Za-z]+$/, 'alpha')
//     .messages({
//       'string.base': 'Last name must be a string',
//       'string.empty': 'Last name is required',
//       'string.pattern.name': 'Last name is not valid',
//     }),
// });

// const guardianValidationSchema = Joi.object({
//   fatherName: Joi.string().required().messages({
//     'string.empty': 'Father name is required',
//   }),
//   fatherOccupation: Joi.string().optional(),
//   fatherContactNo: Joi.string().optional(),
//   motherName: Joi.string().required().messages({
//     'string.empty': 'Mother name is required',
//   }),
//   motherOccupation: Joi.string().optional(),
//   motherContactNo: Joi.string().optional(),
// });

// const localGuardianValidationSchema = Joi.object({
//   name: Joi.string().required().messages({
//     'string.empty': 'Local guardian name is required',
//   }),
//   occupation: Joi.string().required().messages({
//     'string.empty': 'Local guardian occupation is required',
//   }),
//   contactNo: Joi.string().required().messages({
//     'string.empty': 'Local guardian contact number is required',
//   }),
//   address: Joi.string().required().messages({
//     'string.empty': 'Local guardian address is required',
//   }),
// });

// const studentValidationSchema = Joi.object({
//   id: Joi.string().required().messages({
//     'string.empty': 'Student ID is required',
//   }),

//   body: Joi.object({
//     password: Joi.string().required().max(20),
//     name: userNameValidationSchema.required().messages({
//       'object.base': 'Student name is required',
//     }),
//     gender: Joi.string().valid('male', 'female', 'other').required().messages({
//       'any.only': '{#value} is not valid',
//       'string.empty': 'Gender is required',
//     }),
//     dateOfBirth: Joi.date().iso().optional(),
//     email: Joi.string().email().required().messages({
//       'string.email': '{#value} is not a valid email',
//       'string.empty': 'Email is required',
//     }),
//     contactNo: Joi.string().required().messages({
//       'string.empty': 'Student contact number is required',
//     }),
//     emergencyContactNo: Joi.string().required().messages({
//       'string.empty': 'Student emergency contact number is required',
//     }),
//     bloodGroup: Joi.string()
//       .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
//       .optional()
//       .messages({
//         'any.only': '{#value} is not a valid blood group',
//       }),
//     permanentAddress: Joi.string().required().messages({
//       'string.empty': 'Permanent address is required',
//     }),
//     presentAddress: Joi.string().required().messages({
//       'string.empty': 'Present address is required',
//     }),
//     guardian: guardianValidationSchema.required().messages({
//       'object.base': 'Guardian is required',
//     }),
//     localGuardian: localGuardianValidationSchema.required().messages({
//       'object.base': 'Local guardian is required',
//     }),
//     profileImage: Joi.string().optional(),
//   }),
// });

// export const studentValidations = {
//   studentValidationSchema,
// };
