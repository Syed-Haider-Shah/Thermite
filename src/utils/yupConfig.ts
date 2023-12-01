import * as yup from 'yup'
import YupPassword from 'yup-password'

YupPassword(yup)

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please provide valid email')
    .required('Please input your email'),
  password: yup
    .string()
    // .password()
    // .minRepeating(3, 'Repeated characters are not allowed')
    .required('Please input your password')
})

export const CreateChildSchema = yup.object().shape({
  description: yup
    .string()
    .min(1, 'minimum 1 text character required')
    .max(150, 'maximum 150 text character allowed')
    .required('Please input ticket description'),
  customerimpact: yup
    .boolean()
    .oneOf([true, false])
    .required('Please add customer Impact status'),
  customerinquiry: yup
    .boolean()
    .oneOf([true, false])
    .required('Please add customer Inquiry status'),
  upgrade: yup
    .boolean()
    .oneOf([true, false])
    .required('Please add upgrade status')
})

export const CreateEmployeeSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please provide valid email')
    .required('Please input your email'),
  password: yup
    .string()
    .password()
    .minRepeating(3, 'Repeated characters are not allowed')
    .required('Please input your password'),
  name: yup
    .string()
    .min(1, 'minimum 3 text character required')
    .max(150, 'maximum 150 text character allowed')
    .required('Please input ticket name')
})

export const UpdatePasswordSchema = yup.object().shape({
  password: yup
    .string()
    .password()
    .minRepeating(3, 'Repeated characters are not allowed')
    .required('Please input your password'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
    .required('Please input your password confirmation')
})

export const UpdateNameSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, 'minimum 3 text character required')
    .max(150, 'maximum 150 text character allowed')
    .required('Please input ticket name')
})
