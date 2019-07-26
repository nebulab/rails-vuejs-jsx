import api from './instance'

/**
 * Destroy a comment
 */
const destroy = (commentId) => {
  return api.delete(Routes.api_comment_path(commentId))
    .then(response => response.data)
}

export default {
  destroy
}
