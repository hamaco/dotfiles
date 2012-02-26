" Initialize: {{{1

" http://github.com/Shougo/shougo-s-github/blob/master/vim/.vimrc
let s:iswindows = has('win32') || has('win64')

if s:iswindows
	language message en
else
	language message C
endif

" Windowsでも.vimを読み込むようにする
if has('vim_starting')
	set runtimepath& runtimepath+=$HOME/.vim
endif


augroup MyAutoCmd
  autocmd!
augroup END

" NeoBundle {{{1
if has('vim_starting')
	set runtimepath+=$HOME/.bundle/vimproc
	set runtimepath+=$HOME/.vim/bundle/neobundle.vim
	filetype off
	call neobundle#rc(expand('~/.bundle'))
	filetype plugin on
	filetype indent on
endif

NeoBundle 'https://github.com/hamaco/vim-sunday.git'

NeoBundle 'https://github.com/vim-scripts/JavaScript-syntax.git'
NeoBundle 'https://github.com/pangloss/vim-javascript.git'

NeoBundle 'https://github.com/vim-jp/vimdoc-ja.git'

NeoBundle 'https://github.com/vim-scripts/capslock.vim.git'
NeoBundle 'https://github.com/vim-scripts/errormarker.vim.git'
NeoBundle 'https://github.com/vim-scripts/indenthtml.vim.git'
NeoBundle 'https://github.com/vim-scripts/sudo.vim.git'

NeoBundle 'https://github.com/basyura/bitly.vim.git'
NeoBundle 'https://github.com/basyura/twibill.vim.git'
NeoBundle 'https://github.com/basyura/TweetVim.git'

NeoBundle 'https://github.com/h1mesuke/textobj-wiw.git'
NeoBundle 'https://github.com/h1mesuke/unite-outline.git'
NeoBundle 'https://github.com/h1mesuke/vim-alignta.git'

NeoBundle 'https://github.com/kana/vim-gf-diff.git'
NeoBundle 'https://github.com/kana/vim-gf-user.git'
NeoBundle 'https://github.com/kana/vim-operator-user.git'
NeoBundle 'https://github.com/kana/vim-submode.git'
NeoBundle 'https://github.com/kana/vim-surround.git'
NeoBundle 'https://github.com/kana/vim-textobj-line.git'
NeoBundle 'https://github.com/kana/vim-textobj-user.git'

NeoBundle 'https://github.com/LeafCage/foldCC.git'

NeoBundle 'https://github.com/mattn/favstar-vim.git'
NeoBundle 'https://github.com/mattn/gist-vim.git'
NeoBundle 'https://github.com/mattn/googletranslate-vim.git'
NeoBundle 'https://github.com/mattn/learn-vimscript.git'
NeoBundle 'https://github.com/mattn/webapi-vim.git'
NeoBundle 'https://github.com/mattn/sonictemplate-vim.git'
NeoBundle 'https://github.com/mattn/zencoding-vim.git'

NeoBundle 'https://github.com/Shougo/echodoc.git'
NeoBundle 'https://github.com/Shougo/neobundle.vim.git'
NeoBundle 'https://github.com/Shougo/neocomplcache.git'
NeoBundle 'https://github.com/Shougo/neocomplcache-snippets-complete.git'
NeoBundle 'https://github.com/Shougo/unite.vim.git'
NeoBundle 'https://github.com/Shougo/vim-vcs.git'
NeoBundle 'https://github.com/Shougo/vimfiler.git'
NeoBundle 'https://github.com/Shougo/vimproc.git'
NeoBundle 'https://github.com/Shougo/vimshell.git'

NeoBundle 'https://github.com/soh335/unite-hatenabookmark.git'

NeoBundle 'https://github.com/t9md/vim-textmanip.git'

NeoBundle 'https://github.com/thinca/vim-ambicmd.git'
"NeoBundle 'https://github.com/thinca/vim-auto_source.git'
NeoBundle 'https://github.com/thinca/vim-ft-vim_fold.git'
NeoBundle 'https://github.com/thinca/vim-openbuf.git'
NeoBundle 'https://github.com/thinca/vim-poslist.git'
NeoBundle 'https://github.com/thinca/vim-prettyprint.git'
NeoBundle 'https://github.com/thinca/vim-qfreplace.git'
NeoBundle 'https://github.com/thinca/vim-quickrun.git'
NeoBundle 'https://github.com/thinca/vim-ref.git'
NeoBundle 'https://github.com/thinca/vim-scouter.git'
NeoBundle 'https://github.com/thinca/vim-unite-history.git'

NeoBundle 'https://github.com/tpope/vim-abolish.git'
NeoBundle 'https://github.com/tpope/vim-fugitive.git'

NeoBundle 'https://github.com/tsukkee/lingr-vim.git'
NeoBundle 'https://github.com/tsukkee/unite-help.git'

NeoBundle 'https://github.com/tyru/caw.vim.git'
NeoBundle 'https://github.com/tyru/current-func-info.vim.git'
NeoBundle 'https://github.com/tyru/emap.vim.git'
NeoBundle 'https://github.com/tyru/eskk.vim.git'
NeoBundle 'https://github.com/tyru/open-browser.vim.git'
NeoBundle 'https://github.com/tyru/operator-camelize.vim.git'
NeoBundle 'https://github.com/tyru/restart.vim.git'
NeoBundle 'https://github.com/tyru/savemap.vim.git'
NeoBundle 'https://github.com/tyru/vice.vim.git'
NeoBundle 'https://github.com/tyru/vim-altercmd.git'
NeoBundle 'https://github.com/tyru/visualctrlg.vim.git'

NeoBundle 'https://github.com/ujihisa/neco-look.git'
NeoBundle 'https://github.com/ujihisa/shadow.vim.git'
NeoBundle 'https://github.com/ujihisa/tabpagecolorscheme.git'
NeoBundle 'https://github.com/ujihisa/unite-colorscheme.git'
NeoBundle 'https://github.com/ujihisa/unite-launch.git'
NeoBundle 'https://github.com/ujihisa/vimshell-ssh.git'

