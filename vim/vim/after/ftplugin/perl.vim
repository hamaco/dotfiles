setlocal iskeyword& iskeyword-=:

" smartchar.vim
function! s:smartchr_wrapper(orig, ...)
  let syntax = synstack(line('.'), col('.'))
  let name = empty(syntax) ? '' : synIDattr(syntax[-1], "name")
  echomsg name
  if name =~# 'perlString'
    return a:orig
  endif

  return smartchr#_expand(!!0, a:000)
endfunction

inoremap <buffer> <expr> = <SID>smartchr_wrapper("=", " = ", " == ", "=")
inoremap <buffer> <expr> ! <SID>smartchr_wrapper("!", "!",   " != ", " !== ")
inoremap <buffer> <expr> > <SID>smartchr_wrapper(">", ">",   " => ", " >= ")
inoremap <buffer> <expr> < <SID>smartchr_wrapper("<", "<",   " <= ", "<<")
