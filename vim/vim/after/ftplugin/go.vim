setlocal noexpandtab
setlocal tabstop=4
setlocal softtabstop=4
setlocal shiftwidth=4

autocmd BufWritePre <buffer> Fmt

execute "set rtp+=" . globpath($GOPATH, "src/github.com/nsf/gocode/vim")
