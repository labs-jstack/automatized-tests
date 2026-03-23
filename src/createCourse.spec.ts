import { expect, it, vi } from "vitest";
import { CourseRepository } from "./CourseRepository";
import { createCourse } from "./createCourse";

vi.useFakeTimers();
vi.setSystemTime(new Date());

it("should return the course object on success", async () => {
  const course = await createCourse({ name: "Curso de Teste" });
  expect(course).toEqual({
    name: "Curso de Teste",
    id: expect.any(String),
    createdAt: new Date(),
  });
});

it("should throw if no name is provided", async () => {
  await expect(() => createCourse({ name: "" })).rejects.toThrow(
    "Name is required",
  );
});

it("should call CourseRepo.create correctly", async () => {
  const createSpy = vi.spyOn(CourseRepository.prototype, "create");
  await createCourse({ name: "Curso de Testes" });
  expect(createSpy).toHaveBeenCalledWith("Curso de Testes");
  expect(createSpy).toHaveBeenCalledTimes(1);
});
