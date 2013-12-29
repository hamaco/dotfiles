set nocompatible

if has('vim_starting')
  set runtimepath+=$HOME/.bundle/neobundle.vim
endif
call neobundle#rc(expand('~/.bundle'))

" base {{{
NeoBundleFetch 'Shougo/neobundle.vim'
NeoBundle 'vim-jp/vimdoc-ja'
NeoBundle 'Shougo/vimproc', {
\   'build': {
\     'mac' : 'make -f make_mac.mak',
\     'unix': 'make -f make_unix.mak',
\     'cygwin': 'make -f make_cygwin.mak',
\   },
\ }

NeoBundleLazy 'tyru/current-func-info.vim', {
\   'autoload': {'functions': 'cfi#format'}
\ }
NeoBundleLazy 'osyo-manga/vim-anzu', {
\   'autoload': {
\     'functions': 'anzu#search_status',
\     'mappings': '<Plug>(anzu-'
\   }
\ }
NeoBundle 'itchyny/lightline.vim'
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
\   'autoload' : {'mappings' : ['<Leader>r', '<Plug>(quickrun)']},
\ }
NeoBundleLazy 'hamaco/quickrun-hook-u-nya-', {
\   'depends' : 'thinca/vim-quickrun',
\   'autoload': {'on_source': 'vim-quickrun'},
\ }
NeoBundleLazy 'karakaram/vim-quickrun-phpunit', {
\   'depends': 'thinca/vim-quickrun'
\ }
NeoBundleLazy 'osyo-manga/shabadou.vim', {
\   'depends': 'thinca/vim-quickrun'
\ }
NeoBundleLazy 'osyo-manga/unite-quickfix', {
\   'depends': ['Shougo/unite.vim', 'thinca/vim-quickrun']
\ }
NeoBundleLazy 'jceb/vim-hier'
NeoBundleLazy 'osyo-manga/vim-watchdogs', {
\   'depends': ['Shougo/vimproc', 'thinca/vim-quickrun', 'jceb/vim-hier', 'osyo-manga/unite-quickfix', 'osyo-manga/shabadou.vim'],
\   'autoload': {
\     'insert': 1,
\   }
\ }
" }}}

" neocomplete {{{
NeoBundleLazy 'Shougo/neocomplete', {
\   'vim_version': '7.3.885',
\   'autoload': {
\     'insert': 1,
\   }
\ }
NeoBundleLazy 'ujihisa/neco-look', {
\   'depends' : 'Shougo/neocomplete',
\   'autoload': {'on_source': 'neocomplete'}
\ }

NeoBundleLazy 'Shougo/neosnippet', {
\   'vim_version': '7.3.885',
\   'depends': 'Shougo/neocomplete',
\   'autoload': {
\     'insert': 1,
\     'filetypes': 'snippet',
\     'unite_sources': ['snippet', 'neosnippet/user', 'neosnippet/runtime'],
\   }
\ }
" }}}

" git {{{
" autocmd で頑張ってるので Lazy できなさそう?
NeoBundle 'tpope/vim-fugitive'
NeoBundle 'gregsexton/gitv'
" NeoBundleLazy 'airblade/vim-gitgutter'
" }}}

" php {{{
NeoBundleLazy 'vim-scripts/php_localvarcheck.vim', {
\   'autoload': {'filetypes': 'php'}
\ }
NeoBundleLazy 'StanAngeloff/php.vim', {
\   'autoload': {'filetypes': 'php'}
\ }
NeoBundleLazy 'majutsushi/tagbar'
NeoBundleLazy 'vim-scripts/tagbar-phpctags', {
\   'depends': 'majutsushi/tagbar',
\   'autoload': {'filetypes': 'php'},
\   'build': {
\      'mac'  : 'chmod +x bin/phpctags',
\      'unix' : 'chmod +x bin/phpctags',
\    },
\ }
" }}}

