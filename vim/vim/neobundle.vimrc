scriptencoding utf-8
set nocompatible

if has('vim_starting')
  set runtimepath+=$HOME/.bundle/neobundle.vim
endif
call neobundle#begin(expand('~/.bundle'))

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
NeoBundleLazy 'mattn/webapi-vim'

NeoBundleLazy 'tyru/current-func-info.vim', {
\   'autoload': {'functions': 'cfi#format'}
\ }

NeoBundleLazy 'osyo-manga/vim-anzu', {
\   'autoload': {
\     'functions': 'anzu#search_status',
\     'mappings': '<Plug>(anzu-'
\   }
\ }
NeoBundleLazy 'haya14busa/incsearch.vim', {
\   'depends': 'osyo-manga/vim-anzu',
\   'autoload': {
\     'mappings': '<Plug>(incsearch-'
\   }
\ }

NeoBundle 'itchyny/lightline.vim', {
\   'depends': ['kana/vim-textobj-user', 'osyo-manga/vim-anzu']
\ }

NeoBundle 'Yggdroot/indentLine'
" TODO: InsertLeaveで起動するな
" NeoBundleLazy '907th/vim-auto-save', {
" \   'autoload': {
" \     'insert': 1,
" \   }
" \ }
" }}}

" textobj {{{
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
NeoBundle 'tkhren/vim-textobj-numeral', {
\   'depends': 'kana/vim-textobj-user',
\ }
NeoBundleLazy 'osyo-manga/vim-textobj-multiblock', {
\   'depends': 'kana/vim-textobj-user',
\   'autoload': {
\     'mappings': '<Plug>(textobj-multiblock-'
\   }
\ }
" }}}

