import { mapActions } from 'vuex'

export default {
  name: 'CommentCard',

  props: {
    comment: Object
  },

  methods: {
    ...mapActions({
      cancelComment: 'cancelComment'
    })
  },

  render() {
    return(
      <div class="col-md-12 my-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{ this.comment.title }</h5>
            <p class="card-text">{ this.comment.description }</p>

            <button class="btn btn-sm btn-danger" onClick={event => this.cancelComment(this.comment.id)}>
              { I18n.t('comments.form.delete') }
            </button>
          </div>
        </div>
      </div>
    )
  }
}
