" ap_dark8.vim for Terminal.app (ANSI COLOR)
" http://apribase.net/


" based on ir_black color scheme
" More at: http://blog.infinitered.com/entries/show/8

" based on inkpot16 for mlterm
" More at: http://d.hatena.ne.jp/y_yanbe/20070904/1188911217


" Visor
" http://visor.binaryage.com/

" TerminalColoreopard
" http://niw.at/articles/2007/11/02/TerminalColoreopard/ja


" ********************************************************************************
" The following are the preferred 16 colors for your terminal
"     !!! I don't use bold text (bright colors for bold)
"     !!! I use 8 colors
"
"           Colors                            Bright Colors for Bold
" Black     black       # ( 33,  33,  33)     darkgray     # (124, 124, 124)
" Red       darkred     # (255, 108,  96)     lightred     # (255, 182, 176)
" Green     darkgreen   # ( 40,  90,  90)     lightgreen   # (105, 178, 155)
" Yellow    brown       # (205, 133,   0)     lightyellow  # (255, 255, 204)
" Blue      darkblue    # (101, 137, 254)     lightblue    # (181, 220, 255)
" Magenta   darkmagenta # (255, 115, 253)     lightmagenta # (255, 146, 255)
" Cyan      darkcyan    # (208, 146, 255)     lightcyan    # (223, 223, 254)
" White     gray        # (207, 191, 173)     white        # (238, 238, 238)

" vim color test
" :so $VIMRUNTIME/syntax/colortest.vim
" :so /usr/share/vim/vim72/syntax/colortest.vim

" ********************************************************************************

set background=dark
hi clear

if exists("syntax_on")
  syntax reset
endif

let colors_name = "ap_dark8"


"hi Example         ctermfg=NONE        ctermbg=NONE        cterm=NONE

" General colors
hi Normal           ctermfg=NONE        ctermbg=NONE        cterm=NONE
hi NonText          ctermfg=black       ctermbg=NONE        cterm=NONE

hi Cursor           ctermfg=black       ctermbg=gray        cterm=reverse
hi LineNr           ctermfg=darkblue    ctermbg=black       cterm=NONE

hi VertSplit        ctermfg=black       ctermbg=black       cterm=NONE
hi StatusLine       ctermfg=black       ctermbg=darkcyan    cterm=NONE
hi StatusLineNC     ctermfg=gray        ctermbg=black       cterm=NONE  

hi Folded           ctermfg=NONE        ctermbg=NONE        cterm=NONE
hi Title            ctermfg=NONE        ctermbg=NONE        cterm=NONE
hi Visual           ctermfg=NONE        ctermbg=black       cterm=NONE

hi SpecialKey       ctermfg=NONE        ctermbg=NONE        cterm=NONE

hi WildMenu         ctermfg=black       ctermbg=brown       cterm=NONE
hi PmenuSbar        ctermfg=black       ctermbg=gray        cterm=NONE
"hi Ignore          ctermfg=NONE        ctermbg=NONE        cterm=NONE

hi Error            ctermfg=black       ctermbg=darkred     cterm=NONE
hi ErrorMsg         ctermfg=black       ctermbg=darkred     cterm=NONE
hi WarningMsg       ctermfg=black       ctermbg=darkred     cterm=NONE

" Message displayed in lower left, such as --INSERT--
hi ModeMsg          ctermfg=black       ctermbg=darkcyan    cterm=NONE

if version >= 700 " Vim 7.x specific colors
  hi CursorLine     ctermfg=NONE        ctermbg=NONE        cterm=BOLD
  hi CursorColumn   ctermfg=NONE        ctermbg=NONE        cterm=BOLD
  hi MatchParen     ctermfg=gray        ctermbg=black       cterm=NONE
  hi Pmenu          ctermfg=NONE        ctermbg=black       cterm=NONE
  hi PmenuSel       ctermfg=NONE        ctermbg=darkgreen   cterm=NONE
  hi Search         ctermfg=NONE        ctermbg=NONE        cterm=underline
endif

" Syntax highlighting
hi Comment          ctermfg=brown       ctermbg=NONE        cterm=NONE
hi String           ctermfg=darkgreen   ctermbg=NONE        cterm=NONE
hi Number           ctermfg=darkmagenta ctermbg=NONE        cterm=NONE

