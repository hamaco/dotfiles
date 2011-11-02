/;;;cake2.el ---  CakePHP2 Minor Mode
;; -*- Mode: Emacs-Lisp -*-

;; Copyright (C) 2011 by 101000code/101000LAB

;; This program is free software; you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation; either version 2 of the License, or
;; (at your option) any later version.

;; This program is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with this program; if not, write to the Free Software
;; Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301 USA

;; Version: 1.0.1
;; Author: k1LoW (Kenichirou Oyama), <k1lowxb [at] gmail [dot] com> <k1low [at] 101000lab [dot] org>
;; URL: http://code.101000lab.org

;;; Install
;; Put this file into load-path'ed directory, and byte compile it if
;; desired.  And put the following expression into your ~/.emacs.
;;
;; (require 'cake2)
;; (global-cake2 t)
;;
;; If you use default key map, Put the following expression into your ~/.emacs.
;;
;; (cake2-set-default-keymap)

;;; YASnippet
;; If you use yasnippet, Put snippets/ into YASnippet load-directory.
;; And put the following expression before yas/initialize()
;;
;; (add-hook 'cake2-hook
;;              #'(lambda ()
;;                  (setq yas/mode-symbol 'cake2)))
;;

;;; Commentary:

;;; Commands:
;;
;; Below are complete command list:
;;
;;  `cake2'
;;    CakePHP2 minor mode.
;;  `cake2-switch-to-model'
;;    Switch to model.
;;  `cake2-switch-to-view'
;;    Switch to view.
;;  `cake2-switch-to-controller'
;;    Switch to contoroller.
;;  `cake2-switch-to-model-testcase'
;;    Switch to model testcase.
;;  `cake2-switch-to-controller-testcase'
;;    Switch to contoroller testcase.
;;  `cake2-switch-to-fixture'
;;    Switch to fixture.
;;  `cake2-switch-to-function'
;;    Switch to function.
;;  `cake2-switch-to-element'
;;    Switch to element. If region is active, make new element file.
;;  `cake2-switch-to-javascript'
;;    Switch to javascript.
;;  `cake2-switch-to-css'
;;    Switch to stylesheet.
;;  `cake2-switch'
;;    Omni switch function.
;;  `cake2-switch-testcase'
;;    Switch testcase <-> C/M. Or, switch form fixture to testcase.
;;  `cake2-switch-to-file-history'
;;    Switch to file history.
;;  `cake2-open-dir'
;;    Open directory.
;;  `cake2-open-models-dir'
;;    Open models directory.
;;  `cake2-open-views-dir'
;;    Open views directory.
;;  `cake2-open-controllers-dir'
;;    Open contorollers directory.
;;  `cake2-open-behaviors-dir'
;;    Open behaviors directory.
;;  `cake2-open-helpers-dir'
;;    Open helpers directory.
;;  `cake2-open-components-dir'
;;    Open components directory.
;;  `cake2-open-libs-dir'
;;    Open libs dir.
;;  `cake2-open-config-dir'
;;    Open config dir.
;;  `cake2-open-layouts-dir'
;;    Open layouts directory.
;;  `cake2-open-elements-dir'
;;    Open elements directory.
;;  `cake2-open-js-dir'
;;    Open JavaScript directory.
;;  `cake2-open-css-dir'
;;    Open css directory.
;;  `cake2-open-tests-dir'
;;    Open tests directory.
;;  `cake2-set-version'
;;    Set CakePHP2 version.
;;  `cake2-complete'
;;    Insert CakePHP2 code.
;;  `cake2-tail-log'
;;    Show log by "tail".
;;  `cake2-singularize'
;;    Singularize str
;;  `cake2-pluralize'
;;    Pluralize str
;;  `anything-c-cake2-anything-only-source-cake2'
;;    anything only anything-c-source-cake2 and anything-c-source-cake2-model-function.
;;  `anything-c-cake2-anything-only-function'
;;    anything only anything-c-source-cake2-function.
;;  `anything-c-cake2-anything-only-model-function'
;;    anything only anything-c-source-cake2-model-function.
;;  `anything-c-cake2-anything-only-po'
;;    anything only anything-c-source-cake2-po.
;;
;;; Customizable Options:
;;
;; Below are customizable option list:
;;
;;  `cake2-app-path-search-limit'
;;    Search limit
;;    default = 5
;;  `cake2-po-file-path'
;;    Po file path.
;;    default = "jpn/LC_MESSAGES/default.po"
;;  `cake2-use-imenu'
;;    Use imenu function
;;    default = nil
;;  `cake2-core-version'
;;    CakePHP2 version
;;    default = "2.0"

;;; TODO
;;

;;; Code:

;;require
(require 'cake-inflector)
(require 'cl)
(require 'anything)
(require 'historyf)
(require 'easy-mmode)

(when (require 'anything-show-completion nil t)
  (use-anything-show-completion 'cake2-complete
                                '(length cake2-initial-input)))

(defgroup cake2 nil
  "CakePHP2 minor mode"
  :group 'convenience
  :prefix "cake2-")

(defcustom cake2-app-path-search-limit 5
  "Search limit"
  :type 'integer
  :group 'cake2)

(defcustom cake2-po-file-path "jpn/LC_MESSAGES/default.po"
  "Po file path."
  :type 'string
  :group 'cake2)

(defcustom cake2-use-imenu nil
  "Use imenu function"
  :type 'boolean
  :group 'cake2)

(defcustom cake2-core-version "2.0"
  "CakePHP2 version"
  :type 'string
  :group 'cake2)

;;(global-set-key "\C-c\C-v" 'cake2)

(define-minor-mode cake2
  "CakePHP2 minor mode."
  :lighter " Cake2"
  :group 'cake2
  (if cake2
      (progn
        (setq minor-mode-map-alist
              (cons (cons 'cake2 cake2-key-map)
                    minor-mode-map-alist))
        (run-hooks 'cake2-hook))
    nil))

(if (fboundp 'define-global-minor-mode)
    (define-global-minor-mode global-cake2
      cake2 cake2-maybe
      :group 'cake2))

(defun cake2-maybe ()
  "What buffer `cake2' prefers."
  (if (and (not (minibufferp (current-buffer)))
           (cake2-set-app-path))
      (cake2 1)
    nil))

;; key-map
(defvar cake2-key-map
  (make-sparse-keymap)
  "Keymap for Cake2.")

(defvar cake2-app-path nil
  "CakePHP2 app directory path.")

(defvar cake2-action-name "index"
  "CakePHP2 action name.")

(defvar cake2-lower-camelized-action-name "index"
  "CakePHP2 lower camelized action name.")

(defvar cake2-snake-action-name "index"
  "CakePHP2 snake_case action name.")

(defvar cake2-view-extension "ctp"
  "CakePHP2 view extension.")

(defvar cake2-singular-name nil
  "CakePHP2 current singular name.")

(defvar cake2-plural-name nil
  "CakePHP2 current plural name.")

(defvar cake2-themed-name nil
  "CakePHP2 current view themed name.")

(defvar cake2-model-regexp "^.+/app/Model/\\([^/]+\\)\.php$"
  "Model file regExp.")

(defvar cake2-view-regexp "^.+/app/View/\\([^/]+\\)/\\([^/]+/\\)?\\([^/.]+\\)\\.\\([a-z]+\\)$"
  "View file regExp.")

(defvar cake2-themed-regexp "^.+/app/View/Themed/\\([^/]+\\)/\\([^/]+\\)/\\([^/]+/\\)?\\([^/.]+\\)\\.\\([a-z]+\\)$"
  "View file regExp.")

(defvar cake2-controller-regexp "^.+/app/Controller/\\([^/]+\\)Controller\.php$"
  "Contoroller file regExp.")

(defvar cake2-behavior-regexp "^.+/app/Model/Behavior/\\([^/]+\\)\.php$"
  "Behavior file regExp.")

(defvar cake2-helper-regexp "^.+/app/View/Helper/\\([^/]+\\)\.php$"
  "Helper file regExp.")

(defvar cake2-component-regexp "^.+/app/Controller/Component/\\([^/]+\\)\.php$"
  "Component file regExp.")

(defvar cake2-model-testcase-regexp "^.+/app/Test/Case/Model/\\([^/]+\\)\Test\.php$"
  "Model testcase file regExp.")

(defvar cake2-controller-testcase-regexp "^.+/app/Test/Cases/Controller/\\([^/]+\\)ControllerTest\.php$"
  "Contoroller testcase file regExp.")

(defvar cake2-fixture-regexp "^.+/app/Test/Fixture/\\([^/]+\\)Fixture\.php$"
  "Fixture file regExp.")

(defvar cake2-javascript-regexp "^.+/app/webroot/js/.+\.js$"
  "JavaScript file regExp.")

(defvar cake2-css-regexp "^.+/app/webroot/css/.+\.css$"
  "Css file regExp.")

(defvar cake2-current-file-type nil
  "Current file type.")

(defvar cake2-file-history nil
  "Switch file history.")

(defvar cake2-hook nil
  "Hook")

(defun cake2-set-default-keymap ()
  "Set default key-map"
  (setq cake2-key-map
        (let ((map (make-sparse-keymap)))
          (define-key map "\C-cs" 'cake2-switch)
          (define-key map "\C-ct" 'cake2-switch-testcase)
          (define-key map "\C-cm" 'cake2-switch-to-model)
          (define-key map "\C-cv" 'cake2-switch-to-view)
          (define-key map "\C-cc" 'cake2-switch-to-controller)
          (define-key map "\C-cx" 'cake2-switch-to-fixture)
          (define-key map "\C-cf" 'cake2-switch-to-function)
          (define-key map "\C-ce" 'cake2-switch-to-element)
          (define-key map "\C-cj" 'cake2-switch-to-javascript)
          (define-key map "\C-cb" 'cake2-switch-to-file-history)
          (define-key map "\C-cM" 'cake2-open-models-dir)
          (define-key map "\C-cV" 'cake2-open-views-dir)
          (define-key map "\C-c\C-l" 'cake2-open-layouts-dir)
          (define-key map "\C-cC" 'cake2-open-controllers-dir)
          (define-key map "\C-cB" 'cake2-open-behaviors-dir)
          (define-key map "\C-cH" 'cake2-open-helpers-dir)
          (define-key map "\C-cP" 'cake2-open-components-dir)
          (define-key map "\C-cL" 'cake2-open-libs-dir)
          (define-key map "\C-cE" 'cake2-open-elements-dir)
          (define-key map "\C-cJ" 'cake2-open-js-dir)
          (define-key map "\C-cS" 'cake2-open-css-dir)
          (define-key map "\C-cT" 'cake2-open-tests-dir)
          (define-key map "\C-c\C-g" 'cake2-open-config-dir)
          (define-key map "\C-c\C-t" 'cake2-tail-log)
          ;; anything-functions
          (define-key map "\C-cl" 'anything-c-cake2-anything-only-source-cake2)
          (define-key map "\C-co" 'anything-c-cake2-anything-only-function)
          (define-key map "\C-cp" 'anything-c-cake2-anything-only-po)
          map)))

(defun cake2-is-model-file ()
  "Check whether current file is model file."
  (cake2-set-app-path)
  (if (not (string-match cake2-model-regexp (buffer-file-name)))
      nil
    (setq cake2-singular-name (match-string 1 (buffer-file-name)))
    (setq cake2-plural-name (cake2-pluralize cake2-singular-name))
    (setq cake2-current-file-type 'model)))

(defun cake2-is-view-file ()
  "Check whether current file is view file."
  (cake2-set-app-path)
  (setq cake2-themed-name nil)
  (if (string-match cake2-themed-regexp (buffer-file-name))
      (progn
        (setq cake2-themed-name (match-string 1 (buffer-file-name)))
        (setq cake2-plural-name (match-string 2 (buffer-file-name)))
        (setq cake2-action-name (match-string 4 (buffer-file-name)))
        (setq cake2-view-extension (match-string 5 (buffer-file-name)))
        (setq cake2-lower-camelized-action-name (cake2-lower-camelize cake2-action-name))
        (setq cake2-singular-name (cake2-singularize cake2-plural-name))
        (setq cake2-current-file-type 'view))
    (if (not (string-match cake2-view-regexp (buffer-file-name)))
        nil
      (setq cake2-plural-name (match-string 1 (buffer-file-name)))
      (setq cake2-action-name (match-string 3 (buffer-file-name)))
      (setq cake2-view-extension (match-string 4 (buffer-file-name)))
      (setq cake2-lower-camelized-action-name (cake2-lower-camelize cake2-action-name))
      (setq cake2-singular-name (cake2-singularize cake2-plural-name))
      (setq cake2-current-file-type 'view))))

(defun cake2-is-controller-file ()
  "Check whether current file is contoroller file."
  (cake2-set-app-path)
  (if (not (string-match cake2-controller-regexp (buffer-file-name)))
      nil
    (setq cake2-plural-name (match-string 1 (buffer-file-name)))
    (save-excursion
      (if
          (not (re-search-backward "function[ \t]*\\([a-zA-Z0-9_]+\\)[ \t]*\(" nil t))
          (re-search-forward "function[ \t]*\\([a-zA-Z0-9_]+\\)[ \t]*\(" nil t)))
    (setq cake2-action-name (match-string 1))
    (setq cake2-lower-camelized-action-name (cake2-lower-camelize cake2-action-name))
    (setq cake2-snake-action-name (cake2-snake cake2-action-name))
    (setq cake2-singular-name (cake2-singularize cake2-plural-name))
    (setq cake2-current-file-type 'controller)))

(defun cake2-is-behavior-file ()
  "Check whether current file is Behavior file."
  (cake2-set-app-path)
  (if (not (string-match cake2-behavior-regexp (buffer-file-name)))
      nil
    (setq cake2-current-file-type 'behavior)))

(defun cake2-is-helper-file ()
  "Check whether current file is Helper file."
  (cake2-set-app-path)
  (if (not (string-match cake2-helper-regexp (buffer-file-name)))
      nil
    (setq cake2-current-file-type 'helper)))

(defun cake2-is-component-file ()
  "Check whether current file is Component file."
  (cake2-set-app-path)
  (if (not (string-match cake2-component-regexp (buffer-file-name)))
      nil
    (setq cake2-current-file-type 'component)))

(defun cake2-is-model-testcase-file ()
  "Check whether current file is model testcase file."
  (cake2-set-app-path)
  (if (not (string-match cake2-model-testcase-regexp (buffer-file-name)))
      nil
    (setq cake2-singular-name (match-string 1 (buffer-file-name)))
    (setq cake2-plural-name (cake2-pluralize cake2-singular-name))
    (setq cake2-current-file-type 'model-testcase)))

(defun cake2-is-controller-testcase-file ()
  "Check whether current file is controller testcase file."
  (cake2-set-app-path)
  (if (not (string-match cake2-controller-testcase-regexp (buffer-file-name)))
      nil
    (setq cake2-plural-name (match-string 1 (buffer-file-name)))
    (setq cake2-singular-name (cake2-singularize cake2-plural-name))
    (setq cake2-current-file-type 'controller-testcase)))

(defun cake2-is-fixture-file ()
  "Check whether current file is fixture file."
  (cake2-set-app-path)
  (if (not (string-match cake2-fixture-regexp (buffer-file-name)))
      nil
    (setq cake2-singular-name (match-string 1 (buffer-file-name)))
    (setq cake2-plural-name (cake2-pluralize cake2-singular-name))
    (setq cake2-current-file-type 'fixture)))

(defun cake2-is-javascript-file ()
  "Check whether current file is JavaScript file."
  (cake2-set-app-path)
  (if (not (string-match cake2-javascript-regexp (buffer-file-name)))
      nil
    (setq cake2-current-file-type 'javascript)))

(defun cake2-is-css-file ()
  "Check whether current file is JavaScript file."
  (cake2-set-app-path)
  (if (not (string-match cake2-css-regexp (buffer-file-name)))
      nil
    (setq cake2-current-file-type 'css)))

(defun cake2-is-file ()
  "Check whether current file is CakePHP2's file."
  (if (or (cake2-is-model-file)
          (cake2-is-controller-file)
          (cake2-is-view-file)
          (cake2-is-behavior-file)
          (cake2-is-helper-file)
          (cake2-is-component-file)
          (cake2-is-javascript-file)
          (cake2-is-css-file)
          (cake2-is-model-testcase-file)
          (cake2-is-controller-testcase-file)
          (cake2-is-fixture-file))
      t nil))

(defun cake2-get-current-line ()
  "Get current line."
  (thing-at-point 'line))

(defun cake2-set-app-path ()
  "Set app path."
  (cake2-is-app-path))

(defun cake2-is-app-path ()
  "Check app directory name and set regExp."
  (setq cake2-app-path (cake2-find-app-path))
  (if (not cake2-app-path)
      nil
    (cake2-set-regexp)))

(defun cake2-find-app-path ()
  "Find app directory"
  (let ((current-dir default-directory))
    (loop with count = 0
          until (file-exists-p (concat current-dir "Config/core.php"))
          ;; Return nil if outside the value of
          if (= count cake2-app-path-search-limit)
          do (return nil)
          ;; Or search upper directories.
          else
          do (incf count)
          (setq current-dir (expand-file-name (concat current-dir "../")))
          finally return current-dir)))

(defun cake2-set-regexp ()
  "Set regExp."
  (setq cake2-model-regexp (concat cake2-app-path "Model/\\([^/]+\\)\.php"))
  (setq cake2-view-regexp (concat cake2-app-path "View/\\([^/]+\\)/\\([^/]+/\\)?\\([^/.]+\\)\\.\\([a-z]+\\)$"))
  (setq cake2-themed-regexp (concat cake2-app-path "View/Themed/\\([^/]+\\)/\\([^/]+\\)/\\([^/]+/\\)?\\([^/.]+\\)\\.\\([a-z]+\\)$"))
  (setq cake2-controller-regexp (concat cake2-app-path "Controller/\\([^/]+\\)Controller\.php$"))
  (setq cake2-behavior-regexp (concat cake2-app-path "Model/Behavior/\\([^/]+\\)\.php$"))
  (setq cake2-helper-regexp (concat cake2-app-path "View/Helper/\\([^/]+\\)\.php$"))
  (setq cake2-component-regexp (concat cake2-app-path "Controller/Component/\\([^/]+\\)\.php$"))
  (setq cake2-model-testcase-regexp (concat cake2-app-path "Test/Case/Model/\\([^/]+\\)\Test\.php$"))
  (setq cake2-controller-testcase-regexp (concat cake2-app-path "Test/Case/Controller/\\([^/]+\\)ControllerTest\.php$"))
  (setq cake2-fixture-regexp (concat cake2-app-path "Test/Fixture/\\([^/]+\\)Fixture\.php$"))
  (setq cake2-javascript-regexp (concat cake2-app-path "webroot/js/.+\.js$"))
  (setq cake2-css-regexp (concat cake2-app-path "webroot/css/.+\.css$"))
  t)

(defun cake2-switch-to-model ()
  "Switch to model."
  (interactive)
  (if (cake2-is-file)
      (cake2-switch-to-file (concat cake2-app-path "Model/" cake2-singular-name ".php"))
    (message "Can't find model name.")))

(defun cake2-switch-to-view ()
  "Switch to view."
  (interactive)
  (let ((view-files nil))
    (if (cake2-is-file)
        (progn
          (if (cake2-is-model-file)
              (setq cake2-plural-name (cake2-pluralize cake2-singular-name)))
          (setq view-files (cake2-set-view-list))
          (if view-files
              (cond
               ((= 1 (length view-files))
                (find-file (concat cake2-app-path "View/" cake2-plural-name "/" (car view-files))))
               (t (anything
                   '(((name . "Switch to view")
                      (candidates . view-files)
                      (display-to-real . (lambda (candidate)
                                           (concat cake2-app-path "View/" cake2-plural-name "/" candidate)
                                           ))
                      (type . file)))
                   nil nil nil nil)
                  ))
            (if (y-or-n-p "Make new file?")
                (progn
                  (unless (file-directory-p (concat cake2-app-path "View/" cake2-plural-name "/"))
                    (make-directory (concat cake2-app-path "View/" cake2-plural-name "/")))
                  (find-file (concat cake2-app-path "View/" cake2-plural-name "/" cake2-action-name "." cake2-view-extension)))
              (message (format "Can't find %s" (concat cake2-app-path "View/" cake2-plural-name "/" cake2-action-name "." cake2-view-extension))))))
      (message "Can't switch to view."))))

(defun cake2-set-view-list ()
  "Set view list"
  (let ((dir (concat cake2-app-path "View/" cake2-plural-name))
        (view-dir nil)
        (view-files nil))
    (unless (not (file-directory-p dir))
      (setq view-dir (remove-if-not (lambda (x) (file-directory-p (concat cake2-app-path "View/" cake2-plural-name "/" x))) (directory-files dir)))
      (setq view-dir (remove-if (lambda (x) (equal x "..")) view-dir))
      (loop for x in view-dir do (if (file-exists-p (concat cake2-app-path "View/" cake2-plural-name "/" x "/" cake2-snake-action-name "." cake2-view-extension))
                                     (unless (some (lambda (y) (equal (concat x "/" cake2-snake-action-name "." cake2-view-extension) y)) view-files)
                                       (push (concat x "/" cake2-snake-action-name "." cake2-view-extension) view-files))))
      (loop for x in view-dir do (if (file-exists-p (concat cake2-app-path "View/" cake2-plural-name "/" x "/" cake2-snake-action-name ".ctp"))
                                     (unless (some (lambda (y) (equal (concat x "/" cake2-snake-action-name ".ctp") y)) view-files)
                                       (push (concat x "/" cake2-snake-action-name ".ctp") view-files))))
      (loop for x in view-dir do (if (file-exists-p (concat cake2-app-path "View/" cake2-plural-name "/" x "/" cake2-action-name "." cake2-view-extension))
                                     (unless (some (lambda (y) (equal (concat x "/" cake2-action-name "." cake2-view-extension) y)) view-files)
                                       (push (concat x "/" cake2-action-name "." cake2-view-extension) view-files))))
      (loop for x in view-dir do (if (file-exists-p (concat cake2-app-path "View/" cake2-plural-name "/" x "/" cake2-action-name ".ctp"))
                                     (unless (some (lambda (y) (equal (concat x "/" cake2-action-name ".ctp") y)) view-files)
                                       (push (concat x "/" cake2-action-name ".ctp") view-files)))))
    view-files))

(defun cake2-switch-to-controller ()
  "Switch to contoroller."
  (interactive)
  (if (cake2-is-file)
      (progn
        (if (file-exists-p (concat cake2-app-path "Controller/" cake2-plural-name "Controller.php"))
            (progn
              (find-file (concat cake2-app-path "Controller/" cake2-plural-name "Controller.php"))
              (goto-char (point-min))
              (if (not (re-search-forward (concat "function[ \t]*" cake2-lower-camelized-action-name "[ \t]*\(") nil t))
                  (progn
                    (goto-char (point-min))
                    (re-search-forward (concat "function[ \t]*" cake2-action-name "[ \t]*\(") nil t)))
              (recenter))
          (if (y-or-n-p "Make new file?")
              (find-file (concat cake2-app-path "Controller/" cake2-plural-name "Controller.php"))
            (message (format "Can't find %s" (concat cake2-app-path "Controller/" cake2-plural-name "Controller.php"))))))
    (message "Can't switch to contoroller.")))

(defun cake2-switch-to-model-testcase ()
  "Switch to model testcase."
  (interactive)
  (if (cake2-is-file)
      (cake2-switch-to-file (concat cake2-app-path "Test/Case/Model/" cake2-singular-name ".test.php"))
    (message "Can't switch to model testcase.")))

(defun cake2-switch-to-controller-testcase ()
  "Switch to contoroller testcase."
  (interactive)
  (if (cake2-is-file)
      (cake2-switch-to-file (concat cake2-app-path "Test/Case/Controller/" cake2-plural-name "Controller.test.php"))
    (message "Can't switch to contoroller testcase.")))

(defun cake2-switch-to-fixture ()
  "Switch to fixture."
  (interactive)
  (if (cake2-is-file)
      (cake2-switch-to-file (concat cake2-app-path "tests/fixtures/" cake2-singular-name "_fixture.php"))
    (message "Can't switch to fixture.")))

(defun cake2-switch-to-file (file-path)
  "Switch to file."
  (if (file-exists-p file-path)
      (find-file file-path)
    (if (y-or-n-p "Make new file?")
        (find-file file-path)
      (message (format "Can't find %s" file-path)))))

(defun cake2-search-functions ()
  "Search function from current buffer."
  (let ((func-list nil))
    (save-excursion
      (goto-char (point-min))
      (while (re-search-forward "function[ \t]*\\([a-zA-Z0-9_]+\\)[ \t]*\(" nil t)
        (push (match-string 1) func-list))
      func-list)))

(defun cake2-switch-to-function ()
  "Switch to function."
  (interactive)
  (let ((current-func nil))
    (if (and cake2-use-imenu
             (require 'imenu nil t))
        (anything 'anything-c-source-imenu)
      (if (or (cake2-is-controller-file)
              (cake2-is-model-file)
              (cake2-is-javascript-file))
          (progn
            (setq current-func (cake2-search-functions))
            (anything
             '(((name . "Switch to current function")
                (candidates . current-func)
                (display-to-real . (lambda (candidate)
                                     (concat "function[ \t]*" candidate "[ \t]*\(")))
                (action
                 ("Switch to Function" . (lambda (candidate)
                                           (goto-char (point-min))
                                           (re-search-forward candidate nil t)
                                           (recenter)
                                           )))))
             nil nil nil nil))
        (message "Can't switch to function.")))))

(defun cake2-switch-to-element ()
  "Switch to element. If region is active, make new element file."
  (interactive)
  (let ((element-name nil) (themed-path ""))
    (if (cake2-is-view-file)
        (progn
          (unless (not cake2-themed-name)
            (setq themed-path (concat "Themed/" cake2-themed-name "/")))
          (if (or (string-match "renderElement( *['\"]\\([-a-zA-Z0-9_/\.]+\\)['\"].*)" (cake2-get-current-line))
                  (string-match "element(['\"]\\( *[-a-zA-Z0-9_/\.]+\\)['\"].*)" (cake2-get-current-line)))
              (if (file-exists-p (concat cake2-app-path "View/" themed-path "Elements/" (match-string 1 (cake2-get-current-line)) "." cake2-view-extension))
                  (find-file (concat cake2-app-path "View/" themed-path "Elements/" (match-string 1 (cake2-get-current-line)) "." cake2-view-extension))
                (if (y-or-n-p "Make new file?")
                    (find-file (concat cake2-app-path "View/" themed-path "Elements/" (match-string 1 (cake2-get-current-line)) "." cake2-view-extension))
                  (message (format "Can't find %s" (concat cake2-app-path "View/" themed-path "Elements/" (match-string 1 (cake2-get-current-line)) "." cake2-view-extension)))))
            (if (not (and (region-active-p)
                          (y-or-n-p "Can't find element name. Make new file?")))
                (message "Can't find element name.")
              (setq element-name (read-string "Element name (no extension): " "element_name"))
              (if (not element-name)
                  (message "Can't find element name.")
                (kill-region (point) (mark))
                (insert (concat "<?php echo $this->element('" element-name "'); ?>"))
                (find-file (concat cake2-app-path "View/" themed-path "Elements/" element-name "." cake2-view-extension))
                (yank)))))
      (message "Current buffer is not view."))))

(defun cake2-switch-to-javascript ()
  "Switch to javascript."
  (interactive)
  (if (cake2-set-app-path)
      (if (or (string-match "$javascript->link( *['\"]\\([-a-zA-Z0-9_/\.]+\\)['\"].*" (cake2-get-current-line))
              (string-match "$this->Html->script( *['\"]\\([-a-zA-Z0-9_/\.]+\\)['\"].*" (cake2-get-current-line))) ;;1.3x
          (cond
           ((file-exists-p (concat cake2-app-path "webroot/js/" (match-string 1 (cake2-get-current-line))))
            (find-file (concat cake2-app-path "webroot/js/" (match-string 1 (cake2-get-current-line)))))
           ((file-exists-p (concat cake2-app-path "webroot/js/" (match-string 1 (cake2-get-current-line)) ".js"))
            (find-file (concat cake2-app-path "webroot/js/" (match-string 1 (cake2-get-current-line)) ".js")))
           ((y-or-n-p "Make new file?")
            (find-file (concat cake2-app-path "webroot/js/" (match-string 1 (cake2-get-current-line)) ".js")))
           (message (format "Can't find %s" (concat cake2-app-path "webroot/js/" (match-string 1 (cake2-get-current-line)) ".js"))))
        (message "Can't find javascript name."))
    (message "Can't set app path.")))

(defun cake2-switch-to-css ()
  "Switch to stylesheet."
  (interactive)
  (if (cake2-set-app-path)
      (if (or (string-match "$html->css( *['\"]\\([-a-zA-Z0-9_/\.]+\\)['\"].*" (cake2-get-current-line))
              (string-match "$this->Html->css( *['\"]\\([-a-zA-Z0-9_/\.]+\\)['\"].*" (cake2-get-current-line)))
          (cond
           ((file-exists-p (concat cake2-app-path "webroot/css/" (match-string 1 (cake2-get-current-line))))
            (find-file (concat cake2-app-path "webroot/css/" (match-string 1 (cake2-get-current-line)))))
           ((file-exists-p (concat cake2-app-path "webroot/css/" (match-string 1 (cake2-get-current-line)) ".css"))
            (find-file (concat cake2-app-path "webroot/css/" (match-string 1 (cake2-get-current-line)) ".css")))
           ((y-or-n-p "Make new file?")
            (find-file (concat cake2-app-path "webroot/css/" (match-string 1 (cake2-get-current-line)) ".css")))
           (message (format "Can't find %s" (concat cake2-app-path "webroot/css/" (match-string 1 (cake2-get-current-line)) ".css"))))
        (message "Can't find stylesheet  name."))
    (message "Can't set app path.")))

(defun cake2-switch ()
  "Omni switch function."
  (interactive)
  (if (cake2-set-app-path)
      (cond
       ;;cake2-switch-to-javascript
       ((or (string-match "$javascript->link( *['\"]\\([-a-zA-Z0-9_/\.]+\\)['\"].*" (cake2-get-current-line))
            (string-match "$this->Html->script( *['\"]\\([-a-zA-Z0-9_/\.]+\\)['\"].*" (cake2-get-current-line))) (cake2-switch-to-javascript)) ;;1.3x
       ;;cake2-switch-to-element
       ((or (string-match "renderElement( *['\"]\\([-a-zA-Z0-9_/\.]+\\)['\"].*)" (cake2-get-current-line))
            (string-match "element(['\"]\\( *[-a-zA-Z0-9_/\.]+\\)['\"].*)" (cake2-get-current-line))) (cake2-switch-to-element))
       ;;cake2-switch-to-css
       ((or (string-match "$html->css( *['\"]\\([-a-zA-Z0-9_/\.]+\\)['\"].*" (cake2-get-current-line))
            (string-match "$this->html->css( *['\"]\\([-a-zA-Z0-9_/\.]+\\)['\"].*" (cake2-get-current-line))) (cake2-switch-to-css)) ;;1.3x
       ;;cake2-switch-to-controller
       ((cake2-is-view-file) (cake2-switch-to-controller))
       ;;cake2-switch-to-view
       ((cake2-is-controller-file) (cake2-switch-to-view))
       (t (message "Current buffer is neither view nor controller.")))
    (message "Can't set app path.")))

(defun cake2-switch-testcase ()
  "Switch testcase <-> C/M. Or, switch form fixture to testcase."
  (interactive)
  (cond ((cake2-is-model-file) (cake2-switch-to-model-testcase))
        ((cake2-is-controller-file) (cake2-switch-to-controller-testcase))
        ((cake2-is-model-testcase-file) (cake2-switch-to-model))
        ((cake2-is-controller-testcase-file) (cake2-switch-to-controller))
        ((cake2-is-fixture-file) (cake2-switch-to-model-testcase))
        (t (message "Current buffer is neither model nor controller."))))

(defun cake2-switch-to-file-history ()
  "Switch to file history."
  (interactive)
  (historyf-back '(cake2)))

(defun cake2-open-dir (dir &optional recursive)
  "Open directory."
  (interactive)
  (if (cake2-set-app-path)
      (anything-other-buffer
       (cake2-create-open-dir-anything-sources dir recursive) nil)
    (message "Can't set app path.")))

(defun cake2-create-open-dir-anything-sources (dir &optional recursive)
  "Careate 'Open dir' anything-sources"
  (let (sources)
    (unless (listp dir)
      (setq dir (list dir)))
    (if (cake2-set-app-path)
        (progn
          (loop for d in dir do
                (unless (not (file-directory-p (concat cake2-app-path d)))
                  (push
                   `((name . ,(concat "Open directory: " d))
                     (candidates . ,(cake2-directory-files d recursive))
                     (display-to-real . (lambda (candidate)
                                          (concat ,cake2-app-path ,d candidate)))
                     (type . file))
                   sources)))
          (reverse sources))
      nil)))

(defun cake2-directory-files (dir &optional recursive)
  "Get directory files recuresively."
  (let
      (file-list file)
    (if (not recursive)
        (remove-if (lambda (x) (equal x "..")) (directory-files (concat cake2-app-path dir)))
      (loop for x in (cake2-get-recuresive-path-list (concat cake2-app-path dir))
            do (progn
                 (string-match (concat cake2-app-path dir "\\(.+\\)") x)
                 (push (match-string 1 x) file-list)))
      (remove-if (lambda (x) (equal x "..")) file-list))))

(defun cake2-get-recuresive-path-list (file-list)
  "Get file path list recuresively."
  (let ((path-list nil))
    (unless (listp file-list)
      (setq file-list (list file-list)))
    (loop for x
          in file-list
          do (if (file-directory-p x)
                 (setq path-list
                       (append
                        (cake2-get-recuresive-path-list
                         (remove-if
                          (lambda(y) (string-match "\\.$\\|\\.svn" y)) (directory-files x t)))
                        path-list))
               (setq path-list (push x path-list))))
    path-list))

(defun cake2-open-models-dir ()
  "Open models directory."
  (interactive)
  (let ((plugin-list (cake2-find-plugin-dir)))
    (setq plugin-list (mapcar (function (lambda (c) (if c (concat c "Model/") nil))) plugin-list))
    (push "Model/" plugin-list)
    (cake2-open-dir plugin-list)))

(defun cake2-open-views-dir ()
  "Open views directory."
  (interactive)
  (let ((themed-list (cake2-find-themed-dir)) (plugin-list (cake2-find-plugin-dir)))
    (if (or (cake2-is-model-file) (cake2-is-controller-file) (cake2-is-view-file))
        (progn
          (setq themed-list (mapcar (function (lambda (c) (if c (concat c cake2-plural-name "/") nil))) themed-list))
          (push (concat "View/" cake2-plural-name "/") themed-list)
          (cake2-open-dir themed-list))
      (setq plugin-list (mapcar (function (lambda (c) (if c (concat c "View/") nil))) plugin-list))
      (push "View/" plugin-list)
      (cake2-open-dir plugin-list t))))

(defun cake2-open-controllers-dir ()
  "Open contorollers directory."
  (interactive)
  (let ((plugin-list (cake2-find-plugin-dir))
        (controller-list (cake2-find-controller-dir)))
    (setq plugin-list (mapcar (function (lambda (c) (if c (concat c "Controller/") nil))) plugin-list))
    (setq controller-list (append controller-list plugin-list))
    (push "Controller/" controller-list)
    (cake2-open-dir (remove-if (lambda (x) (string-match "Component" x)) controller-list))))

(defun cake2-open-behaviors-dir ()
  "Open behaviors directory."
  (interactive)
  (let ((plugin-list (cake2-find-plugin-dir)))
    (setq plugin-list (mapcar (function (lambda (c) (if c (concat c "Model/Behavior/") nil))) plugin-list))
    (push "Model/Behavior/" plugin-list)
    (cake2-open-dir plugin-list)))

(defun cake2-open-helpers-dir ()
  "Open helpers directory."
  (interactive)
  (let ((plugin-list (cake2-find-plugin-dir)))
    (setq plugin-list (mapcar (function (lambda (c) (if c (concat c "View/Helper/") nil))) plugin-list))
    (push "View/Helper/" plugin-list)
    (cake2-open-dir plugin-list)))

(defun cake2-open-components-dir ()
  "Open components directory."
  (interactive)
  (let ((plugin-list (cake2-find-plugin-dir)))
    (setq plugin-list (mapcar (function (lambda (c) (if c (concat c "Controller/Component/") nil))) plugin-list))
    (push "Controller/Component/" plugin-list)
    (cake2-open-dir plugin-list)))

(defun cake2-open-libs-dir ()
  "Open libs dir."
  (interactive)
  (let ((plugin-list (cake2-find-plugin-dir)))
    (setq plugin-list (mapcar (function (lambda (c) (if c (concat c "Lib/") nil))) plugin-list))
    (push "Lib/" plugin-list)
    (cake2-open-dir plugin-list t)))

(defun cake2-open-config-dir ()
  "Open config dir."
  (interactive)
  (let ((plugin-list (cake2-find-plugin-dir)))
    (setq plugin-list (mapcar (function (lambda (c) (if c (concat c "Config/") nil))) plugin-list))
    (push "Config/" plugin-list)
    (cake2-open-dir plugin-list t)))

(defun cake2-open-layouts-dir ()
  "Open layouts directory."
  (interactive)
  (let ((themed-list (cake2-find-themed-dir)))
    (setq themed-list (mapcar (function (lambda (c) (if c (concat c "Layouts/") nil))) themed-list))
    (push (concat "View/Layouts/") themed-list)
    (cake2-open-dir themed-list t)))

(defun cake2-open-elements-dir ()
  "Open elements directory."
  (interactive)
  (let ((themed-list (cake2-find-themed-dir)))
    (setq themed-list (mapcar (function (lambda (c) (if c (concat c "Elements/") nil))) themed-list))
    (push (concat "View/Elements/") themed-list)
    (cake2-open-dir themed-list t)))

(defun cake2-open-js-dir ()
  "Open JavaScript directory."
  (interactive)
  (let ((plugin-list (cake2-find-plugin-dir)))
    (setq plugin-list (mapcar (function (lambda (c) (if c (concat c "webroot/js/") nil))) plugin-list))
    (push "webroot/js/" plugin-list)
    (cake2-open-dir plugin-list t)))

(defun cake2-open-css-dir ()
  "Open css directory."
  (interactive)
  (let ((plugin-list (cake2-find-plugin-dir)))
    (setq plugin-list (mapcar (function (lambda (c) (if c (concat c "webroot/css/") nil))) plugin-list))
    (push "webroot/css/" plugin-list)
    (cake2-open-dir plugin-list t)))

(defun cake2-open-tests-dir ()
  "Open tests directory."
  (interactive)
  (cake2-open-dir (list "Test/Case/" "Test/Fixture/" "Tests/Group/") t))

(defun cake2-find-themed-dir ()
  "Find themed directory. like app/View/Themed/m"
  (cake2-find-dir-list "View/Themed/"))

(defun cake2-find-controller-dir ()
  "Find plugin directory. like app/Controller"
  (remove-if (lambda (x) (string-match "Component" x)) (cake2-find-dir-list "Contoller/")))

(defun cake2-find-plugin-dir ()
  "Find plugin directory. like app/plugins"
  (cake2-find-dir-list "Plugin/"))

(defun cake2-find-dir-list (dir)
  "Find directory list."
  (let (d l)
    (if (and (cake2-set-app-path) (file-directory-p (concat cake2-app-path dir)))
        (progn
          (setq d (concat cake2-app-path dir))
          (loop for x in (directory-files d)
                do (unless (or
                            (not (file-directory-p (concat d x)))
                            (string-match "\\.\\.?" x))
                     (push (concat dir x "/") l)))
          (reverse l))
      nil)))

(defvar cake2-source-version
  '((name . "CakePHP2 core version")
    (candidates . (lambda () (list "1.2" "1.3")))
    (action
     ("Set Version" . (lambda (candidate)
                        (setq cake2-core-version candidate))))))

(defun cake2-set-version ()
  "Set CakePHP2 version."
  (interactive)
  (if (cake2-set-app-path)
      (anything '(cake2-source-version)
                nil "Version: " nil)))

(defvar cake2-source-models
  '((name . "Cake2 Model")
    (candidates . (lambda ()
                    (mapcar (function (lambda (c)
                                        (setq c (capitalize c))
                                        (while (string-match "_\\|\.Php" c)
                                          (setq c (replace-match "" nil nil c)))
                                        (concat "$this->loadModel('" c "');")
                                        ))
                            (remove-if (lambda (x) (or (string-match "~$\\|\\.$" x)
                                                       (file-directory-p (concat cake2-app-path "Model/" x))))
                                       (directory-files (concat cake2-app-path "Model/")))
                            )))
    (action
     ("Insert Code" . (lambda (candidate)
                        (delete-backward-char (length cake2-initial-input))
                        (insert candidate))))))

(defvar cake2-source-javascript
  '((name . "Cake2 JavaScript")
    (candidates . (lambda ()
                    (mapcar (function (lambda (c)
                                        (if (string-match (concat "\\.js$") c)
                                            (setq c (replace-match "" nil nil c)))
                                        (if (string-match "1\.3" cake2-core-version)
                                            (concat "$this->Html->script('" c "');")
                                          (concat "$javascript->link('" c "');"))))
                            (remove-if (lambda (x) (or (string-match "~$\\|\\.$" x)
                                                       (file-directory-p (concat cake2-app-path "webroot/js/" x))))
                                       (cake2-directory-files "webroot/js/" t)))))
    (action
     ("Insert Code" . (lambda (candidate)
                        (delete-backward-char (length cake2-initial-input))
                        (insert candidate))))))

(defvar cake2-source-css
  '((name . "Cake2 Css")
    (candidates . (lambda ()
                    (mapcar (function (lambda (c)
                                        (if (string-match (concat "\\.css$") c)
                                            (setq c (replace-match "" nil nil c)))
                                        (if (string-match "1\.3" cake2-core-version)
                                            (concat "$this->Html->css('" c "');")
                                          (concat "$html->css('" c "');"))))
                            (remove-if (lambda (x) (or (string-match "~$\\|\\.$" x)
                                                       (file-directory-p (concat cake2-app-path "webroot/css/" x))))
                                       (cake2-directory-files "webroot/css/" t)))))
    (action
     ("Insert Code" . (lambda (candidate)
                        (delete-backward-char (length cake2-initial-input))
                        (insert candidate))))))

(defvar cake2-source-layouts
  '((name . "Cake2 Layout")
    (candidates . (lambda ()
                    (mapcar (function (lambda (c) (concat "$this->layout = '" c "';")))
                            (remove-if (lambda (x) (or (string-match "~$\\|\\.$" x)
                                                       (file-directory-p (concat cake2-app-path "View/Layouts/" x))))
                                       (cake2-directory-files "View/Layouts/" t)))))
    (action
     ("Insert Code" . (lambda (candidate)
                        (delete-backward-char (length cake2-initial-input))
                        (insert candidate))))))

(defvar cake2-source-elements
  '((name . "Cake2 Element")
    (candidates . (lambda ()
                    (mapcar (function (lambda (c)
                                        (if (string-match (concat "\\." cake2-view-extension "$") c)
                                            (setq c (replace-match "" nil nil c)))
                                        (concat "$this->element('" c "');")))
                            (remove-if (lambda (x) (or (string-match "~$\\|\\.$" x)
                                                       (file-directory-p (concat cake2-app-path "View/Elements/" x))))
                                       (cake2-directory-files "View/Elements/" t)))))
    (action
     ("Insert Code" . (lambda (candidate)
                        (delete-backward-char (length cake2-initial-input))
                        (insert candidate))))))

;;php-completion.el code
(defvar cake2-initial-input nil)
(defun cake2-get-initial-input ()
  (setq cake2-initial-input
        (buffer-substring-no-properties (point)
                                        (progn (save-excursion
                                                 (skip-syntax-backward "w_")
                                                 (point))))))

(defun cake2-complete ()
  "Insert CakePHP2 code."
  (interactive)
  (if (cake2-set-app-path)
      (cond
       ((cake2-is-controller-file)
        (anything
         '(cake2-source-layouts
           cake2-source-models)
         (cake2-get-initial-input) "Find Code: " nil))
       ((cake2-is-view-file)
        (anything
         '(cake2-source-javascript
           cake2-source-css
           cake2-source-elements)
         (cake2-get-initial-input) "Find Code: " nil))
       (t
        (anything
         '(cake2-source-javascript
           cake2-source-css
           cake2-source-elements
           cake2-source-layouts
           cake2-source-models)
         (cake2-get-initial-input) "Find Code: " nil))
       )))

(defun cake2-logs ()
  "Set logs list."
  (if (cake2-set-app-path)
      (mapcar
       (function (lambda (el)
                   (if (listp el) el(cons el el))))
       (directory-files (concat cake2-app-path "tmp/logs/") nil "\\.log$"))
    nil))

(defun cake2-tail-log (log)
  "Show log by \"tail\"."
  (interactive
   (list (completing-read "tail log: " (cake2-logs) nil t "debug.log")))
  (if (require 'tail nil t)             ;xcezx patch.
      (tail-file (concat cake2-app-path "tmp/logs/" log))
    (let ((logbuffer (concat "*" log "*")))
      (if (and (cake2-logs) (executable-find "tail"))
          (progn
            (unless (get-buffer logbuffer)
              (get-buffer-create logbuffer)
              (set-buffer logbuffer)
              (insert-before-markers (concat "tail -f" cake2-app-path "tmp/logs/" log "\n"))
              (setq buffer-read-only t)
              (start-process "tail" logbuffer "tail" "-f" (concat cake2-app-path "tmp/logs/" log)))
            (switch-to-buffer logbuffer))
        (message "Can't set log.")))))

(defun cake2-singularize (str)
  "Singularize str"
  (interactive)
  (let ((result str))
    (loop for rule in cake-singular-rules do
          (unless (not (string-match (nth 0 rule) str))
            (setq result (replace-match (nth 1 rule) nil nil str))
            (return result)))))
;;(cake2-singularize "cases")

(defun cake2-pluralize (str)
  "Pluralize str"
  (interactive)
  (let ((result str))
    (loop for rule in cake-plural-rules do
          (unless (not (string-match (nth 0 rule) str))
            (setq result (replace-match (nth 1 rule) nil nil str))
            (return result)))))
;;(cake2-pluralize "case")

(defun cake2-camelize (str)
  "Camelize snake_case str"
  (let ((camelize-str str) (case-fold-search nil))
    (setq camelize-str (capitalize (downcase camelize-str)))
    (replace-regexp-in-string
     "_" ""
     camelize-str)))
;;(cake2-camelize "cake2_camelize")

(defun cake2-lower-camelize (str)
  "lowerCamelize snake_case str"
  (let ((head-str "") (tail-str "") (case-fold-search nil))
    (if (string-match "^\\([a-z]+_\\)\\([a-z0-9_]*\\)" (downcase str))
        (progn
          (setq head-str (match-string 1 (downcase str)))
          (setq tail-str (match-string 2 (capitalize str)))
          (if (string-match "_" head-str)
              (setq head-str (replace-match "" t nil head-str)))
          (while (string-match "_" tail-str)
            (setq tail-str (replace-match "" t nil tail-str)))
          (concat head-str tail-str))
      str)))
;;(cake2-lower-camelize "cake2_lower_camelize")

(defun cake2-snake (str) ;;copied from rails-lib.el
  "Change snake_case."
  (let ((case-fold-search nil))
    (downcase
     (replace-regexp-in-string
      "\\([A-Z]+\\)\\([A-Z][a-z]\\)" "\\1_\\2"
      (replace-regexp-in-string
       "\\([a-z\\d]\\)\\([A-Z]\\)" "\\1_\\2"
       str)))))
;;(cake2-snake "Cake2Snake")
;;(cake2-snake "CCake2Snake")

;;; anything sources and functions

(when (require 'anything-show-completion nil t)
  (use-anything-show-completion 'anything-c-cake2-anything-only-function
                                '(length cake2-initial-input)))

(defvar cake2-candidate-function-name nil)

(defvar anything-c-cake2-po-file-buffer-name "*Cake2 Po*")

(defvar anything-c-source-cake2
  '((name . "Cake2 Switch")
    (init
     . (lambda ()
         (if
             (and (cake2-set-app-path) (executable-find "grep"))
             (with-current-buffer (anything-candidate-buffer 'local)
               (call-process-shell-command
                (concat "grep '[^_]function' "
                        cake2-app-path
                        "Controller/*Controller.php --with-filename")
                nil (current-buffer))
               (call-process-shell-command
                (concat "grep '[^_]function' "
                        cake2-app-path
                        "Lib/*Controller.php --with-filename")
                nil (current-buffer))
               (goto-char (point-min))
               (while (re-search-forward ".+\\/\\([^\\/]+\\)Controller\.php:.*function *\\([^ ]+\\) *(.*).*$" nil t)
                 (replace-match (concat (match-string 1) " / " (match-string 2))))
               )
           (with-current-buffer (anything-candidate-buffer 'local)
             (call-process-shell-command nil nil (current-buffer)))
           )))
    (candidates-in-buffer)
    (display-to-real . anything-c-cake2-set-names)
    (action
     ("Switch to Contoroller" . (lambda (candidate)
                                  (anything-c-cake2-switch-to-controller)))
     ("Switch to View" . (lambda (candidate)
                           (anything-c-cake2-switch-to-view)))
     ("Switch to Model" . (lambda (candidate)
                            (anything-c-cake2-switch-to-model))))))

(defun anything-c-cake2-set-names (candidate)
  "Set names by display-to-real"
  (progn
    (string-match "\\(.+\\) / \\(.+\\)" candidate)
    (setq cake2-plural-name (match-string 1 candidate))
    (setq cake2-action-name (match-string 2 candidate))
    (setq cake2-singular-name (cake2-singularize cake2-plural-name))
    (setq cake2-lower-camelized-action-name cake2-action-name)
    (setq cake2-snake-action-name (cake2-snake cake2-action-name))))

(defun anything-c-cake2-switch-to-view ()
  "Switch to view."
  (let (themed-dir
        (plural-name cake2-plural-name)
        (action-name cake2-action-name)
        (snake-action-name cake2-snake-action-name))
    (progn
      (cake2-set-app-path)
      (if (and (cake2-is-view-file) cake2-themed-name)
          (setq themed-dir (concat "Themed/" cake2-themed-name "/")))
      (cond
       ((file-exists-p (concat cake2-app-path "View/" themed-dir plural-name "/" snake-action-name "." cake2-view-extension))
        (find-file (concat cake2-app-path "View/" themed-dir plural-name "/" snake-action-name "." cake2-view-extension)))
       ((file-exists-p (concat cake2-app-path "View/" themed-dir plural-name "/" snake-action-name ".ctp"))
        (find-file (concat cake2-app-path "View/" themed-dir plural-name "/" snake-action-name ".ctp")))

       ((file-exists-p (concat cake2-app-path "View/" themed-dir plural-name "/" action-name "." cake2-view-extension))
        (find-file (concat cake2-app-path "View/" themed-dir plural-name "/" action-name "." cake2-view-extension)))
       ((file-exists-p (concat cake2-app-path "View/" themed-dir plural-name "/" action-name ".ctp"))
        (find-file (concat cake2-app-path "View/" themed-dir plural-name "/" action-name ".ctp")))

       ((file-exists-p (concat cake2-app-path "View/" plural-name "/" snake-action-name "." cake2-view-extension))
        (find-file (concat cake2-app-path "View/" plural-name "/" snake-action-name "." cake2-view-extension)))
       ((file-exists-p (concat cake2-app-path "View/" plural-name "/" snake-action-name ".ctp"))
        (find-file (concat cake2-app-path "View/" plural-name "/" snake-action-name ".ctp")))

       ((file-exists-p (concat cake2-app-path "View/" plural-name "/" action-name "." cake2-view-extension))
        (find-file (concat cake2-app-path "View/" plural-name "/" action-name "." cake2-view-extension)))
       ((file-exists-p (concat cake2-app-path "View/" plural-name "/" action-name ".ctp"))
        (find-file (concat cake2-app-path "View/" plural-name "/" action-name ".ctp")))

       ((y-or-n-p "Make new file?")
        (unless (file-directory-p (concat cake2-app-path "View/" plural-name "/"))
          (make-directory (concat cake2-app-path "View/" plural-name "/")))
        (find-file (concat cake2-app-path "View/" plural-name "/" action-name "." cake2-view-extension)))
       (t (message (format "Can't find %s" (concat cake2-app-path "View/" plural-name "/" action-name "." cake2-view-extension))))))))

(defun anything-c-cake2-switch-to-controller ()
  "Switch to contoroller."
  (cake2-set-app-path)
  (if (file-exists-p (concat cake2-app-path "Controller/" cake2-plural-name "Controller.php"))
      (progn
        (find-file (concat cake2-app-path "Controller/" cake2-plural-name "Controller.php"))
        (goto-char (point-min))
        (if (not (re-search-forward (concat "function[ \t]*" cake2-lower-camelized-action-name "[ \t]*\(") nil t))
            (progn
              (goto-char (point-min))
              (re-search-forward (concat "function[ \t]*" cake2-action-name "[ \t]*\(") nil t))))
    (if (file-exists-p (concat cake2-app-path cake2-plural-name "Controller.php"))
        (progn
          (find-file (concat cake2-app-path cake2-plural-name "Controller.php"))
          (goto-char (point-min))
          (if (not (re-search-forward (concat "function[ \t]*" cake2-lower-camelized-action-name "[ \t]*\(") nil t))
              (progn
                (goto-char (point-min))
                (re-search-forward (concat "function[ \t]*" cake2-action-name "[ \t]*\(") nil t))))
      (if (y-or-n-p "Make new file?")
          (find-file (concat cake2-app-path "Controller/" cake2-plural-name "Controller.php"))
        (message (format "Can't find %s" (concat cake2-app-path "Controller/" cake2-plural-name "Controller.php")))))))

(defun anything-c-cake2-switch-to-model ()
  "Switch to model."
  (cake2-set-app-path)
  (if (file-exists-p (concat cake2-app-path "Model/" cake2-singular-name ".php"))
      (find-file (concat cake2-app-path "Model/" cake2-singular-name ".php"))
    (if (y-or-n-p "Make new file?")
        (find-file (concat cake2-app-path "Model/" cake2-singular-name ".php"))
      (message (format "Can't find %s" (concat cake2-app-path "Model/" cake2-singular-name ".php"))))))

(defun anything-c-cake2-switch-to-file-function (dir)
  "Switch to file and search function."
  (cake2-set-app-path)
  (if (not (file-exists-p (concat cake2-app-path dir cake2-singular-name ".php")))
      (if (y-or-n-p "Make new file?")
          (find-file (concat cake2-app-path dir cake2-singular-name ".php"))
        (message (format "Can't find %s" (concat cake2-app-path dir cake2-singular-name ".php"))))
    (find-file (concat cake2-app-path dir cake2-singular-name ".php"))
    (goto-char (point-min))
    (re-search-forward (concat "function[ \t]*" cake2-candidate-function-name "[ \t]*\(") nil t)))

(defvar anything-c-source-cake2-model-function
  '((name . "Cake2 Model Function Switch")
    (init
     . (lambda ()
         (if
             (and (cake2-set-app-path) (executable-find "grep"))
             (with-current-buffer (anything-candidate-buffer 'local)
               (call-process-shell-command
                (concat "grep '[^_]function' "
                        cake2-app-path
                        "Model/*.php --with-filename")
                nil (current-buffer))
               (goto-char (point-min))
               (while (not (eobp))
                 (if (not (re-search-forward ".+\\/\\(.+\\)\.php:.*function *\\([^ ]+\\) *(.*).*" nil t))
                     (goto-char (point-max))
                   (setq class-name (cake2-camelize (match-string 1)))
                   (setq function-name (match-string 2))
                   (delete-region (point) (save-excursion (beginning-of-line) (point)))
                   (insert (concat class-name "->" function-name))
                   )))
           (with-current-buffer (anything-candidate-buffer 'local)
             (call-process-shell-command nil nil (current-buffer)))
           )))
    (candidates-in-buffer)
    (display-to-real . anything-c-cake2-set-names2)
    (action
     ("Switch to Function" . (lambda (candidate)
                               (anything-c-cake2-switch-to-file-function "Model/")))
     ("Insert" . (lambda (candidate)
                   (insert candidate))))))

(defvar anything-c-source-cake2-component-function
  '((name . "Cake2 Component Function Switch")
    (init
     . (lambda ()
         (if
             (and (cake2-set-app-path) (executable-find "grep"))
             (with-current-buffer (anything-candidate-buffer 'local)
               (call-process-shell-command
                (concat "grep '[^_]function' "
                        cake2-app-path
                        "Controller/Component/*.php --with-filename")
                nil (current-buffer))
               (goto-char (point-min))
               (while (not (eobp))
                 (if (not (re-search-forward ".+\\/\\(.+\\)\.php:.*function *\\([^ ]+\\) *(.*).*" nil t))
                     (goto-char (point-max))
                   (setq class-name (cake2-camelize (match-string 1)))
                   (setq function-name (match-string 2))
                   (delete-region (point) (save-excursion (beginning-of-line) (point)))
                   (insert (concat class-name "->" function-name))
                   )))
           (with-current-buffer (anything-candidate-buffer 'local)
             (call-process-shell-command nil nil (current-buffer)))
           )))
    (candidates-in-buffer)
    (display-to-real . anything-c-cake2-set-names2)
    (action
     ("Switch to Function" . (lambda (candidate)
                               (anything-c-cake2-switch-to-file-function "Controller/Component/")))
     ("Insert" . (lambda (candidate)
                   (insert candidate))))))

(defvar anything-c-source-cake2-behavior-function
  '((name . "Cake2 Behavior Function Switch")
    (init
     . (lambda ()
         (if
             (and (cake2-set-app-path) (executable-find "grep"))
             (with-current-buffer (anything-candidate-buffer 'local)
               (call-process-shell-command
                (concat "grep '[^_]function' "
                        cake2-app-path
                        "Model/Behavior/*.php --with-filename")
                nil (current-buffer))
               (goto-char (point-min))
               (while (not (eobp))
                 (if (not (re-search-forward ".+\\/\\(.+\\)\.php:.*function *\\([^ ]+\\) *(.*).*" nil t))
                     (goto-char (point-max))
                   (setq class-name (cake2-camelize (match-string 1)))
                   (setq function-name (match-string 2))
                   (delete-region (point) (save-excursion (beginning-of-line) (point)))
                   (insert (concat class-name "->" function-name))
                   )))
           (with-current-buffer (anything-candidate-buffer 'local)
             (call-process-shell-command nil nil (current-buffer)))
           )))
    (candidates-in-buffer)
    (display-to-real . anything-c-cake2-set-names2)
    (action
     ("Switch to Function" . (lambda (candidate)
                               (anything-c-cake2-switch-to-file-function "Model/Behavior/")))
     ("Insert" . (lambda (candidate)
                   (insert candidate))))))

(defun anything-c-cake2-set-names2 (candidate)
  "Set names by display-to-real"
  (progn
    (string-match "\\(.+\\)->\\(.+\\)" candidate)
    (setq cake2-camelized-singular-name (match-string 1 candidate))
    (setq cake2-candidate-function-name (match-string 2 candidate))
    (setq cake2-singular-name (cake2-snake cake2-camelized-singular-name))))

(defun anything-c-cake2-create-po-file-buffer ()
  "Create buffer from po file."
  (let ((anything-buffer (anything-candidate-buffer 'global)))
    (catch 'invalid-po-file
      (unless (anything-c-cake2-generate-po-file-buffer (concat cake2-app-path "Locale/" cake2-po-file-path))
        (message "Can't find po file: %s" (concat cake2-app-path "Locale/" cake2-po-file-path))
        (throw 'invalid-po-file nil))
      (with-current-buffer anything-buffer
        (set-syntax-table (with-current-buffer anything-current-buffer
                            (syntax-table)))
        (insert-buffer-substring anything-c-cake2-po-file-buffer-name)))))

(defun anything-c-cake2-generate-po-file-buffer (po-file)
  "Generate po file buffer"
  (when (and po-file
             (file-exists-p po-file)
             (file-regular-p po-file))
    (with-current-buffer (get-buffer-create anything-c-cake2-po-file-buffer-name)

      (erase-buffer)
      (insert-file-contents po-file)

      (goto-char (point-min))
      (while (re-search-forward "^[^m].*\n" nil t)
        (replace-match ""))

      (goto-char (point-min))
      (while (re-search-forward "^msgid \"\\(.*\\)\"\nmsgstr \"\\(.*\\)\"$" nil t)
        (replace-match "\\1 / \\2"))
      )
    t))

(defvar anything-c-source-cake2-po
  '((name . "Cake2 po file's msgid and msgstr")
    (init . (lambda ()
              (cake2-set-app-path)
              (setq path cake2-app-path)
              (anything-c-cake2-create-po-file-buffer)))
    (candidates-in-buffer)
    (action
     ("Insert __('msgid')." . (lambda (candidate)
                                (insert (concat "__('" (anything-c-cake2-get-msgid candidate) "')"))))
     ("Insert __('msgid',true)." . (lambda (candidate)
                                     (insert (concat "__('" (anything-c-cake2-get-msgid candidate) "',true)"))))
     ("Insert msgid." . (lambda (candidate)
                          (insert (anything-c-cake2-get-msgid candidate))))
     ("Insert msgstr." . (lambda (candidate)
                           (insert (anything-c-cake2-get-msgstr candidate))))
     ("Goto po file" . (lambda (candidate)
                         (find-file (concat path "Locale/" cake2-po-file-path))
                         (goto-char (point-min))
                         (re-search-forward (concat "\"" (anything-c-cake2-get-msgid candidate) "\"") nil t))))))

(defvar anything-c-source-cake2-po-not-found
  '((name . "Create __()")
    (init . (lambda ()
              (cake2-set-app-path)
              (setq path cake2-app-path)))
    (dummy)
    (action
     ("Insert __('msgid')." . (lambda (candidate)
                                (insert (concat "__('" candidate "')"))))
     ("Insert __('msgid',true)." . (lambda (candidate)
                                     (insert (concat "__('" candidate "',true)"))))
     ("Insert msgid." . (lambda (candidate)
                          (insert candidate)))
     ("Goto po file" . (lambda (candidate)
                         (find-file (concat path "Locale/" cake2-po-file-path))
                         (goto-char (point-max)))))))

(defun anything-c-cake2-get-msgid (candidate)
  "Set msgid"
  (progn
    (string-match "\\(.+\\) /" candidate)
    (match-string 1 candidate)))

(defun anything-c-cake2-get-msgstr (candidate)
  "Set msgstr"
  (progn
    (string-match "/ \\(.+\\)$" candidate)
    (match-string 1 candidate)))

(defun anything-c-cake2-anything-only-source-cake2 ()
  "anything only anything-c-source-cake2 and anything-c-source-cake2-model-function."
  (interactive)
  (anything (list anything-c-source-cake2
                  anything-c-source-cake2-model-function
                  anything-c-source-cake2-component-function
                  anything-c-source-cake2-behavior-function)
            nil "Find CakePHP2 Sources: " nil nil))

(defun anything-c-cake2-anything-only-function ()
  "anything only anything-c-source-cake2-function."
  (interactive)
  (let* ((initial-pattern (regexp-quote (or (thing-at-point 'symbol) ""))))
    (anything (list anything-c-source-cake2-model-function
                    anything-c-source-cake2-component-function
                    anything-c-source-cake2-behavior-function) initial-pattern "Find Cake2 Functions: " nil)))

(defun anything-c-cake2-anything-only-model-function ()
  "anything only anything-c-source-cake2-model-function."
  (interactive)
  (let* ((initial-pattern (regexp-quote (or (thing-at-point 'symbol) ""))))
    (anything '(anything-c-source-cake2-model-function) initial-pattern "Find Model Functions: " nil)))

(defun anything-c-cake2-anything-only-po ()
  "anything only anything-c-source-cake2-po."
  (interactive)
  (let* ((initial-pattern (regexp-quote (or (thing-at-point 'symbol) ""))))
    (anything (list anything-c-source-cake2-po
                    anything-c-source-cake2-po-not-found)
              initial-pattern "Find Msgid And Msgstr: " nil)))

;; mode provide
(provide 'cake2)

;;; end
;;; cake2.el ends here
