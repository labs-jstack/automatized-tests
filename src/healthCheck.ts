export type HttpRequest = {
  ip: string;
  body: Record<string, any>;
};

export async function healthCheck(request: HttpRequest) {
  return { statusCode: 200 };
}
