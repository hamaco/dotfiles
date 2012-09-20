scriptencoding utf-8 " {{{ {{{
if &cp || exists("g:loaded_expr")
    finish
endif
let g:loaded_expr = 1

let s:save_cpo = &cpo
set cpo&vim " }}}

" function! s:selected_text(...) {{{
" return selected text in visual mode.
function! s:selected_text(...)
    let [visual_p, pos] = [mode() =~# "[vV\<C-v>]", getpos('.')]
    let [r_, r_t] = [@@, getregtype('"')]
    let [r0, r0t] = [@0, getregtype('0')]

    if visual_p
        execute "normal! \<Esc>"
    endif
    silent normal! gvy
    let [_, _t] = [@@, getregtype('"')]

    call setreg('"', r_, r_t)
    call setreg('0', r0, r0t)
    if visual_p
        normal! gv
    else
        call setpos('.', pos)
    endif
    return a:0 && a:1 ? [_, _t] : _
endfunction " }}}

" function! s:split(selected) {{{
" split text, and return found number array.
function! s:split(selected)
    " split
    let l:splitted = split(a:selected, '\W\+')

    " to number
    let l:list = []
    for l:i in l:splitted
        if match(l:i, '^.\{-\}\([0-9]\+\).*$') >= 0
            let l:num = substitute(l:i, '^.\{-\}\([0-9]\+\).*$', '\1', '')
            call add(l:list, str2nr(l:num, 10))
        endif
    endfor
    return l:list
endfunction " }}}

" function! s:sum(numberes) {{{
" return sum.
function! s:sum(numberes)
    let l:sum = 0
    for l:i in a:numberes
        let l:sum += l:i
    endfor
    return l:sum
endfunction " }}}

" function! s:average(numberes) {{{
" return average.
function! s:average(numberes)
    let l:sum = s:sum(a:numberes)
    let l:len = len(a:numberes)
    if (l:len < 1)
        return 0
    endif
    return l:sum / l:len
endfunction " }}}

" function! s:max(numberes) {{{
" return max.
function! s:max(numberes)
    return max(a:numberes)
endfunction " }}}

" function! s:min(numberes) {{{
" return max.
function! s:min(numberes)
    return min(a:numberes)
endfunction " }}}

" function! s:subtract(numberes) {{{
" return subtract result.
function! s:subtract(numberes)
    if len(a:numberes) < 1
        return 0
    endif

    let l:first = a:numberes[0]
    let l:subs  = a:numberes[1:]

    for l:i in l:subs
        let l:first -= l:i
    endfor
    return l:first
endfunction " }}}

" function! s:all(numberes) {{{
" return all numbers.
function! s:all(numberes)
    return string(a:numberes)
endfunction " }}}

" function! g:expr(...) {{{
" main function.
" get selected text,
" split to number list, and
" calculate number list.
function! g:expr(...)
    let l:selected = s:selected_text()
    let l:splitted = s:split(l:selected)

    if len(a:000) > 0 && tolower(a:1) == 'sum'
        return 'SUM: ' . s:sum(l:splitted)
    elseif len(a:000) > 0 && tolower(a:1) == 'average'
        return 'AVERAGE: ' . s:average(l:splitted)
    elseif len(a:000) > 0 && tolower(a:1) == 'max'
        return 'MAX: ' . s:max(l:splitted)
    elseif len(a:000) > 0 && tolower(a:1) == 'min'
        return 'MIN: ' . s:min(l:splitted)
    elseif len(a:000) > 0 && tolower(a:1) == 'subtract'
        return 'SUBTRACT: ' . s:subtract(l:splitted)
    elseif len(a:000) > 0 && tolower(a:1) == 'all'
        return 'ALL: ' . s:all(l:splitted)
    else
        return 'SUM: ' . s:sum(l:splitted)
    endif
endfunction " }}}

" commnad Expr {{{
" main commnad.
command! -range -nargs=? Expr :echo g:expr(<f-args>)
" }}}

let &cpo = s:save_cpo " {{{
finish
" }}} }}}
==============================================================================
expr.vim : 算術スクリプト
------------------------------------------------------------------------------
$VIMRUNTIMEPATH/plugin/expr.vim
==============================================================================
author  : 小見 拓
url     : http://nanasi.jp/
email   : mail@nanasi.jp
version : 2009/12/19 16:00:00
==============================================================================
選択範囲のテキストに含まれている数値のリストに対して、
合計値、平均値算出などの計算処理を行うコマンドを提供するスクリプトです。
Excelに数字を貼り付けて計算する手間を省くためにあります。


------------------------------------------------------------------------------
1. 数値の含まれる範囲をビジュアルモードで選択します。
2. 「:Expr {計算処理名}」コマンドを実行します。
3. 空白文字、改行、カンマで文章を分割し、数字のリストが作成されます。
4. 数字のリストに対して、指定された計算処理が実行されます。

例. 次の数値を選択し、Exprコマンドを実行してみてください。

    \20000
    \25000
    \10200
     \8000


------------------------------------------------------------------------------
'<,'>Expr
'<,'>Expr sum
    選択範囲に含まれる数値全ての合計値を返します。

'<,'>Expr average
    選択範囲に含まれる数値全ての平均値を返します。

'<,'>Expr max
    選択範囲に含まれる数値の最大値を返します。

'<,'>Expr min
    選択範囲に含まれる数値の最小値を返します。

'<,'>Expr subtract
    選択範囲で最初に現れる数値から、
    選択範囲に含まれる残りの数値を引いた結果値を返します。

'<,'>Expr all
    選択範囲に含まれる数値全てを表示します。

==============================================================================
" vim: set et ft=vim nowrap foldmethod=marker :
