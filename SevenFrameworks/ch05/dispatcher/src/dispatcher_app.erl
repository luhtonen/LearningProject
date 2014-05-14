%% @author Eduard Luhtonen
%% @copyright 2014 Eduard Luhtonen.

%% @doc Callbacks for the dispatcher application.

-module(dispatcher_app).
-author('author <author@example.com>').

-behaviour(application).
-export([start/2,stop/1]).


%% @spec start(_Type, _StartArgs) -> ServerRet
%% @doc application start callback for dispatcher.
start(_Type, _StartArgs) ->
    dispatcher_sup:start_link().

%% @spec stop(_State) -> ServerRet
%% @doc application stop callback for dispatcher.
stop(_State) ->
    ok.
