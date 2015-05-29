require 'spec_helper'

describe Test do
  describe '.method_missing' do
    it 'will return self' do
      test = Test.new()
      expect(test.test).to eq test
    end
  end
end
