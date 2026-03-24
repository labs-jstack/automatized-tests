import { CourseRepository } from "./CourseRepository"

const courseRepo = new CourseRepository();

export async function getCourseById(courseId: string) {
  const course = await courseRepo.findById(courseId);
  if (!course) throw new Error('Course not found');
  if (!course.isPublished) return null;
  return course;
}
