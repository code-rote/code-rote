class StepsController < ApplicationController
  def index
    @step = Step.all
  end

  def new
    @step = Step.new
  end

  def create
    step = Step.create(step_params)
    redirect_to step_path(step)
  end

  def edit
  end

  def show
    find_step
  end

    private
      def step_params
        params.require(:step).permit(:name, :description)
      end

      def find_step
        @step = Step.find_by({id: params[:id]})
      end
end
