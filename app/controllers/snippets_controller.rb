class SnippetsController < ApplicationController
  def index
    @snippet = Snippet.all
    @steps = Step.all
  end

  def new
    @snippet = Snippet.new
  end

  def create
    snippet = Snippet.create(snippet_params)
    redirect_to snippet_path(snippet)
  end

  def show
    find_snippet
    respond_to do |format|
      format.html
      format.json {render json: find_snippet }
    end
  end

  def edit
    find_snippet
  end

  def update
  end

  def destroy
    @snippet.destroy
    redirect_to snippets_path
  end

    private
      def snippet_params
        params.require(:snippet).permit(:name, 
                                        :description, 
                                        :core_language, 
                                        :tool, 
                                        :snippet,
                                        :step_num,
                                        :code_term)
      end

      def find_snippet
        @snippet = Snippet.find_by({id: params[:id]})
      end
end
