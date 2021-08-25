/* eslint-disable no-shadow */
import formidable from 'formidable';
import csvToJson from 'convert-excel-to-json';
import responseHandler from '../constants/responseHandler.util';
import schemaValidation from '../validations/user.validation';
import models from '../database/models/index';

const { Users } = models;

const { errorResponse, successResponse } = responseHandler;
/**
 * @description Files controller
 */
export default class FileController {
/**
 * @description upload csv file
 * @param {Request} req
 * @param {Response} res
 * @return {File} returns a message responnse
 */
  static async upload(req, res) {
    try {
      // console.log('req======>>>>', req.body);
      const form = formidable({ multiples: true });

      form.parse(req, (err, fields, files) => {
        if (err) {
          errorResponse(res, 400, 'Bad Request');
          console.log(err);
        }
        const data = csvToJson({
          sourceFile: files.file.path,
          columnToKey: {
            '*': '{{columnHeader}}',
          },
        });
        const users = data[Object.keys(data)[0]];
        users.shift();
        users.forEach((user) => {
          const { error } = schemaValidation.validate(user, {
            abortEarly: false,
          });

          if (error.details && Array.isArray(error.details)) {
            error.details.forEach((err) => {
              if (err.context.key) {
                user.errors = {
                  ...user.errors,
                  [err.context.key]: err.message,
                };
              }
              // console.log('user.errors =================>>>>>>>>', user.erro`rs);
            });
          }
        });
        return Users.bulkCreate(users)
          .then((data) => res.status(201).json({
            status: 201,
            filename: req.file.originalname,
            message: 'data saved',
          }))
          .catch((err) => res.status(400).json({
            status: 400,
            errors: err,
          }));
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @description
   * @param {Request} req
   * @param {Response} res
   * @return {array} returns a list of users
   */
  static async getAllUsers(req, res) {
    const limit = req.query.limit ? req.query.limit : 10;
    const offset = req.query.offset ? req.query.offset : 0;
    const users = await Users.findAll({ offset, limit });
    if (users.length < 1) {
      return errorResponse(res, 404, 'Users Not Found');
    }
    return successResponse(res, 200, 'All users', undefined, users);
  }

  /**
   * @description
   * @param {Request} req
   * @param {Response} res
   * @return {array} returns a list of users
   */
  static async getOneUser(req, res) {
    const id = req.params.id ? parseInt(req.params.id, 10) : 0;
    if (!id) {
      return errorResponse(res, 400, 'Please provide the user id');
    }
    const user = await Users.findOne({ where: { id } });
    if (!user) {
      return errorResponse(res, 404, 'User not Found');
    }
    return successResponse(res, 200, 'User found', undefined, user);
  }
}
