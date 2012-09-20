"=============================================================================
" Name:   luciusmod 
" Author: Takeshi NISHIDA <ns9tks@DELETE-ME.gmail.com>
"
" This is derived from lucius.vim.
"
"=============================================================================
" Original Name: lucius.vim
" Original Maintainer:  Jonathan Filip <jfilip1024@gmail.com>
" Original Version: 2.6
"=============================================================================


set background=dark
hi clear
if exists("syntax_on")
    syntax reset
endif
let g:colors_name="luciusmod"


" Base color
" ----------
hi Normal           guifg=#e4e4e4           guibg=#242424
hi Normal           ctermfg=254             ctermbg=235


" Comment Group
" -------------
" any comment
hi Comment          guifg=#808080                                   gui=none
hi Comment          ctermfg=243                                     cterm=none


" Constant Group
" --------------
" any constant
hi Constant         guifg=#96ded1                                   gui=none
hi Constant         ctermfg=116                                      cterm=none
" strings
hi String           guifg=#87ceeb                                   gui=none
hi String           ctermfg=117                                     cterm=none
" character constant
hi Character        guifg=#87ceeb                                   gui=none
hi Character        ctermfg=117                                     cterm=none
" numbers decimal/hex
hi Number           guifg=#96ded1                                   gui=none
hi Number           ctermfg=116                                      cterm=none
" true, false
hi Boolean          guifg=#96ded1                                   gui=none
hi Boolean          ctermfg=116                                      cterm=none
" float
hi Float            guifg=#96ded1                                   gui=none
hi Float            ctermfg=116                                      cterm=none


" Identifier Group
" ----------------
" any variable name
hi Identifier       guifg=#f4a460                                   gui=none
hi Identifier       ctermfg=215                                     cterm=none
" function, method, class
hi Function         guifg=#f4a460                                   gui=none
hi Function         ctermfg=215                                     cterm=none


" Statement Group
" ---------------
" any statement
hi Statement        guifg=#c9dc89                                   gui=none
hi Statement        ctermfg=186                                     cterm=none
" if, then, else
hi Conditional      guifg=#c9dc89                                   gui=none
hi Conditional      ctermfg=186                                     cterm=none
" try, catch, throw, raise
hi Exception        guifg=#c9dc89                                   gui=none
hi Exception        ctermfg=186                                     cterm=none
" for, while, do
hi Repeat           guifg=#c9dc89                                   gui=none
hi Repeat           ctermfg=186                                     cterm=none
" case, default
hi Label            guifg=#c9dc89                                   gui=none
hi Label            ctermfg=186                                     cterm=none
" sizeof, +, *
hi Operator         guifg=#c9dc89                                   gui=none
hi Operator         ctermfg=186                                     cterm=none
" any other keyword
hi Keyword          guifg=#c9dc89                                   gui=none
hi Keyword          ctermfg=186                                     cterm=none


" Preprocessor Group
" ------------------
" generic preprocessor
hi PreProc          guifg=#efefaf                                   gui=none
hi PreProc          ctermfg=229                                     cterm=none
" #include
hi Include          guifg=#efefaf                                   gui=none
hi Include          ctermfg=229                                     cterm=none
" #define
hi Define           guifg=#efefaf                                   gui=none
hi Define           ctermfg=229                                     cterm=none
" same as define
hi Macro            guifg=#efefaf                                   gui=none
hi Macro            ctermfg=229                                     cterm=none
" #if, #else, #endif
hi PreCondit        guifg=#efefaf                                   gui=none
hi PreCondit        ctermfg=229                                     cterm=none


" Type Group
" ----------
" int, long, char
hi Type             guifg=#ace1af                                   gui=none
hi Type             ctermfg=151                                     cterm=none
" static, register, volative
hi StorageClass     guifg=#ace1af                                   gui=none
hi StorageClass     ctermfg=151                                     cterm=none
" struct, union, enum
hi Structure        guifg=#ace1af                                   gui=none
hi Structure        ctermfg=151                                     cterm=none
" typedef
hi Typedef          guifg=#ace1af                                   gui=none
hi Typedef          ctermfg=151                                     cterm=none


