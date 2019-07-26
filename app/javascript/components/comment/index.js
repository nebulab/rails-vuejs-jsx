import { mapState, mapActions } from 'vuex'

import CommentCard from './card'

export default {
  name: 'CommentList',

  props: {
    product: Object
  },

  computed: {
    ...mapState({
      comments: state => state.product.comments
    })
  },

  methods: {
    ...mapActions({
      fillComments: 'fillComments'
    }),
    thereAreComments() {
      return this.comments.length > 0
    }
  },

  mounted() {
    this.fillComments(this.product.comments)
  },

  render() {
    return(
      <div>
        <h4 class="my-4">Comments</h4>

        <div class="row">
          {this.thereAreComments() &&
            this.comments.map(comment => (
              <CommentCard comment={comment} />
            ))
          }

          {!this.thereAreComments() &&
            <div class="col-md-12">
              <p>
                { I18n.t('comments.empty') }
              </p>
            </div>
          }
        </div>
      </div>
    )
  }
}
