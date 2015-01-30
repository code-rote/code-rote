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

  describe "Get #index" do
    it "should render the :index view" do 
      get :index
      expect(response).to render_template(:index)
    end

    it "should assign @steps" do
     all_steps = Step.all
     get :index
     expect(assigns(:steps)).to eq(all_steps)
    end
  end
  # Taken from class notes. All tests below are for Article.
  #   https://github.com/sf-wdi-15/notes/blob/4a87c3e183304dc92dff2fbe4e26fc2d410b04f0/week_07_more_rails/day_3_password_reset_apis/dawn_model_testing/README.md
  
  # describe "Get #new" do
  #   it "should assign @article" do
  #     get :new
  #     expect(assigns(:article)).to be_instance_of(Article)
  #   end

  #   it "should render the :new view" do
  #     get :new
  #     expect(response).to render_template(:new)
  #   end 
  # end

  # describe "Post #create" do
  #   it "should redirect_to 'article_path' after successful create" do
  #     post :create, article: {title: "blah", content: "blah"}
  #     expect(response.status).to be(302)
  #     expect(response.location).to match(/\/articles\/\d+/)
  #   end

  #   it "should add article to current_user" do
  #     count = @current_user.articles.all.count
  #     post :create, article: {title: "blah", content: "blah"}
  #     expect(@current_user.articles.count).to be > count
  #   end

  #   it "should redirect when create fails" do
  #     # a stub on the create method
  #     allow(@current_user.articles).to receive(:create).and_return(false)
  #     post :create, article: { title: "blah", content: "blah"}
  #     expect(response).to redirect_to(new_article_path)
  #   end
  end
end
