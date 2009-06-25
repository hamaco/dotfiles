;; Copyright (C) 2009  mzp
;; Author: mzp <mzp@debian.clovernet.ne.jp>
;; Keywords:

;; This file is free software; you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation; either version 3, or (at your option)
;; any later version.

;; This file is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with GNU Emacs; see the file COPYING.  If not, write to
;; the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
;; Boston, MA 02110-1301, USA.

;;; Commentary:
;;
;;; Usage:
;;    (require 'ky-indent)
;;    (ky-indent-init)
;;    (setq ky-indent-regexp "external-code/") ;; only for external-code/
;;
(require 'cl)

;;; Code:

;; ------------------------------
;; customize
;; ------------------------------

(defvar ky-indent-tab-width-list '(4 8)
  "A list of possible tab width")

(defvar ky-indent-indent-offset-list '(2 3 4 8)
  "A list of possible indent offset.")

(defvar ky-indent-point-max 1000
  "Check [ky-indent-point-max] point for gussing indent.el
   If this value is nil, use entire buffer.")

(defvar ky-indent-enable-mode-hooks '(cc-mode-hook java-mode-hook python-mode-hook perl-mode-hook)
  "A list of mode-hook that should be hooked to enable ky-indent.")

(defvar ky-indent-setting
  '((cc-mode         . c-basic-offset)
    (java-mode       . c-basic-offset)
    (python-mode     . python-indent)
    (perl-mode       . perl-indent-level)
    ;; you can use also lambda.
    (emacs-lisp-mode . (lambda(i) (setq lisp-indent-offset i)))
    (haxe-mode       . c-basic-offset)
    )
  "A map from mode name to indent setting symbol.
   You could use also lambda. When you use lambda, passed by nil means default indent.")

(defvar ky-indent-regexp ""
  "*Regexp that matches `buffer-file-name' to be ky-indent.")

(defvar ky-indent-exclude-regexp "^$"
  "*Regexp that matches `buffer-file-name' not to be ky-indent.")

;; ------------------------------
;; util procedure
;; ------------------------------
(defmacro ky-indent-save-buffer (&rest body)
  (let ((buffer (gensym))
        (point  (gensym)))
    `(let ((,buffer (buffer-substring (point-min) (point-max)))
           (,point  (point)))
       (unwind-protect
           (progn ,@body)
         (delete-region (point-min) (point-max))
         (insert ,buffer)
         (goto-char ,point)))))

(defmacro ky-indent-narrowing (&rest body)
  `(save-excursion
     (save-restriction
       (narrow-to-region (point-min) (if ky-indent-point-max
                                         (min ky-indent-point-max (point-max))
                                       (point-max)))
       (ky-indent-save-buffer ,@body))))

(defun ky-indent-combination (xs ys)
  (apply 'append
         (mapcar (lambda (x)
                   (mapcar (lambda (y) (cons x y)) ys))
                 xs)))

(defun ky-indent-max-by (f x &rest xs)
  (reduce (lambda (x s) (if (< (funcall f x) (funcall f s)) s x))
          xs
          :initial-value x))

;; ------------------------------
;; indent setting
;; ------------------------------
(defun ky-indent-set-offset (n)
  (let ((setting (assq major-mode ky-indent-setting)))
    (cond
     ((eq setting nil)        (error "no setting"))
     ((listp (cdr setting))   (funcall (cdr setting) n))
     ((symbolp (cdr setting)) (set (cdr setting) n))
     (t                       (error "must not happen")))))

(defmacro ky-indent-save-offset (&rest body)
  (let ((setting (assq major-mode ky-indent-setting)))
    (cond
     ((eq setting nil)         (error "no setting"))
     ((listp (cdr setting))   `(progn ,@body
                                      (funcall ,(cdr setting) nil)))
     ((symbolp (cdr setting)) `(let (,(cdr setting))
                                 ,@body))
     (t                        (error "must not happen")))))

(defun ky-indent-indent ()
  "indent by space"
  (let (indent-tabs-mode)
    (ky-indent-save-offset
     (ky-indent-set-offset 1)
     (indent-region (point-min) (point-max)))))

(defun ky-indent-set-guess (tab offset tabs-mode)
  (message "tab=%s offset=%s tabs-mode=%s" tab offset tabs-mode)
  (when tab   (setq tab-width tab))
  (ky-indent-set-offset offset)
  (setq indent-tabs-mode tabs-mode))

;; ------------------------------
;; inspect buffer
;; ------------------------------
(defun ky-indent-all-lines ()
  (split-string
   (buffer-substring-no-properties (point-min) (point-max))
   "\n"))

;; ------------------------------
;; guess
;; ------------------------------
(defun ky-indent-tab-width (guess)
  (car guess))
(defun ky-indent-offset (guess)
  (cdr guess))
(defun ky-indent-make-guess (tab-width offset)
  (cons tab-width offset))

(defun ky-indent-make-info (tab space)
  (cons tab space))
(defun ky-indent-space-count (info)
  (cdr info))
(defun ky-indent-tab-count (info)
  (car info))

;; ------------------------------
;; estimate indent
;; ------------------------------
(defun ky-indent-tab-space (s)
  (if (string-match "^\\([\t ]*\\)[^\t ]" s)
      (let ((indent (match-string 1 s)))
        (ky-indent-make-info
         (count-if (lambda (c) (char-equal ?\t c)) indent)
         (count-if (lambda (c) (char-equal ?   c)) indent)))
    (ky-indent-make-info 0 0)))

(defun ky-indent-try-guess (tab-width indent-offset actuals indents)
  (count-if (lambda (z)
              (let ((tab    (ky-indent-tab-count (car z)))
                    (space  (ky-indent-space-count (car z)))
                    (indent (cdr  z)))
                (eq (* indent indent-offset) (+ space (* tab-width tab)))))
            (mapcar* 'cons actuals indents)))

(defun ky-indent-guess-tab-space (actuals indents)
  (cdr (apply 'ky-indent-max-by 'car
              (cons (/ (length actuals) 2) (cons nil nil))
              (mapcar (lambda (guess)
                        (cons (ky-indent-try-guess (ky-indent-tab-width guess) (ky-indent-offset guess) actuals indents)
                              guess))
                      (ky-indent-combination ky-indent-tab-width-list
                                             ky-indent-indent-offset-list)))))

(defun ky-indent-guess-tabs-mode (guess actuals indents)
  (let* ((expect-tabs (remove-if-not
                       (lambda (x)  (<= (ky-indent-tab-width guess) (* (ky-indent-offset guess) (cdr x))))
                       (mapcar* 'cons actuals indents)))
         (actual (count-if
                       (lambda (x) (< 0 (ky-indent-tab-count (car x))))
                       expect-tabs)))
    (> (/ (float actual) (length expect-tabs)) 0.5)))

(defun ky-indent-guess (actuals indents)
  (let* ((indents (mapcar 'cdr indents))
         (g (ky-indent-guess-tab-space actuals indents)))
    (if (and (eq (ky-indent-tab-width g) nil) (eq (ky-indent-offset g) nil))
        (list nil nil nil)
      (list (ky-indent-tab-width g)
            (ky-indent-offset g)
            (ky-indent-guess-tabs-mode g actuals indents)))))

;; ------------------------------
;; interactive function
;; ------------------------------
(defun ky-indent ()
  "Set indent/tab-width by KY(automatically)"
  (interactive)
  (ky-indent-narrowing
   (let ((actual (mapcar 'ky-indent-tab-space (ky-indent-all-lines))))
     (message "actual: %s" actual)
     (ky-indent-indent)
     (let ((expect (mapcar 'ky-indent-tab-space (ky-indent-all-lines))))
       (message "expect: %s" expect)
       (apply 'ky-indent-set-guess (ky-indent-guess actual expect))
       (run-hooks 'ky-indent-mode-hook)))))

(defun ky-indent-hooked ()
	(when (and buffer-file-name
            (string-match ky-indent-regexp buffer-file-name)
            (not (string-match ky-indent-exclude-regexp buffer-file-name)))
      (ky-indent)))

(defun ky-indent-init ()
  "Initialize ky-indent mode"
  (interactive)
  (dolist (mode ky-indent-enable-mode-hooks)
    (add-hook mode 'ky-indent-hooked)))

(provide 'ky-indent)
;;; ky-indent.el ends here