" operator {{{
NeoBundleLazy 'kana/vim-operator-user'
NeoBundleLazy 'kana/vim-operator-replace', {
\   'depends': 'kana/vim-operator-user',
\   'autoload': {
\     'mappings': '<Plug>(operator-replace)'
\   }
\ }
NeoBundleLazy 'osyo-manga/vim-operator-search', {
\   'depends': ['kana/vim-operator-user', 'kana/vim-textobj-function'],
\   'autoload': {
\     'mappings': '<Plug>(operator-search)'
\   }
\ }
NeoBundleLazy 'rhysd/vim-operator-surround', {
\   'depends': ['kana/vim-operator-user', 'osyo-manga/vim-textobj-multiblock'],
\   'autoload': {
\     'mappings': '<Plug>(operator-surround-'
\   }
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
\   'autoload': {'on_source': 'unite.vim'}, 
\ }
NeoBundleLazy 'ujihisa/unite-colorscheme', {
\   'depends': 'Shougo/unite.vim',
\   'autoload': {'on_source': 'unite.vim'}, 
\ }
NeoBundleLazy 'Shougo/neomru.vim', {
\   'depends': 'Shougo/unite.vim',
\   'autoload': {'on_source': 'unite.vim'}, 
\ }
NeoBundleLazy 'sorah/unite-ghq', {
\   'depends': 'Shougo/unite.vim',
\   'autoload': {'on_source': 'unite.vim'}, 
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

NeoBundleLazy 'Shougo/neosnippet-snippets'
NeoBundleLazy 'Shougo/neosnippet', {
\   'vim_version': '7.3.885',
\   'depends': ['Shougo/neocomplete', 'Shougo/neosnippet-snippets'],
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
" Mac で gitgutter 使うと gvim の表示がバグるのでとりあえず OFF
NeoBundleLazy 'airblade/vim-gitgutter', {
\   'autoload': {
\     'insert': 0
\   }
\ }
" NeoBundleLazy 'mattn/gist-vim', {
" \   'depends': 'mattn/webapi-vim',
" \   'autoload': {'commands': ['Gist']}
" \ }
NeoBundle 'rhysd/committia.vim'
NeoBundleLazy 'cohama/agit.vim', {
\   'autoload': {
\       'commands': ['Agit'],
\   }
\ }
NeoBundleLazy 'lambdalisue/vim-gista', {
\   'autoload': {
\       'commands': ['Gista'],
\       'mappings': '<Plug>(gista-',
\       'unite_sources': 'gista',
\   }
\ }
" }}}

" ctags {{{
NeoBundleLazy 'soramugi/auto-ctags.vim', {
\   'autoload': {
\     'insert': 1
\   }
\ }
NeoBundleLazy 'majutsushi/tagbar'
" }}}

" Languages: {{{
" markdown {{{
NeoBundle 'plasticboy/vim-markdown'
" NeoBundleLazy 'rcmdnk/vim-markdown', {
" \   'rev': 'mod',
" \   'autoload': {'filetypes': 'markdown'}
" \ }
" }}}
" golang {{{
NeoBundleLazy 'vim-jp/go-vim', {
\   'autoload': {'filetypes': 'go'}
\ }
NeoBundleLazy 'vim-jp/vim-go-extra', {
\   'autoload': {'filetypes': 'go'}
\ }
" }}}
" ruby {{{
NeoBundle 'ngmy/vim-rubocop'
NeoBundleLazy 'vim-ruby/vim-ruby', {
\   'autoload': {'filetypes': 'ruby'}
\ }
" NeoBundle 'pearofducks/ansible-vim'
NeoBundle 'chase/vim-ansible-yaml'
" }}}
" php {{{
" NeoBundleLazy 'vim-scripts/php_localvarcheck.vim', {
" \   'autoload': {'filetypes': 'php'}
" \ }
NeoBundleLazy 'StanAngeloff/php.vim', {
\   'autoload': {'filetypes': 'php'}
\ }
" NeoBundleLazy 'm2mdas/phpcomplete-extended', {
" \   'depends':  ['Shougo/vimproc', 'Shougo/unite.vim'],
" \   'autoload': {'filetypes': 'php'}
" \ }

NeoBundleLazy '2072/PHP-Indenting-for-VIm', {
\   'autoload': {'filetypes': 'php'}
\ }
NeoBundle 'evidens/vim-twig'
" NeoBundleLazy 'evidens/vim-twig', {
" \   'autoload': {'filename_patterns': '\.twig$'}
" \ }

" NeoBundle 'arnaud-lb/vim-php-namespace'

NeoBundleLazy 'vim-scripts/tagbar-phpctags', {
\   'depends': 'majutsushi/tagbar',
\   'autoload': {'filetypes': 'php'},
\   'build': {
\      'mac'  : 'chmod +x bin/phpctags',
\      'unix' : 'chmod +x bin/phpctags',
\    },
\ }

NeoBundleLazy 'karakaram/vim-quickrun-phpunit', {
\   'depends': 'thinca/vim-quickrun'
\ }
" }}}
" perl {{{ 
NeoBundleLazy 'vim-perl/vim-perl', {
\   'autoload': {'filetypes': 'perl'},
\ }
" }}}
" html {{{
NeoBundleLazy 'vim-scripts/indenthtml.vim', {
\   'autoload': {'filetypes': 'html'}
\ }
NeoBundleLazy 'mattn/emmet-vim', {
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

NeoBundleLazy 'elzr/vim-json', {
\   'autoload': {'filetypes': 'json'}
\ }
" }}}
" }}}

" Syntax: {{{
NeoBundleLazy 'glidenote/roadworker.vim', {'autoload': {'filename_patterns': 'Routefile'}}
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
\   'autoload': {'commands': ['TweetVimSay', 'TweetVimHomeTimeline']}
\ }
NeoBundleLazy 'rhysd/tmpwin.vim', {
\   'autoload': {'functions': 'tmpwin#toggle'}
\ }
" }}}

" colorscheme {{{
NeoBundle '29decibel/codeschool-vim-theme'
" NeoBundle 'aereal/vim-magica-colors'
NeoBundle 'cocopon/iceberg.vim'
NeoBundle 'itchyny/landscape.vim'
NeoBundle 'mopp/mopkai.vim'
NeoBundle 'nanotech/jellybeans.vim'
NeoBundle 'sjl/badwolf'
NeoBundle 'svjunic/RadicalGoodSpeed'
NeoBundle 'vim-scripts/moria'
NeoBundle 'vim-scripts/newspaper.vim'
NeoBundle 'w0ng/vim-hybrid'
NeoBundle 'junegunn/seoul256.vim'
NeoBundle 'morhetz/gruvbox'
NeoBundle 'gist:187578.git', {'directory' : 'h2u_white'}
NeoBundle 'ajh17/Spacegray.vim'
NeoBundle 'jscappini/material.vim'

command! -nargs=0 NeoBundleSourceColorSchemes
\   :NeoBundleSource vim-magica-colors iceberg.vim landscape.vim mopkai.vi badwolf RedicalGoodSpeed moria newspaper.vim vim-hybrid h2u_white
" }}}

" game {{{
NeoBundleLazy 'thinca/vim-threes'
NeoBundleLazy 'katono/rogue.vim', {
\   'autoload': {'commands': 'Rogue'}
\ }
" }}}


NeoBundleLazy 'kana/vim-niceblock', {
\   'autoload': {
\     'mappings': '<Plug>'
\   }
\ }


NeoBundle 'tyru/caw.vim'
" NeoBundleLazy 'tyru/caw.vim', {
" \   'autoload': {'mappings': '<Plug>'}
" \ }
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
\       'mappings': ['<Plug>'],
\ }}

