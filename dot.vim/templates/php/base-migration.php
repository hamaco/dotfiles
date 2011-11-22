<?php

$create->column('id')->type(_INT)->primary(true);
{{_cursor_}}

$create->column('created_at')->type(_INT);
$create->column('updated_at')->type(_INT);

$create->options('engine', 'InnoDB');
