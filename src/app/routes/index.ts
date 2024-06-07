import { Router } from 'express';
import { UserRoute } from '../config/modules/user/user.route';
import { StudentRoutes } from '../config/modules/student/student.route';
import { AcademicSemesterRoutes } from '../config/modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../config/modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../config/modules/academicDepartment/academicDepartment.route';
import { FacultyRoutes } from '../config/modules/Faculty/faculty.route';
import { AdminRoutes } from '../config/modules/Admin/admin.route';
import { CourseRoutes } from '../config/modules/Course/course.route';
import { semesterRegistrationRoutes } from '../config/modules/semesterRegistration/semesterRegistration.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoute,
  },

  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },

  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },

  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/courses',
    route: CourseRoutes,
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
