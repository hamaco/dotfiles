;;; howm-lang-ja.el --- Wiki-like note-taking tool
;;; -*- Coding: iso-2022-7bit -*-
;;; Copyright (c) 2005, 2006, 2007, 2008, 2009
;;;   by HIRAOKA Kazuyuki <khi@users.sourceforge.jp>
;;; $Id: howm-lang-ja.el,v 1.7 2009-02-05 15:00:55 hira Exp $
;;;
;;; This program is free software; you can redistribute it and/or modify
;;; it under the terms of the GNU General Public License as published by
;;; the Free Software Foundation; either version 1, or (at your option)
;;; any later version.
;;;
;;; This program is distributed in the hope that it will be useful,
;;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;;; GNU General Public License for more details.
;;;
;;; The GNU General Public License is available by anonymouse ftp from
;;; prep.ai.mit.edu in pub/gnu/COPYING.  Alternately, you can write to
;;; the Free Software Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139,
;;; USA.
;;--------------------------------------------------------------------

(defvar howm-day-of-week-ja '("$BF|(B" "$B7n(B" "$B2P(B" "$B?e(B" "$BLZ(B" "$B6b(B" "$BEZ(B"))

(defvar howm-menu-command-table-ja
  `(
    ("[$B?75,(B]" (lambda () (howm-create ,howm-menu-action-arg)))
    ("[$BDI2C(B]" (lambda () (howm-create-here ,howm-menu-action-arg)))
    ("[$BJ#@=(B]" howm-dup)
    ("[$B99?7(B]" howm-initialize-buffer previous)
    ("[$B@55,(B]" howm-list-grep)
    ("[$B8GDj(B]" howm-list-grep-fixed)
    ("[roma]" howm-list-migemo)
    ("[$B:#F|(B]" howm-find-today)
    ("[$B:rF|(B]" howm-find-yesterday)
    ("[$B0lMw(B]" howm-list-all)
    ("[$B:G6a(B]" howm-list-recent)
    ("[$BA08e(B]" howm-list-around)
    ("[$BM=Dj(B]" howm-list-schedule)
    ("[$BMzNr(B]" howm-history)
    ("[$BBj",(B]" howm-keyword-to-kill-ring)
    ("[$BL>",(B]" (lambda () (howm-keyword-to-kill-ring t)))
    ("[$B80"-(B]" howm-insert-keyword previous)
    ("[$BF|"-(B]" howm-insert-date previous)
    ("[$B;~"-(B]" howm-insert-dtime previous)
    ("[Todo]" howm-list-todo)
    ("[$BA4>C(B]" howm-kill-all)
    ("[$B6/@)A4>C(B]" (lambda () (interactive) (howm-kill-all t)))
    ("[menu $BJT=8(B]" howm-menu-edit current)
    ("[menu $B99?7(B]" howm-menu-refresh current)
    ("[$B@_Dj(B]" (lambda () (customize-group 'howm)))
    ("[$B?lJb(B]" howm-random-walk previous)
    ))

(provide 'howm-lang-ja)

;;; howm-lang-ja.el ends here
