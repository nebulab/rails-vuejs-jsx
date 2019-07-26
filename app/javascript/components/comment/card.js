export default {
  name: 'CommentCard',

  props: {
    comment: Object
  },

  render() {
    return(
      <div class="col-md-12 my-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{ this.comment.title }</h5>
            <p class="card-text">{ this.comment.description }</p>
          </div>
        </div>
      </div>
    )
  }
}