" NeoBundle 'h1mesuke/vim-alignta'
" NeoBundleLazy 'h1mesuke/vim-alignta', {
" \   'autoload': {'commands': 'Alignta'}
" \ }
NeoBundleLazy 'junegunn/vim-easy-align', {
\   'autoload': {'mappings': '<Plug>(EasyAlign)'}
\ }




" other
NeoBundle 'LeafCage/yankround.vim'
" NeoBundleLazy 'LeafCage/yankround.vim', {
" \   'autoload': {
" \     'mappings': '<Plug>(yankround-'
" \   }
" \ }

NeoBundleLazy 'rhysd/clever-f.vim', {
\   'autoload': {
\     'mappings': ['f', 'F', 't', 'T']
\   }
\ }
NeoBundleLazy 'kana/vim-smartchr'
NeoBundleLazy 'kana/vim-smartinput'
NeoBundleLazy 'cohama/vim-smartinput-endwise', {
\   'depends': 'kana/vim-smartinput',
\   'autoload': {'insert': 1}
\ }
" TODO: NeoBundle で読み込むとエラーがでるので一時的にコメントアウト...
" NeoBundleLazy 'cohama/lexima.vim', {
" \   'autoload': {'insert': 1}
" \ }
NeoBundleLazy 'kana/vim-smartword', {
\   'autoload': {
\     'mappings': '<Plug>(smartword-'
\   }
\ }



NeoBundle 'mattn/sonictemplate-vim'

" NeoBundleLazy 'teramako/instant-markdown-vim'
NeoBundle 'thinca/vim-localrc'
NeoBundleLazy 'thinca/vim-ref', {
\   'autoload': {
\     'commands': ['Ref'],
\     'mappings': ['K', '<Plug>(ref-keyword)'],
\   }
\ }
NeoBundle 'kana/vim-submode'
NeoBundleLazy 'osyo-manga/vim-hideout', {
\   'autoload': {'commands': ['HideoutOn']}
\ }
" NeoBundle 'tpope/vim-surround'

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
NeoBundle 'tmhedberg/matchit'
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

NeoBundle 'koron/codic-vim'
NeoBundle 'rhysd/unite-codic.vim', {
\   'depends': ['Shougo/unite.vim', 'koron/codic-vim'],
\ }

NeoBundleLazy 'itchyny/calendar.vim', {
\   'autoload': {'commands': 'Calendar'}
\ }

NeoBundle 't9md/vim-textmanip'

NeoBundle 'editorconfig/editorconfig-vim'


NeoBundle 'Yggdroot/indentLine'

" NeoBundle 'vim-scripts/diffchar.vim'
NeoBundle 'LeafCage/foldCC.vim'

NeoBundleCheck
call neobundle#end()

filetype indent plugin on

" vim: foldmethod=marker
