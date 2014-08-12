setlocal noexpandtab
setlocal tabstop=4
setlocal softtabstop=4
setlocal shiftwidth=4

autocmd BufWritePre <buffer> Fmt

highlight goErr cterm=bold ctermfg=214 guifg=#e8b87e
match goErr /\<err\>/

execute "set rtp+=" . globpath($GOPATH, "src/github.com/nsf/gocode/vim")
