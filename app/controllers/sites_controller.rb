class SitesController < ApplicationController
  def index
      @snippet = Snippet.all
  end

  def about
  end

  def contact
  end

  def project
  end
end
