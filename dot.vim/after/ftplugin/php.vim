setlocal expandtab

setlocal makeprg=php\ -l\ %
setlocal errorformat=%m\ in\ %f\ on\ line\ %l

" smartchr.vim
inoremap <buffer> <expr> = smartchr#one_of(' = ', ' == ', ' === ', '=')
inoremap <buffer> <expr> + smartchr#one_of('+',   ' += ')
inoremap <buffer> <expr> - smartchr#one_of('-',   ' -= ')
inoremap <buffer> <expr> ! smartchr#one_of('!',   ' != ')
