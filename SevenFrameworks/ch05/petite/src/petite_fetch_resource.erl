%%%-------------------------------------------------------------------
%%% @author Eduard Luhtonen
%%% @copyright (C) 2014, Eduard Luhtonen
%%% @doc
%%%
%%% @end
%%% Created : 16. May 2014 8:35 AM
%%%-------------------------------------------------------------------
-module(petite_fetch_resource).
-author("luhtonen").

%% API
-export([init/1,
  to_html/2,
  resource_exists/2,
  previously_existed/2,
  moved_permanently/2]).

-include_lib("webmachine/include/webmachine.hrl").

init([]) ->
  {ok, ""}.

to_html(ReqData, State) ->
  {"", ReqData, State}.

resource_exists(ReqData, State) ->
  {false, ReqData, State}.

previously_existed(ReqData, State) ->
  Code =wrq:path_info(code, ReqData),
  case petite_url_srv:get_url(Code) of
    {ok, Url} ->
      {true, ReqData, Url};
    {error, not_found} ->
      {false, ReqData, State}
  end.

moved_permanently(ReqData, State) ->
  {{true, State}, ReqData, State}.