import jwt from 'jsonwebtoken';
import responseHandler from '../constants/responseHandler.util';

const { errorResponse } = responseHandler;

const authentication = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (bearerHeader === undefined) {
    return errorResponse(res, 401, 'Unathorized access');
  }
  const bearer = bearerHeader.split(' ');
  const bearerToken = bearer[1];
  req.token = bearerToken;
  return jwt.verify(req.token, process.env.JWT_KEY, (error, data) => {
    if (error) {
      return errorResponse(res, 401, 'Invalid token');
    }
    req.authUser = data;
    return next();
  });
};

export default authentication;
