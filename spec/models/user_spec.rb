require 'rails_helper'

RSpec.describe User, :type => :model do
  
  describe "Password validation tests" do

    it "should not create a user with a blank password" do
      user = User.new({email: "good_email", email_confirmation: "good_email"})
      expect(user.save).to be(false)
    end

    it "should require :password_confirmation" do
      user = User.new({email: "good_email", email_confirmation: "good_email", password: "good_password"})
      expect(user.save).to be(false)
    end

    it "should validate :password length to be greater than 8 characters" do
      user = User.new ({email: "good_email", password: "1234567", password_confirmation: "1234567"})
      expect(user.save).to be(false)
    end
  end

  describe "Email validation tests" do

    it "should require :email_confirmation" do
      user = User.new({email: "good_email", password: "good_password", password_confirmation: "good_password"})
      expect(user.save).to be(false)
    end

    it "should confirm a user :email" do
      user = User.new({email: "good_email", email_confirmation: "bad_email"})
      expect(user.save).to be(false)
    end

    it "should not create a  user with a blank email" do
      user = User.new({password: "good_password", password_confirmation: "good_password"})
      expect(user.save).to be(false)
    end
  end

  describe "User's self.confirm method tests" do
    it "should return false when user doesn't exist" do
      expect(User.confirm("good_password", "good_password")).to be(nil)
    end

    it "should return false when user password is incorrect" do
      user = User.create({
                          email: "a@b.com",
                          email_confirmation: "a@b.com",
                          password: "good_password",
                          password_confirmation: "good_password"
                        })
      expect(User.confirm("a@b.com", "bad_password")).to be(false)
    end

    it "should return user when password is correct" do
      user = User.create({
                          email: "a@b.com",
                          email_confirmation: "a@b.com",
                          password: "good_password",
                          password_confirmation: "good_password"
                        })
      expect(User.confirm("a@b.com", "good_password")).to eq(user)
    end
  end

end