NeoBundle 'https://github.com/akiyan/vim-textobj-php.git'
NeoBundle 'https://github.com/choplin/unite-vim_hacks.git'
"NeoBundle 'https://github.com/chrisbra/SudoEdit.vim.git'
NeoBundle 'https://github.com/hallison/vim-markdown.git'
NeoBundle 'https://github.com/scrooloose/syntastic.git'
NeoBundle 'https://github.com/sjl/gundo.vim.git'
NeoBundle 'https://github.com/superbrothers/vim-vimperator.git'
NeoBundle 'https://github.com/vexxor/phpdoc.vim.git'

NeoBundle 'https://github.com/altercation/vim-colors-solarized.git'
"NeoBundle 'https://github.com/ChrisKempson/Vim-Tomorrow-Theme.git'
NeoBundle 'https://github.com/dterei/VimCobaltColourScheme.git'
NeoBundle 'https://github.com/tomasr/molokai.git'
NeoBundle 'https://github.com/noahfrederick/Hemisu.git'


" neta
NeoBundle 'https://github.com/mattn/unite-nyancat.git'
NeoBundle 'https://github.com/osyo-manga/unite-shimapan.git'


if has("syntax")
	syntax enable
	if !exists("g:colors_name")
		colorscheme mrkn256
	endif
endif





" 文字コード設定 {{{1
set encoding=utf-8

if !has('gui_running')
  if &term == 'win32' || &term == 'win64'
    " Setting when use the non-GUI Japanese console.

    " Garbled unless set this.
    set termencoding=cp932
    " Japanese input changes itself unless set this.
    " Be careful because the automatic recognition of the character code is not possible!
    set encoding=japan
  else
    if $ENV_ACCESS ==# 'linux'
      set termencoding=euc-jp
    elseif $ENV_ACCESS ==# 'colinux'
      set termencoding=utf-8
    else  " fallback
      set termencoding=  " same as 'encoding'
    endif
  endif
elseif s:iswindows
  " For system.
  set termencoding=cp932
endif

if !exists('did_encoding_settings') && has('iconv')
  let s:enc_euc = 'euc-jp'
  let s:enc_jis = 'iso-2022-jp'

  " Does iconv support JIS X 0213?
  if iconv("\x87\x64\x87\x6a", 'cp932', 'euc-jisx0213') ==# "\xad\xc5\xad\xcb"
    let s:enc_euc = 'euc-jisx0213,euc-jp'
    let s:enc_jis = 'iso-2022-jp-3'
  endif

  " Build encodings.
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

  let did_encoding_settings = 1
endif

" 日本語を含まない場合は fileencoding に encoding を使うようにする
function! AU_ReCheck_FENC()
  if &fileencoding =~# 'iso-2022-jp' && search("[^\x01-\x7e]", 'n') == 0
    let &fileencoding=&encoding
  endif
endfunction
autocmd MyAutoCmd BufReadPost * call AU_ReCheck_FENC()

" 改行コードの自動認識
set fileformats=unix,dos,mac
" □とか○の文字があってもカーソル位置がずれないようにする
if exists('&ambiwidth')
  set ambiwidth=double
endif



