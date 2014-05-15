%%%-------------------------------------------------------------------
%%% @author Eduard Luhtonen
%%% @copyright (C) 2014, Eduard Luhtonen
%%% @doc
%%%
%%% @end
%%% Created : 15. May 2014 18:45 PM
%%%-------------------------------------------------------------------
-module(star_resource).
-export([init/1, to_html/2]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) -> {ok, undefined}.
to_html(ReqData, State) ->
  {["you asked for ", wrq:path(ReqData), "\n",
    "star path was ", wrq:disp_path(ReqData), "\n"],
  ReqData, State}.