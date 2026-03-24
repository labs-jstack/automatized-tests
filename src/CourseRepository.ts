import { randomUUID } from "node:crypto";
import { Course } from "./types/Course";

export class CourseRepository {
  async create(name: string): Promise<Course> {
    return {
      id: randomUUID(),
      name,
      createdAt: new Date(),
      isPublished: true,
    };
  }

  async findById(courseId: string): Promise<Course | null> {
    console.log(`> Searching course ${courseId} in the database`);
    return {
      id: randomUUID(),
      name: `course - ${Math.random()}`,
      createdAt: new Date(),
      isPublished: true
    };
  }

  async findByName(courseName: string): Promise<Course | null> {
    console.log(`> Searching course ${courseName} in the database`);
    return {
      id: randomUUID(),
      name: courseName,
      createdAt: new Date(),
      isPublished: true
    };
  }
}
