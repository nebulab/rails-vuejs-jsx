import { mapActions } from 'vuex'

export default {
  props: {
    product: Object
  },

  data() {
    return {
      title: '',
      description: ''
    }
  },

  methods: {
    ...mapActions({
      addComment: 'addComment'
    }),
    submitComment() {
      this.addComment({
        productId: this.product.id,
        commentParams: {
          title: this.title,
          description: this.description
        }
      })

      this.title = ''
      this.description = ''
    }
  },

  render() {
    return(
      <div class="row my-2">
        <div class="col-md-8">
          <h4 class="my-4">Add new comment</h4>

          <div class="form-label-group">
            <input type="input" class="form-control" name="title"
              placeholder={I18n.t('comments.form.title')}
              required="true" autofocus="true" vModel_trim={this.title} />
          </div>

          <div class="form-label-group my-3">
            <input type="input" class="form-control" name="description"
              placeholder={I18n.t('comments.form.description')}
              required="true" vModel_trim={this.description} />
          </div>

          <input type="submit" class="btn btn-primary" value={I18n.t('comments.form.submit')}
            vOn:click_stop_prevent={this.submitComment} />
        </div>
      </div>
    )
  }
}
