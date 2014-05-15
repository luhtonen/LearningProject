%% @author Eduard Luhtonen
%% @copyright 2014 Eduard Luhtonen.
%% @doc Example webmachine_resource.

-module(dispatcher_resource).
-export([init/1, to_html/2]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) -> {ok, undefined}.

to_html(ReqData, State) ->
    {["you asked for ", wrq:path(ReqData), "\n"], ReqData, State}.
