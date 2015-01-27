# Feature: Sign up
# As a visitor
#   I want to sign up
# So I can get access to protected sections of the site 
feature 'Sign up' do
  
  # Scenario: Visitor Signs Up With Valid Data
  #   Given I am a visitor
  #   When I sign up with valid data
  # Then I should see a successful sign up message 
  scenario 'User Signs Up With Valid Data' do
    visit signup_path
    fill_in 'email', :with => 'user@example.com'
    fill_in 'email_confirmation', :with  => 'user@example.com'
    fill_in 'password', :with => 'changeme'
    fill_in 'user_password_confirmation', :with => 'changeme'
    click_button 'signup'
    expect(page).to have_css '.current-user-profile', 'Course List'
    expect(page).to have_content 'Welcome'
  end 
end