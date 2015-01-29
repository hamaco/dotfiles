if neobundle#tap('lexima.vim')
  function! neobundle#tapped.hooks.on_post_source(bundle)
    " Markdown list and todolist
    call lexima#add_rule({'at': '^\s*\%#', 'char': '-', 'input': '-<Space>',         'filetype': 'markdown'})
    call lexima#add_rule({'at': '- \%#',   'char': '[', 'input': '[<Space>]<Space>', 'filetype': 'markdown'})

    " Perl Template-Toolkit
    call lexima#add_rule({'at': '\[\%#\]',     'char': '<Space>', 'input_after': '<Space>'})
    call lexima#add_rule({'at': '\[\%#\]',     'char': '%',       'input': '%<Space>', 'input_after': '<Space>%'})
    call lexima#add_rule({'at': '\[% \%# %\]', 'char': '<BS>',    'input': '<BS><BS>', 'delete': 2})

    " PHP Twig
    call lexima#add_rule({'at': '{\%#}',     'char': '<Space>', 'input_after': '<Space>'})
    call lexima#add_rule({'at': '{\%#}',     'char': '%',       'input': '%<Space><Space>%<Left><Left>'})
    call lexima#add_rule({'at': '{% \%# %}', 'char': '<BS>',    'input': '<BS><BS>', 'delete': 2})
    call lexima#add_rule({'at': '{\%#}',     'char': '{',       'input': '{<Space>', 'input_after': '<Space>}'})
    call lexima#add_rule({'at': '{{ \%# }}', 'char': '<BS>',    'input': '<BS><BS>', 'delete': 2})

    " PHP Blade(Laravel)
    call lexima#add_rule({'at': '{{ \%# }}', 'char': '{', 'input': '<Left>{<Right><Right>}<Left><Left>'})

    " PHP
    " call lexima#add_rule({'at': '<\%#',     'char': '?',    'input': '?', 'input_after': '<Space>?>'})
    " call lexima#add_rule({'at': '<?\%# ?>', 'char': '<BS>', 'input': '<BS>', 'delete': 3})
  endfunction
endif