" Special Group
" -------------
" any special symbol
hi Special          guifg=#cfafcf                                   gui=none
hi Special          ctermfg=182                                     cterm=none
" special character in a constant
hi SpecialChar      guifg=#cfafcf                                   gui=none
hi SpecialChar      ctermfg=182                                     cterm=none
" things you can CTRL-]
hi Tag              guifg=#cfafcf                                   gui=none
hi Tag              ctermfg=182                                     cterm=none
" character that needs attention
hi Delimiter        guifg=#cfafcf                                   gui=none
hi Delimiter        ctermfg=182                                     cterm=none
" special things inside a comment
hi SpecialComment   guifg=#cfafcf                                   gui=none
hi SpecialComment   ctermfg=182                                     cterm=none
" debugging statements
hi Debug            guifg=#cfafcf           guibg=NONE              gui=none
hi Debug            ctermfg=182             ctermbg=NONE            cterm=none


" Underlined Group
" ----------------
" text that stands out, html links
hi Underlined       guifg=fg                                        gui=underline
hi Underlined       ctermfg=fg                                      cterm=underline


" Ignore Group
" ------------
" left blank, hidden
hi Ignore           guifg=bg
hi Ignore           ctermfg=bg


" Error Group
" -----------
" any erroneous construct
hi Error            guifg=#dd4040           guibg=NONE              gui=none
hi Error            ctermfg=160             ctermbg=NONE            cterm=none


" Todo Group
" ----------
" todo, fixme, note, xxx
hi Todo             guifg=#deee33           guibg=NONE              gui=underline
hi Todo             ctermfg=190             ctermbg=NONE            cterm=underline


" Spelling
" --------
" word not recognized
hi SpellBad         guisp=#ee0000                                   gui=undercurl
hi SpellBad                                 ctermbg=9               cterm=undercurl
" word not capitalized
hi SpellCap         guisp=#eeee00                                   gui=undercurl
hi SpellCap                                 ctermbg=12              cterm=undercurl
" rare word
hi SpellRare        guisp=#ffa500                                   gui=undercurl
hi SpellRare                                ctermbg=13              cterm=undercurl
" wrong spelling for selected region
hi SpellLocal       guisp=#ffa500                                   gui=undercurl
hi SpellLocal                               ctermbg=14              cterm=undercurl


" Cursor
" ------
" character under the cursor
" [removed]
" like cursor, but used when in IME mode
" [modified]
hi CursorIM                                 guibg=#ff0000
" cursor column
hi CursorColumn                             guibg=#2d2d3d
hi CursorColumn     cterm=NONE              ctermbg=236
" cursor line/row
hi CursorLine                               guibg=#2d2d3d
hi CursorLine       cterm=NONE              ctermbg=236             


" Misc
" ----
" directory names and other special names in listings
hi Directory        guifg=#c0e0b0                                   gui=none
hi Directory        ctermfg=151                                     cterm=none
" error messages on the command line
hi ErrorMsg         guifg=#ee0000           guibg=NONE              gui=none
hi ErrorMsg         ctermfg=196             ctermbg=NONE            cterm=none
" column separating vertically split windows
hi VertSplit        guifg=#777777           guibg=#444444           gui=none
hi VertSplit        ctermfg=244             ctermbg=238             cterm=none
" columns where signs are displayed (used in IDEs)
hi SignColumn       guifg=#9fafaf           guibg=#181818           gui=none
hi SignColumn       ctermfg=145             ctermbg=233             cterm=none
" line numbers
hi LineNr           guifg=#8090a0           guibg=#343434
hi LineNr           ctermfg=103             ctermbg=235
" match parenthesis, brackets
" [modified]
hi MatchParen       guifg=#00ff00           guibg=NONE              gui=none,underline
hi MatchParen       ctermfg=46              ctermbg=NONE            cterm=none,underline
" text showing what mode you are in
hi MoreMsg          guifg=#2e8b57                                   gui=none
hi MoreMsg          ctermfg=29                                      cterm=none
" the '~' and '@' and showbreak, '>' double wide char doesn't fit on line
hi ModeMsg          guifg=#90ee90           guibg=NONE              gui=none
hi ModeMsg          ctermfg=120             ctermbg=NONE            cterm=none
" the 'more' prompt when output takes more than one line
" [modified]
hi NonText          guifg=#006666                                   gui=none
hi NonText          ctermfg=29                                      cterm=none
" the hit-enter prompt (show more output) and yes/no questions
" [modified]
hi Question         guifg=#87ffaf                                   gui=none
hi Question         ctermfg=121                                     cterm=none
" meta and special keys used with map, unprintable characters
hi SpecialKey       guifg=#505050
hi SpecialKey       ctermfg=238
" titles for output from :set all, :autocmd, etc
hi Title            guifg=#42adde                                   gui=none
hi Title            ctermfg=38                                      cterm=none
"hi Title            guifg=#5ec8e5                                   gui=none
" warning messages
hi WarningMsg       guifg=#e5786d                                   gui=none
hi WarningMsg       ctermfg=173                                     cterm=none
" current match in the wildmenu completion
hi WildMenu         guifg=#000000           guibg=#cae682
hi WildMenu         ctermfg=16              ctermbg=186             


