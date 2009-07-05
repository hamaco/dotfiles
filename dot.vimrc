" 基本オプション {{{1
set nocompatible
filetype plugin indent on

if has("syntax")
	syntax enable
	set t_Co=256
	if !exists("g:colors_name")
		colorscheme desert256
	endif
endif

" Encoding {{{2
set encoding=utf-8

if has('iconv')
	let s:enc_euc = 'euc-jp'
	let s:enc_jis = 'iso-2022-jp'

	" Does iconv support JIS X 0213 ?
	if iconv("\x87\x64\x87\x6a", 'cp932', 'euc-jisx0213') ==# "\xad\xc5\xad\xcb"
		let s:enc_euc = 'euc-jisx0213,euc-jp'
		let s:enc_jis = 'iso-2022-jp-3'
	endif

	" Make fileencodings
	let &fileencodings = 'ucs-bom'
	if &encoding !=# 'utf-8'
		let &fileencodings = &fileencodings . ',' . 'ucs-2le'
		let &fileencodings = &fileencodings . ',' . 'ucs-2'
	endif
	let &fileencodings = &fileencodings . ',' . s:enc_jis

	if &encoding ==# 'utf-8'
		let &fileencodings = &fileencodings . ',' . s:enc_euc
		let &fileencodings = &fileencodings . ',' . 'cp932'
	elseif &encoding =~# '^euc-\%(jp\|jisx0213\)$'
		let &encoding = s:enc_euc
		let &fileencodings = &fileencodings . ',' . 'utf-8'
		let &fileencodings = &fileencodings . ',' . 'cp932'
	else  " cp932
		let &fileencodings = &fileencodings . ',' . 'utf-8'
		let &fileencodings = &fileencodings . ',' . s:enc_euc
	endif
	let &fileencodings = &fileencodings . ',' . &encoding

	unlet s:enc_euc
	unlet s:enc_jis
endif "}}}

set ambiwidth=double
set autoindent
set autowrite
set backspace=indent,eol,start
set backup
set backupcopy&
set backupskip&
set cinoptions=:0,(0,W1s
set formatoptions=tcroqnlM1
set history=100
set hlsearch
set ignorecase
set incsearch
set laststatus=2
set list
set listchars=tab:>-,trail:-,extends:>,precedes:<
set mouse=
set ruler
set shiftwidth=2
set showcmd
set showmode
set showtabline=2
set smartcase
set softtabstop=2
set splitbelow
set splitright
set updatetime=30000
set tabstop=2
set title
set visualbell t_vb=
set wildmenu
set wildmode=list:longest

let &statusline = ''
let &statusline .= '%<%f %y%m%r'
let &statusline .= '%='
let &statusline .= '[%{&l:fileencoding == "" ? &encoding : &l:fileencoding}:%{&ff}]'
let &statusline .= '  %-14.(%l,%c%V%) %P'

let mapleader = ","
let maplocalleader = "."


" command {{{1
command! -complete=file -nargs=1 Rename f <args>|call delete(expand("#"))

" 文字コード {{{2
command! -bang -complete=file -nargs=? Utf8
\ edit<bang> ++enc=utf-8 <args>

command! -bang -complete=file -nargs=? Eucjp
\ edit<bang> ++enc=euc-jp <args>

command! -bang -complete=file -nargs=? Sjis
\ edit<bang> ++enc=cp932 <args>


" autocmd {{{1
augroup MyAutoCmd
  autocmd!
augroup END

autocmd MyAutoCmd FileType help,quickrun nnoremap <buffer> q <C-w>c

" auto write
autocmd MyAutoCmd CursorHold * silent! wall
autocmd MyAutoCmd CursorHoldI * silent! wall


" キーマップ {{{1
noremap ; :
noremap : ;

nnoremap <Esc><Esc> :<C-u>nohlsearch<Return>

" move {{{2
nnoremap j gj
nnoremap k gk
inoremap <C-j> <Nop>

" edit {{{2
noremap <C-BS> <C-w>
noremap! <C-BS> <C-w>

" タブ {{{2
nnoremap <C-t> <Nop>
nnoremap <C-t>n :<C-u>tabnew<Return>
nnoremap <C-t>c :<C-u>tabclose<Return>
nnoremap <C-t>o :<C-u>tabonly<Return>
nnoremap <C-n> :<C-u>tabnext<Return>
nnoremap <C-p> :<C-u>tabprevious<Return>


" Plugin {{{1

" neocomplcache.vim
let g:NeoComplCache_EnableAtStartup = 1
let g:NeoComplCache_EnableInfo = 1
let g:NeoComplCache_EnableCamelCaseCompletion = 1
let g:NeoComplCache_EnableUnderbarCompletion = 1
let g:NeoComplCache_MinSyntaxLength = 3
let g:NeoComplCache_SkipInputTime = "0.1"
let g:NeoComplCache_SmartCase = 1
inoremap <expr><TAB> pumvisible() ? "\<C-n>" :"\<TAB>"


" spec.vim
language time en_US.UTF-8
let g:spec_chglog_format = "%a %b %d %Y Hamaco <hamaco_@livedoor.com>"


" load .vimrc {{{1
nnoremap <C-l> :<C-u>source ~/.vimrc<cr>


" END {{{1
" vim: foldmethod=marker
