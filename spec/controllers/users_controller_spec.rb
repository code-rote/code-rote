require 'rails_helper'

RSpec.describe UsersController, :type => :controller do
  before do
    user_params = Hash.new
    user_params[:email] = Faker::Internet.email
    user_params[:email_confirmation] = user_params[:email]
    user_params[:password]  = "blah"
    user_params[:password_confirmation] = user_params[:password]
    @current_user = User.create(user_params)
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(@current_user)
  end

  # describe "Get #index" do
  #   it "should render the :index view" do 
  #     get :index
  #     expect(response).to render_template(sites/index)
  #   end

  #   it "should assign @steps" do
  #    all_steps = Step.all
  #    get :index
  #    expect(assigns(:steps)).to eq(all_steps)
  #   end
  # end
end
