/* eslint-disable no-useless-escape */
import i18n from 'i18next';
import * as Yup from 'yup';
import {USER_TYPES} from './Enum';
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
const EMAIL_REGEX = /^[\w.+\-]+@([a-zA-Z]+)([\.])([a-zA-Z]+)*$/;
const NO_NUMBER_REGEX = /^([^0-9]*)$/;
const ID_NUMBER_REGEX = /^[0-9-( )]+$/;
const NAME_REGEX = /^[\p{L}\p{M}*+\p{N}\s]+$/u;
const URL_REGEX = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const firstNameRegexError = i18n.t('validationMsg.firstName.onlyAlphabets');
const lastNameRegexError = i18n.t('validationMsg.lastName.onlyAlphabets');
const orgNameRegexError = i18n.t('validationMsg.organization.name.onlyAlphabets');
const entityNameRegexError = i18n.t('validationMsg.entity.name.onlyAlphabets');
const locationLabelError = i18n.t('validationMsg.locationLabel.onlyAlphabets');
const noNumberAllowed = i18n.t('validationMsg.locationLabel.noNumber');
const onlyNumberAllowed = i18n.t('validationMsg.tags.displayName.onlyNumberAllowed');
const regexError = i18n.t('validationMsg.generalSettings.url.regex');
const unitIdError = i18n.t('validationMsg.updateUnit.id.regex');

Yup.addMethod(Yup.array, 'unique', function (field, message) {
  return this.test('unique', message, function (array) {
    const uniqueData = Array.from(new Set(array.map((row) => row[field]?.toLowerCase())));
    const isUnique = array.length === uniqueData.length;
    if (isUnique) {
      return true;
    }
    const index = array.findIndex((row, i) => row[field]?.toLowerCase() !== uniqueData[i]);
    if (array[index] && array[index][field] === '') {
      return true;
    }
    return this.createError({
      path: `${this.path}.${index}.${field}`,
      message,
    });
  });
});

export const setUpValidation = Yup.object().shape({
  firstName: Yup.string(i18n.t('validationMsg.firstName.shouldBeString'))
    .required(i18n.t('validationMsg.firstName.required'))
    .max(50, i18n.t('validationMsg.firstName.max'))
    .matches(NO_NUMBER_REGEX, {
      message: noNumberAllowed,
    })
    .matches(NAME_REGEX, {
      message: firstNameRegexError,
    }),
  lastName: Yup.string(i18n.t('validationMsg.lastName.shouldBeString'))
    .required(i18n.t('validationMsg.lastName.required'))
    .max(50, i18n.t('validationMsg.lastName.max'))
    .matches(NO_NUMBER_REGEX, {
      message: noNumberAllowed,
    })
    .matches(NAME_REGEX, {
      message: lastNameRegexError,
    }),
  password: Yup.string(i18n.t('validationMsg.password.enter'))
    .required(i18n.t('validationMsg.password.required'))
    .min(8, i18n.t('validationMsg.password.minEight'))
    .max(25, i18n.t('validationMsg.password.maxLength'))
    .matches(PASSWORD_REGEX, i18n.t('validationMsg.password.regex')),
  confirmPassword: Yup.string()
    .required(i18n.t('validationMsg.confirmPassword.required'))
    .oneOf([Yup.ref('password')], i18n.t('validationMsg.confirmPassword.noMatch')),
  language: Yup.object().when('role', {
    is: (role) =>
      role === USER_TYPES.ENTITY || role === USER_TYPES.PROGRAM || role === USER_TYPES.USER,
    then: Yup.object().required(i18n.t('validationMsg.language.required')),
  }),
});

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('validationMsg.email.valid'))
    .required(i18n.t('validationMsg.email.required')),
  password: Yup.string('Enter your password!').required('Password is required!'),
});
export const numberValidation = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('validationMsg.email.valid'))
    .required(i18n.t('validationMsg.email.required')),
  
});

export const userValidateSchema = Yup.object().shape({
  users: Yup.array()
    .of(
      Yup.object().shape({
        email: Yup.string()
          .email(i18n.t('validationMsg.email.valid'))
          .required(i18n.t('validationMsg.email.required'))
          .matches(EMAIL_REGEX, i18n.t('validationMsg.email.regex')),
      })
    )
    .unique('email', i18n.t('validationMsg.email.unique')),
});

export const newEntity = Yup.object().shape({
  name: Yup.string()
    .required(i18n.t('validationMsg.entity.name.required'))
    .max(50, i18n.t('validationMsg.entity.name.max'))
    .matches(NAME_REGEX, {
      message: entityNameRegexError,
    }),
  users: Yup.array().of(
    Yup.object().shape({
      email: Yup.string()
        .email(i18n.t('validationMsg.email.valid'))
        .test(function () {
          const {users} = this.options.context;
          if (users[0]?.email.length || users.length > 1) {
            const errors = users
              .map((user, index) => {
                if (EMAIL_REGEX.test(user.email)) {
                  return null;
                }
                return new Yup.ValidationError(
                  i18n.t('validationMsg.email.regex'),
                  users,
                  `users[${index}].email`
                );
              })
              .filter(Boolean);
            if (!errors.length) {
              return true;
            }

            return this.createError({
              message: () => errors,
            });
          }
          return true;
        }),
    })
  ),
});

