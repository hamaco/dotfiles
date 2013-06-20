set nocompatible

if has('vim_starting')
  set runtimepath+=$HOME/.bundle/neobundle.vim
endif
call neobundle#rc(expand('~/.bundle'))

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

" unite {{{
NeoBundleLazy 'Shougo/unite.vim', {
\   'autoload': {'commands': [
\       {'name': 'Unite', 'complete': 'customlist,unite#complete_source'},
\       'UniteWithBufferDir',
\   ]}
\ }
NeoBundleLazy 'Shougo/unite-outline', {
\   'depends': 'Shougo/unite.vim',
\   'autoload': {'unite_sources': 'outline'}
\ }
NeoBundleLazy 'ujihisa/unite-colorscheme', {
\   'depends': 'Shougo/unite.vim',
\   'autoload': {'unite_sources': 'colorscheme'}
\ }
" }}}

" quickrun {{{
NeoBundleLazy 'thinca/vim-quickrun', {
\   'depends': 'Shougo/unite.vim',
\   'autoload' : {'mappings' : ['<Plug>(quickrun)']},
\ }
NeoBundleLazy 'hamaco/quickrun-hook-u-nya-', {
\   'depends': 'thinca/vim-quickrun'
\ }
NeoBundleLazy 'osyo-manga/shabadou.vim', {
\   'depends': 'thinca/vim-quickrun'
\ }
NeoBundleLazy 'osyo-manga/unite-quickfix', {
\   'depends': 'thinca/vim-quickrun'
\ }
NeoBundleLazy 'karakaram/vim-quickrun-phpunit', {
\   'depends': 'thinca/vim-quickrun'
\ }
NeoBundleLazy 'jceb/vim-hier'
NeoBundleLazy 'osyo-manga/vim-watchdogs', {
\   'depends': ['Shougo/vimproc', 'thinca/vim-quickrun', 'jceb/vim-hier', 'osyo-manga/shabadou.vim']
\ }
" }}}

" neocomplcache {{{
NeoBundleLazy 'Shougo/neocomplcache', {
\   'autoload': {
\     'insert': 1,
\   }
\ }
NeoBundleLazy 'Shougo/neosnippet', {
\   'depends': 'Shougo/neocomplcache',
\   'autoload': {
\     'insert': 1,
\     'filetypes': 'snippet',
\     'unite_sources': ['snippet', 'neosnippet/user', 'neosnippet/runtime'],
\   }
\ }
" }}}

" git {{{
" autocmd で頑張ってるので Lazy できなさそう
NeoBundle 'tpope/vim-fugitive'
" NeoBundleLazy 'airblade/vim-gitgutter'
" }}}

" PHP {{{
NeoBundleLazy 'vim-scripts/php_localvarcheck.vim', {
\   'autoload': {'filetypes': 'php'}
\ }
NeoBundleLazy 'StanAngeloff/php.vim', {
\   'autoload': {'filetypes': 'php'}
\ }
" }}}


" JavaScript {{{
NeoBundleLazy 'kchmck/vim-coffee-script', {
\   'autoload': {'filetypes': 'coffee'}
\ }
" }}}

NeoBundleLazy 'tyru/caw.vim', {
\   'autoload': {'mappings': '<Plug>(caw:prefix)'}
\ }
NeoBundleLazy 'tyru/current-func-info.vim', {
\   'autoload': {'functions': 'cfi#format'}
\ }
NeoBundleLazy 'Shougo/vimfiler', {
\   'depends': 'Shougo/unite.vim',
\   'autoload': {
\     'commands': ['VimFiler', 'VimFilerExplorer'],
\     'explorer': 1,
\   }
\ }
NeoBundleLazy 'Shougo/vimshell', {
\   'autoload': {'commands': ['VimShell', 'VimShellPop']},
\   'mappings' : ['<Plug>(vimshell_switch)']
\ }
NeoBundleLazy 'h1mesuke/vim-alignta', {
\   'autoload': {'commands': ['Alignta']},
\ }



