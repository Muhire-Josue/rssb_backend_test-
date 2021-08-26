import Joi from '@hapi/joi';

export const fileSchemaValidation = Joi.object({
  name: Joi.string().min(3).max(15).empty('')
    .default('Empty value'),
  guid: Joi.string().length(36).required(),
  phone: Joi.string()
    .length(13)
    // eslint-disable-next-line no-useless-escape
    .pattern(/^[0-9\-\+]{9,15}$/)
    .required()
    .messages({
      'string.min': 'Should Start with + character',
      'object.regex': 'Should be Numbers',
      'string.pattern.base':
              'Must be a valid phone number Ex: (+250788888888)',
    }),
  gender: Joi.string().valid('Male', 'Female'),
  email: Joi.string().email(),
});

export const userSchemaValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(15).empty('')
    .required(),
});