" html {{{
NeoBundleLazy 'vim-scripts/indenthtml.vim', {
\   'autoload': {'filetypes': 'html'}
\ }
" }}}

" javascript {{{
NeoBundleLazy 'jiangmiao/simple-javascript-indenter', {
\   'autoload': {'filetypes': 'javascript'}
\ }

NeoBundleLazy 'kchmck/vim-coffee-script', {
\   'autoload': {'filetypes': 'coffee'}
\ }
" }}}

" blog {{{
NeoBundleLazy 'tangledhelix/vim-octopress'
NeoBundleLazy 'glidenote/octoeditor.vim', {
\   'depends': 'tangledhelix/vim-octopress',
\   'autoload': {'commands': ['OctopressList', 'OctopressNew']}
\ }
" }}}

" twitter {{{
NeoBundleLazy 'tyru/open-browser.vim', {
\   'autoload': {
\       'mappings': '<Plug>(openbrowser-',
\       'commands': 'OpenBrowser',
\   }
\ }

NeoBundleLazy 'basyura/twibill.vim'
NeoBundleLazy 'basyura/TweetVim', {
\   'depends': ['tyru/open-browser.vim', 'basyura/twibill.vim'],
\   'autoload': {'commands': 'TweetVimHomeTimeline'}
\ }
NeoBundleLazy 'rhysd/tmpwin.vim', {
\   'autoload': {'functions': 'tmpwin#toggle'}
\ }
" }}}

" colorscheme {{{
NeoBundle 'vim-scripts/newspaper.vim'
NeoBundle 'nanotech/jellybeans.vim'
NeoBundle 'w0ng/vim-hybrid'
NeoBundle 'itchyny/landscape.vim'
NeoBundle 'aereal/vim-magica-colors'
NeoBundle 'git://gist.github.com/187578.git', {'directory' : 'h2u_white'}
" }}}

NeoBundleLazy 'tyru/caw.vim', {
\   'autoload': {'mappings': '<Plug>(caw:prefix)'}
\ }
NeoBundleLazy 'Shougo/vimfiler', {
\   'depends': 'Shougo/unite.vim',
\   'autoload': {
\     'commands': [
\        {'name' : 'VimFiler', 'complete': 'customlist,vimfiler#complete'},
\        'VimFilerExplorer'
\     ],
\     'explorer': 1,
\   }
\ }
NeoBundleLazy 'Shougo/vimshell', {
\   'depends': 'Shougo/vimproc',
\   'autoload': {
\       'commands': [
\           {'name': 'VimShell', 'complete': 'customlist,vimshell#complete'},
\           'VimShellPop', 'VimShellExecute',
\       ],
\       'mappings': ['<Plug>(vimshell_switch)'],
\ }}

NeoBundle 'h1mesuke/vim-alignta'
" NeoBundleLazy 'h1mesuke/vim-alignta', {
" \   'autoload': {'commands': 'Alignta'}
" \ }




" other
NeoBundleLazy 'LeafCage/yankround.vim', {
\   'autoload': {
\     'mappings': '<Plug>(yankround-'
\   }
\ }

NeoBundleLazy 'rhysd/clever-f.vim', {
\   'autoload': {
\     'mappings': ['f', 'F', 't', 'T']
\   }
\ }
NeoBundleLazy 'kana/vim-smartchr'
NeoBundleLazy 'kana/vim-smartinput', {
\   'autoload': {'insert': 1}
\ }
NeoBundleLazy 'kana/vim-smartword', {
\   'autoload': {
\     'mappings': '<Plug>(smartword-'
\   }
\ }

