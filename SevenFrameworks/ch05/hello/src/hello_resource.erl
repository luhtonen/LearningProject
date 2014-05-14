%% @author Eduard Luhtonen
%% @copyright 2014 Eduard Luhtonen.
%% @doc Example webmachine_resource.

-module(hello_resource).
-export([init/1,
  content_types_provided/2,
  to_html/2,
  to_text/2]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) -> {ok, undefined}.

content_types_provided(RegData, State) ->
  {[{"text/html", to_html},
    {"text/plain", to_text}], RegData, State}.

to_html(ReqData, State) ->
    {"<html><body>Hello, new world</body></html>", ReqData, State}.

to_text(ReqData, State) ->
  {"Hello, text world\n", ReqData, State}.