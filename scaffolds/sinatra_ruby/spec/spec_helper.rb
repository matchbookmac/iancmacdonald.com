ENV['RACK_ENV'] = 'test'


require("bundler/setup")
Bundler.require(:default, :test, :production)

set(:root, Dir.pwd())

Capybara.app = Sinatra::Application
set(:show_exceptions, false)
require('./app')

Dir[File.dirname(__FILE__) + '/../lib/*.rb'].each { |file| require file }

RSpec.configure do |config|
  config.after(:each) do

  end
  config.before(:each) do

  end
end
