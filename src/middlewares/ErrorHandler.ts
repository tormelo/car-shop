import { ErrorRequestHandler } from 'express';
import HttpException from '../exceptions/HttpException';

class ErrorHandler {
  public static handle: ErrorRequestHandler = (error, _req, res, _next) => {
    const { status, message } = error as HttpException;
    res.status(status || 500).json({ message });
  };
}

export default ErrorHandler;