export const newOrganization = Yup.object().shape({
  name: Yup.string()
    .required(i18n.t('validationMsg.organization.name.required'))
    .max(50, i18n.t('validationMsg.organization.name.max'))
    .matches(NAME_REGEX, {
      message: orgNameRegexError,
    }),
  users: Yup.array().of(
    Yup.object().shape({
      email: Yup.string()
        .email(i18n.t('validationMsg.email.valid'))
        .test(function () {
          const {users} = this.options.context;
          if (users[0]?.email.length || users.length > 1) {
            const errors = users
              .map((user, index) => {
                if (EMAIL_REGEX.test(user.email)) {
                  return null;
                }
                return new Yup.ValidationError(
                  i18n.t('validationMsg.email.regex'),
                  users,
                  `users[${index}].email`
                );
              })
              .filter(Boolean);
            if (!errors.length) {
              return true;
            }

            return this.createError({
              message: () => errors,
            });
          }
          return true;
        }),
    })
  ),
});

export const editUserValidation = Yup.object().shape({
  firstName: Yup.string(i18n.t('validationMsg.firstName.shouldBeString'))
    .required(i18n.t('validationMsg.firstName.required'))
    .max(50, i18n.t('validationMsg.firstName.max'))
    .matches(NAME_REGEX, {
      message: firstNameRegexError,
    }),
  lastName: Yup.string(i18n.t('validationMsg.lastName.shouldBeString'))
    .required(i18n.t('validationMsg.lastName.required'))
    .max(50, i18n.t('validationMsg.lastName.max'))
    .matches(NAME_REGEX, {
      message: lastNameRegexError,
    }),
  email: Yup.string()
    .email(i18n.t('validationMsg.email.valid'))
    .required(i18n.t('validationMsg.email.required'))
    .matches(EMAIL_REGEX, i18n.t('validationMsg.email.regex')),
});

export const updateLocationLable = Yup.object().shape({
  singular: Yup.string()
    .required(i18n.t('validationMsg.locationLabel.required'))
    .max(25, i18n.t('validationMsg.locationLabel.max'))
    .matches(NO_NUMBER_REGEX, {
      message: noNumberAllowed,
    })
    .matches(NAME_REGEX, {
      message: locationLabelError,
    }),
  plural: Yup.string()
    .required(i18n.t('validationMsg.locationLabel.required'))
    .max(25, i18n.t('validationMsg.locationLabel.max'))
    .matches(NO_NUMBER_REGEX, {
      message: noNumberAllowed,
    })
    .matches(NAME_REGEX, {
      message: locationLabelError,
    }),
});

export const financialCodes = Yup.object().shape({
  unit: Yup.object().shape({
    value: Yup.string().when('is_associate', {
      is: (is_associate) => is_associate === 1,
      then: Yup.string()
        .required(i18n.t('validationMsg.locationLabel.required'))
        .matches(NO_NUMBER_REGEX, {
          message: noNumberAllowed,
        })
        .matches(NAME_REGEX, {
          message: locationLabelError,
        }),
    }),
  }),
  kitchen: Yup.object().shape({
    value: Yup.string().when('is_associate', {
      is: (is_associate) => is_associate === 1,
      then: Yup.string()
        .required(i18n.t('validationMsg.locationLabel.required'))
        .matches(NO_NUMBER_REGEX, {
          message: noNumberAllowed,
        })
        .matches(NAME_REGEX, {
          message: locationLabelError,
        }),
    }),
  }),
  profile: Yup.object().shape({
    value: Yup.string().when('is_associate', {
      is: (is_associate) => is_associate === 1,
      then: Yup.string()
        .required(i18n.t('validationMsg.locationLabel.required'))
        .matches(NO_NUMBER_REGEX, {
          message: noNumberAllowed,
        })
        .matches(NAME_REGEX, {
          message: locationLabelError,
        }),
    }),
  }),
});

