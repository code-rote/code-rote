class UsersController < ApplicationController
  before_action :logged_in?, except: [:new, :create]
  before_action :set_user, only: [:edit, :update, :destroy]

  def index
      @users = User.all
  end

  def new
      @user = User.new
  end

  def create
      user = User.new(user_params)
      if user.save
        login(user)
        redirect_to profile_path
      else
        redirect_to signup_path
      end
  end


  def show
  end

  def edit
  end

  def update
      @user = @user.update_attributes(user_params)
      if @user
        redirect_to profile_path
      else
        redirect_to edit_user_path(current_user)
      end
  end

  def destroy
      @user.destroy()
      redirect_to root_path
  end

  def profile
      redirect_to user_path(current_user)
  end


  private
      def user_params
          params.require(:user).permit( :email,
                                        :email_confirmation,
                                        :password,
                                        :password_confirmation)
      end

      def find_user
          @user = User.find(params[:id])
      end

      def set_user
          @user = current_user
      end

end