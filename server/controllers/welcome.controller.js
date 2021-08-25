import responseHandler from '../constants/responseHandler.util';
import customMessage from '../constants/customMessage';
import statusCode from '../constants/statusCodes';

const { updatedResponse } = responseHandler;
const { ok } = statusCode;
const { welcomeMessage } = customMessage;
/**
 * @description this is a welcome endpoint
 * @param {request} req
 * @param {response} res
 * @returns {object} success response message
 */
export default function (req, res) {
  return updatedResponse(res, ok, welcomeMessage);
}
