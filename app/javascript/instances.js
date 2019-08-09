// Import components
import ProductList from './components/product/index'
import CommentList from './components/comment/index'
import CommentForm from './components/comment/form'

export const ProductListInstance = {
  el: '.vue-products',
  component: ProductList
}

export const CommentListInstance = {
  el: '.vue-comments',
  component: CommentList
}

export const CommentFormInstance = {
  el: '.vue-comment-form',
  component: CommentForm
}
