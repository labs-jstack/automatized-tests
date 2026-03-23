import { CourseRepository } from "./CourseRepository";

type CreateCourseInput = {
  name: string;
};

type CreateCourseOutput = {
  id: string;
  name: string;
  createdAt: Date;
};

const courseRepo = new CourseRepository();

export async function createCourse(
  input: CreateCourseInput,
): Promise<CreateCourseOutput> {
  if (!input.name.trim()) throw new Error("Name is required");
  const course = courseRepo.create(input.name);
  return course;
}
