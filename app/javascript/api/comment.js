import api from './instance'

/**
 * Create a comment
 */
const create = (productId, commentParams) => {
  return api.post(Routes.api_product_comments_path(productId), commentParams)
    .then(response => response.data)
}

/**
 * Destroy a comment
 */
const destroy = (commentId) => {
  return api.delete(Routes.api_comment_path(commentId))
    .then(response => response.data)
}

export default {
  create,
  destroy
}
