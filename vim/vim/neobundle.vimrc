set nocompatible
filetype off

if has('vim_starting')
	set runtimepath+=$HOME/.bundle/neobundle.vim
	call neobundle#rc(expand('~/.bundle'))
endif

" base {{{
NeoBundleFetch 'Shougo/neobundle.vim'
NeoBundle 'vim-jp/vimdoc-ja'
NeoBundle 'Shougo/vimproc', {
\  'build': {
\     'mac' : 'make -f make_mac.mak',
\     'unix': 'make -f make_unix.mak',
\     'cygwin': 'make -f make_cygwin.mak',
\   },
\ }
" }}}

" blog {{{
NeoBundleLazy 'tangledhelix/vim-octopress'
NeoBundleLazy 'glidenote/octoeditor.vim', {
\   'depends': 'tangledhelix/vim-octopress',
\   'autoload': {'commands': ['OctopressList', 'OctopressNew']}
\ }
" }}}

" unite {{{
NeoBundle 'Shougo/unite.vim'
NeoBundle 'Shougo/unite-outline', {
\   'depends': 'Shougo/unite.vim'
\ }
" }}}

" quickrun {{{
NeoBundle 'thinca/vim-quickrun', {
\   'depends': 'Shougo/unite.vim'
\ }
NeoBundle 'hamaco/quickrun-hook-u-nya-', {
\   'depends': 'thinca/vim-quickrun'
\ }
NeoBundle 'osyo-manga/shabadou.vim', {
\   'depends': 'thinca/vim-quickrun'
\ }
NeoBundle 'osyo-manga/unite-quickfix', {
\   'depends': 'thinca/vim-quickrun'
\ }
NeoBundle 'karakaram/vim-quickrun-phpunit', {
\   'depends': 'thinca/vim-quickrun'
\ }
NeoBundle 'jceb/vim-hier'
NeoBundle 'osyo-manga/vim-watchdogs', {
\   'depends': ['Shougo/vimproc', 'thinca/vim-quickrun', 'jceb/vim-hier', 'osyo-manga/shabadou.vim']
\ }
" }}}

" neocomplcache {{{
NeoBundle 'Shougo/neocomplcache'
NeoBundle 'Shougo/neosnippet', {
\   'depends': 'Shougo/neocomplcache',
\ }
" }}}

" git {{{
NeoBundle 'tpope/vim-fugitive'
NeoBundle 'airblade/vim-gitgutter'
" }}}

" PHP {{{
NeoBundleLazy 'vim-scripts/php_localvarcheck.vim', {
\   'autoload': {'filetypes': 'php'}
\ }
NeoBundleLazy 'StanAngeloff/php.vim', {
\   'autoload': {'filetypes': 'php'}
\ }
" }}}

" Twitter {{{
NeoBundle 'tyru/open-browser.vim'
NeoBundleLazy 'basyura/twibill.vim'
NeoBundleLazy 'basyura/TweetVim', {
\   'depends': ['tyru/open-browser.vim', 'basyura/twibill.vim'],
\   'autoload': {'commands': 'TweetVimHomeTimeline'}
\ }
" }}}

" Colorscheme {{{
NeoBundle 'nanotech/jellybeans.vim'
NeoBundle 'w0ng/vim-hybrid'
NeoBundleLazy 'aereal/vim-magica-colors'
NeoBundleLazy 'git://gist.github.com/187578.git', {'directory' : 'h2u_white'}
" }}}

" other
NeoBundle 'h1mesuke/vim-alignta'
NeoBundle 'kana/vim-niceblock'
NeoBundle 'kana/vim-smartchr'
NeoBundle 'kana/vim-smartinput'
NeoBundle 'kana/vim-smartword'
NeoBundle 'kana/vim-operator-user'
NeoBundle 'kana/vim-operator-replace'
NeoBundle 'kana/vim-textobj-user'
NeoBundleLazy 'mattn/sonictemplate-vim', {
\   'autoload': {'commands': ['Template']}
\ }
NeoBundleLazy 'mattn/webapi-vim'
NeoBundleLazy 'mattn/gist-vim', {
\   'depends': 'mattn/webapi-vim',
\   'autoload': {'commands': ['Gist']}
\ }
NeoBundle 'teramako/instant-markdown-vim'
NeoBundle 'thinca/vim-localrc'
NeoBundle 'thinca/vim-ref'
NeoBundle 'kana/vim-submode'
NeoBundle 'tpope/vim-abolish'
NeoBundle 'tpope/vim-capslock'
NeoBundle 'tyru/autochmodx.vim'
NeoBundle 'tyru/caw.vim'
NeoBundle 'tyru/current-func-info.vim'
NeoBundle 'tyru/eskk.vim'
NeoBundleLazy 'tyru/restart.vim', {
\   'autoload': {'commands': ['Restart', 'RestartWithSession']}
\ }
NeoBundle 'ujihisa/shadow.vim'
NeoBundle 'vim-scripts/matchit.zip'
NeoBundle 'vim-scripts/sudo.vim'
NeoBundle 'Shougo/vimfiler', {
\   'depends': 'Shougo/unite.vim'
\ }
NeoBundleLazy 'Shougo/vimshell', {
\   'autoload': {'commands': ['VimShell', 'VimShellPop']},
\   'mappings' : ['<Plug>(vimshell_switch)']
\ }
NeoBundle 'majutsushi/tagbar'
NeoBundle 'supermomonga/shaberu.vim', {
\   'depends': 'Shougo/vimproc'
\ }
NeoBundle 'Yggdroot/indentLine'
NeoBundleLazy 'rking/ag.vim', {
\   'autoload': {'commands': ['Ag']}
\ }

NeoBundleLazy 'thinca/vim-scouter', {
\   'autoload': {'commands': ['Scouter']}
\ }

filetype indent plugin on

" vim: foldmethod=marker
