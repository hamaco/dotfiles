" vim:foldmethod=marker:fen:
scriptencoding utf-8
let s:save_cpo = &cpo
set cpo&vim


if exists('s:loaded') && s:loaded
    finish
endif
let s:loaded = 1



let s:BEGIN_PATTERN = '\C'.'^\s*'.'sub\>'.'\s\+'.'\(\w\+\)'.'\%('.'\s*'.'([^()]*)'.'\)\='
let s:BLOCK_FIRST_BRACE = '[[:space:][:return:]]*'.'\zs{'

let s:finder = cfi#create_finder('perl')

function! s:finder.get_func_name() "{{{
    let NONE = 0
    if self.phase !=# 1
        return NONE
    endif
    let m = matchlist(getline('.'), s:BEGIN_PATTERN)
    if empty(m)
        return NONE
    endif
    return m[1]
endfunction "}}}

function! s:finder.find_begin() "{{{
    let NONE = 0
    let begin_lnum = search(s:BEGIN_PATTERN.s:BLOCK_FIRST_BRACE, 'bW')
    if begin_lnum == 0
        return NONE
    endif
    let self.is_ready = 1
    return line('.')
endfunction "}}}

function! s:finder.find_end() "{{{
    let NONE = 0
    let pos = searchpair('{', '', '}')
    if pos == 0
        return NONE
    endif
    return line('.')
endfunction "}}}

unlet s:finder




let &cpo = s:save_cpo
