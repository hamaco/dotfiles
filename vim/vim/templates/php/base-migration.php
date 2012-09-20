<?php

$create->column('id')->type(_INT)->primary(true)->increment(true);
{{_cursor_}}

$create->column('created_at')->type(_DATETIME);
$create->column('updated_at')->type(_DATETIME);

$create->options('engine', 'InnoDB');
