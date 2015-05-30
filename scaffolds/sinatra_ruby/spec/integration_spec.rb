require 'spec_helper'

describe 'test path', type: :feature do
  it 'will navigate to the homepage, then to the test page' do
    visit '/'
    click_on 'Test'
    expect(page).to have_content 'Everything\'s good.'
  end
end
