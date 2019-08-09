module Api
  class CommentsController < ApplicationController
    def create
      comment = Comment.new(comment_params)

      unless comment.save
        render json: { errors: comment.errors }, status: :unprocessable_entity
      end

      render json: comment
    end

    def destroy
      comment = Comment.find(params[:id])
      comment.destroy
    end

    private

    def comment_params
      params
        .require(:comment)
        .permit(:title, :description)
        .merge(product_id: params[:product_id])
    end
  end
end
