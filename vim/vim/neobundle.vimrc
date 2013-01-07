set nocompatible
filetype off

if has("vim_starting")
	if filereadable(expand("~/.bundle/neobundle.vim/autoload/neobundle.vim"))
		set runtimepath+=$HOME/.bundle/neobundle.vim
	else
		set runtimepath+=$HOME/.vim/bundle/neobundle.vim
	endif

	call neobundle#rc(expand("~/.bundle"))
endif

" tmp
NeoBundle "drikin/minimap-vim"

" base
NeoBundle "vim-jp/vimdoc-ja"
NeoBundle "Shougo/neobundle.vim"
NeoBundle "Shougo/vimproc", { "build": {
\     "mac" : "make -f make_mac.mak",
\     "unix": "make -f make_unix.mak",
\   },
\ }

" blog
NeoBundleLazy "tangledhelix/vim-octopress"
NeoBundleLazy "glidenote/octoeditor.vim", {
\   'depends': 'tangledhelix/vim-octopress',
\   'autoload': { 'commands': [ "OctopressList", "OctopressNew" ] }
\ }

" quickrun
NeoBundle "thinca/vim-quickrun"
NeoBundle "hamaco/quickrun-hook-u-nya-"
NeoBundle "osyo-manga/shabadou.vim"
NeoBundle "osyo-manga/unite-quickfix"
NeoBundle "karakaram/vim-quickrun-phpunit"

NeoBundle "osyo-manga/vim-watchdogs"
NeoBundle "jceb/vim-hier"

" neocomplcache
NeoBundle "Shougo/neocomplcache"
NeoBundle "Shougo/neosnippet"

" unite
NeoBundle "Shougo/unite.vim"
NeoBundle "h1mesuke/unite-outline"

" PHP
NeoBundle "vim-scripts/php_localvarcheck.vim"
NeoBundle "StanAngeloff/php.vim"

" Colorscheme
NeoBundleLazy "git://gist.github.com/187578.git", {"directory" : "h2u_white"}
NeoBundleLazy "nanotech/jellybeans.vim"

" other
NeoBundle "thinca/vim-ref"
NeoBundle "h1mesuke/vim-alignta"
NeoBundle "kana/vim-smartchr"
NeoBundle "kana/vim-smartinput"
NeoBundle "kana/vim-smartword"
NeoBundle "kana/vim-textobj-user"
NeoBundle "mattn/sonictemplate-vim"
NeoBundle "tpope/vim-abolish"
NeoBundle "tpope/vim-fugitive"
NeoBundle "tyru/autochmodx.vim"
NeoBundle "tyru/caw.vim"
NeoBundle "tyru/current-func-info.vim"
NeoBundle "tyru/eskk.vim"
NeoBundle "ujihisa/shadow.vim"
NeoBundle "vim-scripts/matchit.zip"
NeoBundle "vim-scripts/sudo.vim"

filetype indent plugin on
