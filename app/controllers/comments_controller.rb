class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)

    unless comment.save
      flash[:errors] = comment.errors
    end

    redirect_to product_path(params[:product_id])
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy

    redirect_to product_path(params[:product_id])
  end

  private

  def comment_params
    params
      .require(:comment)
      .permit(:title, :description)
      .merge(product_id: params[:product_id])
  end
end
