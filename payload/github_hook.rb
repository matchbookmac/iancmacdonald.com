require('sinatra')
require('sinatra/reloader')
require('json')

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
