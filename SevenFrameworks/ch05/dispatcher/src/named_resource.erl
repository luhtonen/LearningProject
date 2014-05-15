%%%-------------------------------------------------------------------
%%% @author Eduard Luhtonen
%%% @copyright (C) 2014, Eduard Luhtonen
%%% @doc
%%%
%%% @end
%%% Created : 15. May 2014 18:54 PM
%%%-------------------------------------------------------------------
-module(named_resource).
-export([init/1, to_html/2]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) -> {ok, undefined}.
to_html(ReqData, State) ->
  {["goodbye, ", wrq:path_info(who, ReqData), "\n"],
    ReqData, State}.