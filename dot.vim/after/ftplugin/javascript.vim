setlocal expandtab

" require spidermonkey
"setlocal makeprg=$HOME/.vim/vimparse.js\ %\ $*
"setlocal errorformat=%f:%l:%m
"setlocal shellpipe=>
"
"if has("unix") && !exists("g:javascript_flyquickfixmake")
"	let g:javascript_flyquickfixmake = 1
"	au BufWritePost *.js silent make
"endif
"