hi Keyword          ctermfg=darkblue    ctermbg=NONE        cterm=NONE
hi PreProc          ctermfg=darkblue    ctermbg=NONE        cterm=NONE
hi Conditional      ctermfg=darkblue    ctermbg=NONE        cterm=NONE  " if else end

hi Todo             ctermfg=darkred     ctermbg=NONE        cterm=NONE
hi Constant         ctermfg=darkcyan    ctermbg=NONE        cterm=NONE

hi Identifier       ctermfg=darkcyan    ctermbg=NONE        cterm=NONE
hi Function         ctermfg=brown       ctermbg=NONE        cterm=NONE
hi Type             ctermfg=brown       ctermbg=NONE        cterm=NONE
hi Statement        ctermfg=darkblue    ctermbg=NONE        cterm=NONE

hi Special          ctermfg=gray        ctermbg=NONE        cterm=NONE
hi Delimiter        ctermfg=darkcyan    ctermbg=NONE        cterm=NONE
hi Operator         ctermfg=gray        ctermbg=NONE        cterm=NONE

hi link Character       Constant
hi link Boolean         Constant
hi link Float           Number
hi link Repeat          Statement
hi link Label           Statement
hi link Exception       Statement
hi link Include         PreProc
hi link Define          PreProc
hi link Macro           PreProc
hi link PreCondit       PreProc
hi link StorageClass    Type
hi link Structure       Type
hi link Typedef         Type
hi link Tag             Special
hi link SpecialChar     Special
hi link SpecialComment  Special
hi link Debug           Special


" Special for Ruby
hi rubyRegexp                  ctermfg=brown          ctermbg=NONE      cterm=NONE
hi rubyRegexpDelimiter         ctermfg=brown          ctermbg=NONE      cterm=NONE
hi rubyEscape                  ctermfg=darkcyan       ctermbg=NONE      cterm=NONE
hi rubyInterpolationDelimiter  ctermfg=darkblue       ctermbg=NONE      cterm=NONE
hi rubyControl                 ctermfg=darkblue       ctermbg=NONE      cterm=NONE  "and break, etc
"hi rubyGlobalVariable         ctermfg=darkblue       ctermbg=NONE      cterm=NONE  "yield
hi rubyStringDelimiter         ctermfg=darkgreen      ctermbg=NONE      cterm=NONE
"rubyInclude
"rubySharpBang
"rubyAccess
"rubyPredefinedVariable
"rubyBoolean
"rubyClassVariable
"rubyBeginEnd
"rubyRepeatModifier
"hi link rubyArrayDelimiter    Special  " [ , , ]
"rubyCurlyBlock  { , , }

hi link rubyClass             Keyword 
hi link rubyModule            Keyword 
hi link rubyKeyword           Keyword 
hi link rubyOperator          Operator
hi link rubyIdentifier        Identifier
hi link rubyInstanceVariable  Identifier
hi link rubyGlobalVariable    Identifier
hi link rubyClassVariable     Identifier
hi link rubyConstant          Type  


" Special for Java
" hi link javaClassDecl    Type
hi link javaScopeDecl         Identifier 
hi link javaCommentTitle      javaDocSeeTag 
hi link javaDocTags           javaDocSeeTag 
hi link javaDocParam          javaDocSeeTag 
hi link javaDocSeeTagParam    javaDocSeeTag 

hi javaDocSeeTag              ctermfg=black       ctermbg=NONE        cterm=NONE
hi javaDocSeeTag              ctermfg=black       ctermbg=NONE        cterm=NONE
"hi javaClassDecl             ctermfg=gray        ctermbg=NONE        cterm=NONE


" Special for XML
hi link xmlTag          Keyword 
hi link xmlTagName      Conditional 
hi link xmlEndTag       Identifier 


" Special for HTML
hi link htmlTag         Keyword 
hi link htmlTagName     Conditional 
hi link htmlEndTag      Identifier 


" Special for Javascript
hi link javaScriptNumber      Number 


" Special for Python
"hi  link pythonEscape         Keyword      


" Special for CSharp
hi link csXmlTag             Keyword      


" Special for PHP
