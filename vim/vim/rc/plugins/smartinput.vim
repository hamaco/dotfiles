if neobundle#tap('vim-smartinput')
  function! neobundle#tapped.hooks.on_post_source(bundle)
    call smartinput#map_to_trigger('i', '<Space>', '<Space>', '<Space>')
    call smartinput#map_to_trigger('i', '<', '<', '<')
    call smartinput#map_to_trigger('i', '>', '>', '>')
    call smartinput#map_to_trigger('i', '%', '%', '%')
    call smartinput#map_to_trigger('i', '?', '?', '?')
    call smartinput#map_to_trigger('i', '-', '-', '-')
    call smartinput#map_to_trigger('i', '<Plug>(vimrc_cr)', '<Enter>', '<Enter>')

    call smartinput#define_rule({'at': '^\s*\%#', 'char': '-', 'input': '-<Space>', 'filetype': ['markdown']})
    call smartinput#define_rule({'at': '- \%#', 'char': '[', 'input': '[<Space>]<Space>', 'filetype': ['markdown']})

    call smartinput#define_rule({
    \    'at'       : 'eval\s*\%#',
    \    'char'     : '{',
    \    'input'    : '{};<Left><Left>',
    \    'filetype' : ['perl'],
    \ })

    " call smartinput#define_rule({'at': '\%#', 'char': '<', 'input': '<><Left>'})
    " call smartinput#define_rule({'at': '\%#\_s*>', 'char': '>', 'input': '<C-r>=smartinput#_leave_block(''>'')<Enter><Right>'})
    " call smartinput#define_rule({'at': '<\%#>', 'char': '<BS>', 'input': '<BS><Del>'})
    " call smartinput#define_rule({'at': '<\%#>', 'char': '<', 'input': '<<Del>'})
    " call smartinput#define_rule({'at': '<<\%#', 'char': '<', 'input': '<'})

    " perl Template-Toolkit
    call smartinput#define_rule({'at': '\[\%#\]', 'char': '<Space>', 'input': '<Space><Space><Left>'})
    call smartinput#define_rule({'at': '\[\%#\]', 'char': '%', 'input': '%<Space><Space>%<Left><Left>'})
    call smartinput#define_rule({'at': '\[% \%# %\]', 'char': '<BS>', 'input': '<BS><BS><Del><Del>'})

    " PHP Twig
    call smartinput#define_rule({'at': '{\%#}', 'char': '<Space>', 'input': '<Space><Space><Left>'})
    call smartinput#define_rule({'at': '{\%#}', 'char': '%', 'input': '%<Space><Space>%<Left><Left>'})
    call smartinput#define_rule({'at': '{% \%# %}', 'char': '<BS>', 'input': '<BS><BS><Del><Del>'})
    call smartinput#define_rule({'at': '{\%#}', 'char': '{', 'input': '{<Space><Space>}<Left><Left>'})
    call smartinput#define_rule({'at': '{{ \%# }}', 'char': '<BS>', 'input': '<BS><BS><Del><Del>'})

    " PHP Blade(Laravel)
    call smartinput#define_rule({'at': '{{ \%# }}', 'char': '{', 'input': '<Left>{<Right><Right>}<Left><Left>'})

    " PHP
    call smartinput#define_rule({'at': '<\%#>', 'char': '?', 'input': '?<Space>?<Left><Left>'})
    call smartinput#define_rule({'at': '<?\%# ?>', 'char': '<BS>', 'input': '<BS><Del><Del>'})
  endfunction
endif
