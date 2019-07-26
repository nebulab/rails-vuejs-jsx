module Api
  class CommentsController < ApplicationController
    def destroy
      comment = Comment.find(params[:id])
      comment.destroy
    end
  end
end