" Option: オプション設定 ========================================= {{{1
set ambiwidth=double
set autoindent
set autoread
"set autowrite
set backspace=indent,eol,start
set backup
set backupcopy&
set backupdir=~/.vim/backup/
set backupskip&
set cdpath+=/web/*
set cinoptions=:0,(0,W1s
set clipboard=unnamed
set directory=~/.vim/swap/
set foldtext=FoldCCtext()
set formatoptions=tcroqnlM1
set grepprg=grep\ -nH
set guioptions-=e
set history=100
set hlsearch
set ignorecase
set imdisable
set incsearch
set laststatus=2
set list
" set listchars=tab:>-,trail:-,extends:>,precedes:<
set listchars=tab:»-,trail:-,eol:↲,extends:»,precedes:«,nbsp:%
set modeline
set mouse=a
set nrformats="hex"
set pastetoggle=<F12>
set ruler
set shiftwidth=2
set showcmd
set showmode
set showtabline=2
set smartcase
set softtabstop=2
set splitbelow
set splitright
"set tags& tags+=~/.tags
set updatetime=3000
set tabstop=2
set title
set visualbell t_vb=
set wildmenu
set wildmode=list:longest

if has("unix")
	set nofsync
	set swapsync=
endif

let &statusline = ''
let &statusline .= '%<%f %y%m%r'
let &statusline .= '  %{cfi#get_func_name()}()'
let &statusline .= '%='
let &statusline .= '[%{&l:fileencoding == "" ? &encoding : &l:fileencoding}:%{&ff}]'
"let &statusline .= '%{eskk#statusline()}'
let &statusline .= '  %-14.(%l,%c%V%) %P'

let mapleader = ","
let maplocalleader = "."



" プラグイン {{{1

" 無効化 {{{2
let plugin_dicwin_disable = 1

if s:iswindows
	let g:loaded_gist_vim = 1
	let g:loaded_lingr_vim = 1
endif


" altercmd.vim {{{2
call altercmd#load()
AlterCommand t tabedit
AlterCommand s set
AlterCommand sl setl
AlterCommand sf setf
command! -bar -nargs=+ MapAlterCommand CAlterCommand <args> | AlterCommand <cmdwin> <args>

" ambicmd.vim {{{2
cnoremap <expr> <Space> ambicmd#expand("\<Space>")
cnoremap <expr> <CR>    ambicmd#expand("\<CR>")


" capslock.vim {{{2
imap <C-a> <C-o><Plug>CapsLockToggle


" ChangeLog {{{2
let g:changelog_username = "hamaco <hamanaka.kazuhiro@gmail.com>"
let g:changelog_timeformat = "%Y-%m-%d"


" echodoc.vim {{{2
let g:echodoc_enable_at_startup = 1


" emap.vim {{{2
call emap#load('noprefix')
"call emap#set_sid_from_sfile(expand('<sfile>'))
call emap#set_sid_from_vimrc()


"eskk.vim {{{2
let g:eskk#keep_state_beyond_buffer = 0

if has('vim_starting')
	let g:eskk#dictionary = '~/.skk-jisyo'

	if s:iswindows
		let g:eskk#large_dictionary = expand('~/SKK-JISYO.L')
	elseif has('mac')
		let g:eskk#large_dictionary = expand('~/Library/Application\ Support/AquaSKK/SKK-JISYO.L')
	elseif has('unix')
		let g:eskk#large_dictionary = expand('/usr/share/skk/SKK-JISYO.L')
	endif
endif

"let g:eskk_debug = 0
let g:eskk#egg_like_newline = 1
"let g:eskk_enable_completion = 1
"let g:eskk_ignore_continuous_sticky = 1
""let g:eskk_no_default_mappings = 1
"let g:eskk_revert_henkan_style = 'okuri'

""map! <C-j> <Plug>(eskk:enable)


" FavStar.vim {{{2
let g:favstar_user = 'hamaco'


" git.vim {{{2
"let g:git_no_map_default = 1
"let g:git_command_edit = 'rightbelow vnew'
"nnoremap <Space>gd :<C-u>GitDiff --cached<Enter>
"nnoremap <Space>gD :<C-u>GitDiff<Enter>
"nnoremap <Space>gs :<C-u>GitStatus<Enter>
"nnoremap <Space>gl :<C-u>GitLog<Enter>
"nnoremap <Space>gL :<C-u>GitLog -u \| head -10000<Enter>
"nnoremap <Space>ga :<C-u>GitAdd<Enter>
"nnoremap <Space>gA :<C-u>GitAdd <cfile><Enter>
"nnoremap <Space>gc :<C-u>GitCommit<Enter>
"nnoremap <Space>gC :<C-u>GitCommit --amend<Enter>
"nnoremap <Space>gp :<C-u>Git push
"
"nnoremap <Space>gd :<C-u>Gdiff<Enter>
"nnoremap <Space>gs :<C-u>Gstatus<Enter>
"nnoremap <Space>gl :<C-u>Glog<Enter>
"nnoremap <Space>ga :<C-u>Gwrite<Enter>
"nnoremap <Space>gc :<C-u>Gcommit<Enter>
"nnoremap <Space>gC :<C-u>Git commit --amend<Enter>
"nnoremap <Space>gb :<C-u>Gblame<Enter>
nnoremap <Space>gs :<C-u>Vcs status<CR>
nnoremap <Space>ga :<C-u>Vcs add<CR>
nnoremap <Space>gc :<C-u>Vcs commit<CR>
nnoremap <Space>gd :<C-u>Vcs diff<CR>


" gundo.vim {{{2
nmap U :<C-u>GundoToggle<CR>


" indenthtml.vim {{{2
let g:html_indent_inctags = 'html,body,head,tbody,p,li'


" neocomplcache.vim {{{2
let g:neocomplcache_enable_at_startup = 1
let g:neocomplcache_enable_smart_case = 1
let g:neocomplcache_enable_camel_case_completion = 0
let g:neocomplcache_enable_underbar_completion = 1
"let g:neocomplcache_enable_info = 1 " deleted?
let g:neocomplcache_enable_skip_completion = 1
let g:neoComplcache_partial_match = 0
let g:neocomplcache_enable_ignore_case = 0
let g:neocomplcache_enable_wildcard = 0
let g:neocomplcache_max_list = 30
" let g:NeoComplCache_PreviousKeywordCompletion = 0
let g:neocomplcache_min_syntax_length = 3
let g:neocomplcache_min_keyword_length = 3
let g:neocomplcache_skip_input_time = "0.1"
let g:neocomplcache_skip_completion_time = "0.1"
let g:neocomplcache_auto_completion_start_length = 2
let g:neocomplcache_manual_completion_start_length = 1
let g:neocomplcache_tags_completion_start_length = 5
let g:neocomplcache_caching_limit_file_size = 10240

if !exists('g:neocomplcache_delimiter_patterns')
	let g:neocomplcache_delimiter_patterns = {}
endif
let g:neocomplcache_delimiter_patterns['php'] = ['->', '::', '\']

let g:neocomplcache_dictionary_filetype_lists = {
			\ 'default'  : '',
			\ 'vimshell' : $HOME.'/.vimshell/command-history'
			\ }


" Enable omni completion.
"autocmd FileType css setlocal omnifunc=csscomplete#CompleteCSS
"autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
"autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
"autocmd FileType python setlocal omnifunc=pythoncomplete#Complete
"autocmd FileType xml setlocal omnifunc=xmlcomplete#CompleteTags
let g:neocomplcache_omni_functions = {
			\ 'ruby': 'rubycomplete#Complete',
			\ }

if !exists('g:neocomplcache_omni_patterns')
	let g:neocomplcache_omni_patterns = {}
endif
"let g:neocomplcache_omni_patterns.php  = '[^. \t]->\h\w*\|\h\w*::'
let g:neocomplcache_omni_patterns.ruby = '[^. *\t]\.\w*\|\h\w*::'

if !exists('g:neocomplcache_keyword_patterns')
	let g:neocomplcache_keyword_patterns = {}
endif
let g:neocomplcache_keyword_patterns["default"] = "\h\w*"

let g:neocomplcache_vim_completefuncs = {
	\ 'Ref' : 'ref#complete',
	\ 'Unite' : 'unite#complete_source',
	\ 'VimShellExecute' : 'vimshell#complete#vimshell_execute_complete#completefunc',
	\ 'VimShellInteractive' : 'vimshell#complete#vimshell_execute_complete#completefunc',
	\ 'VimShellTerminal' : 'vimshell#complete#vimshell_execute_complete#completefunc',
	\ }

let g:neocomplcache_snippets_dir = $HOME."/.vim/snippets"
command! -nargs=* Nes NeoComplCacheEditSnippets <args>

imap <silent><C-k>   <Plug>(neocomplcache_snippets_expand)
smap <silent><C-k>   <Plug>(neocomplcache_snippets_expand)
inoremap <expr><C-g> neocomplcache#undo_completion()
"inoremap <expr><C-l> neocomplcache#complete_common_string()

inoremap <expr><C-h> neocomplcache#smart_close_popup() . "\<C-h>"
inoremap <expr><BS> neocomplcache#smart_close_popup() . "\<C-h>"
" inoremap <expr><TAB> pumvisible() ? "\<C-n>" :"\<TAB>"
inoremap <expr><TAB>  pumvisible() ? "\<C-n>" : <SID>check_back_space() ? "\<TAB>" : "\<C-x>\<C-u>"
function! s:check_back_space()"{{{
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~ '\s'
endfunction"}}}
" <CR>: close popup and save indent.
inoremap <expr><CR>  neocomplcache#smart_close_popup() . "\<CR>"
inoremap <expr><C-y> neocomplcache#close_popup()
"inoremap <expr><C-e> neocomplcache#cancel_popup()

" vim hacks #135
"inoremap <expr> ] searchpair('\[', '', '\]', 'nbW', 'synIDattr(synID(line("."), col("."), 1), "name") =~? "String"') ? ']' : "\<C-n>"


" openbrowser.vim
let g:netrw_nogx = 1 " disable netrw's gx mapping.
nmap gx <Plug>(openbrowser-smart-search)
vmap gx <Plug>(openbrowser-smart-search)


" poslist.vim {{{2
map <C-o> <Plug>(poslist-prev-pos)
map <C-i> <Plug>(poslist-next-pos)


" quickrun.vim {{{2
let g:quickrun_direction = 'rightbelow vertical'
let g:quickrun_no_default_key_mappings = 0 " suspend to map <leader>r

"let g:quickrun_config = {}
let g:quickrun_config = {'outputter/buffer/into': 1}
if has('clientserver') && v:servername != ''
	let g:quickrun_config['*'] = {'runmode': 'async:remote:vimproc'}
else
	let g:quickrun_config['*'] = {'runmode': 'simple'}
endif
let g:quickrun_config.asm = {'command': 'gcc', 'exec': ['%c %s -o ./aaaaa', './aaaaa', 'rm ./aaaaa']}
let g:quickrun_config.haskell = {'command': 'runghc'}
" let g:quickrun_config['php.unit'] = {'command': 'phpunit'}

let phpunit_outputter = quickrun#outputter#buffer#new()
"function! phpunit_outputter.init(session)
"  " call original process
"  call call(quickrun#outputter#buffer#new().init, [a:session], self)
"endfunction

function! phpunit_outputter.finish(session)
  let winnr = winnr()

  call call(quickrun#outputter#buffer#new().finish, [a:session], self)

  hi default PHPUnitOK         guifg=White guibg=Green
  hi default PHPUnitFail       guifg=White guibg=Red
  hi default PHPUnitAssertFail guifg=Red

	call matchadd("PHPUnitOK", "^OK.*$")
	call matchadd("PHPUnitFail", "^FAILURES.*$")
	call matchadd("PHPUnitAssertFail", "^Failed.*$")

	execute winnr . "wincmd w"
endfunction

call quickrun#register_outputter("phpunit_outputter", phpunit_outputter)
let g:quickrun_config['php.unit'] = {
			\ 'command': 'phpunit',
			\ 'outputter': 'phpunit_outputter',
			\ }

let g:quickrun_config['ruby.rspec'] = {'command': 'spec'}

let g:quickrun_config['markdown'] = {
			\ 'type': 'markdown/kramdown',
			\ 'outputter': 'browser'
			\ }

let g:quickrun_config.textile = {
			\ 'command': 'redcloth',
			\ 'tempfile': '{tempname()}.textile',
			\ 'exec': ['%c %s > %s:p:r.html', 'open %s:p:r.html', 'sleep 1', 'rm %s:p:r.html']
			\ }

" ref.vim {{{2
" vimprocを使用すると上手く動かない
let g:ref_use_vimproc = 0
if s:iswindows
	let g:ref_phpmanual_path = $HOME . '\share\phpmanual'
else
	let g:ref_phpmanual_path = $HOME . '/share/phpmanual'
endif

let g:ref_alc_use_cache = 1

noremap <Space>ra :<C-u>Ref alc<Space>
noremap <Space>rm :<C-u>Ref man<Space>


" restart.vim {{{2
command!
\   -bar
\   RestartWithSession
\   let g:restart_sessionoptions = 'blank,curdir,folds,help,localoptions,tabpages'
\   | Restart

MapAlterCommand res[tart] Restart
MapAlterCommand ers[tart] Restart
MapAlterCommand rse[tart] Restart


" smartword.vim {{{2
map w <Plug>(smartword-w)
map b <Plug>(smartword-b)
map e <Plug>(smartword-e)
map ge <Plug>(smartword-ge)
noremap W w
noremap B b
noremap E e
noremap gE ge


" syntastic.vim {{{2
let g:syntastic_mode_map = {
			\ 'mode': 'active',
			\ 'active_filetypes': [''],
			\ 'passive_filetypes': ['html', 'php']
			\ }
let g:syntastic_auto_loc_list=0

" sonictemplate.vim {{{2
let g:sonictemplate_vim_template_dir = expand('~/.vim/templates/')


" spec.vim {{{2
let g:spec_chglog_format = "%a %b %d %Y hamaco <hamanaka.kazuhiro@gmail.com> -"


" submode.vim {{{2
call submode#enter_with('winsize', 'n', '', '<C-w>>', '<C-w>>')
call submode#enter_with('winsize', 'n', '', '<C-w><', '<C-w><')
call submode#enter_with('winsize', 'n', '', '<C-w>+', '<C-w>+')
call submode#enter_with('winsize', 'n', '', '<C-w>-', '<C-w>-')
call submode#map('winsize', 'n', '', '>', '<C-w>>')
call submode#map('winsize', 'n', '', '<', '<C-w><')
call submode#map('winsize', 'n', '', '+', '<C-w>+')
call submode#map('winsize', 'n', '', '-', '<C-w>-')

call submode#enter_with('textmanip', 'v', 'r', '<C-t>h',
			\   '<Plug>(textmanip-move-left)')
call submode#enter_with('textmanip', 'v', 'r', '<C-t>j',
			\   '<Plug>(textmanip-move-down)')
call submode#enter_with('textmanip', 'v', 'r', '<C-t>k',
			\   '<Plug>(textmanip-move-up)')
call submode#enter_with('textmanip', 'v', 'r', '<C-t>l',
			\   '<Plug>(textmanip-move-right)')
call submode#map('textmanip', 'v', 'r', 'h',
			\   '<Plug>(textmanip-move-left)')
call submode#map('textmanip', 'v', 'r', 'j',
			\   '<Plug>(textmanip-move-down)')
call submode#map('textmanip', 'v', 'r', 'k',
			\   '<Plug>(textmanip-move-up)')
call submode#map('textmanip', 'v', 'r', 'l',
			\   '<Plug>(textmanip-move-right)')


" surround.vim {{{2
map <Leader>q <Plug>Csurround w"
map <Leader>sq <Plug>Csurround w'
map <Leader>` <Plug>Csurround w`


" unite.vim {{{2
nnoremap [unite] <Nop>
nmap f [unite]

noremap <silent> [unite]u  :<C-u>Unite -buffer-name=files -start-insert buffer file file_mru<CR>
noremap <silent> [unite]f  :<C-u>Unite -buffer-name=files -start-insert buffer file_rec<CR>
noremap <silent> [unite]b  :<C-u>UniteWithBufferDir -buffer-name=files -start-insert file<CR>
noremap <silent> [unite]c  :<C-u>UniteWithCurrentDir -buffer-name=files -start-insert buffer file_mru bookmark file<CR>
noremap <silent> [unite]l  :<C-u>Unite -start-insert line<CR>
noremap <silent> [unite]t  :<C-u>Unite -immediately tab:no-current<CR>
noremap <silent> [unite]w  :<C-u>Unite -immediately window:no-current<CR>
noremap <silent> [unite]o  :<C-u>Unite outline<CR>
noremap <silent> [unite]g  :<C-u>Unite grep<CR><CR>
noremap <silent> [unite]s  :<C-u>Unite colorscheme -auto-preview<CR>
"noremap <silent> :          :<C-u>Unite -start-insert history/command command<CR>
if s:iswindows
	noremap <silent> [unite]e  :<C-u>Unite -start-insert everything<CR>
endif
" Execute help.
nnoremap <C-h>  :<C-u>Unite -start-insert help<CR>
" Execute help by cursor keyword.
nnoremap <silent> g<C-h>  :<C-u>UniteWithCursorWord -start-insert help<CR>

autocmd FileType unite call s:unite_my_settings()
function! s:unite_my_settings() "{{{
	nmap <buffer> <ESC> <Plug>(unite_exit)
	imap <buffer> jj <Plug>(unite_insert_leave)
	nmap <buffer> ' <Plug>(unite_quick_match_default_action)
	imap <buffer> ' <Plug>(unite_quick_match_default_action)
	nmap <buffer> x <Plug>(unite_toggle_mark_current_candidate)
endfunction "}}}

"let g:unite_abbr_highlight = 'TabLine'
"let g:unite_cursor_line_highlight = 'TabLineSel'
let g:unite_enable_split_vertically = 0
let g:unite_enable_start_insert = 0
let g:unite_source_file_mru_filename_format = ''
let g:unite_source_file_mru_limit = 150


"call unite#custom_alias('file', 'h', 'left')
"call unite#custom_alias('file', 'l', 'right')
"call unite#custom_alias('file', 'to', 'tabopen')

call unite#set_buffer_name_option('default', 'ignorecase', 1)
call unite#set_buffer_name_option('default', 'smartcase', 1)

call unite#set_substitute_pattern('files', '^@@', '\=fnamemodify(expand("#"), ":p:h")."/*"', 2)
call unite#set_substitute_pattern('files', '^@', '\=getcwd()."/*"', 1)
call unite#set_substitute_pattern('files', '^\\', '~/*')
call unite#set_substitute_pattern('files', '^;v', '~/.vim/*')
call unite#set_substitute_pattern('files', '^;b', '~/.bundle/*')
call unite#set_substitute_pattern('files', '\*\*\+', '*', -1)

if s:iswindows
else
	call unite#set_substitute_pattern('files', ';w', '/web')
end

let g:unite_launch_apps = [
			\ 'rake',
			\ 'make',
			\ 'git pull',
			\ 'git push']


" unite-hatenabookmark {{{2
let g:unite_hatenabookmark_username = 'hamaco'
let g:unite_hatenabookmark_print_pattern = '[comment] [title]'


" vimfiler.vim {{{2
let g:vimfiler_as_default_explorer = 1
let g:vimfiler_edit_command = "tabedit"
"autocmd FileType vimfiler nnoremap <buffer> / /\_^- \zs


" vim-alignta {{{2
vnoremap <Leader>a :Alignta<Space>

" vim-operator-user {{{2
map R <Plug>(operator-replace)
map <Leader>c <Plug>(operator-camelize)
map <Leader>C <Plug>(operator-decamelize)


" vim-textmanip {{{2
" 選択したテキストの移動
vmap <C-j> <Plug>(Textmanip.move_selection_down)
vmap <C-k> <Plug>(Textmanip.move_selection_up)
vmap <C-h> <Plug>(Textmanip.move_selection_left)
vmap <C-l> <Plug>(Textmanip.move_selection_right)

" 行の複製
vmap <M-d> <Plug>(Textmanip.duplicate_selection_v)
nmap <M-d> <Plug>(Textmanip.duplicate_selection_n)

" vimshell.vim {{{2
let g:vimshell_user_prompt = 'getcwd()'
"let g:vimshell_right_prompt = 'vimshell#vcs#info("(%s)-[%b]", "(%s)-[%b|%a]")'
let g:vimshell_external_history_path = expand('~/.zsh_histfile')
let g:vimshell_smart_case = 1
let g:vimshell_max_command_history = 10000
let g:vimshell_cd_command = 'TabpageCD'

if s:iswindows
	" Display user name on Windows.
	let g:vimshell_prompt = $USERNAME."% "
elseif has('mac')
	" Display user name on Mac.
	"let g:vimshell_prompt = "/ _ / ×"
	let g:vimshell_prompt = $USERNAME."% "
else
	" Display user name on Linux.
	let g:vimshell_prompt = $USER."% "
endif

nnoremap <C-@> :<C-u>VimShellPop<CR>
nnoremap <C-Space> :<C-u>VimShellPop<CR>
"nnoremap <Space>; :<C-u>VimShell<CR>


" zen-coding.vim {{{2
let g:user_zen_expandabbr_key = '<C-e>'




" key mappings {{{1
nnoremap <Space>ev :<C-u>tabedit $MYVIMRC<CR>
nnoremap <Space>eg :<C-u>tabedit $MYGVIMRC<CR>
nnoremap <Space>rv :<C-u>source $MYVIMRC \| if has('gui_running') \| source $MYGVIMRC \| endif<CR>
nnoremap <Space>rg :<C-u>source $MYGVIMRC<CR>

nnoremap <Space>em :<C-u>tabedit ~/Dropbox/diary.txt<CR>

nnoremap Y y$

nnoremap Q q
nnoremap q <Nop>

noremap ; :
"noremap : ;

nnoremap j gj
nnoremap k gk
nnoremap gh ^
nnoremap gl $

inoremap jj <ESC>

noremap <Space> <Nop>
"noremap <S-k> <Nop>
noremap <S-q> <Nop>

nnoremap <Space>w :<C-u>write<CR>
nnoremap <Space>q :<C-u>quit<CR>

" Emacsっぽいキーバインド {{{2
inoremap <C-x><C-s> <C-o>:<C-u>write<CR>
inoremap <C-f> <Right>
inoremap <C-b> <Left>
"inoremap <C-e> <End>
cnoremap <C-f> <Right>
cnoremap <C-b> <Left>

inoremap <C-u> <C-g>u<C-u>
inoremap <C-w> <C-g>u<C-w>

noremap <C-BS> <C-w>
noremap! <C-BS> <C-w>

cnoremap <C-k> <C-\>e getcmdpos() == 1 ? '' : getcmdline()[:getcmdpos()-2]<CR>
"}}}

nnoremap <Space>n :<C-u>nohlsearch<CR>
nnoremap vv <C-v>

" vim hacks 214
onoremap ) t)
onoremap ( t(
vnoremap ) t)
vnoremap ( t(

cnoremap <expr> / getcmdtype() == '/' ? '\/' : '/'
cnoremap <expr> ? getcmdtype() == '?' ? '\?' : '?'

if has("unix")
	cnoremap <C-x> <C-r>=expand("%:p:h")<CR>/
endif

vnoremap * "zy:let @/ = @z<CR>n



" タブ {{{2
nnoremap <C-t> <Nop>
nnoremap <C-t>c :<C-u>tabnew<CR>
nnoremap <C-t>k :<C-u>tabclose<CR>
nnoremap <C-t>o :<C-u>tabonly<CR>
nnoremap <C-t>p :<C-u>tabprevious<CR>
nnoremap <C-t>n :<C-u>tabnext<CR>
nnoremap <C-p> :<C-u>tabprevious<CR>
nnoremap <C-n> :<C-u>tabnext<CR>
nnoremap <silent> <Left> :<C-u>execute 'tabmove' tabpagenr() - 2<CR>
nnoremap <silent> <Right> :<C-u>execute 'tabmove' tabpagenr()<CR>




" commands {{{1
command! -complete=file -nargs=1 Rename f <args>|call delete(expand("#"))

" 文字コードを変えて最読込 {{{2
command! -bang -complete=file -nargs=? Utf8
\ edit<bang> ++enc=utf-8 <args>

command! -bang -complete=file -nargs=? Eucjp
\ edit<bang> ++enc=euc-jp <args>

command! -bang -complete=file -nargs=? Sjis
\ edit<bang> ++enc=cp932 <args>

" 文字コードを変換 {{{2
command! -bang -nargs=0 ToUtf8
\ setlocal fileencoding=utf-8

command! -bang -nargs=0 ToEucjp
\ setlocal fileencoding=euc-jp

command! -bang -nargs=0 ToSjis
\ setlocal fileencoding=cp932

command! -bang -nargs=0 ToWindows
\ setlocal fileencoding=cp932 fileformat=dos


" カレントディレクトリ変更{{{2
" :TabpageCD - wrapper of :cd to keep cwd for each tabpage  "{{{

AlterCommand cd  TabpageCD

Map [n] ,cd       :<C-u>TabpageCD %:p:h<CR>
Map [n] <Space>cd :<C-u>lcd %:p:h<CR>

command!
\   -bar -complete=dir -nargs=?
\   CD
\   TabpageCD <args>

command!
\   -bar -complete=dir -nargs=?
\   TabpageCD
\   execute 'cd' fnameescape(expand(<q-args>))
\   | let t:cwd = getcwd()

autocmd TabEnter *
\   if exists('t:cwd') && !isdirectory(t:cwd)
\ |     unlet t:cwd
\ | endif
\ | if !exists('t:cwd')
\ |   let t:cwd = getcwd()
\ | endif
\ | execute 'cd' fnameescape(expand(t:cwd))
" }}}


" autocmd {{{1

autocmd MyAutoCmd FileType git-diff,help,quickrun,quickfix,qf,ref,vcs-status nnoremap <buffer> q <C-w>c
autocmd MyAutoCmd QuickfixCmdPost make,grep,grepadd,vimgrep if len(getqflist()) != 0 | copen | endif

autocmd MyAutoCmd BufEnter *vimshell set listchars=tab:\ \ ,extends:>,precedes:<
autocmd MyAutoCmd BufLeave *vimshell set listchars=tab:>-,trail:-,extends:>,precedes:<

augroup vimrc-checktime
  autocmd!
  autocmd WinEnter * checktime
augroup END


" QuickRunPHPUnit {{{
augroup QuickRunPHPUnit
  autocmd!
  autocmd BufWinEnter,BufNewFile *_test.php set filetype=php.unit
  autocmd BufWinEnter,BufNewFile *Test.php set filetype=php.unit
augroup END

"let g:quickrun_config['php.unit'] = {'command': 'phpunit'}
" }}}



" Tmp: 一時的な設定 ============================================ {{{1

let g:php_localvarcheck_enable = 1


" vim hacks #106
command! Big wincmd _ | wincmd |

" vim hacks #130
" http://webtech-walker.com/archive/2010/03/17093357.html
command! -complete=file -nargs=+ Grep call s:grep([<f-args>])
function! s:grep(args)
	let target = len(a:args) > 1 ? join(a:args[1:]) : '**/*'
	execute 'grep ' . a:args[0] . ' ' . target
	if len(getqflist()) != 0 | copen | endif
