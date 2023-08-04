export const TRANSLATIONS_EN = {
 
  login: {
    title: 'LOGIN',
    emailLabel: 'Email Id',
    emailPlaceholder: 'name@email.com',
    passwordLabel: 'Password',
    btnLabel: 'Log in',
  },
  mint: {
    previewPrevious: 'Preview Previous'
  },
  manageNft: {
    title: 'Manage NFT Inventory',
  },
  
  reports: {
    customerData: 'Customer Data',
  },
  marketing: {
    pageTitle: 'Marketing Management',
    bannerImages: 'Banner Images',
    couponCode: 'Coupon Codes'

  },
  validationMsg: {
    password: {
      enter: 'Please enter your password',
      required: 'Password is required',
      minEight: 'Password must contain at least 8 characters',
      maxLength: 'Password must not exceed 25 characters',
      regex:
        'Password must contain at least 1 number, 1 uppercase, 1 lowercase and 1 special case character.',
    },
    confirmPassword: {
      required: 'Please confirm your password',
      noMatch: 'Passwords do not match',
    },
    firstName: {
      shouldBeString: 'First name must be strings',
      required: 'First name is required',
      max: 'less than 50 characters!',
      onlyAlphabets: 'First name must contains alphabets only',
    },
    lastName: {
      shouldBeString: 'Last name must be strings',
      required: 'Last name is required',
      max: 'less than 50 characters!',
      onlyAlphabets: 'Last name must contains alphabets only',
    },
    email: {
      valid: 'Enter valid email',
      required: 'Email id is required',
      unique: 'Please provide a unique email.',
      regex: 'Only alphabets (a-z), numbers (0-9) and period (.) are allowed',
    },
    userLength: {
      min: 'At least one user is required',
    },
    language: {
      required: 'Language is required',
    },
    entity: {
      name: {
        required: 'Entity name is required',
        max: 'Name must be less than 50 characters',
        onlyAlphabets: 'Entity Name must contains alphabets only',
      },
    },
    organization: {
      name: {
        required: 'Organization name is required',
        max: 'Name must be less than 50 characters',
        onlyAlphabets: 'Organization Name must contains alphabets only',
      },
    },
    locationLabel: {
      required: 'This field is required',
      onlyAlphabets: 'Should contains alphabets and space only',
      noNumber: 'Numbers not allowed',
      max: 'Max 25 characters allowed',
    },
    createCategory: {
      name: {
        required: 'Name is required',
      },
    },
    financialCodes: {
      number: 'Code must be a number',
      required: 'Finanicial Code is required',
    },
    generalSettings: {
      required: 'This field is required',
      url: {
        regex: 'Should be a valid link',
      },
    },
    updateUnit: {
      required: 'This field is required',
      zipCode: {
        regex: 'Invalid zip code',
        max: 'The zip code must not be greater than 10 characters',
      },
      id: {
        regex: 'Only numbers(0-9), hyphens(-) and spaces are allowed',
        max: 'Max 25 characters allowed',
      },
    },
    tags: {
      name: {
        required: 'Tag name is required',
        unique: 'Tag name should be unique',
        regex: 'Tag Name must contain alphabets only',
      },
      displayName: {
        required: 'Display name is required',
        onlyNumberAllowed: 'Only numbers(0-9), hyphens(-) and spaces are allowed',
        unique: 'Number already exists for this entity',
        max: 'Max 25 characters allowed',
      },
    },
    defaultContainer: {
      required: 'This field is required',
      max: 'less than 50 characters!',
    },
    addKitchen: {
      required: 'This field is required',
      max: 'less than 50 characters!',
      max25: 'Max 25 characters allowed',
      uniqueName: 'Kitchen name already exist',
      uniqueId: 'Kitchen id number already exist',
      uniqueProfileName: 'Profile name already exist',
      uniqueProfileId: 'Profile id number already exist',
    },
    activationCode: {
      required: 'Activation Code is required',
    },
  }
 
};
