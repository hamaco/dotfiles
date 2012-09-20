<?php

Sabel::fileUsing(FIXTURE_DIR . DS . 'Base.php');

class Fixture_{{_name_}} extends Fixture_Base
{
  public function upFixture()
  {
    $reader = new Csv_Reader(RUN_BASE . '/data/csv/{{_expr_:substitute(substitute(expand('%:t'), '\(.*\)\.php', '\l\1', 'g'), '\u', '_\l\0', 'g')}}.csv');
    $reader->read();

    $columns = array();
    foreach ($reader->read() as $pos => $column_name) {
      if ($column_name !== '') {
        $columns[$column_name] = $pos;
      }
    }

    while (($line = $reader->read()) !== false) {
      if (!$line[1]) {
        break;
      }

      $data = array();
      foreach ($columns as $column_name => $pos) {
        $data[$column_name] = $line[$pos];
      }

      $this->insert($data);
    }
  }
}
