<?php

class Fixture_{{_name_}} extends Sabel_Test_Fixture
{
  public function upFixture()
  {
    $this->insert(array(
      'id' => 1,
      {{_cursor_}}
    ));
  }

  public function downFixture()
  {
    $this->deleteAll();
  }
}