" Diff
" ----
" added line
hi DiffAdd          guifg=fg                guibg=#705070
hi DiffAdd          ctermfg=fg              ctermbg=59
" changed line
hi DiffChange       guifg=fg                guibg=#007000
hi DiffChange       ctermfg=fg              ctermbg=22
" deleted line
hi DiffDelete       guifg=fg                guibg=#a08040
hi DiffDelete       ctermfg=fg              ctermbg=136
" changed text within line
hi DiffText         guifg=fg                guibg=#a00000
hi DiffText         ctermfg=fg              ctermbg=160


" Folds
" -----
" line used for closed folds
" [modified]
hi Folded           guifg=#c0c0c0           guibg=#005f5f           gui=none
hi Folded           ctermfg=249             ctermbg=23              cterm=none
" column on side used to indicated open and closed folds
" [modified]
hi FoldColumn       guifg=#c0c0c0           guibg=#005f5f           gui=none
hi FoldColumn       ctermfg=249             ctermbg=23              cterm=none


" Search
" ------
" highlight incremental search text; also highlight text replaced with :s///c
hi IncSearch        guifg=#66ffff                                   gui=reverse
hi IncSearch        ctermfg=87                                      cterm=reverse
" hlsearch (last search pattern), also used for quickfix
hi Search                                    guibg=#ffaa33          gui=none
hi Search                                    ctermbg=214            cterm=none


" Popup Menu
" ----------
" normal item in popup
hi Pmenu            guifg=#f6f3e8           guibg=#444444           gui=none
hi Pmenu            ctermfg=254             ctermbg=238             cterm=none
" selected item in popup
hi PmenuSel         guifg=#000000           guibg=#cae682           gui=none
hi PmenuSel         ctermfg=16              ctermbg=186             cterm=none
" scrollbar in popup
hi PMenuSbar                                guibg=#608090           gui=none
hi PMenuSbar                                ctermbg=66              cterm=none
" thumb of the scrollbar in the popup
hi PMenuThumb                               guibg=#aaaaaa           gui=none
hi PMenuThumb                               ctermbg=247             cterm=none


" Status Line
" -----------
" status line for current window
" [modified]
hi StatusLine       guifg=#e0e0e0           guibg=#444444           gui=none,underline
hi StatusLine       ctermfg=254             ctermbg=238             cterm=none,underline
" status line for non-current windows
hi StatusLineNC     guifg=#777777           guibg=#444444           gui=none
hi StatusLineNC     ctermfg=244             ctermbg=238             cterm=none


" Tab Lines
" ---------
" tab pages line, not active tab page label
" [modified]
hi TabLine          guifg=#777777           guibg=#444444           gui=none,underline
hi TabLine          ctermfg=244             ctermbg=238             cterm=none,underline
" tab pages line, where there are no labels
" [modified]
hi TabLineFill      guifg=#777777           guibg=#444444           gui=none,underline
hi TabLineFill      ctermfg=244             ctermbg=238             cterm=none,underline
" tab pages line, active tab page label
" [modified]
hi TabLineSel       guifg=#efefef           guibg=#1c1c1b           gui=none,bold
hi TabLineSel       ctermfg=254             ctermbg=233             cterm=none,bold


" Visual
" ------
" visual mode selection
hi Visual           guifg=NONE              guibg=#334455
hi Visual           ctermfg=NONE            ctermbg=60
" visual mode selection when vim is 'not owning the selection' (x11 only)
hi VisualNOS        guifg=fg                                        gui=underline
hi VisualNOS        ctermfg=fg                                      cterm=underline


" syntax/diff
" ------
" [added]
hi diffFile         guifg=#00afff           gui=bold,underline
hi diffFile         ctermfg=39              cterm=bold,underline
" [added]
hi diffLine         guifg=#00afff           gui=underline
hi diffLine         ctermfg=39              cterm=underline

