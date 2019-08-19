defmodule FoobarWeb.PageController do
	use FoobarWeb, :controller
	use Params

  	def index(conn, _params) do
    	render(conn, "index.html")
	end

	def fizzbuzz(conn, params) do
		json(conn, params)
	end

end
