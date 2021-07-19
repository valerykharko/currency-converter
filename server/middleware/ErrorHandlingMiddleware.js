import { ApiError } from "../error/ApiError.js";

export function errorHandler(err, res, req) {
  if (err instanceof ApiError) {
    return res.status(404).json({ message: err.message });
  }
  return res.status(500).json({ message: "Непредвиденная ошибка" });
}
