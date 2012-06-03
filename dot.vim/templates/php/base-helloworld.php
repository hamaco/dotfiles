<?php

$hello = function($text = 'world') {
  echo sprintf('Hello %s!!', $text);
};

$hello();