endfunction

" vim hacks #141
" Flip Arguments {{{
"   f(a, b) to f(b, a) when your cursol is on '('.
function! FlipArguments()
  normal! y%
  let @" = split(system('flipper "' . @" . '"'), "\n")[0]
  execute "normal! %p\<C-o>d%"
endfunction
nnoremap <space>flip :<C-u>call FlipArguments()<Cr>
" }}}

" kana's useful tab function {{{
function! s:move_window_into_tab_page(target_tabpagenr)
	" Move the current window into a:target_tabpagenr.
	" If a:target_tabpagenr is 0, move into new tab page.
	if a:target_tabpagenr < 0  " ignore invalid number.
		return
	endif
	let original_tabnr = tabpagenr()
	let target_bufnr = bufnr('')
	let window_view = winsaveview()

	if a:target_tabpagenr == 0
		tabnew
		tabmove  " Move new tabpage at the last.
		execute target_bufnr 'buffer'
		let target_tabpagenr = tabpagenr()
	else
		execute a:target_tabpagenr 'tabnext'
		let target_tabpagenr = a:target_tabpagenr
		topleft new  " FIXME: be customizable?
		execute target_bufnr 'buffer'
	endif
	call winrestview(window_view)

	execute original_tabnr 'tabnext'
	if 1 < winnr('$')
		close
	else
		enew
	endif

	execute target_tabpagenr 'tabnext'