" blog {{{
NeoBundleLazy 'tangledhelix/vim-octopress'
NeoBundleLazy 'glidenote/octoeditor.vim', {
\   'depends': 'tangledhelix/vim-octopress',
\   'autoload': {'commands': ['OctopressList', 'OctopressNew']}
\ }
" }}}


" Twitter {{{
NeoBundleLazy 'tyru/open-browser.vim'
NeoBundleLazy 'basyura/twibill.vim'
NeoBundleLazy 'basyura/TweetVim', {
\   'depends': ['tyru/open-browser.vim', 'basyura/twibill.vim'],
\   'autoload': {'commands': 'TweetVimHomeTimeline'}
\ }
" }}}

" ColorScheme {{{
NeoBundle 'nanotech/jellybeans.vim'
NeoBundleLazy 'w0ng/vim-hybrid'
NeoBundleLazy 'itchyny/landscape.vim'
NeoBundle 'vim-scripts/newspaper.vim'
NeoBundleLazy 'aereal/vim-magica-colors'
NeoBundleLazy 'git://gist.github.com/187578.git', {'directory' : 'h2u_white'}
" }}}

" other
NeoBundleLazy 'kana/vim-niceblock'
NeoBundleLazy 'kana/vim-smartchr'
NeoBundle 'kana/vim-smartinput'
NeoBundle 'kana/vim-smartword'
NeoBundleLazy 'kana/vim-operator-user'
NeoBundleLazy 'kana/vim-operator-replace'
NeoBundleLazy 'kana/vim-textobj-user'
NeoBundleLazy 'mattn/sonictemplate-vim', {
\   'autoload': {'commands': ['Template']}
\ }
NeoBundleLazy 'mattn/webapi-vim'
NeoBundleLazy 'mattn/gist-vim', {
\   'depends': 'mattn/webapi-vim',
\   'autoload': {'commands': ['Gist']}
\ }
" NeoBundleLazy 'teramako/instant-markdown-vim'
NeoBundleLazy 'thinca/vim-localrc'
NeoBundleLazy 'thinca/vim-ref', {
\   'autoload': {
\     'commands': ['Ref'],
\     'mappings': '<Plug>(ref-keyword)',
\   }
\ }
NeoBundleLazy 'kana/vim-submode'
NeoBundleLazy 'osyo-manga/vim-hideout', {
\   'autoload': {'commands': ['HideoutOn']}
\ }
NeoBundle 'tpope/vim-abolish'
" NeoBundleLazy 'tpope/vim-capslock'
NeoBundleLazy 'tyru/autochmodx.vim'
NeoBundleLazy 'tyru/eskk.vim', {
\   'autoload': {'mappings' : [['i', '<Plug>(eskk:toggle)']]}
\ }
NeoBundleLazy 'tyru/restart.vim', {
\   'gui': 1,
\   'autoload': {'commands': ['Restart', 'RestartWithSession']}
\ }
NeoBundle 'ujihisa/shadow.vim'
NeoBundleLazy 'vim-scripts/matchit.zip'
NeoBundle 'vim-scripts/sudo.vim'
NeoBundleLazy 'majutsushi/tagbar'
NeoBundleLazy 'supermomonga/shaberu.vim', {
\   'depends': 'Shougo/vimproc'
\ }
NeoBundleLazy 'Yggdroot/indentLine'
NeoBundleLazy 'rking/ag.vim', {
\   'autoload': {'commands': ['Ag']}
\ }

NeoBundleLazy 'thinca/vim-scouter', {
\   'autoload': {'commands': ['Scouter']}
\ }
" NeoBundleLazy 'rhysd/clever-f.vim'




NeoBundle 'Shougo/context_filetype.vim'
NeoBundle 'osyo-manga/vim-precious'

filetype indent plugin on

" vim: foldmethod=marker
