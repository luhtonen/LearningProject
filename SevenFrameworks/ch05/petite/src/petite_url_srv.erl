%%%-------------------------------------------------------------------
%%% @author Eduard Luhtonen
%%% @copyright (C) 2014, Eduard Luhtonen
%%% @doc
%%%
%%% @end
%%% Created : 16. May 2014 7:39 AM
%%%-------------------------------------------------------------------
-module(petite_url_srv).

%% public API
-export([start_link/0,
         get_url/1,
         put_url/1]).

-behaviour(gen_server).
-export([init/1,
  terminate/2,
  code_change/3,
  handle_call/3,
  handle_cast/2,
  handle_info/2]).

-define(SERVER, ?MODULE).
-define(TAB, petite_urls).

-record(st, {next}).

%% public API implementation
start_link() ->
  gen_server:start_link({local, ?SERVER}, ?MODULE, [], []).

get_url(Id) ->
  gen_server:call(?SERVER, {get_url, Id}).

put_url(Url) ->
  gen_server:call(?SERVER, {put_url, Url}).

%% gen_server implementation
init(_) ->
  ets:new(?TAB, [set, named_table, protected]),
  {ok, #st{next=0}}.

terminate(_Reson, _State) ->
  ok.

code_change(_OldVsn, State, _Extra) ->
  {ok, State}.

handle_call({get_url, Id}, _From, State) ->
  Reply = case ets:lookup(?TAB, Id) of
            [] ->
              {error, not_found};
            [{Id, Url}] ->
              {ok, Url}
          end,
  {reply, Reply, State};

handle_call({put_url, Url}, _From, State = #st{next=N}) ->
  Id = b36_encode(N),
  ets:insert(?TAB, {Id, Url}),
  {reply, {ok, Id}, State#st{next=N+1}};

handle_call(_Request, _From, State) ->
  {stop, uknown_call, State}.

handle_cast(_Request, State) ->
  {stop, uknown_cast, State}.

handle_info(_Request, State) ->
  {stop, uknown_info, State}.

%% internal functions
b36_encode(N) ->
  integer_to_list(N, 36).