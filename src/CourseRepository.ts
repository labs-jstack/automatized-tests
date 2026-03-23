import { randomUUID } from "node:crypto";

export class CourseRepository {
  async create(name: string) {
    return {
      id: randomUUID(),
      name,
      createdAt: new Date(),
    };
  }

  async findById() {
    return;
  }
}
