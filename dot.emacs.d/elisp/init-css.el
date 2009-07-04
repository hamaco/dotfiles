;; http://www.garshol.priv.no/download/software/css-mode/css-mode.el
(autoload 'css-mode "css-mode")
(add-to-list 'auto-mode-alist '("\\.css$" . css-mode))
(setq cssm-indent-function #'cssm-c-style-indenter)