NeoBundleLazy 'kana/vim-niceblock'
NeoBundleLazy 'kana/vim-operator-user'
NeoBundleLazy 'kana/vim-operator-replace', {
\   'depends': 'kana/vim-operator-user',
\   'autoload': {
\     'mappings': '<Plug>(operator-replace)'
\   }
\ }
NeoBundle 'kana/vim-textobj-user'
NeoBundle 'kana/vim-textobj-line', {
\   'depends': 'kana/vim-textobj-user',
\ }
NeoBundle 'kana/vim-textobj-function', {
\   'depends': 'kana/vim-textobj-user',
\ }
NeoBundle 'rhysd/vim-textobj-word-column', {
\   'depends': 'kana/vim-textobj-user',
\ }


NeoBundle 'mattn/sonictemplate-vim'

NeoBundleLazy 'mattn/webapi-vim'
NeoBundleLazy 'mattn/gist-vim', {
\   'depends': 'mattn/webapi-vim',
\   'autoload': {'commands': ['Gist']}
\ }
" NeoBundleLazy 'teramako/instant-markdown-vim'
" NeoBundleLazy 'thinca/vim-localrc'
NeoBundleLazy 'thinca/vim-ref', {
\   'autoload': {
\     'commands': ['Ref'],
\     'mappings': ['K', '<Plug>(ref-keyword)'],
\   }
\ }
NeoBundleLazy 'kana/vim-submode'
NeoBundleLazy 'osyo-manga/vim-hideout', {
\   'autoload': {'commands': ['HideoutOn']}
\ }
NeoBundle 'tpope/vim-surround'
NeoBundle 'tpope/vim-abolish'
NeoBundleLazy 'tyru/autochmodx.vim', {
\   'autoload': {
\     'filetypes': ['sh', 'zsh', 'bash']
\   }
\ }
NeoBundleLazy 'tyru/eskk.vim', {
\   'autoload': {'mappings' : [['i', '<Plug>(eskk:toggle)']]}
\ }
NeoBundle 'tyru/vim-altercmd'
NeoBundleLazy 'tyru/restart.vim', {
\   'gui': 1,
\   'autoload': {'commands': ['Restart', 'RestartWithSession']}
\ }
NeoBundle 'ujihisa/shadow.vim'
NeoBundle 'vim-scripts/matchit.zip'
NeoBundle 'vim-scripts/sudo.vim'

NeoBundle 'osyo-manga/vim-pronamachang', {
\   'depends' : ['osyo-manga/vim-sound', 'Shougo/vimproc'],
\   'autoload': {
\     'commands': 'PronamachangSay',
\     'unite_sources': 'pronamachang'
\   }
\ }

NeoBundleLazy 'osyo-manga/vim-gift', {
\   'vim_version': '7.3.895'
\ }
NeoBundle 'osyo-manga/vim-automatic', {
\   'vim_version': '7.3.895',
\   'depends':     'osyo-manga/vim-gift',
\ }

" NeoBundleLazy 'supermomonga/shaberu.vim', {
" \   'depends': 'Shougo/vimproc'
" \ }
NeoBundleLazy 'rking/ag.vim', {
\   'autoload': {
\     'commands': [{'name': 'Ag', 'complete': 'file'}]
\ }}

NeoBundleLazy 'thinca/vim-scouter', {
\   'autoload': {'commands': ['Scouter']}
\ }
NeoBundleLazy 'thinca/vim-prettyprint', {
\   'autoload': {'commands': ['PP', 'PrettyPrint']}
\ }



NeoBundleLazy 'deris/vim-rengbang', {
\   'autoload': {'commands': ['RengBang', 'RengBangUsePrev']}
\ }
NeoBundleLazy 'basyura/J6uil.vim', {
\   'depends': ['mattn/webapi-vim', 'Shougo/vimproc'],
\   'autoload': {'commands': 'J6uil'}
\ }

NeoBundle 'Shougo/context_filetype.vim'
NeoBundle 'osyo-manga/vim-precious'

NeoBundleLazy 'AndrewRadev/switch.vim', {
\   'autoload': {'commands': 'Switch'}
\ }
NeoBundle 'mopp/autodirmake.vim'

filetype indent plugin on

NeoBundleCheck

" vim: foldmethod=marker
