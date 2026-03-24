import { beforeEach, describe, expect, it, vi } from "vitest";
import { getCourseById } from "./getCourseById";
import { CourseRepository } from "./CourseRepository";
import { makeCourseMock } from "@tests/factories/makeCourseMock";

const courseMock = makeCourseMock();

describe('getCourseById', () => {
  const findByIdMock = vi.spyOn(CourseRepository.prototype, 'findById').mockResolvedValue(courseMock);

  beforeEach(() => {
    vi.clearAllMocks();
  })

  it('should throw if the course was not found', async () => {
    findByIdMock.mockResolvedValueOnce(null);
    const coursePromise = getCourseById('course-123');
    await expect(coursePromise).rejects.toThrow('Course not found');
  });

  it('should call findById correctly', async () => {
    await getCourseById('any-id');
    expect(findByIdMock).toHaveBeenCalledOnce();
    expect(findByIdMock).toHaveBeenCalledWith('any-id')
  });

  it('should return the course on success', async () => {
    const course = await getCourseById('course-123');
    expect(course).toEqual(courseMock);
  });

  it('should return null if course is not published', async () => {
    findByIdMock.mockResolvedValueOnce(makeCourseMock({
      isPublished: false
    }));
    const course = await getCourseById('course-123');
    expect(course).toBeNull();
  });
});
