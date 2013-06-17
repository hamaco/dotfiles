<?php

Sabel::fileUsing(FIXTURE_DIR . DS . 'Base.php');

class Fixture_{{_name_}} extends Fixture_Base
{
    protected $csv_name = '{{_expr_:substitute(substitute(expand('%:t'), '\(.*\)\.php', '\l\1', 'g'), '\u', '_\l\0', 'g')}}.csv';
}