export const generalSettingValidation = Yup.object().shape({
  primaryLang: Yup.object().required(i18n.t('validationMsg.generalSettings.required')),
  secondaryLang: Yup.object(),
  measurementUnit: Yup.object().required(i18n.t('validationMsg.generalSettings.required')),
  singular: Yup.string().required(i18n.t('validationMsg.generalSettings.required')),
  plural: Yup.string().required(i18n.t('validationMsg.generalSettings.required')),
  email: Yup.string().when('helpOptionSelection', {
    is: (helpOptionSelection) => helpOptionSelection === 1,
    then: Yup.string()
      .email(i18n.t('validationMsg.email.valid'))
      .required(i18n.t('validationMsg.email.required'))
      .matches(EMAIL_REGEX, i18n.t('validationMsg.email.regex')),
  }),
  link: Yup.string().when('helpOptionSelection', {
    is: (helpOptionSelection) => helpOptionSelection === 2,
    then: Yup.string()
      .required(i18n.t('validationMsg.generalSettings.required'))
      .matches(URL_REGEX, regexError),
  }),
});

export const updateUnitValidation = Yup.object().shape({
  id: Yup.string().when('locationLabel', {
    is: (locationLabel) => locationLabel,
    then: Yup.string()
      .required(i18n.t('validationMsg.updateUnit.required'))
      .max(25, i18n.t('validationMsg.updateUnit.id.max'))
      .matches(ID_NUMBER_REGEX, {message: unitIdError}),
  }),
  street: Yup.string().required(i18n.t('validationMsg.updateUnit.required')),
  city: Yup.string().required(i18n.t('validationMsg.updateUnit.required')),
  state: Yup.string().required(i18n.t('validationMsg.updateUnit.required')),
  zipCode: Yup.string()
    .required(i18n.t('validationMsg.updateUnit.required'))
    .max(10, i18n.t('validationMsg.updateUnit.zipCode.max')),
  country: Yup.string().required(i18n.t('validationMsg.updateUnit.required')),
});

export const addUnitValidation = Yup.object().shape({
  name: Yup.string().required(i18n.t('validationMsg.updateUnit.required')),
});

export const defaultContainerValidation = Yup.object().shape({
  name: Yup.string()
    .required(i18n.t('validationMsg.defaultContainer.required'))
    .max(50, i18n.t('validationMsg.defaultContainer.max')),
});

export const addKitchenValidation = Yup.object().shape({
  kitchens: Yup.array().when('id_number', {
    is: (id_number) => id_number === true,
    then: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string()
            .required(i18n.t('validationMsg.addKitchen.required'))
            .max(50, i18n.t('validationMsg.addKitchen.max')),
          id_number: Yup.string()
            .required(i18n.t('validationMsg.addKitchen.required'))
            .max(25, i18n.t('validationMsg.addKitchen.max25'))
            .matches(ID_NUMBER_REGEX, onlyNumberAllowed),
        })
      )
      .unique('name', i18n.t('validationMsg.addKitchen.uniqueName'))
      .unique('id_number', i18n.t('validationMsg.addKitchen.uniqueId')),
    otherwise: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string()
            .required(i18n.t('validationMsg.addKitchen.required'))
            .max(50, i18n.t('validationMsg.addKitchen.max')),
        })
      )
      .unique('name', i18n.t('validationMsg.addKitchen.uniqueName')),
  }),
});

export const addKitchenProfilesValidation = Yup.object().shape({
  kitchenProfiles: Yup.array().when('id_number', {
    is: (id_number) => id_number === true,
    then: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string()
            .required(i18n.t('validationMsg.addKitchen.required'))
            .max(50, i18n.t('validationMsg.addKitchen.max')),
          id_number: Yup.string()
            .required(i18n.t('validationMsg.addKitchen.required'))
            .max(25, i18n.t('validationMsg.addKitchen.max25'))
            .matches(ID_NUMBER_REGEX, onlyNumberAllowed),
        })
      )
      .unique('name', i18n.t('validationMsg.addKitchen.uniqueProfileName'))
      .unique('id_number', i18n.t('validationMsg.addKitchen.uniqueProfileId')),
    otherwise: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string()
            .required(i18n.t('validationMsg.addKitchen.required'))
            .max(50, i18n.t('validationMsg.addKitchen.max')),
        })
      )
      .unique('name', i18n.t('validationMsg.addKitchen.uniqueName')),
  }),
});

export const addTabletValidation = Yup.object().shape({
  activationCode: Yup.string().required(i18n.t('validationMsg.activationCode.required')),
});

export const changePasswordValidation = Yup.object().shape({
  newPassword: Yup.string(i18n.t('validationMsg.password.enter'))
    .required(i18n.t('validationMsg.password.required'))
    .min(8, i18n.t('validationMsg.password.minEight'))
    .max(25, i18n.t('validationMsg.password.maxLength'))
    .matches(PASSWORD_REGEX, i18n.t('validationMsg.password.regex')),
  currentPassword: Yup.string(i18n.t('validationMsg.password.enter')).required(
    i18n.t('validationMsg.password.required')
  ),
  confirmPassword: Yup.string()
    .required(i18n.t('validationMsg.confirmPassword.required'))
    .oneOf([Yup.ref('newPassword')], i18n.t('validationMsg.confirmPassword.noMatch')),
});
