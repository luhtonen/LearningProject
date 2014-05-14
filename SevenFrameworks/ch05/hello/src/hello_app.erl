%% @author author <author@example.com>
%% @copyright YYYY author.

%% @doc Callbacks for the hello application.

-module(hello_app).
-author('author <author@example.com>').

-behaviour(application).
-export([start/2,stop/1]).


%% @spec start(_Type, _StartArgs) -> ServerRet
%% @doc application start callback for hello.
start(_Type, _StartArgs) ->
    hello_sup:start_link().

%% @spec stop(_State) -> ServerRet
%% @doc application stop callback for hello.
stop(_State) ->
    ok.
