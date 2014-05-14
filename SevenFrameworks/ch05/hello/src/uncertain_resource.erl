%%%-------------------------------------------------------------------
%%% @author luhtonen
%%% @copyright (C) 2014, Eduard Luhtonen
%%% @doc
%%%
%%% @end
%%% Created : 14. May 2014 20:03 PM
%%%-------------------------------------------------------------------
-module(uncertain_resource).

-export([init/1,
  to_html/2,
  resource_exists/2,
  previously_existed/2,
  moved_permanently/2]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) -> {ok, undfined}.
to_html(ReqData, State) ->
  {"nothing to see here", ReqData, State}.
resource_exists(ReqData, State) ->
  {false, ReqData, State}.
previously_existed(ReqData, State) ->
  {true, ReqData, State}.
moved_permanently(ReqData, State) ->
  {{true, "http://luhtonen.github.io"}, ReqData, State}.