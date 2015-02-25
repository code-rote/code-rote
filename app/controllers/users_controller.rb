class UsersController < ApplicationController
  # before_action :logged_in?, only: [:show]

  def index
      @users = User.all
  end

  def new
      @user = User.new
  end

  def create
      user = User.new(user_params)
      if user.save
         redirect_to login_path
      else
        redirect_to login_path
      end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
      @user.destroy
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

end
