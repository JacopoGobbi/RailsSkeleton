class TestController < ApplicationController
  def index
    @myvar = { name: "test", description: "sample back-end data"}
    gon.myvar = @myvar
  end
end