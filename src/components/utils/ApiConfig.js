import { prod, dev, local } from './Config'

export const apiConfig = process.env.REACT_ENV_APP === 'prod' ? prod : process.env.REACT_ENV_APP === 'dev' ? dev : local