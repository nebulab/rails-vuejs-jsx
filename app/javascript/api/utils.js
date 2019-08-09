const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

export const parseError = (error) => (
  Object.keys(error.response.data.errors).map(key => `${capitalize(key)} ${error.response.data.errors[key]}`)
)