endfunction " }}}
" <space>ao move current buffer into a new tab.
nnoremap <silent> <Space>ao :<C-u>call <SID>move_window_into_tab_page(0)<Cr>

" vim hacks #181
" Open junk file."{{{
command! -nargs=0 JunkFile call s:open_junk_file()
function! s:open_junk_file()
  let l:junk_dir = $HOME . '/.vim_junk'. strftime('/%Y/%m')
  if !isdirectory(l:junk_dir)
    call mkdir(l:junk_dir, 'p')
  endif

  let l:filename = input('Junk Code: ', l:junk_dir.strftime('/%Y-%m-%d-%H%M%S.'))
  if l:filename != ''
    execute 'edit ' . l:filename
  endif
endfunction "}}}

" vim hacks #149
let s:coding_styles = {}
let s:coding_styles['My style']      = 'setl expandtab   tabstop=4 shiftwidth=4 softtabstop&'
let s:coding_styles['Short indent']  = 'setl expandtab   tabstop=2 shiftwidth=2 softtabstop&'
let s:coding_styles['GNU']           = 'setl expandtab   tabstop=8 shiftwidth=2 softtabstop=2'
let s:coding_styles['BSD']           = 'setl noexpandtab tabstop=8 shiftwidth=4 softtabstop&'
let s:coding_styles['Linux']         = 'setl noexpandtab tabstop=8 shiftwidth=8 softtabstop&'

command!
\   -bar -nargs=1 -complete=customlist,s:coding_style_complete
\   CodingStyle
\   execute get(s:coding_styles, <f-args>, '')

function! s:coding_style_complete(...) "{{{
    return keys(s:coding_styles)
endfunction "}}}


" vim hacks #159
nmap <Space>sj <SID>(split-to-j)
nmap <Space>sk <SID>(split-to-k)
nmap <Space>sh <SID>(split-to-h)
nmap <Space>sl <SID>(split-to-l)

nnoremap <SID>(split-to-j) :<C-u>execute 'belowright' (v:count == 0 ? '' : v:count) 'split'<CR>
nnoremap <SID>(split-to-k) :<C-u>execute 'aboveleft'  (v:count == 0 ? '' : v:count) 'split'<CR>
nnoremap <SID>(split-to-h) :<C-u>execute 'topleft'    (v:count == 0 ? '' : v:count) 'vsplit'<CR>
nnoremap <SID>(split-to-l) :<C-u>execute 'botright'   (v:count == 0 ? '' : v:count) 'vsplit'<CR>

" vim hacks #161
nnoremap <sid>(command-line-enter) q:
xnoremap <sid>(command-line-enter) q:
nnoremap <sid>(command-line-norange) q:<C-u>

nmap :  <sid>(command-line-enter)
xmap :  <sid>(command-line-enter)

autocmd MyAutoCmd CmdwinEnter * call s:init_cmdwin()
function! s:init_cmdwin()
  nnoremap <buffer> q :<C-u>quit<CR>
  nnoremap <buffer> <TAB> :<C-u>quit<CR>
  inoremap <buffer><expr><CR> pumvisible() ? "\<C-y>\<CR>" : "\<CR>"
  inoremap <buffer><expr><C-h> pumvisible() ? "\<C-y>\<C-h>" : "\<C-h>"
  inoremap <buffer><expr><BS> pumvisible() ? "\<C-y>\<C-h>" : "\<C-h>"

  " Completion.
  " inoremap <buffer><expr><TAB>  pumvisible() ? "\<C-n>" : <SID>check_back_space() ? "\<TAB>" : "\<C-x>\<C-u>\<C-p>"

  " Altercmd.
  "call altercmd#define('<buffer>', 'grep', 'Grep', 'i')
  call altercmd#define('<buffer>', 'uniq', 'Uniq', 'i')

  startinsert!
endfunction

" vim hacks #228
let ColorRoller = {}
let ColorRoller.colors = [
      \ 'luciusmod',
      \ 'rdark',
      \ 'vydark',
      \ 'pyte',
      \ 'solarized',
      \ 'newspaper',
      \ ]

function! ColorRoller.change()
  let color = get(self.colors, 0)
  silent exe "Tcolorscheme " . color
  redraw
  "echo self.colors
endfunction

function! ColorRoller.roll()
  let item = remove(self.colors, 0)
  call insert(self.colors, item, len(self.colors))
  call self.change()
endfunction

function! ColorRoller.unroll()
  let item = remove(self.colors, -1)
  call insert(self.colors, item, 0)
  call self.change()
endfunction

nnoremap <silent><F9>   :<C-u>call ColorRoller.roll()<CR>
nnoremap <silent><S-F9> :<C-u>call ColorRoller.unroll()<CR>

" buffer
nnoremap s <Nop>
nnoremap ss s
nnoremap sh <C-w>h:call <SID>good_width()<Cr>
nnoremap sj <C-w>j
nnoremap sk <C-w>k
nnoremap sl <C-w>l:call <SID>good_width()<Cr>
nnoremap sH <C-w>H:call <SID>good_width()<Cr>
nnoremap sJ <C-w>J
nnoremap sK <C-w>K
nnoremap sL <C-w>L:call <SID>good_width()<Cr>

function! s:good_width()
  if winwidth(0) < 84
    vertical resize 84
  endif
endfunction


" Scounter
"function! Scouter(file, ...)
"  let pat = '^\s*$\|^\s*"'
"  let lines = readfile(a:file)
"  if !a:0 || !a:1
"    let lines = split(substitute(join(lines, "\n"), '\n\s*\\', '', 'g'), "\n")
"  endif
"  return len(filter(lines,'v:val !~ pat'))
"endfunction
"command! -bar -bang -nargs=? -complete=file Scouter
"\        echo Scouter(empty(<q-args>) ? $MYVIMRC : expand(<q-args>), <bang>0)
"command! -bar -bang -nargs=? -complete=file GScouter
"\        echo Scouter(empty(<q-args>) ? $MYGVIMRC : expand(<q-args>), <bang>0)

augroup vimrc-misc  " {{{
  " ... 中略 ...
  " Update filetype.
  autocmd BufWritePost * if &l:filetype == '' || exists('b:ftdetect')
  \                      | unlet! b:ftdetect | filetype detect | endif
  " ... 中略 ...
augroup END  " }}}


augroup vimrc-auto-mkdir  " {{{
  autocmd!
  autocmd BufWritePre * call s:auto_mkdir(expand('<afile>:p:h'))
  function! s:auto_mkdir(dir)  " {{{
    if !isdirectory(a:dir)
      call mkdir(iconv(a:dir, &encoding, &termencoding), 'p')
    endif
  endfunction  " }}}
augroup END  " }}}

" git-diff-aware version of gf commands.
" http://labs.timedia.co.jp/2011/04/git-diff-aware-gf-commands-for-vim.html
" nnoremap <expr> gf  <SID>do_git_diff_aware_gf('gf')
" nnoremap <expr> gF  <SID>do_git_diff_aware_gf('gF')
" nnoremap <expr> <C-w>f  <SID>do_git_diff_aware_gf('<C-w>f')
" nnoremap <expr> <C-w><C-f>  <SID>do_git_diff_aware_gf('<C-w><C-f>')
" nnoremap <expr> <C-w>F  <SID>do_git_diff_aware_gf('<C-w>F')
" nnoremap <expr> <C-w>gf  <SID>do_git_diff_aware_gf('<C-w>gf')
" nnoremap <expr> <C-w>gF  <SID>do_git_diff_aware_gf('<C-w>gF')
" 
" function! s:do_git_diff_aware_gf(command)
"   let target_path = expand('<cfile>')
"   if target_path =~# '^[ab]/'  " with a peculiar prefix of git-diff(1)?
"     if filereadable(target_path) || isdirectory(target_path)
"       return a:command
"     else
"       " BUGS: Side effect - Cursor position is changed.
"       let [_, c] = searchpos('\f\+', 'cenW')
"       return c . '|' . 'v' . (len(target_path) - 2 - 1) . 'h' . a:command
"     endif
"   else
"     return a:command
"   endif
" endfunction

" HighlightWith
command! -nargs=+ -range=% HighlightWith <line1>,<line2>call s:highlight_with(<q-args>)
xnoremap [Space]h :HighlightWith<Space><C-f>

function! s:highlight_with(args) range
	if a:firstline == 1 && a:lastline == line('$')
		return
	endif
	let c = get(b:, 'highlight_count', 0)
	let ft = matchstr(a:args, '^\w\+')
	if globpath(&rtp, 'syntax/' . ft . '.vim') == ''
		return
	endif
	unlet! b:current_syntax
	let save_isk= &l:isk  " For scheme.
	execute printf('syntax include @highlightWith%d syntax/%s.vim',
				\              c, ft)
	let &l:isk= save_isk
	execute printf('syntax region highlightWith%d start=/\%%%dl/ end=/\%%%dl$/ '
				\            . 'contains=@highlightWith%d',
				\             c, a:firstline, a:lastline, c)
	let b:highlight_count = c + 1
endfunction

augroup vimrc-highlight
	autocmd!
	autocmd Syntax * call s:syntax_additional()
augroup END

function! s:syntax_additional()
	syntax match myMemo /MEMO/ containedin=.*Comment.* contained
	highlight default link myMemo Todo
endfunction

if filereadable(expand('~/.vimrc.local'))
	source ~/.vimrc.local
endif

" END {{{1
" vim: foldmethod=marker
