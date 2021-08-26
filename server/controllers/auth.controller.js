import models from '../database/models/index';
import responseHandler from '../constants/responseHandler.util';
import { userSchemaValidation } from '../validations/user.validation';
import { hashPlainTextPassword, comparePassword } from '../helpers/hashPassword';
import tokenGenerator from '../helpers/jwtToken';

const { errorResponse, successResponse } = responseHandler;
const { Auth } = models;

/**
 * @description Auth Controller
 */
export default class AuthController {
  /**
   * @description Auth/signup
   * @param {Request} req
   * @param {Response} res
   * @return {object} returns token
   */
  static async signup(req, res) {
    const formData = req.body;
    const userObjectValidated = userSchemaValidation.validate(formData);
    if (userObjectValidated.error) {
      return errorResponse(res, 400, userObjectValidated.error.details[0].message);
    }
    const { email } = req.body;
    const userExist = await Auth.findOne({ where: { email } });
    if (userExist) {
      return errorResponse(res, 409, 'Email already used');
    }
    formData.password = hashPlainTextPassword(formData.password);
    console.log('formData', formData);
    const user = await Auth.create(formData);
    delete user.dataValues.password;
    const token = tokenGenerator(user.dataValues);
    return successResponse(res, 201, 'user created successfully', token, user);
  }

  /**
   * @description Auth/signup
   * @param {Request} req
   * @param {Response} res
   * @return {object} returns token
   */
  static async login(req, res) {
    const { email, password } = req.body;
    const user = await Auth.findOne({ where: { email } });
    if (!user) {
      return errorResponse(res, 404, 'User not found');
    }
    const isPasswordMatch = comparePassword(password, user.dataValues.password);
    console.log('user.dataValues.password', user.dataValues.password);
    console.log('password', password);
    if (!isPasswordMatch) {
      return errorResponse(res, 400, 'Password invalid');
    }
    delete user.dataValues.password;
    const token = tokenGenerator(user.dataValues);
    return successResponse(res, 201, 'user found', token, user);
  }
}
