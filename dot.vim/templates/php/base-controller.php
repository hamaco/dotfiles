<?php

class {{_expr_:substitute(substitute(substitute(expand('%:p'), '.*app/\(.\)', '\u\1', 'g'), '/controllers/', '_Controllers_', 'g'), '\.php$', '', 'g')}} extends {{_expr_:substitute(expand('%:p'), '^.*app/\(\w*\)/.*$', '\u\1', 'g')}}_Controllers_Base
{
  public function {{_cursor_}}()
  {
  }
}
