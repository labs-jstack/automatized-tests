import { beforeEach, expect, it, vi } from "vitest";
import { CourseRepository } from "./CourseRepository";
import { createCourse } from "./createCourse";
import { makeCourseMock } from "@tests/factories/makeCourseMock";

const { createMock, findByNameMock } = vi.hoisted(() => ({
  findByNameMock: vi.fn(),
  createMock: vi.fn(),
}));

vi.mock('./CourseRepository', () => ({
  CourseRepository: vi.fn(class MockedCourseRepository {
    findByName = findByNameMock;
    create = createMock
  }),
}));

vi.useFakeTimers();
vi.setSystemTime(new Date());

createMock.mockResolvedValue({
  id: 'any-id',
  name: 'Curso de Testes',
  createdAt: new Date(),
  isPublished: true
})

beforeEach(async () => {
  vi.clearAllMocks()
})


it("should return the course object on success", async () => {
  const course = await createCourse({ name: "Curso de Teste" });
  expect(course).toEqual({
    name: "Curso de Testes",
    id: expect.any(String),
    createdAt: new Date(),
    isPublished: true,
  });
});

it("should throw if no name is provided", async () => {
  await expect(() => createCourse({ name: "" })).rejects.toThrow(
    "Name is required",
  );
});

it('should throw if name is already in use', async () => {
  findByNameMock.mockResolvedValueOnce(makeCourseMock())
  const coursePromise = createCourse({ name: 'any name' });
  await expect(coursePromise).rejects.toThrow('Name is already in use');
});

it('should throw if no name is provided', async () => {
  const coursePromise = createCourse({ name: '' });
  await expect(coursePromise).rejects.toThrow('Name is required')
});

it("should call CourseRepo.create correctly", async () => {
  await createCourse({ name: "Curso de Testes" });
  expect(createMock).toHaveBeenCalledWith("Curso de Testes");
  expect(createMock).toHaveBeenCalledTimes(1);
});
