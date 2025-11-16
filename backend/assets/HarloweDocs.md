Harlowe 3.3.8 manual

##### Introduction

*   [Report bugs and suggest features](#introduction_report-bugs-and-suggest-features)
*   [Unstable 4.0 builds now available!](#introduction_unstable-4.0-builds-now-available!)
*   [What Harlowe does best](#introduction_what-harlowe-does-best)
*   [Three fundamentals of Harlowe](#introduction_three-fundamentals-of-harlowe)
*   [Example stories](#introduction_example-stories)

##### Editing and debugging

*   [Editor toolbar](#interface_editor-toolbar)
*   [Editor keyboard shortcuts](#interface_editor-keyboard-shortcuts)
*   [Debug Mode](#interface_debug-mode)

##### Passage markup

###### basics

*   [Link](#markup_link)
*   [Style](#markup_style)

###### coding

*   [Macro](#markup_macro)
*   [Variable](#markup_variable)
*   [Hook](#markup_hook)
*   [Named hook](#markup_named-hook)
*   [Hidden hook](#markup_hidden-hook)
*   [Unclosed hook](#markup_unclosed-hook)

###### extra

*   [HTML](#markup_html)
*   [HTML script tag](#markup_html-script-tag)
*   [Verbatim](#markup_verbatim)

###### list

*   [Bulleted list](#markup_bulleted-list)
*   [Numbered list](#markup_numbered-list)

###### section

*   [Aligner](#markup_aligner)
*   [Column](#markup_column)
*   [Heading](#markup_heading)
*   [Horizontal rule](#markup_horizontal-rule)

###### whitespace

*   [Whitespace](#markup_whitespace)
*   [Collapsing whitespace](#markup_collapsing-whitespace)
*   [Unclosed collapsing whitespace](#markup_unclosed-collapsing-whitespace)
*   [Escaped line break](#markup_escaped-line-break)

##### List of macros

###### basics

*   [(set: ...VariableToValue)](#macro_set) Instant
*   [(put: ...VariableToValue)](#macro_put) Instant
*   [(move: ...VariableToValue)](#macro_move) Instant
*   [(print: Any)](#macro_print) Command
*   [(display: String)](#macro_display) Command
*   [(if: Boolean)](#macro_if) Changer
*   [(unless: Boolean)](#macro_unless) Changer
*   [(else-if: Boolean)](#macro_else-if) Changer
*   [(else:)](#macro_else) Changer
*   [(for: Lambda, \[...Any\])](#macro_for) Changer
    
    (loop:)
    
*   [(either: ...Any)](#macro_either) Any
*   [(cond: Boolean, Any, ...Any)](#macro_cond) Any
*   [(nth: Number, ...Any)](#macro_nth) Any
*   [(verbatim:)](#macro_verbatim) Changer
    
    (v6m:)
    
*   [(verbatim-print: Any)](#macro_verbatim-print) Command
    
    (v6m-print:)
    
*   [(change: HookName or String, Changer or Lambda)](#macro_change) Command
*   [(enchant: HookName or String, Changer or Lambda)](#macro_enchant) Command
*   [(enchant-in: HookName or String, Changer or Lambda)](#macro_enchant-in) Changer
*   [(hooks-named: String)](#macro_hooks-named) HookName

###### borders

*   [(border: String, \[String\], \[String\], \[String\])](#macro_border) Changer
    
    (b4r:)
    
*   [(border-colour: String or Colour, \[String or Colour\], \[String or Colour\], \[String or Colour\])](#macro_border-colour) Changer
    
    (b4r-colour:), (border-color:), (b4r-color:)
    
*   [(border-size: Number, \[Number\], \[Number\], \[Number\])](#macro_border-size) Changer
    
    (b4r-size:)
    
*   [(corner-radius: Number, \[Number\], \[Number\], \[Number\])](#macro_corner-radius) Changer

###### colour

*   [(hsl: Number, Number, Number, \[Number\])](#macro_hsl) Colour
    
    (hsla:)
    
*   [(rgb: Number, Number, Number, \[Number\])](#macro_rgb) Colour
    
    (rgba:)
    
*   [(lch: Number, Number, Number, \[Number\])](#macro_lch) Colour
    
    (lcha:)
    
*   [(complement: Colour)](#macro_complement) Colour
*   [(palette: String, Colour)](#macro_palette) Array
*   [(gradient: Number, ...Number, Colour)](#macro_gradient) Gradient
*   [(stripes: Number, Number, Colour, Colour)](#macro_stripes) Gradient
*   [(mix: Number, Colour, Number, Colour)](#macro_mix) Colour

###### custom macros

*   [(macro: \[...TypedVar\], CodeHook)](#macro_macro) CustomMacro
*   [(output:)](#macro_output) Changer
    
    (out:)
    
*   [(output-data: Any)](#macro_output-data) Instant
    
    (out-data:)
    
*   [(error: String)](#macro_error) Instant
*   [(datatype: Any)](#macro_datatype) Datatype
*   [(datapattern: Any)](#macro_datapattern) Any
*   [(partial: String or CustomMacro, \[...Any\])](#macro_partial) CustomMacro

###### data structure

*   [(a: \[...Any\])](#macro_a) Array
    
    (array:)
    
*   [(dm: \[...Any\])](#macro_dm) Datamap
    
    (datamap:)
    
*   [(ds: \[...Any\])](#macro_ds) Dataset
    
    (dataset:)
    
*   [(all-pass: Lambda, \[...Any\])](#macro_all-pass) Boolean
    
    (pass:)
    
*   [(altered: Lambda, \[...Any\])](#macro_altered) Array
*   [(count: Array or String, ...Any)](#macro_count) Number
*   [(dm-altered: Lambda, Datamap)](#macro_dm-altered) Datamap
    
    (datamap-altered:)
    
*   [(dm-entries: Datamap)](#macro_dm-entries) Array
    
    (data-entries:), (datamap-entries:)
    
*   [(dm-names: Datamap)](#macro_dm-names) Array
    
    (data-names:), (datamap-names:)
    
*   [(dm-values: Datamap)](#macro_dm-values) Array
    
    (data-values:), (datamap-values:)
    
*   [(find: Lambda, \[...Any\])](#macro_find) Array
*   [(folded: Lambda, ...Any)](#macro_folded) Any
*   [(interlaced: Array, ...Array)](#macro_interlaced) Array
*   [(none-pass: Lambda, ...Any)](#macro_none-pass) Boolean
*   [(permutations: ...Any)](#macro_permutations) Array
*   [(range: Number, Number)](#macro_range) Array
*   [(repeated: Number, ...Any)](#macro_repeated) Array
*   [(reversed: \[...Any\])](#macro_reversed) Array
*   [(rotated-to: Lambda, \[...Any\])](#macro_rotated-to) Array
*   [(rotated: Number, ...Any)](#macro_rotated) Array
*   [(shuffled: ...Any)](#macro_shuffled) Array
*   [(some-pass: Lambda, ...Any)](#macro_some-pass) Boolean
*   [(sorted: \[Lambda\], ...Any)](#macro_sorted) Array
*   [(subarray: Array, Number, Number)](#macro_subarray) Array
*   [(unique: ...Any)](#macro_unique) Array
*   [(unpack: ...VariableToValue)](#macro_unpack) Instant

###### date and time

*   [(current-date:)](#macro_current-date) String
*   [(current-time:)](#macro_current-time) String
*   [(monthday:)](#macro_monthday) Number
*   [(weekday:)](#macro_weekday) String

###### debugging

*   [(ignore: \[...Any\])](#macro_ignore) Command
*   [(test-true: \[...Any\])](#macro_test-true) Changer
*   [(test-false: \[...Any\])](#macro_test-false) Changer
*   [(assert: Boolean)](#macro_assert) Instant
*   [(assert-exists: HookName or String)](#macro_assert-exists) Command
*   [(debug:)](#macro_debug) Command
*   [(mock-turns: Number)](#macro_mock-turns) Command
*   [(mock-visits: ...String)](#macro_mock-visits) Command
*   [(verbatim-source: Any)](#macro_verbatim-source) Command
    
    (v6m-source:)
    

###### game state

*   [(history: \[Lambda\])](#macro_history) Array
*   [(visited: String or Lambda)](#macro_visited) Boolean
*   [(passage: \[String\])](#macro_passage) Datamap
*   [(passages: \[Lambda\])](#macro_passages) Array
*   [(forget-visits: Number)](#macro_forget-visits) Command
*   [(forget-undos: Number)](#macro_forget-undos) Command
*   [(metadata: \[...Any\])](#macro_metadata) Metadata
*   [(seed: String)](#macro_seed) Command

###### input and interface

*   [(cycling-link: \[Bind\], ...String)](#macro_cycling-link) Command
*   [(seq-link: \[Bind\], ...String)](#macro_seq-link) Command
    
    (sequence-link:)
    
*   [(input: \[Bind\], \[String\], \[String\])](#macro_input) Command
*   [(force-input: \[Bind\], \[String\], String)](#macro_force-input) Command
*   [(input-box: \[Bind\], \[String\], \[Number\], \[String\])](#macro_input-box) Command
*   [(force-input-box: \[Bind\], \[String\], \[Number\], String)](#macro_force-input-box) Command
*   [(checkbox: Bind, String)](#macro_checkbox) Command
*   [(checkbox-fullscreen: String)](#macro_checkbox-fullscreen) Command
*   [(dropdown: Bind, ...String)](#macro_dropdown) Command
*   [(meter: Bind, Number, String, \[String\], \[Colour or Gradient\])](#macro_meter) Command

###### links

*   [(link: String, \[Changer\])](#macro_link) Changer
    
    (link-replace:)
    
*   [(link-reveal: String, \[Changer\])](#macro_link-reveal) Changer
    
    (link-append:)
    
*   [(link-repeat: String, \[Changer\])](#macro_link-repeat) Changer
*   [(link-rerun: String, \[Changer\])](#macro_link-rerun) Changer
*   [(link-goto: String, \[String\])](#macro_link-goto) Command
*   [(link-reveal-goto: String, \[String\], \[Changer\])](#macro_link-reveal-goto) Changer
*   [(link-undo: String, \[String\])](#macro_link-undo) Command
*   [(link-fullscreen: String, String, \[String\])](#macro_link-fullscreen) Command
*   [(link-show: String, ...HookName)](#macro_link-show) Command
*   [(link-storylet: \[String\], Number or Lambda, \[String\])](#macro_link-storylet) Command
*   [(click: HookName or String, \[Changer or Lambda\])](#macro_click) Changer
*   [(click-replace: HookName or String, \[Changer or Lambda\])](#macro_click-replace) Changer
*   [(click-rerun: HookName or String, \[Changer or Lambda\])](#macro_click-rerun) Changer
*   [(click-append: HookName or String, \[Changer or Lambda\])](#macro_click-append) Changer
*   [(click-goto: HookName or String, String)](#macro_click-goto) Command
*   [(click-undo: HookName or String)](#macro_click-undo) Command
*   [(click-prepend: HookName or String, \[Changer or Lambda\])](#macro_click-prepend) Changer
*   [(action: String)](#macro_action) Changer

###### live

*   [(live: \[Number\])](#macro_live) Changer
*   [(stop:)](#macro_stop) Command
*   [(event: Lambda)](#macro_event) Changer
*   [(after: Number, \[Number\])](#macro_after) Changer
*   [(after-error:)](#macro_after-error) Changer
*   [(more:)](#macro_more) Changer

###### maths

*   [(abs: Number)](#macro_abs) Number
*   [(cos: Number)](#macro_cos) Number
*   [(exp: Number)](#macro_exp) Number
*   [(log: Number)](#macro_log) Number
*   [(log10: Number)](#macro_log10) Number
*   [(log2: Number)](#macro_log2) Number
*   [(max: ...Number)](#macro_max) Number
*   [(min: ...Number)](#macro_min) Number
*   [(pow: Number, Number)](#macro_pow) Number
*   [(sign: Number)](#macro_sign) Number
*   [(sin: Number)](#macro_sin) Number
*   [(sqrt: Number)](#macro_sqrt) Number
*   [(tan: Number)](#macro_tan) Number

###### navigation

*   [(go-to: String)](#macro_go-to) Command
*   [(redirect: String)](#macro_redirect) Command
*   [(undo: \[String\])](#macro_undo) Command
*   [(restart:)](#macro_restart) Command
    
    (reload:)
    

###### number

*   [(ceil: Number)](#macro_ceil) Number
*   [(floor: Number)](#macro_floor) Number
*   [(num: String)](#macro_num) Number
    
    (number:)
    
*   [(random: Number, \[Number\])](#macro_random) Number
*   [(round: Number)](#macro_round) Number
*   [(trunc: Number)](#macro_trunc) Number

###### patterns

*   [(p: ...String or Datatype)](#macro_p) Datatype
    
    (pattern:)
    
*   [(p-either: ...String or Datatype)](#macro_p-either) Datatype
    
    (pattern-either:)
    
*   [(p-opt: ...String or Datatype)](#macro_p-opt) Datatype
    
    (pattern-opt:), (p-optional:), (pattern-optional:)
    
*   [(p-many: \[Number\], \[Number\], ...String or Datatype)](#macro_p-many) Datatype
    
    (pattern-many:)
    
*   [(p-not: ...String or Datatype)](#macro_p-not) Datatype
    
    (pattern-not:)
    
*   [(p-before: ...String or Datatype)](#macro_p-before) Datatype
    
    (pattern-before:)
    
*   [(p-not-before: ...String or Datatype)](#macro_p-not-before) Datatype
    
    (pattern-not-before:)
    
*   [(p-start: ...String or Datatype)](#macro_p-start) Datatype
    
    (pattern-start:)
    
*   [(p-end: ...String or Datatype)](#macro_p-end) Datatype
    
    (pattern-start:)
    
*   [(p-ins: ...String or Datatype)](#macro_p-ins) Datatype
    
    (p-insensitive:), (pattern-ins:), (pattern-insensitive:)
    

###### popup

*   [(dialog: \[Bind\], String or CodeHook, ...String)](#macro_dialog) Command
    
    (alert:)
    
*   [(confirm: String or CodeHook, \[String\], \[String\])](#macro_confirm) Boolean
*   [(prompt: String or CodeHook, String, \[String\], \[String\])](#macro_prompt) String

###### revision

*   [(replace: ...HookName or String)](#macro_replace) Changer
*   [(append: ...HookName or String)](#macro_append) Changer
*   [(prepend: ...HookName or String)](#macro_prepend) Changer
*   [(replace-with: String or CodeHook)](#macro_replace-with) Changer
*   [(append-with: String or CodeHook)](#macro_append-with) Changer
*   [(prepend-with: String or CodeHook)](#macro_prepend-with) Changer
*   [(rerun: ...HookName)](#macro_rerun) Command

###### saving

*   [(load-game: String)](#macro_load-game) Command
*   [(save-game: String, \[String\])](#macro_save-game) Boolean
*   [(saved-games:)](#macro_saved-games) Datamap

###### showing and hiding

*   [(hidden:)](#macro_hidden) Changer
*   [(hide: ...HookName)](#macro_hide) Command
*   [(show: ...HookName)](#macro_show) Command

###### sidebar

*   [(icon-undo: \[String\], \[String\])](#macro_icon-undo) Command
*   [(icon-redo: \[String\], \[String\])](#macro_icon-redo) Command
*   [(icon-fullscreen: \[String\], \[String\])](#macro_icon-fullscreen) Command
*   [(icon-restart: \[String\])](#macro_icon-restart) Command
*   [(icon-counter: Bind, String, \[String\])](#macro_icon-counter) Command

###### storylet

*   [(storylet: Lambda)](#macro_storylet) Metadata
*   [(open-storylets: \[Lambda\])](#macro_open-storylets) Array
*   [(exclusivity: Number)](#macro_exclusivity) Metadata
*   [(urgency: Number)](#macro_urgency) Metadata

###### string

*   [(str: ...\[Number or String or Boolean or Array\])](#macro_str) String
    
    (string:), (text:)
    
*   [(digit-format: String, Number)](#macro_digit-format) String
*   [(joined: ...String)](#macro_joined) String
*   [(lowercase: String)](#macro_lowercase) String
*   [(lowerfirst: String)](#macro_lowerfirst) String
*   [(plural: Number, String, \[String\])](#macro_plural) String
*   [(source: Any)](#macro_source) String
*   [(split: String or Datatype, String)](#macro_split) Array
    
    (splitted:)
    
*   [(str-find: Datatype, String)](#macro_str-find) Array
    
    (string-find:)
    
*   [(str-nth: Number)](#macro_str-nth) String
    
    (string-nth:)
    
*   [(str-repeated: Number, String)](#macro_str-repeated) String
    
    (string-repeated:)
    
*   [(str-replaced: \[Number\], String or Datatype, String or Lambda, String)](#macro_str-replaced) String
    
    (string-replaced:), (replaced:)
    
*   [(str-reversed: String)](#macro_str-reversed) String
    
    (string-reversed:)
    
*   [(substring: String, Number, Number)](#macro_substring) String
*   [(trimmed: \[String or Datatype\], String)](#macro_trimmed) String
*   [(uppercase: String)](#macro_uppercase) String
*   [(upperfirst: String)](#macro_upperfirst) String
*   [(words: String)](#macro_words) Array

###### styling

*   [(align: String)](#macro_align) Changer
*   [(bg: Colour or String or Gradient)](#macro_bg) Changer
    
    (background:)
    
*   [(box: String, \[Number\])](#macro_box) Changer
*   [(button: \[String\])](#macro_button) Changer
*   [(char-style: Changer or Lambda)](#macro_char-style) Changer
*   [(collapse:)](#macro_collapse) Changer
*   [(css: String)](#macro_css) Changer
*   [(float-box: String, String)](#macro_float-box) Changer
*   [(font: String)](#macro_font) Changer
*   [(hook: String)](#macro_hook) Changer
*   [(hover-style: Changer)](#macro_hover-style) Changer
*   [(line-style: Changer or Lambda)](#macro_line-style) Changer
*   [(link-style: Changer or Lambda)](#macro_link-style) Changer
*   [(opacity: Number)](#macro_opacity) Changer
*   [(text-colour: String or Colour)](#macro_text-colour) Changer
    
    (colour:), (text-color:), (color:)
    
*   [(text-indent: Number)](#macro_text-indent) Changer
*   [(text-rotate-x: Number)](#macro_text-rotate-x) Changer
*   [(text-rotate-y: Number)](#macro_text-rotate-y) Changer
*   [(text-rotate-z: Number)](#macro_text-rotate-z) Changer
    
    (text-rotate:)
    
*   [(text-size: Number)](#macro_text-size) Changer
    
    (size:)
    
*   [(text-style: ...String)](#macro_text-style) Changer

###### transitions

*   [(transition: String)](#macro_transition) Changer
    
    (t8n:)
    
*   [(transition-delay: Number)](#macro_transition-delay) Changer
    
    (t8n-delay:)
    
*   [(transition-time: Number)](#macro_transition-time) Changer
    
    (t8n-time:)
    
*   [(transition-depart: String)](#macro_transition-depart) Changer
    
    (t8n-depart:)
    
*   [(transition-arrive: String)](#macro_transition-arrive) Changer
    
    (t8n-arrive:)
    
*   [(transition-skip: Number)](#macro_transition-skip) Changer
    
    (t8n-skip:)
    
*   [(animate: HookName, String, \[Number\])](#macro_animate) Command

###### window

*   [(goto-url: String)](#macro_goto-url) Command
*   [(open-url: String)](#macro_open-url) Command
*   [(page-url:)](#macro_page-url) String
*   [(scroll: HookName, Number or HookName)](#macro_scroll) Command

###### deprecated

*   [(mouseover: HookName or String, \[Changer or Lambda\])](#macro_mouseover) Changer
*   [(mouseout: HookName or String, \[Changer or Lambda\])](#macro_mouseout) Changer
*   [(mouseover-replace: HookName or String, \[Changer or Lambda\])](#macro_mouseover-replace) Changer
*   [(mouseover-append: HookName or String, \[Changer or Lambda\])](#macro_mouseover-append) Changer
*   [(mouseover-prepend: HookName or String, \[Changer or Lambda\])](#macro_mouseover-prepend) Changer
*   [(mouseout-replace: HookName or String, \[Changer or Lambda\])](#macro_mouseout-replace) Changer
*   [(mouseout-append: HookName or String, \[Changer or Lambda\])](#macro_mouseout-append) Changer
*   [(mouseout-prepend: HookName or String, \[Changer or Lambda\])](#macro_mouseout-prepend) Changer
*   [(mouseover-goto: HookName or String, String)](#macro_mouseover-goto) Command
*   [(mouseout-goto: HookName or String, String)](#macro_mouseout-goto) Command
*   [(mouseover-undo: HookName or String, String)](#macro_mouseover-undo) Command
*   [(mouseout-undo: HookName or String, String)](#macro_mouseout-undo) Command

##### Special keywords

*   [exits](#keyword_exits) Number
    
    exit
    
*   [it](#keyword_it) Any
*   [pos](#keyword_pos) Number
*   [time](#keyword_time) Number
*   [turns](#keyword_turns) Number
    
    turn
    
*   [visits](#keyword_visits) Number
    
    visit
    

##### Special passage tags

*   [header](#passagetag_header)
*   [footer](#passagetag_footer)
*   [startup](#passagetag_startup)
*   [debug-header](#passagetag_debug-header)
*   [debug-footer](#passagetag_debug-footer)
*   [debug-startup](#passagetag_debug-startup)

##### Types of data

*   [Any](#type_any)
*   [Array](#type_array)
*   [Bind](#type_bind)
*   [Boolean](#type_boolean)
*   [Changer](#type_changer)
*   [CodeHook](#type_codehook)
*   [Colour](#type_colour)
*   [Command](#type_command)
*   [CustomMacro](#type_custommacro)
*   [Datamap](#type_datamap)
*   [Dataset](#type_dataset)
*   [Datatype](#type_datatype)
*   [Gradient](#type_gradient)
*   [HookName](#type_hookname)
*   [Instant](#type_instant)
*   [Lambda](#type_lambda)
*   [Metadata](#type_metadata)
*   [Number](#type_number)
*   [String](#type_string)
*   [TypedVar](#type_typedvar)
*   [VariableToValue](#type_variabletovalue)

##### Change log

*   [4.0.0 changes (unreleased)](#changes_4.0.0-changes-(unreleased))
*   [3.3.9 changes (Jun 16, 2024)](#changes_3.3.9-changes-(jun-16,-2024))
*   [3.3.8 changes (Jan 03, 2024)](#changes_3.3.8-changes-(jan-03,-2024))
*   [3.3.7 changes (27 Aug, 2023)](#changes_3.3.7-changes-(27-aug,-2023))
*   [3.3.6 changes (Jul 07, 2023)](#changes_3.3.6-changes-(jul-07,-2023))
*   [3.3.5 changes (Feb 27, 2023)](#changes_3.3.5-changes-(feb-27,-2023))
*   [3.3.4 changes (Jan 09, 2023)](#changes_3.3.4-changes-(jan-09,-2023))
*   [3.3.3 changes (Aug 29,​ 2022)](#changes_3.3.3-changes-(aug-29,​-2022))
*   [3.3.2 changes (Aug 28, 2022)](#changes_3.3.2-changes-(aug-28,-2022))
*   [3.3.1 changes (July 13, 2022)](#changes_3.3.1-changes-(july-13,-2022))
*   [3.3.0 changes (July 5, 2022)](#changes_3.3.0-changes-(july-5,-2022))

##### Appendix

*   [Harlowe 4.0 roadmap](#appendix_harlowe-4.0-roadmap)
*   [Operators and order-of-operations](#appendix_operators-and-order-of-operations)
*   [Previous Harlowe versions and manuals](#appendix_previous-harlowe-versions-and-manuals)

☀️🌙

JavaScript needs to be enabled to use this code sample preview pane.

<==> Click on ▶ on code samples in this documentation to preview the resulting Twine passage here! Also, click on the left border ← to view this preview with full window width. /\* Fix URL anchor scrolling on page load by disabling window scroll until after \*/ window.\_scroll = window.scroll; window.scroll = $.noop; window.previewPassage = function(text, el) { State.reset(); Passages.clear(); Passages.set("Test", Passages.create($('<div name="Test" tags="">').text(text))); let Y = scrollY; Engine.goToPassage("Test"); // Cancel the scrolling caused by goToPassage() scroll(0, Y); }; /\* Debug Mode variables panel transplant \*/ $('tw-debugger').insertAfter('#preview')\[$('html').is('.theme-dark') ? "addClass" : "removeClass"\]('theme-dark'); /\* Restore the native scroll() after passage load \*/ setTimeout(function() { window.scroll = window.\_scroll; delete window.\_scroll; });

Or, type some Harlowe code in this text area, and click ▶ to see it render. \\(set: \_style to (text-style:"buoy"), $word to "this")(enchant:$word, \_style)\\ This panel ↓ will show any variables that are set by the code, as well as any enchantments applied to the prose using enchantment macros like \`(enchant:)\`. Press "Debug View" and then click the 🔍 icons to see a step-by-step guide of how Harlowe processed a macro.

try { const setting = (localStorage.getItem('darkMode') || '').toLowerCase(); if (setting === "true" || (setting === '' && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList += "theme-dark"; } } catch(e) {}

Introduction
============

[](#introduction_report-bugs-and-suggest-features)Report bugs and suggest features
----------------------------------------------------------------------------------

If you think you've found a bug to report in Harlowe, want to make a feature suggestion, or wish to see what future features are already planned, simply visit [the project's issues page](https://foss.heptapod.net/games/harlowe/-/issues).

I'd appreciate it if you could adhere to the following guidelines when reporting bugs or proposals:

*   Please try to check that the bug has not been reported before, using the issue search feature.
*   Please do not report more than one bug per issue - make as many issues as you need.
*   Please be as detailed as possible in the issue title.
*   But, at the same time, avoid overly general anecdotes or descriptions of your work process leading to the bug (like "I'm trying to write an inventory system") - try to focus on what you expected the code to do, and what you got instead.
*   You _should_ report all cases where a new version of Harlowe caused your formerly-working story to suddenly not work, as long as a possible reason was not mentioned anywhere in the [changelog](#section_changes).
*   Do include code samples, but please write them inside code blocks (using the Code `</>` button in the toolbar).
*   Don't change the "Assignee", "Milestone" or "Due Date".
*   If your issue is a bug, please set the "Label" to "Bug".
*   You _may_ suggest feature requests, but please set the issue's "Label" to "Proposal".

### File reports for this documentation, too!

Harlowe is maintained by one person (me) out of a single interactive fiction language development bedroom. As such, I only have a limited number of staff to keep watch over the documentation and the program. I appreciate all reports about documentation slip-ups, typos, outdated advice, flat-out incorrect examples, and so forth.

### A brief note of thanks

As of July 2020, Harlowe's issues page and hosting is now at [foss.heptapod.net](https://foss.heptapod.net). Big thanks to [Octobus SAS](https://octobus.net/) for providing this free open-source software hosting service, and [Clever Cloud SAS](https://www.clever-cloud.com/) for that service's hosting.

[](#introduction_unstable-4.0-builds-now-available!)Unstable 4.0 builds now available!
--------------------------------------------------------------------------------------

By popular demand: you can now access the latest **in-progress** build of Harlowe 4.0, for your own personal use as an installable story format in Twine. Be warned that Harlowe 4 has _intentional incompatibility_ with Harlowe 3 code, Harlowe 3 CSS, and Harlowe 3 browser support, and that all use of these builds is entirely without warranty! Please scrutinise the [change log](#section_changes) to fully understand what changes Harlowe 4 brings.

[Click here to get the unstable build (last updated {{UNSTABLE}})](harlowe4-unstable.js)

Unstable builds are updated _at least within a week of all new developments_.

[](#introduction_what-harlowe-does-best)What Harlowe does best
--------------------------------------------------------------

Harlowe is one of a small handful of story formats offered in Twine. Each has its own specific focus and audience. Harlowe is designed for the following kind of author and work.

### No HTML, Javascript or CSS experience needed

At its core, Harlowe's language is designed to assist authors with no familiarity with HTML, Javascript or CSS. Rather than requiring knowledge of all three languages, Harlowe provides a single language that fulfills the basic needs of all three and whose parts seamlessly integrate.

Use layout syntax, such as columns and aligners, to provide structure and composition to your prose. Harlowe contains special values that represent one or more CSS styles bundled together for convenience. Attach them to single runs of prose to provide the equivalent of inline styles, or use variables or the [(change:)](#macro_change) or [(enchant:)](#macro_enchant) macros to globally affect certain labeled structures. Harlowe's coding language, inside macro calls, smooths over the pitfalls and discrepancies of Javascript - better type-checking and clearer syntax prevents obvious datatype bugs like `1 + "1"`, `1 == "1"` or `if (a = 1)`, more plentiful error messages replace silent failures and junk values like `NaN` or `undefined`, different data structures each use the same setting, getting and checking syntax, and the styling datatypes are easily handled alongside other data. Styles can be combined by simply adding them together, for instance, and computed based on the current game state.

Though, if you already have HTML, Javascript or CSS experience, and would prefer to leverage that experience as you create, you may wish to use [SugarCube](https://www.motoslave.net/sugarcube/2/) instead, which provides more direct access to the page's HTML elements and to the Javascript language.

### Dynamic hypertext as a focus

I have a deep admiration for the storytelling potential of early and recent hypertext mediums, such as HyperCard, Shockwave, Flash, and early HTML fiction, and I have kept their versatility in mind when creating Harlowe. Harlowe heavily encourages you to think of a page as a dynamic interactive space, not just a sequence of prose followed by choices. Harlowe encourages you to place links and interactive elements in the midst of prose, not just at the end, and to use them to change the prose in surprising and unusual ways - inserting or removing text in a previously-read paragraph, changing the styling of words, changing just the link itself, and other such effects to reveal new meaning in the text and communicate your story in a manner unique to hypertext. If you would like to explore the storytelling potential of hypertext, it is my dear hope that you will find Harlowe satisfying.

Though, if you would prefer a more traditional, branching style of interactive prose writing, you may wish to use [Chapbook](https://klembot.github.io/chapbook/guide/) or a non-Twine language like [Ink](https://www.inklestudios.com/ink/) instead.

### Programming depth available when you need it

Don't let the preceding sections lead you to believe Harlowe is narrowly limited as a programming environment. Despite crafting Harlowe as a language apart from Javascript, I've nonetheless equipped it with tools and utilities to handle dense data manipulation. A wide collection of conversion macros and syntactic structures exist to convert and manipulate arrays, strings, and maps, including a lambda syntax, and the [(macro:)](#macro_macro) macro lets you sculpt a personal sub-language within Harlowe. In addition, the Debug Mode gives you a live view of variables, styles, and game state as the story progresses. While these are not meant to be immediately useful to the first-time author, one who has grown more ambitious in their time with Harlowe may call upon them to make more computationally complicated stories, such as basic role-playing games. As you grow in programming confidence, Harlowe can follow you.

### No specific simulation elements

Interactive fiction is commonly associated with text adventure games with a high degree of spatial simulation and procedurally generated text, where you control a player-character and manipulate objects and navigate rooms. Harlowe (and the other Twine story formats) is intended for a much wider variety of stories with a much lighter amount of interaction with the story's inner world, and as such it does not contain pre-built programming constructs for rooms, objects, inventories, manipulation verbs, and other common design affordances of text adventures. If you would prefer to write a story with a higher degree of simulation and interaction, you may wish to use a non-Twine language like [Inform](http://inform7.com/) instead.

[](#introduction_three-fundamentals-of-harlowe)Three fundamentals of Harlowe
----------------------------------------------------------------------------

Harlowe is a markup language that you can apply to your Twine prose to make the prose interactive, non-linear, and game-like. This language's full contents of features may appear daunting, but all of its features revolve around the following three simple concepts, which, when understood, unlock understanding the rest of the language:

### 1\. Macros produce either commands, or data values

A macro is the basic unit of code. It is either a **command** that changes the game's state or the prose in some way, such as the [(set:)](#macro_set) macro that saves data to a variable, or the [(link-goto:)](#macro_link-goto) macro that puts a link inside the prose, or it produces a **data value**, such as a number or a styling instruction. All of Harlowe's macros are either one or the other.

    (set: $companion to "Gallifrey") This is a command.
    (print: $companion) This is a command.
    (lowercase: "SCREECH") This is a value (a string).
    (a: 3,4,5) This is a value (an array).
    (for: each _num, 1,2,3) This is a value (a changer).
    

### 2\. Attach values to hooks of text to change the text

To use macros to change your story's prose, you must place that prose between brackets, which make a **hook**. You can then attach one or more values to the front of the hook to change the prose. This syntactic structure is used for everything from text styling with [(text-style:)](#macro_text-style), to the narrative-branching of the [(if:)](#macro_if) macro, to more complex commands like [(event:)](#macro_event) or [(for:)](#macro_for).

    (set: $ringStolen to false)
    (if: $ringStolen)[The ring, as expected, is gone.]
    

In the above example, an "if" statement is created by attaching the [(if:)](#macro_if) changer value to the square-bracketed hook.

### 3\. You can use anything that produces a value as if it was that value

    (set: $text to "VALID")
    (set: $slide to (transition:"slide-right"))
    
    (lowercase: "VALID") This is valid.
    (lowercase: "VAL" + "ID") This is valid.
    (lowercase: "VAL" + (uppercase: "id")) This is valid.
    (lowercase: $text) This is valid.
    
    (transition:"slide-right")[VALID] This is valid.
    $slide[VALID] This is valid.
    

It is important, when you read example code in this documentation, not to assume that you're restricted to very specific ways of writing macros and expressions. Just because an example uses a variable, doesn't mean you can't instead use a plain value, or a macro that produces that value, in that exact same place. Variables and macros are interchangeable with the values they contain or produce – a variable containing a number can be used anywhere that a number could be used, as can a macro that produces a number. This means you have a wide range of expressiveness in writing your story's code - you can save values into variables simply to save having to write them in full repeatedly, and you can use data-choosing macros like [(either:)](#macro_either), [(cond:)](#macro_cond), [(nth:)](#macro_nth) and so forth nearly anywhere you want. Use whatever form is most suited to making your prose readable!

[](#introduction_example-stories)Example stories
------------------------------------------------

Here are a few example stories, written by me, Leon, and designed to be downloaded and opened in the Twine editor for reference and experimentation. These stories' prose and Harlowe code (though, of course, not the Harlowe engine itself) are entirely public domain - use their contents for your own projects as you wish.

### [Quack of Duckness](./Quack_of_Duckness.html) [\[download\]](./Quack_of_Duckness.html).

This is a parody of the [example story](https://klembot.github.io/chapbook/examples/cloak-of-darkness.html) for the Chapbook story format, "Cloak of Darkness". This demonstrates several basic Harlowe features:

*   Using variables to track the player's actions.
*   Using [(if:)](#macro_if) with the "visits" keyword to display text only once.
*   Using [(click-append:)](#macro_click-append) to add a link in the middle of a paragraph.
*   Using [(transition:)](#macro_transition) to alter the transition of a hook, both as an attached changer and as an additional value given to [(click-append:)](#macro_click-append).
*   Using a boolean variable to enable a hook, similar to [(if:)](#macro_if).
*   Using escaped line break syntax to control [whitespace](#markup_whitespace) in the story.
*   Using "footer" tagged passages to place text beneath every passage in the story.
*   Using [(enchant:)](#macro_enchant) with [(t8n-depart:)](#macro_t8n-depart) and [(t8n-arrive:)](#macro_t8n-arrive) inside a "footer" tagged passage to affect the transition of every passage link in the story.
*   Using [(append:)](#macro_append) with the ?sidebar hook name to add icons to the sidebar.

Additionally, it contains an extra passage with a "character creator" board, which allows players to spend statistic points to increase character attributes, in the manner of an RPG. This board makes use of these features:

*   Using named hooks and [(rerun:)](#macro_rerun) to alter a statistical readout whenever the player modifies one of the statistics.
*   Using temp variables to store complicated commands such as [(link:)](#macro_link) that need to be used multiple times in the passage.

### [The Basics of TBC](./The_Basics_of_TBC.html) [\[download\]](./The_Basics_of_TBC.html).

This demonstrates how one would implement a very simple 1-vs-1 turn-based-combat (TBC) engine in Harlowe, in the manner of an RPG. It provides examples of the following features:

*   Using [(click:)](#macro_click) with ?page to only advance the story when the mouse is clicked.
*   Using custom macros to reduce the amount of overall code that needs to be written.
*   Using temp variables to store calculated values that are used further down the passage.
*   Using datamaps (created via [(dm:)](#macro_dm)) to greatly simplify the process of defining unique turn-based-combat opponents, as well as reducing the amount of variables that need to be created to store data relating to the battle's state.
*   Using arrays (created via [(a:)](#macro_a)) to store sequential data, and using [(move:)](#macro_move) and [(rotated:)](#macro_rotated) to change the first value of those arrays.

### [Styling with Enchantments](./Styling_with_Enchantments.html) [\[download\]](./Styling_with_Enchantments.html).

This demonstrates a number of ways you can style your stories without needing to use CSS stylesheets. All of the styles in this story are coded in separate passages, and their code is free to use in your stories. They provide examples of the following features:

*   Using [(enchant:)](#macro_enchant) with ?page, ?passage and ?link to alter the visual presentation of various parts of the page.
*   Using [(hover-style:)](#macro_hover-style) to change how links appear when the mouse hovers over them.
*   Using [(background:)](#macro_background) with [(gradient:)](#macro_gradient) and [(stripes:)](#macro_stripes).
*   Using [(hide:)](#macro_hide) and [(replace:)](#macro_replace) with ?sidebar to alter the sidebar.

Enjoy the examples!

Editing and debugging
=====================

[](#interface_editor-toolbar)Editor toolbar
-------------------------------------------

Harlowe is intended for use inside [Twine 2](https://twinery.org/2), which installs with it included as the default format. When Harlowe is selected as the current story format for your story (via a dropdown menu in the Details tab of the Story menu), then it will augment Twine's passage editor with extra toolbar buttons. These buttons either allow markup to be quickly inserted into the passage code, or provide some other kind of assistance in editing. These buttons are outlined as follows.

*   ![](data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%2014%2014%27%20width%3D%27108%27%20height%3D%2780%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Ctext%20y%3D%2711%27%20x%3D%27-3%27%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20style%3D%27/*harlowe-3*/font-weight%3Abold%3Bfont-size%3A80%25%27%3EB%3C/text%3E%3Ctext%20y%3D%278%27%20x%3D%274%27%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20style%3D%27/*harlowe-3*/font-style%3Aitalic%3Bfont-size%3A80%25%27%3EI%3C/text%3E%3Ctext%20y%3D%2713%27%20x%3D%277%27%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20style%3D%27/*harlowe-3*/text-decoration%3Aline-through%3Bfont-size%3A80%25%27%3ES%3C/text%3E%3C/svg%3E) **Text styles**: each item in this dropdown menu (or, depending on version, set of buttons) wraps the selected text in one of the [markup styles](#markup_style) Harlowe offers. Selecting "More Styles" will produce a dialog box that allows you to mix and match a wider variety of styles, displaying a preview pane containing your chosen combination. That dialog, when OK is clicked, will wrap the selected text in a hook (or, if "affect the entire remainder of the passage or hook" was selected, adds an [unclosed hook](#markup_unclosed-hook))with an attached [(text-style:)](#macro_text-style) macro call that enables them.
*   ![](data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%2014%2014%27%20width%3D%2780%27%20height%3D%2780%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22X%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22hsla%280%2C100%25%2C50%25%2C0.5%29%22/%3E%3Cstop%20offset%3D%2216%25%22%20stop-color%3D%22hsla%2830%2C100%25%2C50%25%2C0.5%29%22/%3E%3Cstop%20offset%3D%2233%25%22%20stop-color%3D%22hsla%2860%2C100%25%2C50%25%2C0.5%29%22/%3E%3Cstop%20offset%3D%2250%25%22%20stop-color%3D%22hsla%28120%2C100%25%2C50%25%2C0.5%29%22/%3E%3Cstop%20offset%3D%2266%25%22%20stop-color%3D%22hsla%28180%2C100%25%2C50%25%2C0.5%29%22/%3E%3Cstop%20offset%3D%2283%25%22%20stop-color%3D%22hsla%28240%2C100%25%2C50%25%2C0.5%29%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22hsla%28320%2C100%25%2C50%25%2C0.5%29%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%226%22%20fill%3D%22url%28%27%23X%27%29%22/%3E%3C/svg%3E) **Colour**: this produces a dialog box that lets you set the text colour and opacity, as well as set the background to a flat colour or a linear gradient. Choosing OK will do one of a number of things depending on which "affect" option was selected.
    *   When affecting "the attached hook", it wraps the selected text in a hook with an attached [(bg:)](#macro_bg) and/or [(text-colour:)](#macro_text-colour) changer.
    *   When affecting "the remainder of the passage or hook", it adds an [unclosed hook](#markup_unclosed-hook) with an attached [(bg:)](#macro_bg) and/or [(text-colour:)](#macro_text-colour) changer.
    *   When affecting "the entire passage" or "the entire page", it adds an [(enchant:)](#macro_enchant) macro call targeting either the ?Passage or ?Page hook name, and applying a [(bg:)](#macro_bg) and/or [(text-colour:)](#macro_text-colour) changer.
*   ![](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20576%20512%22%20width%3D%2220%22%20height%3D%2220%22%3E%3Cpath%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20d%3D%22M240%20416h-32a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h32a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zm-96%200h-32a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h32a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zm192%200h-32a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h32a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zm96-192h-32a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h32a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zm0%2096h-32a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h32a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zm0%2096h-32a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h32a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zm0-288h-32a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h32a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zm0-96H32A32%2032%200%200%200%200%2064v400a16%2016%200%200%200%2016%2016h32a16%2016%200%200%200%2016-16V96h368a16%2016%200%200%200%2016-16V48a16%2016%200%200%200-16-16z%22/%3E%3C/svg%3E) **Borders**: this produces a dialog box that lets you specify HTML border styles for all four sides of a block of text. Choosing OK will do one of a number of things depending on which "affect" option was selected.
    *   When affecting "the attached hook", it wraps the selected text in a hook with an attached [(b4r:)](#macro_b4r), [(b4r-size:)](#macro_b4r-size) and/or [(b4r-colour:)](#macro_b4r-colour) changer.
    *   When affecting "the remainder of the passage or hook", it adds an [unclosed hook](#markup_unclosed-hook) with an attached [(b4r:)](#macro_b4r), [(b4r-size:)](#macro_b4r-size) and/or [(b4r-colour:)](#macro_b4r-colour) changer.
    *   When affecting "the entire passage", it adds an [(enchant:)](#macro_enchant) macro call targeting the ?Passage hook name, and applying a [(b4r:)](#macro_b4r), [(b4r-size:)](#macro_b4r-size) and/or [(b4r-colour:)](#macro_b4r-colour) changer.
*   ![](data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%2014%2014%27%20width%3D%2780%27%20height%3D%2780%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Ctext%20y%3D%2714%27%20x%3D%27-3%27%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20style%3D%27/*harlowe-3*/transform%3Arotate%28-30deg%29%3Bfont-family%3Aserif%3B%27%3ER%3C/text%3E%3C/svg%3E) **Rotated text**: this produces a dialog box that lets you rotate a block of text through 3 geometric axes. Choosing OK will wrap the selected text in a hook (or, if "affect the entire remainder of the passage or hook" was selected, adds an [unclosed hook](#markup_unclosed-hook)) with an attached [(text-rotate-x:)](#macro_text-rotate-x), [(text-rotate-y:)](#macro_text-rotate-y) and/or [(text-rotate-z:)](#macro_text-rotate-z) changer.
*   ![](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20576%20512%22%20width%3D%2220%22%20height%3D%2220%22%3E%3Cpath%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20d%3D%22M61.77%20401l17.5-20.15a19.92%2019.92%200%200%200%205.07-14.19v-3.31C84.34%20356%2080.5%20352%2073%20352H16a8%208%200%200%200-8%208v16a8%208%200%200%200%208%208h22.83a157.41%20157.41%200%200%200-11%2012.31l-5.61%207c-4%205.07-5.25%2010.13-2.8%2014.88l1.05%201.93c3%205.76%206.29%207.88%2012.25%207.88h4.73c10.33%200%2015.94%202.44%2015.94%209.09%200%204.72-4.2%208.22-14.36%208.22a41.54%2041.54%200%200%201-15.47-3.12c-6.49-3.88-11.74-3.5-15.6%203.12l-5.59%209.31c-3.72%206.13-3.19%2011.72%202.63%2015.94%207.71%204.69%2020.38%209.44%2037%209.44%2034.16%200%2048.5-22.75%2048.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496%20224H176a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h320a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zm0-160H176a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h320a16%2016%200%200%200%2016-16V80a16%2016%200%200%200-16-16zm0%20320H176a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h320a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zM16%20160h64a8%208%200%200%200%208-8v-16a8%208%200%200%200-8-8H64V40a8%208%200%200%200-8-8H32a8%208%200%200%200-7.14%204.42l-8%2016A8%208%200%200%200%2024%2064h8v64H16a8%208%200%200%200-8%208v16a8%208%200%200%200%208%208zm-3.91%20160H80a8%208%200%200%200%208-8v-16a8%208%200%200%200-8-8H41.32c3.29-10.29%2048.34-18.68%2048.34-56.44%200-29.06-25-39.56-44.47-39.56-21.36%200-33.8%2010-40.46%2018.75-4.37%205.59-3%2010.84%202.8%2015.37l8.58%206.88c5.61%204.56%2011%202.47%2016.12-2.44a13.44%2013.44%200%200%201%209.46-3.84c3.33%200%209.28%201.56%209.28%208.75C51%20248.19%200%20257.31%200%20304.59v4C0%20316%205.08%20320%2012.09%20320z%22/%3E%3C/svg%3E) **List and line items**: the items in this dropdown menu insert syntax elements that affect a single line: the [bulleted list markup](#markup_bulleted-list), the [numbered list markup](#markup_numbered-list), a [horizontal rule](#markup_horizontal-rule), or the level 1 [heading markup](#markup_heading). These each have very simply and easy-to-memorise syntax, but this menu exists in case you forget.
*   ![](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20576%20512%22%20width%3D%2220%22%20height%3D%2220%22%3E%3Cpath%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20d%3D%22M432%20160H16a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h416a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zm0%20256H16a16%2016%200%200%200-16%2016v32a16%2016%200%200%200%2016%2016h416a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zM108.1%2096h231.81A12.09%2012.09%200%200%200%20352%2083.9V44.09A12.09%2012.09%200%200%200%20339.91%2032H108.1A12.09%2012.09%200%200%200%2096%2044.09V83.9A12.1%2012.1%200%200%200%20108.1%2096zm231.81%20256A12.09%2012.09%200%200%200%20352%20339.9v-39.81A12.09%2012.09%200%200%200%20339.91%20288H108.1A12.09%2012.09%200%200%200%2096%20300.09v39.81a12.1%2012.1%200%200%200%2012.1%2012.1z%22/%3E%3C/svg%3E) **Alignment and Columns**: this dropdown menu features two items.
    *   **Alignment** produces a dialog box that lets you adjust the horizontal margins, width and alignment of a block of text. Choosing OK will wrap the selected text in a hook (or, if "affect the entire remainder of the passage or hook" was selected, adds an [unclosed hook](#markup_unclosed-hook)) with an attached [(align:)](#macro_align) and/or [(box:)](#macro_box) changer.
    *   **Columns** produces a dialog box that lets you define two or more columns of text, each with their own width and margins. Choosing OK will insert the [column markup](#markup_column) into the passage, replacing any selected text.
*   ![](data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%2014%2014%27%20width%3D%2780%27%20height%3D%2780%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Ctext%20y%3D%2710%27%20x%3D%270%27%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20style%3D%27/*harlowe-3*/font-weight%3Abold%3Bfont-size%3A12px%27%3E%7B%20%7D%3C/text%3E%3C/svg%3E) **Collapse [whitespace](#markup_whitespace)**: this produces a dialog box that lets you choose between wrapping the selected text in the [collapsing whitespace markup](#markup_collapsing-whitespace), or insert the [unclosed collapsing whitespace markup](#markup_unclosed-collapsing-whitespace). The chosen option is performed when clicking OK.
*   ![](data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%2014%2014%27%20width%3D%2780%27%20height%3D%2780%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Ctext%20y%3D%2712%27%20x%3D%271%27%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20style%3D%27/*harlowe-3*/font-size%3A11px%27%3EVb%3C/text%3E%3C/svg%3E) **Verbatim**: this wraps the selected text in the [verbatim markup](#markup_verbatim). If the selected text contains any grave `` ` `` marks, then enough `` ` `` marks will be used to unambiguously wrap it.
*   ![](data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%2014%2014%27%20width%3D%2780%27%20height%3D%2780%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Ctext%20y%3D%2710%27%20x%3D%27-1%27%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20style%3D%27/*harlowe-3*/font-weight%3Abold%3Bfont-size%3A11px%27%3E%26%2310216%3B%21-%3C/text%3E%3C/svg%3E) **HTML Comments**: this wraps the selected text in the [HTML comments markup](#markup_html).
*   **Macro**: this dropdown menu can be used to choose from a number of "wizards" (dialog forms) that help you insert specific Harlowe macros that perform a certain common task. **Note** that these wizards only offer a limited number of features, and that understanding the relevant Harlowe macros, and writing their calls yourself, will provide more sophisticated control over them.
    *   **Link**: this wizard lets you design a link (or specify that the page can be clicked), and the action to perform when clicking it.
    *   **If**: this wizard lets you design a condition, involving various actions the player may have performed, or the current state of a variable, that causes a hook to be shown.
    *   **Input**: this wizard lets you design either an [(input-box:)](#macro_input-box) command, a [(force-input-box:)](#macro_force-input-box) command, a [(dropdown:)](#macro_dropdown) command, a [(checkbox:)](#macro_checkbox) command, or a [(dialog:)](#macro_dialog) command, each of which can have their player-inputted value bound to a variable.
    *   **Hook**: this very simple dialog lets you create a [named hook](#markup_named-hook).
    *   **Value**: this wizard lets you design a [(set:)](#macro_set) command, which sets a single variable to a specific value.

Be aware for all of the above that, once OK is clicked and code has been placed, there isn't any way to "unmake" the code and return to the dialog that produced it. So, if you want to change some aspect of the resulting code, you'll have to edit it as-is.

The following buttons are toggleable - they enable or disable special editing modes or features.

*   ![](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20576%20512%22%20width%3D%2220%22%20height%3D%2220%22%3E%3Cpath%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20d%3D%22M288%20144a110.94%20110.94%200%200%200-31.24%205%2055.4%2055.4%200%200%201%207.24%2027%2056%2056%200%200%201-56%2056%2055.4%2055.4%200%200%201-27-7.24A111.71%20111.71%200%201%200%20288%20144zm284.52%2097.4C518.29%20135.59%20410.93%2064%20288%2064S57.68%20135.64%203.48%20241.41a32.35%2032.35%200%200%200%200%2029.19C57.71%20376.41%20165.07%20448%20288%20448s230.32-71.64%20284.52-177.41a32.35%2032.35%200%200%200%200-29.19zM288%20400c-98.65%200-189.09-55-237.93-144C98.91%20167%20189.34%20112%20288%20112s189.09%2055%20237.93%20144C477.1%20345%20386.66%20400%20288%20400z%22/%3E%3C/svg%3E) **Proofreading View**: this dims all of the passage code except for plain text, and string data. This is meant for proofreading the written prose of your passage, while reducing the distraction of colourful macro code. Because string data often carries fragments or portions of prose for display in the story (such as alternatives given to [(nth:)](#macro_nth) or [(either:)](#macro_either)), those remain undimmed along with plain text. While you may wish to use the "Proof" feature in Twine 2 for more thorough proofreading, this is ideal for quicker reviews and corrections of individual passages.
*   ![](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20576%20512%22%20width%3D%2220%22%20height%3D%2220%22%3E%3Cpath%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20d%3D%22M256%2032C114.6%2032%200%20125.1%200%20240c0%2049.6%2021.4%2095%2057%20130.7C44.5%20421.1%202.7%20466%202.2%20466.5c-2.2%202.3-2.8%205.7-1.5%208.7S4.8%20480%208%20480c66.3%200%20116-31.8%20140.6-51.4%2032.7%2012.3%2069%2019.4%20107.4%2019.4%20141.4%200%20256-93.1%20256-208S397.4%2032%20256%2032z%22/%3E%3C/svg%3E) **Coding Tooltips**: enabled by default, this provides explanatory tooltips when you rest the editor cursor over a Harlowe macro, hook, or coding structure which isn't plain text. Once you have a decent grasp of how Harlowe code works, you can toggle these off to reduce editing distractions.

The remaining buttons offer additional editing utilities.

*   ![](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20576%20512%22%20width%3D%2220%22%20height%3D%2220%22%3E%3Cpath%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20d%3D%22M505%20442.7L405.3%20343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3%2044-79.7%2044-128C416%2093.1%20322.9%200%20208%200S0%2093.1%200%20208s93.1%20208%20208%20208c48.3%200%2092.7-16.4%20128-44v16.3c0%206.4%202.5%2012.5%207%2017l99.7%2099.7c9.4%209.4%2024.6%209.4%2033.9%200l28.3-28.3c9.4-9.4%209.4-24.6.1-34zM208%20336c-70.7%200-128-57.2-128-128%200-70.7%2057.2-128%20128-128%2070.7%200%20128%2057.2%20128%20128%200%2070.7-57.2%20128-128%20128z%22/%3E%3C/svg%3E) **Find and Replace**: this opens a rudimentary find/replace dialog, such as can be found in most text editors. Entering text in the "Find" box causes all instances to be highlighted purple inside the editor. The ↑ and ↓ buttons change the "current match" (which is the match that will be replaced first using the "Replace" button) as well as scrolling it into view. You can use the dropdown to limit matches to either passage prose (to prevent macro names or keywords like `it` from being included), code (to prevent text from being included), or the current selection. Finally, you can make the search case-sensitive using a checkbox. Clicking Done will close the dialog box and remove the search highlighting.
*   ![](data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%2014%2014%27%20width%3D%2780%27%20height%3D%2780%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Ctext%20y%3D%2714%27%20x%3D%273%27%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20style%3D%27/*harlowe-3*/font-weight%3Abold%3Bfont-size%3A19px%3B%27%3E%3F%3C/text%3E%3C/svg%3E) **Manual**: opens this web page.
*   ![](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20576%20512%22%20width%3D%2220%22%20height%3D%2220%22%3E%3Cpath%20fill%3D%27rgb%28179%2C%20179%2C%20179%29%27%20d%3D%22M495.9%20166.6c3.2%208.7%20.5%2018.4-6.4%2024.6l-43.3%2039.4c1.1%208.3%201.7%2016.8%201.7%2025.4s-.6%2017.1-1.7%2025.4l43.3%2039.4c6.9%206.2%209.6%2015.9%206.4%2024.6c-4.4%2011.9-9.7%2023.3-15.8%2034.3l-4.7%208.1c-6.6%2011-14%2021.4-22.1%2031.2c-5.9%207.2-15.7%209.6-24.5%206.8l-55.7-17.7c-13.4%2010.3-28.2%2018.9-44%2025.4l-12.5%2057.1c-2%209.1-9%2016.3-18.2%2017.8c-13.8%202.3-28%203.5-42.5%203.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1%20425.9c-8.8%202.8-18.6%20.3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4%206.4-24.6l43.3-39.4C64.6%20273.1%2064%20264.6%2064%20256s.6-17.1%201.7-25.4L22.4%20191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9%209.7-23.3%2015.8-34.3l4.7-8.1c6.6-11%2014-21.4%2022.1-31.2c5.9-7.2%2015.7-9.6%2024.5-6.8l55.7%2017.7c13.4-10.3%2028.2-18.9%2044-25.4l12.5-57.1c2-9.1%209-16.3%2018.2-17.8C227.3%201.2%20241.5%200%20256%200s28.7%201.2%2042.5%203.5c9.2%201.5%2016.2%208.7%2018.2%2017.8l12.5%2057.1c15.8%206.5%2030.6%2015.1%2044%2025.4l55.7-17.7c8.8-2.8%2018.6-.3%2024.5%206.8c8.1%209.8%2015.5%2020.2%2022.1%2031.2l4.7%208.1c6.1%2011%2011.4%2022.4%2015.8%2034.3zM256%20336c44.2%200%2080-35.8%2080-80s-35.8-80-80-80s-80%2035.8-80%2080s35.8%2080%2080%2080z%22/%3E%3C/svg%3E) **Editor Preferences**: provides options for toggling some of the Passage Editor's Harlowe-specific features on and off.

Finally, while most of these buttons don't have visible labels, hovering over one will produce a small tooltip revealing its name.

[](#interface_editor-keyboard-shortcuts)Editor keyboard shortcuts
-----------------------------------------------------------------

When using the passage editor in Twine 2, the following keyboard (and mouse) shortcuts are available. Note that many of these (in particular, those involving cursor movement and selections) are shared across all Twine story formats, not just Harlowe. In the notation below, substitute Ctrl for ⌘ if you are using MacOS.

Keyboard shortcut

Purpose

Ctrl+Left Click

Create additional text cursors. These cursors all output the same text at their location when you type, and can be moved simultaneously. Use this feature to edit or insert the same text in multiple locations.

Ctrl+Left Drag

Create multiple, disconnected text selections without deselecting the current selections. These can all be edited simultaneously by typing, like single selections.

Ctrl+D

Delete the entire line that the cursor is on.

Ctrl+Home

Move the cursor to the top of the passage.

Ctrl+End

Move the cursor to the bottom of the passage.

Ctrl+Left

Move the cursor to the start of the previous "clump" of characters. These are either words (clumps of alphanumeric characters), runs of punctuation, or runs of multiple [whitespace](#markup_whitespace) characters.

Ctrl+Right

Move the cursor to the end of the next "clump" of characters. These are either words (clumps of alphanumeric characters), runs of punctuation, or runs of multiple whitespace characters.

Alt+Left

Move the cursor to the start of the current line.

Alt+Right

Move the cursor to the end of the current line.

Ctrl+B

Wrap the current selected text in the "bold" style markup.

Ctrl+I

Wrap the current selected text in the "italic" style markup.

Ctrl+-

Wrap the current selected text in the "strikethrough" style markup.

Ctrl+.

Wrap the current selected text in the "superscript" style markup.

Ctrl+F

Open the Find/Replace panel.

Ctrl+G

Go to the next Find/Replace match (scroll it onto the screen, and make it the target of the next "Replace" operation).

Ctrl+Shift+G

Go to the previous Find/Replace match.

Ctrl+H

Replace the current Find/Replace match.

In addition to these, the most basic text editor operations (like using Ctrl-Z to undo, Ctrl-Y or Ctrl-Shift-Z to redo, Ctrl+A to select all of the text, Shift+Left or Shift+Right to adjust the current selection, dragging the current selected text to reposition it, and the like) are, of course, also available.

[](#interface_debug-mode)Debug Mode
-----------------------------------

If you select "Test" or use the "Test From Here" feature in the Twine editor, or use the [(debug:)](#macro_debug) macro, Harlowe will enter Debug Mode. Debug Mode provides a number of useful features for testing your story, examining how it runs, and checking what variables contain.

The exact differences between normal play and Debug Mode are as follows.

*   At the start of the story, passages tagged with `debug-startup` will run, in alphabetical order by their passage name, after passages tagged `startup`.
*   In every passage, passages tagged with `debug-header` will be displayed, in alphabetical order by their passage name, after passages tagged `header`, and passages tagged with `debug-footer` will be displayed, in alphabetical order by their passage name, after passages tagged `footer`.
*   Error messages will have a 🔍 button visible on them, allowing a replay to be watched (see below). This can be toggled on and off in Debug Mode's options.
*   The Debug Mode panel (depicted below) will be active.

Generally speaking, Debug Mode is not intended to be used by your story's players, and you aren't expected to distribute stories with Debug Mode enabled.

#### Debug Mode panel:

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsMAAABTCAYAAAB6dQooAAAjp0lEQVR4Xu2dCbAWxbXHTzSFIGoURJRFjYqi5ZNFjYYiwaeiBgiKkSgCij6JERVJuSAaEOUlEdQKbhCDIi5AiCsgEPWhYijhGRGljBK3EhGQRQHBsLwo7/tX5dTp6r4zc+/Mt925/38Vpff75uuZ7j5z5tenT/d8R0R2SSg599xz5cQTT5Sjjz4a/yRvoiiKoiiKoqgAhk8//XQZMWKEtGnTRhqMKIqiKIqiKMLwTTfdJBdffLFAq1atkkceeURef/11ee+996RhiqIoiqIoivrFL34hf/zjH/N2PQbDPgj/9re/BQhL7kVRFEVRFEURhpEacf/99wt0zjnnIBKcg0akymCE7HOK9sf2pdh/bDfWvf7D8EsvvSStW7d2I8L5h2GKMELR/ii2L/uPYrsRhgu7Ruz63e9+hxxhOfXUUxtMeJ0ijFC0P4rty/6j2G5CGL799tt39enTR6PCDQeGKcIIRfuj2L7sP4rtRhieOXPmrvbt22uucMOBYYowQtH+KLYv+49iuxGG//GPf+zCH0cddVQVXjRV6B+pbf/MmTNHjjjiCBk1apTMmDGDMFKmfqEIa2xfqrw+2MT+Y7vdcccd0rt3b5k1a5Zcf/31VVX3adOmSbt27aRVq1YyZcoUufnmmwV69tln8WI3+fjjj+XVV1/F5w0bhk844QS59NJLBdFpLOKDvvzyS3n//fdl5MiR8umnn0pNuvbaa5HjDPgTaNu2bdKxY0eJ06JFi6RZs2bSv39/eeONN0TlX8/UqVNxDfLDH/6wROBEGD744INlzJgx0qFDB2nSpAnaWxYuXCj33nsv+rzWN3+MYh0DYZiwBhvq2rUrfAL8h7z99tuwP/iGWttAgmAf+W/f7D49to+OP/54LQf9hPUt2P9eHn74YS2ryCIMn3nmmXLZZZcBYuCfBUK7r1y5UubOnevUjTB8/vnny2233Sa1lQFr/mFY7cYV4Ldx48aAY/cz+dGPftSQYdgADvrwww8Fwt/aiIMGDVI4UoiSiRMn+r8B5CbC64QJE+S0007DSEVuvfVWqUm33HKLXHjhhTJ//nwZMmRIicCJMKw7mKD/3n33XTnmmGNw7fhbevbsWVsYBkTjX+Q57rrrrrzCMK5B26u+Rc7QbhW0P/MFOgg74IAD5OSTTwZswa4UshLbX31QhNA3+YaC7D49arCMKBIgOPDz+AcpcCqMKAjUSxg2oNHfVqz/EGjCd5D5V+tD9TmEYRs4DB06VExmp9Z+wXOpQcBw586dZfbs2ZKk1atXI0pclTCsNwNOFPN59ot+4oknZPHixWocCryAORgTfqPf6fFy3HHHAValsPivTpEBGO0999yjO2fEQhqM+/nnn2eaROmcrQ44gr698847ZdKkScW/+QnDhGGb/VE/kGIgHNgAoSCNT08GQw+erf+uvvpqRCiLC8OEYfQT2hHRYO0nH5Tho/GCLsJwNjjNPQwDhB944AGNAMvGjRtl+fLlsmHDBtljjz1k7733lk6dOiFKLNDf/vY3rF1rMDCcqXPV6S1btkz69u0rKeSnSqRNkSAMZ48ceX0Q9G/xYZgwTBg221Eo89vUUq4Iw6X26VBcUKI2YFhEGCYMDx48WK677rqUfoV2Txi2XGBXCxYswMAWflVne/C3vPXWW3L00UcDisXVvHnzkKZDGIawzRumLe2BZZ8pRKWQnyoRG7GEY8BIBeCmCnJbDeIAJoguIWqB61TD9MEJ0I1zwyg0HysyZ1F/2717dzfHFoaEURegNwmG/Xrgtzg2iNzgujWHUqfD3Ny87DCSDBH4Tgcj2WE4PBZ5i/369UPbo83ltdde86KAYZtpvy9dulQmT56M/ontl7Fjx9qsQpj36PdBXa4zMUcNfQ/7cstB/qZO2eH6EXVHGZdffjnKx+fy5JNP6rUEed1HHnlkZF6ta/uYdYEDQ+QIwqAG9xRsR/s2JocOxwLsXWeJSIK2eVb7SwaWcKCWHYbD+xj+Af9F/VDfuO/cSKjamPaD5d8mnyPt/V1an54ctNA+SrF2QPslc/tpioDNFoazjTqAT+2D9XeeFEprrMMHH3ygEfhsYBM+A2sLw3VtXy03cTDjtmObNm3kvPPOgz1on/q+Sf2NtUfoe/UY+Dr0TSVhuEZfN336dH9G1LtvrZ4PPvggbDHufGWymVDvvPOO7Lfffi4IC4Tr2L59u+zatUug3XbbTZo2bSovv/yyHH744UiV9HOIGzAMW+ejY4NpTIwioMcee0wNSaFNHn30URh4hlQJm6ZXpwcDQwetWLFCvv76a4EUasxZGBAAKmB0CrhRMKwggsUI69atE+jQQw/FuYOcRf0tPke5OC/K17ob+IYw7E79KsRDCrw1OR/N4YWRYrQWPpCyT8O9+OKL2v4pACM1DGsbah6XDkZ08OMPmBRC0ffa73q+2H7BZ4BCwJTa1Z577ol2FchpWy2vTtcJOIIN4VjtV5VOGzvl6ANdrw3t7+ZbK/BrP/vT2nCesNMa82rV9vVcusBJc+a0n7V+ru2p0E6ok1cfv82z2V8YdQTsoA5xoFxsGEZ74Nwu6MR9B9jC4Aptq/1gvsLsLOkcae/vUvr0UKEvdgdUkVHhHj16wC61bqKCzRSh/WAvqCt+r+kBvq/Q1K7UPthdEK7XCX3++edoC01dcO9FhRyzv8z9Z3Dv+oMY1bZ9U8Ow2xfKKYA8wCDOqX0etofZkGvzXbp0wTFat/LDsA0K1R7ce1F9vJ83X1M91eZqOh9+WwabCXXWWWfJQw89JJCmRqBOp59+OuxBahLSJTBAueCCCzRlQp9XDRKGA/ADMFn0NfweI0/3AQ2pcaRIlVBIS45K2sNUf69AoKM2OAd8XjfAMwizyIn91s+RVsg1KA9h2E87iIyANW/e3I1u+CCJuhQLhvWa9Lozw3CMUEaw2G78+PFaF3X8Ni1u1+flKtpofq+99kJUP6pf1AHHLdKMsLc6XGcYaYmEf7xdEuV4kI8BpdqYRoO0/80+LBoW9J+CgQvDzzzzDOrsw7SWEZcmgYEuykB52pYaUUPOGcot1cxEVhhOXjVux/ozOknfhWsYzBZ9QAvLMftJe3+X2qcnQ5ZFtBBxQn3RDkkwVdT2U7CA4Cc8u9XPs/hg9EFUmoTCtPkU8yG4h1FudrAJYc2dncGsGNoPfZemfdPCsO+r3O/0Oekvrkf52pZ+m2lfolz43fLCsKWh+PZg4Gtc4c9iB/eG1SE8X3abyZ4moayFKPG+++6LiDA4A4FLgUaMGCE/+9nPECHGAjqBNF1Ct2BrqDCMDtWIEJygTd0mQwrKV7BIkSoRpEjUJbcrC+AlOYXwtyHUa4TLh+GYtBKDafTJZ5995gKORKjcMJx1NwmUHz9KD6FP28wfWCVdZ5q8ZxcM63qdyTBs5cRDg4G5lqW586E9GACoI47rT/+B5Nc5RXpMVcIw6h6/m0l4zuTrCSE26f6Ps8m093fJfHqibJW+nz7gpvvE2XX29jOFfsHAxn1mpPXBaBMfhqNy3MvSfzgn2gV95gg2pOkPKdq3jjBs7Zi0+LXGc0MBD1jAQvukfDAczj7HpWm6A60ke/TPVwGbMeliOAQxwHCYudm8eTM4w10gh9lS7C8s0I4dOzADL926dfNSJJgz7O8sEA9RBoZmZKFinWRopHbs2WefLYcccoibngBlgmEAB479wQ9+oDlpfkSprg/u4G8dtaM8TxpRx3eI1uiUiuYRIhqAMqobhg340h0btqHakZ4/NQxb/SwigKnR/fff390eSsuo63UWE4aDsvQhr1NznlAPbSOrb/J1RMOwfa5ThwAH9AUgpbphONlW08GwPRy1/aJ8pF5rWI4NdtLe3yX16cmy6wd4IWqk08mQluPZdTHbLxasQ9CVtD7YACaEYa2fwiiuAVFywFTJ+w/1Rh2PPfZYXQugIJqifTPDcNw5g8G9+hJPSH10yy4fDBunxNmYrj0C9HvtFQyktHz/fHE2U40wjFxi+HrCsComwgZ4dI0jw0MsHLVCQYqERZDVASAa5u6JmxqG4UQGDhzo5oViVITcIQBq0WAYv02SngvQP3r0aIM0m9rUaylmznC1wrCev1gwXOO+2P/85z/lk08+UaisOhjW3yeomDDstlNUJKrYOcPVDcPJNm7wlGy7ae/vkvr0VDIIVZvz7bp47Zf8zPDtPo0PToJh/5kRESEvYf+FqSu2UDe5fYsKw8l+38pLUCVgOMnG8L2ugfKZIq7NwvMl20xF0iSwWPf+++8HCMs111zjpklguzVdRMc0iRioyBDRSc7PhbwUCR2lwXiw+ENH/lnTJHSa2U3iT5cmEU6dp4tyhiuDMTrDiF7zxnSqpdy7SeQhMqwj+HAhkJ272mA4OfpiygLDSVFAXeyi0/s52E2izJHh7Pd3SX16SmlgRHPoyxAZDnN3t27dirK17dL4kyR4jIvUYkZRB45Zp/vTDES0DaoxMhwEzhKUx8hw+WwmeQEdtklDHRAEil1Ah/RXd6COayUMh4t6EvaeNMAMV4gnp0pATopEtDFnh2H/2LQ5w+GijhCY4vKTkhU6nurfZzg7DPtTuVlhOAK8qhqG/Snh8sBw8kOtvu4zXLmc4ez3dyl9ehJ06QAoDhpgF6XPGQ7zVWEjeBa5dpLGByfDcDKYFjPCCchyFynGAu6mTZvq1r52b6WG4eQXZ4ULGxOUx5zhMtpM8tZqWHy5fv16Oemkk9D/tdpa7e9//7ucccYZ+YRhhMNfeeUV+eKLL3wgsG3RwukYg5JwD0R/lJS0QCTSGUIajYyGccv9vPLKK3FtqWDYfbGHrpzXOg8fPhywXxMMG+TbHosw6jgHErHoMFxJDrVv3z5q3+VgRSp2nzjllFPkqaeeStHnwUpj31EopFQChjVfVtssameD2sKwOh9tQ/+asuYMq90WE4ajVmz7efRw2Glh2AZCBj+aDuHDh8JMFvtLfrlO6EcqDcMRAYBIsIyzybT3dyl9elJ7ebs6WN+NGzcObaLX7S8QLFb7xcIg5J0viw/GseEgzezScrxDsFGwytZ/IcTpzh/+/aFAW5f2jTrW3e88HobDPrV2CndK0Hp4fRQeB2Vot7S7SRgrhLtJaH/q7LWW4fORgXJ4viw2U9Q0CReIP/roIwAvcuVl586dsnbtWnnvvfdQB3we3GfDhg3LJQyjoZEXgpcARG69AwBxF6mFhmzApMnxugjBhZdEhTnBliIRvj5U83rdvVNxjWlg2K2DX2eUGwXD7qp13XfWr3MITGb8wXZ0ulk5joV0n2QYLfbVrWlPWRV+CygEaKToc9ehoU5uHrbbhtl2k7DV/HWDTGszbY/ofYaTYdjdt9ONKKnNp88Ztut02xAQAmDICMMGL2pnS5YsEcjrp7rBsEGIe//CJnGca6Nxe4Jmtz+79/U6ouw9y24SENokBQyn2Mc1HobT3t9l8emmcKYPsnvcFhqrvXmBDW0j5ONjoJOt/UwBzEAeUGTywThWB2m6vznUokULrC9AH8Xeh1Dm/jPg9Z85+uxDHZDzicFM3ezTAFnLDZ97yTDsnxOwjfYJ9tB14dK1e1xbu3bt9Lis7Vat+wzj77Q2k3IgkPw6ZiySQz8AhKF99tkHb59L+zrmEOCrH4atsfHvueee86MTMAy8ZQbGELydx5O/eX/wtps6SEElyrEBKhCtBbgqjLqwkRqGYeQ33nijPuz1DWC6xZkPwwoOMXVOfgMdphy0Hu5m8gBz6JJLLnFzimLbtVevXpgKgRNK1edudFsdWPhmP8m6z7C2Y10gM+oNQXp9OAbwUVsY9qMfCgSoJ6JaadMkghkCSN9+hw3OM8Kwa6fqqLUdAD+IygEE6gTD4bZNZvsQ6qEPquBNS9ntL9mPhG+AzLLPsNpHChhO8Yav+JSqtPd3uXx6jf4BkTt9EQUUlBNuwxbCcvb2q81Lg7L6YFyHHqdvjFQoxoInfIbovu+PFLSK2n9oSwCxwjrk3R8p7DO45/znXhIMx5zT/MULL7yggKhwjxx5bTfds1qPy9pu1foGOrRPWpvJOBAIgXj27NmSIJSp0eRkhQBfv2AYwutlceFr1qyR+inqoIMOwg2BG5d9bqJof2zfvCvcG5j9R7vPW90zDgRCAfQdYes0RIMBsnV5/XIcwNc/GMYUBaabMVJAqLx+iWrUqBEMUN58883AANnnFO2P7ZtzIR0DkUg3tYT9R7vPcd2zDwQQxQZfHnbYYbZlmuUWA4Sx3zA+Twvw9Q6G9Y0wqAhGFvXPiAgiuAHwQMh7n1O0P7Yv2zfFm/zYf7T7HNc9HAhUGuDrKQybESFEjnyo+jHNwKlT9FkKEGGfU7Q/tm8ulGKrSvYf7T6HdQ8HApUE+PoMwza6QINu2bIFydhYnYh/UmFRtlIT/5AfhE2xYXgpRmHsc4r2x/al2H9st1zVPRwIVALgcwDDniHhn3ZUVYhSUACApIYQ9jlF+2P7Uuw/tluu6p59IJAd4HMAwzkQRVEURVEUFQwESg3whGGKoiiKoiiKIgxTFEVRFEVRFGGYoiiKoiiKogjDFEVRFEVRFEUYpiiKoiiKoijCMEVRFEVRFEURhimKoiiKoiiKMExRFEVRFEVRhGGKoiiKoiiKIgwniaIoiqIoiiIME4YpisI76PHKTbwjPq0oasuWLfL+++/LkiVLJDei6ONo94Th/IuiCMJ45/yCBQsAM5JWFAXQ6Natm6xZsyYfYEDRx9HuCcP5F0VRF198sTz99NNFA2GKQNyrVy+ZPn16VUTwKM44DBo0SJ566imUU3a7pwjD1S+KouAPSnHPU7SpykfwKM44mD1W2O4pwjBFUYRhijbFWQoqe+Q1BzBMEYYpiiIMU7SpfNkiRbui/RKGKYoiDFMUYZgiDOdchGGKoggunTp1kgEDBkjbtm3lq0YHyD4710nB12B6W5YuXSoURRimCMM5FmGYGjhwsBx7bCdp1GgPKZUoaufOHfLOO0vlsccmVRW4XHXVVXJm/yvl4/9rJk2bNpJG3xXZtlPkX9t3yIHfrpWXn5gk9913n9Qn3XHHHdK7d2+ZNWuWXH/99aKiCMMU7Yr2SxhOfHjURh9++KH07NlT8qDRo8cV6t1TmjXbT5o0KR0MU9S2bdtlw4ZNBUB7Tm67bXiFwcVAuGu/YbJtz+bSrOnustt37Ltvd4ms3/KN7LX9C1k4fXxRgdj8TehbVqxYIZMnT5Y33ngjdzB8wgknyNSpU+XLL7/ELgsSpWuvvRZ9KIsXL5a5c+cW7OW2EvtdwjBmQnyhnz777DP0g9x1110SpYMPPliuvvpqOf7446V169b6W2wdJvfee29gy+effz76VCCUjUWGNemJJ56Q4447TqBRo0bJjBkzimVXOKfWGTxBuyIME4bV+Z566qniCjd1kyZNAL/iCg+rIUOG5CIiPGzYMGnT5kAplyjq00/XyN13j5fHH3+wouCC1IjbJkyTDY0PlP332l1q0tqvvpE1m7+RY3ZfJdf07wkwKCoMAxjwD4KvUZBQnwUAyVtk+KWXXkI9ZejQofL888/HQtCdd94pX331VflgmDCMdg6egdCqVauwt23h/v1UXJ155pkyduxYHGe/d367bdu2wmzQY2rLPgzje9iqlhsALhTCcHa7mjRpUm5hGDyDegL4k/TII4/IsmXL0D+EYcJwzZozZ44cccQReq6cCQ/MP0jfvr3LHhGmGCGeMWOmDB8+pKLgAtD87okD5NADmyAiHAnC0L67b5dV8+6T22+/vXRpDBZhw3cuEOcKhm+55Ra58MILZf78+V5QwdrgxRdfBCRJx44dpbwiDBsYGrhefvnlAM0AiNFXsDFAL6KtI0eOxHdBX0MGqQbDKA/lTps2TW699VZxNWHCBDnttNMwWJRmzZrFwTDtKox+J0TdDYRPPvlk19fEn4ciDOdRv//9QwXncY6UWxQ1bdqz8qtf/VdFweXPf/6zfHV4d2m5z+4xIGw6asNL8vOf/7x0MBw+0NyoWT5gOJzSTprKbtAwjLa69NJLZe3atQqLCpNy3nnnyZNPPglALCEMG0hOmTIF4Go25cAUIot9+/aNtUWL7BsMo6yuXbsK5NvCW2+9JW+//bbsv//+eA4nwjDtKozUh0Bs/Tlx4kS0q0b95YYbbkA6S12ujyIM281sjiG8+fXm1WMxYj3kkENQJm5YGT9+PJwdjsW0jRx55JHSvXt3GDG+l4ULFwZlDx48WPr16wenpEaMt9fU8YFHGKYIww8++4o0+n4H2W/P3aNAuGIw7IKGRc3sYXfZZZdJu3btXF+B3ExAc1A+8jbVZwCuX3vtNUS4/WMVNuJ9oEWvATGI2On5NV8Ux6ZPlbB661S2gpPCVNCOel4IUGaAaOeBX0V9/eny/v37GwDY53pdFYNhgB3aOIzahcCDdnn00UdR5xLAcAibGllVYMU1WDuGsuixHefC8NatWxHR1f52wRU2KRdddFEIw9ntyq9zDuwqEYj9gU1E+kuJYZgiDMOJ4B8gF++pxw2vU6KAXxguHlRff/21Pmi0fAVhue666xSUBdIbVo09ybGZCMMUI8Mbv99dWu27ewQIVxCG7X4PImojRowQSH3FMcccA1iw46x8gIsCM/5pHqcemwKGDQRQNh6kEI5R4dgsqRIALEiBy4PhADDw+bvvvitNmzaVLl26oH5aF51qdwHIhbhgoLFo0SJ8rucuOwyjrj169AC0KcT4C9D8QYkbQAGwAZqzwnAibKJ9IU118NbbJOXqujCM+uG/KAf9q3aHOqFc/L8Pw9ntKqxzvuwqBGJNY4kD4bLBMEUYtinPcCENjtPvgikfvR4YsZVhDgqC4yg2DA8aNLBw/i6FnLErpLbCu9Y7djxWXLVvf7QsWLBQ0svKnTv3BQwCpCYhSt6jxxkFp/SOHHTQQRKr5N8H58yPCMNjxoyRZqcMljYt90TOcBQIlydnODkSpxE2/K2+wi9PI4j6t85AKUSgDPy/m4NZFxjWY8PcUYs24dh0qRI2ALDBfQjDbn196HDbCOVqeTUFFXAMzq8gpzmlOuVfThhGHTUCiuvCdaAvXAhOWgCOtAn0qwvFWWA4cbZi+fLlbr/Uxd6D56eWi4hq8+bN5Z577lFb9mG4OHYV1jl/dhVGgXVwHAHC5YBhijBsTiPOSUSf3/7WqZaS5gw/8MDEwvX/+t+j//8GDGeCVkA1NGXKY1IklQWG8yvCMHaT+PX4KbJxr4MFMhAO1eG7K2XIhT/FbhLlgeEQUHTqWCHBjwIBIBQi48rXcjR6VhcYRoQLwKXTwHHHpkqVCKeyQxjW6wjzTMOp6nXr1gFE9Ld6DqSk4WUqiO7pVLeeR0GobKv+AU0uBGu6SwqhPNQT7eqXlw2GQ7tF/xcNhl37hTp06KBRVB+Gi2NXYZ3zYVfJQBwBwuWAYYownHysOv/o89vIU40ZI3M4dPyuZAvounXrWjimP2A4AEaD3WQYnj17VqGO49zosLRs2VxUemxUZBlwunr1ahdUDdjtmOB3a9d+gToU2u2GQp7lJfqZjBx5c8Em/mD5ow8+LD/9aW+7JruuGiPFKu9zDByCQUSehfa6++775IIL+omrP/1pulxzzVVo6yqE4XCf4Q927CtRarfHJtn68f/KNUN+KV9v2VKxyLBOzQIYAHme3EVK0eWHcFlbGNYIlzstnh6GbUpbIcGfyo68Xr0OTRfzpWkjWh+FIxd4ACwzZ84EgPnRdIWo0kOLwZjWrRT7WGs7VHVk2J35hNC/9nkAw9ntKqxzxe2KMEwRhpMfRFEL6CB3H8dqhGG/HD/9AqAMUAU4+cdqWR4Mh2CMMlq1ai2Q+7mWt3z5e1Fg5p7fjwwHf7v1AIxPmzYVgK91lp/8pAei316d8quhQ68s2O2fCnV+tFD3ngLNmzen0L8XFez+ggJs3F/FMGxA/J99B8tqaS6bvmnspkbIId9ZL+tWvCtrv9oqLffZS1auWCFjfzNGtm/bVvacYYWCGJUShv3fZYNhg32F66ip7OC8+neCgvxOwAgEUNHvADCI9mP6WmFMgYmR4fic4U2bNqEts+YMwz79LcFs5iGE4ax2FVXnnNhV2Bbjxo3LUZoERRgOR3uYWsJCO0wpucn9pYDhtDnDcZFfBUyNMOIYH2aTYFjLjU1z0MgwIr+hJDxHCMPed+F1t2rVyh0A+HXMPRD/5S/z5OmnZwp07rlny1ln/URBuOphGGrTpo0MGDBAOnfuLKo333xTHn/8cdm4ebPcPeEPctRh35cPV6+VV/76V5kxaSKAuJy7SejftYGC2sCw5jDWFoZ1Kjs7DIdwBfjR3RMUmCJhWGFH/06SwhDasWXLllgMpWACoNEpbbSVfPDBB5rXyZzh0u8mEdinC5FQBAxnt6uwzuWyq1wuoKMIw7ZqNfxdsWEYNzgckX+j6ohay68SGDYwBDBayoABqycXhhFRTQJVS3WwBXq1geGoa6g1DFu0lzAMbS7AYp8+vQsPsZX/Bsu28swzs+R73/telcBwdt00arT8q1FjadW6lTTeo4ksWrxIgbgUMFzTolt/+jdd+eEiIf/vWMAFPBgMZYdht059+vQJp7JDGA6mvZOk09+AgbZt28rKlSsRIfSBJq5tuZuE9W8x9xlOfmaFMJzFruLqXE67ysnWahRh2BxssGpVoydQCWA43EMxXElebTCsQKl5uXGgiGNrC8N+7irKR6pEPAxbmXo9aSPDWk4DhuEQiCEHhHMDw40LsNHnoktl32bN5agjj/CBuGRvoLNolkXYoOHDh7s+QMEOdugCrjtY97dmU8j20zGC6zBYsOlug0YbkA8cOBBQlgTDca/c9aeyk3aTiHqhAIBQ4Ux9J64NkdOatsMC4OM737dyn2H/DXSWEhH/Browd9naNjsMZ7ersM45sKv0L90Ax4wePToxp5kiDMd+rwn3BxxwAJyXvmKymDAcbN2ie4xiv2I8nMxJhY6t8jnDtjuFm3v74x93kzFjfqPfF9rhHHwHsE0CVfx/4d8qHOMCb8EJnuieO4Bhu/4wwoy/Ief3dcoZrn4Y5m4SlQficEtF/IMAFACOiHUAQV4lonGffPIJ9kGV9u3bu28HcyFEz6Hlh3Blu0TosXqcQqLCgkFYuHcxjo2G4eQpbRf+42DYj26hbli4pP5QX0Zi12HT1iHsWXRTI94N/g10aGeV9q1+fsUVVxjshvBlv7ffhracHYaz21UIw6W2q/y+jpkiDMMh33jjjbohN6BYJk+ejO1VSpQzbE4QAAyFb5/KDsMuvDpSsEsFw7pobt68uVqOLmxz0xzcBW0xKQwGrdbPv1SwVrjVnSN8GPaP0R0gfDhOsZtEDmCYMFwWIDZYDRfArVixAn4kMgcT8IGpV10r4L6JUvNM3chwixYt4C/0OJk+fbqCgf9WOz1Op+cBYOaD7FhEuvC5+3YuzXnVY+uaKuFCQxwMB7/t1q2bC+/Iz5QXXnjB6miBhHA6P/yuQjBceQEMPQEIkcMLe1BQinsW6qBMf4u3H4ZpHtlhOLtdhTCcJ7sCEIMRXBCOA2Jco/YvYZgwnAPl73XMFYZKijCcDMSrP1slr87/H1n8ynxpyAJY6AxVTpR/GKZoV9VvvxRhmDCMCPWiRa+lfVkHRRguKRDLt7tk88aNsmHd5/L6qy9LXpV9dwxCC0URhinCcFU+wCZK3769pUmTxlJF8l+IkbO9eqlt27bLjBkzZfjwIfUUhg2IO57URb799lt5/51lsunLPNtpmLKgQk4x/sWvSie0UBRhuApFGKYGDhwsw4YNkzZtDpRyiaKWL/8IcCBTpz5Yzxw4hQVdyCO2hVWWG2o7CbgitGCAgN03du7cKa4oau+995ZevXohj58wXEkRhqlRo8YWFpb1lBYt9it5hJhiRHj9+i9k9uw5hejiCMmu6gcQitCCBbVY77BgwQLZYq/zpmhTWKSHdTFY/FplPi60+9yLMEwNGHCZ/Md/dJZGjfaQUomidu7cIcuWLZGpUx+SFKqHAEIRWswescsQyoIoCn4JMyqwqerzcaHdV1wUYZiiqMoDCEVoyYEo+riy2T1FGKYoiqIoiqIowjBFURRFURRFEYYpiqIoiqIoijBMURRFURRFUYRhiqIoiqIoiiIMUxRFURRFURRhmKIoiqIoiqIIwxRFURRFURRFGKYoiqIoiqIowjBFURRFURRF/T8slL4ULHyvpQAAAABJRU5ErkJggg==)

The Debug Mode panel sits on the lower-right corner of the browser window. It provides access to the following features.

*   **Resizer bar**: click and drag this to resize the panel horizontally. A similar bar appears on all drawer panels, allowing you to resize them vertically.
*   **Variables**: this button opens and closes a drawer panel that displays the contents of all of the variables (as well as individual values inside data structures) currently active in the story. This is a table with the following columns. Click any column to sort the table (alternating descending and ascending per click) by that column. At the bottom, a button marked "Copy $ variables as [(set:)](#macro_set) call" will, when clicked, copy to the Clipboard a source code representation of a [(set:)](#macro_set) call which recreates all of the story-wide variables as they are right now - which may be useful for recreating this exact variable state elsewhere in the story, for testing purposes.
    *   **Type**: lists the type that the variable has been restricted to (by using the `-type` syntax in a [(set:)](#macro_set), [(put:)](#macro_put), [(unpack:)](#macro_unpack) or [(macro:)](#macro_macro) macro). If no restriction was made (which is the same as restricting to the `any` datatype), then this is blank.
    *   **Name**: the name of the variable, including its `$` or `_` sigil. The sigil is not used to determine the sorting of the column. If this is a data value inside a data structure (for example, `$list's 1st`), then the name of the containing variable will be grayed out, and the name (or position) of the data value will be listed after it. However, if the containing data structure is a dataset, then its name will be listed as `???` (because datasets' values can't be accessed by name or position).
    *   **Scope**: if the variable is a temp variable, then this lists the scope that the variable is usable. If a temp variable is created inside a hook, then the hook will be listed here - otherwise, it will say that the hook's scope is "in this passage". Sort by this column to separate temp variables from ordinary variables.
    *   **Value**: a plain-English description of the value contained in the variable, identical to that used in error messages which refer to that value. Values are colour-coded by their datatype, using identical colours to those used in Twine's passage editor.
    *   A blank column with **[(source:)](#macro_source)** buttons. These buttons will show and hide a fold-down strip that contains the source code representation of the value, as if by a [(source:)](#macro_source) or [(v6m-source:)](#macro_v6m-source) macro call.
*   **Enchantments**: this button opens and closes a drawer panel that displays all of the enchantments (created by [(enchant:)](#macro_enchant), [(click:)](#macro_click), or similar macros) that are currently active in the passage. This is a table with the following columns.
    *   **Scope**: the [HookName](#type_hookname) (or textual string) that was given to the [(enchant:)](#macro_enchant) or [(click:)](#macro_click) macro, which is used to determine what structures the enchantment affects.
    *   **Value**: a plain-English description of the changer given to [(enchant:)](#macro_enchant). If this enchantment was created via a [(click:)](#macro_click)\-related macro, this instead contains "enchanted via" and the name of the macro.
    *   A blank column with **[(source:)](#macro_source)** buttons. For enchantments created with [(enchant:)](#macro_enchant), these buttons will show and hide a fold-down strip that contains the source code representation of the changer given to it.
*   **Errors**: this button opens and closes a drawer panel that lists all of the errors that have appeared in the story thus far. Keeping a close eye on this panel can be useful for finding error messages that disappeared too quickly for you to read them (because the passage contained a timed [(go-to:)](#macro_go-to) or [(redirect:)](#macro_redirect), or the error message's containing hook was replaced using [(replace:)](#macro_replace) or some other macro). You may clear the panel of all errors using the "Clear this panel" button at the bottom.
*   **Storylets**: this button _only_ appears if at least one valid storylet (a passage containing a [(storylet:)](#macro_storylet) call or a specifically-written [(metadata:)](#macro_metadata) call) exists somewhere in the story. It opens and closes a drawer panel that displays the current status of all the storylet conditions at this present moment. This is a table with the following columns.
    *   **Open**: if the storylet condition currently produces `true`, _and_ there are no other open storylets with higher exclusivity, then this display a tick mark. Sort by this column to easily see which storylets are currently open or not.
    *   **Name**: the name of the passage.
    *   **Condition**: the lambda condition for this storylet. All such conditions are `when` lambdas, so the `when` keyword is not displayed here.
    *   **Exclusivity**: if the [(exclusivity:)](#macro_exclusivity) macro (or a specifically-written [(metadata:)](#macro_metadata) call) was used to change the exclusivity of the storylet, the exclusivity number is displayed here.
    *   **Urgency**: if the [(urgency:)](#macro_urgency) macro (or a specifically-written [(metadata:)](#macro_metadata) call) was used to change the urgency of the storylet, the urgency number is displayed here. Urgency only affects the sort order of the [(open-storylets:)](#macro_open-storylets) macro, and the numeric order of the [(link-storylet:)](#macro_link-storylet) macro.
*   **Source**: this button displays the source code of the current passage, _plus_ the source code of all `header`, `footer`, and (if this is the first turn of the story) `startup` tagged passages in the story, as well as debug variations of the above. Each of these passages has its own fold-down tab along the right side of the panel - use these to pick and choose what passage's source code you want to examine. (Note: as of version 3.3.4, excessively long passages will, for performance reasons, not have their code syntax-highlighted.)
*   **Tools**: this button opens and closes a drawer panel which holds a couple of special-purpose tools to help you examine the story as it is running.
    *   **See through and click through [(dialog:)](#macro_dialog) boxes**: turns dialog boxes (except debugging dialogs), and their dark backdrops, 90% transparent, and lets you click through them to interact with elements behind them. This can be useful when you want to proofread some text, check for error messages, or examine a replay (see below) for an element that's behind a dialog box.
    *   **Stop links, [(click:)](#macro_click) and [(hover-style:)](#macro_hover-style) from activating**: stops clicks and cursor hovers (and any other action specified by [(action:)](#macro_action)) from activating elements (debugging elements excluded). This can be useful if you want to examine a replay (see below) inside a [(click:)](#macro_click) region or a link, or select text that's inside an `(action:"mouseover")` region.
    *   **Stop [(go-to:)](#macro_go-to), [(undo:)](#macro_undo), [(redirect:)](#macro_redirect) and [(refresh:)](#macro_refresh) from activating**: stops these commands from activating when they are added to the passage. They can be selectively activated later by turning on Debug View and clicking the "GO" buttons on them (next to the Replay button).
    *   **Speed of timed events**: a dropdown which causes a multiplier to be applied to `time`, so as to make timed events that use it occur sooner or later. It also applies a multiplier to the delay that [(after:)](#macro_after) and [(live:)](#macro_live) wait. However, it does not affect transitions at all, which is to say it has no effect on [(t8n-time:)](#macro_t8n-time) or [(t8n-delay:)](#macro_t8n-delay).
*   ⚙️: this button lets you configure Debug Mode's settings. These settings are saved in browser localStorage, so that they should be preserved across multiple debugging sessions. In Harlowe 3.3.0, the following settings are available.
    *   **Debug panel is dark**: changes the panel to a white-on-black colour scheme rather than black-on-white.
    *   **Debug panel is transparent unless the cursor is over it**: a feature that lets you see the passage beneath the panel as long as the mouse isn't hovering over it. You may turn this off if you find it distracting.
    *   **Record expression replays**: enables or disables replay recording (see "Debug View", below). This can hinder the performance of your story, so you may disable it if you need the story to run closer to its actual speed.
*   **Turns:** a dropdown menu listing all of the turns that have currently elapsed in the passage, and the name of the passage visited at the start of the turn (note that the [(redirect:)](#macro_redirect) macro can transport the player between multiple passages during a single turn). Select a turn to undo (or redo) to that turn, as if navigating the web browser's history.
*   **Debug View:** toggles "Debug View" (see below).
*   **DOM View:** toggles "DOM View", a special view, intended for those familiar with HTML and CSS, that highlights and names all of the HTML DOM elements in the passage, to make it easier to examine how Harlowe's code structures are converted to HTML elements, which is useful for writing CSS rules targeting those elements.
*   **Close button:** clicking this closes the Debug Mode panel and exits Debug Mode. Once this is done, there is no way to return to Debug Mode except via another [(debug:)](#macro_debug) macro call.

#### Debug View:

This is a special viewing mode that makes otherwise-invisible code structures visible, and lets you examine how they were interpreted by Harlowe. When enabled, it applies the following features.

*   Macro calls in the passage prose become visible, as translucent coloured rectangles containing the macro's name. These rectangles also surround any displayed output of the macro (such as that produced by [(print:)](#macro_print), [(display:)](#macro_display), [(nth:)](#macro_nth) and so forth). If a replay is available (see below), a 🔍 button is also present next to the macro's name. Note that only the "bottommost" macro is visible - nested macro calls aren't made visible, but can be observed in the replay.
*   Plain variables in the passage prose become visible, as translucent coloured rectangles containing the variable's name, and surrounding the variable's output.
*   Hooks become visible, as tiny `[` and `]` marks surrounding their contained content. If the hook is named, a tag such as `<name|` appears after the closing `]` mark.
*   Enchanted hooks (or other enchanted areas, such as links or the passage element) have a faint orange and cyan border around them.
*   A few notification messages are inserted in certain places. For instance, when a hook's contents were repeated using the [(for:)](#macro_for) changer, a notification message displaying the number of loops (repetitions) is visible at the start of the hook.

#### Replays:

Clicking the 🔍 buttons on macro calls or error messages will produce a **replay** of that call, which is a dialog showing a step-by-step view of how the macro call's code was interpreted by Harlowe, starting with the initial call as written (such as `(if: 2 + 5 > (max: 3, 8))`) and computing that call's values one step at a time (in this case, the steps are `(if: 7 > (max: 3, 8))`, `(if: 7 > 8)` and `(if: false)`).

For performance reasons, Harlowe only records replay data after Debug Mode is enabled (and if the setting to record replays is enabled in Debug Mode's settings). The [(debug:)](#macro_debug) macro can enable it after startup, but any macro calls that were run after the [(debug:)](#macro_debug) call was run will have replay data available.

Passage markup
==============

[](#markup_link)Link markup
---------------------------

Hyperlinks are the player's means of moving between passages and affecting the story. They consist of _link text_, which the player clicks on, and a _passage name_ to send the player to.

Inside matching non-nesting pairs of `[[` and `]]`, place the link text and the passage name, separated by either `->` or `<-`, with the arrow pointing to the passage name.

You can also write a shorthand form, where there is no `<-` or `->` separator. The entire content is treated as a passage name, and its evaluation is treated as the link text.

#### Example usage:

    [[Go to the cellar->Cellar]] is a link that goes to a passage named "Cellar".
    [[Parachuting<-Jump]] is a link that goes to a passage named "Parachuting".
    [[Down the hatch]] is a link that goes to a passage named "Down the hatch".
    

#### Details:

The interior of a link (the text between `[[` and `]]`) may contain any character except `]`. If additional `->`s or `<-`s appear, the rightmost right arrow or leftmost left arrow is regarded as the canonical separator.

*   `[[A->B->C->D->E]]` has a link text of "A->B->C->D" and a passage name of "E"
*   `[[A<-B<-C<-D<-E]]` has a link text of "B<-C<-D<-E" and a passage name of "A".

If the passage name of a link does not exactly match that of an existing passage, but it does if you render the markup in or around it, then Harlowe will use that name. So, you can put markup inside the link, as well as variables or value macros like [(either:)](#macro_either).

*   `[[//Seagulls!//]]` will link to the passage named "//Seagulls!//" if it exists, or the passage named "Seagulls!" if that exists.
*   `[[Shelly?->$shellyPlace]]` is a link that goes to the passage whose name is in the variable `$shellyPlace`.

However, you can't put commands or changers in the passage name. `[[Really, now.->(print:$explain)]]` will cause an error.

Links can be customised by attaching changer macros, like [(transition-depart:)](#macro_transition-depart) or [(text-style:)](#macro_text-style). Just place one in front of the link, like so: `(t8n-depart:"dissolve")[[Recall that day]]` - or attach a variable containing one: `$memory[[Recall that day]]`. You can also customise every link in the passage using [(change:)](#macro_change) or [(enchant:)](#macro_enchant), and ?Link.

This syntax is not the only way to create links – there are many link macros, such as (link:), which can be used to make more versatile hyperlinks in your story.

[](#markup_style)Style markup
-----------------------------

It's expected that you'd want to apply styles to your text – to italicise a word in dialogue, for example. You can do this with simple formatting codes that are similar to the double brackets of a link. Here is what's available to you:

Styling

Markup code

Result

HTML produced

Italics

`//text//`

_text_

`<i>text</i>`

Boldface

`''text''`

**text**

`<b>text</b>`

Strikethrough text

`~~text~~`

text

`<s>text</s>`

Emphasis

`*text*`

_text_

`<em>text</em>`

Strong emphasis

`**text**`

**text**

`<strong>text</strong>`

Superscript

`meters/second^^2^^`

meters/second2

`meters/second<sup>2</sup>`

Emphasis and strong emphasis appear identical to italics and boldface by default (though they can be changed using CSS) and are offered for those with familiarity with the Markdown language. Italics and boldface are offered for those with familiarity with SugarCube, Twine 1, or TiddlyWiki.

The alternative Markdown emphasis syntax `_text_` and `__text__` is not available. Harlowe reserves the use of the \_ character for temp variables.

#### Example usage:

    You //can't// be serious! I have to go through the ''whole game''
    again? ^^Jeez, Louise!^^
    

#### Details:

You can nest these codes - `''//text//''` will produce _**bold italics**_ - but they must nest symmetrically. `''//text''//` will not work.

A larger variety of text styles can be produced by using the [(text-style:)](#macro_text-style) macro, attaching it to a text hook you'd like to style. And, furthermore, you can use HTML tags like `<mark>` as an additional styling option.

[](#markup_macro)Macro markup
-----------------------------

A macro is a piece of code that is inserted into passage text. Macros are used to accomplish many effects, such as altering the game's state, displaying different text depending on the game's state, and altering the manner in which text is displayed.

#### Built in macros:

There are many built-in macros in Harlowe. To use one, you must _call_ upon it in your passage by writing the name, a colon, and some data values to provide it, all in parentheses. For instance, you call the [(print:)](#macro_print) macro like so: `(print: 54)`. In this example, `print` is the macro's name, and `54` is the value.

The name of the macro is case-insensitive, dash-insensitive and underscore-insensitive. This means that almost any combination of case, dashes and underscores in the name will be ignored. You can, for instance, write `(go-to:)` as `(goto:)`, `(Goto:)`, `(GOTO:)`, `(GoTo:)`, `(Go_To:)`, `(Got--o:)`, `(-_-_g-o-t-o:)`, or almost any other combination or variation. There is, however, ONE exception: the name cannot start with an underscore \_, because that would make it a temp variable.

#### Custom macros:

In addition to built-in macros, it is also possible to write your own macros, using the (macro:) macro. You need to save these macros inside a variable or temp variable using the [(set:)](#macro_set) macro. Once you've done so, you can call it much like it was a built-in macro, except by replacing the name with the variable: `($someCustomMacro:)` is how you would call a custom macro stored in the variable $someCustomMacro, and `(_anotherCustomMacro:)` is how you would call a custom macro stored in the temp variable \_anotherCustomMacro. Note that you can't use dataname access to use macros that are inside arrays or datamaps: `($array's 1st:)` is, unfortunately, not a valid custom macro call.

#### Passing data:

You can provide any type of data values to a macro call - numbers, strings, booleans, and so forth. These can be in any form, as well - `"Red" + "belly"` is an expression that produces a single string, "Redbelly", and can be used anywhere that the joined string can be used. Variables, too, can be used with macros, if their contents matches what the macro expects. So, if `$var` contains the string "Redbelly", then `(print: $var)`, `(print: "Redbelly")` and `(print: "Red" + "belly")` are exactly the same.

Furthermore, each macro call produces a value itself - [(num:)](#macro_num), for instance, produces a number, [(a:)](#macro_a) an array - so they too can be nested inside other macro calls. `(if: (num:"5") > 2)` nests the [(num:)](#macro_num) macro inside the [(if:)](#macro_if) macro.

If a macro can or should be given multiple values, separate them with commas. You can give the `(a:)` macro three numbers like so: `(a: 2, 3, 4)`. The final value may have a comma after it, or it may not - `(a: 2, 3, 4,)` is equally valid. Also, if you have a data value that's an array, string or dataset, you can "spread out" all of its values into the macro call by using the `...` operator: `(either: ...$array)` will act as if every value in $array was placed in the [(either:)](#macro_either) macro call separately

#### Historical note:

You might notice that the majority of Harlowe macros are not, strictly speaking, [macros in the computer-science sense](https://en.wikipedia.org/wiki/Macro_%28computer_science%29), but are more like functions. This is purely due to historical circumstance - the original Twine 1 story format, Jonah, was based on [TiddlyWiki](https://tiddlywiki.com/)'s engine, which features parameterised transclusions called "macros". These are closer to computer-science macros in that they actually transclude markup directly into the tiddler (TiddlyWiki's term for "passage"). Thus, only Harlowe command macros like [(display:)](#macro_display) can really be considered "proper" macros.

[](#markup_variable)Variable markup
-----------------------------------

As described in the documentation for the [(set:)](#macro_set) macro, variables are used to remember data values in your game, keep track of the player's status, and so forth. They start with `$` (for normal variables) or `_` (for temp variables, which only exist inside a single passage, hook or lambda).

Due to this syntax potentially conflicting with dollar values (such as $1.50) in your story text, variables cannot begin with a numeral.

You can print the contents of variables, or any further items within them, using the [(print:)](#macro_print) and [(for:)](#macro_for) macros. Or, if you only want to print a single variable, you can just enter the variable's name directly in your passage's prose.

    (set: $plushieName to "Whispy", _heldItem to "briefcase")
    Your beloved plushie, $plushieName, awaits you after a long work day.
    You put your _heldItem down and lift it for a snuggle.
    

Furthermore, if the variable contains a changer command, such as that created by [(text-style:)](#macro_text-style) and such, then the variable can be attached to a hook to apply the changer to the hook:

    (set: $robotText to (font:"Courier New"), _assistantText to (size:0.8))
    $robotText[Good golly! Your flesh... it's so soft!]
    _assistantText[Don't touch me, please! I'm ticklish.]
    

**Note:** While you can normally display the contents of variables by simply placing their names directly in passage prose, such as `$ship` or `$crew`, you have to use another macro, such as [(print:)](#macro_print), to display the contents of arrays, datamaps, or other structures, such as `(print: $ship's mast)` or `(print: $crew's 1st)`.

**Note 2:** Even though named hooks' names are case-insensitive, variable names are case-sensitive. So, `$Chips` and `$chips` are considered different variables.

**Note 3:** In Harlowe 3, If you use a story-wide variable that doesn't exist (that is, it hasn't been created via [(set:)](#macro_set), [(put:)](#macro_put), and so forth), then a default value of 0 will be used in its place. So, `(print: $nonexistantVariable)` will show the text "0". This is likely to change in a future version of Harlowe, however.

[](#markup_hook)Hook markup
---------------------------

A hook is a means of indicating that a specific span of passage prose is special in some way. It essentially consists of text between single `[` and `]` marks. Prose inside a hook can be modified, styled, controlled and analysed in a variety of ways using macros.

A hook by itself, such as `[some text]`, is not very interesting. However, if you attach a macro or a variable to the front, the attached value is used to change the hook in some way, such as hiding it based on the game state, altering the styling of its text, moving its text to elsewhere in the passage.

    (font: "Courier New")[This is a hook.
    
    As you can see, this has a macro call in front of it.]
    This text is outside the hook.
    

The [(font:)](#macro_font) macro is one of several macros which produces a special styling changer, instead of a basic data type like a number or a string. In this case, the changer changes the attached hook's font to Courier New, without modifying the other text.

You can save this changer to a variable, and then use it repeatedly, like so.

    (set: $x to (font: "Tahoma"))
    $x[This text is in Tahoma.]
    $x[As is this text.]
    

The basic [(if:)](#macro_if) macro is used by attaching it to a hook, too.

    (if: $x is 2)[This text is only displayed if $x is 2.]
    

For more information about changer macros, consult the descriptions for each of them in turn.

[](#markup_named-hook)Named hook markup
---------------------------------------

For a general introduction to hooks, see their respective markup description. Named hooks are a less common type of hook that offer unique benefits. To produce one, attach a "nametag" to the front or back, similar to how a macro call would be attached:

    [This hook is named 'opener']<opener|
    
    |s2>[This hook is named 's2']
    

(Hook nametags are supposed to resemble triangular gift box nametags.)

A macro can refer to and alter the text content of a named hook by referring to the hook as if it were a variable. To do this, write the hook's name as if it were a variable, but use the `?` symbol in place of the `$` symbol:

    [Fie and fuggaboo!]<shout|
    
    (click: ?shout)[ (replace: ?shout)["Blast and damnation!"] ]
    

The above [(click:)](#macro_click) and [(replace:)](#macro_replace) macros can remotely refer to and alter the hook using its name. This lets you, for instance, write a section of text full of tiny hooks, and then attach behaviour to them further in the passage:

    Your [ballroom gown]<c1| is [bright red]<c2| with [silver streaks]<c3|,
    and covered in [moonstones]<c4|.
    
    []<c5|
    (click: ?c1)[(replace:?c5)[A hand-me-down from your great aunt.]]
    (click: ?c2)[(replace:?c5)[A garish shade, to your reckoning.]]
    (click: ?c3)[(replace:?c5)[Only their faint shine keeps them from being seen as grey.]]
    (click: ?c4)[(replace:?c5)[Dreadfully heavy, they weigh you down and make dancing arduous.]]
    

As you can see, the top sentence remains mostly readable despite the fact that several words have [(click:)](#macro_click) behaviours assigned to them.

#### Built in names:

There are four special built-in hook names, ?Page, ?Passage, ?Sidebar, and ?Link, which, in addition to selecting named hooks, also affect parts of the page that you can't normally style with macros. They can be styled using the [(change:)](#macro_change) or [(enchant:)](#macro_enchant) macros.

*   `?Page` selects the page element (to be precise, the `<tw-story>` element) and using it with the [(change:)](#macro_change) and [(bg:)](#macro_bg) macros lets you change the background of the entire page.
*   `?Passage` affects just the element that contains the current passage's text (to be precise, the `<tw-passage>` element) and lets you, for instance, change the [(text-colour:)](#macro_text-colour) or [(font:)](#macro_font) of all the text, or apply complex [(css:)](#macro_css) to it.
*   `?Sidebar` selects the passage's sidebar containing undo/redo icons (`<tw-sidebar>`). You can style it with styling macros, or use [(replace:)](#macro_replace) or [(append:)](#macro_append) to insert your own text into it.
*   `?Link` selects all of the links (passage links, and those created by [(link:)](#macro_link) and other macros) in the passage. This is similar to the `links` data value for HookName data.

(Note that, as mentioned above, if you use these names for your own hooks, such as by creating a named hook like `|passage>[]`, then they will, of course, be included in the selections of these names.)

[](#markup_hidden-hook)Hidden hook markup
-----------------------------------------

Hidden hooks are an advanced kind of named hook that can be shown using macros like [(show:)](#macro_show). For a general introduction to named hooks, see their respective markup description.

There may be hooks whose contained prose you don't want to be visible as soon as the passage appears - a time delay, or the click of a link should be used to show them. You can set a hook to be _hidden_ by altering the hook tag syntax - replace the `>` or `<` mark with a parenthesis.

    |visible>[This hook is visible when the passage loads.]
    |cloaked)[This hook is hidden when the passage loads, and needs a macro like `(show:?cloaked)` to reveal it.]
    
    [My commanding officer - a war hero, and a charismatic face for the military.]<sight|
    [Privately, I despise the man. His vacuous boosterism makes a mockery of my sacrifices.](thoughts|
    

(You can think of this as being visually similar to the pointed tails of comic speech balloons vs. round, enclosed thought balloons.)

In order to be useful, hidden hooks must have a name, which macros like [(show:)](#macro_show) can use to show them. Hence, there's no way to make a hidden unnamed hook - at least, without using a conditional macro like [(if:)](#macro_if).

[](#markup_unclosed-hook)Unclosed hook markup
---------------------------------------------

This is a special version of the hook markup - an open bracket `[`, followed by any number of `=` marks, that has no matching closing bracket. When it is placed in a passage, it indicates that all the prose that follows, until the end of the hook that contains it or the end of the passage, is part of a single hook.

Its main purpose is to let you easily deploy hook changers that apply to the remaining text of the passage, without having to place and keep track of closing brackets at the end. For instance, the [(click:)](#macro_click) macro can be used with the ?page hook name to prompt the reader to click anywhere on the page to reveal the rest of the passage. The unclosed hook markup lets you use it as many times as you want, without needing to balance a number of closing brackets at the end of the passage.

    (click: ?page)[==
    This text won't appear until the page is clicked once.
    (click: ?page)[==
    This text won't appear until the page is clicked twice.
    (click: ?page)[==
    This text won't appear until the page is clicked three times.
    

Other changer macros, such as [(link:)](#macro_link), [(more:)](#macro_more), [(event:)](#macro_event), and [(transition:)](#macro_transition), also work well with this markup.

Also, unclosed hooks can be named, and marked as hidden, just like other hooks.

    |1>[=
    The rest of this passage is in a hook named "1".
    |2)[=
    This part is also in a hidden hook named "2".
    

[](#markup_html)HTML markup
---------------------------

If you are familiar with them, HTML tags (like `<img>`) and HTML escapes (like `&sect;`) can be inserted straight into your passage text. They are treated very naively - they essentially pass through Harlowe's markup-to-HTML conversion process untouched.

#### Example usage:

    <mark>This is marked text.
    
    &para; So is this.
    
    And this.</mark>
    

#### Details:

HTML elements included in this manner are given a `data-raw` attribute by Harlowe, to distinguish them from elements created via markup.

You can include a `<script>` tag in your passage to run Javascript code. The code will run as soon as the containing passage code is rendered. See the "HTML script tag" article for more details.

You can also include a `<style>` tag containing CSS code. The CSS should affect the entire page until the element is removed from the DOM. You could use this in a "header" or "footer" tagged passage, inside an [(if:)](#macro_if) hook, to make the CSS apply to every passage where the [(if:)](#macro_if) condition is fulfilled.

Finally, you can also include HTML comments `<!-- Comment -->` in your code, if you wish to leave reminder messages or explanations about the passage's code to yourself.

[](#markup_html-script-tag)HTML script tag markup
-------------------------------------------------

This section details further information about the workings of `<script>` elements placed inside Harlowe passages, and how the Javascript code relates to the Harlowe code in the containing passage.

If a `<script>` tag has a `type` attribute, and the MIME-type in that attribute is anything other than 'text/javascript', Harlowe will ignore it (in keeping with HTML's normal behaviour).

No Harlowe internal methods and modules are currently accessible inside scripts. However, [jQuery 3.6](https://api.jquery.com/) may be accessed from the `$` global variable. This is a third-party library that Harlowe uses internally and whose code is included in every compiled story, and is _not_ retrieved via CDN or any online connections.

As of Harlowe 3.3.0, `<script>` elements are run while Harlowe runs the macros and expressions in a passage. Thus, if a macro or hook is before the `<script>` tag in the passage, it will be run beforehand, and if a macro or hook is after it, it will be run after it. To defer the execution of Javascript code until the passage is fully rendered or run, consider using a `setTimeout` callback.

As of Harlowe 3.3.0, Javascript code in `<script>` elements (that is, _without_ a `src` attribute) has access to Harlowe variables - both story-wide variables that begin with `$`, and temporary (temp) variables that begin with `_` which are visible in the same hook as the `<script>` element. Harlowe variables are accessed by writing the Harlowe variable name as if it were a Javascript variable. Valid Harlowe variable names are also coincidentally valid Javascript names, so there's no need to escape or modify them. Assigning to these names will immediately update the Harlowe variable, if possible.

#### Example usage:

    (set: _harloweVariable to "You're reading the ")\
    <script>
    _harloweVariable += document.title.bold();
    </script>\
    (print: _harloweVariable)
    

#### Details:

To eliminate any confusion: These names are _not_ Javascript variables, or even global `window` properties, but object getters and setters added to the script's scope using a `with` statement. These names do not pollute or overwrite the global scope (although they shadow any global variables with the same names, such as `window.$arr` being shadowed by a Harlowe variable $arr), and remain accessible and current even inside a callback created within the script. Moreover, even though these names are created using a `with` statement, it is still possible to opt into Javascript's ["strict mode"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) by placing the `"use strict"` pragma at the start of the script.

If "strict mode" is not enabled for the script, an error will **not** occur if you attempt to assign to a Harlowe variable that doesn't exist, such as by writing `$arr = []` - instead, a global Javascript variable will be created.

Harlowe variables in Javascript currently have the following restrictions.

*   Only the following six Javascript datatypes may be assigned to Harlowe variables: booleans, strings, numbers (except NaN and Infinity), Maps (created by Map() or a subclass) that have **only strings as keys**, Sets (created by Set() or a subclass) and Arrays. These last three data structures can only contain the aforementioned six datatypes. Attempting to assign other values will produce an error. The restriction on Map keys may be removed in a future version of Harlowe.
*   Only the following Harlowe datatypes may be accessed from Javascript: numbers, booleans, strings, datamaps, datasets and arrays. These last three data structures can only contain the aforementioned six datatypes. Attempting to read other values from Harlowe variables will produce an error.
*   Of course, if the Harlowe variable was type-restricted (using the `-type` syntax in a [(set:)](#macro_set), [(put:)](#macro_put) or [(unpack:)](#macro_unpack) macro call) then this restriction will also apply to Javascript assignments. Assigning the wrong datatype to a type-restricted Harlowe variable will cause an error.
*   Data structures are deep-cloned when read from Harlowe variables and assigned to Harlowe variables. Hence, Javascript code cannot receive direct references to Harlowe values. This is to prevent Harlowe data structures from being deeply mutated (such as by calling `.set()` on a Harlowe datamap, or `.push()` on a Harlowe array) as a way of circumventing the previous two restrictions.
*   As a consequence of the above, "expando" properties (such as `let a = []; a.pigs = 1;`) are erased from data structures, and data structures created from subclasses of Map, Set or Array will be converted to instances of the base class.
*   Story-wide variables that were only created after the `<script>` was run will NOT be available to the script, even if the script creates a callback function that is called later.

Finally, there is no way to call Harlowe macros from Javascript, at present. There is also no way to access identifiers like `exits` or `visits` from Javascript, at present.

#### A redundant note:

Harlowe is not meant to be a story format that you write using Javascript instead of its own language, and I have taken great care in designing it such that authors are not rewarded for knowing how to write Javascript. The `<script>` element feature is intended solely to complement existing Harlowe code, by allowing small samples of Javascript to minimally interact with it. As such, I recommend using it sparingly and judiciously. That being said, feel free to use this feature in any way you wish, as long as you understand whether your usage lines up with its purpose and intent.

[](#markup_verbatim)Verbatim markup
-----------------------------------

As plenty of symbols have special uses in Harlowe, you may wonder how you can use them normally, as mere symbols, without invoking their special functionality. You can do this by placing them between a pair of `` ` `` marks.

If you want to escape a section of text which already contains single `` ` `` marks, simply increase the number of `` ` `` marks used to enclose them.

#### Example usage:

*   ``I want to include `[[double square brackets]]` in my story, so I use grave ` marks.``
*   ```I want to include ``single graves ` in my story``, so I place them between two grave marks.```

There's no hard limit to the amount of graves you can use to enclose the text.

If you want to make an entire hook to be displayed verbatim, without its markup being rendered, you can attach the (verbatim:) changer.

[](#markup_bulleted-list)Bulleted list markup
---------------------------------------------

You can create bullet-point lists in your text by beginning lines with an asterisk `*`, followed by [whitespace](#markup_whitespace), followed by the list item text. The asterisk will be replaced with an indented bullet-point. Consecutive lines of bullet-point items will be joined into a single list, with appropriate vertical spacing.

Remember that there must be whitespace between the asterisk and the list item text! Otherwise, this markup will conflict with the emphasis markup.

If you use multiple asterisks (`**`, `***` etc.) for the bullet, you will make a nested list, which is indented deeper than a normal list. Use nested lists for "children" of normal list items.

#### Example usage:

     * Bulleted item
        *    Bulleted item 2
      ** Indented bulleted item
    

[](#markup_numbered-list)Numbered list markup
---------------------------------------------

You can create numbered lists in your text, which are similar to bulleted lists, but feature numbers in place of bullets. Simply begin single lines with `0.`, followed by [whitespace](#markup_whitespace), followed by the list item text. Consecutive items will be joined into a single list, with appropriate vertical spacing. Each of the `0.`s will be replaced with a number corresponding to the item's position in the list.

Remember that there must be whitespace between the `0.` and the list item text! Otherwise, it will be regarded as a plain number.

If you use multiple `0.` tokens (`0.0.`, `0.0.0.` etc.) for the bullet, you will make a nested list, which uses different numbering from outer lists, and are indented deeper. Use nested lists for "children" of normal list items.

#### Example usage:

    0. Numbered item
       0. Numbered item 2
     0.0. Indented numbered item
    

[](#markup_aligner)Aligner markup
---------------------------------

An aligner is a special single-line token which specifies the alignment of the subsequent text. It is essentially 'modal' - all text from the token onward (until another aligner is encountered) is wrapped in a `<tw-align>` element (or unwrapped in the case of left-alignment, as that is the default).

*   Right-alignment, resembling `==>` is produced with 2 or more `=`s followed by a `>`.
*   Left-alignment, resembling `<==` is restored with a `<` followed by 2 or more `=`.
*   Justified alignment, resembling `<==>` is produced with `<`, 2 or more `=`, and a closing `>`.
*   Mixed alignment is 1 or more `=`, then `><`, then 1 or more `=`. The ratio of quantity of left `=`s and right `=`s determines the alignment: for instance, one `=` to the left and three `=`s to the right produces 25% left alignment.

Any amount of [whitespace](#markup_whitespace) is permitted before or after each token, as long as it is on a single line.

#### Example usage:

    ==>
    This is right-aligned
      =><=
    This is centered
     <==>
    This is justified
    <==
    This is left-aligned (undoes the above)
    ===><=
    This has margins 3/4 left, 1/4 right
      =><=====
    This has margins 1/6 left, 5/6 right.
    
    (Try expanding this code preview using the bar on the left.)
    

You may apply alignment to specific hooks in your passages by attaching the [(align:)](#macro_align) macro to them.

[](#markup_column)Column markup
-------------------------------

Column markup is, like aligner markup, a special single-line token which indicates that the subsequent text should be laid out in columns. They consist of a number of `|` marks, indicating the size of the column relative to the other columns - the total width of all columns equals the page width, and this is divided among the columns by their `|` marks. They also have a number of `=` marks surrounding it, indicating the size of the column's margins in CSS "em" units (which are about the width of a capital M).

All text from the token onward, until the next token is encountered, is contained in the specified column. A `|==|` token ends the set of columns and returns the page to normal.

Columns are laid out from left to right, in order of appearance.

Any amount of [whitespace](#markup_whitespace) is permitted before or after each token, as long as it is on a single line.

#### Example usage:

    (change:?passage, (text-size:0.6))
    |==
    This is in the leftmost column, which has a right margin of about 2 letters wide.
        =|||=
    This is in the next column, which has margins of 1 letter wide. It is three times as wide as the left column.
     =====||
    This is in the right column, which has a right margin of about 5 letters wide. It is twice as wide as the left column.
      |==|
    This text is not in columns, but takes up the entire width, as usual.
    
    (Try expanding this code preview using the bar on the left.)
    

You can create nested columns by enclosing the inner set of columns in an unnamed hook, like so.

    (change:?passage, (text-size:0.6))
    |==
    This is the outer left column.
    ==|
    This is the outer right column.
    [\
      |==
    This is the inner left column, inside the outer right column.
      ==|
    This is the inner right column, inside the outer right column.
    \]
    

[](#markup_heading)Heading markup
---------------------------------

Heading markup is used to create large headings, such as in structured prose or title splash passages. It is almost the same as the Markdown heading syntax: it starts on a fresh line, has one to six consecutive `#`s, and ends at the line break.

#### Example usage:

    #Level 1 heading renders as an enclosing `<h1>`
       ###Level 3 heading renders as an enclosing `<h3>`
     ######Level 6 heading renders as an enclosing `<h6>`
    

As you can see, unlike in Markdown, opening [whitespace](#markup_whitespace) is permitted before the first #.

[](#markup_horizontal-rule)Horizontal rule markup
-------------------------------------------------

A hr (horizontal rule) is a thin horizontal line across the entire passage. In HTML, it is a `<hr>` element. In Harlowe, it is an entire line consisting of 3 or more consecutive hyphens `-`.

#### Example usage:

            ---
      ----
         -----
    

Again, opening [whitespace](#markup_whitespace) is permitted prior to the first `-` and after the final `-`.

[](#markup_whitespace)Whitespace markup
---------------------------------------

"Whitespace" is a term that refers to "space" characters that you use to separate programming code tokens, such as the spacebar space, and the tab character. When used inside the macro syntax, they are considered interchangeable in type and quantity - using two spaces usually has the same effect as using one space, one tab, and so forth.

Harlowe tries to also recognise most forms of [Unicode-defined whitespace](https://en.wikipedia.org/wiki/Whitespace_character#Unicode), including the quads, the per-em and per-en spaces, but not the zero-width space characters (as they may cause confusion and syntax errors if unnoticed in your code).

[](#markup_collapsing-whitespace)Collapsing whitespace markup
-------------------------------------------------------------

When working with macros, HTML tags and such, it's convenient for readability purposes to space and indent the text. However, this [whitespace](#markup_whitespace) will also appear in the compiled passage text. You can get around this by placing the text between `{` and `}` marks. Inside, all runs of consecutive whitespace (line breaks, spaces) will be reduced to just one space.

#### Example usage:

    {
        This sentence
        will be
        (set: $event to true)
        written on one line
        with only single spaces.
    }
    

#### Details:

If you wish to still have line breaks within the markup that won't be collapsed, you can use HTML `<br>` tags (see the HTML markup section for more information about raw HTML tags).

You can nest this markup within itself - `{Good { gumballs!}}` - but the inner pair won't behave any differently as a result of being nested.

Text inside macro calls (in particular, text inside strings provided to macro) will not be collapsed. Neither will text _outputted_ by macro calls, either - `{(print:"\n\n\n")}` will still print 3 newlines (see the String article for the meaning of the \\n escape code), and `{(display:"Attic")}` will still display all of the whitespace in the "Attic" passage.

Also, newlines inside the verbatim syntax will not be collapsed either.

    {Thunder`
    `hound}
    

Note that Harlowe's default CSS already collapses consecutive spaces in a single line, but not vertical whitespace (which is converted to `<br>` elements). If you change it, using the `white-space` CSS property (such as by `white-space:break-spaces` in your story stylesheet), then the effects of this syntax in removing horizontal whitespace will become noticeable.

If the markup contains a [(replace:)](#macro_replace) command attached to a hook, the hook will still have its whitespace collapsed, even if it is commanded to replace text outside of the markup.

You may apply this collapsing effect to specific hooks using the [(collapse:)](#macro_collapse) macro. In particular, if you wish for the entire passage's whitespace to collapse, consider using (change: ?passage) and [(collapse:)](#macro_collapse).

If you only want to remove specific line breaks, consider the escaped line break markup.

[](#markup_unclosed-collapsing-whitespace)Unclosed collapsing whitespace markup
-------------------------------------------------------------------------------

This is a special version of the collapsing [whitespace](#markup_whitespace) markup - an open curly brace `{`, followed by any number of `=` marks, that has no matching closing brace. When it is placed in a passage, it indicates that all the prose that follows, until the end of the hook that contains it or the end of the passage, should have its whitespace collapsed.

As with the the unclosed hook markup, this has advantages in situations where keeping track of closing brackets would be slightly inconvenient. If you use revision macros or enchantment macros like [(change:)](#macro_change), [(replace:)](#macro_replace), [(click:)](#macro_click) and so forth, you can place those at the end of your passage, and use a single `{=` to separate them from the rest of the passage. Additionally, you can place a `{=` at the start of your passage to cause the entire passage's whitespace to be collapsed, allowing you to write additional prose without needing to have a closing brace after all of your additions.

    This part of the passage
    has normal whitespace.
    {=
    This part of the passage
    has collapsed
    whitespace.
    

All of the details pertaining to the collapsing markup apply here - consult its article for more information.

[](#markup_escaped-line-break)Escaped line break markup
-------------------------------------------------------

Sometimes, you may want to write an especially long line, potentially containing many macros. This may not be particularly readable in the passage editor, though. One piece of markup that may help you is the `\` mark - placing it just before a line break, or just after it, will cause the line break to be removed from the passage, thus "joining together" the lines.

#### Example usage:

    This line \
    and this line
    \ and this line, are actually just one line.
    

#### Details:

There must not be any [whitespace](#markup_whitespace) between the `\` and the line break. Otherwise, it won't work. (In the Twine editor, the `\` will change from yellow to gray, indicating it's no longer considered an escaped line break.)

Like most passage text markup, this cannot be used inside a macro call (for instance, `(print: \`  
`3)`) - but since line breaks between values in macro calls are ignored, this doesn't matter.

List of macros
==============

[](#macro_set)The (set: ) macro
-------------------------------

### (set: _...[VariableToValue](#type_variabletovalue)_) → _Instant_

Stores data values in variables, optionally allowing you to permanently restrict the variable to a single [datatype](#type_datatype).

#### Example usage:

*   `(set: $battlecry to "Save a " + $favouritefood + " for me!")` creates a variable called $battlecry containing a [string](#type_string).
*   `(set: _dist to $altitude - $enemyAltitude)` creates a temp variable called \_dist.
*   `(set: num-type $funds to 0)` sets a variable and restricts its type to [numbers](#type_number), preventing non-numbers from ever being (set:) into it by accident.
*   `(set: const-type $robotText to (font:"Courier New"))` sets a variable and makes it so it can't ever be set to another value.
*   `(set: (p-either:"Ms.","Mr.","Mx.")-type $charTitle to "Mx.")` sets a variable that can only hold the strings "Mr.", "Ms." or "Mx.".

#### Rationale:

Variables are data storage for your game. You can store data values under special names of your choosing, and refer to them later.

There are two kinds of variables. Normal variables, whose names begin with `$`, persist between passages, and should be used to store data that will be needed throughout the entire game. Temp variables, whose names begin with `_`, only exist inside the hook or passage that they're first (set:), and are forgotten after the hook or passage ends. You should use temp variables if you're writing passage code that mustn't accidentally affect any other passages' variables (by using (set:) on a variable name that someone else was using for something different). This can be essential in collaborative work with other authors working on the same story independently, or when writing code to be used in multiple stories.

The following example demonstrates where temp variables are usable.

    (set: _a to 1) <- This is usable everywhere in this passage.
    [
        (set: _b to 1) <-- This is only usable inside this hook.
        (set: _a to it + 1) <-- This changes the outer _a variable.
        [
            (print: _a + _b) <-- You can refer to both _a or _b in this hook.
        ]
    ]
    (print: _b) <-- This will cause an error.
    

Variables have many purposes: keeping track of what the player has accomplished, managing some other state of the story, storing hook styles and [changers](#type_changer), and other such things. You can display variables by putting them in passage text, attach them to hooks, and create and change them using the (set:) and [(put:)](#macro_put) macros.

#### Details:

Even though named hooks' names are case-insensitive, variable names are case-sensitive. So, `$Chips` and `$chips` are considered different variables.

In its basic form, a variable is created or changed using `(set:` variable `to` value `)`. You can also set multiple variables in a single (set:) by separating each VariableToValue with commas: `(set: $weapon to 'hands', $armour to 'naked')`, etc. **Note**: currently, each value in a VariableToValue is evaluated before any of them are stored in their variables. This means that, for instance, `(set: $olives to 5)(set: $olives to 2, $grapes to $olives - 1)` will, in the second (set:) call, cause `2` and `$olives - 1` to be evaluted to `2` and `5 - 1` (i.e. 4) before being put in $olives and $grapes, respectively. This may change in a future version of Harlowe.

You can also use `it` in expressions on the right-side of `to`. Much as in other expressions, it's a shorthand for what's on the left side: `(set: $vases to it + 1)` is a shorthand for `(set: $vases to $vases + 1)`.

Due to the variable syntax potentially conflicting with dollar values (such as $1.50) in your story text, variables cannot begin with a numeral.

#### Typed variables:

A common source of errors in a story is when a variable holding one type of data is mistakenly overridden with a different type of data, such as when putting `"1"` (the string "1") into a variable that should hold numbers. A good way to guard against this is to make the variable a **typed variable**, which is permanently restricted to a single datatype. The first time you set data to the variable, write `(set: num-type $days to 1)` to permanently restrict $days to numbers. That way, if you accidentally put `"1"` into it, an error will appear immediately, explaining the issue. Moreover, typed variables serve a code documentation purpose: they help indicate and explain the purpose of a variable by showing what data is meant to be in it. You can use any datatype before the `-type` syntax - see the article about datatype data for more details.

In addition to just restricting a variable to a type, you may wish to specify that a variable should only hold one value for the entire story - a style changer, for instance, or a [datamap](#type_datamap) holding fixed values for a procedural-generation algorithm. For these, you want to use the `const` (short for "constant") datatype. Using this, the variable is guaranteed to constantly hold that value for the entirety of the story (or, if it's a temp variable, the passage or hook).

#### See also:

[(put:)](#macro_put), [(move:)](#macro_move), [(unpack:)](#macro_unpack)

Added in: 1.0.0

[](#macro_put)The (put: ) macro
-------------------------------

### (put: _...[VariableToValue](#type_variabletovalue)_) → _Instant_

A left-to-right version of [(set:)](#macro_set) that requires the word `into` rather than `to`.

#### Example usage:

*   `(put: "Save a " + $favouritefood + " for me!" into $battlecry)` creates a variable called $battlecry.
*   `(put: $altitude - $enemyAltitude into _dist)` creates a temp variable called \_dist.
*   `(put: 0 into num-type $funds)` sets a variable and restricts its type to [numbers](#type_number), preventing non-numbers from ever being (put:) into it by accident.
*   `(put: (font:"Courier New") into const-type $robotText)` sets a variable and makes it so it can't ever be set to another value.

#### Rationale:

This macro has an identical purpose to [(set:)](#macro_set) - it creates and changes variables. For a basic explanation, see the rationale for [(set:)](#macro_set).

Almost every programming language has a [(set:)](#macro_set) construct, and most of these place the variable on the left-hand-side. However, a minority, such as HyperTalk, place the variable on the right. Harlowe allows both to be used, depending on personal preference. [(set:)](#macro_set) reads as `(set:` variable `to` value `)`, and (put:) reads as `(put:` value `into` variable `)`.

#### Details:

Just as with [(set:)](#macro_set), a variable is changed using `(put:` value `into` variable `)`. You can also set multiple variables in a single (put:) by separating each VariableToValue with commas: `(put: 2 into $batteries, 4 into $bottles)`, etc.

You can also use typed variables with (put:) - `(put: 1 into num-type $days)` permanently restricts $days to numbers. Consult the article about [(set:)](#macro_set) for more information about typed variables.

`it` can also be used with (put:), but, interestingly, it's used on the right-hand side of the expression: `(put: $eggs + 2 into it)`.

#### See also:

[(set:)](#macro_set), [(move:)](#macro_move), [(unpack:)](#macro_unpack)

Added in: 1.0.0

[](#macro_move)The (move: ) macro
---------------------------------

### (move: _...[VariableToValue](#type_variabletovalue)_) → _Instant_

A variant of [(put:)](#macro_put) that, if transferring data from a data structure, deletes the source value after copying it - in effect moving the value from the source to the destination.

#### Example usage:

*   `(move: $arr's 1st into $var)`

#### Rationale:

You'll often use data structures such as [arrays](#type_array) or [datamaps](#type_datamap) as storage for values that you'll only use once, such as a list of names to print out. When it comes time to use them, you can remove it from the structure and retrieve it in one go.

#### Details:

You must use the `into` keyword, like [(put:)](#macro_put), with this macro. This is because, like [(put:)](#macro_put), the destination of the value is on the right, whereas the source is on the left.

As with [(set:)](#macro_set) and [(put:)](#macro_put), you can also change multiple variables in a single (move:) by separating each VariableToValue with commas: `(move: $a's 1st into $b, $a's 2nd into $c)`, etc. Also, unpacking syntax (described in detail in [(unpack:)](#macro_unpack)'s article) can be used with (move:) as well - `(move: $array into (a: $x, $y))` will cause only the first and second values of $array to be moved into $x and $y.

If the data value you're accessing cannot be removed - for instance, if it's an array's `length` - then an error will be produced.

This macro works very well with the `random` data value of arrays: `(move: $deck's random into $card)` will remove a random value from $deck and put it into $card. Thus, you can use arrays as random "decks" of values that you can draw from and use once in your story.

Note that this will only delete the data from the source if the source is inside a data structure. Moving from variable to variable, such as by `(move:$p into $q)`, won't cause $p to be deleted.

Just as with [(set:)](#macro_set) or [(put:)](#macro_put), typed variables can also be used with the destination variable of (move:). Writing `(move: $enemies's 1st into dm-type $currentEnemy)` will move a datamap from $enemies's 1st and put it into $currentEnemy, while also restricting $currentEnemy to datamap data for the rest of the story. Note that if $enemies's 1st is not, in fact, a datamap, an error will result.

#### See also:

[(put:)](#macro_put), [(set:)](#macro_set)

Added in: 1.0.0

[](#macro_print)The (print: ) macro
-----------------------------------

### (print: _Any_) → _[Command](#type_command)_

This [command](#type_command) prints out any data provided to it, as text.

#### Example usage:

`(print: $var + "s")`

#### Details:

It is capable of printing things which [(str:)](#macro_str) cannot convert to a [string](#type_string), such as [changers](#type_changer) - but these will usually become bare descriptive text like `[A (font: ) command]`. You may find this useful for debugging purposes.

This command can be stored in a variable instead of being performed immediately. Notably, the expression to print is stored inside the command, instead of being re-evaluated when it is finally performed. So, a passage that contains:

    (set: $name to "Dracula")
    (set: $p to (print: "Count " + $name))
    (set: $name to "Alucard")
    $p
    

will still result in the text `Count Dracula`. This is not particularly useful compared to just setting `$p` to a string, but is available nonetheless.

Note that, once stored in a variable, a (print:) command is not a string. So, you can't provide it to [(upperfirst:)](#macro_upperfirst) and other such macros. `(upperfirst: (print: $name))` will produce an error. However, if $name contains a string, you can provide it to [(upperfirst:)](#macro_upperfirst) before giving it to (print:), such as `(print: (upperfirst: $name))`.

If you need this command to print strings without the markup in the string being rendered, you may use the [(verbatim:)](#macro_verbatim) changer to change the command, or use the [(verbatim-print:)](#macro_verbatim-print) variant instead.

#### See also:

[(str:)](#macro_str), [(display:)](#macro_display), [(verbatim-print:)](#macro_verbatim-print)

Added in: 1.0.0

[](#macro_display)The (display: ) macro
---------------------------------------

### (display: _[String](#type_string)_) → _[Command](#type_command)_

This [command](#type_command) writes out the contents of the passage with the given [string](#type_string) name. If a passage of that name does not exist, this produces an error.

#### Example usage:

`(display: "Cellar")` prints the contents of the passage named "Cellar".

#### Rationale:

Suppose you have a section of code or source that you need to include in several different passages. It could be a status display, or a few lines of descriptive text. Instead of manually copy-pasting it into each passage, consider placing it all by itself in another passage, and using (display:) to place it in every passage. This gives you a lot of flexibility: you can, for instance, change the code throughout the story by just editing the displayed passage.

#### Details:

Text-targeting macros (such as [(replace:)](#macro_replace)) inside the displayed passage will affect the text and hooks in the outer passage that occur earlier than the (display:) command. For instance, if passage A contains `(replace:"Prince")[Frog]`, then another passage containing `Princes(display:'A')` will result in the text `Frogs`.

Like all commands, this can be set into a variable. It's not particularly useful in that state, but you can use that variable in place of that command, such as writing `$var` in place of `(display: "Yggdrasil")`.

Added in: 1.0.0

[](#macro_if)The (if: ) macro
-----------------------------

### (if: _[Boolean](#type_boolean)_) → _[Changer](#type_changer)_

This macro accepts only [booleans](#type_boolean) (variables with `true` or `false`, or expressions using `is`, `contains`, or another such operator), and produces a [changer](#type_changer) that can be attached to hooks to hide them "if" the value was false.

#### Example usage:

`(if: $legs is 8)[You're a spider!]` will show the `You're a spider!` hook if `$legs` is `8`. Otherwise, it is not run.

#### Rationale:

In a story with multiple paths or threads, where certain events could occur or not occur, it's common to want to run a slightly modified version of a passage reflecting the current state of the world. The (if:), [(unless:)](#macro_unless), [(else-if:)](#macro_else-if) and [(else:)](#macro_else) macros let these modifications be switched on or off depending on variables, comparisons or calculations of your choosing.

#### Details:

Note that the (if:) macro only runs once, when the passage or hook containing it is rendered. Any future change to the condition (such as a [(link:)](#macro_link) containing a [(set:)](#macro_set) that changes a variable) won't cause it to "re-run", and show/hide the hook anew.

However, if you attach (if:) to a named hook, and the (if:) hides the hook, you can manually reveal the hook later in the passage (such as, after a [(link:)](#macro_link) has been clicked) by using the [(show:)](#macro_show) macro to target the hook. Named hooks hidden with (if:) are thus equivalent to hidden named hooks like `|this)[]`.

#### Alternatives:

The (if:) and [(hidden:)](#macro_hidden) macros are not the only attachment that can hide or show hooks! In fact, a variable that contains a boolean can be used in its place. For example:

    (set: $foundWand to true, $foundHat to true, $foundBeard to true)
    (set: $isAWizard to $foundWand and $foundHat and $foundBeard)
    
    $isAWizard[You wring out your beard with a quick twisting spell.]
    You step into the ruined library.
    $isAWizard[The familiar scent of stale parchment comforts you.]
    

By storing a boolean inside `$isAWizard`, it can be used repeatedly throughout the story to hide or show hooks as you please.

if you want to conditionally display very short [strings](#type_string), or small values inside a macro call, you may want to use the shorter [(cond:)](#macro_cond) macro instead.

#### See also:

[(unless:)](#macro_unless), [(else-if:)](#macro_else-if), [(else:)](#macro_else), [(cond:)](#macro_cond), [(show:)](#macro_show)

Added in: 1.0.0

[](#macro_unless)The (unless: ) macro
-------------------------------------

### (unless: _[Boolean](#type_boolean)_) → _[Changer](#type_changer)_

This macro is the negated form of [(if:)](#macro_if): it accepts only [booleans](#type_boolean), and returns a [changer](#type_changer) that can be attached hooks to hide them "if" the value was true.

For more information, see the documentation of [(if:)](#macro_if).

#### Example usage:

    (set: $form to "human")
    (unless: $form is "duck")[The cold autumn rain chills your skin.]
    

Added in: 1.0.0

[](#macro_else-if)The (else-if: ) macro
---------------------------------------

### (else-if: _[Boolean](#type_boolean)_) → _[Changer](#type_changer)_

This macro's result changes depending on whether the previous hook in the passage was shown or hidden. If the previous hook was shown, then this [changer](#type_changer) hides the attached hook. Otherwise, it acts like [(if:)](#macro_if), showing the attached hook if it's true, and hiding it if it's false. If there was no preceding hook before this, then an error message will be printed.

#### Example usage:

    Your stomach makes {
    (if: $size is 'giant')[
        an intimidating rumble! You'll have to eat plenty of trees.
    ](else-if: $size is 'big')[
        a loud growl. You're hungry for some shrubs.
    ](else: )[
        a faint gurgle. You hope to scavenge some leaves.
    ]}
    

#### Rationale:

If you use the [(if:)](#macro_if) macro, you may find you commonly use it in forked branches of source: places where only one of a set of hooks should be displayed. In order to make this so, you would have to phrase your [(if:)](#macro_if) expressions as "if A happened", "if A didn't happen and B happened", "if A and B didn't happen and C happened", and so forth, in that order.

The (else-if:) and [(else:)](#macro_else) macros are convenient variants of [(if:)](#macro_if) designed to make this easier: you can merely say "if A happened", "else, if B happened", "else, if C happened" in your code.

#### Details:

Just like the [(if:)](#macro_if) macro, (else-if:) only checks its condition once, when the passage or hook contaning it is rendered.

The (else-if:) and [(else:)](#macro_else) macros do not need to only be paired with [(if:)](#macro_if)! You can use (else-if:) and [(else:)](#macro_else) in conjunction with [boolean](#type_boolean) variables, like so:

    (set:$married to false, $date to false)
    $married[You hope this warrior will someday find the sort of love you know.]
    (else-if: not $date)[You hope this warrior isn't doing anything this Sunday (because \
    you've got overtime on Saturday.)]
    

If you attach (else-if:) to a named hook, and the (else-if:) hides the hook, you can reveal the hook later in the passage by using the [(show:)](#macro_show) macro to target the hook.

if you want to conditionally display very short [strings](#type_string), or small values inside a macro call, you may want to use the shorter [(cond:)](#macro_cond) macro instead.

#### See also:

[(if:)](#macro_if), [(unless:)](#macro_unless), [(else:)](#macro_else), [(cond:)](#macro_cond), [(show:)](#macro_show)

Added in: 1.0.0

[](#macro_else)The (else: ) macro
---------------------------------

### (else: ) → _[Changer](#type_changer)_

This is a convenient limited variant of the [(else-if:)](#macro_else-if) macro. It will simply show the attached hook if the preceding hook was hidden, and hide it otherwise. If there was no preceding hook before this, then an error message will be printed.

#### Example usage:

    The coins fall... 
    \(if: (either:false, false, false, true))
        [and both land on tails! That means you've won the bet!]
    \(else: )
        [and one of them lands heads-up.]
    

#### Rationale:

After you've written a series of hooks guarded by [(if:)](#macro_if) and [(else-if:)](#macro_else-if), you'll often have one final branch to show, when none of the above have been shown. (else:) is the "none of the above" variant of [(else-if:)](#macro_else-if), which needs no [boolean](#type_boolean) expression to be provided. It's essentially the same as `(else-if: true)`, but shorter and more readable.

For more information, see the documentation of [(else-if:)](#macro_else-if).

#### Notes:

Just like the [(if:)](#macro_if) macro, (else:) only checks its condition once, when the passage or hook contaning it is rendered.

Due to a mysterious quirk, it's possible to use multiple (else:) macro calls in succession:

    (set: $isUtterlyEvil to (either:true,false))
    $isUtterlyEvil[You suddenly grip their ankles and spread your warm smile into a searing smirk.]
    (else:​)[In silence, you gently, reverently rub their soles.]
    (else:​)[Before they can react, you unleash a typhoon of tickles!]
    (else:​)[They sigh contentedly, filling your pious heart with joy.]
    

This usage can result in a somewhat puzzling passage source structure, where each (else:) hook alternates between visible and hidden depending on the first such hook. So, it is best avoided.

If you attach (else:) to a named hook, and the (else:) hides the hook, you can reveal the hook later in the passage by using the [(show:)](#macro_show) macro to target the hook.

#### See also:

[(if:)](#macro_if), [(unless:)](#macro_unless), [(else-if:)](#macro_else-if), [(cond:)](#macro_cond), [(show:)](#macro_show)

Added in: 1.0.0

[](#macro_for)The (for: ) macro
-------------------------------

### (for: _[Lambda](#type_lambda), \[...Any\]_) → _[Changer](#type_changer)_

Also known as: [(loop:)](#macro_loop)

When attached to a hook, this repeats the attached hook, setting a temporary variable to a different value on each repeat.

#### Example usage:

*   `(for: each _item, ...$arr) [You have the _item.]` prints "You have the " and the item, for each item in $arr.
*   `(for: _ingredient where it contains "petal", ...$reagents) [Cook the _ingredient?]` prints "Cook the " and the [string](#type_string), for each string in $reagents which contains "petal".

#### Rationale:

Suppose you're using [arrays](#type_array) to store strings representing inventory items, or character [datamaps](#type_datamap), or other kinds of sequential game information - or even just built-in arrays like [(history:)](#macro_history) - and you want to print out a sentence or paragraph for each item. The (for:) macro can be used to print something "for each" item in an array easily - simply write a hook using a temp variable where each item should be printed or used, then give (for:) an "each" [lambda](#type_lambda) that uses the same temp variable.

#### Details:

If no extra values are given after the lambda (for instance, by using `...` with an empty array), then nothing will happen and the attached hook will not be printed at all.

Don't make the mistake of believing you can alter an array by trying to [(set:)](#macro_set) the temp variable in each loop - such as `(for: each _a, ...$arr)[(set: _a to it + 1)]`. This will NOT change $arr - only the temp variable will change (and only until the next loop, where another $arr value will be put into it). If you want to alter an array item-by-item, use the [(altered:)](#macro_altered) macro.

The temp variable inside the hook will shadow any other identically-named temp variables outside of it: if you `(set: _a to 1)`, then `(for: each _a, 2,3)[ (print: _a) ]`, the inner hook will print "2" and "3", and you won't be able to print or set the "outer" \_a.

You may want to simply print several copies of a hook a certain [number](#type_number) of times, without any particular array data being looped over. You can use the [(range:)](#macro_range) macro with it instead: `(for: each _i, ...(range:1,10))`, and not use the temp variable inside the hook at all.

As it is a [changer](#type_changer) macro, (for:)'s value is a changer which can be stored in a variable - this [command](#type_command) stores all of the values originally given to it, and won't reflect any changes to the values, or their container arrays, since then.

#### Alternatives:

You may be tempted to use (for:) not to print anything at all, but to find values inside arrays using [(if:)](#macro_if), or form a "total" using [(set:)](#macro_set). The lambda macros [(find:)](#macro_find) and [(folded:)](#macro_folded), while slightly less straightforward, are recommended to be used instead.

#### See also:

[(find:)](#macro_find), [(folded:)](#macro_folded), [(if:)](#macro_if)

Added in: 2.0.0

[](#macro_either)The (either: ) macro
-------------------------------------

### (either: _...Any_) → _Any_

Give this macro several values, separated by commas, and it will pick and return one of them randomly.

#### Example usage:

*   `A (either: "slimy", "goopy", "slippery") puddle` will randomly be "A slimy puddle", "A goopy puddle" or "A slippery puddle".
*   `(go-to: (either: "Void 2", "Void 3", "Void 4"))` will send the player to one of three random passages.
*   `(text-colour:(either: red, yellow, green))` will create a [(text-colour:)](#macro_text-colour) [changer](#type_changer) using one of the three [colours](#type_colour).

#### Rationale:

There are plenty of occasions where you might want random elements in your story: a few random adjectives or flavour text lines to give repeated play-throughs variety, for instance, or a few random links for a "maze" area. For these cases, you'll probably want to simply select from a few possibilities. The (either:) macro provides this functionality.

#### Details:

This is one of the features that uses Harlowe's pseudo-random [number](#type_number) generator. If you use [(seed:)](#macro_seed) at the start of the story, the chosen value will be predetermined based on the seed [string](#type_string), and how many other random macros and features have been used before it.

As with many macros, you can use the spread `...` operator to place all of the values in an [array](#type_array) or [dataset](#type_dataset) into (either:), and pick them randomly. `(either: ...$array)`, for instance, will choose one possibility from all of the array contents.

If you want to pick two or more values randomly, you may want to use the [(shuffled:)](#macro_shuffled) macro, and extract a subarray from its result.

If you want to pick a value more reliably - for instance, to pick a value randomly, but keep using that same value in subsequent visits to the passage - you may want to store an (either:) result in a variable using [(set:)](#macro_set) in an earlier passage, and use that whenever you want to use the result.

#### See also:

[(nth:)](#macro_nth), [(random:)](#macro_random), [(shuffled:)](#macro_shuffled), [(cond:)](#macro_cond)

Added in: 1.0.0

[](#macro_cond)The (cond: ) macro
---------------------------------

### (cond: _[Boolean](#type_boolean), Any, ...Any_) → _Any_

When given a sequence of [booleans](#type_boolean) (the "conditions") paired with values, this provides the first value that was paired with a `true` condition. This can give you one value or another based on a quick check.

#### Example usage:

*   `(set: $status to (cond: $cash >= 300, "stable", $cash >= 200, "lean", $cash >= 100, "skint", "broke"))`
*   `Your (cond: $wonTheRace, "gasps of triumph", "wheezes of defeat") drown out all other noise.`

#### Rationale:

While the [(if:)](#macro_if), [(else:)](#macro_else) and [(else-if:)](#macro_else-if) macros allow blocks of passage prose to be conditionally displayed and code to be conditionally run, there are plenty of situations where you'd prefer to succinctly select values inside macro calls, or select from multiple values, without needing to write multiple [(else-if:)](#macro_else-if)s or [(set:)](#macro_set)s for each possibility. The (cond:) macro (short for "condition") offers such utility.

In situations where you would write something like this,

    {(set:$lostTheSword to (either:true,false))
    (if: not $lostTheSword)[
    (set: $weapon to "a holy sword")
    ](else: )[
    (set:$weapon to "an unholy swear-word")
    ]}
    

you could instead simply write this.

`(set:$lostTheSword to (either:true,false))(set: $weapon to (cond: not $lostTheSword, "a holy sword", "an unholy swear-word"))`

#### Details:

This macro is intended to resemble the "cond" function in Lisp, as well as the "ternary" operator in numerous other programming languages (though it does _not_ perform short-circuiting). It also might remind you of the values given to [(dm:)](#macro_dm) - a piece of [metadata](#type_metadata), followed by its matching data - except that [(dm:)](#macro_dm) ties names to data, whereas this ties conditions to data.

If only one value was given to (cond:), then that value will be returned as-is.

Except for the last, every odd value given to (cond:) must be a boolean, or an error will occur.

#### See also:

[(if:)](#macro_if), [(dm:)](#macro_dm), [(nth:)](#macro_nth)

Added in: 3.1.0

[](#macro_nth)The (nth: ) macro
-------------------------------

### (nth: _[Number](#type_number), ...Any_) → _Any_

Given a positive whole [number](#type_number) and a sequence of values, this selects the nth value in the sequence, where n is the number. If n is larger than the number of items in the sequence, the selection loops around to the start.

#### Example usage:

*   `(nth: visit, "Hi!", "Hello again!", "Oh, it's you!", "Hey!")` will display a different salutation, in sequence, on the first, second, third and fourth visits, then return to "Hi!" on the fifth visit, and so on. This uses the "visits" identifier (also known as "visit").
*   `(nth: turn, "Full Moon", "Waning", "Halfmoon", "Crescent", "New Moon", "Crescent", "Halfmoon", "Waxing")` displays a different moon phase based on the current turn. This uses the "turns" identifier (also known as "turn"). This could be used in a "header" or "footer" tagged passage to display a moon phase in every passage.

#### Rationale:

This macro is designed to be used in passage prose, letting you quickly display one of a varying range of phrases or sentences based on a certain value. In addition to being useful with story variables, it's useful with the `visit` identifier, allowing you to vary the text shown on each subsequent visit to a passage, with more consistent variation than if you were using [(either:)](#macro_either).

However, you can use (nth:) with any kind of value, not just [strings](#type_string). For instance, `(text-colour: (nth: $wounds, white, yellow, red))` will produce a [(text-colour:)](#macro_text-colour) [changer](#type_changer) that differs in [colour](#type_colour) based on the number in $wounds (up to 3).

#### Details:

You can, of course, access a specific value in a sequence using the [(a:)](#macro_a) macro and the `'s` or `of` syntax - `(a: 1,2,3)'s ($n)` is functionally very similar to `(nth: $n, 1, 2, 3)`, and other uses of the (nth:) macro. (nth:), however, allows the given value to exceed the bounds of the sequence - `(nth: 4, 1, 2, 3)` would produce 1, whereas `(a: 1,2,3)'s 4th` would produce an error.

If you wish to use (nth:) to display very large blocks of prose, you may wish to simply put that prose in hooks, and use [(if:)](#macro_if) to selectively display one, such as by writing `(if: visits is 3)`.

If you don't want the "looping" to occur - if you want to only return the final value if the number exceeds the sequence - you can combine this macro with [(min:)](#macro_min). `(nth: (min: 3, visit), "", "", "")`

You may be tempted to combine this macro with [(shuffled:)](#macro_shuffled), as in `(nth: visit, ...(shuffled: "A", "B", "C"))` - however, this will NOT behave any differently from just using [(either:)](#macro_either) - each visit, the [(shuffled:)](#macro_shuffled) macro will shuffle the sequence in a different way, so you can't guarantee that different values will be shown.

#### See also:

[(cond:)](#macro_cond), [(if:)](#macro_if), [(either:)](#macro_either)

Added in: 3.1.0

[](#macro_verbatim)The (verbatim: ) macro
-----------------------------------------

### (verbatim: ) → _[Changer](#type_changer)_

Also known as: [(v6m:)](#macro_v6m)

When attached to a hook or [command](#type_command), the markup inside that would normally be rendered into HTML is instead presented as plain text, as if the verbatim markup was used on it.

#### Example usage:

``(v6m: )[ \(`A`)/ ]`` prints a kaomoji without fear of its source being interpreted as markup.

#### Rationale:

Harlowe conveniently allows you to print [strings](#type_string) containing markup and variables, such as `"Your rank is ''$rank''"`, rendering them as if they were written directly in the passage. However, there are many situations where you would prefer not to do so, and where you can't conveniently wrap that content in the verbatim markup. Chief among these is player-inputted text: since players can write valid Harlowe markup into [(prompt:)](#macro_prompt) and [(input-box:)](#macro_input-box) elements, displaying such text could cause no end of disaster for your story. Additionally, since this text can also include unmatched verbatim markup, attempting to encase it in verbatim markup is non-trivially difficult. This macro provides an easier way to guarantee that the markup, if present, is not rendered.

In addition, you may want to write a hook without having to worry about the task of placing its contents inside verbatim markup, or write a hook containing textual references to HTML or Harlowe code. Even if it turns out to be unnecessary, having this macro on hand can be reassuring.

#### Details:

This macro takes no values - each [changer](#type_changer) value it produces is the same.

If you would like to use this macro to simply print a variable's contents, the [(verbatim-print:)](#macro_verbatim-print) macro may be more to your liking.

#### See also:

[(collapse:)](#macro_collapse), [(verbatim-print:)](#macro_verbatim-print) [(verbatim-source:)](#macro_verbatim-source)

Added in: 3.2.0

[](#macro_verbatim-print)The (verbatim-print: ) macro
-----------------------------------------------------

### (verbatim-print: _Any_) → _[Command](#type_command)_

Also known as: [(v6m-print:)](#macro_v6m-print)

A convenient combination of [(verbatim:)](#macro_verbatim) and [(print:)](#macro_print), this prints out any single argument given to it, as text, but without rendering the resulting text as markup.

#### Example usage:

*   `(v6m-print: "<sarcasm>" + $quip + "</sarcasm>")` prints out the [string](#type_string) `"<sarcasm>"`, the string contents of `$quip`, and the string `"</sarcasm>"`, without interpreting that as HTML markup.
*   `(set: $name to (v6m-print: (prompt: "Enter your name:", "")))` prompts the player for their name, then stores a [command](#type_command) that displays that name verbatim whenever it's printed.

#### Rationale:

In practice, this is functionally identical to a [(verbatim:)](#macro_verbatim) [changer](#type_changer) attached to a [(print:)](#macro_print) command. However, one major difference is that this can be stored in a variable and used in passage prose by itself, without having to attach the changer each time. This scenario is especially useful when dealing with player-inputted text: rather than having to display it with two macros each time, you can simply save this command in a variable and use that variable.

#### Details:

As with [(print:)](#macro_print), once text is given to this command, there's no easy way to extract it from the command value without using [(source:)](#macro_source). So, you can't provide it to [(upperfirst:)](#macro_upperfirst) and other such macros. `(upperfirst: (verbatim-print: $name))` will produce an error. Instead, convert the original string using [(upperfirst:)](#macro_upperfirst) before giving it to (verbatim-print:).

If you have a string you need to print frequently, and you don't want to call (verbatim-print:) every time you need to print it, you may wish to simply [(set:)](#macro_set) a (verbatim-print:) into a variable, like so: `(set: $vbName to (verbatim-print:$name))`. Then, you can put the command (set in that variable) into passage prose, and it will work as expected.

#### See also:

[(verbatim:)](#macro_verbatim), [(print:)](#macro_print)

Added in: 3.2.0

[](#macro_change)The (change: ) macro
-------------------------------------

### (change: _[HookName](#type_hookname) or [String](#type_string), [Changer](#type_changer) or [Lambda](#type_lambda)_) → _[Command](#type_command)_

Applies a [changer](#type_changer) (or a "via" [lambda](#type_lambda) producing a changer) to every occurrence of a hook or [string](#type_string) in a passage, once.

#### Example usage:

*   `(change: "gold", (text-colour: yellow) + (text-style:'bold'))` makes all prior occurrences of "gold" in the text be bold and yellow.
*   `(change: ?passage's chars, via (text-color:(hsl: pos * 10, 1, 0.5)))` [colours](#type_colour) all of the characters in the passage in a rainbow pattern.

#### Rationale:

While changers allow you to style or transform certain hooks in a passage, it can be tedious and error-prone to attach them to every occurrence as you're writing your story, especially if the attached changers are complicated. You can simplify this by storing changers in short variables, and attaching just the variables, like so:

    (set: _ghost to (text-style:'outline'))
    _ghost[Awoo]
    _ghost[Ooooh]
    

Nevertheless, this can prove undesirable: you may want to not use the \_ghost styling later in development, which would force you to remove the attached variables to avoid producing an error; you may want to only style a single word or phrase, and find it inconvenient to place it in a hook; you may simply not like dedicating variables to storing changers, or in placing [(set:)](#macro_set) macros at the start of your passage's prose.

Instead, you can give the hooks the name "ghost", and then (change:) them afterward like so:

    |ghost>[Awoo]
    |ghost>[Ooooh]
    (change: ?ghost, (text-style:'outline'))
    

This has a few advantages. As it ties the changer styling to a hook name rather than a variable, the (change:) can be removed later without causing errors. Placing the (change:) at the end of the passage can also make the passage's source more readable, the textual content being closer to the top.

#### Details:

The (change:) macro can target plain text instead of hooks, much like [(click:)](#macro_click) - simply provide a string instead of a hook name. If a "via" lambda is supplied to (change:) instead of a changer, then that lambda is used to compute a changer dynamically, using the `pos` keyword to distinguish each hook that's enchanted. For instance, `(change: "O", via (text-style:(cond: pos is an even, 'bold', 'none')))` changes only even-numbered instances of the letter "O".

Like the [(replace:)](#macro_replace), [(append:)](#macro_append) and [(prepend:)](#macro_prepend) macros, this macro does not affect text and hooks that appear after it, as it is an immediate [command](#type_command) that only affects what has already been rendered. For an alternative version of this macro which does affect hooks and text after it, see [(enchant:)](#macro_enchant).

The built-in hook names, ?Page, ?Passage, ?Sidebar and ?Link, as well as their data names like `chars` or `lines`, can be targeted by this macro, and can be styled on a per-passage basis this way.

Using [(text-colour:)](#macro_text-colour) with this macro will let you change the colour of links inside the indicated hook, with one exception: using (change:) to change the entire passage (via `?passage` or `?page`) with [(text-colour:)](#macro_text-colour) will NOT affect links. This is to allow you to re-style the entire story without having to lose the distinct colour of links compared to passage text. You can change the colour of all links using an explicit `(change: ?link, (text-colour: $color))` or by using `(link-style: (text-colour: $color))[=` (that is, with unclosed hook markup).

You can't use this macro to change the appearance or behaviour of a completely empty hook, such as `|A>[]`. Completely empty hooks (that haven't had text inserted by [(replace-with:)](#macro_replace-with) and the like) are always hidden by Harlowe.

You can use (change:) with [(transition:)](#macro_transition) to add transitions to hooks or text elsewhere in the same passage – however, if the (change:) macro is run after the passage was initially rendered, the transitions will begin animating in the middle of their usual animations, or, if enough time has passed, won't run at all. For example, `(event: when time > 2s)[(change:"Riddles", (t8n:"Shudder")+(t8n-time:3s))]` will apply a 3-second transition to each instance of the word "Riddles" in the passage, but since 2 seconds have already passed since those words were rendered, only the last 1 second of the transition will be visible.

You cannot use (change:) with [(link:)](#macro_link), [(replace:)](#macro_replace), or any of its relatives – because the enchanted hook or text is already in the passage, the link can't appear and it can't replace anything.

#### See also:

[(enchant:)](#macro_enchant), [(enchant-in:)](#macro_enchant-in), [(replace:)](#macro_replace)

Added in: 3.2.0

[](#macro_enchant)The (enchant: ) macro
---------------------------------------

### (enchant: _[HookName](#type_hookname) or [String](#type_string), [Changer](#type_changer) or [Lambda](#type_lambda)_) → _[Command](#type_command)_

Applies a [changer](#type_changer) (or a "via" [lambda](#type_lambda) producing a changer) to every occurrence of a hook or [string](#type_string) in a passage, and continues applying that changer to any further occurrences that are made to appear in the same passage later.

#### Example usage:

*   `(enchant: "gold", (text-colour: yellow) + (text-style:'bold'))` makes all occurrences of "gold" in the text be bold and yellow.
*   `(enchant: ?passage's chars, via (t8n-delay:pos * 30) + (t8n:'instant'))` causes the passage's characters to "type out" when the player first visits, such as in a visual novel or other such computer game. Unlike [(change:)](#macro_change), this works well with instances of `(click:?page)[==` later in the passage.

#### Rationale:

This is a special version of [(change:)](#macro_change) which doesn't just perform a single transformation of a set of hooks or text - rather, like [(click:)](#macro_click), it creates an ongoing effect that constantly checks and reapplies the changers whenever new hooks or text are inserted into the passage, persisting until you navigate to another passage. Consider the following:

    (enchant: ?ghost, (text-style:'outline'))
    |ghost>[Awooo]
    (link:">Wait.")[|ghost>[Oooowooo]]
    

If this were a [(change:)](#macro_change) [command](#type_command), the second hook revealed by the [(link:)](#macro_link) wouldn't be affected, as it is inserted into the passage after it's finished rendering. The (enchant:) macro allows you to guarantee that every hook or bit of text that you want the changer to affect is constantly affected.

#### Details:

The (enchant:) macro takes the same values as [(change:)](#macro_change) - a string can be given instead of a hook name, and a lambda can be given instead of a changer. See [(change:)](#macro_change)'s article for more details about these.

This macro works well in "header" or "footer" tagged passages - using a lot of (enchant:) commands to style certain words or parts of every passage, you can essentially write a "styling language" for your story, where certain hook names "mean" certain [colours](#type_colour) or behaviour. (This is loosely comparable to using CSS to style HTML class names, but exclusively uses macros.)

When targeting ?Page, ?Passage and ?Sidebar, there is generally no difference between using (enchant:) and using [(change:)](#macro_change), as there (usually) aren't any other hooks with those names in the passage.

Like [(change:)](#macro_change), you cannot use (enchant:) with [(link:)](#macro_link), [(replace:)](#macro_replace), or any of its relatives.

The enchantment created by this macro cannot change the appearance or behaviour of a completely empty hook, such as `|A>[]`. However, once a hook stops being empty (such as when the [(append:)](#macro_append) macro appends to it), the enchantment created by this macro will automatically start applying to it.

#### See also:

[(click:)](#macro_click), [(change:)](#macro_change), [(enchant-in:)](#macro_enchant-in)

Added in: 2.0.0

[](#macro_enchant-in)The (enchant-in: ) macro
---------------------------------------------

### (enchant-in: _[HookName](#type_hookname) or [String](#type_string), [Changer](#type_changer) or [Lambda](#type_lambda)_) → _Changer_

A variation of [(enchant:)](#macro_enchant) and [(change:)](#macro_change), this applies a [changer](#type_changer) to every occurrence of a hook or [string](#type_string) within just the attached hook, rather than the whole passage. As with [(enchant:)](#macro_enchant), the changer will be applied to every additional occurrence inserted into the attached hook.

#### Example usage:

    (enchant:?frog, (text-style:"italic"))
    "Opening remarks?"
    |frog>["Crok, crok, crok."]
    (enchant-in: ?frog, (text-colour:green))
    ["Your response?"
    |frog>["Croak, croak."]
    "A stunning rebuke!"
    |frog>["Croooak."]]
    

#### Rationale:

While [(change:)](#macro_change) and [(enchant:)](#macro_enchant) both allow hooks to have changers or styles applied to them, these macros produce [commands](#type_command) that must be placed in the passage, and which affect every match within the passage. It can sometimes be convenient to restrict the effect of [(enchant:)](#macro_enchant) to just matches within a single area of prose, especially when matching using strings, the `?Link` hook name, or `?Page's chars`. Thus, you can use (enchant-in:), attaching it to a hook that encloses the area you want it to affect. The enchantment it produces will be treated as though it didn't exist outside of the attached hook.

#### Details:

You can use built-in hook data names such as `lines` and `chars` with this macro, such as by `(enchant-in: ?page's lines, $changer)`, which will style all of the lines in the attached hook with $changer. However, this construction appears counterintuitive when written out - the HookName selects all of the lines in the page, but only those within the attached hook are styled. So, more readable shorthand macros exist for both of these - [(line-style:)](#macro_line-style) and [(char-style:)](#macro_char-style) - which you ought to use instead.

This macro takes the same values as [(enchant:)](#macro_enchant) and [(change:)](#macro_change), and will produce the same errors for the same values. So, [(link:)](#macro_link), [(replace:)](#macro_replace), or any of its relatives cannot be given as the second value, and neither can a [lambda](#type_lambda) that doesn't produce a changer.

Note that this macro can only affect explicit hooks or string occurrences, and can't affect just "part" of a target. For instance, `(enchant-in: ?page, (background:red))[DANGER]` will NOT turn the background of the attached hook red, but `(enchant-in: ?page's lines, (background:red))[DANGER]` will (because the text "DANGER" is a line of text, and is thus targeted by `?page's lines`).

This enchantment will be listed in the "Enchantments" tab of the Debug Mode panel when it's active, alongside enchantments created by [(enchant:)](#macro_enchant).

Due to Harlowe engine limitations, this currently does NOT work when created by a lambda given to `(enchant:)` or `(change:)`, such as in `(enchant: ?passage, via (enchant-in:?frogs,(bg:(hsl:pos*30,0.5,1))))`.

#### See also:

[(enchant:)](#macro_enchant), [(change:)](#macro_change), [(link-style:)](#macro_link-style)

Added in: 3.2.0

[](#macro_hooks-named)The (hooks-named: ) macro
-----------------------------------------------

### (hooks-named: _[String](#type_string)_) → _[HookName](#type_hookname)_

When given a [string](#type_string), this creates a HookName from it. This can be used to dynamically create HookNames.

#### Example usage:

    |oracle)["I scry with sticks, not bones."]|mage)["No teeth in the jawbones?"]|bodyguard)["Don't sift through rot."]
    
    (set: $companionType to "bodyguard")
    (link:"Investigate the bones")[(show:(hooks-named:$companionType))]
    

#### Rationale:

The standard syntax for referring to hooks, in macros such as [(replace:)](#macro_replace), [(change:)](#macro_change) or [(show:)](#macro_show), is to write a HookName, such as `?door`. That syntax, though, requires that you hard-code the name of the hook. This macro lets you construct a HookName from one or more existing strings or other variables, so that the exact hook referenced depends on the game state.

This macro is called (hooks-named:) to avoid confusion with [(hook:)](#macro_hook), and also to convey that a HookName will refer to any [number](#type_number) of hooks as long as they have the same name.

#### Details:

Note that the HookNames produced by this macro have the same functionality as other HookNames. In particular, you can specify the `1st` hook, `2ndlast` and so forth by writing, for instance, `(hooks-named: "A")'s 2ndlast`. Also note that the built-in HookNames can be constructed with this macro - `(hooks-named:"passage")` is the same as `?passage`.

If an empty string is given, then this will cause an error.

#### See also:

[(hook:)](#macro_hook)

Added in: 3.2.0

[](#macro_border)The (border: ) macro
-------------------------------------

### (border: _[String](#type_string), \[String\], \[String\], \[String\]_) → _[Changer](#type_changer)_

Also known as: [(b4r:)](#macro_b4r)

A [changer](#type_changer) macro that applies a CSS border to the hook.

#### Example usage:

    (b4r:"dotted")[I love you!
    I want to be your wife!]
    

#### Details:

The border macros accept up to four values. These values refer to _sides of a rectangle_, going clockwise from the top: the first value is the **top** edge (12 o'clock), second is the **right** edge (3 o'clock), third is the **bottom** edge (6 o'clock), fourth is the **left** edge (9 o'clock). You can stop giving values anywhere. If an edge doesn't have a value, then it will use whatever the opposite edge's value is.

*   `(border: "solid", "dotted", "dashed", "double")` provides all four sides.
*   `(border: "solid", "dotted", "dashed")` stops at the bottom edge, so the left edge will use "dotted", to match the right edge.
*   `(border: "solid", "dotted")` stops at the right edge, so the bottom edge will use "solid", to match the top edge, and the left edge will use "dotted", to match the right edge.
*   `(border: "solid")` causes all of the edges to use "solid".

This macro affects the style of the border, and accepts the following border names.

String

Example

"none"

Example text

"solid"

Example text

"dotted"

Example text

"dashed"

Example text

"double"

Example text

"groove"

Example text

"ridge"

Example text

"inset"

Example text

"outset"

Example text

The "none" type can be used to remove a border that another changer may have included. NOTE: As of Harlowe 3.2.2, this can only be used to remove borders from combined changers, such as by `(set: $changer to it + (b4r:"none"))`, and can't be used to remove borders from already-changed hooks or other structures.

The default size of the border, with no other CSS changes to any elements, is 2px (2 pixels), unless a change is applied using [(border-size:)](#macro_border-size).

Due to browser CSS limitations, the border will force the hook to become a single rectangular area. The hook can no longer word-wrap, and moreover occupies every line in which its text is contained. So, this changer is best suited for entire paragraphs of text (or hooks using the [(box:)](#macro_box) changer) rather than single words or phrases.

#### See also:

[(border-size:)](#macro_border-size), [(border-colour:)](#macro_border-colour), [(corner-radius:)](#macro_corner-radius)

Added in: 3.2.0

[](#macro_border-colour)The (border-colour: ) macro
---------------------------------------------------

### (border-colour: _[String](#type_string) or [Colour](#type_colour), \[String or Colour\], \[String or Colour\], \[String or Colour\]_) → _[Changer](#type_changer)_

Also known as: [(b4r-colour:)](#macro_b4r-colour), [(border-color:)](#macro_border-color), [(b4r-color:)](#macro_b4r-color)

When applied to a hook being changed by the [(border:)](#macro_border) [changer](#type_changer), this changes the border's [colour](#type_colour).

#### Example usage:

*   `(b4r-color:magenta)+(b4r:"ridge")[LEVEL 01: DREAM WORLD]`
*   `(b4r-color:red,yellow,green,blue)+(b4r:"dotted")[Isn't it a lovely time?]`

#### Details:

The border macros accept up to four values. These values refer to _sides of a rectangle_, going clockwise from the top: the first value is the **top** edge (12 o'clock), second is the **right** edge (3 o'clock), third is the **bottom** edge (6 o'clock), fourth is the **left** edge (9 o'clock). You can stop giving values anywhere. If an edge doesn't have a value, then it will use whatever the opposite edge's value is (or the top value if it's the only one).

Much like [(text-colour:)](#macro_text-colour), this accepts either a Colour (such as those produced by [(hsl:)](#macro_hsl) or [(rgb:)](#macro_rgb), or plain literals like `#fff`), or a CSS colour [string](#type_string).

Certain [(border:)](#macro_border) styles, namely "ridge", "groove", "inset" and "outset", will modify the colour, darkening it for certain parts of the border to produce their namesake appearance.

Selecting `"transparent"` as the colour will cause the border to "disappear", but also cause the space surrounding the hook to remain.

#### See also:

[(bg:)](#macro_bg), [(text-colour:)](#macro_text-colour)

Added in: 3.2.0

[](#macro_border-size)The (border-size: ) macro
-----------------------------------------------

### (border-size: _[Number](#type_number), \[Number\], \[Number\], \[Number\]_) → _[Changer](#type_changer)_

Also known as: [(b4r-size:)](#macro_b4r-size)

When applied to a hook being changed by the [(border:)](#macro_border) [changer](#type_changer), this multiplies the size of the border by a given amount.

#### Example usage:

`(b4r:"solid")+(b4r-size:4)[Do not read anything outside of this box.]`

#### Details:

The border macros accept up to four values. These values refer to _sides of a rectangle_, going clockwise from the top: the first value is the **top** edge (12 o'clock), second is the **right** edge (3 o'clock), third is the **bottom** edge (6 o'clock), fourth is the **left** edge (9 o'clock). You can stop giving values anywhere. If an edge doesn't have a value, then it will use whatever the opposite edge's value is (or the top value if it's the only one).

The default size of borders added using [(border:)](#macro_border) is 2px (2 pixels). The [number](#type_number) given is a number of CSS pixels to set the new size to. Since CSS pixels don't exactly correspond to display pixels (such as, for instance, if the browser window is zoomed in) then it's possible to have a non-whole number of CSS pixels (such as 1.5, which would, if the browser window was zoomed in to 200%, become 3 display pixels). Thus, this macro accepts numbers with fractional values. That being said, if a number lower than 0 is given, an error will be produced.

#### See also:

[(border:)](#macro_border), [(corner-radius:)](#macro_corner-radius), [(text-size:)](#macro_text-size)

Added in: 3.2.0

[](#macro_corner-radius)The (corner-radius: ) macro
---------------------------------------------------

### (corner-radius: _[Number](#type_number), \[Number\], \[Number\], \[Number\]_) → _[Changer](#type_changer)_

When applied to a hook, this rounds the corners by the given [number](#type_number) of pixels, causing the hook to become increasingly round or button-like.

#### Example usage:

    (b4r:'solid')+(corner-radius:8)[Hasn't this gone on too long?]
    (b4r:'solid')+(corner-radius:12)[Shouldn't you tell them the truth?]
    (b4r:'solid')+(corner-radius:16)[//That you're not really who you say you are??//]
    

#### Details:

The border macros accept up to four values. These values refer to _corners of a rectangle_, going clockwise from the top: the first value is the **top-left** corner (10 o'clock), second is the **top-right** corner (2 o'clock), third is the **bottom-right** corner (4 o'clock), fourth is the **bottom-left** corner (8 o'clock). You can stop giving values anywhere. If a corner doesn't have a value, then it will use whatever the opposite corner's value is (or the top-left value if it's the only one).

Obviously, unless the hook has a [(bg:)](#macro_bg) or a [(border:)](#macro_border), the rounded corners will not be visible, and this [changer](#type_changer) will have no real effect.

If the hook has a [(border:)](#macro_border), values greater than the border's [(border-width:)](#macro_border-width) (which is 2 if it wasn't changed) will cause the interior of the element to become constrained by the curvature of the corners, as the rectangle's corners get cut off. Because of this, this macro also adds interior padding (distance between the border and the contained text) equal to each of the passed-in numbers, unless another changer (such as [(css:)](#macro_css)) provided a different padding value.

#### See also:

[(border:)](#macro_border), [(bg:)](#macro_bg), [(border-size:)](#macro_border-size)

Added in: 3.2.0

[](#macro_hsl)The (hsl: ) macro
-------------------------------

### (hsl: _[Number](#type_number), Number, Number, \[Number\]_) → _[Colour](#type_colour)_

Also known as: [(hsla:)](#macro_hsla)

This macro creates a [colour](#type_colour) using the given hue (h) angle in degrees, as well as the given saturation (s) and lightness (l) percentages, and, optionally, the transparency (alpha, or a) percentage, which is a fractional value between 0 (fully transparent) and 1 (fully visible).

Anything drawn with a partially transparent colour will itself be partially transparent. You can then layer such elements to produce a few interesting visual effects.

#### Example usage:

*   `(hsl: 120, 0.8, 0.5)` produces .
*   `(hsl: 28, 1, 0.4)'s h` produces the [number](#type_number) 28.
*   `(hsl: 120, 0.5, 0.8, 0.6)` produces (a 40% transparent green).

#### Rationale:

The HSL colour model is regarded as easier to work with than the RGB model used for HTML hexadecimal notation and the [(rgb:)](#macro_rgb) macro. Being able to set the hue with one number instead of three, for instance, lets you control the hue using a single variable, and alter it at will.

#### Details:

This macro takes the same range of numbers as the CSS `hsla()` function.

Giving saturation or lightness values higher than 1 or lower than 0 will cause an error. However, you can give any kind of hue number to (hsl:), and it will automatically round it to fit the 0-359 degree range - so, a value of 380 will become 20. This allows you to cycle through hues easily by providing a steadily increasing variable or a counter, such as `(hsl: time / 100, 1, 0.5)`.

Giving alpha percentages higher than 1 or lower than 0 will cause an error.

#### See also:

[(rgb:)](#macro_rgb), [(lch:)](#macro_lch), [(gradient:)](#macro_gradient)

Added in: 2.0.0

[](#macro_rgb)The (rgb: ) macro
-------------------------------

### (rgb: _[Number](#type_number), Number, Number, \[Number\]_) → _[Colour](#type_colour)_

Also known as: [(rgba:)](#macro_rgba)

This macro creates a [colour](#type_colour) using the three red (r), green (g) and blue (b) values provided, whose values are [numbers](#type_number) between 0 and 255, and, optionally, the transparency (alpha, or a) percentage, which is a fractional value between 0 (fully transparent) and 1 (fully visible).

Anything drawn with a partially transparent colour will itself be partially transparent. You can then layer such elements to produce a few interesting visual effects.

#### Example usage:

*   `(rgb: 255, 0, 47)` produces .
*   `(rgb: 90, 0, 0)'s r` produces the number 90.
*   `(rgb: 178, 229, 178, 0.6)` produces (a 40% transparent green).

#### Rationale:

The RGB additive colour model is commonly used for defining colours: the HTML hexadecimal notation for colours (such as #9263AA) simply consists of three hexadecimal values placed together. This macro allows you to create such colours computationally, by providing variables for certain components.

#### Details:

This macro takes the same range of numbers as the CSS `rgb()` function.

Giving values higher than 255 or lower than 0 will cause an error. Former versions of Harlowe did not allow fractional values to be given, but that restriction is no longer present.

Giving alpha percentages higher than 1 or lower than 0 will cause an error.

#### See also:

[(hsl:)](#macro_hsl), [(lch:)](#macro_lch), [(gradient:)](#macro_gradient)

Added in: 2.0.0

[](#macro_lch)The (lch: ) macro
-------------------------------

### (lch: _[Number](#type_number), Number, Number, \[Number\]_) → _[Colour](#type_colour)_

Also known as: [(lcha:)](#macro_lcha)

This macro creates a [colour](#type_colour) using three values in the CIELAB colour model - a lightness (l) percentage, a chroma (c) value, and a hue (h) angle in degrees, and, optionally, the transparency (alpha, or a) percentage, which is a fractional value between 0 (fully transparent) and 1 (fully visible).

Anything drawn with a partially transparent colour will itself be partially transparent. You can then layer such elements to produce a few interesting visual effects.

#### Example usage:

*   `(lch: 0.6, 80, 10)` produces .
*   `(lch: 0.6, 80, 10)'s lch's c` produces the [number](#type_number) 80.
*   `(lch: 0.9, 15, 142, 0.6)` produces (a 40% transparent green).

#### Rationale:

The CIELAB colour model is considered to be more universally useful than the RGB model and its HSL representation, whose treatment of "lightness" doesn't properly reflect the actual perceived _luminosity_ of the colours in question. For instance, this colour (produced by `(hsl:120,1,0.5)`) and this colour (produced by `(hsl:220,1,0.5)`) have the same HSL lightness (0.5), but one appears to the human eye to be less bright than the other, due to one hue being less luminous than the other.

The lightness in LCH more closely corresponds to how the human eye perceives luminosity - `(lch:0.9,80,120)` produces , and `(lch:0.9,80,220)` produces , which, as you can see, is a pair closer in luminosity than the previous pair. Note that this means the lightness and hue values of LCH are **not** directly transferable between [(hsl:)](#macro_hsl) and this macro - they have different meanings in each. A hue angle in LCH is usually between 10 and 20 degrees less than its angle in HSL, varying by the LCH lightness.

Additionally, CIELAB's colour model replaces the "saturation" value of HSL with "chroma". Rather than being a single percentage from 0 to 1, LCH's chroma is a value whose upper bound varies with the colour's hue, reflecting how the human eye distinguishes some hues more accurately than others.

#### Details:

Despite all of the above, any colour produced by this macro will have to be internally converted back to HSL in order to be used, due to HTML and CSS not fully supporting LCH as of 2020. As such, colours produced by this macro are constrained by HSL's limits - as LCH accepts a greater variety of chroma and lightness combinations than what HSL can represent, the output colour will be automatically converted to the nearest valid HSL values, if necessary.

Giving lightness or alpha values less than 0 and greater than 1 will cause an error. Giving chroma values less than 0 and greater than 132 will cause an error. However, you can give any kind of hue number to (lch:), and it will automatically round it to fit the 0-359 degree range - so, a value of 380 will become 20. This allows you to cycle through hues easily by providing a steadily increasing variable or a counter, such as `(lch: 0.9, 80, time / 100)`.

#### See also:

[(hsl:)](#macro_hsl), [(rgb:)](#macro_rgb), [(gradient:)](#macro_gradient), [(complement:)](#macro_complement), [(mix:)](#macro_mix)

Added in: 3.2.0

[](#macro_complement)The (complement: ) macro
---------------------------------------------

### (complement: _[Colour](#type_colour)_) → _Colour_

When given a [colour](#type_colour), this provides a complement to that colour.

#### Example usage:

`(complement:orange)` produces .

#### Details:

This is a very simple macro - the returned colour is the same as the input colour, except that its LCH hue (as given to the [(lch:)](#macro_lch) macro) has been rotated by 180 degrees, producing a colour with equivalent chroma and luminosity, but an opposite hue.

Note that, unlike [(text-colour:)](#macro_text-colour), this will not take a [string](#type_string) containing a CSS colour. This is because it operates purely on Harlowe colour data, and doesn't have a means of converting CSS colours into colour data.

#### See also:

[(lch:)](#macro_lch), [(mix:)](#macro_mix)

Added in: 3.2.0

[](#macro_palette)The (palette: ) macro
---------------------------------------

### (palette: _[String](#type_string), [Colour](#type_colour)_) → _[Array](#type_array)_

When given a [string](#type_string) specifying a palette type, and a [colour](#type_colour), this macro produces an [array](#type_array) containing the given colour followed by three additional colours that together form a palette, for use with [(text-colour:)](#macro_text-colour), [(bg:)](#macro_bg), and other macros.

#### Example usage:

    {(unpack: (palette: "mono", orange + black) into (a:_bg, _c, _lc, _hc))
    (enchant: ?page, (background: _bg) + (text-colour:_c))
    (enchant: ?link, (text-colour:_lc) + (hover-style: (text-colour:_hc)))}
    This passage uses (link:"(more)")[a brown palette.]
    

#### Rationale:

Intended for game jams and rapid prototyping, (palette:) provides a quick and simple palette for stories and passages. When you aren't too fussed with making your story look significantly different from the Harlowe default, but just want a certain colour scheme to provide a certain mood, or colour a specific passage differently to offset it from the rest of the story, you can defer the task of choosing text or background colours to this macro. It will choose colours which contrast with the given colour to attempt to maximise readability, while still having an interesting relationship with the given colour's hue.

#### Details:

The following type strings are accepted.

String

Explanation

"mono"

The returned colours are tints and shades of the given colour.

"adjacent"

The returned colours' hues are 30° to the left, 30° to the right, and 60° to the right of the given colour's hue.

"triad"

The returned colours' hues are 140° to the left, 140° to the right, and 180° to the right of the given colour's hue.

This macro interprets the passed-in colour as a background colour, and the three colours it provides are intended as text colours - but you can easily use them for other purposes. The given colour could be used as a text colour, and any of the received colours could be used as different backgrounds.

The three returned colours all have a luminosity chosen to provide sufficient contrast with the given colour's luminosity. If the given colour's luminosity is very low or very high (near 0 or 1) then the returned colours will have a luminosity near the other extremity.

Added in: 3.2.0

[](#macro_gradient)The (gradient: ) macro
-----------------------------------------

### (gradient: _[Number](#type_number), ...Number, [Colour](#type_colour)_) → _Gradient_

When given a degree angle, followed by any [number](#type_number) of number-colour pairs called "[colour](#type_colour) stops", this macro produces a gradient that fades between those colours in the direction of the angle.

#### Example usage:

    (set: $desertChrome to (gradient: 0, 0, #e6a860, 0.49, black, 0.5, white, 1, blue))
    (background: $desertChrome)+(text-color:white)[Sunshine Desert]
    

The above example produces Sunshine Desert

#### Rationale:

An easy way to add a subtle sense of depth, texture, direction or variety to elements in Harlowe, without having to create and import background images from outside of Twine, is to use this macro to generate a gradient, a dynamically-generated background which can be used with [(background:)](#macro_background).

A gradient consists of a series of flat colours. One of those colours will be used on one side of the element, one on the other, and the space in between will smoothly fade between them. You can supply additional colours that the gradient will smoothly fade to in between the start and end colours, too.

To specify where exactly these intermediate colour fades will occur on the element, the colours are paired with a percentage number - 0 being one side of the element, 1 being the other, 0.5 being exactly in-between. This pairing is called a "colour stop".

Consider this (gradient:) call, with six colour stops. `(gradient:90, 0,#bf3f3f, 0.2,#a5bf3f, 0.4,#3fbf72, 0.6,#3f72bf, 0.8,#a53fbf, 1,#bf3f3f)`

The six colour stops are `0,#bf3f3f` , `0.2,#a5bf3f` , `0.4,#3fbf72` , `0.6,#3f72bf` , `0.8,#a53fbf` , and `1,#bf3f3f` . This corresponds to the following gradient, which for documentation purposes has its colour stops marked.

0,  
#bf3f3f

0.2,  
#a5bf3f

0.4,  
#3fbf72

0.6,  
#3f72bf

0.8,  
#a53fbf

1,  
#bf3f3f

(gradient:)'s first argument is a degree angle, which can be used to rotate the gradient's direction, changing where the first and last colours are placed in the element. Changing the degree angle in the above example from 90 degrees to 0 changes it from a horizontal gradient to a vertical gradient, using the same colours and stops:

Any angle can be given to (gradient:), including diagonal values like 40 or 66.

#### Details:

An error will be produced if you give colour-stop percentages that aren't between 0 and 1, or give less than 2 colour-stops. However, any number of degrees given to (gradient:), even below 0 or above 359, will automatically be rounded to fit the 0-359 degree range - so, a value of 380 will become 20.

You do not necessarily need to supply colour-stops at positions 0 and 1 - instead, the nearest colour-stop to those positions will be extended to the edge of the gradient. Furthermore, you don't need to supply colour-stops in ascending order - they will be reordered by Harlowe if they are not.

Gradients in Harlowe are implemented using CSS `linear-gradient`s, and have the same limitations in output and browser support. Note, however, that the order of values for a colour stop is reversed from that of the CSS syntax (numbers go first, then colours). This is to help ensure that the initial degree number is not confused for a colour-stop percentage. Additionally, CSS linear-gradient "colour hints", which are used to adjust the midpoints between colour stops, are currently not supported by this macro.

#### See also:

[(stripes:)](#macro_stripes)

Added in: 3.1.0

[](#macro_stripes)The (stripes: ) macro
---------------------------------------

### (stripes: _[Number](#type_number), Number, [Colour](#type_colour), Colour_) → _[Gradient](#type_gradient)_

When given a degree angle, a pixel distance, and two or more [colours](#type_colour), this macro produces a [gradient](#type_gradient) that draws a striped background, with each stripe as wide as the distance, and alternating through the given colours.

#### Example usage:

*   `(enchant: ?page, (background: (stripes: 45, 20, fuchsia+white, white)))` causes the page to have a pink-and-white striped background.

#### Rationale:

The [(gradient:)](#macro_gradient) macro can be used to dynamically create gradient backgrounds, which smoothly transition between multiple colours. By using certain pairs of colour stops that are very close together, however, you can create gradients where the colours transition sharply, producing stripes. Rather than use that macro, you can instead use this one to generate striped backgrounds succinctly, that repeat uniformly, and with easily-adjusted stripe width.

#### Details:

The degree angle matches that given to [(gradient:)](#macro_gradient). A [number](#type_number) of 0 causes the stripes to be drawn horizontally, and increasing that number rotates the stripes counter-clockwise. Any number below 0 or above 359 will automatically be rounded to fit the 0-359 degree range - so, a value of 380 will become 20.

The distance value given is in pixels, and determines the width of a single stripe.

Gradients (including those produced by (stripes:)) in Harlowe are implemented using CSS `repeating-linear-gradient`s, and have the same limitations in output and browser support.

(stripes:) gradients still have a "stops" [array](#type_array), accessible via `$stripeGradient's stops`, as with other gradients. Even though (stripes:) doesn't accept "colour stops", this array still contains colour stop [datamaps](#type_datamap), as if this gradient had been generated by [(gradient:)](#macro_gradient). There are two "stops" for each colour, and instead of a "percent" value, they have a "pixels" value. So, `$stripeGradient's stops's 1st's colour` will produce the colour of the first stripe, `$stripeGradient's stops's 3rd's colour` will produce the colour of the second stripe, and so forth. `$stripeGradient's stops's 2nd's pixels` will produce the pixel width of each stripe.

#### See also:

[(gradient:)](#macro_gradient)

Added in: 3.2.0

[](#macro_mix)The (mix: ) macro
-------------------------------

### (mix: _[Number](#type_number), [Colour](#type_colour), Number, Colour_) → _Colour_

When given two pairs of values - each a [number](#type_number) from 0 to 1 and a [colour](#type_colour) - this macro produces a mix of the two colours, using the numbers as ratios of each colour. The colours are mixed using the LCH colourspace, used by the [(lch:)](#macro_lch) macro.

#### Example usage:

*   `(mix: 0.5, red, 0.5, blue)` produces . This is a rosy fuchsia, whereas `red + blue` produces , a grayer fuchsia.
*   `(mix: 0.5, white, 0.5, #00f)` produces . The slight shift towards purple is a known weakness of the LCH colourspace.
*   `(mix: 0.4, red, 0.1, white)` produces , a 50% transparent light red. Because the numbers only added up to 0.5, the result was 50% transparent (see below).

#### Rationale:

While you can mix colours in Harlowe using the + operator, such as by `red + yellow`, this operation doesn't easily allow for different mix ratios, such as a one-quarter/three-quarters mix, instead mixing both colours equally. In addition, in Harlowe 3, this uses the sRGB mixing method, which doesn't produce the most perceptually ideal colours, often making them darker or grayer than expected. This macro provides a more sophisticated alternative, allowing ratios for each colour to be specified, and using the LCH colour space to mix the colours, which tends to preserve chromaticity (colourfulness) better.

#### Details:

The colours are mixed in the LCH colourspace. What this means is: the colours are converted to their LCH [datamaps](#type_datamap) (accessible as `$colour's lch`), and then (omitting a few minor details) their hue, lightness and chroma values are averaged. Then, the averaged values are used to construct a new colour, as if by the [(lch:)](#macro_lch) macro.

The two numbers (the ratios) are decimal values from 0 to 1. Numbers above or below will produce an error when given.

If the two ratios do not add up to 1, then they will be scaled to compensate. For instance, for `(lch: 0.1, green, 0.3, blue)`, the 0.1 and 0.3 add up to 0.4, but they _should_ add up to 1, so they are scaled up to 0.25 and 0.75, respectively.

Additionally, if the two ratios add up to _less_ than 1, then the difference will be converted into **additional transparency**, which is used to multiply the mixed colour's alpha. For instance, for `(lch: 0.15, red, 0.45, blue)`, the ratios 0.15 and 0.45 add up to only 0.6, which is 0.4 less than 1. So, the mixed colour's alpha (of 1) is multiplied by 0.6 (and thus made 40% more transparent than it would've been otherwise).

#### See also:

[(lch:)](#macro_lch), [(complement:)](#macro_complement)

Added in: 3.3.0

[](#macro_macro)The (macro: ) macro
-----------------------------------

### (macro: _\[...[TypedVar](#type_typedvar)\], [CodeHook](#type_codehook)_) → _[CustomMacro](#type_custommacro)_

Use this macro to construct your own custom macros, which you can [(set:)](#macro_set) into variables and call as easily as a built-in macro.

#### Example usage:

The following custom macro creates a [command](#type_command) that displays a randomly rotated hook in red, with the given opacity.

    (set:$ghostlyLaughter to (macro: num-type _o, [
        (output: )+(text-rotate:(random:0,360))+(text-colour:(hsla:0, 1, 0.5, _o))[HE HE HE]
    ]))
    ($ghostlyLaughter:0.9) ($ghostlyLaughter:0.5) ($ghostlyLaughter:0.3)
    

The following custom macro creates a text [string](#type_string) based on how many turns the player has taken. It takes no data.

    (set: $fancyTimeName to (macro: [
        (set: _timeOfDay to turns % 24 + 1)
        (output-data: (a:
            "midnight", "dreamshour", "wolfshour", "dark's end", "lightbreak", "afterdawn", "early rise", "awakening",
            "early warming", "joyshour", "first lunch", "shadow's end", "zenith", "shadow's birth", "second lunch", "hopeshour", "early cooling",
            "lightfade", "sundown", "dark's birth", "supper", "early rest", "slumbering", "catshour"
        )'s (_timeOfDay))
    ]))
    It is now ($fancyTimeName:).
    

The following custom macro takes a [datamap](#type_datamap) containing a character's attributes, and prints a line of text describing a character.

    (set: $charSheet to (dm: "name", str, "HP", num, "poison", num, "heartbreak", bool))
    (set: $healthSummary to (macro: $charSheet-type _stats, [
        This text inside the macro is not displayed during the game.
        (set: _TheyAre to _stats's name + " is ")
        Dead characters get a single, pithy line.
        (if: _stats's HP <= 0)[(output: _TheyAre + "deceased.")]
        Living characters get specific status conditions referred to.
        (output-data:
            _TheyAre + "in " + (cond: _stats's HP > 50, "fair", "poor") + " health." +
            (cond: _stats's poison > 0, " " + _TheyAre + "poisoned.", "") +
            (cond: _stats's heartbreak, " " + _TheyAre + "heartbroken.", "")
        )
    ]))
    (set: $steelyStats to (dm: "name", "Steely", "HP", 80, "poison", 0, "heartbreak", true))
    ($healthSummary: $steelyStats)
    

#### Rationale:

This macro provides you with the means to expand Harlowe's collection of built-in macros with custom utilities tailored specifically for your story. While many Twine projects are simple hypertext stories, there are many that use it to make more complicated simulations, role-playing games, generative art, and so on. Being able to craft a personal language of macros in which to write the many algorithms and textual structures such games involve is essential to keeping your code succinct and readable.

#### Writing the parameters:

Custom macros consist of two structures: a set of data inputs (called _parameters_), and a body of code that creates the output.

Each parameter consists of a [datatype](#type_datatype) or pattern of data, the "-type" suffix, and a temp variable, just like typed temp variables created with [(set:)](#macro_set). When you, the author, call the macro and give data at that parameter's position, it is put into the temp variable if it fits the datatype. A macro stored in $treasure with `str-type _name, num-type price` can be called by `($treasure: "Gold Watch", 155)`. The types are checked, and if they don't match (for instance, by incorrectly writing `($treasure: 155, "Gold Watch")`), then an error will result. This ensures that incorrectly written custom macro calls are caught early, just like with built-in macros.

As with TypedVars used in other places, you can use a complex data structure as the "type" of the variable - `(a: num, num)-type _coords` specifies a parameter that requires an [array](#type_array) of two [numbers](#type_number). If you wish to write a very general value-selection or data-structure macro, such as `(a:)` or `(either:)`, that can take any kind of data value, you can write `any-type` for that parameter. However, using `any-type` is not recommended unless you genuinely need it, as you miss out on the ability to catch wrong-type errors.

You might, on occasion, want to make a macro that can take an arbitrary amount of values, similar to certain built-in macros like `(a:)`, `(altered:)`, and so forth. To do this, you can place the spread `...` syntax in front of a parameter's datatype. Just as a spread datatype matches zero or more values when it is used with the `matches` operator, a spread parameter represents zero or more values of the same data type that you give to a macro call. Think of this as the opposite counterpart of the spread `...` syntax in macro calls. Instead of turning one value (such as an array) into many spread-out values, this turns many values into a single array value. A custom macro stored in $mean with `...num-type _n` can be called with `($mean:1,4,5,6)`, which sets \_n to `(a:1,4,5,6)`. `($mean:2,3)` sets \_n to `(a:2,3)`, and `($mean:)` sets \_n to `(a:)`. Note that because it takes every value at or after it, it must be the final parameter of your custom macro.

    (set: $mean to (macro: ...num-type _a, [
        (output-data:(folded: _num making _total via _total + _num, ..._a) / _a's length)
    ]))
    One's 7 foot 4, one's 4 foot 7. Add 'em up and divide by two, ya get a regular ($mean:7 + 4/12, 4 + 7/12)-foot person.
    

#### Writing the code:

The CodeHook, conversely, is where the code of your custom macro is written. You can [(set:)](#macro_set) temp variables in it, use [(if:)](#macro_if), [(for:)](#macro_for), [(cond:)](#macro_cond), and so forth to run different sections of code, and finally output something using either [(output:)](#macro_output) or [(output-data:)](#macro_output-data). (Consult each of those macros' articles to learn the exact means of using them, and their differences.) The temp variables specified by the aforementioned typed variables are automatically set with the passed-in data.

Custom macros can be called like any other macro, by using the variable instead of a name: `($someCustomMacro:)` is how you would call a custom macro stored in the variable $someCustomMacro, and `(_anotherCustomMacro:)` is how you would call a custom macro stored in the temp variable \_anotherCustomMacro.

If you want to use a custom macro throughout your story, the best place to create it is in a "startup" tagged passage. This will aid in testing your story, as those passages' contents are always run first, regardless of the starting passage.

Normally, players can't see inside code hooks, but if an error occurs inside a custom macro, the error message will have an "Open" button allowing the code hook's interior to be viewed. You can take advantage of this by adding [(print:)](#macro_print) commands inside the code hook, showing you what certain variables contain at certain places in the hook.

#### Details:

You can, of course, have zero parameters, for a macro that needs no input values, and simply outputs a complicated (or randomised) value by itself.

Currently, (macro:) code hooks do NOT have access to temp variables created outside of the (macro:) call. `(set: _name to "Fox")(set:_aCustomMacro to (macro:[(output-data:_name)])) (_aCustomMacro:)` will cause an error, because \_name isn't accessible inside the \_aCustomMacro macro. They do, however, have access to global variables (which begin with `$`).

Much like with typed variables given to [(set:)](#macro_set) or [(put:)](#macro_put), each temp variable associated with a parameter is restricted to the given data type. So, `(macro:num-type _a,[(set:_a to 'text')(output-data:_a)]` will cause an error when run.

All custom macros must return some value. If no [(output:)](#macro_output) or [(output-data:)](#macro_output-data) macros were run inside the code hook, an error will result.

If you find yourself writing custom macros that do nothing except call another macro, such as `(macro: num-type _a, [(out-data:(range:0,_a))])`, then you may prefer to use the [(partial:)](#macro_partial) macro instead of (macro:).

#### See also:

[(output:)](#macro_output), [(output-data:)](#macro_output-data), [(partial:)](#macro_partial)

Added in: 3.2.0

[](#macro_output)The (output: ) macro
-------------------------------------

### (output: ) → _[Changer](#type_changer)_

Also known as: [(out:)](#macro_out)

Use this macro inside a [(macro:)](#macro_macro)'s [CodeHook](#type_codehook) to output a [command](#type_command) that, when run, renders the attached hook.

#### Example usage:

    (set: $describePotion to (macro: dm-type _potion, [
        (size:0.7)+(box:"=XXXXX=")+(border:"solid")+(output:)[\
        ##(print:_potion's name)
        |==
        ''Hue'': (print:_potion's hue)
        ''Smell'': (print:_potion's smell)
        ''Flask'': (print:_potion's flask)
        ''Effect'': (print: _potion's effect)
        ==|
        //(print: _potion's desc)//
        ]
    ]))
    ($describePotion: (dm:
        "name", "Vasca's Dreambrew",
        "hue", "Puce",
        "smell", "Strong acidic honey",
        "flask", "Conical, green glass, corked",
        "effect", "The drinker will, upon sleeping, revisit the last dream they had, exactly as it was.",
        "desc", "Though Vasca was famed in life for her more practical potions, this brew is still sought after"
        + " by soothsayers and dream-scryers alike.",
    ))
    

#### Rationale:

For more information on custom macros, consult the [(macro:)](#macro_macro) macro's article. All custom macros have inputs and output. This macro lets you output an entire hook, displaying it in a single call of the macro. Attach this to a hook at the end of your custom macro's code hook, and the custom macro will produce a command that displays the hook, similar to how [(print:)](#macro_print) or [(link-goto:)](#macro_link-goto) work.

If you want your custom macro to return single values of data, like [numbers](#type_number) or [arrays](#type_array), rather than hooks, please use the [(output-data:)](#macro_output-data) macro instead.

#### Details:

As soon as a hook with (output:) attached is encountered, all further macros and code in the CodeHook will be ignored, just as how [(go-to:)](#macro_go-to) and [(redirect:)](#macro_redirect) behave. This behaviour is unique among [changers](#type_changer).

You can combine (output:) with other changers, like [(text-style:)](#macro_text-style) or [(link:)](#macro_link). The hook that is displayed by the command will have those other changers applied to it.

As you might have noticed, (output:) accepts no values itself - simply attach it to a hook.

Attempting to use (output:) outside of a custom macro's CodeHook will cause an error.

As of 3.3.0, custom commands created by (output:) that are stored in story-wide variables can be saved using [(save-game:)](#macro_save-game), just like any other value. Be warned, however, that these commands take up space in browser storage proprotional to the number and size of temp variables used inside the custom macro, and the size of the attached hook. If you're concerned about browser storage space, consider limiting the complexity of custom commands you store in story variables.

#### See also:

[(output-data:)](#macro_output-data), [(error:)](#macro_error)

Added in: 3.2.0

[](#macro_output-data)The (output-data: ) macro
-----------------------------------------------

### (output-data: _Any_) → _Instant_

Also known as: [(out-data:)](#macro_out-data)

Use this macro inside a [(macro:)](#macro_macro)'s [CodeHook](#type_codehook) to output the value that the macro produces.

#### Example usage:

    (set: $randomCaps to (macro: str-type _str, [
        (output-data:
            (folded: _char making _out via _out + (either:(lowercase:_char),(uppercase:_char)),
            ..._str)
        )
    ]))
    ($randomCaps:"I think my voice module is a little bit very broken.")
    

#### Rationale:

For more information on custom macros, consult the [(macro:)](#macro_macro) macro's article. All custom macros have inputs and output. This macro specifies the data value to output - provide it at the end of your macro's CodeHook, and give it the value you want the macro call to evaluate to.

This is best suited for macros which primarily compute single data values, like [strings](#type_string), [arrays](#type_array) and [datamaps](#type_datamap). If you wish to output a long span of code, please consider using the [(output:)](#macro_output) [changer](#type_changer) instead.

#### Details:

As soon as an (output-data:) macro is run, all further macros and code in the CodeHook will be ignored, much like how the [(go-to:)](#macro_go-to) and [(undo:)](#macro_undo) macros behave.

Attempting to call (output-data:) outside of a custom macro's CodeHook will cause an error.

#### See also:

[(output:)](#macro_output), [(error:)](#macro_error)

Added in: 3.2.0

[](#macro_error)The (error: ) macro
-----------------------------------

### (error: _[String](#type_string)_) → _Instant_

Designed for use in custom macros, this causes the custom macro to immediately produce an error, with the given message [string](#type_string), and ceases running any further code in the [CodeHook](#type_codehook).

#### Example usage:

    (set: $altCaps to (macro: str-type _input, [
        (if: _input is "")[(error: "I can't alt-caps an empty string.")]
        (output:
            (folded: _char making _result via _result +
                (cond: pos % 2 is 0, (lowercase:_char), (uppercase:_char)),
                ..._input
            )
        )
    ]))
    ($altCaps:"")
    

#### Rationale:

Allowing your custom macros to produce insightful error messages is essential to making them user-friendly, especially if you intend other authors to use them. In the example above, for instance, an empty string inputted to the $altCaps macro would causes [(folded:)](#macro_folded) to produce an error, as `..._input` would spread zero characters. However, the earlier custom error provides a better message, explaining exactly what the problem is.

#### Details:

As with [(output-data:)](#macro_output-data), as soon as this is encountered, all further macros and code in the CodeHook will be ignored. Note that this occurs even if the macro is given as input to another macro - `(cond: false, (error:"There's a problem"), "")` will always produce the error, regardless of [(cond:)](#macro_cond)'s behaviour.

If an empty string is given to this macro, an error (different from the intended error) will be produced. Also, attempting to call (error:) outside of a custom macro's CodeHook will cause another (also different from intended) error.

#### See also:

[(output:)](#macro_output), [(output-data:)](#macro_output-data), [(assert:)](#macro_assert)

Added in: 3.2.0

[](#macro_datatype)The (datatype: ) macro
-----------------------------------------

### (datatype: _Any_) → _Datatype_

This macro takes any storeable value, and produces a datatype that matches it.

#### Example usage:

*   `(if: _theirName is a (datatype:_myName))` checks whether or not $theirName is the same type as $myName.
*   `(altered: (datatype:_input)-type _n via _n + _input, ..._values)` creates a [lambda](#type_lambda) that only accepts data with the same type as that of the \_input variable, and runs [(altered:)](#macro_altered) with it.

#### Rationale:

This isn't a macro you're likely to commonly use, because most of the time, you have exact knowledge of the types of data you use throughout your story. But, this can be helpful in custom macros created with [(macro:)](#macro_macro), if they have any `any-type` parameters. Being able to identify the exact type that such a value is allows you to give types to other data based on that type.

#### Details:

The only types that this will return are "general" types, like `string`, `number`, `boolean` and such. More specific types like `even`, or descriptive types like `empty`, will not be returned, even if it's given a value that matches those types. Nor will spread datatypes be returned - even if a given [string](#type_string) consists only of, say, digits, then `...digits` won't be returned instead of `str`.

if there isn't a known datatype value for the given data (for instance, if you give it a [HookName](#type_hookname)) then an error will be produced.

#### See also:

[(source:)](#macro_source), [(datapattern:)](#macro_datapattern)

Added in: 3.2.0

[](#macro_datapattern)The (datapattern: ) macro
-----------------------------------------------

### (datapattern: _Any_) → _Any_

This takes any storeable value, and produces a [datatype](#type_datatype) that matches it, in a manner similar to [(datatype:)](#macro_datatype). However, when given an [array](#type_array) or [datamap](#type_datamap), it creates an array or datamap with its values replaced with their datatypes, which can be used as a more accurate pattern with `matches` or [(set:)](#macro_set) elsewhere.

#### Example usage:

*   `(datapattern: (a:15,45))` produces `(a:num,num)`.
*   `(datapattern: (passage: ))` produces `(dm:"name",str,"source",str,"tags",(a:str))` (as long as the passage has no [metadata](#type_metadata) macros in it).
*   `$coordinate matches (datapattern: (a:15,45))` checks if $coordinate is an array of exactly two [numbers](#type_number).
*   `(datapattern: $value) matches $value2` checks if $value2 exactly matches the structure of $value.

#### Details:

The [(datatype:)](#macro_datatype) macro is useful for examining and comparing the datatypes of values, but when dealing with arrays and datamaps, each of which can have radically different purposes and meanings throughout your story, that macro only produces `array` or `dm` when given them, which isn't too helpful when checking if one array is similar to another. This macro produces a more precise result - an array or datamap with datatypes replacing its values - which is compatible with the `matches` operator, the [(set:)](#macro_set) macro, parameters of the [(macro:)](#macro_macro) macro, and other places where datatypes are useful.

#### Details:

This won't return structures containing spread datatypes, even if those could plausibly describe the passed-in data structure - an array with 26 numbers in it will, when given to this macro, produce an array containing `num` 26 times, no more or less.

Note that this does not produce any [string](#type_string) patterns, like those produced by [(p:)](#macro_p) - any string given to this will still result in `str` being returned.

#### See also:

[(source:)](#macro_source), [(datatype:)](#macro_datatype)

Added in: 3.2.0

[](#macro_partial)The (partial: ) macro
---------------------------------------

### (partial: _[String](#type_string) or [CustomMacro](#type_custommacro), \[...Any\]_) → _CustomMacro_

When given either the [string](#type_string) name of a built-in macro, or a custom macro, followed by various values, this creates a custom macro that serves as a shorthand for calling the given macro with those values, plus any additional values.

#### Example usage:

*   `(set: $zeroTo to (partial:"range", 0))` sets $zeroTo to a custom macro which is a shortcut for calling [(range:)](#macro_range) with 0 as the first value. `($zeroTo: 10)` is the same as `(range:0,10)`. `($zeroTo: 5)` is the same as `(range:0,5)`.
*   `(set: $askDLG to (partial:"dialog", bind _result))` sets $askDLG to a custom macro that calls [(dialog:)](#macro_dialog) bound to the \_result temp variable. This can be used repeatedly to show dialogs that ask input from the player, without having to include the bound variable each time.
*   `(set: $next to (partial:"link-goto", "==>"))` creates a custom macro that produces passage links, where the link text is always "==>". Calling `($next2: "Continue")` would thus be equivalent to `(link-goto: "==>", "Continue")`.
*   `(set: $next2 to (partial: $next, "Continue"))` takes the previous example's custom macro, stored in $next, and makes a version where the passage name is always "Continue".
*   `(set: $envNoise to (partial:'either',"","",""))` creates a custom macro that randomly chooses between three empty strings and any other values you might give. This could be used for random flavour text in environments: `($envNoise:"You hear a jingling windchime")` would only display the text "You hear a jingling windchime" 25% of the time the macro is run.

#### Rationale:

This is designed as a shorthand for writing certain common macro calls with the same first values over and over. Think of (partial:) as creating a _partial macro call_ - one that isn't finished, but which can be used to make finished calls to that macro, by providing the remaining values.

You may notice that a [number](#type_number) of macros in Harlowe have a "configuration-first" ordering of their values - [(rotated:)](#macro_rotated) takes the number of rotations first, [(sorted:)](#macro_sorted) takes the optional sorting [lambda](#type_lambda) first, [(cycling-link:)](#macro_cycling-link) takes the optional bound variable first, and so forth. This ordering works well with (partial:).

#### Details:

Don't fall into the trap of thinking the values given to (partial:) will be re-evaluated on each call of the custom macro! For instance, `(partial: "count", (history: ))` will _not_ produce a custom macro that is always equivalent to `(count:(history: ), ..._someOtherNumbers)`. Remember that [(history:)](#macro_history) produces an [array](#type_array) of passage names each time it's called. It is that array that is given to (partial:), so every call to the produced custom macro will use _that_ array, and not whatever the current [(history:)](#macro_history) array would be.

Unlike macros created with [(macro:)](#macro_macro), the "params" data name of macros created with (partial:) is always an empty array.

As of 3.3.0, this can **not** be used with [metadata](#type_metadata) macros such as [(metadata:)](#macro_metadata) or [(storylet:)](#macro_storylet). Giving "metadata", "storylet" or other such macros' names will produce an error.

#### See also:

[(macro:)](#macro_macro)

Added in: 3.3.0

[](#macro_a)The (a: ) macro
---------------------------

### (a: _\[...Any\]_) → _[Array](#type_array)_

Also known as: [(array:)](#macro_array)

Creates an [array](#type_array), which is an ordered collection of values.

#### Example usage:

`(a:)` creates an empty array, which could be filled with other values later. `(a: "gold", "frankincense", "myrrh")` creates an array with three [strings](#type_string). This is also a valid array, but with its elements spaced in a way that makes them more readable.

    (a:
        "You didn't sleep in the tiniest bed",
        "You never ate the just-right porridge",
        "You never sat in the smallest chair",
    )
    

#### Rationale:

For an explanation of what arrays are, see the Array article. This macro is the primary means of creating arrays - simply supply the values to it, in order.

#### Details:

Note that due to the way the spread `...` operator works, spreading an array into the (a:) macro will re-create the original array unchanged: `(a: ...$array)` is the same as just `$array`.

#### See also:

[(dm:)](#macro_dm), [(ds:)](#macro_ds)

Added in: 1.0.0

[](#macro_dm)The (dm: ) macro
-----------------------------

### (dm: _\[...Any\]_) → _[Datamap](#type_datamap)_

Also known as: [(datamap:)](#macro_datamap)

Creates a [datamap](#type_datamap), which is a data structure that pairs [string](#type_string) names with data values. You should provide a string name, followed by the value paired with it, and then another string name, another value, and so on, for as many as you'd like.

#### Example usage:

`(dm:)` creates an empty datamap. `(dm: "Cute", 4, "Wit", 7)` creates a datamap with two names and values. The following code also creates a datamap, with the names and values laid out in a readable fashion.

    (dm:
        "Susan", "A petite human in a yellow dress",
        "Tina", "A ten-foot lizardoid in a three-piece suit",
        "Gertie", "A griffin draped in a flowing cape",
    )
    

#### Rationale:

For an explanation of what datamaps are, see the Datamap article. This macro is the primary means of creating datamaps - simply supply a name, followed by a value, and so on.

In addition to creating datamaps for long-term use, this is also used to create "momentary" datamaps which are used only in some operation. For instance, to add several values to a datamap at once, you can do something like this:

    (set: $map to (dm:))
    (set: $map to it + (dm: "Name 1", "Value 1", "Name 2", "Value 2"))
    

You can also use (dm:) as a kind of "multiple choice" structure, if you combine it with the `'s` or `of` syntax. For instance...

    (set: $monsterName to "Slime")
    (set: $element to $monsterName of (dm:
        "Chilltoad", "Ice",
        "Rimeswan", "Ice",
        "Brisketoid", "Fire",
        "Slime", "Water"
    ))
    

...will set $element to one of those elements if $monsterName matches the correct name. But, be warned: if none of those names matches $monsterName, an error will result.

#### See also:

[(a:)](#macro_a), [(ds:)](#macro_ds)

Added in: 1.0.0

[](#macro_ds)The (ds: ) macro
-----------------------------

### (ds: _\[...Any\]_) → _[Dataset](#type_dataset)_

Also known as: [(dataset:)](#macro_dataset)

Creates a [dataset](#type_dataset), which is an unordered collection of unique values.

#### Example usage:

`(ds:)` creates an empty dataset, which could be filled with other values later. `(ds: "gold", "frankincense", "myrrh")` creates a dataset with three [strings](#type_string).

#### Rationale:

For an explanation of what datasets are, see the Dataset article. This macro is the primary means of creating datasets - simply supply the values to it, in any order you like.

#### Details:

You can also use this macro to remove duplicate values from an [array](#type_array) (though also eliminating the array's order) by using the spread `...` operator like so: `(a: ...(ds: ...$array))`.

#### See also:

[(dm:)](#macro_dm), [(a:)](#macro_a)

Added in: 1.0.0

[](#macro_all-pass)The (all-pass: ) macro
-----------------------------------------

### (all-pass: _[Lambda](#type_lambda), \[...Any\]_) → _[Boolean](#type_boolean)_

Also known as: [(pass:)](#macro_pass)

This takes a "where" [lambda](#type_lambda) and a series of values, and evaluates to true if the lambda, when run using each value, never evaluated to false.

#### Example usage:

*   `(all-pass: _num where _num > 1 and < 14, 6, 8, 12, 10, 9)` is the same as `all of (a:6, 8, 12, 10, 9) > 1 and < 14`.
*   `(all-pass: _room where "Egg" is not in _room's objs, ...$rooms)` is true if each [datamap](#type_datamap) in $rooms doesn't have the [string](#type_string) `"Egg"` in its "objs".

#### Rationale:

The `contains` and `is in` operators can be used to quickly check if a sequence of values contains an exact value or values, and, combined with the `all` and `some` data names, can check that the values in a sequence merely resemble a kind of value - for instance, that they're positive [numbers](#type_number), or strings beginning with "E". But, they are times when you're writing the same check over and over, like `is an empty or is a whitespace`, or something more complicated, and would like the ability to store the check in a lambda and reuse it.

The (all-pass:) macro lets you perform these checks easily using a lambda, identical to that used with [(find:)](#macro_find) - simply write a "temp variable `where` a condition" expression, and every value will be put into the temp variable one by one, and the condition checked for each.

Additionally, you can use (all-pass:) just to run a single "where" lambda against a single value - for instance, as a variation of [(if:)](#macro_if). This is permitted, too - simply write the lambda and the single value. For those cases, you may wish to write it as [(pass:)](#macro_pass), a shorthand form that visually indicates that you're only checking one value rather than "all".

#### Details:

Of course, if any condition should cause an error, such as checking if a number contains a number, then the error will appear.

If zero values are given to (all-pass:), then it will return true by default.

The temp variable (if you choose to name it instead of using `it`) is controlled entirely by the lambda - it doesn't exist outside of it, it won't alter identically-named temp variables outside, and you can't manually [(set:)](#macro_set) it within the lambda.

You can refer to other variables, including other temp variables, in the `where` condition. For instance, you can write `(set: _name to "Eva")(all-pass: _item where _item is _name, "Evan", "Eve", "Eva")`. However, for obvious reasons, if the outer temp variable is named the same as the lambda's temp variable, it can't be referred to in the condition.

#### See also:

[(sorted:)](#macro_sorted), [(count:)](#macro_count), [(find:)](#macro_find), [(some-pass:)](#macro_some-pass), [(none-pass:)](#macro_none-pass)

Added in: 2.0.0

[](#macro_altered)The (altered: ) macro
---------------------------------------

### (altered: _[Lambda](#type_lambda), \[...Any\]_) → _[Array](#type_array)_

This takes a "via" [lambda](#type_lambda) and a sequence of values, and creates a new [array](#type_array) with the same values in the same order, but altered via the operation in the lambda's "via" clause. An optional "where" clause can also be provided, which, if its condition is false, causes that particular value to be unchanged.

#### Example usage:

*   `(altered: _monster via "Dark " + _monster, "Wolf", "Ape", "Triffid")` produces `(a: "Dark Wolf", "Dark Ape", "Dark Triffid")`
*   `(altered: _player via _player + (dm: "HP", _player's HP - 1), ...$players)` produces an array of $players [datamaps](#type_datamap) whose "HP" datavalue is decreased by 1.
*   `(altered: via it * -1 where it is an odd, 1,2,3,4,5,6)` produces `(a:-1,2,-3,4,-5,6)`. Because `2 is an odd` produces `false`, the 2 is unaltered, and so forth.

#### Rationale:

Transforming entire arrays or [datasets](#type_dataset), performing an operation on every item at once, allows arrays to be modified with the same ease that single values can - just as you can add some extra text to a [string](#type_string) with a single +, so too can you add extra text to an entire array of strings using a single call to (altered:).

This macro uses a lambda (which is just the "temp variable `via` an expression" expression) to take each item in the sequence and produce a new value to populate the resulting array. For `(altered: _a via _a + 1, 10,20,30)` it will produce 10 + 1, 20 + 1 and 30 + 1, and put those into a new array.

#### Details:

Of course, if any operation applied to any of the values should cause an error, such as trying to add a string to a [number](#type_number), an error will result.

An error will NOT appear if you provide no values after the lambda - an empty array will be returned instead. This allows you to write `(altered: $lambda, ...$array)` without checking whether $array contains any values (which you may not be certain of, if it contains the result of a previous [(find:)](#macro_find)).

The temp variable (if you choose to name it instead of using `it`) is controlled entirely by the lambda - it doesn't exist outside of it, it won't alter identically-named temp variables outside, and you can't manually [(set:)](#macro_set) it within the lambda.

You can refer to other variables, including other temp variables, in the `via` expression. For instance, you can write `(altered: _object via _playerName + "'s " + _object, "Glove", "Hat", "Purse")`. However, for obvious reasons, if the outer temp variable is named the same as the lambda's temp variable, it can't be referred to in the expression.

If no values are given to (altered:) except for the lambda, an empty array will be produced.

#### See also:

[(for:)](#macro_for), [(folded:)](#macro_folded)

Added in: 2.0.0

[](#macro_count)The (count: ) macro
-----------------------------------

### (count: _[Array](#type_array) or [String](#type_string), ...Any_) → _[Number](#type_number)_

Accepts a [string](#type_string) or [array](#type_array), followed by a value, and produces the [number](#type_number) of times any of the values are inside the string or array.

#### Example usage:

*   `(count: (a:1,2,3,2,1), 1, 2)` produces 4.
*   `(count: "Though", "ugh","u","h")` produces 4.

#### Rationale:

This can be thought of as an accompaniment to the `contains` operator. Usually, you just want to check if one or more occurrences of the substring or value are in the given container. To check if an array or string contains any or all of the values, you can use `contains` with the `all` or `some` data names, like so: `$arr contains all of (a:1,2)` and `$arr contains some of (a:1,2)`. But, if you need an _exact_ figure for the number of occurrences, this macro will be of use.

#### A note about newer macros:

(count:) is a fairly old Harlowe macro. Two other macros, [(find:)](#macro_find) and [(str-find:)](#macro_str-find), exist for checking values and substrings using more powerful constructs, like string patterns (produced by [(p:)](#macro_p) and its relatives) or "where" lanbdas. In many cases, you can replicate the functionality of (count:) by using these macros, and checking the `length` of the returned array. For instance, `(count: "Abracadabra", "a","b")` is the same as `length of (str-find:(p-either:"a","b"),"Abracadabra")`. But, you may notice that the (count:) call is somewhat shorter and more readable. Thus, if you only need to perform a simple check of substrings or values, (count:) can be preferable to those other macros.

#### Details:

If you use this with a number, [boolean](#type_boolean), [datamap](#type_datamap), [dataset](#type_dataset) (which can't have duplicates), or anything else which can't have a value, then an error will result.

If you use this with a string, and the values aren't also strings, then an error will result.

Substrings are counted separately from each other - that is, the string "Though" contains "ugh" once and "h" once, and `(count: "Though","ugh","h")` results in 3. To check for "h" occurrences that are not contained in "ugh", you can try subtracting two (count:)s - `(count: "Though","ugh") - (count: "Though","h")` produces 1.

#### See also:

[(find:)](#macro_find), [(str-find:)](#macro_str-find), [(dm-names:)](#macro_dm-names), [(dm-values:)](#macro_dm-values)

Added in: 1.0.0

[](#macro_dm-altered)The (dm-altered: ) macro
---------------------------------------------

### (dm-altered: _[Lambda](#type_lambda), [Datamap](#type_datamap)_) → _Datamap_

Also known as: [(datamap-altered:)](#macro_datamap-altered)

This is a variant of [(altered:)](#macro_altered) which takes a "via" [lambda](#type_lambda) and a single [datamap](#type_datamap), and creates a new datamap with the same datanames, but with the values changed by the 'via' lambda. The 'via' lambda is given a datamap with 'name' and 'value' datanames (identical to those in the [array](#type_array) produced by [(data-entries:)](#macro_data-entries)), so that the name of each data value can be used in the lambda, but it must produce a single data value. An optional "where" clause can also be provided, which, if its condition is false, causes that particular value to be unchanged.

#### Example usage:

*   `(dm-altered: via its value + 10 where its name is not 'Pluck', (dm: 'Caution', 2, 'Pluck', 5, 'Suspicion', 1))` produces `(dm: 'Caution',12,'Pluck',5,'Suspicion',11)`. Note that the `it` value in the lambda is `(dm:'name', 'Caution', 'value', 2)` for the first loop, `(dm:'name', 'Pluck', 'value', 5)` for the second loop, and `(dm:'name', 'Suspicion', 'value', 1)` for the third loop.
*   `(dm-altered: _a via 1 where _a's value is a num, $dm)` produces a copy of the datamap in $dm, but with all the [number](#type_number) values changed to 1.

#### Rationale:

Generally, datamaps (unlike arrays) are not designed to have all of their values looped over and altered in one go, as each value is meant to have its own distinct meaning relative to the others. But, there are a few situations where this is desirable, such as altering multiple numbers in a statistics datamap to fit a particular range (such as from 1 to 100). This essentially combines [(dm-entries:)](#macro_dm-entries) with [(altered:)](#macro_altered) (or perhaps [(folded:)](#macro_folded)) by letting you operate on each value while also having access to its name, and automates the process of creating the new datamap from the altered [(dm-entries:)](#macro_dm-entries).

#### Details:

Unlike [(altered:)](#macro_altered), you must supply a datamap as the second value. Additionally, similar to [(dm-entries:)](#macro_dm-entries), only one datamap can be given to this macro. If you want to alter multiple datamaps with the same lambda, you may want to combine this with [(altered:)](#macro_altered), in a manner similar to this: `(altered: _dm, via (dm-altered: $lambda, _dm), ...$arrayOfDatamaps)`.

Of course, if any operation should cause an error, such as trying to add a [string](#type_string) to a number, an error will result.

The temp variable (if you choose to name it instead of using `it`) is controlled entirely by the lambda - it doesn't exist outside of it, it won't alter identically-named temp variables outside, and you can't manually [(set:)](#macro_set) it within the lambda.

You can refer to other variables, including other temp variables, in the `via` expression. For instance, you can write `(dm-altered: _accessory via _name + "'s " + _accessory's value, "Glove", "Hat", "Purse")`. However, for obvious reasons, if the outer temp variable is named the same as the lambda's temp variable, it can't be referred to in the expression.

If the given datamap is empty (has no values) then another empty datamap will be returned.

#### See also:

[(altered:)](#macro_altered), [(dm-entries:)](#macro_dm-entries)

Added in: 3.3.0

[](#macro_dm-entries)The (dm-entries: ) macro
---------------------------------------------

### (dm-entries: _[Datamap](#type_datamap)_) → _[Array](#type_array)_

Also known as: [(data-entries:)](#macro_data-entries), [(datamap-entries:)](#macro_datamap-entries)

This takes a [datamap](#type_datamap), and returns an [array](#type_array) of its name/value pairs. Each pair is a datamap that only has "name" and "value" data. The pairs are ordered by their name.

#### Example usage:

*   `(dm-entries: (dm:'B',24, 'A',25))` produces the following array: `(a: (dm: "name", "A", "value", 25), (dm: "name", "B", "value", 24))`
*   `(altered: _entry via _entry's name + ":" + _entry's value, ...(dm-entries: $m))` creates an array of [strings](#type_string) from the $m datamap's names and values.

#### Rationale:

There are occasions where operating on just the names, or the values, of a datamap isn't good enough - you'll want both. Rather than the verbose process of taking the [(dm-names:)](#macro_dm-names) and [(dm-values:)](#macro_dm-values) arrays and using them [(interlaced:)](#macro_interlaced) with each other, you can use this macro instead, which allows the name and value of each entry to be referenced using "name" and "value" properties.

#### See also:

[(dm-names:)](#macro_dm-names), [(dm-values:)](#macro_dm-values)

Added in: 2.0.0

[](#macro_dm-names)The (dm-names: ) macro
-----------------------------------------

### (dm-names: _[Datamap](#type_datamap)_) → _[Array](#type_array)_

Also known as: [(data-names:)](#macro_data-names), [(datamap-names:)](#macro_datamap-names)

This takes a [datamap](#type_datamap), and returns a sorted [array](#type_array) of its data names, sorted alphabetically.

#### Example usage:

`(dm-names: (dm:'B','Y', 'A','X'))` produces the array `(a: 'A','B')`

#### Rationale:

Sometimes, you may wish to obtain some information about a datamap. You may want to list all of its data names, or determine how many entries it has. You can use the (dm-names:) macro to do these things: if you give it a datamap, it produces a sorted array of all of its names. You can then [(print:)](#macro_print) them, check the length of the array, obtain a subarray, and other things you can do to arrays.

#### See also:

[(dm-values:)](#macro_dm-values), [(dm-entries:)](#macro_dm-entries)

Added in: 1.1.0

[](#macro_dm-values)The (dm-values: ) macro
-------------------------------------------

### (dm-values: _[Datamap](#type_datamap)_) → _[Array](#type_array)_

Also known as: [(data-values:)](#macro_data-values), [(datamap-values:)](#macro_datamap-values)

This takes a [datamap](#type_datamap), and returns an [array](#type_array) of its values, sorted alphabetically by their name.

#### Example usage:

`(dm-values: (dm:'B',24, 'A',25))` produces the array `(a: 25,24)`

#### Rationale:

Sometimes, you may wish to examine the values stored in a datamap without referencing every name - for instance, determining if 0 is one of the values. (This can't be determined using the `contains` keyword, because that only checks the map's data names.) You can extract all of the datamap's values into an array to compare and analyse them using (dm-values:). The values will be sorted by their associated names.

#### See also:

[(dm-names:)](#macro_dm-names), [(dm-entries:)](#macro_dm-entries)

Added in: 1.1.0

[](#macro_find)The (find: ) macro
---------------------------------

### (find: _[Lambda](#type_lambda), \[...Any\]_) → _[Array](#type_array)_

This searches through the given values, and produces an [array](#type_array) of those which match the given search test (which is expressed using a temp variable, the `where` keyword, and a [boolean](#type_boolean) condition). If none match, an empty array is produced.

#### Example usage:

*   `(find: _person where _person is not "Alice", ...$people)` produces a subset of $people not containing the [string](#type_string) `"Alice"`.
*   `(find: _item where _item's 1st is "A", "Thorn", "Apple", "Cryptid", "Anchor")` produces `(a: "Apple", "Anchor")`.
*   `(find: _num where (_num >= 12) and (it % 2 is 0), 9, 10, 11, 12, 13, 14, 15, 16)` produces `(a: 12, 14, 16)`.
*   `(find: _val where _val + 2, 9, 10, 11)` produces an error, because `_val + 2` isn't a boolean.
*   `1st of (find: _room where _room's objs contains "Egg", ...$rooms)` finds the first [datamap](#type_datamap) in $rooms whose "objs" contains the string `"Egg"`.

#### Rationale:

Selecting specific data from arrays or sequences based on a user-provided boolean condition is one of the more common and powerful operations in programming. This macro allows you to immediately work with a subset of the array's data, without caring what kind of subset it is. The subset can be based on each string's characters, each datamap's values, each [number](#type_number)'s evenness or oddness, whether a variable matches it... anything you can write.

This macro uses a [lambda](#type_lambda) (which is just the "temp variable `where` a condition" expression) to check every one of the values given after it. For `(find: _item where _item > 40, 30, 60, 90)`, it will first check if `30 > 40` (which is `false`), if `60 > 40` (which is `true`), and if `90 > 40` (which is `true`), and include in the returned array those values which resulted in `true`.

#### Details:

Of course, if any condition should cause an error, such as checking if a number contains a number, then the error will appear.

However, an error will NOT appear if you provide no values after the lambda - searching an empty sequence will simply result in an empty array being returned. This allows you to write `(find: $lambda, ...$array)` without checking whether $array contains any values (which you may not be certain of, if it contains the result of a previous (find:)).

The temp variable (if you choose to name it instead of using `it`) is controlled entirely by the lambda - it doesn't exist outside of it, it won't alter identically-named temp variables outside, and you can't manually [(set:)](#macro_set) it within the lambda.

You can refer to other variables, including other temp variables, in the `where` condition. For instance, you can write `(set: _name to "Eva")(find: _item where _item is _name, "Evan", "Eve", "Eva")`. However, for obvious reasons, if the outer temp variable is named the same as the lambda's temp variable, it can't be referred to in the condition.

There isn't a way to examine the position of a value in the condition - you can't write, say, `(find: _item where _pos % 2 is 0, "A", "B", "C", "D")` to select just "B" and "D".

You shouldn't use this macro to try and alter the given values! Consider the [(altered:)](#macro_altered) or [(folded:)](#macro_folded) macro instead.

#### See also:

[(sorted:)](#macro_sorted), [(all-pass:)](#macro_all-pass), [(some-pass:)](#macro_some-pass), [(none-pass:)](#macro_none-pass)

Added in: 2.0.0

[](#macro_folded)The (folded: ) macro
-------------------------------------

### (folded: _[Lambda](#type_lambda), ...Any_) → _Any_

This takes a "making" [lambda](#type_lambda) and a sequence of values, and creates a new value (the "total") by feeding every value in the sequence to the lambda, akin to folding a long strip of paper into a single square. The first value after the lambda is put into the total (which is the variable inside the lambda's "making" clause) before running the lambda on the remaining values.

#### Example usage:

*   `(folded: _enemy making _allHP via _allHP + _enemy's HP, 0, ...$enemies)` will first set \_allHP to 0, then add $enemies's 1st's HP to it, then add the remaining HP values to it. Then it will return the [number](#type_number) in \_allHP.
*   `(folded: _name making _allNames via _allNames + "/" + _name, ...(history: ))` is the same as `(joined: "/", ...(history: ))`.

#### Rationale:

The [(for:)](#macro_for) macro, while intended to display multiple copies of a hook, can also be used to run a single macro call multiple times. You may wish to use this to repeatedly [(set:)](#macro_set) a variable to itself plus one of the looped values (or some other operation). (folded:) is meant to let you perform this in a shorter, more fluid fashion.

Consider, first of all, a typical [(for:)](#macro_for) and [(set:)](#macro_set) loop such as the following:

    (set:$enemies to (a:(dm:"Name","Mossling", "HP",7), (dm:"Name","Moldling","HP",2)))
    {(set:_allHP to 0)
    (for: each _enemy, ...$enemies)[
        (set:_allHP to it + _enemy's HP)
    ]}
    TOTAL HEART POINTS: _allHP
    

This can be rewritten using (folded:) as follows. While this version may seem a little harder to read if you're not used to it, it allows you to accomplish the same thing in a single line, by immediately using the macro's provided value without a variable:

    (set:$enemies to (a:(dm:"Name","Mossling", "HP",7), (dm:"Name","Moldling","HP",2)))
    TOTAL HEART POINTS: (folded: _enemy making _allHP via _allHP + _enemy's HP, 0, ...$enemies)
    

If you need to perform this operation at various different times in your story, you may wish to [(set:)](#macro_set) the lambda into a variable, so that you, for instance, might need only write:

    (set:$enemies to (a:(dm:"Name","Mossling", "HP",7), (dm:"Name","Moldling","HP",2)))
    (set: $totalEnemyHP to (_enemy making _allHP via _allHP + _enemy's HP))
    TOTAL HEART POINTS: (folded: $totalEnemyHP, 0, ...$enemies)
    

#### Details:

Let's look at this example usage again.

    (set:$enemies to (a:(dm:"Name","Mossling", "HP",7), (dm:"Name","Moldling","HP",2)))
    (folded: _enemy making _allHP via _allHP + _enemy's HP, 0, ...$enemies)
    

This macro call uses a "making" lambda (which is the "temp variable `making` another temp variable `via` expression" expression) to run the expression using every provided value, much like those repeated [(set:)](#macro_set) calls. The temp variable in the "making" clause, `_allHP`, is the **total**, and at the start, it is set to the first provided value (in this case, 0). The temp variable at the start, `_enemy`, is then set to the next value after that (which in this case would be the "Mossling" [datamap](#type_datamap)), and the "via" clause is used to set `_allHP` to a new value. This repeats until all of the values have been handled. Then, the final result of `_allHP` is returned.

Of course, if at any time the expression should cause an error, such as adding a number to a [string](#type_string), then an error will result.

Both of the temp variables can be named anything you want. As with other lambda macros, they don't exist outside of it, won't alter identically-named temp variables outside of it, and can't be manually [(set:)](#macro_set) within the lambda.

You can refer to other variables, including other temp variables, in the `via` expression. For instance, you can write `(folded: _score making _totalScore via _totalScore + _score * _bonusMultiplier)`. However, for obvious reasons, if the outer temp variable is named the same as the lambda's temp variables, it can't be referred to in the expression.

You can also use a "where" clause inside the "making" lambda to prevent an operation from occurring if a value isn't suitable - `(folded: _item making _total via _total + _item where _item > 0, 0, ...$arr)` will only sum up the values in $arr which are greater than 0. Note that (as of 3.3.6), the "where" clause does not apply to the first value (as that is put into `_total` from the outset, and never becomes an `_item` value). As such, an explicit 0 is given before `...$arr`, so that `...$arr`'s first value is still subject to the "where" clause.

#### See also:

[(for:)](#macro_for), [(altered:)](#macro_altered), [(joined:)](#macro_joined)

Added in: 2.0.0

[](#macro_interlaced)The (interlaced: ) macro
---------------------------------------------

### (interlaced: _[Array](#type_array), ...Array_) → _Array_

Takes multiple [arrays](#type_array), and pairs up each value in those arrays: it creates an array containing each array's first value followed by each array's second value, and so forth. If some values have no matching pair (i.e. one array is longer than the other) then those values are ignored.

#### Example usage:

`(interlaced: (a: 'A', 'B', 'C', 'D'), (a: 1, 2, 3))` is the same as `(a: 'A',1,'B',2,'C',3)`

#### Rationale:

There are a couple of other macros which accept data in pairs - the most notable being [(dm:)](#macro_dm), which takes data names and data values paired. This macro can help with using such macros. For instance, you can supply an array of [(dm-names:)](#macro_dm-names) and [(dm-values:)](#macro_dm-values) to (interlaced:), and supply that to [(dm:)](#macro_dm), to produce the original [datamap](#type_datamap) again. Or, you can supply just the names, and use a macro like [(repeated:)](#macro_repeated) to fill the other values.

However, (interlaced:) can also be of use alongside macros which accept a sequence: you can use it to cleanly insert values between each item. For instance, one can pair an array with another array of spaces, and then convert them to a [string](#type_string) with [(str:)](#macro_str). `(str: ...(interlaced: $arr, (repeated: $arr's length, ' ')))` will create a string containing each element of $arr, followed by a space.

#### Details:

If one of the arrays provided is empty, the resulting array will be empty, as well.

#### See also:

[(a:)](#macro_a), [(rotated:)](#macro_rotated), [(repeated:)](#macro_repeated)

Added in: 2.0.0

[](#macro_none-pass)The (none-pass: ) macro
-------------------------------------------

### (none-pass: _[Lambda](#type_lambda), ...Any_) → _[Boolean](#type_boolean)_

This can be thought of as the opposite of [(all-pass:)](#macro_all-pass): it produces true if every value, when given to the [lambda](#type_lambda), never evaluated to true. If zero values are given to (none-pass:), then it will return true by default, just like [(all-pass:)](#macro_all-pass). For more information, consult the description of [(all-pass:)](#macro_all-pass).

#### Example usage:

    (set: $partyMembers to (a: (dm: "name", "Alan", "curseLevel", 0), (dm: "name", "Jess", "curseLevel", 0)))
    (set: $noMelvins to (none-pass: where its name is "Melvin", ...$partyMembers))
    

Added in: 2.0.0

[](#macro_permutations)The (permutations: ) macro
-------------------------------------------------

### (permutations: _...Any_) → _[Array](#type_array)_

When given a sequence of values, this produces an [array](#type_array) containing each permutation of the order of those values, as arrays.

#### Example usage:

*   `(permutations: "☆", "♡", "∪")` produces `(a:(a:"☆","♡","∪"),(a:"♡","☆","∪"),(a:"∪","☆","♡"),(a:"☆","∪","♡"),(a:"♡","∪","☆"),(a:"∪","♡","☆"))`.

#### Rationale:

If you're writing an algorithm that cares about combinations of data, such as a procedurally generated puzzle or password, you may find that this macro has a [number](#type_number) of subtle uses. This macro by itself provides an easy way to check if a sequence of values contains exactly the same values as another sequence, regardless of order. For instance, you can check if another array stored in `$array` contains exactly two 3s, two 2s and one 1 by writing `(permutations:3,1,3,2,2) contains $array`, because if it was so, the array would be included among those permutations. You can't perform this check by writing `(dataset:3,1,3,2,2) is (dataset:...$array)` because [datasets](#type_dataset), by design, don't hold multiples of a single value (such as 3).

Additionally, this macro can be combined with [(find:)](#macro_find) and [(shuffled:)](#macro_shuffled) to help you find a permutation that matches certain criteria. For instance, to find a random permutation of the numbers 0 to 5 that doesn't begin with 0, you can write `1st of (shuffled: ...(find: where its 1st is not 0, ...(permutations:0,1,2,3,4)))`. While this could be performed by simply re-running `(shuffled:0,1,2,3,4)` until it produced an array that didn't begin with 0, the code to check and re-run this would be much more complicated.

#### Details:

When given no values, this simply returns the empty array `(a:)`.

#### See also:

[(shuffled:)](#macro_shuffled)

Added in: 3.2.0

[](#macro_range)The (range: ) macro
-----------------------------------

### (range: _[Number](#type_number), Number_) → _[Array](#type_array)_

Produces an [array](#type_array) containing an inclusive range of whole [numbers](#type_number) from a to b, in ascending order.

#### Example usage:

*   `(range:1,14)` is equivalent to `(a:1,2,3,4,5,6,7,8,9,10,11,12,13,14)`
*   `(range:2,-2)` is equivalent to `(a:-2,-1,0,1,2)`

#### Rationale:

This macro is a shorthand for defining an array that contains a sequence of integer values. Rather than writing out all of the numbers, you can simply provide the first and last numbers.

#### Details:

If the second number given is smaller than the first number, then (range:) will act as if their positions were reversed - that is, `(range:50,0)` is the same as `(range:0,50)`.

Certain kinds of macros, like [(either:)](#macro_either) or [(dataset:)](#macro_dataset), accept sequences of values. You can use (range:) with these in conjunction with the `...` spreading operator: `(dataset: ...(range:2,6))` is equivalent to `(dataset: 2,3,4,5,6,7)`, and `(either: ...(range:1,5))` is equivalent to `(random: 1,5)`.

#### See also:

[(a:)](#macro_a)

Added in: 1.0.0

[](#macro_repeated)The (repeated: ) macro
-----------------------------------------

### (repeated: _[Number](#type_number), ...Any_) → _[Array](#type_array)_

When given a [number](#type_number) and a sequence of values, this macro produces an [array](#type_array) containing those values repeated, in order, by the given number of times.

#### Example usage:

*   `(repeated: 5, false)` produces `(a: false, false, false, false, false)`
*   `(repeated: 3, 1,2,3)` produces `(a: 1,2,3,1,2,3,1,2,3)`

#### Rationale:

This macro, as well as [(range:)](#macro_range), are the means by which you can create a large array of similar or regular data, quickly. Just as an example: you want, say, an array of several identical, complex [datamaps](#type_datamap), each of which are likely to be modified in the game, you can use (repeated:) to make those copies easily. Or, if you want, for instance, a lot of identical [strings](#type_string) accompanied by a lone different string, you can use (repeated:) and add a `(a: "string")`to the end.

When you already have an array variable, this is similar to simply adding that variable to itself several times. However, if the number of times is over 5, this can be much simpler to write.

#### Details:

An error will, of course, be produced if the number given is negative, or contains a fraction. As of 3.2.0, however, it will no longer error if the number is 0.

If you wish to repeat a string multiple times, please use [(str-repeated:)](#macro_str-repeated).

#### See also:

[(a:)](#macro_a), [(range:)](#macro_range), [(str-repeated:)](#macro_str-repeated)

Added in: 2.0.0

[](#macro_reversed)The (reversed: ) macro
-----------------------------------------

### (reversed: _\[...Any\]_) → _[Array](#type_array)_

Similar to [(a:)](#macro_a), except that it creates an [array](#type_array) containing the elements in reverse order.

#### Example usage:

`(set: $a to (reversed: ...$a, 2))` sets $a to its reverse, with `2` at the start.

#### Rationale:

Having stored items in an array, or obtained a built-in array like [(history:)](#macro_history), you may want to perform some action using it - maybe assemble them into a single [string](#type_string) using [(folded:)](#macro_folded) - in the opposite order to which they are stored. (reversed:) allows this reversal to be easily created.

#### Details:

Unlike [(shuffled:)](#macro_shuffled), which produces an error if one or no elements are given, this does not error if a non-reversible sequence of one or zero is given. This is meant to permit its wider use with data whose length you may not always have control over, such as the [(history:)](#macro_history) array.

If you wish to specifically reverse the characters in a string, please use [(str-reversed:)](#macro_str-reversed).

#### See also:

[(a:)](#macro_a), [(shuffled:)](#macro_shuffled), [(rotated:)](#macro_rotated), [(str-reversed:)](#macro_str-reversed)

Added in: 3.0.0

[](#macro_rotated-to)The (rotated-to: ) macro
---------------------------------------------

### (rotated-to: _[Lambda](#type_lambda), \[...Any\]_) → _[Array](#type_array)_

Similar to the [(a:)](#macro_a) macro, but it also takes a "where" [lambda](#type_lambda) at the start, and cycles the order of the subsequent values so that the first value to match the lambda is placed at the start.

#### Example usage:

*   `(rotated-to: where it is 'D', 'A','B','C','D')` is equal to `(a: 'D','A','B','C')`.
*   `(rotated-to: where it > 3, 1, 2, 3, 4, 5)` is equal to `(a: 4, 5, 1, 2, 3)`.

#### Rationale:

This is a variation of the [(rotated:)](#macro_rotated) macro. Both of these macros allow you to cycle through a sequence of values, wrapping back to the start, until a certain value is at the front, then provide an [array](#type_array) of the values in that order. The former macro lets you specify an exact [number](#type_number) of rotations to do; this one lets you specify what kind of value should be at the front, if you don't know the exact order of the passed-in [strings](#type_string) (which may be the case if they come from an array).

Note that while the lambda argument provides a lot of flexibility, if you simply want to compare each value to a known value, `where it is` (such as in an example above) is a simple enough lambda formulation to do so.

#### Details:

If the lambda doesn't match any of the values (that is, there's no value to rotate to) then an error will result.

As of 3.3.0, you may give only one item after the lambda without causing an error (although an error will still occur if the given lambda doesn't match it).

#### See also:

[(sorted:)](#macro_sorted), [(rotated:)](#macro_rotated), [(find:)](#macro_find)

Added in: 3.2.0

[](#macro_rotated)The (rotated: ) macro
---------------------------------------

### (rotated: _[Number](#type_number), ...Any_) → _[Array](#type_array)_

Similar to the [(a:)](#macro_a) macro, but it also takes a [number](#type_number) at the start, and moves each item forward by that number, wrapping back to the start if they pass the end of the [array](#type_array).

#### Example usage:

*   `(rotated: 1, 'A','B','C','D')` is equal to `(a: 'D','A','B','C')`.
*   `(rotated: -2, 'A','B','C','D')` is equal to `(a: 'C','D','A','B')`.

#### Rationale:

Sometimes, you may want to cycle through a sequence of values, without repeating any until you reach the end. For instance, you may have a rotating set of flavour-text descriptions for a thing in your story, which you'd like displayed in their entirety without the whim of a random picker. The (rotated:) macro allows you to apply this "rotation" to a sequence of data, changing their positions by a certain number without discarding any values.

Remember that, as with all macros, you can insert all the values in an existing array using the `...` syntax: `(set: $a to (rotated: 1, ...$a))` is a common means of replacing an array with a rotation of itself.

Think of the number as being an addition to each position in the original sequence - if it's 1, then the value in position 1 moves to 2, the value in position 2 moves to 3, and so forth.

Incidentally... you can also use this macro to rotate a [string](#type_string)'s characters, by doing something like this: `(str: ...(rotated: 1, ...$str))`

#### Details:

As of 3.3.0, providing fewer than two items to this macro will not result in an error (even though that isn't enough values to meaningfully rotate).

As of 3.3.0, rotating by a number of positions greater (or, if negative, less) than the number of values will still result in that many rotations occurring, without an error being produced.

If you can't reliably know how many positions you wish to rotate, but know that you need a certain value to be at the front, simply use the [(rotated-to:)](#macro_rotated-to) variant of this macro instead.

#### See also:

[(sorted:)](#macro_sorted), [(rotated-to:)](#macro_rotated-to)

Added in: 1.1.0

[](#macro_shuffled)The (shuffled: ) macro
-----------------------------------------

### (shuffled: _...Any_) → _[Array](#type_array)_

Similar to [(a:)](#macro_a), this produces an [array](#type_array) of the given values, except that it randomly rearranges the elements instead of placing them in the given order.

#### Example usage:

    (if: $condiments is not an array)[(set: $condiments to (shuffled: "mustard", "mayo", "chili sauce", "salsa"))]
    You reach into the fridge and grab... (nth: visits, ...$condiments)? OK.
    

#### Rationale:

If you're making a particularly random story, you'll often want to create a 'deck' of random descriptions, elements, etc. that you can use repeatedly. That is to say, you'll want to put them in a random order in an array, preserving that random order for the duration of a game.

The [(either:)](#macro_either) macro is useful for selecting an element from an array randomly (if you use the spread `...` syntax), but isn't very helpful for this particular problem. Additionally, the `random` data name of arrays can be used to retrieve a random value, and can remove that value using [(move:)](#macro_move), but it isn't as effective if you want that value to remain in the deck after being used.

The (shuffled:) macro is another solution: it takes elements and returns a randomly-ordered array that can be used as you please.

#### Details:

This is one of the features that uses Harlowe's pseudo-random [number](#type_number) generator. If you use [(seed:)](#macro_seed) at the start of the story, the order will be predetermined based on the seed [string](#type_string), and how many other random macros and features have been used before it.

As of 3.3.0, giving zero or more values to (shuffled:) will cause an empty array (such as by `(a:)`) to be returned, rather than causing an error to occur.

#### See also:

[(a:)](#macro_a), [(either:)](#macro_either), [(rotated:)](#macro_rotated)

Added in: 1.1.0

[](#macro_some-pass)The (some-pass: ) macro
-------------------------------------------

### (some-pass: _[Lambda](#type_lambda), ...Any_) → _[Boolean](#type_boolean)_

This is similar to [(all-pass:)](#macro_all-pass), but produces true if one or more value, when given to the [lambda](#type_lambda), evaluated to true. It can be thought of as shorthand for putting `not` in front of [(none-pass:)](#macro_none-pass). If zero values are given to [(all-pass:)](#macro_all-pass), then it will return false by default. For more information, consult the description of [(all-pass:)](#macro_all-pass).

#### Example usage:

    (set: $partyMembers to (a: (dm: "name", "Alan", "curseLevel", 0), (dm: "name", "Jess", "curseLevel", 0)))
    (set: $taintedParty to (some-pass: where its curseLevel > 0, ...$partyMembers))
    

Added in: 2.0.0

[](#macro_sorted)The (sorted: ) macro
-------------------------------------

### (sorted: _\[[Lambda](#type_lambda)\], ...Any_) → _[Array](#type_array)_

This macro produces an [array](#type_array) in which the values are sorted in English alphanumeric sort order. If any of the values are not [numbers](#type_number) or [strings](#type_string), a "via" [lambda](#type_lambda) must be given first, which is used to translate the value into a number or string that it should be sorted by.

#### Example usage:

*   `(set: $a to (a: 'A','C','E','G', 2, 1))(sorted: ...$a)` produces `(a:1,2,"A","C","E","G")`.
*   `(sorted: via its name, ...$creatures)` sorts the [datamaps](#type_datamap) in the array stored in $creatures by their "name" values. [Datamaps](#type_datamap) with an alphanumerically earlier "name" appear first.
*   `(sorted: via its length * -1, "Gus", "Arthur", "William")` produces `(a: "William", "Arthur", "Gus"))`. This lambda produces negative numbers for each string.
*   `(sorted: via its tags's length, ...(passages: ))` produces a version of the [(passages:)](#macro_passages) array, sorted by ascending number of tags each passage datamap has.
*   `(sorted: via (passage:it)'s exclusivity, ...(history: ))` produces a version of the [(history:)](#macro_history) array (which is an array of passage name strings), sorted by the [(exclusivity:)](#macro_exclusivity) [metadata](#type_metadata) the passage with that name has.
*   `(sorted: via its h, orange, red, blue, yellow)` produces `(a: red, orange, yellow, blue)`.
*   `(sorted: via (random:1,100), ...$arr)` is mostly the same as `(shuffled:...$arr)`.
*   `(sorted: via its urgency, ...(sorted: via its exclusivity, ...(passages: )))` sorts the [(passages:)](#macro_passages) array by urgency, and sorts ties by exclusivity.

#### Rationale:

The main purpose of arrays is to store data values in a specific order - feats the player has performed, names of open storylets from [(open-storylets:)](#macro_open-storylets), visited passage names from [(history:)](#macro_history), names of file slots as produced by `(dm-entries:(saved-games: ))`, to name just a few examples. However, there are times when you want to work with the same array in a different order, either because the default ordering isn't to your needs - for instance, you wish to list open storylets by one of their metadata values - or you need to include special exceptions to the normal ordering - for instance, you want to sort [(history:)](#macro_history) passages with a certain tag higher than others. This macro can be used to create a sorted array, organising the given values in either alphanumeric order, or by a particular alphanumeric key.

#### Details:

The optional "via" lambda must translate each value into either a number or string - otherwise, it will produce an error. It can be provided even if any of the values are already numbers or strings.

The values are sorted _as if_ they were the value that the "via" lambda produced. In the example of `(sorted: via its length * -1, "Gus", "Arthur", "William")`. the string "Gus" is sorted _as if_ it was `"Gus"'s length * -1` (which is -3), "Arthur" is sorted _as if_ it was `"Arthur"'s length * -1` (which is -6), and "William" is sorted _as if_ it was `"William"'s length * -1` (which is -7). This allows a variety of sorting options. Datamaps may be sorted by any one of their string or number values, and strings may be sorted in different ways than just their alphanumeric order.

Values sorted by a "via" lambda, but which have the same value to that lambda, are kept in the same order. This is known as a "stable" sort. `(sorted:via its 1st, 'Bob', 'Alice', 'Blake', 'Bella', 'Bertrude')`, which only sorts the strings by their first letter, will always produce `(a:"Alice","Bob","Blake","Bella","Bertrude")`, even though "Blake" is alphabetically sooner than "Bob". This means that, if one needs to sort an array of datamaps by multiple values (such as sorting a set of characters by name, then by age),

Unlike other programming languages, strings (either produced by the "via" lambda, or sorted by themselves when no lambda was given) aren't sorted using ASCII sort order, but _alphanumeric_ sorting: the string "A2" will be sorted after "A1" and before "A11". Moreover, if the player's web browser supports internationalisation (that is, every current browser except IE 10), then the strings will be sorted using English language rules (for instance, "é" comes after "e" and before "f", and regardless of the player's computer's language settings. Otherwise, it will sort using ASCII comparison (whereby "é" comes after "z").

If there is no "via" lambda, and a non-string, non-number is given to this macro, an error will be produced.

Currently there is no way to specify an alternative language locale to sort by, but this is likely to be made available in a future version of Harlowe.

As of 3.3.0, giving zero or more values (after the optional lambda) to (sorted:) will cause an empty array (such as by `(a:)`) to be returned, rather than causing an error to occur.

#### See also:

[(a:)](#macro_a), [(shuffled:)](#macro_shuffled), [(rotated:)](#macro_rotated)

Added in: 1.1.0

[](#macro_subarray)The (subarray: ) macro
-----------------------------------------

### (subarray: _[Array](#type_array), [Number](#type_number), Number_) → _Array_

When given an [array](#type_array), this returns a new array containing only the elements whose positions are between the two [numbers](#type_number), inclusively.

#### Example usage:

*   `(subarray: $a, 3, 7)` is the same as `$a's (a:3,4,5,6,7)` or `$a's 3rdto7th`
*   `(subarray: $a, 3, $b)` is the same as `$a's (range: 3, $b)` if $b is positive.

#### Rationale:

This macro may seem redundant, as you can obtain subarrays of arrays without this macro, by using the `'s` or `of` syntax along with either a specified range of consecutive positions, or an array of arbitrary position numbers. For instance, `$a's 4thto12th` obtains a subarray of $a containing its 4th through 12th values, `$a's (a:1,3,5)` obtains a subarray of $a containing just its 1st, 3rd and 5th positions, and `$a's (range:1, $b)` obtains a subarray of each position up to $b.

However, in the specific situation where you want to use a variable negative position, counting from the end of the array, there isn't a succinct option using that syntax. When gathering each value in array $a between position 1 and $b, where $b is a negative position counting from the end, `(range:1, $b)` doesn't work, and the best you can do without this macro is something like `$a's (range: 1, $b + $a's length)`. So, this macro can be used as a slightly shorter alternative, by writing `(subarray: $a, 1, -$b)`.

#### Details:

As mentioned above, if you provide negative numbers, they will be treated as being offset from the end of the array - `-2` will specify the `2ndlast` item, just as 2 will specify the `2nd` item.

If the last number given is larger than the first (for instance, in `(subarray: (a:1,2,3,4), 4, 2)`) then the macro will still work - in that case returning (a:2,3,4) as if the numbers were in the correct order.

#### See also:

[(substring:)](#macro_substring), [(rotated:)](#macro_rotated)

Added in: 1.0.0

[](#macro_unique)The (unique: ) macro
-------------------------------------

### (unique: _...Any_) → _[Array](#type_array)_

When given a sequence of values, this produces an [array](#type_array) containing each unique value once, in the order that they appeared.

#### Example usage:

*   `(unique: 1,2,1,2,3,5,5,6,3)` produces `(a: 1,2,3,5,6)`
*   `(unique: ...(history: ))` produces an array listing the name of every passage currently visited, in the order they were first visited.
*   `(reversed: ...(unique: ...(reversed: ...(history: ))))` produces an array listing the name of every passage currently visited, in the order they were **last** visited. This does so by reversing the array before spreading it into (unique:), then un-reversing it.
*   `(unique: ...(altered: via its address, ...$emails))` produces an array of every unique address from among the [datamaps](#type_datamap) in $emails, in the same order.

#### Rationale:

Arrays are used to hold values whose ordering matters, such as the sequentially visited passages in the array that [(history:)](#macro_history) produces. Sometimes, though, you want to eliminate duplicate data from the array in order to use it for some purpose. For instance, you may want to show a list (using [(for:)](#macro_for)) of every passage the player has visited, in the order they've visited, but without duplicate entries in the list. While [(dataset:)](#macro_dataset) and the spread `...` syntax can be used to eliminate duplicate entries from an array, such as by `(a:...(ds: ...(history: )))`, this has a small problem: [datasets](#type_dataset) only hold unordered data, and when the dataset is spread using `...`, the values are sorted instead of in their original order. (unique:) provides an easier method of removing duplicates from an a sequence of values.

#### Details:

Two values are considered unique if the `is` operator, when placed between them, would produce `false`. This is the same method of uniqueness used by datasets.

When given no values, this simply returns the empty array `(a:)`. When given values that are all unique, this returns an array of all the values, with no error occurring.

#### See also:

[(dataset:)](#macro_dataset), [(sorted:)](#macro_sorted)

Added in: 3.3.0

[](#macro_unpack)The (unpack: ) macro
-------------------------------------

### (unpack: _...[VariableToValue](#type_variabletovalue)_) → _Instant_

A specialised variation of [(put:)](#macro_put) that lets you extract multiple values from an [array](#type_array), [datamap](#type_datamap) or [string](#type_string), at once, and put them into multiple variables, by placing a matching data structure on the right of `into` containing variables at the positions of those values. For instance, `(unpack: (a: 1, 2, 3) into (a: $x, 2, $y))` sets $x to 1 and $y to 3, and `(unpack: (dm: "B", 3, "A", 1) into (dm: "A", $x, "B", $y))` sets $x to 1 and $y to 3.

#### Example usage:

*   `(unpack: (a:"north","northeast","south") into (a: _mainPath, _sidePath, _backPath))` sets three temp variables, by overwriting each variable in the array on the right with its matching value in the array on the left.
*   `(unpack: $characterStats into (dm: "Maths", _Maths, "Science", _Science))` is the same as `(set: _Maths to $characterStats's Maths, _Science to $characterStats's Science)`.
*   `(unpack: "The Safecracker" into (p:"The ", str-type _job))` extracts the string "Safecracker" from the value, and puts it in the variable \_job.
*   `(unpack: (a: "Daria", 25, 14, 25) into (a: str, ...num-type $stats))` extracts the [numbers](#type_number) from the left side into a new array stored in $stats.

#### Rationale:

Extracting values from data structures into variables using just the [(set:)](#macro_set) and [(put:)](#macro_put) macros can be rather cumbersome, especially if you need to extract values from the same array or datamap. The (unpack:) macro provides a means to efficiently access multiple values in such structures, by describing the locations of those values within the structure - if you want to obtain the first, second, and fourth values in an array and put them into $a, $b and $c, just write `(a: $a, $b, any, $c)`, in exactly those positions, to the right of `into`. The visual clarity of this can provide great assistance in understanding and reminding you of what the data structure is, and the relationship of the destination variables to their source values.

The (unpack:) macro also lets you use string patterns (produced by [(p:)](#macro_p) and other such macros) to unpack strings into multiple components. To obtain all the digit characters at the start of a string, and nothing else, and put them into $a, just write `(p: ...digit-type $a)`. No long-winded [(for:)](#macro_for) loops and individual character checks are needed - simply describe the string using the pattern macros, using typed variables to mark parts to extract, and they can be easily extracted.

#### Details:

Harlowe checks that each value on the right side (henceforth called the "pattern side") has a value that matches it (using the same rules as the `matches` operator) on the left side (the "data side"), and overwrites the pattern side with the data side, causing the variables at various positions in the pattern side to be overwritten with values from the data. (Remember that datamaps' "positions" are determined by their datanames, not their locations in the [(dm:)](#macro_dm) macro that created them, as, unlike arrays, they are not sequential.)

For extracting substrings from strings, use the [(p:)](#macro_p) macro and its related macros to construct a string pattern, resembling array patterns. For instance, `(unpack: "Slime Ball" into (p: (p-either: "Silt", "Mud", "Peat", "Slime")-type _element, " ", (p-either: "Ball", "Blast", "Shot", "Beam")-type _shape))` extracts the words "Slime" and "Ball" from the value, and puts them in the \_element and \_shape temp variables. Note that when this is done, the \_element variable is restricted to `(p-either: "Silt", "Mud", "Peat", "Slime")-type` data, so putting any other kind of string into it will cause an error. Generally, it's recommended to use temp variables for string destructuring, and then, if you need more general variables to hold the extracted substrings, place them in a less restricted variable afterward.

Note that the pattern side's data structure can have any number of nested data structures inside it. `(unpack: (a: (a: 1), 2, (dm: "A", 3)) into (a: (a: $x), 2, (dm: "A", $y)))` also sets $x to 1 and $y to 3. If you need to reach deeply into a data structure (such as one produced by [(passages:)](#macro_passages), [(saved-games:)](#macro_saved-games) or [(open-storylets:)](#macro_open-storylets)) to get a certain set of values, this can come in handy.

You may have noticed that the data structures on the pattern side may have values that aren't variable names, such as the 2 in the preceding example. These can be used as error-checking values - if a matching value isn't present on the right side at that same position, then an error will be reported. To ensure that the data side does indeed contain the values you expect it to, you may include these values in the pattern side. Of course, you may want to simply enforce that a value of a given [datatype](#type_datatype) is in that position, rather a specific value - this can be done by placing a datatype name at that position, like `num` or `str` or `empty`. Consult the datatype article for more information on datatype names.

As you may have also noticed, this syntax is convenient for extracting values from the left side of arrays. But, what if you wish to only select values from the middle, or to skip certain values without putting them in variables? You could use a value or a datamap name at that position, such as by writing `(set: (a: num, $y, $x) to $array)` - though, if you aren't even certain of the data types that could be at those positions, you may find the special `any` data type to be a big help - `(set: (a: any, $y, $x) to $array)` sets $x to the 3rd value in $array and $y to the 2nd value, without needing to worry about what the first value might be.

(When dealing with string patterns, the equivalent of `any` is simply `str`, as strings can't contain non-string data.)

This syntax can be combined with typed variables - simply place the typed variable where a normal variable would be within the pattern side. `(unpack: $array into (a: num, num-type $y, num-type _x))` not only sets $y and \_x, but it also restricts them to number data, all in one statement. If the typed variable is inside an array, and involves a spread datatype (like `...num`) then it is restricted to data that matches `(a: ...num)` (i.e. arrays of zero or more `num` values), and it automatically gathers multiple values from the right-hand-side that match the datatype. `(set: (a: str, ...bool-type $examAnswers) to (a: "ANSWER KEY", true, false, false, true, false))` sets $examAnswers to `(a:true, false, false, true, false)`.

If the destination doesn't contain any variables - for instance, if you write `(unpack: (a:2,3) into (a:3,2))` - then an error will be printed.

For obvious reasons, (unpack:) can't be used with [datasets](#type_dataset) - you'll have to convert them to arrays on the right side.

#### See also:

[(set:)](#macro_set), [(put:)](#macro_put), [(move:)](#macro_move)

Added in: 3.2.0

[](#macro_current-date)The (current-date: ) macro
-------------------------------------------------

### (current-date: ) → _[String](#type_string)_

This date/time macro produces a [string](#type_string) of the current date the current player's system clock, in the format "Thu Jan 01 1970".

#### Example usage:

`Right now, it's (current-date:).`

Added in: 1.0.0

[](#macro_current-time)The (current-time: ) macro
-------------------------------------------------

### (current-time: ) → _[String](#type_string)_

This date/time macro produces a [string](#type_string) of the current 12-hour time on the current player's system clock, in the format "12:00 AM".

#### Example usage:

`The time is (current-time:).`

Added in: 1.0.0

[](#macro_monthday)The (monthday: ) macro
-----------------------------------------

### (monthday: ) → _[Number](#type_number)_

This date/time macro produces a [number](#type_number) corresponding to the day of the month on the current player's system clock. This should be between 1 (on the 1st of the month) and 31, inclusive.

#### Example usage:

`Today is day (monthday:).`

Added in: 1.0.0

[](#macro_weekday)The (weekday: ) macro
---------------------------------------

### (weekday: ) → _[String](#type_string)_

This date/time macro produces one of the [strings](#type_string) "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" or "Saturday", based on the weekday on the current player's system clock.

#### Example usage:

`Today is a (weekday:).`

Added in: 1.0.0

[](#macro_ignore)The (ignore: ) macro
-------------------------------------

### (ignore: _\[...Any\]_) → _[Command](#type_command)_

If you want to test your passage while ignoring a specific [command](#type_command) macro in it, temporarily change that command macro's name to (ignore:), and it will ignore all of the data given to it.

#### Example usage:

`(ignore: ?ghost, (text-style:'outline'))` is an [(enchant:)](#macro_enchant) macro that has been temporarily changed to (ignore:), so that the passage may be tested without the style being applied.

#### Rationale:

If you want to quickly test some aspect of your passage, you may wish to remove one or more of the commands in it, such as [(enchant:)](#macro_enchant) or [(hide:)](#macro_hide). These commands can have a large and cumbersome set of data given to them, and removing and adding them can be bothersome. The (ignore:) macro can be of assistance here: simply change the command's name to "ignore", and it will do nothing, while NOT causing an error regardless of what sort of data is given to it. Then, you can quickly change it back to the original name after testing.

#### Details:

While it will ignore all well-formed data given to it, (ignore:) will NOT suppress errors that are already present in the data. For instance, `(ignore: 4 + "2")` will still cause an error.

This command can have [changers](#type_changer) attached, but will, of course, ignore them.

#### See also:

[(test-true:)](#macro_test-true), [(test-false:)](#macro_test-false)

Added in: 3.2.0

[](#macro_test-true)The (test-true: ) macro
-------------------------------------------

### (test-true: _\[...Any\]_) → _[Changer](#type_changer)_

If you want to test your passage, while ignoring a specific [changer](#type_changer) macro in it, temporarily change that changer macro's name to (test-true:), and it will ignore all of the data given to it, while enabling the hook.

#### Example usage:

*   `(test-true: $eggs is 1)[Only one egg remaining!]` features an [(if:)](#macro_if) macro that has been temporarily changed to (test-true:).

#### Rationale:

While testing your passage, you may wish to examine what would happen if a changer, such as [(if:)](#macro_if) or [(else:)](#macro_else), were to have no effect on its hook. But, removing and adding the macro from your passage code may get tedious and error-prone, especially if you need to disable several such changers at once. Instead, you can simply temporarily change the macro's name to (test-true:), and change it back later. Regardless of what data is given to this macro (colour data for [(bg:)](#macro_bg), [booleans](#type_boolean) for [(if:)](#macro_if), hooks for [(replace:)](#macro_replace)), this macro won't cause an error.

#### Details:

While it will ignore all well-formed data given to it, (test-true:) will NOT suppress errors that are already present in the data. For instance, `(test-true: 5 + "3")[]` will still cause an error.

If (test-true:) and another changer are added together, such as in `(test-true:)+(if:visits is 1)`, then the latter changer will take precedence and override it.

#### See also:

[(ignore:)](#macro_ignore), [(test-false:)](#macro_test-false)

Added in: 3.2.0

[](#macro_test-false)The (test-false: ) macro
---------------------------------------------

### (test-false: _\[...Any\]_) → _[Changer](#type_changer)_

If you want to test your passage in order to see what would happen if an [(if:)](#macro_if), [(unless:)](#macro_unless) or [(else-if:)](#macro_else-if) macro would hide the hook it's attached to, you can temporarily change the name of the macro to (test-false:), which causes it to ignore the data given to it and act as if it was given `false`.

#### Example usage:

*   `(test-false: $eggs is 1)[Only one egg remaining!]` features an [(if:)](#macro_if) macro that has been temporarily changed to (test-false:).

#### Rationale:

This is a counterpart of [(test-true:)](#macro_test-true), designed specifically for testing hooks with [(if:)](#macro_if), [(unless:)](#macro_unless) and [(else-if:)](#macro_else-if) [changers](#type_changer) attached. For most changers, using [(test-true:)](#macro_test-true) is sufficient to temporarily suppress the effect of the changer. However, if you want the hook to remain hidden by default during the test, then using [(test-true:)](#macro_test-true) would still cause the hook to be displayed. While you could temporarily attach [(hidden:)](#macro_hidden) to the hook as well, this can be cumbersome, especially if that would involve adding an additional changer to a long sequence of changers attached to that hook. (test-false:) provides a more convenient alternative.

#### Details:

While it will ignore all well-formed data given to it, (test-false:) will NOT suppress errors that are already present in the data. For instance, `(test-false: 5 + "3")[]` will still cause an error.

If (test-false:) and another changer are added together, such as in `(test-false:)+(if:visits is 1)`, then the latter changer will take precedence and override it.

#### See also:

[(ignore:)](#macro_ignore), [(test-true:)](#macro_test-true)

Added in: 3.2.0

[](#macro_assert)The (assert: ) macro
-------------------------------------

### (assert: _[Boolean](#type_boolean)_) → _Instant_

A debugging macro that produces a helpful error whenever the expression given to it produces Boolean false. Use this when testing your story to help ensure that certain facts about the game state are true or not.

#### Example usage:

`(assert: $isWounded is $isBleeding or $isBandaged)` ensures that if $isWounded is true, one of $isBleeding or $isBandaged MUST be true, and if it's false, both of them MUST be false. Otherwise, an error is produced.

#### Rationale:

Harlowe's debug mode provides panels to check the current game state, the contents of variables, active enchantments, and so forth, providing assistance in identifying bugs. Of course, knowing what variables contain is not the same as knowing whether the relationships between them are being maintained, and a way of encoding these relationships, in your story, can provide an additional layer of security when debugging your game.

(assert:) allows you to _assert_ facts about the game state, facts which absolutely must be true, so much so that an error should be produced. For example, if your story's code assumes that the variable $nails will always be smaller than or equal to $maxNails, and you want to ensure that no bugs are written that cause $nails to be greater, you may write `(assert: $nails is <= $maxNails)`, and place that call in a "debug-header" tagged passage. Thus, should a bug ever appear which causes these variables to no longer maintain their relationship, the (assert:) call will produce an error.

#### Details:

Note that there are other tools within Harlowe to ensure that variables are obeying certain restrictions, which make the need for certain simple (assert:) calls unnecessary. Chief among these features is [TypedVars](#type_typedvar), which can be provided to [(set:)](#macro_set) to permanently and automatically restrict a certain variable to a narrow range of data. Instead of writing `(assert: $petals is an int)`, you can change the earliest [(set:)](#macro_set) call that creates $petals to `(set: int-type $petals to 0)`.

Though this is classed as a "debugging" macro, this works even outside of debug mode.

This can also be useful within custom macros, as a shortened form of combining [(if:)](#macro_if) with [(error:)](#macro_error). However, the error message produced by (assert:) may not be as insightful as the customisable error message given to [(error:)](#macro_error), so it's not especially recommended for use within custom macros that are meant for other authors to use.

#### See also:

[(error:)](#macro_error), [(assert-exists:)](#macro_assert-exists)

Added in: 3.2.0

[](#macro_assert-exists)The (assert-exists: ) macro
---------------------------------------------------

### (assert-exists: _[HookName](#type_hookname) or [String](#type_string)_) → _[Command](#type_command)_

A debugging macro that confirms whether a hook with the given name, or passage text matching the given [string](#type_string), is present in the passage. If not, it will produce a helpful error. Use this to test whether enchantment macros like [(click:)](#macro_click), [(enchant:)](#macro_enchant) or [(show:)](#macro_show) are working properly.

#### Example usage:

*   `(assert-exists: "the auroch")` will produce an error if the text "the auroch" isn't present in the passage.
*   `(assert-exists: ?bottomBar)` will produce an error if a ?bottomBar hook isn't present in the passage.

#### Rationale:

The macros in Harlowe that remotely affect other hooks or text based on their name or contents, such as [(click:)](#macro_click), are designed such that they do not cause an error if no matching hooks or text is found in the passage. This allows them to be thought of as similar to CSS rules for how passage prose is to be rendered - something like `(enchant:?dust, (text-style:'blur'))` states the "rule" that ?dust hooks are to be blurred - rather than as imperative [commands](#type_command) that must be fulfilled there and then. This means that they can be placed in every passage, via "header" or "footer" tagged passages, without errors occurring. But, this flexibility comes at a cost. In the minority of situations where you need to be certain that a macro is affecting a visible in-passage structure, you'll often want to test with this macro, so as to produce an error if those structures do not exist.

#### Details:

This command (and note that [(assert:)](#macro_assert) doesn't produce a command) probes the current passage in which it's located in order to determine whether to produce an error or not. As such, like all commands, it can be saved into a variable, and deployed into passage code using that variable, to save having to retype it in full.

If you provide an empty string to this macro (which obviously can't be found in the passage), it will produce a different kind of error than what would be desired.

#### See also:

[(error:)](#macro_error), [(assert:)](#macro_assert)

Added in: 3.2.0

[](#macro_debug)The (debug: ) macro
-----------------------------------

### (debug: ) → _[Command](#type_command)_

This [command](#type_command), which takes no values, opens the Debug Mode panel if it wasn't open already. This can be used even if the story didn't begin in Debug Mode initially.

#### Example usage:

*   `(link:"DEBUG")[(debug:)]` creates a link that opens the Debug Mode panel.
*   `(after-error: )[(debug:)]` causes Debug Mode to open if any error occurs in the current passage. This is best used in a "header" or "footer" tagged passage.

#### Rationale:

Designed for use in testing, this macro allows you to selectively open the Debug Mode panel at certain parts of the game, after having played through the game normally without its presence. It's designed especially for use with [(after-error:)](#macro_after-error) - combining them as in the example above will allow you to start debugging immediately upon any error occurring.

#### Details:

Note that, to ensure that Harlowe runs at optimal performance, some Debug Mode features will not be immediately available if the panel is opened mid-game. In particular, the "replay" dialogs (available in Debug View) won't be available for macros and variables that have already been rendered prior to the panel opening.

Using this macro will _not_ cause the contents of passages tagged with "debug-header" or "debug-footer" to suddenly be added to the current passage. However, if the Debug Mode panel remains open after changing passages, those will be added to subsequent passages.

#### See also:

[(after-error:)](#macro_after-error)

Added in: 3.3.0

[](#macro_mock-turns)The (mock-turns: ) macro
---------------------------------------------

### (mock-turns: _[Number](#type_number)_) → _[Command](#type_command)_

A macro that can only be used in debug mode, this allows you to artificially increase the [number](#type_number) that the `visits` keyword evaluates to, without having to play through that many turns yourself.

#### Example usage:

*   `(mock-turns: 3)` means that from here on, `turns` (and its alias `turn`) will produce a number 3 higher than the actual number of visits.

#### Rationale:

Using the `turns` keyword as a way to track the amount of "moves" the player has performed instead of using [Boolean](#type_boolean) variables and [(set:)](#macro_set) can produce simpler, more understandable code - it's obvious what `(if: turns > 15)` means just by looking at it. But, it comes with a cost: when testing your story using the "Play from here" feature in the Twine editor, you may want to pretend that you have already performed a certain number of turns, so as to examine the resulting prose. If you were using variables, you could add a few temporary [(set:)](#macro_set) macros to the passage, or put them in a "debug-header" tagged passage, to adjust the variables to match a game in progress. This macro provides that same functionality to the `turns` keyword, letting you temporarily adjust it for testing purposes.

#### Details:

It's critical to understand that these are **mock** turns - no additional passages have actually been visited.

As stated above, this macro will cause an error if it's used outside debug mode. This is NOT intended for use in a final game - while temporarily tweaking the meaning of `turns` is convenient for testing, the author should be able to trust that in the "real" game, they correctly report the turns the player has actually made, so that the story's code can be properly understood.

If this macro is used multiple times, only the final usage will count - all the rest will be forgotten. `(mock-turns:7)(mock-turns:0)`, for instance, will cause `turns` to behave normally.

The effects of (mock-turns:) are saved by [(save-game:)](#macro_save-game), so you can use save files for testing your story with these effects.

If you undo past a passage that used (mock-turns:), the effects of that macro call will be removed, as if it had been a [(set:)](#macro_set) macro call.

Giving negative values, or non-whole numbers to this macro will produce an error.

This [command](#type_command) can't have [changers](#type_changer) attached - attempting to do so will produce an error.

#### See also:

[(history:)](#macro_history), [(set:)](#macro_set), [(mock-visits:)](#macro_mock-visits)

Added in: 3.3.0

[](#macro_mock-visits)The (mock-visits: ) macro
-----------------------------------------------

### (mock-visits: _...[String](#type_string)_) → _[Command](#type_command)_

A macro that can only be used in debug mode, this allows you to mark various passages as "visited", even though the player actually hasn't. This allows you to quickly test passages that use the `visits` keyword, or the `(history:)` [datamap](#type_datamap), without having to play through the whole game from the start.

#### Example usage:

*   `(mock-visits:"Juice Temple", "Milk Temple", "Water Temple")` marks the passages "Juice Temple", "Milk Temple" and "Water Temple" as each having been visited once.
*   `(mock-visits:"Lobby","Lobby","Lobby")` marks the "Lobby" passage as having been visited 3 times.

#### Rationale:

Using the `visits` keyword, or the [(history:)](#macro_history) [array](#type_array), as a way to track the player's progress instead of using [Boolean](#type_boolean) variables and [(set:)](#macro_set) can produce simpler, more understandable code - it's obvious what `(if: visits is > 2)` means just by looking at it. But, it comes with a cost: when testing your story using the "Play from here" feature in the Twine editor, you may want to pretend that you have visited the requisite passages a given [number](#type_number) of times, so as to examine the resulting prose. If you were using variables, you could add a few temporary [(set:)](#macro_set) macros to the passage, or put them in a "debug-header" tagged passage, to adjust the variables to match a game in progress. This macro provides that same functionality to the `visits` keyword and [(history:)](#macro_history) array, letting you temporarily adjust it for testing purposes.

#### Details:

It's critical to understand that these are **mock** visits - the passages listed are not actually visited, and code inside them is not run by this macro.

As stated above, this macro will cause an error if it's used outside debug mode. This is NOT intended for use in a final game - while temporarily tweaking the meaning of `visits` and [(history:)](#macro_history) is convenient for testing, the author should be able to trust that in the "real" game, they correctly report the visits the player has actually made, so that the story's code can be properly understood.

Each occurrence of a passage name given to this macro counts as a single mock visit. Add multiples of the same passage name to register multiple mock visits to that passage.

If this macro is used multiple times, only the final usage will count - all the rest will be forgotten. `(mock-visits:"A")(mock-visits:"B")`, for instance, will only cause the "B" passage to be considered visited 1 time. This allows you to remove mock visits in the middle of a story by writing `(mock-visits:)`.

The effects of (mock-visits:) are saved by [(save-game:)](#macro_save-game) as of version 3.2.3.

If you undo past a passage that used (mock-visits:), the effects of that macro call will be removed, as if it had been a [(set:)](#macro_set) macro call.

This [command](#type_command) can't have [changers](#type_changer) attached - attempting to do so will produce an error.

#### See also:

[(history:)](#macro_history), [(set:)](#macro_set), [(mock-turns:)](#macro_mock-turns)

Added in: 3.2.0

[](#macro_verbatim-source)The (verbatim-source: ) macro
-------------------------------------------------------

### (verbatim-source: _Any_) → _[Command](#type_command)_

Also known as: [(v6m-source:)](#macro_v6m-source)

A convenient combination of [(verbatim-print:)](#macro_verbatim-print) and [(source:)](#macro_source), this prints out the Harlowe source code of any value given to it.

#### Example usage:

`(v6m-source: (open-storylets: )'s 1st)` prints the source of the first [datamap](#type_datamap) in the [array](#type_array) generated by [(open-storylets:)](#macro_open-storylets).

#### Rationale:

This macro provides a quick way for you to display the source code of a Harlowe value. Normally, you can't easily print the [string](#type_string) returned by [(source:)](#macro_source), because, funnily enough, Harlowe will immediately re-render it. You can use this macro instead. This can be helpful when you're debugging a story and wish to have a complicated expression's value constantly in view, especially in a "debug-footer" tagged passage.

#### Details:

For more details about the particulars of the source code generated by [(source:)](#macro_source), see that macro's article. Note that, as with that macro, [commands](#type_command) created by custom macros (via the [(output:)](#macro_output) macro) cannot be converted to source - attempting to do so will produce an error.

#### See also:

[(verbatim-print:)](#macro_verbatim-print), [(source:)](#macro_source)

Added in: 3.2.0

[](#macro_history)The (history: ) macro
---------------------------------------

### (history: _\[[Lambda](#type_lambda)\]_) → _[Array](#type_array)_

This returns an [array](#type_array) containing the [string](#type_string) names of all of the passages the player has previously visited up to now, in the order that the player visited them. An optional [lambda](#type_lambda) can filter the passages, by checking the [(passage:)](#macro_passage) [datamap](#type_datamap) of each. The [(mock-visits:)](#macro_mock-visits) macro can, during debugging, artifically add values to this array to simulate having visited various passages.

#### Example usage:

*   `(history: where "Intermission" is not in its name)` is an array of visited passage names, but not including passages whose name contains "Intermission" anywhere in it.
*   `(history: where its tags contains "Forest")'s length` is the [number](#type_number) of times a passage tagged with "Forest" was visited during this game.
*   `(unique: ...(history: where its tags contains "Forest"))'s length` is the same as the above, but excludes duplicate visits to the same passages.
*   `(if: (history:)'s 3rdlasttolast is (a:"Cliff", "Leap", "Fly"))` checks if the previous 3 passages visited were "Cliff", "Leap" and "Fly".

#### Rationale:

This macro provides easy access to the names of passages visited on past turns. Non-linear stories may result in a lot of possible paths for the player to take, and so, it is often desirable to look back and see which passages the player visited, and when. Often, you may find yourself using "flag" variables to keep track of whether the player has visited a certain passage in the past. In some cases, you can use (history:), along with data structure operators, such as the `contains` operator, to obviate this necessity.

#### Details:

If you simply wish to check that a particular passage, or set of passages, has been visited even once, you may find the [(visited:)](#macro_visited) macro more suited to your needs.

The array includes duplicate names if the player has visited a passage more than once, or visited the same passage two or more turns in a row.

Passages visited via [(redirect:)](#macro_redirect) will be included in this array. Each passage redirected to will appear immediately after the passage that the [(redirect:)](#macro_redirect) macro was called in.

This does _not_ include the name of the current passage the player is visiting.

This macro can optionally be given a `where` lambda, which is used to only include passage names in the returned array if they match the lambda. Note that even though this produces an array of strings, the variable in the lambda (referred to by the `it` keyword or by a temp variable placed before the word `where`) is always a **datamap** - the same datamap as would be returned by [(passage:)](#macro_passage) for that passage name. That datamap contains these values:

Name

Value

source

The source markup of the passage, exactly as you entered it in the Twine editor

name

The string name of this passage.

tags

An array of strings, which are the tags you gave to this passage.

storylet

If a [(storylet:)](#macro_storylet) call is in the passage, this holds the lambda for that call. Otherwise, it's absent.

exclusivity

The storylet exclusivity number. Usually only present if an [(exclusivity:)](#macro_exclusivity) call is in the passage.

urgency

The storylet urgency number. Usually only present if an [(urgency:)](#macro_urgency) call is in the passage.

So, you can think of `(history: where its tags contains "Forest")` as a shorthand for `(find: where (passage: it)'s tags contains "Forest", ...(history:))`, which takes the normal (history:) array, and finds only those names for passages whose tags contain "Forest".

If you're testing your story in debug mode using [(mock-visits:)](#macro_mock-visits), then each of the "mock" visits you simulate using that macro will be added to the front of the returned array (if they match the passed-in lambda). `(mock-visits:"A","B")` will cause `(history:)` to produce an array starting with `"A","B"`, followed by passages the tester has actually visited on this playthrough. It will also cause `(history: where its name contains "A")` to produce an array starting with `"A"`.

By default, Harlowe records an unlimited amount of passage visits. However, you can use the [(forget-visits:)](#macro_forget-visits) macro to make Harlowe "forget" visits that are a certain number of turns old.

#### See also:

[(visited:)](#macro_visited), [(passage:)](#macro_passage), [(mock-visits:)](#macro_mock-visits), [(forget-visits:)](#macro_forget-visits)

Added in: 1.0.0

[](#macro_visited)The (visited: ) macro
---------------------------------------

### (visited: _[String](#type_string) or [Lambda](#type_lambda)_) → _[Boolean](#type_boolean)_

When given a [string](#type_string), this macro produces true if the passage has ever been visited during this game, and false otherwise. When given a "where" [lambda](#type_lambda), this returns true if any passage matching the lambda has ever been visited during this game. The [(mock-visits:)](#macro_mock-visits) macro can, during debugging, make this macro return true in cases where it would otherwise be false.

#### Example usage:

*   `(visited:"Cellar")` is true if the player has visited a passage called "Cellar" at some point.
*   `(visited: where its tags contains "Forest")` is false if the player visited no passages with the "Forest" tag.

#### Rationale:

Often, you may find yourself using "flag" variables simply to keep track of whether the player has visited a certain passage in the past. In most such cases, you can use (visited:) instead of having to use these variables.

#### Details:

If a string name is given, and no passages of that name are in the story, an error will be produced.

Passages visited via [(redirect:)](#macro_redirect) will be considered "visited" by this macro, just as they are considered "visited" by the `visits` keyword.

When given a `where` lambda, the variable in the lambda (referred to by the `it` keyword or by a temp variable placed before the word `where`) is always a **[datamap](#type_datamap)** - the same datamap as would be returned by [(passage:)](#macro_passage) for that passage name. That datamap contains these values:

Name

Value

source

The source markup of the passage, exactly as you entered it in the Twine editor

name

The string name of this passage.

tags

An [array](#type_array) of strings, which are the tags you gave to this passage.

storylet

If a [(storylet:)](#macro_storylet) call is in the passage, this holds the lambda for that call. Otherwise, it's absent.

exclusivity

The storylet exclusivity [number](#type_number). Usually only present if an [(exclusivity:)](#macro_exclusivity) call is in the passage.

urgency

The storylet urgency number. Usually only present if an [(urgency:)](#macro_urgency) call is in the passage.

So, you can think of `(visited: where its tags contains "Forest")` as a shorthand for `(some-pass:where (passage: it)'s tags contains "Forest", ...(history: ))`.

If you're testing your story in debug mode using [(mock-visits:)](#macro_mock-visits), then any "mock" visit you simulate will be counted as a visit.

By default, Harlowe records an unlimited amount of passage visits. However, you can use the [(forget-visits:)](#macro_forget-visits) macro to make Harlowe "forget" visits that are a certain number of turns old. This is the only way to directly alter this macro's output.

#### See also:

[(history:)](#macro_history), [(passage:)](#macro_passage), [(mock-visits:)](#macro_mock-visits), [(forget-visits:)](#macro_forget-visits)

Added in: 3.3.0

[](#macro_passage)The (passage: ) macro
---------------------------------------

### (passage: _\[[String](#type_string)\]_) → _[Datamap](#type_datamap)_

When given a passage [string](#type_string) name, this provides a [datamap](#type_datamap) containing information about that passage. If no name was provided, then it provides information about the current passage.

#### Example usage:

`(passage:"Cellar")`

#### Rationale:

There are times when you wish to examine the data of the story as it is running - for instance, checking what tag a certain passage has, and performing some special behaviour as a result. In particular, checking what data the current passage has can be very useful in a `header` tagged passage, or in a [(display:)](#macro_display)ed passage. This macro, as well as its counterpart [(passages:)](#macro_passages), provides that functionality.

#### Details:

The datamap contains the following names and values.

Name

Value

source

The source markup of the passage, exactly as you entered it in the Twine editor

name

The string name of this passage.

tags

An [array](#type_array) of strings, which are the tags you gave to this passage.

storylet

If a [(storylet:)](#macro_storylet) call is in the passage, this holds the [lambda](#type_lambda) for that call. Otherwise, it's absent.

exclusivity

The storylet exclusivity [number](#type_number). Usually only present if an [(exclusivity:)](#macro_exclusivity) call is in the passage.

urgency

The storylet urgency number. Usually only present if an [(urgency:)](#macro_urgency) call is in the passage.

However, if the passage contained a [(metadata:)](#macro_metadata) macro call, then the data provided to that macro call will be added to that passage's datamap. So, you can have any amount of author-defined data in it as well.

The "source" value, like all strings, can be printed using [(print:)](#macro_print). Be warned that printing the source of the current passage, while inside of it, may lead to an infinite regress.

Interestingly, the construction `(print: (passage: "Cellar")'s source)` is essentially identical in function (albeit longer to write) to `(display: "Cellar")`.

#### See also:

[(history:)](#macro_history), [(passages:)](#macro_passages), [(metadata:)](#macro_metadata)

Added in: 1.1.0

[](#macro_passages)The (passages: ) macro
-----------------------------------------

### (passages: _\[[Lambda](#type_lambda)\]_) → _[Array](#type_array)_

This returns an [array](#type_array) containing [datamaps](#type_datamap) of information for the passages in the story, sorted by passage name, and using the optional search test to only include certain types of passages.

#### Example usage:

`(passages: where its name contains "Fight")` produces an array of datamaps for passages in the story that contain "Fight" in their name.

#### Rationale:

There are times when you wish to examine the data of the story as it is running - for instance, checking which of the story's passages has a certain tag, or a certain word in its source. While you could manually write an array of such passages' data yourself and include them as an array, it is usually easier to use this macro (or the [(passage:)](#macro_passage) macro) to produce such an array automatically.

#### Details:

The datamaps for each passage resemble those returned by [(passage:)](#macro_passage). They initially contain the following names and values.

Name

Value

name

The [string](#type_string) name of the passage.

source

The source markup of the passage, exactly as you entered it in the Twine editor

tags

An array of strings, which are the tags you gave to the passage.

storylet

If a [(storylet:)](#macro_storylet) call is in the passage, this holds the [lambda](#type_lambda) for that call. Otherwise, it's absent.

exclusivity

The storylet exclusivity [number](#type_number). Usually only present if an [(exclusivity:)](#macro_exclusivity) call is in the passage.

urgency

The storylet urgency number. Usually only present if an [(urgency:)](#macro_urgency) call is in the passage.

However, if the passage contained a [(metadata:)](#macro_metadata) macro call, then the data provided to that macro call will be added to that passage's datamap. So, you can have any amount of author-defined data in it as well.

If no passage matches the lambda, then the array will be empty.

If you wish to take the array of passages and reduce them to just their names, the [(altered:)](#macro_altered) macro can be used. For instance, `(altered: via its name, ...(passages:))` produces an array of every passage's name.

#### See also:

[(history:)](#macro_history), [(passage:)](#macro_passage), [(metadata:)](#macro_metadata)

Added in: 3.1.0

[](#macro_forget-visits)The (forget-visits: ) macro
---------------------------------------------------

### (forget-visits: _[Number](#type_number)_) → _[Command](#type_command)_

This macro "forgets" all visits that occurred before the given turn [number](#type_number) - any passage visits that occurred on those turns are treated as if they didn't happen. This causes [(history:)](#macro_history) to no longer list those passages at the start of the [array](#type_array), the `visits` identifier to report a different number for those passages, and (if the only visit to a passage was erased) the [(visited:)](#macro_visited) macro to no longer regard a passage as visited.

#### Example usage:

*   `(forget-visits: -10)` causes all visits more than 10 turns old (that is, the 10thlast turn) to expire.
*   `(forget-visits: -1)` forgets all visits prior to this turn.

#### Rationale:

This macro forms a pair with [(forget-undos:)](#macro_forget-undos). These together allow you to erase two kinds of non-variable data tracked by Harlowe - the undo cache, and the record of passage visits.

The `visits` identifier and the [(history:)](#macro_history) macro are not intended to be "special variables" that the author can permute as they may wish - they have a very specific meaning within Harlowe's language. Using them as they are designed (as permanent records of when the player visited a passage or passages) is highly recommended. This is why this macro only offers limited functionality for erasing visits.

That being said, there are a few edge-case situations when you'd want to use (forget-visits:). If your story consists entirely of "sub-stories" (like an anthology) that individually use `visits`, but which also need to be revisitable/replayable without restarting the whole story with [(restart:)](#macro_restart), then this (along with [(forget-undos:)](#macro_forget-undos)) can be used to erase all of the visits once the player has finished a sub-story, so that (along with resetting its variables using [(set:)](#macro_set)) it can be replayed as it was.

The other situation is when you're writing an "endless" story, one that will be played over an indefinite number of turns, such as a kiosk or an art installation. Because Harlowe is constantly recording visited passages (as part of the [(history:)](#macro_history) macro's functionality) then over many thousands of turns, the ever-increasing memory usage of the story may become detrimental to the browser's performance. Periodically running both [(forget-undos:)](#macro_forget-undos) and (forget-visits:) (in a "header" or "footer" tagged passage, for instance) to erase data from hundreds of turns ago (such as by `(forget-visits:-200)(forget-undos:-200)` will keep the record of visited passages (and the undo cache) from growing beyond a certain point, preventing this situation from occurring.

#### Details:

You currently cannot use this macro to erase "mock visits" created with [(mock-visits:)](#macro_mock-visits).

The effects of (forget-visits:) can be undone by the player using [(link-undo:)](#macro_link-undo), the sidebar undo button, and so forth, so previous turns are unaffected by this [command](#type_command). This also means that the visits still "exist" as long as you can undo past the turn in which (forget-visits:) was used.

If there aren't enough past turns' visits to erase (for instance, when `(forget-visits:4)` is run when only two turns have been taken) then all past visits will be erased.

If 0 is given, no past turns will be erased.

Because of the very specific purposes this macro is designed for, there is _no_ way to forget visits of just a single passage, or after a certain turn, or in other, more specific ways. If you really need to manipulate a passage's recorded visits like this, please use a variable to track "visits" to this passage instead.

#### See also:

[(restart:)](#macro_restart), [(forget-undos:)](#macro_forget-undos)

Added in: 3.3.0

[](#macro_forget-undos)The (forget-undos: ) macro
-------------------------------------------------

### (forget-undos: _[Number](#type_number)_) → _[Command](#type_command)_

This macro, when used, "forgets" previous turns, preventing the player from using undo features (like [(link-undo:)](#macro_link-undo)) to return to them. Providing a positive [number](#type_number) will forget that many turns from the start of the game, and providing a negative number will forget all the turns up to that point from the end.

#### Example usage:

*   `(forget-undos:-2)` forgets all previous turns up to and including the second-last turn.
*   `(forget-undos:-1)` forgets all previous turns.
*   `(forget-undos:1)` forgets the first turn. This could be useful for erasing a "title screen" turn from the game session, which doesn't make sense for the player to "undo".

#### Rationale:

By default, Harlowe allows the player (via the default sidebar) to undo any number of turns, all the way up to the start of the game. This macro makes it easy to limit this ability, either at key moments in the story (such as the starts of chapters or viewpoint switches) or constantly, by placing it in a "header" or "footer" tagged passage.

Note that while it's possible to limit the player's ability to undo by simply removing or replacing the default [(icon-undo:)](#macro_icon-undo) instance from the sidebar (such as, for example, `(replace:?sidebar)[(if:$canUndo)(icon-undo: )]`, and then conditionally changing the $canUndo variable throughout the story), this macro provides a more direct way of limiting undos. In particular, it makes it easy to limit the _distance_ that a player can undo from the current turn.

It is recommended that you be careful in your use of this macro. In most cases, limiting the player's ability to undo actions isn't a particularly interesting or clever game design restriction. However, there are certain genres of game, such as survival horror games or experiential dream simulators, where suddenly limiting the ability to undo at periodic intervals can have a desirable disempowering effect.

There is one other situation where (forget-undos:) may be of use: when you're writing an "endless" story, one that will be played over an indefinite number of turns, such as a kiosk or an art installation. Because Harlowe constantly maintains an undo cache, then over many thousands of turns, the ever-increasing memory usage of the story may become detrimental to the browser's performance. Periodically using (forget-undos:) and [(forget-visits:)](#macro_forget-visits) (in a "header" or "footer" tagged passage, for instance) to erase data from hundreds of turns ago (such as by `(forget-visits:-200)(forget-undos:-200)` will keep the undo cache (and the record of visited passages) from growing beyond a certain point, preventing this situation from occurring.

#### Details:

This macro does nothing if it is run in a passage that has been returned to by "undo" (i.e. where there is one or more turns one could "redo" using [(icon-redo:)](#macro_icon-redo)). It only functions in the "present".

If there aren't enough past turns to forget (for instance, when `(forget-undos:4)` is run when only two turns have been taken) then all past turns will be forgotten.

There is no way to "un-erase" the forgotten turns when this macro is used. Its effects are permanent.

Use of this macro will _not_ affect the [(history:)](#macro_history) macro, the [(visited:)](#macro_visited) macro, or the `visits` and `turns` keywords (nor the debug-only [(mock-visits:)](#macro_mock-visits) and [(mock-turns:)](#macro_mock-turns) macros). These will continue to perform as if (forget-undos:) was never called. However, the turns that they refer to (in which the "visits" occurred) will no longer be accessible to the player. If you wish to affect the [(history:)](#macro_history) macro and the like, consider using [(forget-visits:)](#macro_forget-visits).

This macro will internally "flatten" every forgotten turn into a single data structure, which is used to ensure that [(history:)](#macro_history) and [(visited:)](#macro_visited) and other such features continue to behave as expected. As a result, using this macro will reduce the size of the data saved to browser localStorage by [(save-game:)](#macro_save-game). However, you should _not_ use this macro solely on the hunch that it provides performance benefits for your story - such benefits only come to stories that take place over a very large number of turns, and who store a large amount of data in global variables (such as expansive [datamaps](#type_datamap) and [arrays](#type_array) that are changed frequently).

If 0 is given, no past turns will be forgotten.

#### See also:

[(restart:)](#macro_restart), [(forget-visits:)](#macro_forget-visits)

Added in: 3.3.0

[](#macro_metadata)The (metadata: ) macro
-----------------------------------------

### (metadata: _\[...Any\]_) → _Metadata_

When placed in a passage, this adds the given names and values to the [(passage:)](#macro_passage) [datamap](#type_datamap) for this passage.

#### Example usage:

*   `(metadata: "danger", 4, "hint", "Dragon teeth are fire-hardened.")` in a passage named "Dragon dentistry" causes `(passage:"Dragon dentistry")'s danger` to be 4, and `(passage:"Dragon dentistry")'s hint` to equal the given [string](#type_string).
*   `(metadata: "rarity", 5)` in a passage called "Adamantium" causes `(passage: "Adamantium")'s rarity` to be 5. You can then use `(find: where its rarity >= (random: 1, 10), ...(passages: where it contains "rarity"))` to get a list of passages that may randomly exclude the "Adamantium" passage.

#### Rationale:

While the [(passage:)](#macro_passage) and [(passages:)](#macro_passages) datamaps can provide the tags, name and source code of your story's passages by default, there are many cases when you need more specific data than just strings, such as a [number](#type_number) or a [changer](#type_changer). An example is when making links for passages that have been chosen non-deterministically, such as by [(open-storylets:)](#macro_open-storylets) - you may want the link to be accompanied with a short description fitting the passage, or you may want each passage to have a random chance of not appearing at all. Moreover, you want to be able to write this information inside the passage itself, as you write it, just as tags are written on the passage as you write it.

The (metadata:) macro provides this functionality - it augments the [(passage:)](#macro_passage) datamap for the current passage, adding extra data of your choosing to it, as if by adding a [(dm:)](#macro_dm) to it at startup.

#### Details:

The data names and values are provided to (metadata:) as if it was a [(dm:)](#macro_dm) macro call – first the string names, then the values, in alternation.

Being a metadata macro, a (metadata:) macro call must appear in the passage _before_ every other non-metadata macro in the passage, such as [(set:)](#macro_set) and [(if:)](#macro_if). (This doesn't include macros inside a "header" or "footer" tagged passage.) The recommended place to put it is at the top of the passage.

Every passage's (metadata:) macro is run just once, at startup. If an error occurs while doing so (for instance, if a value is given without a matching name) then a dialog box will appear at startup, displaying the error.

Since passages already have "source", "name" and "tags" data names in their datamap, trying to use these names in a (metadata:) macro will produce an error.

Putting this in a "header", "startup" or "footer" tagged passage will NOT cause this metadata to be applied to every passage, much as how adding extra tags to a "header", "startup" or "footer" tagged passage will not cause those tags to apply to every passage.

#### See also:

[(passage:)](#macro_passage), [(passages:)](#macro_passages), [(storylet:)](#macro_storylet)

Added in: 3.2.0

[](#macro_seed)The (seed: ) macro
---------------------------------

### (seed: _[String](#type_string)_) → _[Command](#type_command)_

A [command](#type_command) that "fixes" Harlowe's random [number](#type_number) generator, causing all random macros and features to output predetermined values based on the given "seed" [string](#type_string).

#### Example usage:

`(seed:"aeiouy")(random:1,10) (random:1,10) (random:1,10)` will print `3 2 6`.

#### Rationale:

One of the appeals of randomness in games is its unpredictability, but one of the detriments of it is its irreplicability. Once a series of random values has been rolled, it's usually not possible to replicate that streak of luck. This can be bothersome if, for instance, you want to give an unpredictable challenge to players, but don't want any one player to arbitrarily get an easier or harder challenge than another.

This macro gives you the ability to control the randomness of your story. Harlowe (like most computer games) uses a "pseudo" random number generator (pseudo RNG, or PRNG) to make random choices. (It is "pseudo" because truly random numbers cannot be generated by a computer, and can only be found by sampling external physical phenomena.)

Think of the PRNG as a "vine" of numbers, that "grow" from a single "seed" (a special modifier value). Each random feature in your story (like a single [(either:)](#macro_either) call) takes a number from the sequence and uses it to make a choice (like picking one of the [(either:)](#macro_either) values). So, as long as the seed is the same, the same values will be "grown", and if the player encounters random features in the same order, the same values will be taken.

You may want to use (seed:) for these purposes:

*   Seed it based on a player name (inputted via [(input-box:)](#macro_input-box) or [(prompt:)](#macro_prompt)) to assign a unique challenge to each player that can
*   Seed it based on the current date (using [(current-date:)](#macro_current-date)) to produce a "daily challenge" that will be the same for all players (provided their system clock is set to the current date).

#### Details:

The oft-mentioned "random features" are the [(random:)](#macro_random), [(either:)](#macro_either) and [(shuffled:)](#macro_shuffled) macros, as well as the `random` data names (invoked using `'s random` or `random of`).

Even though I've called the seed a "special modifier value", this macro actually takes a string. This is so that the aforementioned uses (such as using [(current-date:)](#macro_current-date)) are simple, and also so that you may provide (seed:) with easy-to-remember words like "apple", if you so wish. The string is internally converted to a number using a complicated procedure that ensures similar strings (like "app" and "appl") still grow very different sequences of random numbers. So, don't be concerned with using too-similar strings as seed values.

Harlowe's random number generator is initially, automatically seeded based on the timestamp at which the game begins so you do _not_ need to call this at all to get unpredictable randomness that isn't replicated across playthroughs. You should use this _only_ to control your story's randomness, not create it. [(restart:)](#macro_restart) will reset the seed using this method.

The current seed (and the number of values currently taken) is saved when you use [(save-game:)](#macro_save-game), so loading a saved game will continue to use the same sequence of random values that were in use when the game was saved.

(seed:) is best used at the very beginning of the story, or at least before the first random feature is used. Using it in the middle of the story will cause the randomness to use a different seed, and should generally only be used when you wish the player to replay a section of the story with different random values.

Giving the same string to (seed:) will reset the number of values taken. So, if `(seed:"A")` followed by five `(random:1,10)` calls produced 4,2,8,4 and 9 in that order, then calling `(seed:"A")` again will cause the next five `(random:1,10)` calls to produce 4,2,8,4 and 9 in that order.

Using (seed:) multiple times will not affect the "randomness" of the numbers produced - they will be similarly "random" and unpredictable.

For reference, Harlowe's random number generator is [mulberry32](https://gist.github.com/tommyettinger/46a874533244883189143505d203312c) by Tommy Ettinger, and the seed is hashed with [MurmurHash3](https://en.wikipedia.org/wiki/MurmurHash) by Austin Appleby. It is not expected that Harlowe stories will use random elements at a frequency expected of action games (which use RNG up to hundreds of times per frame), and therefore a 32-bit algorithm should be sufficient.

#### See also:

[(random:)](#macro_random), [(either:)](#macro_either), [(shuffled:)](#macro_shuffled)

Added in: 3.3.0

[](#macro_cycling-link)The (cycling-link: ) macro
-------------------------------------------------

### (cycling-link: _\[[Bind](#type_bind)\], ...[String](#type_string)_) → _[Command](#type_command)_

A [command](#type_command) that, when evaluated, creates a cycling link - a link which does not go anywhere, but changes its own text to the next in a looping sequence of [strings](#type_string), and sets the optional bound variable to match the string value of the text.

#### Example usage:

*   `(cycling-link: bind $head's hair, "Black", "Brown", "Blonde", "Red", "White")` [binds](#type_bind) the "hair" value in the $head [datamap](#type_datamap) to the current link text.
*   `(cycling-link: "Mew", "Miao", "Mrr", "Mlem")` has no bound variable.
*   `(cycling-link: 2bind $pressure, "Low", "Medium", "High")` has a two-way bound variable. Whenever $pressure is either "Low", "Medium", or "High", the link will change its text automatically to match.

#### Rationale:

The cycling link is an interaction idiom popularised in Twine 1 which combines the utility of a dial input element with the discovery and visual consistency of a link: the player can typically only discover that this is a cycling link by clicking it, and can then discover the full set of labels by clicking through them. This allows a variety of subtle dramatic and humourous possibilities, and moreover allows the link to sit comfortably among passage prose without standing out as an interface element.

The addition of a variable bound to the link, changing to match whichever text the player finally dialed the link to, allows cycling links to affect subsequent passages, and thus for the link to be just as meaningful in affecting the story's course as any other, even though no hooks and [(set:)](#macro_set)s can be attached to them.

#### Details:

This macro accepts two-way binds using the `2bind` syntax. These will cause the link to rotate its values to match the current value of the bound variable, if it can - if $pressure is "Medium" when entering the passage with `(cycling-link: 2bind $pressure, "Low", "Medium", "High")`, then it will rotate "Medium" to the front, as if the link had already been clicked once. Also, it will automatically update itself whenever any other macro changes the bound variable. However, if the variable no longer matches any of the link's strings, then it won't update - for instance, if the variable becomes "It's Gonna Blow", then a cycling link with the strings "Low", "Medium" and "High" won't update.

If one of the strings is empty, such as `(cycling-link: "Two eggs", "One egg", "")`, then upon reaching the empty string, the link will disappear permanently. If the _first_ string is empty, an error will be produced (because then the link can never appear at all).

If attempting to render one string produces an error, such as `(cycling-link: "Goose", "(print: 2 + 'foo')")`, then the error will only appear once the link cycles to that string.

The bound variable will be set to the first value as soon as the cycling link is displayed - so, even if the player doesn't interact with the link at all, the variable will still have the intended value.

If the bound variable has already been given a type restriction (such as by `(set:num-type $candy to 1)`), then, if that type isn't `string` or `str`, an error will result.

If you use [(replace:)](#macro_replace) to alter the text inside a (cycling-link:), such as `(cycling-link: bind $tattoo, "Star", "Feather")(replace:"Star")[Claw]`, then the link's text will be changed, but the value assigned to the bound variable will _not_ - $tattoo will still be "Star", and clicking the link twice will return the link's text to "Star". This differs from [(dropdown:)](#macro_dropdown)'s behaviour in this situation.

If only one string was given to this macro, an error will be produced.

Added in: 3.0.0

[](#macro_seq-link)The (seq-link: ) macro
-----------------------------------------

### (seq-link: _\[[Bind](#type_bind)\], ...[String](#type_string)_) → _[Command](#type_command)_

Also known as: [(sequence-link:)](#macro_sequence-link)

A [command](#type_command) that creates a link that does not go anywhere, but changes its own text to the next in a sequence of [strings](#type_string), becoming plain text once the final string is reached, and setting the optional bound variable to match the text at all times.

#### Example usage:

*   `(seq-link: bind $candy, "Two candies", "One candy", "Some wrappers")` sets the $candy variable to always equal the currently displayed string. "Some wrappers", the final string, becomes plain text instead of a link.
*   `(seq-link: "We nodded,", "turned,", "and departed, not a word spoken")` has no bound variable.

#### Rationale:

This is a variation of the [(cycling-link:)](#macro_cycling-link) command macro that does not cycle - for more information about that macro, see its corresponding article. This is a simpler macro, being simply a link that changes when clicked without looping, albeit less useful as a means of obtaining the player's input.

While it's possible to produce this effect by simply using [(link:)](#macro_link) and nesting it, such as by `(link:"We nodded,")[(link:"turned,")[and departed, not a word spoken]]`, this macro is much more convenient to write when you wish to use a large amount of link labels. Additionally, this macro allows a bound variable to keep track of which string the player viewed last, as with [(cycling-link:)](#macro_cycling-link), which would be slightly more complicated to track using [(link:)](#macro_link) and [(set:)](#macro_set).

#### Details:

If one of the strings is empty, such as `(seq-link: "Two eggs", "One egg", "")`, then upon reaching the empty string, the link will disappear permanently. If the _first_ string is empty, an error will be produced (because then the link can never appear at all).

If attempting to render one string produces an error, such as `(seq-link: "Goose", "(print: 2 + 'foo')")`, then the error will only appear once the link cycles to that string.

The bound variable will be set to the first value as soon as the sequence link is displayed - so, even if the player doesn't interact with the link at all, the variable will still have the intended value.

If the bound variable has already been given a type restriction (such as by `(set:num-type $candy to 1)`), then, if that type isn't `string` or `str`, an error will result.

If you use [(replace:)](#macro_replace) to alter the text inside a (seq-link:), such as `(seq-link: bind $candy, "Two candies", "One candy", "Some wrappers")(replace:"Two")[Five]`, then the link's text will be changed, but the value assigned to the bound variable will _not_ - $candy will still be "Two candies" until the link is clicked.

If only one string was given to this macro, an error will be produced.

Added in: 3.2.0

[](#macro_input)The (input: ) macro
-----------------------------------

### (input: _\[[Bind](#type_bind)\], \[[String](#type_string)\], \[String\]_) → _[Command](#type_command)_

A [command](#type_command) macro that creates a single-line text input element, allowing the player to input any amount of text without newlines, which can optionally be automatically stored in a variable. The first [string](#type_string) specifies the horizontal position and width, and the second string specifies an initial default value to fill the element with.

#### Example usage:

*   `(input: "Cheese Honey Sandwich")` produces an element that initially contains "Cheese Honey Sandwich", and which is 100% of the available width. Altering the contained text does nothing.
*   `(input: bind _name, "=X=", "Calder Faust")` produces an element that initially contains "Calder Faust", and which is 33% of the available width. Altering it automatically updates the \_name temp variable.
*   `(input: bind _spell)` produces an element which is 100% of the available width, and with no initial default text inside it. Altering it automatically updates the \_spell temp variable.

#### Rationale:

While there are other means of accepting player text input into the story, such as the [(prompt:)](#macro_prompt) macro, you may desire an input region that is integrated more naturally into the passage's visual design, and which allows a greater quantity of text to be inputted. This macro offers that functionality, and provides an easy means for that inputted text to be stored in a variable.

#### Details:

This macro has no mandatory values - `(input:)` by itself will produce a text input element with no bound variable, no placeholder and no default value.

The optional sizing string is the same kind of line given to [(box:)](#macro_box) - a sequence of zero or more `=` signs, then a sequence of characters (preferably "X"), then zero or more `=` signs. Think of this string as a visual depiction of the element's horizontal proportions - the `=` signs are the space to the left and right, and the characters in the middle are the element itself. Also, to avoid ambiguity with the second string given to this macro, a string representing 100% width (no margins) must be a single character, such as just "X". If you need the initial contents of the element to be a single character, provide an "X" sizing string before it, so that it's clear which is which.

The produced element always occupies an entire line of the containing area, as with [(box:)](#macro_box) and [(button:)](#macro_button). If you wish to place it alongside other text, consider using it inside the column markup.

This macro accepts two-way [binds](#type_bind) using the `2bind` syntax. These will cause the element's contents to always match the current value of the bound variable, and automatically update itself whenever any other macro changes it. However, if the variable no longer contains a string, then it won't update - for instance, if the variable becomes the [number](#type_number) 23, the element won't update.

If the bound variable isn't two-way, the variable will be set to the element's contents as soon as it is displayed - so, it will become the optional initial text string, or, if it wasn't given, an empty string.

If the bound variable has already been given a type restriction (such as by `(set:num-type $candy to 1)`), then, if that type isn't `string` or `str`, an error will result.

The optional initial text string given to this macro will _not_ be parsed as markup, but inserted into the element verbatim - so, giving `"''CURRENT SAVINGS'': $lifeSavings"` will not cause the $lifeSavings variable's contents to be printed into the element, nor will "CURRENT SAVINGS" be in boldface.

A note about player-submitted strings: because most string-printing functionality in Harlowe (the [(print:)](#macro_print) macro, and putting variable names in bare passage prose) will attempt to render markup inside the strings, a player may cause disaster for your story by placing Harlowe markup inside an (input:) bound variable, which, when displayed, produces either an error or some effect that undermines the story. In order to display those strings safely, you may use either the verbatim markup, the [(verbatim:)](#macro_verbatim) [changer](#type_changer), or [(verbatim-print:)](#macro_verbatim-print).

As of 3.3.2, Harlowe will attempt to auto-focus input elements when they are added to the passage, allowing the player to type into them immediately. If multiple input elements are present, the first (highest) one will be auto-focused. Note that any further input elements added to the passage (via [(after:)](#macro_after) or some other means) will be auto-focused even if the player is currently typing into an existing element.

#### See also:

[(input-box:)](#macro_input-box), [(force-input:)](#macro_force-input), [(prompt:)](#macro_prompt)

Added in: 3.3.0

[](#macro_force-input)The (force-input: ) macro
-----------------------------------------------

### (force-input: _\[[Bind](#type_bind)\], \[[String](#type_string)\], String_) → _[Command](#type_command)_

A [command](#type_command) macro that creates a single-line text input element which appears to offer the player a means to input text, but instead replaces every keypress inside it with characters from a pre-set [string](#type_string) that's relevant to the story.

#### Example usage:

*   `(force-input: bind _cmd, "ERASE INTERNET")` creates an input element which forces the player to type the string "ERASE INTERNET", and [binds](#type_bind) the current contents of the element to the \_cmd temp variable. If the player types four characters into it, \_cmd will be the string "ERAS".

#### Rationale:

There are times when, for narrative reasons, you want the player, in the role of a character, to type text into a diegetic textbox, or make a seemingly "spontaneous" dialogue reply, but are unable to actually permit the player to type anything they want, as the story you're telling calls for specific dialogue or text at this point. While you could simply offer a "pretend" textbox using the [(box:)](#macro_box) macro, that can't actually be typed into, this macro offers an interesting and unexpected alternative: a text element that tricks the player into thinking they can type anything, only to change the text to fit your narrative letter-by-letter as they type it.

This interface element has very potent and unsettling symbolism - the player suddenly being unable to trust their own keyboard to relay their words gives a strong feeling of unreality and loss of control, and as such, it is advised that, unless you wish to leverage that symbolism for horror purposes, you should perhaps prepare the player for this element's eccentricity with some accompanying text. Besides that, giving the player the tactile sense of typing words can help them occupy the role of their viewpoint character in situations where it's called for, such as a story revolving around text messaging or chat clients.

#### Details:

Unlike [(input:)](#macro_input), the final string is mandatory, as it holds the text that the input element will contain as the player "types" it in.

The optional sizing string is the same kind of line given to [(box:)](#macro_box) - a sequence of zero or more `=` signs, then a sequence of characters (preferably "X"), then zero or more `=` signs. Think of this string as a visual depiction of the box's horizontal proportions - the `=` signs are the space to the left and right, and the characters in the middle are the box itself. Also, to avoid ambiguity with the second string given to this macro, a string representing 100% width (no margins) must be a single character, such as just "X". If you need the initial contents of the element to be a single character, provide an "X" sizing string before it, so that it's clear which is which.

The produced element always occupies an entire line of the containing area, as with [(box:)](#macro_box) and [(button:)](#macro_button). If you wish to place it alongside other text, consider using it inside the column markup.

Because you already know what the text in the element will become, you may feel there's no need to have a bound variable. However, you might wish to bind a temporary variable, and then check using a live macro when that variable has become filled with the full string, thus indicating that the player has read it. Otherwise, there is no mechanism to ensure that the player actually type out the entire string.

If the bound variable is two-way, and it contains a string, then, when the input box appears, a [number](#type_number) of fixed text characters equal to the string's length will be inserted into the input element automatically, and then the variable will update to match. Otherwise, if the bound variable is one-way, the variable will simply become an empty string (and then be updated to match the element's contents whenever the player "types" into it).

As of 3.3.2, Harlowe will attempt to auto-focus input elements when they are added to the passage, allowing the player to type into them immediately. If multiple input elements are present, the first (highest) one will be auto-focused. Note that any further input elements added to the passage (via [(after:)](#macro_after) or some other means) will be auto-focused even if the player is currently typing into an existing element.

#### See also:

[(input:)](#macro_input), [(force-input-box:)](#macro_force-input-box), [(prompt:)](#macro_prompt)

Added in: 3.3.0

[](#macro_input-box)The (input-box: ) macro
-------------------------------------------

### (input-box: _\[[Bind](#type_bind)\], \[[String](#type_string)\], \[[Number](#type_number)\], \[String\]_) → _[Command](#type_command)_

A [command](#type_command) macro that creates a multi-line text input box of the given position, width (specified by the first, optional [string](#type_string)) and height (specified by the optional [number](#type_number)), allowing the player to input any amount of text, which can optionally be automatically stored in a variable. The final optional string specifies an initial default value to fill the box with.

#### Example usage:

*   `(input-box: "=X=")` creates an input box that's 33% of the passage width, centered, and 3 lines tall.
*   `(input-box: "XXX=", 5)` creates an input box that's 75% of the passage width, positioned left, and 5 lines tall.
*   `(input-box: bind $code, "XXX=", 5)` creates an input box that's the same as above, but whenever it's edited, the text is stored in the $code variable.
*   `(input-box: bind $code, "XXX=", 5, "10 PRINT 'HELLO'")` creates an input box that's the same as above, but initially contains the text `"10 PRINT 'HELLO'"`.

#### Rationale:

This macro forms a pair with [(input:)](#macro_input). This is a variation of that macro which allows multi-line text to be inputted. While the former macro is best used for obtaining short, informative strings from the player, this macro can be used to obtain entire sentences or paragraphs, which may be desirable if the story is themed around writing.

#### Details:

The optional sizing string is the same kind of line given to [(box:)](#macro_box) - a sequence of zero or more `=` signs, then a sequence of characters (preferably "X"), then zero or more `=` signs. Think of this string as a visual depiction of the box's horizontal proportions - the `=` signs are the space to the left and right, and the characters in the middle are the box itself. Also, to avoid ambiguity with the second string given to this macro, a string representing 100% width (no margins) must be a single character, such as just "X". If you need the initial contents of the element to be a single character, provide an "X" sizing string before it, so that it's clear which is which.

The produced element always occupies an entire line of the containing area, as with [(box:)](#macro_box) and [(button:)](#macro_button). If you wish to place it alongside other text, consider using it inside the column markup.

The optional number, which must come directly after the sizing line, is a height, in text lines. If this is absent, the box will be sized to 3 lines. Harlowe's default CSS applies `resize:none` to the box, preventing it (in most browsers) from being resizable by the player.

This macro accepts two-way [binds](#type_bind) using the `2bind` syntax. These will cause the box's contents to always match the current value of the bound variable, and automatically update itself whenever any other macro changes it. However, if the variable no longer contains a string, then it won't update - for instance, if the variable becomes the number 23, the box won't update.

If the bound variable isn't two-way, the variable will be set to the box's contents as soon as it is displayed - so, it will become the optional initial text string, or, if it wasn't given, an empty string.

If the bound variable has already been given a type restriction (such as by `(set:num-type $candy to 1)`), then, if that type isn't `string` or `str`, an error will result.

The optional initial text string given to this macro will _not_ be parsed as markup, but inserted into the box verbatim - so, giving `"''CURRENT SAVINGS'': $lifeSavings"` will not cause the $lifeSavings variable's contents to be printed into the box, nor will "CURRENT SAVINGS" be in boldface.

A note about player-submitted strings: because most string-printing functionality in Harlowe (the [(print:)](#macro_print) macro, and putting variable names in bare passage prose) will attempt to render markup inside the strings, a player may cause disaster for your story by placing Harlowe markup inside an (input-box:) bound variable, which, when displayed, produces either an error or some effect that undermines the story. In order to display those strings safely, you may use either the verbatim markup, the [(verbatim:)](#macro_verbatim) [changer](#type_changer), or [(verbatim-print:)](#macro_verbatim-print).

As of 3.3.2, Harlowe will attempt to auto-focus input elements when they are added to the passage, allowing the player to type into them immediately. If multiple input elements are present, the first (highest) one will be auto-focused. Note that any further input elements added to the passage (via [(after:)](#macro_after) or some other means) will be auto-focused even if the player is currently typing into an existing element.

#### See also:

[(force-input-box:)](#macro_force-input-box), [(input:)](#macro_input), [(prompt:)](#macro_prompt)

Added in: 3.2.0

[](#macro_force-input-box)The (force-input-box: ) macro
-------------------------------------------------------

### (force-input-box: _\[[Bind](#type_bind)\], \[[String](#type_string)\], \[[Number](#type_number)\], String_) → _[Command](#type_command)_

A [command](#type_command) macro that creates an empty text input box of the given position, width (specified by the first, optional [string](#type_string)) and height (specified by the optional [number](#type_number)), which appears to offer the player a means to input text, but instead replaces every keypress inside it with characters from a pre-set string that's relevant to the story.

#### Example usage:

*   `(force-input-box: "XX=", "I'm sorry, father. I've failed you.")` creates an input box that's 33% of the passage width, centered, and which forces the player to type the string "I'm sorry, father. I've failed you.".

#### Rationale:

this macro forms a pair with [(force-input:)](#macro_force-input). For a full elaboration on the purposes of a 'forced' input element as an interactive storytelling device, see the article for [(force-input:)](#macro_force-input). This serves to provide a multi-line textbox, compared to the former's single-line element, allowing longer runs of text to appear in it.

#### Details:

Unlike [(input-box:)](#macro_input-box), the final string is mandatory, as it holds the text that the input box will contain as the player "types" it in.

The first string you give to this macro is a "sizing line" identical to that accepted by [(box:)](#macro_box) and [(input-box:)](#macro_input-box) - consult their documentation for more information about those lines.

The optional number, which must come directly after the sizing line, is a height, in text lines. If this is absent, the box will be sized to 3 lines. Harlowe's default CSS applies `resize:none` to the box, preventing it (in most browsers) from being resizable by the player.

Because you already know what the text in the box will become, you may feel there's no need to have a bound variable. However, you might wish to bind a temporary variable, and then check using a live macro when that variable has become filled with the full string, thus indicating that the player has read it. Otherwise, there is no mechanism to ensure that the player actually type out the entire string.

If the bound variable is two-way, and it contains a string, then, when the input box appears, a number of fixed text characters equal to the string's length will be inserted into the input box automatically, and then the variable will update to match. Otherwise, if the bound variable is one-way, the variable will simply become an empty string (and then be updated to match the box's contents whenever the player "types" into it).

As of 3.3.2, Harlowe will attempt to auto-focus input elements when they are added to the passage, allowing the player to type into them immediately. If multiple input elements are present, the first (highest) one will be auto-focused. Note that any further input elements added to the passage (via [(after:)](#macro_after) or some other means) will be auto-focused even if the player is currently typing into an existing element.

#### See also:

[(input-box:)](#macro_input-box), [(force-input:)](#macro_force-input), [(prompt:)](#macro_prompt)

Added in: 3.2.0

[](#macro_checkbox)The (checkbox: ) macro
-----------------------------------------

### (checkbox: _[Bind](#type_bind), [String](#type_string)_) → _[Command](#type_command)_

A [command](#type_command) that creates a checkbox input, which sets the given bound variable to `true` or `false`, depending on its state.

#### Example usage:

*   `(checkbox: bind $gore, "Show violent scenes")` creates a checkbox labeled "Show violent scenes" which is initially unchecked.
*   `(checkbox: 2bind $perma, "Permadeath")` creates a checkbox which is initially checked if $perma is `true`, and continues to update itself whenever some other macros change $perma.

#### Rationale:

This command uses the common web page checkbox input to let you ask the player for their preference on an auxiliary or metatextual feature or decision. Unlike the [(confirm:)](#macro_confirm) command, this doesn't directly ask the player a yes/no question, but simply presents a phrase or option that they can opt into or out of. Thus, it is useful for offering choices that aren't directly "in-character" or diegetic in the narrative - though, you could still use it for that purpose if the clinical nature of a checkbox was especially fitting for the setting.

#### Details:

This macro accepts two-way [binds](#type_bind) using the `2bind` syntax. These will cause the checkbox's contents to always match the current value of the bound variable, and automatically update itself whenever any other macro changes it. However, if the variable no longer contains a [boolean](#type_boolean), then it won't update - for instance, if the variable becomes the [number](#type_number) 23, the checkbox won't update.

If the bound variable isn't two-way, the checkbox will be unchecked when it appears, and the variable will be set to `false` as soon as it is displayed.

If the bound variable has already been given a type restriction (such as by `(set:num-type $candy to 1)`), then, if that type isn't `string` or `str`, an error will result.

If the label [string](#type_string) is empty, an error will result.

#### See also:

[(dropdown:)](#macro_dropdown), [(input-box:)](#macro_input-box), [(confirm:)](#macro_confirm)

Added in: 3.2.0

[](#macro_checkbox-fullscreen)The (checkbox-fullscreen: ) macro
---------------------------------------------------------------

### (checkbox-fullscreen: _[String](#type_string)_) → _[Command](#type_command)_

A [command](#type_command) that creates a checkbox input, which toggles the browser's fullscreen mode and windowed mode. The checkbox will automatically update to match the browser's fullscreen status. If fullscreen mode cannot be entered, the checkbox will be disabled.

#### Example usage:

`(checkbox-fullscreen: "Fullscreen mode")`

#### Rationale:

Modern browsers allow web pages to take up the entire screen of the user, in a manner similar to desktop games. This feature can be useful for immersive or moody stories, such as horror stories, that wish to immerse the player's senses in a certain [colour](#type_colour) or shade, or to display impactful text that doesn't have to compete for attention from any other screen elements. While it can be more convenient to place an [(icon-fullscreen:)](#macro_icon-fullscreen) in your story's sidebar, this macro can be useful if you remove or replace the sidebar with something else, and can serve as an alternative means of activating fullscreen mode.

#### Details:

When activated, this will make the page's `<html>` element be the fullscreen element, _not_ `<tw-story>`. This is because, in most browsers, removing the fullscreen element from the page, however briefly, will deactivate fullscreen mode. Since the `(enchant:)` macro, when given ?Page, will often need to wrap `<tw-story>` in another element, those macro calls will deactivate fullscreen mode if `<tw-story>` was the fullscreen element. So, if you have edited the compiled HTML to add elements before and after it, such as a navigation bar, that will remain visible while the story is in fullscreen mode. Additionally, this means that the Debug Mode panel is still visible when fullscreen mode is activated.

Currently, there is no special functionality or error reporting when the browser reports that fullscreen mode is available, but the attempt to switch to fullscreen mode fails. In that case, the checkbox will simply appear to do nothing.

#### See also:

[(checkbox:)](#macro_checkbox), [(link-fullscreen:)](#macro_link-fullscreen), [(icon-fullscreen:)](#macro_icon-fullscreen)

Added in: 3.2.0.

[](#macro_dropdown)The (dropdown: ) macro
-----------------------------------------

### (dropdown: _[Bind](#type_bind), ...[String](#type_string)_) → _[Command](#type_command)_

A [command](#type_command) that, when evaluated, creates a dropdown menu with the given [strings](#type_string) as options. When one option is selected, the bound variable is set to match the string value of the text.

#### Example usage:

*   `(dropdown: bind _origin, "Abyssal outer reaches", "Gyre's wake", "The planar interstice")` has a normal bound variable.
*   `(dropdown: 2bind $title, "Duke", "King", "Emperor")` has a two-way bound variable - if $title is "Duke", "King" or "Emperor", then the dropdown will automatically be scrolled to that option.

#### Rationale:

Dropdown menus offer a more esoteric, but visually and functionally unique way of presenting the player with a choice from several options. Compared to other list-selection elements like [(cycling-link:)](#macro_cycling-link)s or lists of links, dropdowns are best used for a long selection of options which should be displayed all together, but would not otherwise easily fit in the screen in full.

While dropdowns, whose use in form UI suggests themes of bureaucracy and utility, may appear best used for "character customisation" screens and other non-narrative purposes, that same imagery can also be a good reason to use them within prose itself - for instance, to present an in-story bureaucratic form or machine control panel.

#### Details:

This macro accepts two-way [binds](#type_bind) using the `2bind` syntax. These will cause the dropdown to always match the current value of the bound variable, if it can. Also, it will automatically update itself whenever any other macro changes the bound variable. However, if the variable no longer matches any of the dropdown's strings, then it won't update - for instance, if the variable becomes "Peasant", then a dropdown with the strings "Duke", "King" and "Emperor" won't update.

Note that unlike [(cycling-link:)](#macro_cycling-link), another command that uses bound variables, the bound variable is mandatory here.

Also note that unlike [(cycling-link:)](#macro_cycling-link), empty strings can be given. These instead create **separator elements**, which are rendered as unselectable horizontal lines that separate groups of options. Having empty strings as the first or last elements, however, will result in an error (as these can't meaningfully separate one group from another).

The first element in a (dropdown:) will always be the one initially displayed and selected - and thus, the one that is immediately set into the bound variable.

If you use [(replace:)](#macro_replace) to alter the text inside a (dropdown:), such as `(dropdown: bind $tattoo, "Star", "Feather")(replace:"Star")[Claw]`, then the option text and the value assigned to the bound variable will change - but _only_ when the player next interacts with the dropdown. $tattoo will be "Star" until a new option is selected, whereupon it will become either "Claw" or "Feather" depending on which was picked.

Harlowe markup inside (dropdown:) labels will be ignored - the text will be treated as if the markup wasn't present. For instance, `(dropdown: bind $mode, "//Stealth//", "//Speed//")` will produce a dropdown with "Stealth" and "Speed", with the italic styling markup removed.

#### See also:

[(cycling-link:)](#macro_cycling-link), [(checkbox:)](#macro_checkbox)

Added in: 3.0.0

[](#macro_meter)The (meter: ) macro
-----------------------------------

### (meter: _[Bind](#type_bind), [Number](#type_number), [String](#type_string), \[String\], \[[Colour](#type_colour) or [Gradient](#type_gradient)\]_) → _[Command](#type_command)_

A [command](#type_command) that creates a horizontal bar-graph meter, showing the current value of a [number](#type_number) variable, relative to a maximum value, and updating it whenever that variable changes.

#### Example usage:

*   `(set:$batteryPower to 800)(meter: bind $batteryPower, 1000, "X", "Battery Power: $batteryPower", (gradient: 90, 0, red, 1, orange))` creates a centered meter showing the value of the $batteryPower variable, from 0 to 1000, using a [gradient](#type_gradient) from orange (full) to red (empty).
*   `(set:$threatLevel to 2)(b4r:'solid')(meter: bind $threatLevel, 10, "==X", red)` creates a right-aligned meter showing the value of the $threatLevel variable, from 0 to 10, in red, with a solid border.

#### Rationale:

For those making number-heavy games, presenting those numbers in an immediately recognisable fashion can be essential to a smooth game experience - and there are times when simply stating the numbers in the prose isn't as direct as you'd like. The standard videogame UI meter, a bar that fills with a [colour](#type_colour) to represent an important value, is a visual idiom familiar to many people. In addition to their familiarity, meters have important semantic value, too - simply by graphically presenting a value in a meter, a player can immediately get a sense of how important to their play session that value is, as well as understand what numeric range that value should occupy during play.

#### Details:

The meter will graph the value of the bound variable, from 0 to the given maximum value number (which must be positive). For instance, if that number is 20, then if the bound variable is 5, the meter bar will be 25% full.

As of Harlowe 3.3.0, using the `2bind` keyword instead of `bind` will produce an error.

The meter is a "box" element, which takes up the full width of the passage or hook in which it's contained. Placing it inside column markup can allow you to place text alongside it, or other (meter:) commands, if you so desire.

The first [string](#type_string) you give to this macro is a "sizing line" identical to that accepted by [(box:)](#macro_box) and [(input-box:)](#macro_input-box) - consult their documentation for more information about those lines. However, the sizing line also determines the direction that the meter's bar fills. If the meter is left-aligned or occupies the full width (by being given "X" as a sizing string), the bar fills from left (empty) to right (full), and the opposite is true for right-alignment. Centre-alignment causes the bar to fill from the centre, expanding outward in both directions.

The second, optional string is a label that is placed inside the meter, on top of the bar. This text is aligned in the same direction as the meter itself. Whenever the meter updates, the label is also re-rendered.

Either a colour or a gradient can be given as the final value, with which to colour the bar. If neither is given, the bar will be a simple gray. If a gradient is given, and it isn't a [(stripes:)](#macro_stripes) gradient, its rotation will be automatically changed to 90 degrees, with the leftmost colour (at colour stop 0) being placed at the "empty" end of the meter, and the rightmost colour (at colour stop 1) placed at the "full" end. If the bar is center-aligned, then the gradient will be modified, with both ends of the graph having the leftmost colour, and the center having the rightmost colour.

The meter is exclusively horizontal, and cannot be rotated unless you attach [(text-rotate:)](#macro_text-rotate) to it.

Note: In Internet Explorer 10, the vertical height of the meter may be lower than as drawn in other browsers. This is due to a CSS limitation in that browser.

#### See also:

[(icon-counter:)](#macro_icon-counter)

Added in: 3.2.0.

[](#macro_link)The (link: ) macro
---------------------------------

### (link: _[String](#type_string), \[[Changer](#type_changer)\]_) → _Changer_

Also known as: [(link-replace:)](#macro_link-replace)

When attached to a hook, this replaces the hook with a link that has the given text. The link, when clicked, vanishes and reveals the hook. An optional [changer](#type_changer) can be given to alter the style of the link (instead of altering the style of the attached hook).

#### Example usage:

*   `(link: "Stake")[The dracula crumbles to dust.]` will create a link reading "Stake" which, when clicked, disappears and shows "The dracula crumbles to dust."
*   `(link: "Click to continue")[==` will create a link that, using the unclosed hook syntax, defers the display of the remainder of the passage until it is clicked.

#### Rationale:

As you're aware, links are what the player uses to traverse your story. However, links can also be used to simply display text or run macros inside hooks. Just attach the (link:) macro to a hook, and the entire hook will not run or appear at all until the player clicks the link.

Note that this particular macro's links disappear when they are clicked - if you want their words to remain in the text, or for only a small portion of the text to disappear, consider using [(link-reveal:)](#macro_link-reveal).

#### Details:

This creates a link which is visually indistinguishable from normal passage links. However, a changer can optionally be given, after the [string](#type_string), to change the appearance of the link. This must be a changer that would be accepted by [(enchant-in:)](#macro_enchant-in) or [(link-style:)](#macro_link-style) - which is to say, (link:), [(replace:)](#macro_replace), [(append-with:)](#macro_append-with), or any of their relatives cannot be given, or else an error will result. Note that if you wish to apply a changer to every link in the passage (or, via the use of a 'header' or 'footer' tagged passage, every link in the story), then you can simply use [(enchant:)](#macro_enchant) with ?Link instead.

The created link is displayed in place of the hook's contents, and is exempt from all changers that would normally apply to the hook. This means that changers like [(text-colour:)](#macro_text-colour), added to this changer, will ONLY apply to the hook once it's revealed, and not the link itself. To apply changers to just the link, consider wrapping it in a hook itself and using [(link-style:)](#macro_link-style), such as by the following:

    (link-style: (text-colour:red))[(link:"Hands stained red")[Hands pure and dry :)]]
    

Alternatively, you can just use [(enchant:)](#macro_enchant) with `?Link` to enchant every link with the same changer.

#### See also:

[(link-reveal:)](#macro_link-reveal), [(link-rerun:)](#macro_link-rerun), [(link-repeat:)](#macro_link-repeat), [(link-goto:)](#macro_link-goto), [(click:)](#macro_click), [(more:)](#macro_more)

Added in: 1.0.0

[](#macro_link-reveal)The (link-reveal: ) macro
-----------------------------------------------

### (link-reveal: _[String](#type_string), \[[Changer](#type_changer)\]_) → _Changer_

Also known as: [(link-append:)](#macro_link-append)

When attached to a hook, this replaces the hook with a link that has the given text. The link, when clicked, reveals the hook and becomes plain, unstyled text. An optional [changer](#type_changer) can be given to alter the style of the link (instead of altering the style of the attached hook).

#### Example usage:

`(link-reveal: "Heart")[broken]` will create a link reading "Heart" which, when clicked, changes to plain text, and shows "broken" after it.

#### Rationale:

This is similar to [(link:)](#macro_link), but allows the text of the link to remain in the passage after it is clicked. It allows key words and phrases in the passage to expand and reveal more text after themselves. Simply attach it to a hook, and the hook will only be revealed when the link is clicked.

#### Details:

This creates a link which is visually indistinguishable from normal passage links. However, a changer can optionally be given, after the [string](#type_string), to change the appearance of the link. This must be a changer that would be accepted by [(enchant-in:)](#macro_enchant-in) or [(link-style:)](#macro_link-style) - which is to say, [(link:)](#macro_link), [(replace:)](#macro_replace), [(append-with:)](#macro_append-with), or any of their relatives cannot be given, or else an error will result. Note that if you wish to apply a changer to every link in the passage (or, via the use of a 'header' or 'footer' tagged passage, every link in the story), then you can simply use [(enchant:)](#macro_enchant) with ?Link instead.

The created link is displayed in place of the hook's contents, and is exempt from all changers that would normally apply to the hook. This means that changers like [(text-colour:)](#macro_text-colour), added to this changer, will ONLY apply to the hook once it's revealed, and not the link itself. To apply changers to just the link, consider wrapping it in a hook itself and using [(link-style:)](#macro_link-style), or just using [(enchant:)](#macro_enchant) with `?Link` to enchant every link.

If the link text contains formatting syntax, such as "**bold**", then it will be retained when the link is demoted to text.

#### See also:

[(link:)](#macro_link), [(link-rerun:)](#macro_link-rerun), [(link-repeat:)](#macro_link-repeat), [(link-goto:)](#macro_link-goto), [(click:)](#macro_click), [(more:)](#macro_more)

Added in: 1.2.0

[](#macro_link-repeat)The (link-repeat: ) macro
-----------------------------------------------

### (link-repeat: _[String](#type_string), \[[Changer](#type_changer)\]_) → _Changer_

When attached to a hook, this replaces the hook with a link that has the given text. The link, when clicked, reveals the hook. Further clicks will cause the hook to repeat itself - a copy of the hook's code will be run, and the result appended to it, in a manner similar to [(for:)](#macro_for). An optional [changer](#type_changer) can be given to alter the style of the link (instead of altering the style of the attached hook).

#### Example usage:

*   `(link-repeat: "Add cheese")[(set:$cheese to it + 1)]` will create a link reading "Add cheese" which, when clicked, adds 1 to the $cheese variable using [(set:)](#macro_set), and can be clicked repeatedly.
*   `(link-repeat: "Scream a little ")[A]` will, when the link is clicked, add an A to the hook each time.

#### Rationale:

This is similar to [(link:)](#macro_link), but allows the created link to remain in the passage after it is clicked. It can be used to make a link that fills with increasingly more text after each click, possibly conveying a sense of powerlessness or desperation.

This macro is part of a pair with [(link-rerun:)](#macro_link-rerun) - the latter macro will empty the hook each time the link is clicked. This one should be used if you'd prefer the hook to retain each of its past runs.

The created link is displayed in place of the hook's contents, and is exempt from all changers that would normally apply to the hook. This means that changers like [(text-colour:)](#macro_text-colour), added to this changer, will ONLY apply to the hook once it's revealed, and not the link itself. To apply changers to just the link, consider wrapping it in a hook itself and using [(link-style:)](#macro_link-style), or just using [(enchant:)](#macro_enchant) with `?Link` to enchant every link.

#### Details:

This creates a link which is visually indistinguishable from normal passage links. However, a changer can optionally be given, after the [string](#type_string), to change the appearance of the link. This must be a changer that would be accepted by [(enchant-in:)](#macro_enchant-in) or [(link-style:)](#macro_link-style) - which is to say, [(link:)](#macro_link), [(replace:)](#macro_replace), [(append-with:)](#macro_append-with), or any of their relatives cannot be given, or else an error will result. Note that if you wish to apply a changer to every link in the passage (or, via the use of a 'header' or 'footer' tagged passage, every link in the story), then you can simply use [(enchant:)](#macro_enchant) with ?Link instead.

#### See also:

[(link-rerun:)](#macro_link-rerun), [(link-reveal:)](#macro_link-reveal), [(link:)](#macro_link), [(link-goto:)](#macro_link-goto), [(click:)](#macro_click)

Added in: 1.2.0

[](#macro_link-rerun)The (link-rerun: ) macro
---------------------------------------------

### (link-rerun: _[String](#type_string), \[[Changer](#type_changer)\]_) → _Changer_

When attached to a hook, this replaces the hook with a link that has the given text. The link, when clicked, reveals the hook. Further clicks will cause the hook to rerun itself, as if by the effect of [(rerun:)](#macro_rerun). An optional [changer](#type_changer) can be given to alter the style of the link (instead of altering the style of the attached hook).

#### Example usage:

*   `(link-rerun: "ROLL DICE ")[You rolled a (random:1,6).]` will create a link reading "ROLL DICE" which, when clicked, changes the hook to "You rolled a " followed by a random [number](#type_number) between 1 and 6.

#### Rationale:

This is similar to [(link:)](#macro_link), but allows the created link to remain in the passage after it is clicked. It can be used to make a link which displays a slightly varying run of prose over and over, or a link which must be clicked multiple times before something can happen (using [(set:)](#macro_set) and [(if:)](#macro_if) to keep count of the number of clicks).

This macro is part of a pair with [(link-repeat:)](#macro_link-repeat) - the latter macro will append each run of the hook, so that text gradually accumulates within it. This one should be used if you'd prefer the hook to remain at a certain size, or need it to always naturally flow from the link text.

The created link is displayed in place of the hook's contents, and is exempt from all changers that would normally apply to the hook. This means that changers like [(text-colour:)](#macro_text-colour), added to this changer, will ONLY apply to the hook once it's revealed, and not the link itself. To apply changers to just the link, provide them (added together if there are multiple) as the optional second value to this macro.

#### Details:

This creates a link which is visually indistinguishable from normal passage links. However, a changer can optionally be given, after the [string](#type_string), to change the appearance of the link. This must be a changer that would be accepted by [(enchant-in:)](#macro_enchant-in) or [(link-style:)](#macro_link-style) - which is to say, [(link:)](#macro_link), [(replace:)](#macro_replace), [(append-with:)](#macro_append-with), or any of their relatives cannot be given, or else an error will result. Note that if you wish to apply a changer to every link in the passage (or, via the use of a 'header' or 'footer' tagged passage, every link in the story), then you can simply use [(enchant:)](#macro_enchant) with ?Link instead.

#### See also:

[(link-repeat:)](#macro_link-repeat), [(link-reveal:)](#macro_link-reveal), [(link:)](#macro_link), [(link-goto:)](#macro_link-goto), [(click:)](#macro_click)

Added in: 3.2.0

[](#macro_link-goto)The (link-goto: ) macro
-------------------------------------------

### (link-goto: _[String](#type_string), \[String\]_) → _[Command](#type_command)_

Takes a [string](#type_string) of link text, and an optional destination passage name, and makes a [command](#type_command) to create a link that takes the player to another passage. The link functions identically to a standard link.

#### Example usage:

*   `(link-goto: "Enter the cellar", "Cellar")` is approximately the same as `[[Enter the cellar->Cellar]]`.
*   `(link-goto: "Cellar")` is the same as `[[Cellar]]`.

#### Rationale:

This macro serves as an alternative to the standard link syntax (`[[Link text->Destination]]`), and has a key difference: The link syntax lets you supply a fixed text string for the link, and a markup expression for the destination passage's name. (link-goto:) also allows the link text to be any expression - so, something like `(link-goto: "Move " + $name + "to the cellar", "Cellar")` can be written.

#### Details:

If the passage name doesn't correspond to any existing passage, a broken link (a red link that can't be clicked) will be created.

The resulting command from this macro, like all commands, can be saved and used elsewhere. If you have a complicated link you need to use in several passages, you could [(set:)](#macro_set) it to a variable and use that variable in its place.

As a bit of trivia... the Harlowe engine actually converts all standard links into (link-goto:) macro calls internally - the link syntax is, essentially, a syntactic shorthand for (link-goto:).

Note that (link-goto:), unlike [(link:)](#macro_link), doesn't accept a [changer](#type_changer) value to style the produced link. This is because, as this produces a command (and not a changer), you can simply attach changers to the front of it to style the link.

#### See also:

[(link:)](#macro_link), [(link-reveal:)](#macro_link-reveal), [(link-undo:)](#macro_link-undo), [(goto:)](#macro_goto)

Added in: 1.0.0

[](#macro_link-reveal-goto)The (link-reveal-goto: ) macro
---------------------------------------------------------

### (link-reveal-goto: _[String](#type_string), \[String\], \[[Changer](#type_changer)\]_) → _Changer_

This is a convenient combination of the [(link-reveal:)](#macro_link-reveal) and [(go-to:)](#macro_go-to) macros, designed to let you run [commands](#type_command) like [(set:)](#macro_set) just before going to another passage. The first [string](#type_string) is the link text, and the second is the passage name. An optional [changer](#type_changer), with which to style the link, can also be provided.

#### Example usage:

*   `(link-reveal-goto: "Study English", "Afternoon 1")[(set:$eng to it + 1)]` will create a link reading "Study English" which, when clicked, adds 1 to the $eng variable using [(set:)](#macro_set), and then goes to the passage "Afternoon 1".
*   `(link-reveal-goto: "Fight the King of England", "Death")[(dialog:"You asked for it!")]` will create a link reading "Fight the King of England" which, when clicked, displays an alert using [(dialog:)](#macro_dialog), and then goes to the passage "Death".

#### Details:

Note that the [(visited:)](#macro_visited) macro can be used for checking if a passage was visited earlier in the game. So, you don't necessarily need to use this macro to record that the player has visited the destination passage. Generally, you should use this macro only if you need to record that the player used _this specific link_ to visit that passage.

Note also that there's no way to "cancel" traveling to the new passage once the link is clicked, unless you include [(go-to:)](#macro_go-to), [(undo:)](#macro_undo), or another such macro inside the hook.

#### See also:

[(link-reveal:)](#macro_link-reveal), [(link:)](#macro_link), [(link-goto:)](#macro_link-goto), [(click:)](#macro_click)

Added in: 3.0.0

[](#macro_link-undo)The (link-undo: ) macro
-------------------------------------------

### (link-undo: _[String](#type_string), \[String\]_) → _[Command](#type_command)_

Takes a [string](#type_string) of link text, and produces a link that, when clicked, undoes the current turn and sends the player back to the previously visited passage. The link appears identical to a typical passage link. An optional second string can be provided, which is shown instead of the link if it's not possible to undo.

#### Example usage:

`(link-undo:"Retreat", "Can't retreat!")` will produce a link reading "Retreat" if undos are available. If not, the text "Can't retreat!" is displayed instead.

#### Rationale:

The ability to undo the player's last turn, as an alternative to [(go-to:)](#macro_go-to), is explained in the documentation of the [(undo:)](#macro_undo) macro. This macro provides a shorthand for placing [(undo:)](#macro_undo) inside a [(link:)](#macro_link) attached hook.

You may, as part of customising your story, be using [(replace:)](#macro_replace) to change the ?sidebar, and remove its default "undo" link. If so, you can selectively provide undo links at certain parts of your story instead, by using this macro.

#### Details:

As with [(undo:)](#macro_undo), [(link-storylet:)](#macro_link-storylet) and such, if undos aren't available (either due to this being the start of the story, or [(forget-undos:)](#macro_forget-undos) being used) then either the optional second string will be displayed instead, or (if that wasn't provided) nothing will be displayed.

If this is used in a passage, and [(forget-undos:)](#macro_forget-undos) is used later in the passage to prevent undoing, then this link's text will automatically be replaced with the optional second string (or disappear if it's not provided). This is similar to how [(link-fullscreen:)](#macro_link-fullscreen) will update itself if another macro changes the player's fullscreen status.

Note that (link-undo:), unlike [(link:)](#macro_link), doesn't accept a [changer](#type_changer) value to style the produced link. This is because, as this produces a [command](#type_command) (and not a changer), you can simply attach changers to the front of it to style the link.

#### See also:

[(undo:)](#macro_undo), [(link-goto:)](#macro_link-goto), [(icon-undo:)](#macro_icon-undo)

Added in: 2.0.0

[](#macro_link-fullscreen)The (link-fullscreen: ) macro
-------------------------------------------------------

### (link-fullscreen: _[String](#type_string), String, \[String\]_) → _[Command](#type_command)_

Creates a link that, when clicked, toggles the browser's fullscreen mode and windowed mode. The first [string](#type_string) is used as its link text if the browser is currently in windowed mode, and the second string if it's currently in fullscreen mode. The link will automatically update (re-rendering the link text) to match the browser's current fullscreen state. The optional third string is used when fullscreen mode isn't allowed by the browser - if it's absent or an empty string, the link won't be displayed at all in that situation.

#### Example usage:

*   `(link-fullscreen: "Turn fullscreen on", "Turn fullscreen off", "Fullscreen unavailable")`

#### Rationale:

Modern browsers allow web pages to take up the entire screen of the user, in a manner similar to desktop games. This feature can be useful for immersive or moody stories, such as horror stories, that wish to immerse the player's senses in a certain [colour](#type_colour) or shade, or to display impactful text that doesn't have to compete for attention from any other screen elements. While it can be more convenient to place an [(icon-fullscreen:)](#macro_icon-fullscreen) in your story's sidebar, this macro can be useful if you remove or replace the sidebar with something else, and can serve as an alternative means of activating fullscreen mode.

The third string is an error message or alternative text you can provide if the browser doesn't allow fullscreen mode to be entered, for whatever reason. If you're using this link in the middle of a sentence, you may want to use this to provide an alternative sentence fragment to fit the sentence.

#### Details:

When activated, this will make the page's `<html>` element be the fullscreen element, _not_ `<tw-story>`. This is because, in most browsers, removing the fullscreen element from the page, however briefly, will deactivate fullscreen mode. Since the `(enchant:)` macro, when given ?Page, will often need to wrap `<tw-story>` in another element, those macro calls will deactivate fullscreen mode if `<tw-story>` was the fullscreen element. So, if you have edited the compiled HTML to add elements before and after it, such as a navigation bar, that will remain visible while the story is in fullscreen mode. Additionally, this means that the Debug Mode panel is still visible when fullscreen mode is activated.

If the third string is present, and the browser reports to Harlowe that fullscreen mode is unavailable, then a string visually identical to a broken link will be displayed, using the third string as its text. This is, by default, a red link that cannot be clicked.

Currently, there is no special functionality or error reporting when the browser reports that fullscreen mode is available, but the attempt to switch to fullscreen mode fails. In that case, the link will simply appear to do nothing.

It is possible to "force" the player into fullscreen by nesting the code for a [(goto:)](#macro_goto) call inside the second string, such as by `(link-fullscreen: "Continue.", "(goto:'Area 2')")`, which causes the [(goto:)](#macro_goto) to be run only when the browser enters fullscreen mode, then immediately leaving the passage and continuing the story. This is NOT recommended, however, because browsers currently (as of 2020) allow the user to exit fullscreen mode at any time of their own accord, so a player that's not willing to enter fullscreen mode would simply exit it soon afterward, and this construction would ultimately accomplish very little.

Note that (link-fullscreen:), unlike [(link:)](#macro_link), doesn't accept a [changer](#type_changer) value to style the produced link. This is because, as this produces a [command](#type_command) (and not a changer), you can simply attach changers to the front of it to style the link.

#### See also:

[(link-goto:)](#macro_link-goto), [(link-undo:)](#macro_link-undo), [(cycling-link:)](#macro_cycling-link), [(icon-fullscreen:)](#macro_icon-fullscreen), [(checkbox-fullscreen:)](#macro_checkbox-fullscreen)

Added in: 3.2.0

[](#macro_link-show)The (link-show: ) macro
-------------------------------------------

### (link-show: _[String](#type_string), ...[HookName](#type_hookname)_) → _[Command](#type_command)_

Creates a link that, when clicked, shows the given hidden hooks, running the code within.

#### Example usage:

`But those little quirks paled before (link-show: "her darker eccentricities.", ?twist)`

#### Rationale:

As discussed in the documentation for [(show:)](#macro_show), that macro is intended as a complement to [(click-replace:)](#macro_click-replace) (or perhaps [(click-append:)](#macro_click-append)). While both let you insert text at a location when a link is clicked, they differ in whether they let the author write the initial text or the replacement text at the location when coding the passage.

Typical [(click-append:)](#macro_click-append) usage resembles the following, where the inserted text provides supplementary content to the passage's prose, and is written separately from it:

    Ah. You remember her eldest well - [a frail, anxious child]<extra|. Unlikely to raise too much of a fuss.
    
    (click-append: ?extra)[, constantly frowning, mumbling every word they utter, flinching at the slightest noise]
    

Conversely, typical [(show:)](#macro_show) usage resembles the following, where the inserted text is a continuation of the passage's prose, and is written together with it:

    "Look, it's important to comment even the simplest code...|extra)[ You might remember what it does now, but not at 4:50 PM on Friday \
    afternoon, when you're about to push to production and a runtime error shows up in it.]"
    
    You (link-reveal:"struggle to listen.")[(show: ?extra)]
    

The (link-show:) macro provides a convenient shorthand for the latter example, letting you write the final line as `You (link-show: "struggle to listen.", ?more)`.

#### Details:

As with most link macros, providing this with an empty link text [string](#type_string) will result in an error.

As with [(show:)](#macro_show) and [(click:)](#macro_click), providing this with a hook which is already visible, or which doesn't even exist, will NOT produce an error, but simply do nothing. Also, showing a hook that was hidden with [(hide:)](#macro_hide) will not re-run the macros contained within, but simply make visible the hook as it was.

Note that (link-show:), unlike [(link:)](#macro_link), doesn't accept a [changer](#type_changer) value to style the produced link. This is because, as this produces a [command](#type_command) (and not a changer), you can simply attach changers to the front of it to style the link.

#### See also:

[(show:)](#macro_show), [(link-reveal:)](#macro_link-reveal), [(click-append:)](#macro_click-append), [(more:)](#macro_more)

Added in: 3.0.0

[](#macro_link-storylet)The (link-storylet: ) macro
---------------------------------------------------

### (link-storylet: _\[[String](#type_string)\], [Number](#type_number) or [Lambda](#type_lambda), \[String\]_) → _[Command](#type_command)_

If there are storylets (storylets are passages containing a [(storylet:)](#macro_storylet) call) in this story, this will create a link to the first open storylet that matches the passed-in 'where' [lambda](#type_lambda), or, if a [number](#type_number) **n** was passed in, the **n**th (or, if negative, **n**thlast) open storylet. An optional first [string](#type_string) can provide the link text - otherwise, the link text is the passage name of the storylet. An optional final string can provide text to display when no such storylet is open currently.

#### Example usage:

The following creates three links to open storylets.

    You look over the paddock as you ponder three ways you may spend the coming day.
    * (link-storylet: 1, "//(Unavailable)//")
    * (link-storylet: 2, "//(Unavailable)//")
    * (link-storylet: 3, "//(Unavailable)//")
    

The following creates a link to the next storylet which matches the 'where' condition. The link text is always an arrow regardless of which passage is linked. If there is no open storylet that matches, the link doesn't appear at all.

    (link-storylet: "→", where its tags contains 'episode')
    

#### Rationale:

The standard macro for accessing which storylets are currently open in the story is [(open-storylets:)](#macro_open-storylets). Combined with other macros such as [(for:)](#macro_for) and [(link-goto:)](#macro_link-goto), links to storylets can be easily created. This macro provides a shorthand for the most basic case: creating a simple link to the first open storylet, second open storylet, and so forth.

#### Details:

The position functions similarly to the position number given to [(subarray:)](#macro_subarray) - positive numbers will count from the start, and negative numbers will count from the end. `(link-storylet:-1)` will produce a link to the last available storylet (which will be the one with the _least_ [(urgency:)](#macro_urgency) value among open storylets). If the number 0 is given, an error will result.

If there is no storylet available for the link (such as `(link-storylet: 6)` when only 4 storylets are currently open) then the optional final string will be displayed. If it isn't given, nothing will be displayed.

Note that (link-storylet:), unlike [(link:)](#macro_link), doesn't accept a [changer](#type_changer) value to style the produced link. This is because, as this produces a [command](#type_command) (and not a changer), you can simply attach changers to the front of it to style the link.

Added in: 3.2.0

[](#macro_click)The (click: ) macro
-----------------------------------

### (click: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

Produces a [changer](#type_changer) which, when attached to a hook, hides it and enchants the specified target, such that it visually resembles a link, and that clicking it causes the attached hook to be revealed.

#### Example usage:

    There is a small dish of water. (click: "dish")[Your finger gets wet.]
    

#### Rationale:

The [(link:)](#macro_link) macro and its variations lets you make passages more interactive, by adding links that display text when clicked. However, it can often greatly improve your passage code's readability to write a macro call that's separate from the text that it affects. You could want to write an entire paragraph, then write code that makes certain words into links, without interrupting the flow of the prose in the editor.

The (click:) macro lets you separate text and code in this way. Place (click:) hooks at the end of your passages, and have them affect named hooks, or text [strings](#type_string), earlier in the passage.

#### Details:

Text or hooks targeted by a (click:) macro will be styled in a way that makes them indistinguishable from passage links, and links created by [(link:)](#macro_link). When any one of the targets is clicked, this styling will be removed and the hook attached to the (click:) will be displayed.

Additionally, if a (click:) macro is removed from the passage, then its targets will lose the link styling and no longer be affected by the macro.

You can add further styling to the "links" produced by (click:) by providing an optional changer or "via" [lambda](#type_lambda) as a second value, similar to [(link:)](#macro_link)'s optional changer. If a "via" lambda is supplied, then that lambda is used to compute a changer dynamically, based on specifics of each hook that's enchanted, similar to lambdas provided to [(enchant:)](#macro_enchant).

#### Targeting ?Page, ?Passage or ?Sidebar:

When a (click:) [command](#type_command) is targeting the ?Page, ?Passage or ?Sidebar, instead of transforming the entire passage text into a link, something else will occur: a blue link-coloured border will surround the area, and the mouse cursor (on desktop browsers) will resemble a hand no matter what it's hovering over.

Clicking a link when a (click:) is targeting the ?Page or ?Passage will cause both the link and the (click:) to activate at once.

Using multiple (click:) commands to target the ?Page or ?Passage will require multiple clicks from the player to activate all of them. They activate in the order they appear on the page - top to bottom.

#### See also:

[(link:)](#macro_link), [(link-reveal:)](#macro_link-reveal), [(replace:)](#macro_replace), [(click-replace:)](#macro_click-replace)

Added in: 1.0.0

[](#macro_click-replace)The (click-replace: ) macro
---------------------------------------------------

### (click-replace: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A special shorthand combination of the [(click:)](#macro_click) and [(replace:)](#macro_replace) macros, this allows you to make a hook replace its own text with that of the attached hook whenever it's clicked. `(click: ?1)[(replace:?1)[...]]` can be rewritten as `(click-replace: ?1)[...]`.

#### Example usage:

    My deepest secret.
    (click-replace: "secret")[longing for you]
    

#### See also:

[(click-prepend:)](#macro_click-prepend), [(click-append:)](#macro_click-append)

Added in: 1.0.0

[](#macro_click-rerun)The (click-rerun: ) macro
-----------------------------------------------

### (click-rerun: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A special version of the [(click:)](#macro_click) macro which allows the enchanted hook or text (specified by the first value) to be activated multiple times to re-run the attached hook.

#### Example usage:

    The only place you haven't searched yet is the washing basket, and you know there's nothing to find in there.
    
    (set:_t to 0)\
    (click-rerun:"washing basket")[(set:_t to it+1)You pull out (nth:_t, "two left socks","a tie-dyed tie","a thimble","a laced tablecloth"). Just in case it was under there.]
    

#### Rationale:

While the [(click:)](#macro_click) macro lets you add links to your text without placing lots of macro code in the middle of your prose, there isn't an obvious way of creating a repeatable link, similar to [(link-rerun:)](#macro_link-rerun) or using [(link:)](#macro_link) with [(rerun:)](#macro_rerun), in the same way. This macro provides that functionality.

#### Details:

This changes the enchanted text into a link in the same way as [(click:)](#macro_click). As with most link macros, you may style the link by providing a [changer](#type_changer) (or a [lambda](#type_lambda) producing a changer) as the second value.

#### See also:

[(link-rerun:)](#macro_link-rerun), [(click:)](#macro_click), [(rerun:)](#macro_rerun)

Added in: 3.3.0

[](#macro_click-append)The (click-append: ) macro
-------------------------------------------------

### (click-append: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A special shorthand combination of the [(click:)](#macro_click) and [(append:)](#macro_append) macros, this allows you to append text to a hook or [string](#type_string) when it's clicked. `(click: ?1)[(append:?1)[...]]` can be rewritten as `(click-append: ?1)[...]`.

#### Example usage:

    I have nothing to fear.
    (click-append: "fear")[ but my own hand]
    

#### See also:

[(click-replace:)](#macro_click-replace), [(click-prepend:)](#macro_click-prepend)

Added in: 1.0.0

[](#macro_click-goto)The (click-goto: ) macro
---------------------------------------------

### (click-goto: _[HookName](#type_hookname) or [String](#type_string), String_) → _[Command](#type_command)_

A special shorthand combination of the [(click:)](#macro_click) and [(go-to:)](#macro_go-to) macros, this allows you to make a hook or bit of text into a passage link. `(click-goto: ?1, 'Passage Name')` is equivalent to `(click: ?1)[(goto:'Passage Name')]`

#### Example usage:

    Time to get in your crimchair, plug in your crimphones, power up your crimrig and your crimgrip - the next page in your crimming career awaits.
    (click-goto: "crim", "Test")
    

#### Details:

This construction differs from simply nesting [(go-to:)](#macro_go-to) in a hook, as in `(click:?page)[(goto:"Stonehenge")]` in one important respect: you can attach the [(t8n-depart:)](#macro_t8n-depart) and [(t8n-arrive:)](#macro_t8n-arrive) [changers](#type_changer) to the (click-goto:) [command](#type_command), such as by `(t8n-depart:"dissolve")(click-goto:?page, "Stonehenge")`, and the passage transition will be applied when you click the indicated area. In the former construction, you'd have to attach the [(t8n-depart:)](#macro_t8n-depart) and [(t8n-arrive:)](#macro_t8n-arrive) macros to the interior [(go-to:)](#macro_go-to) command rather than the [(click:)](#macro_click) command.

#### See also:

[(link-goto:)](#macro_link-goto), [(mouseover-goto:)](#macro_mouseover-goto), [(mouseout-goto:)](#macro_mouseout-goto)

Added in: 3.0.0

[](#macro_click-undo)The (click-undo: ) macro
---------------------------------------------

### (click-undo: _[HookName](#type_hookname) or [String](#type_string)_) → _[Command](#type_command)_

A special shorthand combination of the [(click:)](#macro_click) and [(undo:)](#macro_undo) macros, this allows you to make a hook or bit of text into a passage link. `(click-undo: ?1)` is equivalent to `(click: ?1)[(undo: )]`

#### Example usage:

`You might have gotten yourself into a pickle that only time travel can get you out of. (click-undo: ?page)`

#### Details:

This will, of course, cause an error if it's encountered on the first turn of the game (when there's nothing to undo).

You can attach the [(t8n-depart:)](#macro_t8n-depart) and [(t8n-arrive:)](#macro_t8n-arrive) [changers](#type_changer) to (click-undo:), such as by `(t8n-depart:"dissolve")(click-undo:?page)`, and the passage transition will be applied when you click the indicated area. In the former construction, you'd have to attach the [(t8n-depart:)](#macro_t8n-depart) and [(t8n-arrive:)](#macro_t8n-arrive) macros to the interior [(undo:)](#macro_undo) [command](#type_command) rather than the [(click:)](#macro_click) command.

#### See also:

[(link-undo:)](#macro_link-undo), [(mouseover-undo:)](#macro_mouseover-undo), [(mouseout-undo:)](#macro_mouseout-undo)

Added in: 3.2.0

[](#macro_click-prepend)The (click-prepend: ) macro
---------------------------------------------------

### (click-prepend: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A special shorthand combination of the [(click:)](#macro_click) and [(prepend:)](#macro_prepend) macros, this allows you to prepend text to a hook or [string](#type_string) when it's clicked. `(click: ?1)[(prepend:?1)[...]]` can be rewritten as `(click-prepend: ?1)[...]`.

#### Example usage:

    Who stands with me?
    (click-prepend: "?")[ but my shadow]
    

#### See also:

[(click-replace:)](#macro_click-replace), [(click-append:)](#macro_click-append)

Added in: 1.0.0

[](#macro_action)The (action: ) macro
-------------------------------------

### (action: _[String](#type_string)_) → _[Changer](#type_changer)_

When attached to a link [command](#type_command), or given to a link [changer](#type_changer) macro as the second value, this changer turns the link into a different kind of interaction element with a different appearance - one that is either activated by hovering the mouse pointer over it, hoving the mouse pointer off of it, or double-clicking it. This does nothing when attached or supplied to a non-link hook.

#### Example usage:

    (action:'mouseover')[[Now isn't the time to think about that. Look!->Test]]
    
    |1>[Hey, c'mover here, cutie.](click:?1, (action:'mouseover'))[ Wanna merge brains over this printer cable?]
    
    (box:"X")|A>[You can't touch me!](click-replace: ?A,(action:'mouseover'))[Aah! That tickles!]
    
    You reach into the box...(click-append: "box...", (action:'mouseover'))[ ...and pull out the final jewel.]
    
    (link:"CORE OVERRIDE",(action:'mouseout'))[Core overridden. The programs are going wild.]
    
    You kiss her on the (link: "lips.",(action:'mouseout'))[mouth that once sneered so cruelly at you.]
    
    Hold my (link-reveal:"hand.",(action:'mouseout'))[ Thank you.]
    

#### Rationale:

Even though Harlowe (and Twine in general) is primarily a tool for writing serious non-linear prose works, it is also meant as a tool for playful, experimental, and abstract works where the act of interaction with the text is put into focus. To that end, macros like this one exist to provide alternative, unusual or unexpected ways for the player to interact with links.

Since these actions (especially double-clicking) differ from the usual convention of hyperlinks, it is recommended that your story explains these kinds of links to the player. Or, if you'd prefer to surprise or conceal something from the player, you may choose not to, and leave them to discover these interactions for themselves.

#### Details:

The [string](#type_string) values this accepts are listed below. Note that these strings are case-insensitive and dash-insensitive.

t-s\[mouseout\]:hover { background-color: hsla(200,25%,75%,0.75); border: transparent 1px solid !important; } t-s\[doubleclick\]:active { background-color: #999; }

String

Default appearance

Action

`"mouseover"`

Move the mouse over the link to activate it (or press it on a touch device).

`"mouseout"`

Move the mouse onto the link, then off it, to activate it (or press it on a touch device).

`"doubleclick"`

Double-click (or double-press) the link to activate it.

`"click"`

An unchanged link that is activated by clicking.

These actions cannot be combined - `(action:'doubleclick')+(action:'click')` will only behave like `(action:'click')`.

Each of these actions causes the links to have a slightly different sensation and mood to a normal link. `"mouseover"` conveys a mood of fragility and spontaneity in your stories, of text reacting to the merest of touches. `"mouseout"` conveys a sense of "pointing" at the element to interact with it rather than "touching" it, and gives a dream-like or unearthly air to scenes or places. `"doubleclick"` requires a more forceful interaction than clicking, and is commonly associated with desktop operating systems and the concept of "opening".

Because this fundamentally changes the manner in which the link is interacted with, **this currently does nothing** when given to [(enchant:)](#macro_enchant), [(enchant-in:)](#macro_enchant-in), [(line-style:)](#macro_line-style), or other such macros.

It is _not_ recommended using this with [(click:)](#macro_click) to enchant a hook which already contains a link.

While you can write something like `(click:?Page, (action:"mouseover"))`, the result won't be that interesting: if the mouse pointer is anywhere on the page, the hook to which the [(click:)](#macro_click) changer is attached will immediately run.

#### See also:

[(cycling-link:)](#macro_cycling-link), [(seq-link:)](#macro_seq-link)

Added in: 3.3.0

[](#macro_live)The (live: ) macro
---------------------------------

### (live: _\[[Number](#type_number)\]_) → _[Changer](#type_changer)_

When you attach this [changer](#type_changer) to a hook, the hook becomes "live", which means that it's repeatedly re-run every certain [number](#type_number) of milliseconds, replacing the source inside of the hook with a newly computed version.

#### Example usage:

    {(live: 0.5s)[
        (either: "Bang!", "Kaboom!", "Whammo!", "Pow!")
    ]}
    

#### Rationale:

Passage text generally behaves like a HTML document: it starts as code, is changed into a rendered page when you "open" it, and remains so until you leave. But, you may want a part of the page to change itself before the player's eyes, for its code to be re-renders "live" in front of the player, while the remainder of the passage remains the same.

Certain macros, such as the [(link:)](#macro_link) macro, allow a hook to be withheld until after an element is interacted with. The (live:) macro is more versatile: it re-renders a hook every specified number of milliseconds. If [(if:)](#macro_if) or [(unless:)](#macro_unless) macros are inside the hook, they of course will be re-evaluated each time.

#### Details:

Numbers given to macros such as (live:) can be suffixed with `ms` or `s` to indicate whether you mean milliseconds or seconds (see the article on number data for more information). If you give a bare number, the macro interprets it as milliseconds.

Live hooks will continue to re-render themselves until they encounter and print a [(stop:)](#macro_stop) macro. [(stop:)](#macro_stop) should be used whenever you don't need to keep the hook "live", to save on processing and passage repainting (which can interfere with clicking, selecting text, and other interactions).

As of Harlowe 3.3.4, when testing your story in Debug Mode, you can alter the speed at which (live:) waits (so as to quickly advance the passage to an important part, or linger on an important part) by using the "Speed" dropdown in the Tools panel. If you change it to 0.5x, (live:) will wait twice as long as instructed: a 1s wait will behave as if it was 2s, and so forth. Changing it to 2x will half (live:)'s wait time, conversely. Note that this option will currently not affect the speed of transitions (using [(t8n-delay:)](#macro_t8n-delay) or [(t8n-time:)](#macro_t8n-time)).

A note about timing: due to browser security and resource limitations, modern browsers may arbitrarily increase the delay given to (live:) by about 5-10ms, based on how long the (live:) macro has been running and how hard the CPU is working. More importantly, if the browser tab becomes inactive (such as by the player switching to another tab), modern browsers will often increase the delay by over 1 second, or, if the tab is inactive for a long time, any arbitrary length of time it wishes! In short, there is **no guarantee** that the time interval given to (live:) will actually be the time that will elapse between renders! Please use this macro with that limitation in mind.

If you want to just display a hook once a certain thing happens (that is, when the condition in an [(if:)](#macro_if) macro becomes true) and then [(stop:)](#macro_stop), then the [(event:)](#macro_event) macro may be shorter and easier to use for this. If you want to display a hook after a certain amount of time has passed, then the [(after:)](#macro_after) macro is almost certainly what you'd prefer to use.

Currently, you **cannot** attach (live:) to a [command](#type_command) (such as in `(live:2s)(link-goto:"?")`). You have to wrap the command in a hook (such as `(live:2s)[(link-goto:"?")]`).

#### See also:

[(event:)](#macro_event), [(more:)](#macro_more), [(after:)](#macro_after)

Added in: 1.0.0

[](#macro_stop)The (stop: ) macro
---------------------------------

### (stop: ) → _[Command](#type_command)_

This macro, which accepts no arguments, creates a (stop:) [command](#type_command), which is not configurable.

#### Example usage:

    {(set:$packedBags to true)(live: 1s)[
        (if: $packedBags)[OK, let's go!(stop:)]
        (else: )[(either:"Are you ready yet?","We mustn't be late!")]
    ]}
    

#### Rationale:

Clunky though it looks, this macro serves a single important purpose: inside a [(live:)](#macro_live) macro's hook, its appearance signals that the macro must stop running. In every other occasion, this macro does nothing.

This command can't have [changers](#type_changer) attached - attempting to do so will produce an error.

#### See also:

[(live:)](#macro_live)

Added in: 1.0.0

[](#macro_event)The (event: ) macro
-----------------------------------

### (event: _[Lambda](#type_lambda)_) → _[Changer](#type_changer)_

Hooks that have this [changer](#type_changer) attached will only be run when the given condition becomes true.

#### Example usage:

This example causes a new [string](#type_string) to be displayed after some time has passed, _or_ if the [(cycling-link:)](#macro_cycling-link) cycles to a certain value.

    (cycling-link: bind _recall, "Dennis?", "Denver?", "Denzel?", "Duncan?", "Danny?", "Denton?")
    (event: when time > 10s or _recall is 'Denton?')[==No, you don't remember his name. [[Go east]].
    

#### Rationale:

While the [(live:)](#macro_live) macro is versatile in providing time-based text updating, one of its common uses - checking if some variable has changed using [(if:)](#macro_if), and then displaying a hook and stopping the macro with [(stop:)](#macro_stop) - is rather cumbersome. This macro provides that functionality in a shorter form - the example above is roughly equivalent to:

    (cycling-link: bind _recall, "Dennis?", "Denver?", "Denzel?", "Duncan?", "Danny?", "Denton?")
    {(live: )[
        (if: time > 10s or _recall is 'Denton?')[
            No, you don't remember his name. [[Go east]].(stop: )
        ]
    ]}
    

#### Details:

This macro only takes a "when" [lambda](#type_lambda), which is like a "where" lambda but with "where" changed to "when" for readability purposes. This lambda doesn't have a temp variable before "when" - it doesn't iterate over anything, except, perhaps, moments in time.

Because (event:) hooks only run once, the [(stop:)](#macro_stop) macro is unnecessary here.

Currently, you **cannot** attach (event:) to a [command](#type_command) (such as in `(event: when $a is 1)(link-goto:"?")`). You have to wrap the command in a hook (such as `(event:when $a is 1)[(link-goto:"?")]`).

#### See also:

[(live:)](#macro_live), [(after:)](#macro_after), [(more:)](#macro_more)

Added in: 3.0.0

[](#macro_after)The (after: ) macro
-----------------------------------

### (after: _[Number](#type_number), \[Number\]_) → _[Changer](#type_changer)_

Hooks that have this [changer](#type_changer) attached will only be run once the given amount of time has passed since the passage was rendered. An optional second [number](#type_number) specifies that the player can speed up the delay by holding down a keyboard key or mouse button, or by touching the touch device.

#### Example usage:

This example makes 3 additional hooks appear, one by one. The delays can only be sped up if the passage has been visited before. The `time + 2s` idiom is a convenient way to express that each hook is displayed 2 seconds after the last one was displayed (as the `time` identifier tracks the time passed since the passage was rendered, not the containing hook).

    There she was. (after: 2s, (cond: visits > 0, 200ms, 0))[=
    Covered in fur, (after: time + 2s, (cond: visits > 0, 200ms, 0))[=
    sitting on all fours, (after: time + 2s, (cond: visits > 0, 200ms, 0))[=
    and howling at the moon.
    

#### Rationale:

This macro is a shorthand form of [(event:)](#macro_event) that only is given an amount of time to wait. `(after:2s)` is the same as `(event: when time > 2s)`. It is also similar to [(live:)](#macro_live), except that it only runs the hook at most once.

One significant difference this has over [(event:)](#macro_event) is that it can offer the player the ability to speed up transitions. Frequently asking the player to wait for timed delays can be detrimental to the pacing of a story, especially if they are revisiting earlier passages, and providing an option to skip or expedite them is often greatly appreciated.

#### Details:

Numbers given to macros such as (after:) can be suffixed with `ms` or `s` to indicate whether you mean milliseconds or seconds (see the article on number data for more information). If you give a bare number, the macro interprets it as milliseconds.

The optional second number given is an amount of milliseconds (or, if suffixed with `s`, seconds) to advance the transition. For each millisecond of the transition, Harlowe checks if a key or button is held, and if so, then it is advanced by the given number (in addition to the elapsed millisecond).

As of Harlowe 3.3.4, when testing your story in Debug Mode, you can alter the speed at which (after:) waits (so as to quickly advance the passage to an important part, or linger on an important part) by using the "Speed" dropdown in the Tools panel. If you change it to 0.5x, (after:) will wait twice as long as instructed: a 1s wait will behave as if it was 2s, and so forth. Changing it to 2x will half (after:)'s wait time, conversely. Note that this option will currently not affect the speed of transitions (using [(t8n-delay:)](#macro_t8n-delay) or [(t8n-time:)](#macro_t8n-time)).

A note about timing: due to browser security and resource limitations, modern browsers may arbitrarily increase the delay given to (after:) by about 5-10ms, based on how long the (after:) macro has been in the passage, and how hard the CPU is working. More importantly, if the browser tab becomes inactive (such as by the player switching to another tab), modern browsers will often increase the delay by over 1 second, or, if the tab is inactive for a long time, any arbitrary length of time it wishes! In short, there is **no guarantee** that the time interval given to (after:) will actually be the time that will elapse before the hook appears! Please use this macro with that limitation in mind.

#### See also:

[(live:)](#macro_live), [(event:)](#macro_event), [(more:)](#macro_more), [(transition-skip:)](#macro_transition-skip)

Added in: 3.2.0

[](#macro_after-error)The (after-error: ) macro
-----------------------------------------------

### (after-error: ) → _[Changer](#type_changer)_

A bug-specific event macro, this hides the hook and only causes it to run once an error occurs.

#### Example usage:

    (after-error:)[
        (dialog:"Sorry, folks, seems like I messed up.
    DM me on GregsGameMakingBungalow with a screenshot!")
    ]\
    (link:"Click here for an error")[Can't use (metadata: ) here!]
    

#### Rationale:

While you should generally test your story enough to be fairly certain that no error messages will occur, it can sometimes be difficult to be absolutely certain. As such, you may want to be prepared for the worst. If an error message does occur, you might want to show a custom message of your own to the player, instructing them to report the bug in your story, or giving them a chance to continue the story from a later passage. (You may want to use this in a "header" or "footer" tagged passage, so that this notification message may appear anywhere in the story.)

Alternatively, you may want to use it during testing, by combining it with the [(debug:)](#macro_debug) [command](#type_command) macro, so that the Debug Mode panel will pop up when the first error occurs, potentially letting testers obtain deeper information about the game's current state.

#### Details:

This will only display the attached hook at the moment an error message is displayed. If this is used inside a larger hook which only appears after an error is displayed, its attached hook won't appear until another error occurs.

Added in: 3.3.0

[](#macro_more)The (more: ) macro
---------------------------------

### (more: ) → _[Changer](#type_changer)_

Hooks that have this [changer](#type_changer) attached will only be run once no other exits - links and [(click:)](#macro_click)\-enchanted areas - are remaining in the passage, and will reveal "more" prose.

#### Example usage:

    (link:"Look at the duck.")[The duck drifts on the lake's surface.]
    (link:"Look at the clouds.")[Seems like rain, which is bad news for just one of you.]
    (more:)[You've looked at the duck, and the clouds.]
    

#### Rationale:

It's common to use hook-revealing macros like [(link:)](#macro_link) to provide elaboration on a scene, which the player can encounter in any order they wish. You may want to require each of these elaborations and details be visited by the player, only displaying the link to the next passage (or further story-setting material) after they have all been explored. You could implement this using `(event: when exits is 0)`, but this macro, (more:), provides a shorter and more readable alternative.

#### Details:

This is functionally identical to `(event: when exits is 0)`. For more information on what is and is not considered an "exit", see the article for the "exits" keyword.

If multiple (more:) elements are in the passage, they will appear in the order they appear. This may cause earlier ones to reveal links inside their hooks, and thus "block" the subsequent ones from revealing. In the case of `(more:)[You see [[an exit]] ahead.] (more:)[But you hear chuckling behind you...]`, the first (more:) hook will reveal a passage link, thus causing the second hook to not be revealed.

#### See also:

[(show:)](#macro_show), [(link-show:)](#macro_link-show)

Added in: 3.1.0

[](#macro_abs)The (abs: ) macro
-------------------------------

### (abs: _[Number](#type_number)_) → _Number_

This maths macro finds the absolute value of a [number](#type_number) (without the sign).

#### Example usage:

`(abs: -4)` produces 4.

Added in: 1.0.0

[](#macro_cos)The (cos: ) macro
-------------------------------

### (cos: _[Number](#type_number)_) → _Number_

This maths macro computes the cosine of the given [number](#type_number) of radians.

#### Example usage:

`(cos: 3.14159265)` produces -1.

[](#macro_exp)The (exp: ) macro
-------------------------------

### (exp: _[Number](#type_number)_) → _Number_

This maths macro raises Euler's [number](#type_number) to the power of the given number, and provides the result.

#### Example usage:

`(exp: 6)` produces approximately 403.

Added in: 1.0.0

[](#macro_log)The (log: ) macro
-------------------------------

### (log: _[Number](#type_number)_) → _Number_

This maths macro produces the natural logarithm (the base-e logarithm) of the given [number](#type_number).

#### Example usage:

`(log: (exp:5))` produces 5.

Added in: 1.0.0

[](#macro_log10)The (log10: ) macro
-----------------------------------

### (log10: _[Number](#type_number)_) → _Number_

This maths macro produces the base-10 logarithm of the given [number](#type_number).

#### Example usage:

`(log10: 100)` produces 2.

Added in: 1.0.0

[](#macro_log2)The (log2: ) macro
---------------------------------

### (log2: _[Number](#type_number)_) → _Number_

This maths macro produces the base-2 logarithm of the given [number](#type_number).

#### Example usage:

`(log2: 256)` produces 8.

Added in: 1.0.0

[](#macro_max)The (max: ) macro
-------------------------------

### (max: _...[Number](#type_number)_) → _Number_

This maths macro accepts [numbers](#type_number), and evaluates to the highest valued number.

#### Example usage:

`(max: 2, -5, 2, 7, 0.1)` produces 7.

Added in: 1.0.0

[](#macro_min)The (min: ) macro
-------------------------------

### (min: _...[Number](#type_number)_) → _Number_

This maths macro accepts [numbers](#type_number), and evaluates to the lowest valued number.

#### Example usage:

`(min: 2, -5, 2, 7, 0.1)` produces -5.

Added in: 1.0.0

[](#macro_pow)The (pow: ) macro
-------------------------------

### (pow: _[Number](#type_number), Number_) → _Number_

This maths macro raises the first [number](#type_number) to the power of the second number, and provides the result.

#### Example usage:

`(pow: 2, 8)` produces 256.

[](#macro_sign)The (sign: ) macro
---------------------------------

### (sign: _[Number](#type_number)_) → _Number_

This maths macro produces -1 when given a negative [number](#type_number), 0 when given 0, and 1 when given a positive number.

#### Example usage:

`(sign: -4)` produces -1.

Added in: 1.0.0

[](#macro_sin)The (sin: ) macro
-------------------------------

### (sin: _[Number](#type_number)_) → _Number_

This maths macro computes the sine of the given [number](#type_number) of radians.

#### Example usage:

`(sin: 3.14159265 / 2)` produces 1.

Added in: 1.0.0

[](#macro_sqrt)The (sqrt: ) macro
---------------------------------

### (sqrt: _[Number](#type_number)_) → _Number_

This maths macro produces the square root of the given [number](#type_number).

#### Example usage:

`(sqrt: 25)` produces 5.

Added in: 1.0.0

[](#macro_tan)The (tan: ) macro
-------------------------------

### (tan: _[Number](#type_number)_) → _Number_

This maths macro computes the tangent of the given [number](#type_number) of radians.

#### Example usage:

`(tan: 3.14159265 / 4)` produces approximately 1.

Added in: 1.0.0

[](#macro_go-to)The (go-to: ) macro
-----------------------------------

### (go-to: _[String](#type_string)_) → _[Command](#type_command)_

This [command](#type_command) stops passage code and sends the player to a new passage, starting a new turn as if a passage link was clicked. If the passage named by the [string](#type_string) does not exist, this produces an error.

#### Example usage:

`(go-to: "The Distant Future")`

#### Rationale:

There are plenty of occasions where you may want to instantly advance to a new passage without the player's volition. (go-to:) provides access to this ability.

(go-to:) can accept any expression which evaluates to a string. You can, for instance, go to a randomly selected passage by combining it with [(either:)](#macro_either) - `(go-to: (either: "Win", "Lose", "Draw"))`.

(go-to:) can be combined with [(link:)](#macro_link) to accomplish the same thing as [(link-goto:)](#macro_link-goto): `(link:"Enter the hole")[(go-to:"Falling")]` However, you can include other macros inside the hook to run before the (go-to:), such as [(set:)](#macro_set), [(put:)](#macro_put) or [(save-game:)](#macro_save-game).

#### Details:

You can attach [changers](#type_changer) like [(t8n-depart:)](#macro_t8n-depart) and [(t8n-arrive:)](#macro_t8n-arrive) to this to alter the transition animation used when (go-to:) activates. Other kinds of changers won't do anything, though.

If it is performed, (go-to:) will "halt" the passage and prevent any macros and text after it from running. So, a passage that contains:

    (set: $listen to "I love")
    (go-to: "Train")
    (set: $listen to it + " you")
    

will _not_ cause `$listen` to become `"I love you"` when it runs.

You should generally avoid using (go-to:) unconditionally in the passage - that is, avoid using it such that it would immediately run when the player enters, regardless of anything. This has a few side-effects: it makes it difficult to use [(undo:)](#macro_undo) to return to this passage, and it counts as a new turn for the "turns" identifier even though the player didn't do or see anything. You can use [(redirect:)](#macro_redirect) in place of (go-to:) to avoid these issues.

If you simply want to go back to the previous passage, forgetting the current turn, then you may use [(undo:)](#macro_undo).

#### See also:

[(link-goto:)](#macro_link-goto), [(undo:)](#macro_undo), [(redirect:)](#macro_redirect)

Added in: 1.0.0

[](#macro_redirect)The (redirect: ) macro
-----------------------------------------

### (redirect: _[String](#type_string)_) → _[Command](#type_command)_

This [command](#type_command) sends the player to a new passage. However, unlike [(goto:)](#macro_goto), this does _not_ start a new turn - undoing after this will send the player to the turn before the redirect occurred.

#### Example usage:

`(redirect: "Workdesk")`

#### Rationale:

[(go-to:)](#macro_go-to) is useful for transferring the player to a new passage after performing some interaction or waiting for some [(event:)](#macro_event), but is less useful for transferring the player from a passage unconditionally. Attempting to undo a turn, using [(undo:)](#macro_undo) or [(link-undo:)](#macro_link-undo), will simply cause the [(go-to:)](#macro_go-to) to activate again immediately, nullifying the attempt to undo the turn.

While it's possible to use [(display:)](#macro_display) in place of a [(go-to:)](#macro_go-to), displaying the next passage instead of navigating to it, there are a few problems: the displayed passage won't be the name produced by [(passage:)](#macro_passage), it won't be present in the [(history:)](#macro_history) [array](#type_array), the header and footer passages won't be re-run, and, of course, the text of the original passage remains onscreen.

(redirect:) exists as an alternative to [(go-to:)](#macro_go-to) that avoids these problems. Furthermore, a use of (redirect:) typically indicates to other readers of the code that the change of passages is for technical reasons, not for in-story reasons, so the meaning of the two is distinct.

#### Details:

When a (redirect:) macro is used, the departing passage (the one containing the (redirect:) call) remains in the [(history:)](#macro_history) array, and is still considered visited by `visits`. However, no additional turn will result, and `turns` will not be affected.

Also, temp variables that were [(set:)](#macro_set) in the departing passage will not be accessible in the new passage.

Transition [changers](#type_changer) that can be attached to [(go-to:)](#macro_go-to) can be attached to (redirect:), including [(t8n-depart:)](#macro_t8n-depart) and [(t8n-arrive:)](#macro_t8n-arrive).

If it is performed, (redirect:) will "halt" the passage and prevent any macros and text after it from running. So, a passage that contains:

    (set: $listen to "I love")
    (redirect: "Train")
    (set: $listen to it + " you")
    

will _not_ cause `$listen` to become `"I love you"` when it runs.

#### See also:

[(go-to:)](#macro_go-to), [(undo:)](#macro_undo)

Added in: 3.3.0

[](#macro_undo)The (undo: ) macro
---------------------------------

### (undo: _\[[String](#type_string)\]_) → _[Command](#type_command)_

This [command](#type_command) stops passage code and "undoes" the current turn, sending the player to the previous visited passage and forgetting any variable changes that occurred in this passage. You may provide an optional [string](#type_string) to display if undos aren't available.

#### Example usage:

`You scurry back whence you came... (after:2s)[(undo:)]` will undo the current turn after 2 seconds.

#### Rationale:

The [(go-to:)](#macro_go-to) macro sends players to different passages instantly. But, it's common to want to send players back to the passage they previously visited, acting as if this turn never happened. (undo:) provides this functionality.

By default, Harlowe offers a button in its sidebar that lets players undo at any time, going back to the beginning of the game session. However, if you wish to use this macro, and only permit undos in certain passages and occasions, you may remove the button by using [(replace:)](#macro_replace) on the ?sidebar in a header tagged passage.

#### Details:

You can attach [changers](#type_changer) like [(t8n-depart:)](#macro_t8n-depart) and [(t8n-arrive:)](#macro_t8n-arrive) to this to alter the transition animation used when (undo:) activates. Other kinds of changers won't do anything, though.

If undos aren't available (either due to this being the start of the story, or [(forget-undos:)](#macro_forget-undos) being used) then either the optional second string will be displayed (as markup) instead, or (if that wasn't provided) nothing will be displayed.

If the previous turn featured the use of [(redirect:)](#macro_redirect), (undo:) will take the player to the passage in which the turn started, before any [(redirect:)](#macro_redirect) macros were run.

Just like [(go-to:)](#macro_go-to), (undo:) will "halt" the passage and prevent any macros and text after it from running.

#### See also:

[(go-to:)](#macro_go-to), [(link-undo:)](#macro_link-undo), [(icon-undo:)](#macro_icon-undo)

Added in: 2.0.0

[](#macro_restart)The (restart: ) macro
---------------------------------------

### (restart: ) → _[Command](#type_command)_

Also known as: [(reload:)](#macro_reload)

When this [command](#type_command) is used, the player's browser will immediately attempt to reload the page, in effect restarting the entire story.

#### Example usage:

`(click:"Restart")[(restart:)]`

#### Details:

Normally, Harlowe stories will attempt to preserve their current game state across browser page reloads. This macro will suppress this behaviour, guaranteeing that the story restarts from the beginning.

In order to prevent an endless "restart loop", this macro can't be used in the first passatge of the story. Attempting to do so will cause an error.

Using (restart:) will _not_ erase any games that have been saved with [(save-game:)](#macro_save-game).

This command can't have [changers](#type_changer) attached - attempting to do so will produce an error.

#### See also:

[(icon-restart:)](#macro_icon-restart), [(forget-undos:)](#macro_forget-undos)

Added in: 1.0.0

[](#macro_ceil)The (ceil: ) macro
---------------------------------

### (ceil: _[Number](#type_number)_) → _Number_

This macro rounds the given [number](#type_number) upward to a whole number. If a whole number is provided, it returns the number as-is.

#### Example usage:

`(ceil: 1.1)` produces 2.

Added in: 1.0.0

[](#macro_floor)The (floor: ) macro
-----------------------------------

### (floor: _[Number](#type_number)_) → _Number_

This macro rounds the given [number](#type_number) downward to a whole number. If a whole number is provided, it returns the number as-is.

#### Example usage:

`(floor: 1.99)` produces 1.

Added in: 1.0.0

[](#macro_num)The (num: ) macro
-------------------------------

### (num: _[String](#type_string)_) → _[Number](#type_number)_

Also known as: [(number:)](#macro_number)

This macro converts [strings](#type_string) to [numbers](#type_number) by reading the digits in the entire string. It can handle decimal fractions and negative numbers. If any letters or other unusual characters appear in the number, it will result in an error.

#### Example usage:

`(num: "25")` results in the number `25`.

#### Rationale:

Unlike in Twine 1 and SugarCube, Twine 2 will only convert numbers into strings, or strings into numbers, if you explictly ask it to using macros such as this. This extra carefulness decreases the likelihood of unusual bugs creeping into stories (such as performing `"Eggs: " + 2 + 1` and getting `"Eggs: 21"`).

Usually, you will only work with numbers and strings of your own creation, but if you're receiving user input and need to perform arithmetic on it, this macro will be necessary.

#### See also:

[(str:)](#macro_str)

Added in: 1.0.0

[](#macro_random)The (random: ) macro
-------------------------------------

### (random: _[Number](#type_number), \[Number\]_) → _Number_

This macro produces a whole [number](#type_number) randomly selected between the two whole numbers, inclusive (or, if the second number is absent, then between 0 and the first number, inclusive).

#### Example usage:

`(random: 1,6)` simulates a six-sided die roll.

#### Details:

This is one of the features that uses Harlowe's pseudo-random number generator. If you use [(seed:)](#macro_seed) at the start of the story, the number will be predetermined based on the seed [string](#type_string), and how many other random macros and features have been used before it.

#### See also:

[(either:)](#macro_either), [(shuffled:)](#macro_shuffled), [(seed:)](#macro_seed)

Added in: 1.0.0

[](#macro_round)The (round: ) macro
-----------------------------------

### (round: _[Number](#type_number)_) → _Number_

This macro rounds the given [number](#type_number) to the nearest whole number - downward if its decimals are smaller than 0.5, and upward otherwise. If a whole number is provided, it returns the number as-is.

#### Example usage:

`(round: 1.5)` produces 2.

Added in: 1.0.0

[](#macro_trunc)The (trunc: ) macro
-----------------------------------

### (trunc: _[Number](#type_number)_) → _Number_

This macro rounds the given [number](#type_number) towards zero. This "truncates" the fractional portion of the number, removing it and leaving just the whole portion.

#### Example usage:

`(trunc: 1.5)` produces 1. `(trunc: -3.9)` produces 3.

Added in: 3.2.0

[](#macro_p)The (p: ) macro
---------------------------

### (p: _...[String](#type_string) or [Datatype](#type_datatype)_) → _Datatype_

Also known as: [(pattern:)](#macro_pattern)

Creates a [string](#type_string) pattern, a special kind of [datatype](#type_datatype) that can match complex string structures. The pattern matches the entire sequence of strings or datatypes given, in order.

#### Example usage:

*   `"Rentar Ihrno" matches (p:(p-many:1,6,alnum),whitespace,(p-many:1,6,alnum))` checks if the string contains 1-6 alphanumeric letters, followed by a space, followed by 1-6 alphanumeric letters.
*   `(set:$upperFirst to (p:uppercase,(p-many:lowercase)))(set:$upperFirst-type $name to "Edgar")` creates a custom datatype, $upperFirst, and creates a typed variable using it, called $name.
*   `(unpack: $roadName into (p:str,(p-either:'St','Rd','Ln','Ave','Way')-type _roadTitle))` extracts either "St", "Rd", "ln", "Ave", or "Way" from the end of the $roadName string, putting it in \_roadTitle, while producing an error if such an ending isn't in $roadName.
*   `(p:"$", digit, ...digit) matches "$21000"` checks if the right side is a string consisting of "$" followed by one or more digits.

#### Rationale:

The `contains` operator is useful for searching strings for words, characters or substrings, but it's noticeably limited when you want to make more sophisticated queries about a string's contents. For instance, what if you want to check if a string begins with any uppercase letter, followed by only lowercase letters? Or, what if you want to check if a string contains any words inside quotation `"` marks? You could design and write a cumbersome [(loop:)](#macro_loop) hook to compute these using many `contains` checks, but there's a much easier way to do so - rather than check if a string `contains` a substring, check if it `matches` a pattern that precisely describes what a valid substring should look like.

A suite of macros, starting with the (p:) macro, are available to construct string patterns. Give the (p:) macro an ordered sequence of strings (like `"Mr."`) or datatypes (like `whitespace`, `alnum`, `newline`, `uppercase`, `lowercase`, or other string pattern macro calls), and it will produce a datatype that, when used with `matches` or `is a`, will match a string that exactly fits the given sequence. `(p: "The", (p-many:whitespace), "End")` will match the strings "The End", "The End", "The End", and so forth. `(p: uppercase, "1", (p-opt:"A"))` will match "A1", "B1", "A1A", "C1", and so forth. Spread datatypes can be used to represent zero or more of a given string datatype: `...uppercase` means "zero or more uppercase letters", `...whitespace` means "zero or more whitespace characters" and so forth - though datatypes that represent multiple characters, such as `...str`, is the same as `str`.

You may notice a similarity between these patterns and [array](#type_array)/[datamap](#type_datamap) patterns. [Arrays](#type_array) and datamaps can be inspected using the `matches` operator when combined with datatypes and the data structure macros [(a:)](#macro_a) and [(dm:)](#macro_dm) - `(a:(a:num,num),(a:num,num)) matches $array` checks that the array in $array contains two arrays that each contain two [numbers](#type_number), all in one line of code. You can't do this with strings, though, because a string can only hold characters, not arbitrary data like datatypes. So, these macros provide that functionality for strings, too.

String patterns can be used with [(unpack:)](#macro_unpack) to unpack parts of a string into multiple variables at once. For instance, `(set: (p: (p-opt:"Dr. "), (p: alnum-type _firstName, whitespace, alnum-type _lastName)-type _fullName) to "Dr. Iris Cornea")` creates three variables, \_firstName, \_lastName and \_fullName, from a single string, and sets them to "Iris", "Cornea", and "Iris Cornea", respectively.

#### Details:

When (p:), and some (but not all) macros like [(p-many:)](#macro_p-many), are given multiple values, it is treated as a **sequence**. Strings are matched to sequences as follows: first, Harlowe checks if the start of the string matches the first value in the pattern. If it matches, then Harlowe checks if the start of the remaining portion of the string matches the next value in the pattern. When every part of the string has been matched to every one of the values, then the whole string is considered a match for the whole sequence.

For example, in the case of `"egg orb" matches (p:"egg",whitespace,"orb")`: 0. Harlowe checks if the start of `"egg orb"` matches `"egg"`. It does, so the portion that matches `"egg"` is excluded, leaving `" orb"`. 0. Harlowe checks if the start of `" orb"` matches `whitespace`. It does, so the portion that matches `whitespace` is excluded, leaving `"orb"`. 0. Harlowe checks if the start of `"orb"` matches `"orb"`. It does. As this means every part of the string has been matched to every one of the values, the entire statement `"egg orb" matches (p:"egg",whitespace,"orb")` evaluates to [boolean](#type_boolean) `true`.

By default, datatypes produced with this macro (string patterns) will only match strings that entirely match the pattern. `(p: ":", (p-opt:"-"),")")` will match `":)"` and `":-)"`, but not match `" :-) "` or `"Sorry :)"`. You can use the `str` datatype inside (p:) to represent any amount of unimportant characters. Thus, by rewriting the preceding pattern as `(p:str, ":", (p-opt:"-"),")", str)`, you can produce a datatype that matches any string that contains ":)" or ":-)" anywhere inside it. Alternatively, `(p:":", (p-opt:"-"),")", str)` can match just strings that start with ":)" or ":-)", and `(p:str, ":", (p-opt:"-"),")")` for strings that end with ":)" or ":-)". If you'd rather only compare the start or end of strings in a case-by-case basis, you can instead take the pattern and see if it `matches` the `start` or `end` of those strings - `(p: ":", (p-opt:"-"),")") matches "Sorry :)"'s end`.

Don't forget that you can save individual parts of a string pattern into variables, and use them to construct larger patterns afterward! For instance, `(set: $HTTP to (p: "http", (p-opt:"s"), "://"))` sets $HTTP to a string pattern that matches "http://" or "https://". With that, you can write checks like `(if: $userURL matches (p: $HTTP, "lightside.college/", str))` and `(if: $userURL matches (p:$HTTP, "sunglasses.darkweb/", str))` later in your story, without needing to rewrite the $HTTP pattern each time.

#### See also:

[(p-either:)](#macro_p-either), [(p-opt:)](#macro_p-opt), [(p-many:)](#macro_p-many), [(p-not-before:)](#macro_p-not-before)

Added in: 3.2.0.

[](#macro_p-either)The (p-either: ) macro
-----------------------------------------

### (p-either: _...[String](#type_string) or [Datatype](#type_datatype)_) → _Datatype_

Also known as: [(pattern-either:)](#macro_pattern-either)

Creates a [string](#type_string) pattern that matches either of the single strings or [datatypes](#type_datatype) given.

#### Example usage:

*   `"Lovegyre" matches (p: (p-either: ...$emotions), "gyre")` checks if the string is any of the strings in $emotions (which is assumed to be an [array](#type_array)), followed by "gyre".
*   `(set: (p-either:"","Hugged","Charmed","Dazed")-type $statusEffect to "")` creates a variable that can only be set to either "Hugged", "Charmed", "Dazed" or the empty string.

#### Details:

This is part of a suite of string pattern macros. Consult the [(p:)](#macro_p) article to learn more about string patterns, special user-created datatypes that can match very precise kinds of strings.

Like [(p-not:)](#macro_p-not), and unlike the other macros, each of this macro's arguments represents a different possible match, **not** parts of a single sequence. If you need a possibility to be a sequence of values, you can nest the [(p:)](#macro_p) macro inside this one, such as in `(p-either: (p:str," Crystal"), "N/A")`.

You can use this macro, along with the spread `...` operator, to succinctly check if the string matches one in a set of characters. For example, to check if a string is a single bracket character, you can write `(p-either: ..."[](){}")`, where each bracket character is in a string that gets spread out into single characters.

Note that while you can use this as the datatype of a [TypedVar](#type_typedvar) (as shown previously), you can't nest TypedVars inside this - `(set: (p:"A",(p-either:digit-type _d, "X")) to "AX")` will cause an error, because it's ambiguous whether, when the `digit-type _d` TypedVar doesn't match, the variable \_d should not be set at all (which is rather counterintuitive) or if it should be set to an empty string (which contradicts its stated `digit-type` restriction anyway).

#### See also:

[(p:)](#macro_p), [(p-ins:)](#macro_p-ins), [(p-opt:)](#macro_p-opt), [(p-many:)](#macro_p-many)

Added in: 3.2.0.

[](#macro_p-opt)The (p-opt: ) macro
-----------------------------------

### (p-opt: _...[String](#type_string) or [Datatype](#type_datatype)_) → _Datatype_

Also known as: [(pattern-opt:)](#macro_pattern-opt), [(p-optional:)](#macro_p-optional), [(pattern-optional:)](#macro_pattern-optional)

Creates a [string](#type_string) pattern that either matches the sequence of strings or [datatypes](#type_datatype) given, or matches the empty string.

#### Example usage:

*   `(p-opt:"Default Name")` matches either the empty string, or the string "Default Name".
*   `(p: $upperFirst, (p-opt:"?"))` matches strings that match the string pattern in $upperFirst, but which might also end in a question mark.

#### Details:

This is part of a suite of string pattern macros. Consult the [(p:)](#macro_p) article to learn more about string patterns, special user-created datatypes that can match very precise kinds of strings.

When you use this in [(unpack:)](#macro_unpack), such as `(unpack: "Connie" into (p:(p-opt:"Lord")-type _isLord, str-type _name))`, and the optional pattern doesn't match, the variable will be set to the empty string "".

Note that while you can use this as the datatype of a [TypedVar](#type_typedvar) (as shown previously), you can't nest TypedVars inside this, because it is an optional match - `(set: (p:"A",(p-opt:digit-type _d)) to "A")` will cause an error, because it's ambiguous whether, whenever the enclosing (p-opt:) doesn't match, the variable \_d should not be set at all (which is rather counterintuitive) or if it should be set to an empty string (which contradicts its stated `digit-type` restriction anyway).

#### See also:

[(p:)](#macro_p), [(p-ins:)](#macro_p-ins), [(p-either:)](#macro_p-either), [(p-many:)](#macro_p-many)

Added in: 3.2.0.

[](#macro_p-many)The (p-many: ) macro
-------------------------------------

### (p-many: _\[[Number](#type_number)\], \[Number\], ...[String](#type_string) or [Datatype](#type_datatype)_) → _Datatype_

Also known as: [(pattern-many:)](#macro_pattern-many)

Creates a [string](#type_string) pattern that matches the given sequence of strings and [datatypes](#type_datatype), repeated a given minimum and maximum [number](#type_number) of times - or, if these aren't provided, repeated any number of times.

#### Example usage:

*   `(p: uppercase, (p-many:lowercase))` produces a datatype that matches strings only if they consist of an uppercase letter followed by one or more lowercase letters.
*   `(set: (p-many:3,12,alnum)-type $weakPassword to "ABC123")` creates a variable that is only able to hold strings that consist of between 3 and 12 alphanumeric characters.

#### Details:

This is part of a suite of string pattern macros. Consult the [(p:)](#macro_p) article to learn more about string patterns, special user-created datatypes that can match very precise kinds of strings.

When this macro's output is given to [(p:)](#macro_p), it will attempt to match (and thus exclude) the greatest permitted amount of repetitions in the string. So, `(p:'g',(p-many:whitespace,'r'),'b')` will match the string `'g r r r r r rb'` because the (p-many:) macro will match " r r r r r r", instead of potentially only matching " r".

The first optional number represents the minimum number of times the sequence is permitted to repeat within the string. The second optional number represents the maximum number of times. If only the minimum number is present, then it will also serve as the maximum number, limiting the matched strings to only those that match the sequence exactly that many times.

If no optional numbers are given, the default minimum number of matches is 1. If you want the possibility of matching zero occurrences (i.e. this pattern is optional) then either combine this with [(p-opt:)](#macro_p-opt), or (preferably) simply give the number 0 as the first argument.

If the maximum number is smaller than the minimum number, or if either of them are negative or fractional, an error will be produced.

When you use this in [(unpack:)](#macro_unpack) with a minimum of 0, such as `(unpack: "No results." into (p-many: 0, newline)-type _newlines)`, and there are zero matches, the variable will be set to the empty string "".

Note that while you can use this as the datatype of a [TypedVar](#type_typedvar) (as shown previously), you can't nest TypedVars inside this if the minimum is 0, because it then becomes an optional match - `(set: (p:"A",(p-many:0, 8, digit-type _d)) to "A")` will cause an error, because it's ambiguous whether, whenever the enclosing (p-many:) matches zero occurrecnes, the variable \_d should not be set at all (which is rather counterintuitive) or if it should be set to an empty string (which contradicts its stated `digit-type` restriction anyway).

#### See also:

[(p:)](#macro_p), [(p-ins:)](#macro_p-ins), [(p-either:)](#macro_p-either), [(p-opt:)](#macro_p-opt), (p-many:)

Added in: 3.2.0.

[](#macro_p-not)The (p-not: ) macro
-----------------------------------

### (p-not: _...[String](#type_string) or [Datatype](#type_datatype)_) → _Datatype_

Also known as: [(pattern-not:)](#macro_pattern-not)

Given any [number](#type_number) of single characters or non-spread [datatypes](#type_datatype), this creates a [string](#type_string) pattern that matches any one character that doesn't match any of those values.

#### Example usage:

*   `(p-not: digit, ".")` matches any one string character except digits (matched by the `digit` datatype) or a "." character.
*   `(p-not:..."aeiou")` matches any one string character except a lowercase vowel. Note that using the spread `...` syntax to spread strings into their individual characters is recommended when using this macro.
*   `(p:"[", (p-many:(p-not:"]")), "]")` matches "\[" followed by any number of characters except "\]", followed by a closing "\]".

#### Details:

This is part of a suite of string pattern macros. Consult the [(p:)](#macro_p) article to learn more about string patterns, special user-created datatypes that can match very precise kinds of strings.

Unlike many pattern datatype macros, this will error if given any datatype that could match 0 or 2+ characters. So, passing `str`, `empty`, any spread datatype like `...digit`, or any string with more or less than 1 character, will produce an error.

When you use this in [(unpack:)](#macro_unpack), such as `(unpack: "-" into (p-many:(p-not:'s'))-type _a)`, and the optional pattern doesn't match, the variable will be set to the empty string "".

While you can use this as the datatype of a [TypedVar](#type_typedvar), you can't nest TypedVars inside this.

#### See also:

[(p:)](#macro_p), [(p-opt:)](#macro_p-opt), [(p-not-before:)](#macro_p-not-before)

Added in: 3.2.0.

[](#macro_p-before)The (p-before: ) macro
-----------------------------------------

### (p-before: _...[String](#type_string) or [Datatype](#type_datatype)_) → _Datatype_

Also known as: [(pattern-before:)](#macro_pattern-before)

Creates a [string](#type_string) pattern that matches the empty string, _only_ it is followed by the given sequence of strings or [datatypes](#type_datatype). This is best used inside another pattern macro like [(p:)](#macro_p), alongside a pattern to match, where it serves as an extra restriction on that pattern (making it match only if it's "not before" something).

#### Example usage:

    (str-find: (p:(p-many:digit), (p-before:(p-either:"AM","PM"))), "I arrived home at 42nd Street at 11PM and was in bed by 2AM.")
    

This example produces `(a:"11","2")`. Without the (p-before:) call around the [(p-either:)](#macro_p-either) call, this would produce `(a:"11PM","2AM")`.

#### Rationale:

While you can already select a continuous span of text by simply providing multiple values to [(p:)](#macro_p) and the like, this can be inconvenient for macros such as [(str-find:)](#macro_str-find) and [(str-replaced:)](#macro_str-replaced) - if you only want to find a subset of the match (such as just the digits before "AM" or "PM" in the above example), you'll have to strip the unwanted portion off afterward using a dataname like `1stto2ndlast`. As an alternative, you can use (p-before:) in the pattern to specify a portion of the pattern that should be checked, but not included in the match substring itself.

#### Details:

This is part of a suite of string pattern macros. Consult the [(p:)](#macro_p) article to learn more about string patterns, special user-created datatypes that can match very precise kinds of strings.

While you can use this as the datatype of a [TypedVar](#type_typedvar), this won't accomplish much, since, as explained, it only matches the empty string. Additionally, you can't nest TypedVars inside this.

#### See also:

[(p:)](#macro_p), [(p-opt:)](#macro_p-opt), [(p-not:)](#macro_p-not)

Added in: 3.3.0.

[](#macro_p-not-before)The (p-not-before: ) macro
-------------------------------------------------

### (p-not-before: _...[String](#type_string) or [Datatype](#type_datatype)_) → _Datatype_

Also known as: [(pattern-not-before:)](#macro_pattern-not-before)

Creates a [string](#type_string) pattern that matches the empty string, _unless_ it is followed by the given sequence of strings or [datatypes](#type_datatype). This is best used inside another pattern macro like [(p:)](#macro_p), alongside a pattern to match, where it serves as an extra restriction on that pattern (making it match only if it's "not before" something).

#### Example usage:

*   `(str-replaced: (p: "$", (p-not-before: digit)), "", _text)` produces a copy of the string in the temp variable \_text, but with all dollar signs removed, _except_ where the dollar sign is before a digit.
*   `(p-many:(p-either:(p: "0", (p-not-before:"0")), (p:"1", (p-not-before:"1")), whitespace))` matches a string with sequences of _alternating_ 0's and 1's, plus whitespace. It matches `"0 0 01 10101 101"` but not `"0 0 01 10101 110"`.

#### Details:

This is part of a suite of string pattern macros. Consult the [(p:)](#macro_p) article to learn more about string patterns, special user-created datatypes that can match very precise kinds of strings.

While you can use this as the datatype of a [TypedVar](#type_typedvar), this won't accomplish much, since, as explained, it only matches the empty string. Additionally, you can't nest TypedVars inside this.

#### See also:

[(p:)](#macro_p), [(p-opt:)](#macro_p-opt), [(p-not:)](#macro_p-not)

Added in: 3.3.0.

[](#macro_p-start)The (p-start: ) macro
---------------------------------------

### (p-start: _...[String](#type_string) or [Datatype](#type_datatype)_) → _Datatype_

Also known as: [(pattern-start:)](#macro_pattern-start)

Identical to [(p:)](#macro_p), except that when used with macros that search for substrings in [strings](#type_string), like [(str-find:)](#macro_str-find), [(str-replaced:)](#macro_str-replaced) and [(trimmed:)](#macro_trimmed), this only matches if the given strings or [datatypes](#type_datatype) appear at the very start of the string.

#### Example usage:

*   `(str-replaced: (p-start:"Ben:"), "Former Ben:", _text)` produces a copy of the string in the temp variable \_text, but if the string begins with "Ben:", it is changed to "Former Ben:". This does not affect any instances of "Ben:" elsewhere in the string.
*   `(str-find: (p-start: (p-many:(p-either: digit, "A"))), _text)` examines the string in \_text, and, if it begins with either digits or the letter A, produces an [array](#type_array) with a string of those digits. Otherwise, it produces an empty array.
*   `(trimmed: (p-start: whitespace), _text)` trims off whitespace from the start of \_text, but not the end.

#### Details:

This is part of a suite of string pattern macros. Consult the [(p:)](#macro_p) article to learn more about string patterns, special user-created datatypes that can match very precise kinds of strings.

When this datatype is used with the `matches` operator, it is essentially identical to [(p:)](#macro_p), in the sense that `matches` compares an entire string with an entire pattern, rather than just a portion.

#### See also:

[(p-end:)](#macro_p-end), [(p-before:)](#macro_p-before)

Added in: 3.3.0.

[](#macro_p-end)The (p-end: ) macro
-----------------------------------

### (p-end: _...[String](#type_string) or [Datatype](#type_datatype)_) → _Datatype_

Also known as: [(pattern-start:)](#macro_pattern-start)

Identical to [(p:)](#macro_p), except that when used with macros that search for substrings in [strings](#type_string), like [(str-find:)](#macro_str-find), [(str-replaced:)](#macro_str-replaced) and [(trimmed:)](#macro_trimmed), this only matches if the given strings or [datatypes](#type_datatype) appear at the very end of the string.

#### Example usage:

*   `(str-replaced: (p-end: ...newline), "\n", _text)` produces a copy of the string in the temp variable \_text, but if the string ends with many newlines, they are replaced with a single newline. This does not affect multiple newlines elsewhere in the string.
*   `(trimmed: (p-end: ...whitespace), _text)` trims off whitespace from the end of \_text, but not the start.

#### Details:

This is part of a suite of string pattern macros. Consult the [(p:)](#macro_p) article to learn more about string patterns, special user-created datatypes that can match very precise kinds of strings.

When this datatype is used with the `matches` operator, it is essentially identical to [(p:)](#macro_p), in the sense that `matches` compares an entire string with an entire pattern, rather than just a portion.

#### See also:

[(p-start:)](#macro_p-start), [(p-before:)](#macro_p-before)

Added in: 3.3.0.

[](#macro_p-ins)The (p-ins: ) macro
-----------------------------------

### (p-ins: _...[String](#type_string) or [Datatype](#type_datatype)_) → _Datatype_

Also known as: [(p-insensitive:)](#macro_p-insensitive), [(pattern-ins:)](#macro_pattern-ins), [(pattern-insensitive:)](#macro_pattern-insensitive)

Creates a [string](#type_string) pattern that matches the sequence of strings or [datatypes](#type_datatype) given, case-insensitively.

#### Example usage:

*   `"Hocus pocus" matches (p-ins:"hocus", (p-opt:" "), "pocus")` checks if the magic words match the pattern, regardless of any letter's capitalisation.
*   `(unpack: "Scp-991" into (p:(p-ins:"SCP-"), ...digit-type _codeNum))` uses [(unpack:)](#macro_unpack) to extract "991" from the right-side string, checking if it matched the given prefix case-insensitively first.

#### Details:

This is part of a suite of string pattern macros. Consult the [(p:)](#macro_p) article to learn more about string patterns, special user-created datatypes that can match very precise kinds of strings.

When other patterns are given to this, they are treated as if they are case-insensitive. This means that, if `(p:"Opus ", (p-either:digit,"Magnum"))` is stored in the variable $opus, then `(p-ins: $opus)` will create a datatype that can match "opus 1", "OPUS 2", "Opus Magnum" and so forth, even though $opus can't.

When the two case-sensitive datatypes `uppercase` and `lowercase` are given to this, they are treated as if they are `anycase`.

When typed variables are used in string patterns, such as in `(p-ins: "Side ", (p-either:"A","B")-type _letter)`, the variable's type may sometimes appear to contradict the case-insensitivity imposed by an enclosing (p-ins:) - if that pattern is matched with "side a", then can "a" be stored in a `(p-either:"A","B")-type` variable?. Harlowe resolves this as follows: when a typed variable is placed inside (p-ins:), its type is wrapped in a (p-ins:) itself. So, \_letter in the preceding example is bound to `(p-ins: (p-either:"A","B"))-type` data, instead of just `(p-either:"A","B")-type` data.

#### See also:

[(p:)](#macro_p), [(p-opt:)](#macro_p-opt), [(p-many:)](#macro_p-many), [(p-either:)](#macro_p-either)

Added in: 3.2.0.

[](#macro_dialog)The (dialog: ) macro
-------------------------------------

### (dialog: _\[[Bind](#type_bind)\], [String](#type_string) or [CodeHook](#type_codehook), ...String_) → _[Command](#type_command)_

Also known as: [(alert:)](#macro_alert)

A [command](#type_command) that, when used, displays a pop-up dialog box with the given [string](#type_string) or [codehook](#type_codehook) displayed, and a [number](#type_number) of button-shaped links labeled with the remaining other strings. If an optional bound variable is provided, that variable is updated to match the pressed button.

#### Example usage:

*   `(dialog: [Beyond this point, things get serious. Grab a snack and buckle up.], "Sure.")`
*   `(dialog: bind $defund, "Which department will you defund?", "Law Enforcement", "Education", "Health", "Public Housing")`

#### Rationale:

It may seem counterintuitive for such a heavily text-based medium as a hypertext story to have a need for dialog boxes, but they can serve as places to include auxiliary text that's contextually separate from the passage's themes, such as brief updates on characters, tasks and goals, or momentary asides on incidental world details. because they darken and cover the screen when they appear, they are also very useful for displaying and offering especially climactic actions or decisions, such as an irreversible ethical choice.

While there are other dialog box-producing macros, namely [(prompt:)](#macro_prompt) and [(confirm:)](#macro_confirm), those are meant purely for input-gathering purposes. This is designed to be the most general-use dialog-producing macro, allowing any number of links, and optionally binding the clicked link to a variable.

#### Details:

There's no difference in behaviour when you provide this with a codehook instead of a string. That being said, codehooks are recommended because their internal markup is correctly coloured in the Twine editor, and because `"` or `'` symbols don't need to be escaped (using `\`) inside them.

The dialog that is produced is implemented entirely in HTML. User CSS stylesheets can be used to style it, and [(enchant:)](#macro_enchant) macros that affect ?Link can affect the dialog links.

In Harlowe versions prior to 3.1.0, this macro used the built-in `alert()` function of the browser, but to support certain newer browsers that no longer offer this function, the macro was changed.

If no button strings are given, a single link reading "OK" will be used. Giving empty strings for any of the links will cause an error.

When the dialog is on-screen, the entire game is essentially "paused" - until it is dismissed, no further computations are performed, links can't be clicked (except links inside the dialog text itself), [(click:)](#macro_click) enchantments shouldn't work, and [(live:)](#macro_live) and [(event:)](#macro_event) macros shouldn't fire.

For obvious reasons, you cannot supply a two-way bound variable to this macro. Doing so will cause an error to result.

From version 3.2.0 on, it is possible to attach [changers](#type_changer) to this command. `(t8n:'slide-up')+(text-rotate-x:25)(dialog:"EMAIL SENT!")`, for instance, produces a dialog that's tilted upward, and which slides upward when it appears.

#### See also:

[(cycling-link:)](#macro_cycling-link), [(prompt:)](#macro_prompt), [(confirm:)](#macro_confirm)

Added in: 1.0.0

[](#macro_confirm)The (confirm: ) macro
---------------------------------------

### (confirm: _[String](#type_string) or [CodeHook](#type_codehook), \[String\], \[String\]_) → _[Boolean](#type_boolean)_

When this macro is evaluated, a pop-up dialog box is shown with the given [string](#type_string) displayed, as well as two links (whose text can also be provided) to confirm or cancel whatever action or fact the string tells the player. When it is submitted, it evaluates to the [boolean](#type_boolean) `true` if the confirm link had been clicked, and `false` if the cancel link had.

#### Example usage:

`(set: $makeCake to (confirm: "Transform your best friend into a cake?", "Do not", "Please do"))`

#### Details:

The dialog that is produced is implemented entirely in HTML. User CSS stylesheets can be used to style it, and [(enchant:)](#macro_enchant) macros that affect ?Link can affect the dialog links.

The order of the two optional strings is: the cancel link text, followed by the confirm link text. If one or neither of these is provided, the defaults for each are "Cancel" and "OK". Giving a blank string for the cancel link will cause that link to disappear. Giving an empty string for the confirm link will cause an error (because that link must be clickable for the dialog to work).

In Harlowe versions prior to 3.1.0, this macro used the built-in `confirm()` function of the browser, but to support certain newer browsers that no longer offer this function, the macro was changed.

When the dialog is on-screen, the entire game is essentially "paused" - until it is dismissed, no further computations are performed, links can't be clicked (except links inside the dialog text itself), [(click:)](#macro_click) enchantments shouldn't work, and [(live:)](#macro_live) and [(event:)](#macro_event) macros shouldn't fire.

#### See also:

[(alert:)](#macro_alert), [(prompt:)](#macro_prompt), [(checkbox:)](#macro_checkbox)

Added in: 1.0.0

[](#macro_prompt)The (prompt: ) macro
-------------------------------------

### (prompt: _[String](#type_string) or [CodeHook](#type_codehook), String, \[String\], \[String\]_) → _String_

When this macro is evaluated, a browser pop-up dialog box is shown with the first [string](#type_string) displayed, a text entry box containing the second string (as a default value), a confirm link and a cancel link. If the confirm link is clicked, it evaluates to the string in the text entry box. If "Cancel" is clicked, it evaluates to the default value regardless of the entry box's contents.

#### Example usage:

`(set: $name to (prompt: [Your name, please:], "Frances Spayne", "Don't care", "Confirm"))`

#### Details:

The dialog that is produced is implemented entirely in HTML. User CSS stylesheets can be used to style it, and [(enchant:)](#macro_enchant) macros that affect ?Link can affect the dialog links.

The order of the two optional strings is: the cancel link text, followed by the confirm link text. If one or neither of these is provided, the defaults for each are "Cancel" and "OK". Giving a blank string for the cancel link will cause that link to disappear. Giving an empty string for the confirm link will cause an error (because that link must be clickable for the dialog to work).

In Harlowe versions prior to 3.1.0, this macro used the built-in `prompt()` function of the browser, but to support certain newer browsers that no longer offer this function, the macro was changed.

When the dialog is on-screen, the entire game is essentially "paused" - until it is dismissed, no further computations are performed, links can't be clicked (except links inside the dialog text itself), [(click:)](#macro_click) enchantments shouldn't work, and [(live:)](#macro_live) and [(event:)](#macro_event) macros shouldn't fire.

A note about player-submitted strings: because most string-printing functionality in Harlowe (the [(print:)](#macro_print) macro, and putting variable names in bare passage prose) will attempt to render markup inside the strings, a player may cause disaster for your story by placing Harlowe markup inside a (prompt:) string, which, when displayed, produces either an error or some effect that undermines the story. In order to display those strings safely, you may use either the verbatim markup, the [(verbatim:)](#macro_verbatim) [changer](#type_changer), or [(verbatim-print:)](#macro_verbatim-print).

#### See also:

[(alert:)](#macro_alert), [(confirm:)](#macro_confirm), [(input-box:)](#macro_input-box)

Added in: 1.0.0

[](#macro_replace)The (replace: ) macro
---------------------------------------

### (replace: _...[HookName](#type_hookname) or [String](#type_string)_) → _[Changer](#type_changer)_

Creates a [command](#type_command) which you can attach to a hook, and replace target destinations with the hook's contents. The targets are either text [strings](#type_string) within the current passage, or hook references.

Not to be confused with [(str-replaced:)](#macro_str-replaced).

#### Example usage:

This example changes the words "categorical catastrophe" to "**dog**egorical **dog**astrophe"

    A categorical catastrophe!
    (replace: "cat")[**dog**]
    

This example changes the `|face>` and `|heart>` hooks to read "smile":

    A |heart>[song] in your heart, a |face>[song] on your face.
    (replace: ?face, ?heart)[smile]
    

#### Rationale:

A common way to make your stories feel dynamic is to cause their text to modify itself before the player's eyes, in response to actions they perform. You can check for these actions using macros such as [(link:)](#macro_link), [(click:)](#macro_click) or [(live:)](#macro_live), and you can make these changes using macros such as (replace:).

Using (replace:) is only one way of providing this dynamism, however - the [(show:)](#macro_show) macro also offers similar functionality. See that macro's article for an explanation of when you might prefer to use it over (replace:), and vice-versa.

#### Details:

(replace:) lets you specify a target, and a block of text to replace the target with. The attached hook (which specifies the replacement text) will not be rendered normally - thus, you can essentially put (replace:) commands anywhere in the passage text without interfering much with the passage's visible text.

If the given target is a string, then every instance of the string in the current passage is replaced with a copy of the hook's contents. If the given target is a hook reference, then only named hooks with the same name as the reference will be replaced with the hook's contents. Use named hooks when you want only specific places in the passage text to change.

If the target doesn't match any part of the passage, nothing will happen. This is to allow you to place (replace:) commands in `footer` tagged passages, if you want them to conditionally affect certain named hooks throughout the entire game, without them interfering with other passages.

(replace:) (and its variations) cannot affects hooks or text that haven't been printed yet - if the (replace:) runs at the same time that the passage is appearing (as in, it isn't inside a hook that's delayed [(live:)](#macro_live), [(link:)](#macro_link), [(show:)](#macro_show) or similar macros), and a hook or line of text appears after it in the passage, the macro won't replace its contents even if it's a valid target. For example: `(replace: "cool")[hot] cool water` won't work because the (replace:) runs immediately, but `cool water (replace: "cool")[hot]` and `(event: when time > 5)[(replace: "cool")[hot]] cool water` will.

As a result of the above, putting these in `header` tagged passages instead of `footer` tagged passages won't do much good, as they are printed before the rest of the passage.

If you wish to use (replace:) to replace a hook with a copy of its own text, to undo the effects of other (replace:), [(append:)](#macro_append), [(prepend:)](#macro_prepend) or other macros on it, consider using the [(rerun:)](#macro_rerun) macro instead.

#### See also:

[(append:)](#macro_append), [(prepend:)](#macro_prepend), [(show:)](#macro_show), [(rerun:)](#macro_rerun), [(more:)](#macro_more), [(replace-with:)](#macro_replace-with)

Added in: 1.0.0

[](#macro_append)The (append: ) macro
-------------------------------------

### (append: _...[HookName](#type_hookname) or [String](#type_string)_) → _[Changer](#type_changer)_

A variation of [(replace:)](#macro_replace) which adds the attached hook's contents to the end of each target, rather than replacing it entirely.

#### Example usage:

*   `(append: "Emily")[, my maid]` adds ", my maid " to the end of every occurrence of "Emily".
*   `(append: ?dress)[ from happier days]` adds " from happier days" to the end of any hook tagged with `|dress>`.

#### Rationale:

As this is a variation of [(replace:)](#macro_replace), the rationale for this macro can be found in that macro's description. This provides the ability to append content to a target, building up text or amending it with an extra sentence or word, changing or revealing a deeper meaning.

#### See also:

[(replace:)](#macro_replace), [(prepend:)](#macro_prepend), [(show:)](#macro_show), [(rerun:)](#macro_rerun), [(more:)](#macro_more), [(append-with:)](#macro_append-with)

Added in: 1.0.0

[](#macro_prepend)The (prepend: ) macro
---------------------------------------

### (prepend: _...[HookName](#type_hookname) or [String](#type_string)_) → _[Changer](#type_changer)_

A variation of [(replace:)](#macro_replace) which adds the attached hook's contents to the beginning of each target, rather than replacing it entirely.

#### Example usage:

*   `(prepend: "Emily")[Miss ]` adds "Miss " to the start of every occurrence of "Emily".
*   `(prepend: ?dress)[my wedding ]` adds "my wedding " to the start of any hook tagged with `|dress>`.

#### Rationale:

As this is a variation of [(replace:)](#macro_replace), the rationale for this macro can be found in that macro's description. This provides the ability to prepend content to a target, adding preceding sentences or words to a text to change or reveal a deeper meaning.

#### See also:

[(replace:)](#macro_replace), [(append:)](#macro_append), [(show:)](#macro_show), [(rerun:)](#macro_rerun), [(more:)](#macro_more), [(prepend-with:)](#macro_prepend-with)

Added in: 1.0.0

[](#macro_replace-with)The (replace-with: ) macro
-------------------------------------------------

### (replace-with: _[String](#type_string) or [CodeHook](#type_codehook)_) → _[Changer](#type_changer)_

A counterpart to [(append-with:)](#macro_append-with) and [(prepend-with:)](#macro_prepend-with), this replaces the entirety of the attached hook with the contents of the given [string](#type_string) (or code hook).

#### Example usage:

*   `(set: $vitalInfoChanger to it + (replace-with:"**This sentence may contain mature content, so we've excised it from your mind.**"))` causes the [changer](#type_changer) in $vitalInfoChanger, which may have been used previously in the story, to replace the hooks' text with a censorship notification.
*   `(set: $locked to (replace-with:[(text-color:red)[Locked Content] - Beat the game to unlock]))` creates a changer in a variable named $locked which, when attached to a hook, replaces it with `[(text-color:red)[Locked Content] - Beat the game to unlock]`. This is mostly similar to passing the string `"(text-color:red)[Locked Content] - Beat the game to unlock"`, but the contents of the code hook are syntax-highlighted in the passage editor, making it easier to read.

#### Rationale:

This changer macro may seem unintuitive and without obvious purpose - what is the point of a changer that changes a hook so drastically that nothing is left of its original text, and the player never sees it? However, there are some minor cases where such an effect is helpful: being able to pre-fill an empty hook with a given line of text not only saves you from having to write out that text multiple times (similar to saving that text in a variable by itself and using [(print:)](#macro_print) or a bare variable to display it), but also allows additional changers to be combined with it, and for [(replace:)](#macro_replace), [(append:)](#macro_append) and [(prepend:)](#macro_prepend) macros to modify it afterward, by targeting the specific name of the attached hook. And, you can, at a later point in a story, add this to an existing changer to cause hooks it formerly changed to display different text content.

#### Details:

This changer, when attached to a hook, will never allow the prose it replaces to be run - `(replace-with:"")[(set:$x to 1)]` will not allow the enclosed [(set:)](#macro_set) macro to be run before it is replaced.

This macro can't be used with [(enchant:)](#macro_enchant) or [(change:)](#macro_change) - attempting to do so will produce an error. You'll want to instead use [(replace:)](#macro_replace), which accomplishes the same effect.

#### See also:

[(append:)](#macro_append), [(prepend:)](#macro_prepend), [(append-with:)](#macro_append-with), [(prepend-with:)](#macro_prepend-with), [(show:)](#macro_show)

Added in: 3.2.0

[](#macro_append-with)The (append-with: ) macro
-----------------------------------------------

### (append-with: _[String](#type_string) or [CodeHook](#type_codehook)_) → _[Changer](#type_changer)_

Creates a [changer](#type_changer) that, when attached to a hook, adds the contents of the given [string](#type_string) (or code hook) to the end of the hook.

#### Example usage:

*   `(set: $cutie to (append-with:"~♡")+(color:red+white))` creates a changer that causes any attached hook to become pink and have `~♡` at the end.
*   `(set: $dateStamp to (append-with:[<br>Posted on: $date]))` creates a changer which appends `<br>Posted on: $date` to the end of the attached hook. This is mostly identical to providing the string `"<br>Posted on: $date"`, but the contents of the code hook are syntax-highlighted in the passage editor, making it easier to read.
*   `(set: $mattias to (prepend-with:'MATTIAS:"')+(append-with:'"'))` creates a changer that causes any attached hook to be surrounded with `MATTIAS:"` and `"`, which would be useful for character dialogue.

#### Rationale:

Some lines of prose you write in your story will tend to have identical endings, be they punctuation, dialogue tags, or otherwise, which you may tire of repetitively writing. This macro and [(prepend-with:)](#macro_prepend-with) allow you to automatically attach text without having to manually write it in full - simply save this changer to a variable, and attach it to the hook. While, it should be noted, you can use [(append:)](#macro_append) inside of a "footer" tagged passage to also automate this hook modification, this can, at times, be more convenient than having to modify a separate passage. Also, this macro is especially useful when combined with other changers, such as [(text-style:)](#macro_text-style), [(font:)](#macro_font) or [(text-colour:)](#macro_text-colour).

#### Details:

The way this changer amends the text of the hook is similar to how [(append:)](#macro_append) amends hooks. To be precise, the full text of the hook is rendered before it is amended with these changers. This means that, among other things, code structures can't cross the boundary between the appended text and the hook - `(append-with:"</b>")[<b>Bold]` will NOT work as it seems - the `<b>` tag will not be matched with the `</b>` in the appended text.

Multiple (append-with:) and [(prepend-with:)](#macro_prepend-with) changers can be added together. When this combined changer is attached to a hook, each constituent changer is applied in left-to-right order. So, `(append-with:" (5 Favs)")+(append-with:" (2 Reblogs)")[my teeth ate themselves]` will result in the hook reading `my teeth ate themselves (5 Favs) (2 Reblogs)`.

This macro can't be used with [(enchant:)](#macro_enchant) or [(change:)](#macro_change) - attempting to do so will produce an error. You'll want to instead use [(append:)](#macro_append) or [(prepend:)](#macro_prepend), which accomplish the same effect of amending a hook or text occurrence remotely.

#### See also:

[(append:)](#macro_append), [(replace:)](#macro_replace), [(prepend-with:)](#macro_prepend-with), [(replace-with:)](#macro_replace-with), [(show:)](#macro_show)

Added in: 3.2.0

[](#macro_prepend-with)The (prepend-with: ) macro
-------------------------------------------------

### (prepend-with: _[String](#type_string) or [CodeHook](#type_codehook)_) → _[Changer](#type_changer)_

Creates a [changer](#type_changer) that, when attached to a hook, adds the contents of a given [string](#type_string) (or code hook) to the start of the hook.

#### Example usage:

*   `(set: $commandPrompt to (prepend-with:">")+(font:"Courier"))` creates a changer which makes the attached hook use a monospace font, with > placed at the start.
*   `(set: $dateStamp to (prepend-with:[**$location, $date.**<br>]))` creates a changer which prepends `**$location, $date.**<br>` to the start of the attached hook. This is mostly identical to providing the string `"**$location, $date.**<br>"`, but the contents of the code hook are syntax-highlighted in the passage editor, making it easier to read.
*   `(set: $mattias to (prepend-with:'MATTIAS:"')+(append-with:'"'))` creates a changer that causes any attached hook to be surrounded with `MATTIAS:"` and `"`, which would be useful for character dialogue.

#### Rationale:

Some lines of prose you write in your story will tend to have identical beginnings, be they punctuation, dialogue tags, or otherwise, which you may tire of repetitively writing. This macro and (prepend-with:) allow you to automatically attach text without having to manually write it in full - simply save this changer to a variable, and attach it to the hook. While, it should be noted, you can use [(prepend:)](#macro_prepend) inside of a "footer" tagged passage to also automate this hook modification, this can, at times, be more convenient than having to modify a separate passage. Also, this macro is especially useful when combined with other changers, such as [(text-style:)](#macro_text-style), [(font:)](#macro_font) or [(text-colour:)](#macro_text-colour).

#### Details:

The way this changer amends the text of the hook is similar to how [(prepend:)](#macro_prepend) amends hooks. To be precise, the full text of the hook is rendered before it is amended with these changers. This means that, among other things, code structures can't cross the boundary between the prepended text and the hook - `(prepend-with:"<b>")[Bold</b>]` will NOT work as it seems - the `<b>` tag will not be matched with the `</b>`.

Multiple [(append-with:)](#macro_append-with) and (prepend-with:) changers can be added together. When this combined changer is attached to a hook, each constituent changer is applied in left-to-right order. So, `(prepend-with:"RE:")+(prepend-with:"FWD:")[ARE YOUR EYES UPSIDE-DOWN?]` will result in the hook reading `RE:FWD:ARE YOUR EYES UPSIDE-DOWN?`.

This macro can't be used with [(enchant:)](#macro_enchant) or [(change:)](#macro_change) - attempting to do so will produce an error. You'll want to instead use [(append:)](#macro_append) or [(prepend:)](#macro_prepend), which accomplish the same effect of amending a hook or text occurrence remotely.

#### See also:

[(append:)](#macro_append), [(replace:)](#macro_replace), (prepend-with:), [(replace-with:)](#macro_replace-with), [(show:)](#macro_show)

Added in: 3.2.0

[](#macro_rerun)The (rerun: ) macro
-----------------------------------

### (rerun: _...[HookName](#type_hookname)_) → _[Command](#type_command)_

Reruns hooks, restoring them to their original contents, and running the macros within them an additional time.

#### Example usage:

    |1>[You drew a (either:...(range:2,10), "Jack", "Queen", "King", "Ace") of (either:"Hearts","Clubs","Spades","Diamonds").]
    (link-rerun:"Shuffle and draw.")[(t8n:"dissolve")(rerun:?1)]
    

#### Rationale:

You may often use macros like [(replace:)](#macro_replace) or [(append:)](#macro_append) to alter the contents of hooks in your passages. But, you may also want an easy way of reversing these changes, to restore the hook to its original state as it had been written in your passage's code. This macro provides a means of doing so without having to reload or revisit the entire passage.

In addition to re-running hooks elsewhere in the passage, you can produce some useful effects by having a (rerun:) affect its containing hook:

    |1>[You're nude in the changing room, with only your reflection for company.
    (link:"Dress up")[You dress yourself up. Regrettably, you both look worse. (link:"Take off clothes")[(rerun:?1)]]]
    

Furthermore, as (rerun:) causes macros in the hook to re-run themselves, it can be used to "update" hooks to match the present game state:

    (set:$energy to 100)
    |1>[Shields: $energy % (text-color:red)[( - $dmg %)]]
    (link-rerun: "Take the punch")[(set:$dmg to (either:1,2,3), $energy to it - $dmg)You get punched square in the cockpit!(rerun: ?1)]
    

#### Details:

(rerun:) will use the hook's original source _as it was written_ in the passage source - any alterations done to it using [(replace:)](#macro_replace) and other such macros will not be considered.

(rerun:) will re-run every hook with the given name. To only re-run a specific hook, you can use the possessive syntax, as usual: `(rerun: ?daydream's 1st)`.

You can attach a transition [changer](#type_changer), such as [(transition:)](#macro_transition), [(transition-time:)](#macro_transition-time), [(transition-delay:)](#macro_transition-delay), and the rest, to this [command](#type_command). Doing so will cause that transition to be applied to the hook.

(rerun:), unlike [(show:)](#macro_show), will not work on hidden hooks until they become visible using [(show:)](#macro_show) or [(link-show:)](#macro_link-show).

If you give ?page to (rerun:), an error will result. If you wish to "rerun" the entire page, consider using [(restart:)](#macro_restart).

If you give ?passage to (rerun:), the entire passage's code will be re-rendered. This will _not_ change the value of the `visits` keyword, or count as an additional turn in any way.

If you want to rerun a hook multiple times based on elapsed real time, use the [(live:)](#macro_live) macro.

#### See also:

[(replace:)](#macro_replace), [(show:)](#macro_show), [(more:)](#macro_more), [(live:)](#macro_live), [(animate:)](#macro_animate)

Added in: 3.2.0

[](#macro_load-game)The (load-game: ) macro
-------------------------------------------

### (load-game: _[String](#type_string)_) → _[Command](#type_command)_

This [command](#type_command) attempts to load a saved game from the given slot, ending the current game and replacing it with the loaded one. This causes the passage to change.

#### Example usage:

    {(if: (saved-games: ) contains "Slot A")[
      (link: "Load game")[(load-game:"Slot A")]
    ]}
    

#### Details:

Just as [(save-game:)](#macro_save-game) exists to store the current game session, (load-game:) exists to retrieve a past game session, whenever you want. This command, when given the [string](#type_string) name of a slot, will attempt to load the save, completely and instantly replacing the variables and move history with that of the save, and going to the passage where that save was made.

This macro assumes that the save slot exists and contains a game, which you can check by seeing if `(saved-games: ) contains` the slot name before running (load-game:).

This command can't have [changers](#type_changer) attached - attempting to do so will produce an error.

To avoid a potential infinite loop, whereby (load-game:) loads a game whose current passage contains another (load-game:) call, an error will occur if (load-game:) is run immediately after a game is loaded. ("Immediately" means that the second (load-game:) call occurs with no time delay, such as by [(after:)](#macro_after), or with no player input, such as by [(link:)](#macro_link).)

In the event that the saved data exists, but contains an error - for instance, if it refers to a passage which doesn't exist in this story, which could happen if one version of the story is used to save it, and another is used to open it - then a polite dialog box will appear asking the reader whether or not the data should be deleted. An example of such a dialog is below.

> Sorry to interrupt... The story tried to load saved data, but there was a problem. The data refers to a passage named 'example', but it isn't in this story.  
>   
> That data might have been saved from a different version of this story. Should I delete it?  
> (Type 'delete' and choose OK to delete it.)  
>   
> Either way, the story will now continue without loading the data.

#### See also:

[(save-game:)](#macro_save-game), [(saved-games:)](#macro_saved-games)

Added in: 1.0.0

[](#macro_save-game)The (save-game: ) macro
-------------------------------------------

### (save-game: _[String](#type_string), \[String\]_) → _[Boolean](#type_boolean)_

This macro saves the current game's state in browser storage, in the given save slot, and including a special filename. It can then be restored using [(load-game:)](#macro_load-game).

#### Example usage:

    ##Chapter 2: The Mortuary
    (save-game:"Slot A","Chapter 2 start")
    

#### Rationale:

Many web games use browser cookies to save the player's place in the game. Harlowe allows you to save the game, including all of the variables that were [(set:)](#macro_set) or [(put:)](#macro_put), and the passages the player visited, to the player's browser storage.

(save-game:) is a single operation that can be used as often or as little as you want to. You can include it on every page; You can put it at the start of each "chapter"; You can put it inside a [(link:)](#macro_link) hook, such as

    {(link:"Save game")[
      (if:(save-game:"Slot A"))[
        Game saved!
      ](else: )[
        Sorry, I couldn't save your game.
      ]
    ]}
    

and let the player choose when to save.

#### Details:

(save-game:)'s first [string](#type_string) is a slot name in which to store the game. You can have as many slots as you like. If you only need one slot, you can just call it, say, `"A"`, and use `(save-game:"A")`. You can tie them to a name the player gives, such as `(save-game: $playerName)`, if multiple players are likely to play this game - at an exhibition, for instance.

Giving the saved game a file name is optional, but allows that name to be displayed by finding it in the [(saved-games:)](#macro_saved-games) [datamap](#type_datamap). This can be combined with a [(load-game:)](#macro_load-game)[(link:)](#macro_link) to clue the players into the save's contents:

    (link: "Load game: " + ("Slot 1") of (saved-games: ))[
      (load-game: "Slot 1")
    ]
    

(save-game:) evaluates to a [boolean](#type_boolean) - true if the game was indeed saved, and false if the browser prevented it (because they're using private browsing, their browser's storage is full, or some other reason). Since there's always a possibility of a save failing, you should use [(if:)](#macro_if) and [(else:)](#macro_else) with (save-game:) to display an apology message in the event that it returns false (as seen above).

Using the [(forget-undos:)](#macro_forget-undos) macro will, as a side effect of its turn-erasing functionality, reduce the size of the data saved to browser localStorage by (save-game:). However, you should _not_ use that macro solely on the hunch that it provides performance benefits for your story. See the [(forget-undos:)](#macro_forget-undos) macro's article for slightly more details.

#### See also:

[(load-game:)](#macro_load-game), [(saved-games:)](#macro_saved-games), [(forget-undos:)](#macro_forget-undos)

Added in: 1.0.0

[](#macro_saved-games)The (saved-games: ) macro
-----------------------------------------------

### (saved-games: ) → _[Datamap](#type_datamap)_

This returns a [datamap](#type_datamap) containing the names of currently occupied save game slots.

#### Example usage:

*   `(print: (saved-games: )'s "File A")` prints the name of the save file in the slot "File A".
*   `(if: (saved-games: ) contains "File A")` checks if the slot "File A" is occupied.

#### Rationale:

For a more thorough description of the save file system, see the [(save-game:)](#macro_save-game) article. This macro provides a means to examine the current save files in the user's browser storage, so you can decide to print "Load game" links if a slot is occupied, or display a list of all of the occupied slots.

#### Details:

Each name in the datamap corresponds to an occupied slot name. The values are the file names of the files occupying the slot.

The following is an **example**. If a game was saved using `(save-game:"File A", "The Mortuary")`, and there were no other saved games, the datamap produced by (saved-games:) would look like this.

Name

Value

File A

The [string](#type_string) "The Mortuary"

Changing the datamap does not affect the save files - after this macro has created the datamap, it is simply inert data.

#### See also:

[(save-game:)](#macro_save-game), [(load-game:)](#macro_load-game)

Added in: 1.0.0

[](#macro_hidden)The (hidden: ) macro
-------------------------------------

### (hidden: ) → _[Changer](#type_changer)_

Produces a [changer](#type_changer) that can be attached to hooks to hide them.

#### Example usage:

    Don't you recognise me? (hidden:)|truth>[I'm your OC, brought to life!]
    

The above example is the same as

    Don't you recognise me? |truth)[I'm your OC, brought to life!]
    

#### Rationale:

While there is a way to succinctly mark certain named hooks as hidden, by using parentheses instead of `<` or `>` marks, this macro provides a clear way for complex changers to hide their attached hooks. This works well when added to the [(hook:)](#macro_hook) macro, for instance, to specify a hook's name and visibility in a single changer.

This macro is essentially identical in behaviour to `(if:false)`, but reads better.

This macro takes no values - each changer value it produces is the same.

#### See also:

[(if:)](#macro_if), [(hook:)](#macro_hook), [(show:)](#macro_show)

Added in: 2.0.0

[](#macro_hide)The (hide: ) macro
---------------------------------

### (hide: _...[HookName](#type_hookname)_) → _[Command](#type_command)_

Hides a hook, or hooks, that were already visible, without fully erasing them or their contained macro calls.

#### Example usage:

    The exam paper sits before you.
    |2>[(link-rerun:"Peek at palm")[(show:?1)(hide:?2)]]
    |1)[It says:
    (random:10,90)0m, (random:2,10)deg, 1/(either:2,3,4)
    (link-rerun:"Hide palm")[(hide:?1)(show:?2)]]
    

#### Rationale:

There are times when you need to remove a hook from visibility, but don't want its contents to be forgotten or re-run, as would happen if you used [(replace:)](#macro_replace). The (hide:) macro simply makes a hook invisible, keeping its contents stored as they are until you use [(show:)](#macro_show) to reveal them again.

#### Details:

(hide:) will hide every hook with the given names. To only hide a specific hook, you can use the possessive syntax, as usual: `(hide: ?1's 1st)`.

If you want to remove the hook's contents all together, and re-create it anew later, consider using [(replace:)](#macro_replace) and [(rerun:)](#macro_rerun) rather than [(show:)](#macro_show) and (hide:).

If you give ?page to (hide:), an error will result - the entire page can't ever be "hidden".

This [command](#type_command) can't have [changers](#type_changer) attached - attempting to do so will produce an error.

#### See also:

[(show:)](#macro_show), [(rerun:)](#macro_rerun), [(replace:)](#macro_replace)

Added in: 3.2.0

[](#macro_show)The (show: ) macro
---------------------------------

### (show: _...[HookName](#type_hookname)_) → _[Command](#type_command)_

Reveals hidden hooks, running the code within if it's not been shown yet.

#### Example usage:

    |fan)[The overhead fan spins lazily.]
    
    (link:"Turn on fan")[(t8n:"dissolve")(show:?fan)]
    

#### Rationale:

The purpose of hidden hooks is, of course, to eventually show them - and this macro is how you show them. You can use this [command](#type_command) inside a [(link:)](#macro_link), trigger it in real-time with a [(live:)](#macro_live) macro, or anywhere else. You can also re-reveal a hook that had been hidden with [(hide:)](#macro_hide), but any macros in that hook won't be re-run.

#### Using (show:) vs [(replace:)](#macro_replace):

There are different reasons for using hidden hooks and (show:) instead of [(replace:)](#macro_replace). For your stories, think about whether the prose being revealed is part of the "main" text of the passage, or is just an aside. In neatly-coded stories, the main text should appear early in a passage's code, as the focus of the writer's attention.

When using [(replace:)](#macro_replace), the replacement prose is written far from its insertion point. This can improve readability when the insertion point is part of a long paragraph or sentence, and the prose is a minor aside or amendment, similar to a footnote or post-script, that would clutter the paragraph were it included inside. Additionally, [(replace:)](#macro_replace) can be used in a "header" or "footer" tagged passage to affect certain named hooks throughout the story.

    You turn away from her, facing the grandfather clock, its [stern ticking]<1| filling the tense silence.
    
    (click-replace: ?1)[echoing, hollow ticking]
    

When using (show:), the hidden hook's position is fixed in the passage prose. This can improve readability when the hidden hook contains a lot of the "main" text of a passage, which provides vital context and meaning for the rest of the text.

    I don't know where to begin... |1)[The weird state of my birth, the prophecy made centuries ago,
    my first day of school, the day of the meteors, the day I awoke my friends' powers... so many strands in
    the tapestry of my tale, and no time to unravel them.] ...so for now I'll start with when we fell down the hole.
    
    (link:"Where, indeed?")[(show:?1)]
    

But, there aren't any hard rules for when you should use one or the other. As a passage changes in the writing, you should feel free to change between one or the other, or leave your choice as-is.

#### Details:

(show:) will reveal every hook with the given name. To only reveal a specific hook, you can use the possessive syntax, as usual: `(show: ?shrub's 1st)`.

You can attach a transition [changer](#type_changer), such as [(transition:)](#macro_transition), [(transition-time:)](#macro_transition-time), [(transition-delay:)](#macro_transition-delay), and the rest, to this command. Doing so will cause that transition to be applied to the hook.

Much like [(replace:)](#macro_replace), (show:) cannot affects hooks or text that haven't been printed yet - if the (show:) runs at the same time that the passage is appearing (as in, it isn't inside a hook that's delayed by [(live:)](#macro_live), [(link:)](#macro_link), [(event:)](#macro_event) or similar macros), and a hook or line of text appears after it in the passage, the macro won't replace its contents even if it's a valid target. For example: `(show:?fence)|fence)[A white picket fence.]` won't work because the (show:) runs immediately.

If you provide to (show:) a hook which is already visible, nothing will happen - no error will be produced. If you provide to (show:) a hook that had been visible, but was hidden with [(hide:)](#macro_hide), then the hook will reappear, but its macros won't be re-run. If you wish to re-run an already visible hook, use [(rerun:)](#macro_rerun). Note that hooks whose visible contents have been replaced with nothing, such as via `(replace: ?1)[]`, are still considered "visible".

If you give ?page to (show:), an error will result - the entire page can't ever be "hidden".

If you wish to reveal a hook after a [number](#type_number) of other links have been clicked and removed, such as those created by [(link-reveal:)](#macro_link-reveal) or [(click:)](#macro_click), you may find the [(more:)](#macro_more) macro to be convenient.

#### See also:

[(hidden:)](#macro_hidden), [(replace:)](#macro_replace), [(rerun:)](#macro_rerun), [(more:)](#macro_more), [(animate:)](#macro_animate)

Added in: 2.0.0

[](#macro_icon-undo)The (icon-undo: ) macro
-------------------------------------------

### (icon-undo: _\[[String](#type_string)\], \[String\]_) → _[Command](#type_command)_

Creates an icon, similar to those in the sidebar, that, if visible and clicked, undoes the current turn, returning to the previous passage, as if by [(undo:)](#macro_undo). It is not visible if undos aren't available.

#### Example usage:

*   `(replace:?sidebar)[(icon-undo: )(size:2)[(str-repeated:$flowers + 1, "✿ ")]]` alters the sidebar such that there is only an undo button, followed by a [number](#type_number) of `✿` symbols equal to the number in $flowers plus 1. The space separating each florette symbol allows it to word-wrap normally. This would best be used in a "header" or "footer" tagged passage.
*   `(icon-undo:"👈")` creates an element that uses 👈 as its icon instead of the default.
*   `(icon-undo:"Undo the turn")` creates an element with the label "Undo the turn" under it.
*   `(icon-undo:"👈", "Undo the turn")` combines both of the above.

#### Rationale:

By default, each passage in a Harlowe story features a narrow sidebar to the left, housing "Undo" and "Redo" menu icons. However, using the [(replace:)](#macro_replace), [(append:)](#macro_append) or [(prepend:)](#macro_prepend) [changers](#type_changer) with the ?sidebar [HookName](#type_hookname), it is possible to dynamically change the sidebar, inserting or replacing its contents with any kind of prose. To that end, it is useful to be able to recreate the "Undo" and "Redo" menu icons exactly as they were, in case an earlier operation performed on the sidebar had removed them.

#### Details:

Of course, you can use this in normal passage prose, if you wish - they are merely [commands](#type_command), just like [(link-goto:)](#macro_link-goto) or [(print:)](#macro_print).

If you wish to change the icon to a different symbol, you may provide a [string](#type_string) containing a single character to this macro. If none is given, the default symbol is ↶ (in HTML, `&#8630;`).

You may also provide a string that contains a label for the icon. This label must have more than one character in it (so that it isn't confused with the optional icon string) and will be placed beneath the icon. The label's contents will NOT be interpreted as Harlowe markup, so everything in it will be used verbatim for the label. This is because, unlike links, the label isn't considered part of passage prose.

If both strings given to this macro have more than one character in them, an error will result.

This command creates an element that uses the same default CSS styling as the sidebar's icons: a `<tw-icon>` holding a glyph of text at 66px font size, with 0.2 opacity that changes to 0.4 when hovered over.

Like all sidebar icons, these will automatically hide themselves when they cannot be clicked, leaving a conspicuous space. In the case of the "Undo" icon, it will be hidden if it's the first turn of the game, and there is nothing to undo - or if [(forget-undos:)](#macro_forget-undos) is used to prevent undos. If this is used in a passage, and [(forget-undos:)](#macro_forget-undos) is used later in the passage to prevent undoing, then this will automatically, instantly hide itself.

#### See also:

[(icon-redo:)](#macro_icon-redo), [(undo:)](#macro_undo), [(link-undo:)](#macro_link-undo), [(click-undo:)](#macro_click-undo)

Added in: 3.2.0

[](#macro_icon-redo)The (icon-redo: ) macro
-------------------------------------------

### (icon-redo: _\[[String](#type_string)\], \[String\]_) → _[Command](#type_command)_

Creates an icon, similar to those in the sidebar, that, if visible and clicked, "re-does" a turn that was undone. It is only visible if a turn has been undone.

#### Example usage:

*   `(replace:?sidebar)[(b4r:"solid")+(b4r-color:gray)+(corner-radius:12)(icon-undo: )(b4r:"solid")+(b4r-color:gray)+(corner-radius:12)(icon-redo: )]` alters the sidebar such that the "Undo" and "Redo" icons have rounded borders around them.
*   `(icon-redo:"👉")` creates an element that uses 👉 as its icon instead of the default.
*   `(icon-redo:"Redo the turn")` creates an element with the label "Redo the turn" under it.
*   `(icon-redo:"👉", "Redo the turn")` combines both of the above.

#### Rationale:

By default, each passage in a Harlowe story features a narrow sidebar to the left, housing "Undo" and "Redo" menu icons. However, using the [(replace:)](#macro_replace), [(append:)](#macro_append) or [(prepend:)](#macro_prepend) [changers](#type_changer) with the ?sidebar [HookName](#type_hookname), it is possible to dynamically change the sidebar, inserting or replacing its contents with any kind of prose. To that end, it is useful to be able to recreate the "Undo" and "Redo" menu icons exactly as they were, in case an earlier operation performed on the sidebar had removed them.

#### Details:

Of course, you can use this in normal passage prose, if you wish - they are merely [commands](#type_command), just like [(link-goto:)](#macro_link-goto) or [(print:)](#macro_print).

If you wish to change the icon to a different symbol, you may provide a [string](#type_string) containing a single character to this macro. If none is given, the default symbol is ↷ (in HTML, `&#8631;`).

You may also provide a string that contains a label for the icon. This label must have more than one character in it (so that it isn't confused with the optional icon string) and will be placed beneath the icon. The label's contents will NOT be interpreted as Harlowe markup, so everything in it will be used verbatim for the label. This is because, unlike links, the label isn't considered part of passage prose.

If both strings given to this macro have more than one character in them, an error will result.

This command creates an element that uses the same default CSS styling as the sidebar's icons: a `<tw-icon>` holding a glyph of text at 66px font size, with 0.2 opacity that changes to 0.4 when hovered over.

Like all sidebar icons, these will automatically hide themselves when they cannot be clicked, leaving a conspicuous space. In the case of the "Redo" icon, it will be hidden if this is the latest turn of the game, and there is nothing to "re-do".

#### See also:

[(icon-undo:)](#macro_icon-undo)

Added in: 3.2.0

[](#macro_icon-fullscreen)The (icon-fullscreen: ) macro
-------------------------------------------------------

### (icon-fullscreen: _\[[String](#type_string)\], \[String\]_) → _[Command](#type_command)_

Creates an icon, similar to those in the sidebar, that, if visible and clicked, toggles fullscreen mode on or off.

#### Example usage:

*   `(prepend:?sidebar)[(icon-fullscreen: )]` adds a fullscreen icon to the sidebar, above the "undo" and "redo" icons. This would best be used in a "header" or "footer" tagged passage.
*   `(icon-fullscreen:"▢")` creates an element that uses ▢ as its icon instead of the default.
*   `(icon-fullscreen:"Fullscreen")` creates an element with the label "Fullscreen" under it.
*   `(icon-fullscreen:"▢", "Fullscreen")` combines both of the above.

#### Rationale:

By default, each passage in a Harlowe story features a narrow sidebar to the left, housing "Undo" and "Redo" menu icons. However, other functions may be desirable to have available to the player at all times, such as the capability to toggle fullscreen mode in the browser. While you could place a [(link-fullscreen:)](#macro_link-fullscreen) or [(checkbox-fullscreen:)](#macro_checkbox-fullscreen) in your passage prose, placing the icon produced by this macro is a slightly more concise solution that fits with the use of the sidebar for view utility [commands](#type_command).

#### Details:

Of course, you can use this in normal passage prose, if you wish - they are merely commands, just like [(link-goto:)](#macro_link-goto) or [(print:)](#macro_print).

If you wish to change the icon to a different symbol, you may provide a [string](#type_string) containing a single character to this macro. If none is given, the default symbol is ⛶ (in HTML, `&#9974;`).

You may also provide a string that contains a label for the icon. This label must have more than one character in it (so that it isn't confused with the optional icon string) and will be placed beneath the icon. The label's contents will NOT be interpreted as Harlowe markup, so everything in it will be used verbatim for the label. This is because, unlike links, the label isn't considered part of passage prose.

If both strings given to this macro have more than one character in them, an error will result.

This command creates an element that uses the same default CSS styling as the sidebar's icons: a `<tw-icon>` holding a glyph of text at 66px font size, with 0.2 opacity that changes to 0.4 when hovered over.

When activated, this will make the page's `<html>` element be the fullscreen element, _not_ `<tw-story>`. This is because, in most browsers, removing the fullscreen element from the page, however briefly, will deactivate fullscreen mode. Since the `(enchant:)` macro, when given ?Page, will often need to wrap `<tw-story>` in another element, those macro calls will deactivate fullscreen mode if `<tw-story>` was the fullscreen element. So, if you have edited the compiled HTML to add elements before and after it, such as a navigation bar, that will remain visible while the story is in fullscreen mode. Additionally, this means that the Debug Mode panel is still visible when fullscreen mode is activated.

If the browser reports to Harlowe that fullscreen mode is unavailable, then the icon will be hidden, leaving a conspicuous space.

#### See also:

[(link-fullscreen:)](#macro_link-fullscreen), [(checkbox-fullscreen:)](#macro_checkbox-fullscreen)

Added in: 3.2.0

[](#macro_icon-restart)The (icon-restart: ) macro
-------------------------------------------------

### (icon-restart: _\[[String](#type_string)\]_) → _[Command](#type_command)_

Creates an icon, similar to those in the sidebar, that, if visible and clicked, reloads the whole page, restarting the story from the beginning.

#### Example usage:

`(replace:?sidebar)[(icon-restart: )]` replaces the sidebar with just the "reload" icon.

*   `(icon-restart:"⟲")` creates an element that uses F2; as its icon instead of the default.
*   `(icon-restart:"Restart")` creates an element with the label "Restart" under it.
*   `(icon-restart:"⟲", "Restart")` combines both of the above.

#### Rationale:

By default, each passage in a Harlowe story features a narrow sidebar to the left, housing "Undo" and "Redo" menu icons. However, other functions may be desirable to have available to the player at all times, such as an option to restart the story from the beginning. This would be best suited to short stories with a high density of random or branching content, such as a story with dozens of options that ends after a certain [number](#type_number) of turns, or a procedurally generated puzzle with a lot of dead-ends.

#### Details:

Of course, you can use this in normal passage prose, if you wish - they are merely [commands](#type_command), just like [(link-goto:)](#macro_link-goto) or [(print:)](#macro_print).

If you wish to change the icon to a different symbol, you may provide a [string](#type_string) containing a single character to this macro. If none is given, the default symbol is ⟲ (in HTML, `&#10226;`).

You may also provide a string that contains a label for the icon. This label must have more than one character in it (so that it isn't confused with the optional icon string) and will be placed beneath the icon. The label's contents will NOT be interpreted as Harlowe markup, so everything in it will be used verbatim for the label. This is because, unlike links, the label isn't considered part of passage prose.

If both strings given to this macro have more than one character in them, an error will result.

This command creates an element that uses the same default CSS styling as the sidebar's icons: a `<tw-icon>` holding a glyph of text at 66px font size, with 0.2 opacity that changes to 0.4 when hovered over.

Normally, Harlowe stories will attempt to preserve their current game state across browser page reloads. This macro will suppress this behaviour, guaranteeing that the story restarts from the beginning.

Clicking this icon will NOT prompt the player with any kind of dialogue box warning them that this will restart the story. Instead, the story will restart without prompting.

#### See also:

[(reload:)](#macro_reload)

Added in: 3.2.0

[](#macro_icon-counter)The (icon-counter: ) macro
-------------------------------------------------

### (icon-counter: _[Bind](#type_bind), [String](#type_string), \[String\]_) → _[Command](#type_command)_

A [command](#type_command) that creates a numeric counter element with a text label, designed to fit in the sidebar, displaying the contents of a [number](#type_number) variable (rounded to a whole number as if by [(trunc:)](#macro_trunc)), and updating it whenever another macro changes it.

#### Example usage:

*   `(append: ?sidebar)[(icon-counter: bind $sunseeds, "Sunflower Seeds")]` creates a counter element labeled `"Sunflower Seeds"`, which updates to match the number in $sunseeds.
*   `(set: $satchel to (dm:"tomato",2))(prepend: ?sidebar)[(icon-counter: bind $satchel's tomato, "Tomato", "Tomatoes")]` creates a counter element labeled `"Tomatoes"` if `$satchel's tomato` contains a number other than 1, and `"Tomato"` otherwise.

#### Rationale:

The sidebar for Harlowe stories contains two basic gameplay utility functions by default – an [(icon-undo:)](#macro_icon-undo) button and an [(icon-redo:)](#macro_icon-redo) button – and can have more such buttons added using the other icon-related macros, along with [changers](#type_changer) such as [(append:)](#macro_append) and [(prepend:)](#macro_prepend), and ideally in a header or footer tagged passage. But, one can also use that space to hold status information relevant to the player. If the game features a number of vital numeric values, such as a score or a resource count, having that value be in constant view, and in a relatively consistent screen position, can be very helpful in keeping the player aware of their current status.

This element is visually optimised toward small, whole numeric values, such as the whole numbers from 0 to 100. [Numbers](#type_number) with a greater number of decimal places than that can be used, but they will likely exceed the width of the sidebar. Furthermore, decimal places in the value will not be displayed, but will be rounded using the [(trunc:)](#macro_trunc) algorithm.

#### Details:

The optional second [string](#type_string) allows for you to provide singular and plural forms of the counter label, which change based on whether the counter is 1 or -1. The first string becomes the singular form of the label, and the second string serves as the plural.

Unlike the other icon-related commands, which create clickable icons, the element this creates cannot be clicked, and is designed to be fully visible at all times. Thus, it does not have 30% opacity by default, but instead has 100% opacity. You may attach the [(opacity:)](#macro_opacity) changer to it to lower its opacity, if you wish.

The font used for this element, by default, is Verdana (and falls back to the browser's default sans-serif font family). This is intended to visually differentiate this counter from story prose, which uses a serif font by default.

If, when the element is created, the bound variable is not a number, then an error will result. However, if the bound variable ever changes to a non-number data value after that, then the counter will simply not update, instead of producing an error.

#### See also:

[(meter:)](#macro_meter)

Added in: 3.2.0

[](#macro_storylet)The (storylet: ) macro
-----------------------------------------

### (storylet: _[Lambda](#type_lambda)_) → _[Metadata](#type_metadata)_

When placed in a passage, it marks that passage as the beginning of a storylet, using the [lambda](#type_lambda) as the condition upon which it's available to the player, so that other macros, like [(open-storylets:)](#macro_open-storylets), can see and select the passage.

#### Example usage:

*   `(storylet: when $season is "winter" and $married is false and visits is 0)`
*   `(storylet: when (visited: "mortuary"))`

#### Rationale:

Storylets are mini-stories within a story - disconnected sequences of passages that can be visited non-linearly when certain conditions are fulfilled. They allow a different way of writing interactive fiction than the rigid tree structure of typical Twine games: instead, simply write scenes and events that occur in the story, use this macro in the first passage of these mini-stories to write a programming condition that determines when it would make sense for that scene to occur, and use macros like [(open-storylets:)](#macro_open-storylets) or [(link-storylet:)](#macro_link-storylet) to dynamically create links to the storylets. This authoring style allows content to be added to the story without having to dramatically rearrange the story's structure.

Examples of narrative structures that can be represented as storylets include: jobs on a job board that are available at different times but only acceptable once; encounters in a role-playing-game that vary based on randomness and location; random dream sequences between linear chapters; chores to perform in a housekeeping or farming simulation. Simply create clumps of passages containing each of these sequences, mark the first passage of each with this macro, and make the end of each (or a central "hub" passage that they link back to) with code that uses [(open-storylets:)](#macro_open-storylets) to create links elsewhere.

#### Details:

This macro adds a "storylet" data name to the [(passages:)](#macro_passages) [datamap](#type_datamap) for this passage, letting you access the passed-in lambda. In fact, you can use [(metadata:)](#macro_metadata) in place of (storylet:) if you wish - `(storylet: when $hour is 12)` is actually just a shorthand for `(metadata:"storylet", when $hour is 12)`. [(metadata:)](#macro_metadata) can be used instead if you're already using it to attach other data. if you use both (storylet:) and `(metadata: "storylet"`, an error will result.

Being a [metadata](#type_metadata) macro, a (storylet:) macro call must appear in the passage _before_ every other non-metadata macro in the passage, such as [(set:)](#macro_set) and [(if:)](#macro_if). (This doesn't include macros inside a "header" tagged passage.) The recommended place to put it is at the top of the passage. This restriction is because the (storylet:) call's lambda is only ever checked outside the passage. Variable-changing macros in the passage, such as [(set:)](#macro_set), are not run until the passage is visited, even if they appear before a (storylet:) macro. So, the code `(set: $a to 2)(storylet: when $a is 2)` is misleading, because it won't cause $a to always be 2 when the lambda is checked.

Inside a (storylet:) macro's lambda, the "visit" and "visits" identifiers refer to the containing passage, so they will often be 0. Checking visits (such as by `visits is 0`) allows you to make a storylet only be available once (because after that, it will have become visited). Also, the "exits" identifier cannot be used here (because it's meaningless in this context).

#### See also:

[(open-storylets:)](#macro_open-storylets), [(passages:)](#macro_passages), [(event:)](#macro_event), [(metadata:)](#macro_metadata)

Added in: 3.2.0

[](#macro_open-storylets)The (open-storylets: ) macro
-----------------------------------------------------

### (open-storylets: _\[[Lambda](#type_lambda)\]_) → _[Array](#type_array)_

Checks all of the [(storylet:)](#macro_storylet) macros in every passage, and provides an [array](#type_array) of [datamaps](#type_datamap) for every passage whose [(storylet:)](#macro_storylet) [lambda](#type_lambda) produced true, sorted by their "urgency" [metadata](#type_metadata) value, then by passage name. If a lambda was provided, the storylets are filtered using it as a search test.

#### Example usage:

*   `(for: each _p, ...(open-storylets:)'s 1stTo5th)[(link-goto: _p's name) - ]` creates passage links for the first five open storylets.
*   `(link-goto: "Off to the next job!", (either: ...(open-storylets: where 'night' is not in its tags))'s name)` creates a single link that goes to a random open storylet.
*   `You have (plural: (open-storylets: where its tags contains 'quest')'s length, "quest") available.` displays "You have 3 quests available." if 3 storylets with the "quest" tag are currently open.

#### Rationale:

For a greater explanation of what storylets are (essentially, disconnected sets of passages that can be procedurally visited when author-specified requirements are met), see the [(storylet:)](#macro_storylet) macro's description. This macro is used to create links or listings of storylets which are currently "open" to the player, in combination with other macros such as [(for:)](#macro_for), [(link-goto:)](#macro_link-goto) and such.

#### Details:

The exact algorithm determining the contents and order of the resulting array is as follows.

1.  First, every passage's "storylet" lambda is run. If it produced true, that passage is added to the array.
2.  Then, the highest "exclusivity" metadata [number](#type_number) among the added passages is found. Each passage with an "exclusivity" lower than that is removed.
3.  The array is then sorted by each passage's "urgency" metadata number. Ties are then sorted by passage name.
4.  If the optional "where" lambda was provided, then the results are filtered with it, as if by [(find:)](#macro_find).

The [(urgency:)](#macro_urgency) macro can thus be used in passages to affect their order in this array, and [(exclusivity:)](#macro_exclusivity) can be used to situationally exclude certain passages from it.

The passages returned are datamaps identical to those returned by [(passage:)](#macro_passage). They contain the following names and values.

Name

Value

name

The [string](#type_string) name of the passage.

source

The source markup of the passage, exactly as you entered it in the Twine editor

tags

An array of strings, which are the tags you gave to the passage.

storylet

The storylet condition lambda for this passage.

exclusivity

The exclusivity number, which is used in the algorithm above. Usually added by [(exclusivity:)](#macro_exclusivity).

urgency

The urgency number, which is used in the algorithm above. Usually added by [(urgency:)](#macro_urgency).

If no passages' storylet requirements are currently met, the array will be empty.

If no passage matches the search lambda given to (open-storylets:), the array will be empty.

If any passage's [(storylet:)](#macro_storylet) macro produces an error (such as by dividing a number by 0), it will be displayed when the (open-storylets:) macro is run.

#### See also:

[(storylet:)](#macro_storylet), [(link-storylet:)](#macro_link-storylet), [(passages:)](#macro_passages)

Added in: 3.2.0

[](#macro_exclusivity)The (exclusivity: ) macro
-----------------------------------------------

### (exclusivity: _[Number](#type_number)_) → _[Metadata](#type_metadata)_

When placed in a passage that also has a [(storylet:)](#macro_storylet) call, it marks that passage as being more or less "exclusive", meaning that if it's open, it will prevent storylets with lesser exclusivity from appearing in [(open-storylets:)](#macro_open-storylets).

#### Example usage:

`(exclusivity: 2)` means that, if this storylet is open, other storylets with exclusivity lower than this are closed, and can't appear in [(open-storylets:)](#macro_open-storylets)'s [array](#type_array).

#### Rationale:

Storylets are very useful for creating non-linear stories, in which the player's available choices and directions are determined entirely by the game state, rather than an explicit web of links. But, sometimes it's necessary to pen the player in and prevent them from having the same range of choices. An example is a climactic final event in a story, which has its own storylet [lambda](#type_lambda), but which, when available, shouldn't be avoidable by picking another storylet. While you could code this by wording each other passage's storylet lambdas very carefully, such that no others are open when the final event is open, that would be very cumbersome. The (exclusivity:) macro lets you specify that a storylet should be an _exclusive_ option that prevents more common options from being available.

#### Details:

This is essentially a shorthand for calling [(metadata:)](#macro_metadata) with "exclusivity" - it adds an "exclusivity" data name and value to the passage's [(passage:)](#macro_passage) [datamap](#type_datamap) - except that it will error if a non-number is given to it.

Storylets without an "exclusivity" [metadata](#type_metadata) [number](#type_number), added by this macro or by [(metadata:)](#macro_metadata), are treated as having `(exclusivity: 0)`. This means that a storylet with a negative exclusivity, such as `(exclusivity: -0.001)`, will not be able to appear in [(open-storylets:)](#macro_open-storylets) if any other storylets lacking an explicit (exclusivity:) call are also open.

#### See also:

[(urgency:)](#macro_urgency)

Added in: 3.2.0

[](#macro_urgency)The (urgency: ) macro
---------------------------------------

### (urgency: _[Number](#type_number)_) → _[Metadata](#type_metadata)_

When placed in a passage that also has a [(storylet:)](#macro_storylet) call, it marks that passage as being more or less "urgent", meaning that [(open-storylets:)](#macro_open-storylets) will sort it earlier or later than other passages.

#### Example usage:

`(urgency: 2)` causes this storylet to appear earlier in the [(open-storylets:)](#macro_open-storylets) than storylets with `(urgency:1)` or no urgency macro.

#### Rationale:

The [(open-storylets:)](#macro_open-storylets) macro provides you with an [array](#type_array) of all currently-open storylets, but that typically isn't the amount of options you'd like to show to the player each time. Often you'll just limit it to a few values using array data names like `1stto4th`. In that case, the order of the returned array matters a lot - being one of the first few values determines whether it'll be seen among the others. In those cases, it can sometimes be helpful to guarantee a certain storylet or storylets, when available, are always present in the first few values. The (urgency:) macro allows for this - give it a [number](#type_number), and it will be sorted above open storylets with a lower or no urgency number.

#### Details:

This is essentially a shorthand for calling [(metadata:)](#macro_metadata) with "urgency" - it adds an "urgency" data name and value to the passage's [(passage:)](#macro_passage) [datamap](#type_datamap) - except that it will error if a non-number is given to it.

Storylets without an "urgency" [metadata](#type_metadata) number, added by this macro or by [(metadata:)](#macro_metadata), are treated as having `(urgency: 0)`. This means that a storylet with a negative urgency, such as `(urgency: -11)`, will appear at the end of the [(open-storylets:)](#macro_open-storylets) array, unless a storylet with an even lower urgency is also open.

#### See also:

[(exclusivity:)](#macro_exclusivity)

Added in: 3.2.0

[](#macro_str)The (str: ) macro
-------------------------------

### (str: _...\[[Number](#type_number) or [String](#type_string) or [Boolean](#type_boolean) or [Array](#type_array)\]_) → _String_

Also known as: [(string:)](#macro_string), [(text:)](#macro_text)

(str:) accepts any amount of values and tries to convert them all to a single String.

#### Example usage:

*   `(print: "YOU NEED: $" + (str: $cash + 200))` converts the [number](#type_number) `$cash + 200` into a [string](#type_string), so `"YOU NEED: $"` can be added to it.

#### Rationale:

Unlike in Twine 1 and SugarCube, Twine 2 will only convert numbers into strings, or strings into numbers, if you explictly ask it to. This extra carefulness decreases the likelihood of unusual bugs creeping into stories (such as adding 1 and "22" and getting "122"). The (str:) macro offers a quick way to convert non-string values to a string (and its counterpart, [(num:)](#macro_num), offers the reverse).

#### Details:

If you give an [array](#type_array) to (str:), it will attempt to convert every element contained in the array to a string, and then join them up with commas. So, `(str: (a: 2, "Hot", 4, "U"))` will result in the string "2,Hot,4,U". If you'd rather this not occur, you can also pass the array's individual elements using the `...` operator - this will join them with nothing in between, as if they were given individually. So, `(str: ...(a: 2, "Hot", 4, "U"))` will result in the string "2Hot4U".

If you want to convert numbers into strings in a more sophisticated way, such as by including thousands separators or leading zeros, consider using [(digit-format:)](#macro_digit-format).

#### See also:

[(num:)](#macro_num), [(print:)](#macro_print)

Added in: 1.0.0

[](#macro_digit-format)The (digit-format: ) macro
-------------------------------------------------

### (digit-format: _[String](#type_string), [Number](#type_number)_) → _String_

When given a special formatting [string](#type_string), followed by a [number](#type_number), this macro converts the number into a string using the formatter as a guide. "#" characters in the formatting string represent optional digits; "0" characters represent required digits. Other characters are considered either thousands separators or as the decimal point.

#### Examples:

*   `(digitformat: "###.###", -1234.5678)` produces the string `"-234.567"`.
*   `(digitformat: "###.###", -1/2)` produces the string `"-.5"`.
*   `(print: "$" + (digitformat: "##0.00", 0.96))` prints `$0.96`.
*   `(digitformat: "###,###", 155500)` produces the string `"155,500"`. Unlike every other character, commas are assumed to be thousands separators unless a different separator character is used before them.
*   `(digitformat: "### ###.", 500000)` produces the string `"500 000"`.
*   `(altered: via (digitformat: "000", it), ...(range:1,5))` produces `(a:"001","002","003","004","005")`.
*   `(digitformat: "###.###,", 1255.5)` produces the string `"1.255,"`. Note that the German decimal point `,` at the end of the string cannot appear in the final string, but serves only to distinguish the `.` as being the thousands separator.
*   `(digitformat: ".##,###", 1255.5)` produces the string `"55,3"`. Note that the German thousands separator at the front of the string cannot appear in the final string (because no `0` or `#` characters are before it), but serves only to distinguish the `,` as being the decimal point.
*   `(digitformat: "##,##,###", 2576881)` produces the string `"25,76,881"`. This uses Indian numeral separators.

#### Rationale:

The [(str:)](#macro_str) macro is a general-purpose conversion macro for creating strings out of other Harlowe [datatypes](#type_datatype). However, numbers have a number of different writing conventions depending on their context - in English, thousands separators are common for larger numbers, and some contexts, like prices, need trailing or leading zeros. Other languages have different separators than thousands separators, or use different decimal point characters. This macro lets you provide a specific format in which a number is to be converted to a string, allowing the separators, zeros and decimal point to be customised.

#### Details:

The decimal point in the format string is decided as follows: the rightmost character that isn't `#` or `0` is the decimal point, _unless_ it is `,` and the leftmost character that isn't `#` or `0` is also `,`. This is under the assumption that most Harlowe users will be writing in English (the same assumption used for [(str-nth:)](#macro_str-nth)) and thus formats like "###,###,###" intend to use `,` in its English sense as a thousands separator.

If the decimal point has no digits (`#` or `0` characters) to its right, or the leftmost separator has no digits to its left, then they are left off altogether. This can be used to precisely specify the decimal point and separator characters without requiring them to appear in the final string: `"##.###,"` uses a trailing `,` to indicate that `,` is the decimal point, and `.` is the thousands separator.

As a result of these two rules, it is _not_ recommended that you include more formatting or context characters than what is required. For instance, a format string like `"$00.00"` will _not_ cause the final string to have "$", because the `$` will be interpreted as a thousands separator, and thus removed.

If a number bigger than 99999999999999999999 is given, this macro will produce an error.

Errors in decimal representation caused by the underlying browser Javascript platform's floating-point number format, such as `(digitformat: "##.##", 35.3)` producing "35.29", are currently not compensated for by Harlowe.

#### See also:

[(str-nth:)](#macro_str-nth)

Added in: 3.3.0

[](#macro_joined)The (joined: ) macro
-------------------------------------

### (joined: _...[String](#type_string)_) → _String_

Using the first [string](#type_string) as a separator value, this macro takes all of the other strings given to it, and joins them into a single string.

#### Example usage:

*   `(joined:" ", "Philias", "Silus", "Sebastus", "Brotch")` produces the string "Philias Silus Sebastus Brotch".
*   `(joined:" or ", ...(dm-values: (dm: "Breakfast", "Toast", "Dinner", "Pasta", "Lunch", "Soup")))` produces the string `"Toast or Pasta or Soup"`.

#### Rationale:

If you have a list of strings stored in an [array](#type_array), which may be the names of related concepts, such as inventory objects or suspect names, you'll often want to display all of them, or a certain [number](#type_number) of them, to the player. This will involve adding some kind of separator between them, such as a single space, a line break and bullet point, or something more complicated.

#### Details:

The separator value will only be used to separate each string value, and won't be appended or prepended to the end of the string.

If only one string is provided (that is, just the separator value) then the empty string will be returned.

Added in: 3.2.0

[](#macro_lowercase)The (lowercase: ) macro
-------------------------------------------

### (lowercase: _[String](#type_string)_) → _String_

This macro produces a lowercase version of the given [string](#type_string).

#### Example usage:

`(lowercase: "GrImAcE")` is the same as `"grimace"`

#### Details:

The results of this macro for non-ASCII characters currently depends on the player's browser's Unicode support. For instance, 'İ' in lowercase should be 'i̇', but some browsers don't support this.

#### See also:

[(uppercase:)](#macro_uppercase), [(lowerfirst:)](#macro_lowerfirst), [(upperfirst:)](#macro_upperfirst)

Added in: 2.0.0

[](#macro_lowerfirst)The (lowerfirst: ) macro
---------------------------------------------

### (lowerfirst: _[String](#type_string)_) → _String_

This macro produces a version of the given [string](#type_string), where the first alphanumeric character is lowercase, and other characters are left as-is.

#### Example usage:

`(lowerfirst: " College B")` is the same as `" college B"`

#### Details:

If the first alphanumeric character cannot change case (for instance, if it's a [number](#type_number)) then nothing will change in the string. So, "8DX" won't become "8dX".

The results of this macro for non-ASCII characters currently depends on the player's browser's Unicode support. For instance, 'İ' in lowercase should be 'i̇', but some browsers don't support this.

#### See also:

[(uppercase:)](#macro_uppercase), [(lowercase:)](#macro_lowercase), [(upperfirst:)](#macro_upperfirst)

Added in: 2.0.0

[](#macro_plural)The (plural: ) macro
-------------------------------------

### (plural: _[Number](#type_number), [String](#type_string), \[String\]_) → _String_

This macro takes a whole [number](#type_number) and a [string](#type_string), then converts the number to a string, joins them up with a space character, and pluralises the string if the number wasn't 1 or -1. By default, this pluralisation is done by adding "s", as in some English plurals. An optional extra string can specify a different plural word to use instead.

#### Example usage:

*   `(plural: 1, "bandage")` produces `"1 bandage"`.
*   `(plural: -7, "bandage")` produces `"-7 bandages"`.
*   `(plural: 2, "elf", "elves")` produces `"2 elves"`.

#### Rationale:

If you have variables in your story holding number data, you'll often want to display that data to the player textually. If that number refers to a quantity of some object or substance, and your game is in English, you'll want to pluralise the noun form of that object or substance, which requires checking if the number is or is not 1 or -1. This macro is a shortcut for that small bit of busywork, letting you simply supply the number and the noun to produce the plural.

#### Details:

If the number isn't a whole number (such as 2.3), then an error will result. Furthermore, if any of the given strings are empty, an error will result.

#### See also:

[(joined:)](#macro_joined)

Added in: 3.2.0

[](#macro_source)The (source: ) macro
-------------------------------------

### (source: _Any_) → _[String](#type_string)_

When given almost any data value, this will produce a [string](#type_string) representation of Harlowe source code that can, when run, create that value exactly.

#### Example usage:

*   `(source: $voltage)` will, if $voltage contains the [number](#type_number) 9, produce the string `"9"`.
*   `(source: (str-repeated: 6, "HA"))` produces the string `'"HAHAHAHAHAHA"'` (which, you'll notice, is a string in a string).
*   `(source: (click: ?hat))` produces the string `"(click:?hat)"`.
*   `(source: (enchant: ?passage's hooks, $style))` will, if $style contained `(text-size:1.4)`, produce the string `"(enchant:?passage's hooks,(text-size:1.4))"`.

#### Rationale:

Throughout development, you'll often find yourself toying and tinkering with the exact values of data your story uses, such as to test a particular state of events, or to extract a particular procedurally-generated value. This macro, along with Harlowe's normal code parsing actions, provides a basic two-way conversion between code and data that you can use as you please.

#### Details:

For most complex values, like [changers](#type_changer) and [commands](#type_command), this will produce a macro call. The whitespace between the values will generally be absent, so `(source: (a:2, 3, 4))` produces `"(a:2,3,4)"`. Also, if you call a macro using one if its aliases, such as [(array:)](#macro_array) for [(a:)](#macro_a), then the source will still use its "default" name. So, `(source: (array:1))` produces `"(a:1)"`.

Note that you can't easily print the string returned by (source:), because, funnily enough, Harlowe will immediately re-render it. You can use [(verbatim-source:)](#macro_verbatim-source) to accomplish this instead.

A special note about commands created by custom macros (via the [(output:)](#macro_output) macro): as of Harlowe 3.3.0, these _can_ be given to this macro. However, the representation of this command will be a custom macro call, using the variable name that held the custom macro, _at the point the command was created_. What this means is that, for a custom macro stored in `$a`, the call `($a:2)` will produce a command whose (source:) representation is `"($a:2)""`. But, if the custom macro's variable is repurposed, such as by `(set: $a to 0)`, then the command will _still_ be represented as `"($a:2)"`, even though $a no longer contains the custom macro which created the command. You can generally avoid this issue by keeping custom macros in the same variables for the full duration of the story.

#### See also:

[(datatype:)](#macro_datatype), [(verbatim-source:)](#macro_verbatim-source)

Added in: 3.2.0

[](#macro_split)The (split: ) macro
-----------------------------------

### (split: _[String](#type_string) or [Datatype](#type_datatype), String_) → _[Array](#type_array)_

Also known as: [(splitted:)](#macro_splitted)

This splits up the second value given to it into an [array](#type_array) of substrings, after finding and removing each occurrence of the first [string](#type_string) or pattern (which is used as a separator value).

#### Example usage:

*   `(split: newline, (passage:"Kitchen")'s source)` produces an array of each line in the "Kitchen" passage's source.
*   `(split: (p:",", (p-opt:" ")), "Rhett, Brett, Brad,Red")` produces `(a:"Rhett","Brett","Brad","Red")`.

#### Rationale:

It's common to want to extract substrings from a string, but you often want to do so not based on any fixed [number](#type_number) of characters in the string, but on the location of a separator value within the string. For instance, extracting the words from a string, such as with [(words:)](#macro_words), means you should consider whitespace to be the separator between words. This macro provides a general means of splitting strings based on any separator you wish, using either a substring, a string-related [datatype](#type_datatype), or a string pattern datatype created with [(p:)](#macro_p) or its family of macros.

As with most of Harlowe's data-processing macros, the word "split" should be considered an adjective, not a verb - it produces a "split string", not a [command](#type_command) to split a string.

#### Details:

If no occurrences of the separator are found in the string, then an array containing just the complete string (with no splits) is produced.

If the separator (the first value) is the empty string, then the second string will be simply split into an array of its characters, as if by `(a: ...$secondValue)`.

If the separator is a pattern that matches the entire string (such as `(split: "Hairs", "Hairs")` or `(split: string, "Gadfly")`, then an array containing just the empty string will be produced.

The pattern given to this macro cannot contained [TypedVars](#type_typedvar) (such as `(split: (p: alnum-type _letter), "A")`). Doing so will cause an error.

#### See also:

[(words:)](#macro_words), [(folded:)](#macro_folded), [(joined:)](#macro_joined), [(trimmed:)](#macro_trimmed), [(str-replaced:)](#macro_str-replaced)

Added in: 3.2.0

[](#macro_str-find)The (str-find: ) macro
-----------------------------------------

### (str-find: _[Datatype](#type_datatype), [String](#type_string)_) → _[Array](#type_array)_

Also known as: [(string-find:)](#macro_string-find)

When given a [string](#type_string) pattern and a string, this produces an [array](#type_array) of each substring within the string that the pattern matched. If typed variables were in the pattern, this instead produces an array of [datamaps](#type_datamap), each of which has data names matching the variables, and data values matching the portions of the string matched by those typed variables, as well as a "match" data name for the full substring.

#### Example usage:

*   `(str-find: digit, "PARSEC47")` produces `(a:"4","7")`.
*   `(str-find: (p:"S", ...alnum), "Mr. Smith, Mr. Schmitt, and Mr. Smithers")` produces `(a:"Smith","Schmitt","Smithers")`.
*   `(str-find:(p:"$", ...digit, ".", ...digit), "Apple pie - $5.50; Pumpkin pie - $14.50")` produces `(a:"$5.50","$14.50")`.
*   `(str-find:(p:...alnum-type _flavor, " pie - $", (p:...digit, ".", ...digit)-type _cost), "Apple pie - $5.50; Pumpkin pie - $14.50")` produces the following:  
    `(a: (dm:"cost","5.50","flavor","Apple","match","Apple pie - $5.50"), (dm:"cost","14.50","flavor","Pumpkin","match","Pumpkin pie - $14.50") )`

#### Rationale:

The `matches` operator allows you to check if a string contains a specific substring that matches a pattern. This macro goes further, leting you extract every instance of those matching substrings, and use them as data. This is very useful if you have a structured string that you'd like to "break down" by removing unimportant parts, but which isn't uniform enough to simply use [(split:)](#macro_split) for.

Using typed variables to extract multiple components of the substring at once, such as in the above example, can let you directly translate a string into a sequence of data structures that provide easy access to that data. Rather than having to perform additional (str-find:) calls on the results of the first (str-find:), you can tag parts of the initial pattern with `-type` and a temp variable name, thus causing a datamap of those parts to be created. This array of datamaps can then be tweaked further with [(altered:)](#macro_altered). If the last (str-find:) example above was stored in the variable `_pies`, then one could write `(altered: via its cost + " for " + (lowercase:its flavor), ..._pies)` to create `(a: "5.50 for apple", "14.50 for pumpkin")`.

#### Regarding [(find:)](#macro_find) and (str-find:):

You might wonder how this compares to [(find:)](#macro_find), and why the latter only takes a [lambda](#type_lambda) instead of a pattern (such as that given to [(unpack:)](#macro_unpack)). Here is how to think of the two macros. The [(find:)](#macro_find) macro operates on sequences of values, and treats all of them as discrete values whose order doesn't impact their individual meaning. Hence, it takes a `where` lambda that checks each value individually. Strings, however, consist of sequences of characters that _only_ have meaning from their order, so (str-find:) takes a string pattern that can match a long substring, or various substring possibilities, by itself.

#### Details:

This macro only takes a string pattern as its first value. This is because, if a string was given, every result in the produced array would simply be a copy of that string, which isn't particularly useful.

Here is a more detailed description of how (str-find:) works when the pattern contains typed variables. Whenever (str-find:) encounters a substring, it takes the substring, and "unpacks" it into the typed variables in the pattern (in a manner similar to [(unpack:)](#macro_unpack)). Then, it immediately converts these temp variables into datamap names and values, and produces a datamap corresponding to that particular substring. Finally, a "match" dataname is added holding the full substring.

Thus, even though this macro can use typed temp variables in its pattern, this does _not_ cause any temp variables to be created in the passage or containing hook. Other macro calls can't access the temp variables used here, and they essentially do not exist. This is similar to [(str-replaced:)](#macro_str-replaced)'s use of temp variables in its patterns, which also does not affect the temp variables in the passage or containing hook.

If no matches of the pattern exist within the string, an empty array is returned.

If two identical [TypedVar](#type_typedvar) names are used in the pattern (such as `(p: alnum-type _a, alnum-type _a)`) then an error will occur.

If a TypedVar named `_match` is used, then an error will occur (because this collides with the "match" dataname containing the full substring).

#### See also:

[(substring:)](#macro_substring), [(count:)](#macro_count), [(split:)](#macro_split), [(str-replaced:)](#macro_str-replaced)

Added in: 3.3.0

[](#macro_str-nth)The (str-nth: ) macro
---------------------------------------

### (str-nth: _[Number](#type_number)_) → _[String](#type_string)_

Also known as: [(string-nth:)](#macro_string-nth)

This macro takes a whole [number](#type_number), and converts it to a [string](#type_string) comprising an English ordinal abbreviation (of the form "nth", such as "1st", "22nd", etc.).

#### Example usage:

*   `(str-nth: 3)` produces `"3rd"`.
*   `(str-nth: 11)` produces `"11th"`.
*   `(str-nth: 0)` produces `"0th"`.
*   `(str-nth: -7)` produces `"-7th"`.

#### Rationale:

English ordinals are useful to express that a number refers to a position or ordering of some object or item, but constructing an ordinal word from a number can be tricky, given that English ordinals have special cases for numbers ending in 1 or 2. This macro, then, serves to smooth over those cases, and provide a succinct means to construct these words.

#### Details:

Do not confuse this with the [(nth:)](#macro_nth) macro, which is primarily used to display values in a sequence in passage prose.

If the number isn't a whole number (such as 2.3), then an error will result.

Note that you do NOT need to use this to access [array](#type_array) data positions, even though their positions are written in the form `1st`, `2ndlast` and so forth. You can simply use numbers in brackets (such as `$inventoryArray's (2)`) to access a particular data value.

#### See also:

[(str:)](#macro_str), [(digit-format:)](#macro_digit-format)

Added in: 3.2.0

[](#macro_str-repeated)The (str-repeated: ) macro
-------------------------------------------------

### (str-repeated: _[Number](#type_number), [String](#type_string)_) → _String_

Also known as: [(string-repeated:)](#macro_string-repeated)

A special shorthand combination of the [(str:)](#macro_str) and [(repeated:)](#macro_repeated) macros, this accepts a single [string](#type_string) and duplicates it the given [number](#type_number) of times.

#### Example usage:

*   `(str-repeated: 5, "Fool! ")` produces `"Fool! Fool! Fool! Fool! Fool! "`

#### Rationale:

This macro is a shorthand form of nesting [(repeated:)](#macro_repeated) inside [(str:)](#macro_str). This example: `(str: ...(repeated: 14, "-+*+"))` is the same as `(str-repeated: 14, "-+*+")`.

#### Details:

An error will, of course, be produced if the number given is negative, or contains a fraction. As of 3.2.0, however, it will no longer error if the number is 0.

#### See also:

[(repeated:)](#macro_repeated)

Added in: 3.0.0

[](#macro_str-replaced)The (str-replaced: ) macro
-------------------------------------------------

### (str-replaced: _\[[Number](#type_number)\], [String](#type_string) or [Datatype](#type_datatype), String or [Lambda](#type_lambda), String_) → _String_

Also known as: [(string-replaced:)](#macro_string-replaced), [(replaced:)](#macro_replaced)

This macro produces a copy of the content [string](#type_string) (the last string given), with all instances of a certain search string (or pattern) replaced using a given string (or a "via" [lambda](#type_lambda) that constructs a replacement string). Giving an optional [number](#type_number) N lets you only replace the first N instances. If a pattern is given, [TypedVars](#type_typedvar) may be used inside it, and they will be accessible in the "via" lambda.

#### Example usage:

*   `(str-replaced: "http://", 'https://', $URL)` produces a copy of the string in $URL with all occurrences of "http://" replaced with "https://".
*   `(str-replaced: (p-many: whitespace), ' ', $playerName)` produces a copy of the string in $playerName with all runs of whitespace (including multiple spaces) replaced with a single space.
*   `(str-replaced: 1, '*', '☆', _nextLine)` produces a copy of \_nextLine with the first occurrence of "\*" replaced with "☆".
*   `(str-replaced: (p-many:alnum), via (str-reversed: it), "09-4128-3253")` produces `"90-8214-3523"`.
*   `(str-replaced: (p: (p-many:digit)-type _a, "%"), via _a + " percent", "5% 10%")` produces `"5 percent 10 percent"`.

#### Rationale:

This macro accompanies [(str-find:)](#macro_str-find) - in addition to finding matches of a given pattern, this also lets you replace them there and then, producing a new version of the string. This can serve a variety of uses. Player-inputted text, such as by [(input-box:)](#macro_input-box), will often need to have unwanted characters (such as newlines) removed. Strings used for procedurally describing certain objects or game states, like the player's physical status, may need to be subtly modified to fit in specific sentences. Or, you may want to do something more esoteric, like "corrupting" or "censoring" a string by replacing certain characters arbitrarily.

While you can replace text that's already been rendered into the passage using [(replace:)](#macro_replace) or [(replace-with:)](#macro_replace-with), this macro is better suited for modifying strings that are stored in variables and used throughout the story.

#### Details:

While this macro does have the shorter alias as [(replaced:)](#macro_replaced), it is recommended that (str-replaced:) be used to avoid confusion with the [(replace:)](#macro_replace) macro, which is a [changer](#type_changer) that performs immediate replacements (using the attached hook) on passage hooks and text, not strings.

Matches and replacements are non-overlapping - if the search string or pattern would overlap certain locations in the string, only the leftmost location is replaced. So, `(str-replaced: "1010", 'X', "101010")` will produce `"X10"`, not `"10X"` or `"XX"`.

You can supply a "via" lambda to specify a more complicated replacement than just a single string. The `it` identifier in the lambda will be the matched portion of the string. In the case of `(str-replaced: alnum, via it + "-", "Fred...?")`, `it` will be "F", "r", "e", and "d", respectively. Of course, as always, you can provide a temp variable in front of the "via" keyword, which will be usable in the lambda as a more readable alternative to the `it` identifier. In the case of `(str-replaced: (p:(p-many:digit), "-", (p-many:digit)), _phoneNum via "(131) " + _phoneNum, "Call me on 999-000!")`, both \_phoneNum and `it` will be "999-000".

Interestingly, any pattern (using the [(p:)](#macro_p) macro and its relatives) given to (str-replaced:) _can_ have TypedVars inside it. These TypedVars will be accessible within the "via" lambda. In the case of `(str-replaced: (p: (p-many:digit)-type _a, "%"), via _a + " percent", "5% 10%")`, above, the "via" lambda will be run twice: the first time, `it` will be "5%", and \_a will be "5" (because it contains only the `(p-many:digit)` portion of the matched string). The second time, `it` will be "10%", and \_a will be "10". This feature allows you to capture "sub-groups" within the matched sub-string, and use them in the "via" lambda to make a custom replacement for every match in the content string.

By the way, the `pos` identifier can also be used inside the "via" lambda. It equals the number of replacements before and including this one.

Here's a short table summarising some of the above information.

Macro call

`it`

`pos`

`_a`

Replacement made by the lambda

`(str-replaced: (p: (p-many:digit)-type _a, "%"), via _a + " percent", "5% 10%")`

`"5%"`

`1`

`"5"`

`"5 percent"`

`"10%"`

`2`

`"10"`

`"10 percent"`

`(str-replaced: alnum, via it + "-", "Fred...?")`

`"F"`

`1`

n/a

`"F-"`

`"r"`

`2`

n/a

`"r-"`

`"e"`

`3`

n/a

`"e-"`

`"d"`

`4`

n/a

`"d-"`

The TypedVars used in the pattern are _only_ usable in the lambda. They essentially do not exist outside of the macro call, and will not be accessible to macros elsewhere in the passage.

The optional number decides how many replacements, starting from the left of the content string, should be made. If no string is given, all possible replacements are made. If 0 is given, no replacements will be made, the content string will be returned as-is, and no error will occur. Giving negative numbers or non-whole numbers _will_ produce an error, though.

If an empty or meaningless pattern is given as a search value (for instance, `(p:)` or `""`) then no replacements will be made and the content string will be returned as-is.

#### See also:

[(trimmed:)](#macro_trimmed), [(split:)](#macro_split), [(unpack:)](#macro_unpack)

Added in: 3.3.0

[](#macro_str-reversed)The (str-reversed: ) macro
-------------------------------------------------

### (str-reversed: _[String](#type_string)_) → _String_

Also known as: [(string-reversed:)](#macro_string-reversed)

A special shorthand combination of the [(str:)](#macro_str) and [(reversed:)](#macro_reversed) macros, this accepts a single [string](#type_string) and reverses it.

#### Example usage:

*   `(str-reversed: "sknahT")` produces `"Thanks"`

#### Rationale:

This macro is a shorthand form of nesting [(reversed:)](#macro_reversed) inside [(str:)](#macro_str). This example: `(str: ...(reversed: "ABRAXAS"))` is the same as `(str-reversed: "ABRAXAS")`.

#### Details:

This accepts strings of 0 or 1 character, as well as symmetrical strings, even though their "reversal" is the same as their current form.

If you wish to reverse just the words in a string, you can use the ordinary [(reversed:)](#macro_reversed) and [(words:)](#macro_words) macros like so: `(reversed: ...(words: "Gilly Golly Milly Molly"))`.

#### See also:

[(reversed:)](#macro_reversed)

Added in: 3.0.0

[](#macro_substring)The (substring: ) macro
-------------------------------------------

### (substring: _[String](#type_string), [Number](#type_number), Number_) → _String_

This macro produces a substring of the given [string](#type_string), cut from two inclusive [number](#type_number) positions.

#### Example usage:

`(substring: "growl", 3, 5)` is the same as `"growl"'s 3rdto5th` or `"growl"'s (a:3,4,5)`

#### Rationale:

You can obtain substrings of strings without this macro, by using the `'s` or `of` syntax along with either a specified range of consecutive positions, or an [array](#type_array) of arbitrary position numbers. For instance, `$str's 4thto12th` obtains a substring of $str containing its 4th through 12th characters, `$a's (a:1,3,5)` obtains a substring of just the 1st, 3rd and 5th characters of $a, and `$a's (range:1, $b)` obtains a substring of each position up to $b.

However, in the specific situation where you want to use a variable negative position, counting from the end of the string, there isn't a succinct option using that syntax. When gathering the characters in string $a between position 1 and $b, where $b is a negative position counting from the end, `(range:1, $b)` doesn't work, and the best you can do without this macro is something like `$a's (range: 1, $b + $a's length)`. So, this macro can be used as a slightly shorter alternative, by writing `(substring: $a, 1, -$b)`.

#### Details:

As mentioned above, if you provide negative numbers, they will be treated as being offset from the end of the string - `-2` will specify the `2ndlast` character, just as 2 will specify the `2nd` character.

If the last number given is smaller than the first (for instance, in `(substring: "hewed", 4, 2)`) then the macro will still work - in that case returning "ewe" as if the numbers were in the correct order.

#### See also:

[(subarray:)](#macro_subarray)

Added in: 1.0.0

[](#macro_trimmed)The (trimmed: ) macro
---------------------------------------

### (trimmed: _\[[String](#type_string) or [Datatype](#type_datatype)\], String_) → _String_

This macro takes one [string](#type_string) (the last value), and produces a copy with every character matching the given pattern (the first value) removed from the start and end of it. If no pattern is given, it defaults to removing whitespace, as if `whitespace` was the first argument.

#### Example usage:

*   `(trimmed:" Contract Annulled ")` produces `"Contract Annulled"`.
*   `(trimmed: "$", $treasureValue)` produces the string stored in $treasureValue with leading or trailing "$" signs removed.
*   `(trimmed: digit, "john61112")` produces `"john"`.
*   `(trimmed: (p-start: whitespace), _text)` trims off whitespace from the start of the string in \_text, but not the end.

#### Rationale:

Removing certain leading or trailing characters in a string is a common operation, and is essentially equivalent to extracting a single substring from within a string. Removing the punctuation or whitespace surrounding a word, or just certain specific characters, is important when you need to use the middle portion of a string for some other use, such as being displayed in a different context. It's especially useful when dealing with user-inputted strings, such as those produced by [(input-box:)](#macro_input-box).

#### Details:

If an empty string is given, then it will be returned as-is. If the pattern doesn't match anything (for instance, if just `(p:)` or "" was given as the pattern) then the string will be returned as-is.

If the pattern matches the entire string, then an empty string will be returned.

The pattern given to this macro cannot contained [TypedVars](#type_typedvar) (such as `(split: (p: alnum-type _letter), "A")`). Doing so will cause an error.

#### See also:

[(words:)](#macro_words), [(split:)](#macro_split), [(str-replaced:)](#macro_str-replaced)

Added in: 3.2.0

[](#macro_uppercase)The (uppercase: ) macro
-------------------------------------------

### (uppercase: _[String](#type_string)_) → _String_

This macro produces an uppercase version of the given [string](#type_string).

#### Example usage:

`(uppercase: "GrImAcE")` is the same as `"GRIMACE"`

#### Details:

The results of this macro for non-ASCII characters currently depends on the player's browser's Unicode support. For instance, 'ß' in uppercase should be 'SS', but some browsers don't support this.

#### See also:

[(lowercase:)](#macro_lowercase), [(upperfirst:)](#macro_upperfirst), [(lowerfirst:)](#macro_lowerfirst)

Added in: 2.0.0

[](#macro_upperfirst)The (upperfirst: ) macro
---------------------------------------------

### (upperfirst: _[String](#type_string)_) → _String_

This macro produces a version of the given [string](#type_string), where the first alphanumeric character is uppercase, and other characters are left as-is.

#### Example usage:

`(upperfirst: " college B")` is the same as `" College B"`

#### Details:

If the first alphanumeric character cannot change case (for instance, if it's a [number](#type_number)) then nothing will change in the string. So, "4ever" won't become "4Ever".

The results of this macro for non-ASCII characters currently depends on the player's browser's Unicode support. For instance, 'ß' in uppercase should be 'SS', but some browsers don't support this.

#### See also:

[(uppercase:)](#macro_uppercase), [(lowercase:)](#macro_lowercase), [(lowerfirst:)](#macro_lowerfirst)

Added in: 2.0.0

[](#macro_words)The (words: ) macro
-----------------------------------

### (words: _[String](#type_string)_) → _[Array](#type_array)_

This macro takes a [string](#type_string) and creates an [array](#type_array) of each word ("word" meaning a sequence of non-whitespace characters) in the string.

#### Example usage:

`(words: "god-king Torment's peril")` is the same as `(a: "god-king", "Torment's", "peril")`

#### Rationale:

It can be useful to explicitly distinguish individual words within a string, in a manner not possible with just the `contains` operator - for instance, seeing if a string contains the bare word "to" - not "torn" or any other larger word. This macro allows a string's words to be split up and examined individually - you can safely check if `(words: $a) contains "to"`, or check on a particular word in the sequence by asking if, say, `(words: $a)'s 2nd is 'goose'`.

#### Details:

If the string was empty or contained only whitespace, then this will create an empty array. Moreover, if the string contained no whitespace, then the array will contain just the entire original string.

If you wish to split up a string into an array based on a more specific separator than just whitespace (for instance, by just newlines) then you may use the [(split:)](#macro_split) macro.

#### See also:

[(split:)](#macro_split), [(startcase:)](#macro_startcase), [(trimmed:)](#macro_trimmed)

Added in: 2.0.0

[](#macro_align)The (align: ) macro
-----------------------------------

### (align: _[String](#type_string)_) → _[Changer](#type_changer)_

This styling [changer](#type_changer) changes the alignment of text in the attached hook, as if the `===>` arrow syntax was used. In fact, these same arrows (`==>`, `=><=`, `<==>`, `====><=` etc.) should be supplied as a [string](#type_string) to specify the degree of alignment.

#### Example usage:

`(align: "=><==")[Hmm? Anything the matter?]`

#### Details:

Hooks affected by this changer will take up their own lines in the passage, regardless of their placement in the story prose. This allows them to be aligned in the specified manner.

Added in: 1.1.0

[](#macro_bg)The (bg: ) macro
-----------------------------

### (bg: _[Colour](#type_colour) or [String](#type_string) or [Gradient](#type_gradient)_) → _[Changer](#type_changer)_

Also known as: [(background:)](#macro_background)

This styling [changer](#type_changer) alters the background [colour](#type_colour) or background image of the attached hook. Supplying a [gradient](#type_gradient) (produced by [(gradient:)](#macro_gradient)) will set the background to that gradient. Supplying a colour (produced by [(rgb:)](#macro_rgb), [(hsl:)](#macro_hsl), [(lch:)](#macro_lch) or another such macro), a built-in colour value like `red`, or a bare colour value like #FA9138) will set the background to a flat colour. CSS [strings](#type_string) that resemble HTML hex colours (like "#FA9138") will also provide flat colour. Other strings will be interpreted as an image URL, and the background will be set to it.

#### Example usage:

*   `(bg: red + white)[Pink background]`
*   `(bg: (gradient: 0, 0,red, 1,black))[Red-black gradient background]`
*   `(bg: #663399)[Purple background]`
*   `(bg: "#663399")[Purple background]`
*   `(bg: "marble.png")[Marble texture background]`

#### Details:

Combining two (bg:) changers will do nothing if they both influence the colour or the image. For instance `(bg:red) + (bg:white)` will simply produce the equivalent `(bg:white)`. However, `(bg:red) + (bg:"mottled.png")` will work as intended if the background image contains transparency, allowing the background colour to appear through it. Note that gradients count as background images, not colours - you can combine gradients whose colours are partially transparent with flat colours, such as `(bg: (gradient: 90, 0, (hsla:0,0,0,0.5), 1, (hsla:0,0,0,0))) + (bg: red)`

Currently, supplying other CSS colour names (such as `burlywood`) is not permitted - they will be interpreted as image URLs regardless.

No error will be reported if the image at the given URL cannot be accessed.

#### See also:

[(colour:)](#macro_colour)

Added in: 1.0.0

[](#macro_box)The (box: ) macro
-------------------------------

### (box: _[String](#type_string), \[[Number](#type_number)\]_) → _[Changer](#type_changer)_

When attached to a hook, it becomes a "box", with a given width proportional to the containing element's width, an optional [number](#type_number) of lines tall, and a scroll bar if its contained text is longer than its height can contain.

#### Example usage:

*   `(box:"=XX=", 1)[Chapter complete]` produces a box that's centered, 50% of the containing element's width, and 1 line tall.
*   `(box:"==X", 3)[Chapter complete]` produces a box that's right-aligned, 33% of the containing element's width, 3 lines tall.
*   `(box:"X", 7)[Chapter complete]` produces a box that takes up the full containing element's width, and 7 lines tall.
*   `(enchant: ?passage, (box:"XXX="))` enchants the passage, placing it in the left of the window.

#### Rationale:

There are times when you want to make a block of text appear to occupy an enclosed, small region with its own scroll bar, so that players can scroll through it separate from the rest of the passage - for instance, if it's an excerpt of some in-story document, or if it's a "message log" which has lots of text appended to it with [(append:)](#macro_append). This macro provides that ability.

#### Details:

The first value you give to this macro is a "sizing line" similar to the aligner and column markup - a sequence of zero or more `=` signs, then a sequence of characters (preferably "X"), then zero or more `=` signs. Think of this [string](#type_string) as a visual depiction of the box's horizontal proportions - the `=` signs are the space to the left and right, and the characters in the middle are the box itself. If you wish to specify that the box should take up the full width, you must provide just a single character, like "X" - anything more will cause an error.

The second, optional value is a height, in text lines. This size varies based on the font size of the containing element, which is adjustible with [(text-size:)](#macro_text-size) and other [changers](#type_changer). The hook will (as of version 3.3.6) be given a CSS `height` value of `1.5em` (the default CSS `line-height`) multiplied by the number of lines given. If you need to reposition the hook vertically, consider using [(float-box:)](#macro_float-box) instead. Note that this value will NOT adjust to match any custom CSS padding or line-height given to this hook in addition to (box:).

If no height is given, then it will use a height large enough to display all of the lines, as usual. If a non-whole number is given, an error will be produced.

The "containing element" is whatever structure contains the hook. If it's inside column markup, the containing column is the element. If it's inside another hook (including a hook that also has (box:) attached), that hook is the element. Usually, however, it will just be the passage itself.

This changer does not interact well with [(align:)](#macro_align), which also sets the horizontal placement of hooks - adding these changers together will cause one to override the placement of the other. [(align:)](#macro_align) will also, if center-alignment is given, force the hook's horizontal size to 50% of the containing element.

If you want the box's horizontal size to be a large proportion of the available width, it may be more readable if you uniformly varied the characters that comprise the sizing string: `(box:"=XxxxXxxxXxxxX=", 0.25)`, for instance, makes it easier to discern that the box is 13/15th of the available width.

You can use this with [(change:)](#macro_change) or [(enchant:)](#macro_enchant) and `?passage` to affect the placement of the passage in the page. (Note that doing so will change the horizontal padding of the `<tw-story>` HTML element, which is normally 20%. It will become 0%, and the `<tw-passage>`'s new margins will define its position on the screen.)

The resulting hook has the CSS attributes "display:block", "overflow-y:auto", and "box-sizing:content-box". Additionally, the hook will have 'padding:1em', unless another padding value has been applied to it (such as via [(css:)](#macro_css)).

#### See also:

[(align:)](#macro_align), [(float-box:)](#macro_float-box)

Added in: 3.2.0

[](#macro_button)The (button: ) macro
-------------------------------------

### (button: _\[[String](#type_string)\]_) → _[Changer](#type_changer)_

When applied to a link, this [changer](#type_changer) styles it so that it resembles a button, and makes it take up the entire passage width. The optional sizing [string](#type_string) lets you specify width and horizontal margins for the button. It is not recommended that this be used on non-link hooks.

#### Example usage:

*   `(button:)[[Go to the cemetery]]` applies the button style to a single passage link.
*   `(button:"=XXX=")[[Hug your husband]]` turns the link into a button that occupies 60% of the available width, centered.
*   `(enchant:?link's 2ndlast + ?link's last, (button:))` enchants the second-last and last links in the passage with the button style.

#### Rationale:

Harlowe links, by default, are designed to appear inside and among prose, in the manner of HTML prose. That being said, a story written in a more traditional interactive fiction style will often want to finish a passage with a series of exit links. These links can benefit from being more visually prominent and inviting, rather than just single fragments of text. The (button:) changer provides links with a styling that is more typical of other interactive fiction engines' link options.

#### Details:

This is essentially a shortcut for a [number](#type_number) of other changers added together. `(link: "Link Text", (button:))` is similar to `(link:"Link Text",(align:"=><=")+(box:"X")+(b4r:"solid")+(css:"padding:0px")+(corner-radius:16))`. However, unlike the latter, this changer is designed to work correctly with [(click:)](#macro_click) and `(enchant:"text")`, so that the button border matches the current link [colour](#type_colour).

The optional sizing string is the same kind of line given to [(box:)](#macro_box) - a sequence of zero or more `=` signs, then a sequence of characters (preferably "X"), then zero or more `=` signs. Think of this string as a visual depiction of the button's horizontal proportions - the `=` signs are the space to the left and right, and the characters in the middle are the button itself.

To make (button:) links appear in two or more columns, or make two (button:) links appear side-by-side, consider using the column markup.

This changer can be provided to non-link hooks or [commands](#type_command), but since the result will have the same borders and spacing as a button while not being clickable, it is not recommended to use it this way.

This changer adds the class "enchantment-button" to `<tw-link>` and `<tw-enchantment>` elements.

#### See also:

[(align:)](#macro_align), [(border:)](#macro_border), [(box:)](#macro_box), [(corner-radius:)](#macro_corner-radius)

Added in: 3.2.0

[](#macro_char-style)The (char-style: ) macro
---------------------------------------------

### (char-style: _[Changer](#type_changer) or [Lambda](#type_lambda)_) → _Changer_

When attached to a hook, this causes all of the individual non-whitespace characters inside the hook (identical to those that would be selected by `?page's chars`) to be styled using the specified [changer](#type_changer).

#### Example usage:

*   `(char-style:(text-style:"fidget"))[Maybe you stayed up too late.]`
*   `(char-style: via (text-style:(either:'none','blur','blurrier')))[My memory is patchy. You'll have to fill in the gaps yourself.]`
*   `(char-style: via (text-colour:(either:red,white,white)))[Blood? What blood? You're clean as a whistle.]`

#### Rationale:

This is a convenient and more readable shorthand for using [(enchant-in:)](#macro_enchant-in) with `?page's chars`. This lets you style all of the characters within a hook, as if they were in individual hooks themselves. A [number](#type_number) of strange text effects are possible with this - each character can be rotated using [(text-rotate-z:)](#macro_text-rotate-z), each character can have a [(hover-style:)](#macro_hover-style), each character can have a slightly different [(text-size:)](#macro_text-size), and so forth.

#### Details:

As with [(enchant-in:)](#macro_enchant-in), this can be given a changer, or a [lambda](#type_lambda) that produces a changer, which is run on each character individually, and can produce different changers for each, depending on their `pos` or a random macro. If the lambda doesn't produce a changer, an error will result.

Also, as with [(enchant-in:)](#macro_enchant-in), [(link:)](#macro_link), [(replace:)](#macro_replace), or any of their relatives cannot be given to this macro.

This creates a hook-specific enchantment, similar to [(enchant-in:)](#macro_enchant-in), It will be listed under the "Enchantments" tab of the Debug Mode panel.

**Warning:** using (char-style:) may cause text-to-speech assistive programs to fail to read the hook's contents correctly. If this would be unacceptable for you or your story, refrain from using this macro.

**Warning:** using (char-style:) to enchant very large amounts of text at once will likely cause excessive CPU load for the reader, making their browser unresponsive.

Due to Harlowe engine limitations, this currently does NOT work when created by a lambda given to `(enchant:)` or `(change:)`, such as in `(enchant: ?passage, via (char-style:(bg:(hsl:pos*30,0.5,1))))`.

#### See also:

[(enchant-in:)](#macro_enchant-in), [(hover-style:)](#macro_hover-style), [(link-style:)](#macro_link-style), [(line-style:)](#macro_line-style)

Added in: 3.2.0

[](#macro_collapse)The (collapse: ) macro
-----------------------------------------

### (collapse: ) → _[Changer](#type_changer)_

When attached to a hook, this collapses the whitespace within the hook, in the same manner as the collapsing whitespace markup.

#### Example usage:

*   `(collapse:)[This text is (set:$a to 1) collapsed.]`
*   `(enchant: ?page, (collapse:))`

#### Rationale:

While the collapsing whitespace markup allows specific sections of passage prose to be collapsed, there are times when you want this functionality available as a [changer](#type_changer), such as to style the whole page using [(change:)](#macro_change), or to add it to another changer. This macro provides that functionality.

#### Details:

Unlike most macros, this takes no values - there is only one way of collapsing whitespace (for now).

This collapses whitespace in the same manner as the collapsing whitespace markup, so consult its documentation for more information.

There is no way to reverse this whitespace-collapsing effect - it is permanently removed.

When this is used with [(change:)](#macro_change) or [(enchant:)](#macro_enchant) to affect an existing hook, its excess whitespace will be deleted immediately, with no transition. Moreover, the whitespace-collapsing effect is ongoing, not just a once-off effect. This becomes clear when you consider the following code.

    (enchant:?1, (collapse:))
    |1>["Back in time? Is this a time travel story now?"]
    (append:?1)[
        he shook his head.
    ]
    

Because the enchantment is an ongoing effect, the text appended to ?1 will be collapsed, even though it's written outside of the collapsing hook. This would not occur if ?1 was a span of collapsing whitespace markup.

Added in: 3.1.0

[](#macro_css)The (css: ) macro
-------------------------------

### (css: _[String](#type_string)_) → _[Changer](#type_changer)_

This takes a [string](#type_string) of inline CSS, and applies it to the hook, as if it were a HTML "style" property.

#### Example usage:

    (css: "background-color:indigo;color:white;")[What's going on? Where am I?]
    

#### Rationale:

The built-in macros for layout and styling hooks, such as [(text-style:)](#macro_text-style), are powerful and geared toward ease-of-use, but do not entirely provide comprehensive access to the browser's styling. This [changer](#type_changer) macro allows extended styling, using inline CSS, to be applied to hooks.

This is, however, intended solely as a "macro of last resort" - as it requires basic knowledge of CSS - a separate language distinct from Harlowe - to use, and requires it be provided a single inert string, it's not as accommodating as the other such macros.

#### See also:

[(text-style:)](#macro_text-style)

Added in: 2.0.0

[](#macro_float-box)The (float-box: ) macro
-------------------------------------------

### (float-box: _[String](#type_string), String_) → _[Changer](#type_changer)_

When attached to a hook, it becomes a "floating box", placed at a given portion of the window, sized proportionally to the window's dimensions, and with a scroll bar if its contained text is longer than its height can contain.

#### Example usage:

*   `(float-box: "X====","Y====")[CASH: $35,101]` produces a box that's placed in the top-left corner of the window, is 20% of the window's width, and 20% of the window's height.
*   `(float-box: "=XXX=","======Y")[Marvin: "Really?"]` produces a box that's placed in the middle bottom of the window, is 60% of the window's width, and 1/7th of the window's height.

#### Rationale:

This is a variant of [(box:)](#macro_box). There are times when you want a single block of text to be separated from the main passage's text, to the point where it's positioned offset from it as a separate panel - character statistics readouts in RPGs, and commentary asides are two possible uses. Unlike [(box:)](#macro_box), which leaves the hook in the passage, this provides that necessary spatial separation.

#### Details:

The values you give to this macro are "sizing lines" identical to those accepted by [(box:)](#macro_box) - consult its documentation for more information about those lines. However, while those lines scaled the hook proportional to the "containing element", (float-box:) scales proportional to the reader's browser window, using `vw` and `wh` CSS units. The second [string](#type_string) references the vertical position and size of the hook - since [(box:)](#macro_box) cannot affect the vertical position of the hook, it only accepts a [number](#type_number) representing its size.

It's a recommended convention that the centre characters in the sizing line strings be "X" (for "X axis") for the horizontal line and "Y" (for "Y axis") for the vertical - but you may use whatever you wish as long as it is not a `=`.

Since it is "floating", this box remains fixed in the window even when the player scrolls up and down.

The resulting hook has the CSS attributes "display:block", "position:fixed" and "overflow-y:auto". Additionally, the hook will have 'padding:1em', unless another padding value has been applied to it (such as via [(css:)](#macro_css)).

#### See also:

[(align:)](#macro_align), [(box:)](#macro_box)

Added in: 3.2.0

[](#macro_font)The (font: ) macro
---------------------------------

### (font: _[String](#type_string)_) → _[Changer](#type_changer)_

This styling [changer](#type_changer) changes the font used to display the text of the attached hook. Provide the font's family name (such as "Helvetica Neue" or "Courier") as a [string](#type_string).

#### Example usage:

`(font:'Courier New')[And what have we here?]`

#### Details:

Currently, this [command](#type_command) will only work if the font is available to the player's browser, or if font files are linked using `url()` in your story's stylesheet, or embedded using base64 (explanations for which are beyond the scope of this macro's description).

No error will be reported if the provided font name is not available, invalid or misspelled.

#### See also:

[(text-style:)](#macro_text-style), [(text-size:)](#macro_text-size)

Added in: 1.0.0

[](#macro_hook)The (hook: ) macro
---------------------------------

### (hook: _[String](#type_string)_) → _[Changer](#type_changer)_

A [changer](#type_changer) that allows the author to give a hook a computed tag name.

#### Example usage:

`(hook: $name)[]` gives the hook a name equal to what [string](#type_string) is in the $name variable.

#### Rationale:

It's possible to add together changers, save them in variables, and use them in various locations throughout your story. You may, after doing so, want to give a common name to each of those hooks that have that variable attached, so that, for instance, the [(append:)](#macro_append) macro can act on them as one. This changer can be added to those changers to allow the hooks to be named, like so. `(font:"Museo Slab")+(hook:"title")`.

Also, unlike the nametag syntax for hook names, (hook:) can be given any string expression: `(hook: "eyes" + (str:$eyeCount))` is valid, and will, as you'd expect, give the hook the name of `eyes1` if `$eyeCount` is 1.

#### Details:

If an empty string is given to this macro, an error will be produced.

Currently, you may give strings with non-alphanumeric characters in them, such as "!@#". However, since those characters are not valid for use in [HookName](#type_hookname) syntax, you can't use a HookName to refer to that hook, so it's not that useful.

Hook names are case-insensitive and dash-insensitive. This means that `(hook:"BAG")`, `(hook:"bag ")` and `(hook:"bag")` are all equivalent.

#### See also:

[(hidden:)](#macro_hidden), [(hooks-named:)](#macro_hooks-named)

Added in: 1.0.0

[](#macro_hover-style)The (hover-style: ) macro
-----------------------------------------------

### (hover-style: _[Changer](#type_changer)_) → _Changer_

Given a style-altering [changer](#type_changer), it makes a changer which only applies when the hook or [command](#type_command) is hovered over with the mouse pointer, and is removed when hovering off.

#### Example usage:

*   `(enchant:?Link, (hover-style:(text-style:'italic')))` makes each of the page's links turn italic when hovered over.
*   `(text-colour:transparent)+(hover-style:(text-color:red))[The butler] killed Marcus O'Fogarty.` makes a hook, whose text is normally transparent, turn white when hovered over.
*   `(hover-style:)[]`

#### Rationale:

Making text react in small visual ways when the pointer hovers over it is an old hypertext tradition. It lends a degree of "life" to the text, making it seem aware of the player. This feeling of life is best used to signify interactivity - it seems to invite the player to answer in turn, by clicking. So, adding them to [(link:)](#macro_link) commands, as well as interaction commands like [(cycling-link:)](#macro_cycling-link), is recommended.

#### Details:

True to its name, this macro can only be used for subtle style changes. Only the following changers (and combinations thereof) may be given to (hover-style:) - any others will produce an error:

*   [(align:)](#macro_align)
*   [(bg:)](#macro_bg)
*   [(css:)](#macro_css)
*   [(font:)](#macro_font)
*   [(text-colour:)](#macro_text-colour)
*   [(text-indent:)](#macro_text-indent)
*   [(text-rotate-x:)](#macro_text-rotate-x)
*   [(text-rotate-y:)](#macro_text-rotate-y)
*   [(text-rotate-z:)](#macro_text-rotate-z)
*   [(text-style:)](#macro_text-style)
*   [(text-size:)](#macro_text-size)

More extensive mouse-based interactivity should use the [(action:)](#macro_action) changer.

This macro is not recommended for use in games or stories intended for use on touch devices, as the concept of "hovering" over an element doesn't really make sense with that input method.

Note that in versions of Harlowe prior to 3.2.0, this could be combined with [(link:)](#macro_link), [(link-repeat:)](#macro_link-repeat), or [(link-reveal:)](#macro_link-reveal) to apply changers to the link, except for [(text-colour:)](#macro_text-colour). This has since been changed, and now, when combined with [(link:)](#macro_link) changers, (hover-style:) will only apply to the revealed hook. (The intended way to style the link in that case is to provide (hover-style:) as the optional second value to a link changer, such as by `(link-rerun:"Retry", (hover-style:(color:red)))`.) Note that `(link-goto:)` and passage links aren't changers, so (hover-style:) can be attached to them, as expected.

#### See also:

[(link-style:)](#macro_link-style), [(line-style:)](#macro_line-style), [(char-style:)](#macro_char-style)

Added in: 2.0.0

[](#macro_line-style)The (line-style: ) macro
---------------------------------------------

### (line-style: _[Changer](#type_changer) or [Lambda](#type_lambda)_) → _Changer_

When attached to a hook, this causes all of the lines of prose inside the hook (identical to those that would be selected by `?page's lines`) to be styled using the specified [changer](#type_changer).

#### Example usage:

This gives every line in the attached hook a dotted border. Notice that blank "lines" aren't styled, and are ignored.

    (line-style:(b4r:"dotted"))
    [Sometimes I think
    
    that I'm losing myself
    
    Other times,
    
    that I never had a self
    in the first place.]
    

This makes each line to take up 50% of the passage width, and every other line in the attached hook be right-aligned.

    (line-style: via (box:"=XX=")+(align: (cond: pos is an even, "<==", "==>")))
    [Sometimes you feel like
    your mind is in one place
    and your body is in another.]
    

#### Rationale:

This is a convenient and more readable shorthand for using [(enchant-in:)](#macro_enchant-in) with `?page's lines`. This lets you style all of the lines within a hook, as if they were in individual hooks themselves. This allows you to alter and adjust the amount of text inside the hook without having to manually wrap each line in a hook, or attach a changer, after each alteration.

#### Details:

A line is any run of non-whitespace text or code between line breaks (or the hook's start and end) - a word-wrapped paragraph of prose is considered a single "line" as a result.

As with [(enchant-in:)](#macro_enchant-in), this can be given a changer, or a [lambda](#type_lambda) that produces a changer, which is run on each line individually, and can produce different changers for each, depending on their `pos` or a random macro. If the lambda doesn't produce a changer, an error will result.

Also, as with [(enchant-in:)](#macro_enchant-in), [(link:)](#macro_link), [(replace:)](#macro_replace), or any of their relatives cannot be given to this macro.

This creates a hook-specific enchantment, similar to [(enchant-in:)](#macro_enchant-in), It will be listed under the "Enchantments" tab of the Debug Mode panel.

Due to Harlowe engine limitations, this currently does NOT work when created by a lambda given to `(enchant:)` or `(change:)`, such as in `(enchant: ?passage, via (line-style:(bg:(hsl:pos*30,0.5,1))))`.

#### See also:

[(enchant-in:)](#macro_enchant-in), [(hover-style:)](#macro_hover-style), [(link-style:)](#macro_link-style), [(char-style:)](#macro_char-style)

Added in: 3.2.0

[](#macro_link-style)The (link-style: ) macro
---------------------------------------------

### (link-style: _[Changer](#type_changer) or [Lambda](#type_lambda)_) → _Changer_

When attached to a hook, this causes all of the links inside the hook to be styled using the specified [changer](#type_changer). This is equivalent to using [(enchant-in:)](#macro_enchant-in) with `?link`.

#### Example usage:

*   `(link-style:(b4r:"dotted"))[I stepped into the (link-reveal:"hall,")[ and the door shut behind me.]]` applies the changer produced by [(b4r:)](#macro_b4r) to the [(link-reveal:)](#macro_link-reveal) link.
*   `(link-style:via (text-colour:(cond: pos is an even, yellow, aqua)))[You choose: [[A]] [[B]] [[C]] [[D]] [[E]].]` gives the "A", "C" and "E" links an aqua [colour](#type_colour), and the other links a yellow colour.

#### Rationale:

Links, being the primary interactive elements in your stories, need to be visually distinguished from the passage prose surrounding them. Harlowe applies a colour and boldness to links by default, but you'll often want to apply your own styles to links to suit your story. Rather than manually attach a changer holding those styles to every link where it appears, you can instead use this macro to style several links at once.

If you wish to style every link in the passage or story equally, using [(enchant:)](#macro_enchant) with `?link` in a "header" or "footer" tagged passage is most effective. But, if you only wish to apply a style to links in certain sections of a passage, this macro is most effective.

#### Details:

As with [(enchant-in:)](#macro_enchant-in), this can be given a changer, or a [lambda](#type_lambda) that produces a changer, which is run on each link individually, and can produce different changers for each, depending on their `pos` or a random macro. If the lambda doesn't produce a changer, an error will result.

Also, as with [(enchant-in:)](#macro_enchant-in), [(link:)](#macro_link), [(replace:)](#macro_replace), [(append-with:)](#macro_append-with), or any of its relatives cannot be given to this macro.

This creates a hook-specific enchantment, similar to [(enchant-in:)](#macro_enchant-in), It will be listed under the "Enchantments" tab of the Debug Mode panel.

This will also apply the style changer to [(click:)](#macro_click) links inside the hook.

Due to Harlowe engine limitations, this currently does NOT work when created by a lambda given to `(enchant:)` or `(change:)`, such as in `(enchant: ?passage, via (link-style:(bg:(hsl:pos*30,0.5,1))))`.

#### See also:

[(enchant-in:)](#macro_enchant-in), [(hover-style:)](#macro_hover-style), [(line-style:)](#macro_line-style), [(char-style:)](#macro_char-style)

Added in: 3.2.0

[](#macro_opacity)The (opacity: ) macro
---------------------------------------

### (opacity: _[Number](#type_number)_) → _[Changer](#type_changer)_

This styling [changer](#type_changer) changes how opaque the attached hook is, using a value from 0 to 1. Reducing the value makes it more transparent. An opacity of 0 makes the hook invisible.

#### Example usage:

`(opacity: 0.5)[You don't think there's (color:green)[a revenant] nearby, do you?]` makes the hook 50% transparent.

#### Details:

This affects the entire hook, including its background, any borders added by [(border:)](#macro_border), and so forth. Moreover, this does not override "alpha" opacity values of [colours](#type_colour) produced by [(hsl:)](#macro_hsl), [(rgb:)](#macro_rgb) and [(lch:)](#macro_lch) – the multiple transparency effects produced by these will multiplicatively stack with one another.

Each nested usage of (opacity:) also multiplicatively stacks with one another. If two hooks with opacity 0.5 are nested, such as by `(opacity:0.5)[(opacity:0.5)[Faded]]`, then the inner hook will have an opacity equivalent to 0.25. As a consequence of this, you can't use (opacity:) inside a partially transparent hook to bring the inner hook up to 100% opacity.

Two [(text-style:)](#macro_text-style) styles, "fade-in-out" and "opacity", will override this changer if it's affecting the same hook.

#### See also:

[(hsl:)](#macro_hsl), [(rgb:)](#macro_rgb), [(text-colour:)](#macro_text-colour)

Added in: 3.2.0

[](#macro_text-colour)The (text-colour: ) macro
-----------------------------------------------

### (text-colour: _[String](#type_string) or [Colour](#type_colour)_) → _[Changer](#type_changer)_

Also known as: [(colour:)](#macro_colour), [(text-color:)](#macro_text-color), [(color:)](#macro_color)

This styling [changer](#type_changer) changes the [colour](#type_colour) used by the text in the attached hook. You can supply either a [string](#type_string) with a CSS-style colour (a colour name or RGB [number](#type_number) supported by CSS), or a built-in colour object.

#### Example usage:

`(colour: red + white)[Pink]` combines the built-in red and white colours to make pink. `(colour: #696969)[Gray]` uses a CSS-style colour to style the text gray.

#### Details:

This macro only affects the text colour. To change the text background, call upon the [(bg:)](#macro_bg) macro.

This macro will change the colour of links inside the contained hook, with one exception: using [(change:)](#macro_change) to change the entire passage (via `?passage` or `?page`) with (text-colour:) will NOT affect links. This is to allow you to re-style the entire story without having to lose the distinct colour of links compared to passage text. You can change the colour of all links using an explicit `(enchant: ?link, (text-colour: $color))`.

Also, while this will change the colour of links inside the contained hook, the hover colour for the link will remain the same. You can alter that colour by styling the links using [(hover-style:)](#macro_hover-style).

#### See also:

[(bg:)](#macro_bg), [(border-colour:)](#macro_border-colour)

Added in: 1.0.0

[](#macro_text-indent)The (text-indent: ) macro
-----------------------------------------------

### (text-indent: _[Number](#type_number)_) → _[Changer](#type_changer)_

This styling [changer](#type_changer) causes the attached hook to be indented by the given [number](#type_number) of pixels.

#### Example usage:

*   `(enchant: ?passage's lines, (text-indent:12))` gives each line (paragraph) of the passage an indent of 12 pixels.
*   `(text-indent: 24)+(size:1.5)[CHAPTER TWO]` makes just this hook have a leading indent of 24 pixels.

#### Rationale:

Indentation of initial letters has long been used in typesetting as a means of helping the human eye distinguish paragraphs of text from each other. While you can use line breaks to separate paragraphs, this often takes up an uncomfortable amount of vertical space, and can be unsuitable for long sections of prose. This macro can be used to provide indentation to single hooks, or, using [(change:)](#macro_change) or [(enchant:)](#macro_enchant), to every line in a passage.

#### Details:

This will place a gap before the first character of the attached hook, even if it isn't at the start of a line.

The given number is the number of CSS pixels to indent the hook by. If it is negative, an error will be produced.

Because this uses the CSS 'text-indent' attribute, hooks using this macro will have their CSS `display` attribute set to `inline-block`.

It is recommended that you do NOT use this macro for precisely placing text offset from the left or right of the passage. You will get better results using the [(align:)](#macro_align) macro, aligner marker, or column markup for this purpose.

#### See also:

[(align:)](#macro_align)

Added in: 3.2.0

[](#macro_text-rotate-x)The (text-rotate-x: ) macro
---------------------------------------------------

### (text-rotate-x: _[Number](#type_number)_) → _[Changer](#type_changer)_

This styling [changer](#type_changer) visually rotates the attached hook clockwise, around the X axis (horizontal), by a given [number](#type_number) of degrees, making it appear to lean into the page. The rotational axis is in the centre of the hook.

#### Example usage:

    (text-rotate-x:-45)[You feel a strange
    
    lightness, as if you're
    
    in an elevator that's
    
    suddenly started
    
    plunging rapidly.]
    

#### Details:

The surrounding non-rotated text will behave as if the rotated text is still in its original position - the horizontal space of its original length will be preserved, and text it overlaps with vertically will ignore it.

A rotation of 90 degrees will, due to the rotational axis, cause the hook to disappear, appearing edge-on to the viewer. A rotation of 180 degrees will, due to the rotational axis, flip the hook upside-down, as if `(text-style:"upside-down")` was applied.

Due to browser limitations, hooks using this macro will have its CSS `display` attribute set to `inline-block`.

#### See also:

[(text-style:)](#macro_text-style), [(text-rotate-y:)](#macro_text-rotate-y), [(text-rotate-z:)](#macro_text-rotate-z)

Added in: 3.2.0

[](#macro_text-rotate-y)The (text-rotate-y: ) macro
---------------------------------------------------

### (text-rotate-y: _[Number](#type_number)_) → _[Changer](#type_changer)_

This styling [changer](#type_changer) visually rotates the attached hook clockwise, around the Y axis (vertical), by a given [number](#type_number) of degrees, making it appear to lean into the page. The rotational axis is in the centre of the hook.

#### Example usage:

    (text-rotate-y:45)+(size:1.5)[ATE BREAKFAST!
    
    READ THE NEWS!
    
    FOUND A LOST SOCK!]
    

#### Details:

The surrounding non-rotated text will behave as if the rotated text is still in its original position - the horizontal space of its original length will be preserved, and text it overlaps with vertically will ignore it.

A rotation of 90 degrees will, due to the rotational axis, cause the hook to disappear, appearing edge-on to the viewer. A rotation of 180 degrees willreverse the hook, as if `(text-style:"mirror")` was applied.

Due to browser limitations, hooks using this macro will have its CSS `display` attribute set to `inline-block`.

#### See also:

[(text-style:)](#macro_text-style), [(text-rotate-z:)](#macro_text-rotate-z), [(text-rotate-x:)](#macro_text-rotate-x)

Added in: 3.2.0

[](#macro_text-rotate-z)The (text-rotate-z: ) macro
---------------------------------------------------

### (text-rotate-z: _[Number](#type_number)_) → _[Changer](#type_changer)_

Also known as: [(text-rotate:)](#macro_text-rotate)

This styling [changer](#type_changer) visually rotates the attached hook clockwise by a given [number](#type_number) of degrees. The rotational axis is in the centre of the hook.

#### Example usage:

`(text-rotate:45)[Tilted]` will produce Tilted

#### Details:

The surrounding non-rotated text will behave as if the rotated text is still in its original position - the horizontal space of its original length will be preserved, and text it overlaps with vertically will ignore it.

A rotation of 180 degrees will, due to the rotational axis, flip the hook upside-down and back-to-front, as if the [(text-style:)](#macro_text-style) styles "mirror" and "upside-down" were both applied.

Due to browser limitations, hooks using this macro will have its CSS `display` attribute set to `inline-block`.

#### See also:

[(text-style:)](#macro_text-style), [(text-rotate-y:)](#macro_text-rotate-y), [(text-rotate-x:)](#macro_text-rotate-x)

Added in: 1.0.0

[](#macro_text-size)The (text-size: ) macro
-------------------------------------------

### (text-size: _[Number](#type_number)_) → _[Changer](#type_changer)_

Also known as: [(size:)](#macro_size)

This styling [changer](#type_changer) changes the text size of the attached hook by the given fraction. Give it a [number](#type_number) greater than 1 to enlarge the text, and a number smaller to decrease the text. Providing 1 to this macro will revert the text size back to the default.

#### Example usage:

    This is normal text.
    (text-size:0.5)[Umm... this text is half the size of normal text]
    (size:2)[This text is enlarged twofold!]
    

#### Details:

The default text size for Harlowe, with no other CSS changes to any elements, is 16px (16 pixels), and its default line height is 24px. This macro multiplies both of those CSS properties by the given number, scaling both proportionally. This size is absolute - any pure CSS alterations to the text size of the passage, story or page, using [(css:)](#macro_css) or story stylesheets, will NOT be taken into account.

This macro also scales any markup which displays text larger or smaller by default, such as header markup or the "superscript" [(text-style:)](#macro_text-style).

Be careful about using this macro with [(hover-style:)](#macro_hover-style) - changing the displayed size of the "hover region" when the mouse begins to hover over it can lead to the pointer "slipping off" the region, causing it to abruptly stop hovering (and deactivating the style) unexpectedly.

#### See also:

[(text-style:)](#macro_text-style), [(font:)](#macro_font)

Added in: 3.2.0

[](#macro_text-style)The (text-style: ) macro
---------------------------------------------

### (text-style: _...[String](#type_string)_) → _[Changer](#type_changer)_

This applies one or more selected built-in text styles to the hook's text. Give this macro one of these [strings](#type_string) (capitalisation and hyphens ignored): `"none"`, `"bold"`, `"italic"`, `"underline"`, `"double-underline"`, `"wavy-underline"`, `"strike"`, `"double-strike"`, `"wavy-strike"`, `"superscript"`, `"subscript"`, `"blink"`, `"shudder"`, `"mark"`, `"condense"`, `"expand"`, `"outline"`, `"shadow"`, `"emboss"`, `"smear"`, `"blur"`, `"blurrier"`, `"mirror"`, `"upside-down"`, `"tall"`, `"flat"`, `"fade-in-out"`, `"rumble"`, `"sway"`, `"buoy"` or `"fidget"`.

#### Example usage:

*   `The shadow (text-style: "shadow")[flares] at you!` will style the word "flares" with a shadow.
*   `(set: $s to (text-style: "shadow")) The shadow $s[flares] at you!` will also style it with a shadow.
*   `(text-style: "italic", "emboss")[Richard Donahue, King for Hire]` makes the text italic and embossed.

#### Rationale:

While Harlowe offers markup for common formatting styles like bold and italic, having these styles available from a [changer](#type_changer) macro provides some extra benefits: it's possible, as with all such style macros, to [(set:)](#macro_set) them into a variable, combine them with other changers, and re-use them succinctly throughout the story (by using the variable in place of the macro).

Furthermore, this macro also offers many less common but equally desirable styles to the author, which are otherwise unavailable or difficult to produce.

#### Details:

At present, the following text strings will produce a particular style. All of these are case-insensitive and dash-insensitive - "UPSIDE-DOWN" and "upsidedown" both work in place of "upside-down".

String

Example

Incompatible with

`"none"`

`"bold"`

`"italic"`

`"underline"`

"double-underline", "wavy-underline", "strike", "double-strike", "wavy-strike"

`"double-underline"`

"underline", "wavy-underline","strike", "double-strike", "wavy-strike"

`"wavy-underline"`

"underline", "double-underline", "strike", "double-strike", "wavy-strike"

`"strike"`

"underline", "double-underline", "wavy-underline", "double-strike", "wavy-strike"

`"double-strike"`

"underline", "double-underline", "wavy-underline", "strike", "wavy-strike"

`"wavy-strike"`

"underline", "double-underline", "wavy-underline", "strike", "double-strike"

`"superscript"`

"subscript"

`"subscript"`

"superscript"

`"mark"`

[(bg:)](#macro_bg)

`"outline"`

"shadow", "emboss", "blur", blurrier", "smear"

`"shadow"`

"outline", "emboss", "blur", "blurrier", "smear"

`"emboss"`

"outline", "shadow", "blur", "blurrier", "smear"

`"condense"`

"expand"

`"expand"`

"condense"

`"blur"`

"outline", "shadow", "emboss", "blurrier", "smear"

`"blurrier"`

"outline", "shadow", "emboss", "blur", "smear"

`"smear"`

"outline", "shadow", "emboss", "blur", "blurrier"

`"mirror"`

"upside-down", "tall", "flat"

`"upside-down"`

"mirror", "tall", "flat"

`"tall"`

"mirror", "upside-down", "flat"

`"flat"`

"mirror", "upside-down", "tall"

`"blink"`

(hover to preview)

"fade-in-out", "rumble", "shudder", "sway", "buoy", "fidget", [(opacity:)](#macro_opacity)

`"fade-in-out"`

(hover to preview)

"blink", "rumble", "shudder", "sway", "buoy", "fidget", [(opacity:)](#macro_opacity)

`"rumble"`

(hover to preview)

"fade-in-out", "blink", "sway", "fidget"

`"shudder"`

(hover to preview)

"fade-in-out", "blink", "buoy", "fidget"

`"sway"`

(hover to preview)

"fade-in-out", "blink", "rumble", "buoy", "fidget"

`"buoy"`

(hover to preview)

"fade-in-out", "blink", "shudder", "sway", "fidget"

`"fidget"`

(hover to preview)

"fade-in-out", "blink", "rumble", "shudder", "sway", "buoy"

You can use the "none" style to remove an existing style from a combined changer. NOTE: As of Harlowe 3.2.2, this can only be used to remove styles from combined changers, such as by `(set: $changer to it + (text-style:"none"))`, and can't be used to remove styles from already-changed hooks or other structures.

Due to browser limitations, combining many of these changers won't work exactly as intended – `(text-style: "underline", "strike")`, for instance, will cause only the latter of the two to be applied, in this case "strike". These incompatibilities are listed in the table above.

Also due to browser limitations, hooks using "mirror", "upside-down", "tall", or "flat" will have their CSS `display` attribute set to `inline-block`. This means, among other things, that the text inside them won't word-wrap.

Note that the animations "rumble" and "shudder" are particularly intense, and may induce frustration or illness in motion-sensitive readers. Take care when using them.

Finally, "doublestrike" and "wavy-strike" will be replaced with "strike" when run on Internet Explorer, as will "double-underline" and "wavy-underline" be replaced with "underline".

#### See also:

[(css:)](#macro_css)

Added in: 1.0.0

[](#macro_transition)The (transition: ) macro
---------------------------------------------

### (transition: _[String](#type_string)_) → _[Changer](#type_changer)_

Also known as: [(t8n:)](#macro_t8n)

A [changer](#type_changer) that applies a built-in CSS transition to a hook as it appears. Give this macro one of these [strings](#type_string) (capitalisation and hyphens ignored): `"instant"`, `"dissolve"`, `"fade"`, `"rumble"`, `"shudder"`, `"pulse"`, `"zoom"`, `"flicker"`, `"slide-left"`, `"slide-right"`, `"slide-up"`, `"slide-down"`, `"fade-left"`, `"fade-right"`, `"fade-up"` and `"fade-down"`.

#### Example usage:

`(t8n: "pulse")[Gleep!]` makes the hook `[Gleep!]` use the "pulse" transition when it appears.

#### Details:

At present, the following text strings will produce a particular transition:

*   "instant" (causes the hook to instantly appear)
*   "dissolve" or "fade" (causes the hook to gently fade in)
*   "flicker" (causes the hook to roughly flicker in - don't use with a long [(transition-time:)](#macro_transition-time))
*   "shudder" (causes the hook to instantly appear while shaking back and forth)
*   "rumble" (causes the hook to instantly appear while shaking up and down)
*   "slide-right" (causes the hook to slide in from left to right)
*   "slide-left" (causes the hook to slide in from right to left)
*   "slide-up" (causes the hook to slide in from bottom to top)
*   "slide-down" (causes the hook to slide in from top to bottom)
*   "fade-right" (causes the hook to gently fade in while sliding rightward)
*   "fade-left" (causes the hook to gently fade in while sliding leftward)
*   "fade-up" (causes the hook to gently fade in while sliding upward)
*   "fade-down" (causes the hook to gently fade in while sliding downward)
*   "pulse" (causes the hook to instantly appear while pulsating rapidly)
*   "zoom" (causes the hook to scale up from the mouse pointer)
*   "blur" (causes the hook to appear from a blur)

All transitions are 0.8 seconds long, unless a [(transition-time:)](#macro_transition-time) changer is added to the changer.

You can't combine transitions by adding them together, like you can with [(text-style:)](#macro_text-style) - `(t8n:"dissolve")+(t8n:"shudder")` won't make a transition that simultaneously dissolve-fades and shudders.

While you can attach this to [(link-show:)](#macro_link-show) to change the transitions it uses, you can't use this macro to change the passage transitions used by links or [(link-goto:)](#macro_link-goto), and trying to do so will cause an error. Please use [(transition-depart:)](#macro_transition-depart) or [(transition-arrive:)](#macro_transition-arrive) for this purpose instead.

The "blur" transition will not work in Internet Explorer 10 or 11.

#### See also:

[(text-style:)](#macro_text-style), [(transition-time:)](#macro_transition-time), [(transition-delay:)](#macro_transition-delay), [(transition-skip:)](#macro_transition-skip), [(animate:)](#macro_animate)

Added in: 1.0.0

[](#macro_transition-delay)The (transition-delay: ) macro
---------------------------------------------------------

### (transition-delay: _[Number](#type_number)_) → _[Changer](#type_changer)_

Also known as: [(t8n-delay:)](#macro_t8n-delay)

A [changer](#type_changer) that, when added to a [(transition:)](#macro_transition) changer, delays the start of the transition by a given time.

#### Example usage:

*   `(t8n:"slide-right")+(t8n-delay:3s)[Sorry I'm late.]` makes the text slide in from the right, but only after 3 seconds have passed.
*   `(char-style: via (t8n-delay:pos*60)+(t8n:'dissolve'))[A pleasure to make your acquaintance.]` causes each character in the hook to appear one-by-one in a 'typewriter' effect.

#### Details:

Much like [(live:)](#macro_live) and [(after:)](#macro_after), this macro should be given a [number](#type_number) of milliseconds (such as `50ms`) or seconds (such as `10s`). Providing negative seconds/milliseconds is not permitted and will result in an error.

Unlike [(transition-time:)](#macro_transition-time), this does nothing when attached to links, because clicking the link should begin the transition immediately. Attaching it to a link will not produce an error.

#### See also:

[(transition:)](#macro_transition), [(transition-time:)](#macro_transition-time), [(transition-skip:)](#macro_transition-skip)

Added in: 3.2.0

[](#macro_transition-time)The (transition-time: ) macro
-------------------------------------------------------

### (transition-time: _[Number](#type_number)_) → _[Changer](#type_changer)_

Also known as: [(t8n-time:)](#macro_t8n-time)

A [changer](#type_changer) that, when added to a [(transition:)](#macro_transition) changer, adjusts the time of the transition.

#### Example usage:

`(set: $slowTransition to (transition:"shudder") + (transition-time: 2s))` creates a transition style which uses "shudder" and takes 2 seconds.

#### Details:

Much like [(live:)](#macro_live), this macro should be given a [number](#type_number) of milliseconds (such as `50ms`) or seconds (such as `10s`). Providing 0 or fewer seconds/milliseconds is not permitted and will result in an error.

This can be attached to links, much like [(t8n:)](#macro_t8n) itself.

#### See also:

[(transition:)](#macro_transition)

Added in: 1.0.0

[](#macro_transition-depart)The (transition-depart: ) macro
-----------------------------------------------------------

### (transition-depart: _[String](#type_string)_) → _[Changer](#type_changer)_

Also known as: [(t8n-depart:)](#macro_t8n-depart)

A [changer](#type_changer) that alters passage links, [(link-goto:)](#macro_link-goto)s, and most every other kind of link, changing which passage fade-out animation the link uses.

#### Example usage:

*   `(t8n-depart: "dissolve")[[Next morning]]` changes the `[[Next morning]]` link, such that clicking it takes you to the "Next morning" passage with the current passage smoothly fading out instead of instantly disappearing.
*   `(enchant: ?Link, (t8n-depart: "dissolve"))` causes ALL passage links to use the smooth fade-out. This is best used in a "header" or "footer" tagged passage.

#### Details:

This macro accepts the exact same transition names as [(transition:)](#macro_transition).

*   "instant" (causes the passage to instantly vanish)
*   "dissolve" or "fade" (causes the passage to gently fade out)
*   "flicker" (causes the passage to roughly flicker in - don't use with a long [(transition-time:)](#macro_transition-time)))
*   "shudder" (causes the passage to disappear while shaking back and forth)
*   "rumble" (causes the passage to instantly appear while shaking up and down)
*   "slide-right" (causes the passage to slide out toward the right)
*   "slide-left" (causes the passage to slide out toward the left)
*   "slide-up" (causes the passage to slide out toward the top)
*   "slide-down" (causes the passage to slide out toward the bottom)
*   "fade-right" (causes the passage to gently fade out while sliding rightward)
*   "fade-left" (causes the passage to gently fade out while sliding leftward)
*   "fade-up" (causes the passage to gently fade out while sliding upward)
*   "fade-down" (causes the passage to gently fade out while sliding downward)
*   "pulse" (causes the passage to disappear while pulsating rapidly)
*   "zoom" (causes the passage to shrink down toward the mouse pointer)
*   "blur" (causes the passage to vanish into a blur)

Attaching this macro to a hook that isn't a passage link won't do anything (no error message will be produced).

You can't combine transitions by adding them together, like you can with [(text-style:)](#macro_text-style) - `(t8n-depart:"dissolve")+(t8n-depart:"shudder")` won't make a transition that simultaneously dissolve-fades and shudders.

The "blur" transition will not work in Internet Explorer 10 or 11.

#### See also:

[(transition-arrive:)](#macro_transition-arrive)

Added in: 3.0.0

[](#macro_transition-arrive)The (transition-arrive: ) macro
-----------------------------------------------------------

### (transition-arrive: _[String](#type_string)_) → _[Changer](#type_changer)_

Also known as: [(t8n-arrive:)](#macro_t8n-arrive)

A [changer](#type_changer) that alters passage links, [(link-goto:)](#macro_link-goto)s, and most every other kind of link, changing which passage fade-in animation the link uses.

#### Example usage:

*   `(t8n-arrive: "instant")[[Next morning]]` changes the `[[Next morning]]` link, such that clicking it takes you to the "Next morning" passage, which instantly pops in instead of slowly fading in as usual.
*   `(enchant: ?Link, (t8n-arrive: "instant"))` causes ALL passage links to use the instant pop-in. This is best used in a "header" or "footer" tagged passage.

#### Details:

This macro accepts the exact same transition names as [(transition:)](#macro_transition).

*   "instant" (causes the passage to instantly vanish)
*   "dissolve" or "fade" (causes the passage to gently fade out)
*   "flicker" (causes the passage to roughly flicker out - don't use with a long [(transition-time:)](#macro_transition-time))
*   "shudder" (causes the passage to disappear while shaking back and forth)
*   "rumble" (causes the passage to instantly appear while shaking up and down)
*   "slide-right" (causes the passage to slide in from left to right)
*   "slide-left" (causes the passage to slide in from right to left)
*   "slide-up" (causes the passage to slide in from bottom to top)
*   "slide-down" (causes the passage to slide in from top to bottom)
*   "fade-right" (causes the passage to gently fade in while sliding rightward)
*   "fade-left" (causes the passage to gently fade in while sliding leftward)
*   "fade-up" (causes the passage to gently fade in while sliding upward)
*   "fade-down" (causes the passage to gently fade in while sliding downward)
*   "pulse" (causes the passage to disappear while pulsating rapidly)
*   "zoom" (causes the passage to scale up from the mouse pointer)
*   "blur" (causes the passage to appear from a blur)

Attaching this macro to a hook that isn't a passage link won't do anything (no error message will be produced).

You can't combine transitions by adding them together, like you can with [(text-style:)](#macro_text-style) - `(t8n-depart:"dissolve")+(t8n-depart:"shudder")` won't make a transition that simultaneously dissolve-fades and shudders.

The "blur" transition will not work in Internet Explorer 10 or 11.

#### See also:

[(transition-depart:)](#macro_transition-depart)

Added in: 3.0.0

[](#macro_transition-skip)The (transition-skip: ) macro
-------------------------------------------------------

### (transition-skip: _[Number](#type_number)_) → _[Changer](#type_changer)_

Also known as: [(t8n-skip:)](#macro_t8n-skip)

A [changer](#type_changer) that, when added to a [(transition:)](#macro_transition) changer, allows the player to skip or accelerate the transition by holding down a keyboard key or mouse button, or by touching the touch device.

#### Example usage:

`(t8n:"slide-right")+(t8n-time:3s)+(t8n-skip:0.2s)[OK! I'm comin'!]` makes the text slide in from the right, but only after 3 seconds have passed... but if the player holds a key, mouse button, or the screen, it gets advanced by an additional 0.2 seconds each millisecond they hold.

#### Rationale:

It's tempting to use transitions a lot in your story, but these can come at a cost to the player - watching and waiting for transitions to complete can be tiring and detrimental to your story's pacing, especially if they have to revisit certain parts of your story a lot. This macro can help by providing them with a means of skipping or accelerating the transitions if they so choose.

#### Details:

The [number](#type_number) given is an amount of milliseconds (or, if suffixed with `s`, seconds) to advance the transition. For each millisecond of the transition, Harlowe checks if a key or button is held, and if so, then it is advanced by the given number (in addition to the elapsed millisecond).

If a non-positive number is given, an error will be produced.

This effect advances both a transition's [(transition-time:)](#macro_transition-time)s and [(transition-delay:)](#macro_transition-delay)s.

#### See also:

[(transition:)](#macro_transition), [(transition-delay:)](#macro_transition-delay), [(transition-time:)](#macro_transition-time)

Added in: 3.2.0

[](#macro_animate)The (animate: ) macro
---------------------------------------

### (animate: _[HookName](#type_hookname), [String](#type_string), \[[Number](#type_number)\]_) → _[Command](#type_command)_

A [command](#type_command) that causes a hook to briefly animate, as if a [(transition:)](#macro_transition) was applied to it. The length of time that the animation plays can be optionally altered by providing a [number](#type_number).

#### Example usage:

`(after: 15s)[You'd better get going now, pardner. (animate:?passage's links, "rumble")]` causes all of the links in the passage to briefly shake using the "rumble" transition after 15 seconds have passed.

#### Rationale:

Transitions allow incoming text to animate in a visually stylish fashion, but there are times you might want already displayed text to suddenly animate, as if it had just transitioned in anew. This command can be useful, when used sparingly, to draw the attention of the player toward a particular part of the passage, such as a link, or an easily missed word, after they click a link or wait a certain amount of time. It can be particularly interesting when used to draw attention to a part that, until then, had nothing visually remarkable about it, so as to highlight it for only a moment.

#### Details:

(animate:) recognises the same transition names as [(transition:)](#macro_transition), except for "instant" (which obviously cannot be animated). These names are:

*   "dissolve" or "fade" (causes the hook to gently fade in)
*   "flicker" (causes the hook to roughly flicker in - don't use with a long [(transition-time:)](#macro_transition-time))
*   "shudder" (causes the hook to instantly appear while shaking back and forth)
*   "rumble" (causes the hook to instantly appear while shaking up and down)
*   "slide-right" (causes the hook to slide in from left to right)
*   "slide-left" (causes the hook to slide in from right to left)
*   "slide-up" (causes the hook to slide in from bottom to top)
*   "slide-down" (causes the hook to slide in from top to bottom)
*   "fade-right" (causes the hook to gently fade in while sliding rightward)
*   "fade-left" (causes the hook to gently fade in while sliding leftward)
*   "fade-up" (causes the hook to gently fade in while sliding upward)
*   "fade-down" (causes the hook to gently fade in while sliding downward)
*   "pulse" (causes the hook to instantly appear while pulsating rapidly)
*   "zoom" (causes the hook to scale up from the mouse pointer)
*   "blur" (causes the hook to appear from a blur)

The optional time value, which alters the animation's length of time, corresponds to [(transition-time:)](#macro_transition-time). Additional alterations to the animation can be given by attaching the other two transition [changers](#type_changer), [(transition-delay:)](#macro_transition-delay) and [(transition-skip:)](#macro_transition-skip), to this command.

You may notice that other, permanent animations are available as [(text-style:)](#macro_text-style) options. (animate:)'s animations operate separately to those, and animations unique to [(text-style:)](#macro_text-style) can't be temporarily applied with this macro. Instead, use [(change:)](#macro_change) with [(text-style:)](#macro_text-style) to apply those animations.

#### See also:

[(show:)](#macro_show), [(rerun:)](#macro_rerun), [(transition:)](#macro_transition)

Added in: 3.2.0

[](#macro_goto-url)The (goto-url: ) macro
-----------------------------------------

### (goto-url: _[String](#type_string)_) → _[Command](#type_command)_

When this [command](#type_command) is used, the player's browser will immediately attempt to leave the story's page, and navigate to the given URL in the same tab. If this succeeds, then the story session will "end".

#### Example usage:

`(goto-url: "http://www.example.org/")`

#### Details:

If the given URL is invalid, no error will be reported - the browser will simply attempt to open it anyway.

Much like the `<a>` HTML element, the URL is treated as a relative URL if it doesn't start with "http://", "https://", or another such protocol. This means that if your story file is hosted at "[http://www.example.org/story.html"](http://www.example.org/story.html"), then `(open-url: "page2.html")` will actually open the URL "[http://www.example.org/page2.html"](http://www.example.org/page2.html").

This command can't have [changers](#type_changer) attached - attempting to do so will produce an error.

#### See also:

[(open-url:)](#macro_open-url)

Added in: 1.0.0

[](#macro_open-url)The (open-url: ) macro
-----------------------------------------

### (open-url: _[String](#type_string)_) → _[Command](#type_command)_

When this macro is evaluated, the player's browser attempts to open a new tab with the given URL. This will usually require confirmation from the player, as most browsers block Javascript programs such as Harlowe from opening tabs by default.

#### Example usage:

`(open-url: "http://www.example.org/")`

#### Details:

If the given URL is invalid, no error will be reported - the browser will simply attempt to open it anyway.

Much like the `<a>` HTML element, the URL is treated as a relative URL if it doesn't start with "http://", "https://", or another such protocol. This means that if your story file is hosted at "[http://www.example.org/story.html"](http://www.example.org/story.html"), then `(open-url: "page2.html")` will actually open the URL "[http://www.example.org/page2.html"](http://www.example.org/page2.html").

This [command](#type_command) can't have [changers](#type_changer) attached - attempting to do so will produce an error.

#### See also:

[(goto-url:)](#macro_goto-url)

Added in: 1.0.0

[](#macro_page-url)The (page-url: ) macro
-----------------------------------------

### (page-url: ) → _[String](#type_string)_

This macro produces the full URL of the story's HTML page, as it is in the player's browser.

#### Example usage:

`(if: (page-url:) contains "#cellar")` will be true if the URL contains the `#cellar` hash.

#### Details:

This **may** be changed in a future version of Harlowe to return a [datamap](#type_datamap) containing more descriptive values about the URL, instead of a single [string](#type_string).

Added in: 1.0.0

[](#macro_scroll)The (scroll: ) macro
-------------------------------------

### (scroll: _[HookName](#type_hookname), [Number](#type_number) or HookName_) → _[Command](#type_command)_

This [command](#type_command), when given a HookName, followed by a fraction (a [number](#type_number) between 0 and 1), will change the scroll position of every hook with that name to the percentage of their height signified by the fraction. You may alternatively give another HookName instead, which, if a hook of that name is inside the first hook, will scroll the first hook and each containing hook such that the second hook is visible.

#### Example usage:

*   `(scroll:?page, 1)` will scroll the entire page to the bottom.
*   `(scroll:?page, 0.5)` will scroll the entire page to the middle.
*   `(scroll:?page, ?danger)` will scroll the entire page such that the first hook named ?danger is visible.
*   `(scroll:?A, ?C)` will change the scroll position of hooks named ?A such that hooks named ?C are visible. Note that if the hook named ?A is itself not visible (because it's offscreen) then the page's scroll position will not change to make it visible.

#### Rationale:

When you're using a large number of prose-altering macros in your story, such as [(replace:)](#macro_replace) or [(show:)](#macro_show), you'll often want to make sure the player can see the changed text immediately. This may be complicated by the fact that they could be playing the story on a small screen. The (scroll:) command lets you force the page to be in a particular scroll position whenever you want, ensuring that the affected prose is visible.

Alternatively, when using scrollable boxes like [(box:)](#macro_box), you may want to change their initial scroll position from the default (the top), for any number of reasons.

#### Details:

This command only changes the Y (vertical) scroll position of the given hooks.

This command does nothing if no hooks of the given name exist in the passage, or if none of them have vertical scroll bars. Also, it does nothing if the second HookName doesn't correspond to any hooks inside the first hook.

Obviously, giving a non-fractional number will cause an error.

Due to browser limitations, giving a fractional number will _not_ work in Internet Explorer 10. If you wish for your story to support that browser, please give a second HookName instead of a percentage.

Added in: 3.3.0

[](#macro_mouseover)The (mouseover: ) macro
-------------------------------------------

### (mouseover: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A variation of [(click:)](#macro_click) that acts as if `(action:'mouseover')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

#### See also:

[(click:)](#macro_click), [(action:)](#macro_action)

Added in: 1.0.0

[](#macro_mouseout)The (mouseout: ) macro
-----------------------------------------

### (mouseout: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A variation of [(click:)](#macro_click) that acts as if `(action:'mouseout')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

#### See also:

[(click:)](#macro_click), [(action:)](#macro_action)

Added in: 1.0.0

[](#macro_mouseover-replace)The (mouseover-replace: ) macro
-----------------------------------------------------------

### (mouseover-replace: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A variation of [(click-replace:)](#macro_click-replace) that acts as if `(action:'mouseover')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

#### See also:

[(action:)](#macro_action)

Added in: 1.0.0

[](#macro_mouseover-append)The (mouseover-append: ) macro
---------------------------------------------------------

### (mouseover-append: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A variation of [(click-append:)](#macro_click-append) that acts as if `(action:'mouseover')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

Added in: 1.0.0

[](#macro_mouseover-prepend)The (mouseover-prepend: ) macro
-----------------------------------------------------------

### (mouseover-prepend: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A variation of [(click-prepend:)](#macro_click-prepend) that acts as if `(action:'mouseover')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

#### See also:

[(action:)](#macro_action)

Added in: 1.0.0

[](#macro_mouseout-replace)The (mouseout-replace: ) macro
---------------------------------------------------------

### (mouseout-replace: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A variation of [(click-replace:)](#macro_click-replace) that acts as if `(action:'mouseout')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

#### See also:

[(action:)](#macro_action)

Added in: 1.0.0

[](#macro_mouseout-append)The (mouseout-append: ) macro
-------------------------------------------------------

### (mouseout-append: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A variation of [(click-append:)](#macro_click-append) that acts as if `(action:'mouseout')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

#### See also:

[(action:)](#macro_action)

Added in: 1.0.0

[](#macro_mouseout-prepend)The (mouseout-prepend: ) macro
---------------------------------------------------------

### (mouseout-prepend: _[HookName](#type_hookname) or [String](#type_string), \[[Changer](#type_changer) or [Lambda](#type_lambda)\]_) → _Changer_

A variation of [(click-prepend:)](#macro_click-prepend) that acts as if `(action:'mouseout')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

#### See also:

[(action:)](#macro_action)

Added in: 1.0.0

[](#macro_mouseover-goto)The (mouseover-goto: ) macro
-----------------------------------------------------

### (mouseover-goto: _[HookName](#type_hookname) or [String](#type_string), String_) → _[Command](#type_command)_

A variation of [(click-goto:)](#macro_click-goto) that acts as if `(action:'mouseover')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

#### See also:

[(action:)](#macro_action)

Added in: 3.0.0

[](#macro_mouseout-goto)The (mouseout-goto: ) macro
---------------------------------------------------

### (mouseout-goto: _[HookName](#type_hookname) or [String](#type_string), String_) → _[Command](#type_command)_

A variation of [(click-goto:)](#macro_click-goto) that acts as if `(action:'mouseout')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

#### See also:

[(action:)](#macro_action)

Added in: 3.0.0

[](#macro_mouseover-undo)The (mouseover-undo: ) macro
-----------------------------------------------------

### (mouseover-undo: _[HookName](#type_hookname) or [String](#type_string), String_) → _[Command](#type_command)_

A variation of [(click-undo:)](#macro_click-undo) that acts as if `(action:'mouseover')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

#### See also:

[(action:)](#macro_action)

Added in: 3.2.0

[](#macro_mouseout-undo)The (mouseout-undo: ) macro
---------------------------------------------------

### (mouseout-undo: _[HookName](#type_hookname) or [String](#type_string), String_) → _[Command](#type_command)_

A variation of [(click-undo:)](#macro_click-undo) that acts as if `(action:'mouseout')` was provided to it as the optional second [changer](#type_changer) (in addition to any other changers).

#### Details:

This macro is currently deprecated - while you may use it in this version, it is likely to be removed in a potential Harlowe 4.0. Use of the [(action:)](#macro_action) macro is recommended instead.

#### See also:

[(action:)](#macro_action)

Added in: 3.2.0

Special keywords
================

[](#keyword_exits)exits keyword
-------------------------------

### exits → _[Number](#type_number)_

Also known as: exit

This keyword (which can alternatively be written as "exit") evaluates to the [number](#type_number) of currently available "exits" in a passage - the number of link, mouseover, and mouseout elements that are active on the page, which could lead to new content and progress.

This keyword is designed to be used with [(live:)](#macro_live) and [(event:)](#macro_event) - you can make a hook only be revealed when a certain number of exits are available, with `(event: when exits < 3)` and similar. The [(more:)](#macro_more) macro is a shorthand form for `(event: when exits is 0)`.

The complete list of elements considered to be "exit" elements is as follows:

*   Links created by [(link:)](#macro_link), [(link-repeat:)](#macro_link-repeat), [(link-reveal:)](#macro_link-reveal), [(link-goto:)](#macro_link-goto), [(link-reveal-goto:)](#macro_link-reveal-goto), and [(link-show:)](#macro_link-show).
*   Passage links (which are the same as [(link-goto:)](#macro_link-goto) links).
*   Links created by [(click:)](#macro_click), [(click-replace:)](#macro_click-replace), [(click-append:)](#macro_click-append), [(click-prepend:)](#macro_click-prepend), and [(click-goto:)](#macro_click-goto).
*   Mouseover areas created by [(mouseover:)](#macro_mouseover), [(mouseover-replace:)](#macro_mouseover-replace), [(mouseover-append:)](#macro_mouseover-append), [(mouseover-prepend:)](#macro_mouseover-prepend), and [(mouseover-goto:)](#macro_mouseover-goto).
*   Mouseout areas created by [(mouseout:)](#macro_mouseout), [(mouseout-replace:)](#macro_mouseout-replace), [(mouseout-append:)](#macro_mouseout-append), [(mouseout-prepend:)](#macro_mouseout-prepend), and [(mouseout-goto:)](#macro_mouseout-goto).

Do note the following, however.

*   Multiple passage links that lead to the same passage (such as `[[A->Dead]] [[B->Dead]] [[C->Dead]]`) are all counted separately.
*   As of Harlowe 3.1.0, this does not consider [(link-undo:)](#macro_link-undo) macros to be exits, as they tend to only undo game progress.
*   This will also not consider [(event:)](#macro_event) or [(live:)](#macro_live) macros to be exits, even if they are guaranteed to display their hooks eventually.
*   As with macros like [(replace:)](#macro_replace), the `exits` keyword can't see forward to forthcoming elements, unless they've already appeared. For instance, the [(print:)](#macro_print) in `(print:exits is 1) [[Retreat->Hall]]` will show `false`, because the link after it hasn't appeared in the passage yet, but the [(print:)](#macro_print) in `(live:20s)[(print:exits is 1)] [[Retreat->Hall]]` will show `true`.
*   This can't be used in a [(storylet:)](#macro_storylet)'s [lambda](#type_lambda), because those lambdas are only checked when you're outside the passage.

Finally, the "undo" and "redo" links in the sidebar will not be counted, either.

Added in: 3.1.0

[](#keyword_it)it keyword
-------------------------

### it → _Any_

Like all identifiers, `it` is case-insensitive: `IT`, `iT` and `It` are all acceptable as well.

This keyword is usually a shorthand for the most recently evaluated expression's leftmost value. It lets you write `(if: $candles < 2 and it > 5)` instead of `(if: $candles < 2 and $candles > 5)`, or `(set: $candles to it + 3)` instead of `(set: $candles to $candles + 3)`. (You can't, however, use it in a [(put:)](#macro_put) or [(move:)](#macro_move) macro: `(put:$red + $blue into it)` is invalid.)

Since `it` uses the most recent expression's leftward value, `(print: $red > 2 and it < 4 and $blue > 2 and it < 4)` is the same as `(print: $red > 2 and $red < 4 and $blue > 2 and $blue < 4)`. This value of `it` changes to $blue in `it < 4` because the expression `$blue > 2` was evaluated by Harlowe just before, and $blue is the leftmost value inside that expression. (To get a greater sense of how Harlowe evaluates expressions, use Debug View in Harlowe's Debug Mode, then click on a 🔍 button in the passage.)

### Inferred `it`:

In some situations, the `it` keyword will be _inserted automatically_ by Harlowe when the story runs. If you write an incomplete comparison expression where the left-hand side is missing, like `(print: $red > 2 and < 4)`, then, when running, the `it` keyword will automatically be inserted into the absent spot - producing, in this case, `(print: $red > 2 and it < 4)`.

### Inferred comparisons:

In addition to the above, there are some situations involving chains of `and` and `or` operators where Harlowe can insert a missing `it` keyword _and the most recently-evaluated comparison operator_. If you write `(if: $a > 2 and 3)`, then Harlowe will decide, since it is incorrect to use `and` directly with [numbers](#type_number), that what you _actually_ meant was `(if: $a > 2 and it > 3)`.

### Special case - right-side inferred comparisons:

Harlowe will make inferences even if the comparison is on the right side of the chain of `and` and `or` operators, such as `(if: 3 and 4 < $a)`. In these cases, however, Harlowe will slightly change the rules of the `it` keyword to conform to English grammar intuitions. `(if: 3 and 4 < $a)` intuitively means "if both 3 and 4 are less than $a" in English. So, it is interpreted by Harlowe as follows. Since `4 < $a` is the only complete expression, it is evaluated first. Then, the _rightmost_ value, $a, becomes the `it` identifier's value. Then, `3` becomes `3 < it`. The macro call is now equivalent to `(if: 3 < $a and 4 < $a)`.

Note that, since this special case **only** applies to `it` keywords that Harlowe inserts by itself, you shouldn't really worry about it when writing your stories. Just be aware of how right-side inferred comparisons work.

### Special case - `it` in [lambdas](#type_lambda):

There is another special case regarding the `it` identifier: inside `where`, `via` or `making` lambdas, `it` refers to the data value that the lambda is currently operating on, saving you from having to write it, or, in some cases, name it at all. A lambda like `_num where _num > 4` can be shortened to just `where it > 4` - the `it` identifier in this case replacing the `_num` temp variable entirely.

### The `its` variant:

If the `it` keyword equals a [datamap](#type_datamap), [string](#type_string), [array](#type_array), or other "collection" data type, then you can access data values using the `its` variant - `(print: $red is 'egg' and its length is 3)` or `(set:$red to its 1st)`. Much like the `'s` operator, you can use computed values with `its` - `(if: $red's length is 3 and its $position is $value)` will work as expected.

Added in: 1.0.0

[](#keyword_pos)pos keyword
---------------------------

### pos → _[Number](#type_number)_

Used exclusively in [lambdas](#type_lambda), this keyword evaluates to the position of the current data value that this lambda is processing.

Consider a macro that uses lambdas, such as [(altered:)](#macro_altered) - you give it a lambda, and then one or more data values, such as in `(altered: via it + (str:pos), "A","B","C")`. When the lambda is processing "A", the pos identifier is 1, for "B" it's 2, and for "C" it's 3. This can be used for a [number](#type_number) of purposes. You can attach an ascending number to each data value, as in that example. You can make only odd-numbered values be altered by using `(cond: pos is an odd, it, it + (str:pos))` (which uses the "odd" [datatype](#type_datatype)). You can make every third value be followed by a comma, by using `(cond: pos % 3 is 2, it, it + ',')`.

Note that this only corresponds to the position of the values when given to the macro - if you use the `...` operator to spread [arrays](#type_array)' values into a macro, such as `(find: where it is > pos, ...$array1, ...$array2, ...$array3)`, then values from $array2 and $array3 will not have a pos that corresponds to their placement inside those arrays, but rather relative to all of the values, including those in $array1.

Make sure you do NOT write this as `its pos` - the pos is not a data value of the data itself! If `it` was `(dm:'HP',20,'XP',12)`, `its pos` would cause an error, as there is no "pos" value in that [datamap](#type_datamap).

Using this anywhere other than a lambda, or using it in a 'when' lambda (which doesn't operate over a sequence of values), will cause an error.

Added in: 3.1.0

[](#keyword_time)time keyword
-----------------------------

### time → _[Number](#type_number)_

This keyword evaluates to the [number](#type_number) of milliseconds passed since the passage was displayed. Its main purpose is to be used alongside [changers](#type_changer) such as [(live:)](#macro_live), [(event:)](#macro_event) or [(link:)](#macro_link). `(link:"Click")[(if: time > 5s)[...]]`, for instance, can be used to determine if 5 seconds have passed since this passage was displayed, and thus whether the player waited 5 seconds before clicking the link.

It's recommended that you compare values of time using the `ms` or `s` suffixes for number data. See the article on number data for more information.

When the passage is initially being rendered, `time` will be 0.

`time` used in [(display:)](#macro_display) macros will still produce the time of the host passage, not the contained passage. So, you can't use it to determine how long the [(display:)](#macro_display)ed passage has been present in the host passage.

As of Harlowe 3.3.4, when testing your story in Debug Mode, you can add a multiplier to `time` (so as to quickly advance the passage to an important part, or linger on an important part) by using the "Speed" dropdown in the Tools panel. If you change it to 0.5x, `time`'s number will be multiplied by 0.5, and so forth. Note that this option will currently not affect the speed of transitions (using [(t8n-delay:)](#macro_t8n-delay) or [(t8n-time:)](#macro_t8n-time)).

Added in: 1.0.0

[](#keyword_turns)turns keyword
-------------------------------

### turns → _[Number](#type_number)_

Also known as: turn

This keyword (which can alternatively be written as "turn") evaluates to the [number](#type_number) of turns that have occurred in this game. A "turn" is any movement to a passage, including movements back to the same passage, by passage links or by various [(go-to:)](#macro_go-to)\-related macros. [(redirect:)](#macro_redirect) does not cause a new turn to occur, so using it will not increase this value.

Much like the "visits" keyword, its main purpose is to be used with simple macros like [(nth:)](#macro_nth) or [(if:)](#macro_if) to change what text is displayed, such as by `(if: turns > 7)`. It is also useful in [(storylet:)](#macro_storylet) [lambdas](#type_lambda), such as `(storylet: when turns > 7)`, for storylets that should only be available when a certain number of turns have elapsed.

For testing purposes, it can be convenient to temporarily alter `turns`'s value, so as to recreate a certain game state. The [(mock-turns:)](#macro_mock-turns) macro, usable only in debug mode, lets you artificially increase the number that this evaluates to.

Added in: 3.3.0

[](#keyword_visits)visits keyword
---------------------------------

### visits → _[Number](#type_number)_

Also known as: visit

This keyword (which can alternatively be written as "visit") always equals the [number](#type_number) of times the current passage has been visited this game, including the current visit.

Much like the "turns" keyword, its main purpose is to be used in [(if:)](#macro_if) macros, such as `(if: visits is 1)`, or `(if: visits > 4)`. If you use one particular formulation a lot in your story, such as `(if: visits is 1)`, you can [(set:)](#macro_set) the [(if:)](#macro_if) into a variable using `(set: $first to (if:visits is 1))` and then use $first in its place, such as in `$first[You've discovered a new island.]`.

Similarly, it is also useful with the [(cond:)](#macro_cond) and [(nth:)](#macro_nth) macros - the latter letting you simply use `visit` as its first value to vary the results based on the number of times the passage is visited.

This can also be used to great effect in [(storylet:)](#macro_storylet) macros, such as `(storylet: when visits is 0)`, where it will always refer to the containing passage itself. When Harlowe decides whether this passage is available to [(open-storylets:)](#macro_open-storylets), this will often be 0, but when actually visiting the passage, it will be at least 1.

`visits` used in [(display:)](#macro_display) macros will still produce the number of times the _host_ passage was visited, not the contained passage. So, you can't use it to determine how many times the [(display:)](#macro_display)ed passage has been [(display:)](#macro_display)ed.

Using [(redirect:)](#macro_redirect) to go to a passage will count as a "visit" for that passage, even though it doesn't start a new turn.

For testing purposes, it can be convenient to temporarily alter `visits`'s value, so as to recreate a certain game state. The [(mock-visits:)](#macro_mock-visits) macro, usable only in debug mode, lets you increase the number of times certain passages have been "visited", so that this keyword produces higher numbers when in those passages.

By default, Harlowe records an unlimited amount of passage visits. However, you can use the [(forget-visits:)](#macro_forget-visits) macro to make Harlowe "forget" visits that are a certain number of turns old.

Added in: 3.1.0

Special passage tags
====================

[](#passagetag_header)header tag
--------------------------------

It is often very useful to want to reuse a certain set of macro calls in every passage, or to reuse an opening block of text. You can do this by giving the passage the special tag `header`, or `footer`. All passages with these tags will have their source text included at the top (or, for `footer`, the bottom) of every passage in the story, as if by an invisible [(display:)](#macro_display) macro call.

If many passages have the `header` tag, they will all be displayed, ordered by their passage name, sorted alphabetically, and by case (capitalised names appearing before lowercase names).

[](#passagetag_footer)footer tag
--------------------------------

This special tag is identical to the `header` tag, except that it places the passage at the bottom of all visited passages, instead of the top.

[](#passagetag_startup)startup tag
----------------------------------

This special tag is similar to `header`, but it will only cause the passage to be included in the very first passage in the game.

This is intended to simplify the story testing process: if you have setup code which creates variables used throughout the entire story, you should put it in a passage with this tag, instead of the starting passage. This allows you to test your story from any passage, and, furthermore, easily change the starting passage if you wish.

All passages tagged with `startup` will run, in alphabetical order by their passage name, before the passages tagged `header` will run.

[](#passagetag_debug-header)debug-header tag
--------------------------------------------

This special tag is similar to the `header` tag, but only causes the passage to be included if you're running the story in debug mode.

This has a variety of uses: you can put special debug display code in this passage, which can show the status of certain variables or provide links to change the game state as you see fit, and have that code be present in every passage in the story, but only during testing.

All passages tagged with `debug-header` will run after the passages tagged `header` will run, ordered by their passage name, sorted alphabetically, and by case (capitalised names appearing before lowercase names).

[](#passagetag_debug-footer)debug-footer tag
--------------------------------------------

This special tag is identical to the `debug-header` tag, except that it places the passage at the bottom of all visited passages, instead of the top.

All passages tagged with `debug-footer` will run, in alphabetical order by their passage name, after the passages tagged `footer` have been run.

[](#passagetag_debug-startup)debug-startup tag
----------------------------------------------

This special tag is similar to the `startup` tag, but only causes the passage to be included if you're running the story in debug mode.

This has a variety of uses: you can put special debugging code into this passage, or set up a late game state to test, and have that code run whenever you use debug mode, no matter which passage you choose to test.

All passages tagged with `debug-startup` will run, in alphabetical order by their passage name, after the passages tagged `startup` will run.

Types of data
=============

[](#type_any)Any data
---------------------

A macro that is said to accept "Any" will accept any kind of data without complaint, as long as the data does not contain any errors.

[](#type_array)Array data
-------------------------

There are occasions when you may need to work with a whole sequence of values at once. For example, a sequence of adjectives (describing the player) that should be printed depending on what a numeric variable (such as a health point variable) currently is. You could create many, many variables to hold each value, but it is preferable to use an array containing these values.

Arrays are one of the two major "data structures" you can use in Harlowe. The other, [datamaps](#type_datamap), are created with [(dm:)](#macro_dm). Generally, you want to use arrays when you're dealing with values whose _order_ and _position_ relative to each other matter. If you instead need to refer to values by a name, and don't care about their order, a datamap is best used.

You can refer to and extract data at certain positions inside arrays using `1st`, `2nd`, `3rd`, and so forth: `$array's 1st`, also written as `1st of $array`, refers to the value in the first position. Additionally, you can use `last` to refer to the last position, `2ndlast` to refer to the second-last, and so forth. Arrays also have a `length` [number](#type_number): `$array's length` tells you how many values are in it. If you can't determine the exact position to remove an item from (because it's dependent on a variable), you can use an expression, in brackers, after it: `$array's ($pos - 3)`. This syntax can be chained: if an array is inside another data structure (for instance, by `(set: $array to (a:(a:1,2),(a:2,3)))`) then you can write `$array's 1st's 1st` to access the 1 stored in the inner array.

**Note:** While you can normally display the contents of variables by simply placing their names directly in passage prose, such as `$votes`, you have to use another macro, such as [(print:)](#macro_print), to display the contents of arrays, such as `(print: $votes's 1st)`.

To see if arrays contain certain values, you can use the `contains` and `is in` operators like so: `$array contains 1` is true if it contains the number 1 anywhere, and false if it does not. `1 is in $array` is another way to write that. The `is not in` operator is the opposite of `is in`, and is used to check that values aren't in arrays. If you want to check if an array contains some, or all of the values, in another array (without needing to be in the same order), you can compare with a special `some` (also known as `any` - no relation to the `any` [datatype](#type_datatype)) or `all` name on the other array: `$array contains any of (a:2,4,6)`, and `$array contains all of (a:2,4,6)` will check if `$array` contains some, or all, of the numbers 2, 4 and 6. If you want to check if an array starts or ends with with a certain sequence of values, `start` and `end` data names can be used with `is` and `is not` - `$array's start is (a:2,4)` is the same as `$array's 1stto2nd is (a:2,4)`, and `$array's end is (a:3,6,9)` is the same as `$array's 3rdlasttolast is (a:3,6,9)`.

(Incidentally, `some` and `all` can also be used with other operators, like `is`, `is not`, `>`, `<`, `>=`, and `<=`, to compare every value in the array with a number or other value. For instance, `all of (a:2,4) >= 2` is true, as is `some of (a:2,4) >= 4`.)

For a more thorough check of the contents of an array, you can use `matches` and a datatype pattern. For instance, `$array matches (a: num, num)` lets you check that $array contains exactly two numbers, and `$array's start matches (a: 2, num)` lets you check that $array starts with 2 followed by another number. See the datatype article for more details.

Arrays may be joined by adding them together: `(a: 1, 2) + (a: 3, 4)` is the same as `(a: 1, 2, 3, 4)`. You can only join arrays to other arrays. To add a bare value to the front or back of an array, you must put it into an otherwise empty array using the [(a:)](#macro_a) macro: `$myArray + (a:5)` will make an array that's just $myArray with 5 added on the end, and `(a:0) + $myArray` is $myArray with 0 at the start.

You can make a subarray (another array containing only certain positioned values from the first array) by providing an array of numbers as a data name, to indicate which positions to include - `$arr's (a:1,3)` produces an array with only the first and third values of $arr. Negative values indicate positions counted from the array's end - `$arr's (a:-4,-2)` is the same as `(a: $arr's 4thlast, $arr's 2ndlast)`. If you want to make a subarray consisting of a large number of consecutive fixed positions, special data names can be used - `$array's 1stto3rd` indicates the "1st to 3rd" positions, and is the same as `$array's (a:1,2,3)`. `$array's 3rdlasttolast` is the same as `$array's (a:-3,-2,-1)`.

You can subtract items from arrays (that is, create a copy of an array with certain values removed) using the `-` operator: `(a:"B","C") - (a:"B")` produces `(a:"C")`. Note that multiple copies of a value in an array will all be removed by doing this: `(a:"B","B","B","C") - (a:"B")` also produces `(a:"C")`.

You may note that certain macros, like [(either:)](#macro_either), accept sequences of values. A special operator, `...`, exists which can "spread out" the values inside an array, as if they were individually placed inside the macro call. `(either: ...$array)` is a shorthand for `(either: $array's 1st, $array's 2nd, $array's 3rd)`, and so forth for as many values as there are inside the $array. Note that you can still include values after the spread: `(either: 1, ...$array, 5)` is valid and works as expected.

To summarise, the following operators work on arrays.

Operator

Purpose

Example

`is`

Evaluates to [boolean](#type_boolean) `true` if both sides contain equal items in an equal order, otherwise `false`.

`(a:1,2) is (a:1,2)` (is true)

`is not`

Evaluates to `true` if both sides differ in items or ordering.

`(a:4,5) is not (a:5,4)` (is true)

`contains`

Evaluates to `true` if the left side contains the right side.

`(a:"Ape") contains "Ape"`  
`(a:(a:99)) contains (a:99)`  
`(a:1,2) contains some of (a:2,3)`  
`(a:1,2) contains all of (a:2,1)`

`does not contain`

Evaluates to `true` if the left side does not contain the right side.

`(a:"Ape") does not contain "Egg"`

`is in`

Evaluates to `true` if the right side contains the left side.

`"Ape" is in (a:"Ape")`  
`(a:99) is in (a:(a:99))`  
`some of (a:2,3) is in (a:1,2)`  
`all of (a:2,1) is in (a:1,2)`

`is not in`

Evaluates to `true` if the right side does not contain the left side.

`"Blood" is not in (a:"Sweat","Tears")`  
`(a:98) is not in (a:(a:99))`  
`some of (a:3,2) is not in (a:1,2)`

`+`

Joins arrays.

`(a:1,2) + (a:1,2)` (is `(a:1,2,1,2)`)

`-`

Subtracts arrays, producing an array containing every value in the left side but not the right.

`(a:1,1,2,3,4,5) - (a:1,2)` (is `(a:3,4,5)`)

`...`

When used in a macro call, it separates each value in the right side.

`(a: 0, ...(a:1,2,3,4), 5)` (is `(a:0,1,2,3,4,5)`)

`'s`

Obtains the item at the right numeric position, or the `length`, `some` or `all` values. `'s` cannot have any spaces to its left.

`(a:"Y","Z")'s 1st` (is "Y")  
`(a:4,5)'s (2)` (is 5)  
`(a:5,5,5)'s length` (is 3)

`of`

Obtains the item at the left numeric position, or the `length`, `some` or `all` values.

`1st of (a:"Y","O")` (is "Y")  
`(2) of (a:"P","S")` (is "S")  
`length of (a:5,5,5)` (is 3)

`matches`

Evaluates to boolean `true` if the array on one side matches the pattern on the other.

`(a:2,3) matches (a: num, num)`, `(a: array) matches (a:(a: ))`

`does not match`

Evaluates to boolean `true` if the array on one side does not match the pattern on the other.

`(a:2,3) does not match (a: num)`, `(a: str) does not match (a:(a:'Egg'))`

`is a`, `is an`

Evaluates to boolean `true` if the right side is a datatype describing the left side.

`(a:2,3) is an array`, `(a: ) is an empty`

`is not a`, `is not an`

Evaluates to boolean `true` if the right side is a datatype that does not describe the left side.

`(a:2,3) is not an empty`

And, here are the data names that can be used with arrays.

Data name

Example

Meaning

`1st`,`2nd`,`last`, etc.

`(a:1,2)'s last`, `1st of (a:1,2)`

A single value at the given position in the array. This causes an error if it's past the bounds of the array,

`1stto3rd`, `4thlastto2ndlast` etc.

`(a:1,2,3,4,5)'s 2ndto5th`

A subarray containing only the values between the given positions (such as the first, second and third for `1stto3rd`). This does NOT cause an error if it passes the bounds of the array - so `(a:1,2,3)'s 2ndto5th` is `(a:2,3)`.

`length`

`(a:'G','H')'s length`

The length (number of data values) in the array.

`random`

`(a:"a","e","i","o","u")'s random` (is `"a"`, `"e"`, `"i"`, `"o"` or `"u"`).

A random value in the array.

`some`, `any`, `all`

`some of (a:1,2) < 3`, `all of (a:1,2) is not 3`

Usable only with comparison operators, these allow all of the values to be quickly compared. `any` is an old alias for `some` that functions identically, but which may be removed in a future version of Harlowe.

`start`, `end`

`start of (a:1,2,3,4) is (a:1,2)`, `(a:1,2,3,4)'s end is not (a:2,4)`

Usable only with the `is`, `is not`, `matches` and `does not match` operators, these allow you to compare the start or end of arrays without having to specify an exact range of values to compare.

Arrays of numbers, such as `(a:3,5)`

`$array's (a:1,-1)`

A subarray containing just the data values at the given positions in the array.

A note about `random`: this is one of the features that uses Harlowe's pseudo-random number generator. If you use [(seed:)](#macro_seed) at the start of the story, the selected values will be predetermined based on the seed [string](#type_string), and how many other random macros and features have been used before it.

[](#type_bind)Bind data
-----------------------

A few macros that produce interactive elements, like [(cycling-link:)](#macro_cycling-link), have the ability to automatically update a variable whenever the player interacts with them. There needs to be a way to specify which variable these will update: simply giving the macro the variable itself, such as in `(cycling-link: $hat, "Poker visor", "Beret")`, won't work - the value that's currently inside `$hat` will be given instead, as one would expect for every other kind of macro. So, the `bind` keyword is needed to make your intent unambiguous: `bind $hat` produces a "bound variable".

One can bind any kind of variable: story-wide variables like `$morality`, temp variables like `_glance`, and data values and positions inside them, like `$diary's 1st's event`. Once bound, the macro's element will set data to it automatically, as if by a series of unseen [(set:)](#macro_set)s or [(move:)](#macro_move)s.

Two-way binds, created by the `2bind` syntax, enforce an equality that normal binds do not: whenever the variable changes outside of the element, such as by an `(event:)` macro, then the interaction element updates to match, if it can. Thus, there are two bindings between the data and the element using it: the variable updates when the element changes, and the element updates when the variable changes.

Note that bound variables can't be [(set:)](#macro_set) into variables themselves, because there's no real point to doing so (and it could lead to a lot of undue confusion).

Operator

Purpose

Example

`bind`

Binds the named variable on the right.

`bind $weapon`, `bind _hat`, `bind $profile's age`

`2bind`

Double-binds the named variable on the right.

`2bind $weapon`, `2bind _hat`, `2bind $profile's age`

If you bind an [array](#type_array)'s `random` data name (a data name which normally provides a random value) then Harlowe will pick a random position, and retain that position for the duration of the bound variable's usage. So, if it picks the 3rd position, the macro using the bound variable will be consistently bound to the 3rd position's value.

[](#type_boolean)Boolean data
-----------------------------

Branching stories involve the player making choices, and the game using its own programmed logic to react to those choices. Much as how arithmetic involves manipulating [numbers](#type_number) with addition, multiplication and such, logic involves manipulating the values `true` and `false` using its own operators. Those are not text [strings](#type_string) - they are values as fundamental as the natural numbers. In computer science, they are both called _Booleans_, after the 19th century mathematician George Boole.

`is` is a logical operator. Just as + adds the two numbers on each side of it, `is` compares two values on each side and evaluates to `true` or `false` depending on whether they're identical. It works equally well with strings, numbers, [arrays](#type_array), and anything else, but beware - the string `"2"` is not equal to the number 2.

There are several other logical operators available.

Operator

Purpose

Example

`is`

Evaluates to `true` if both sides are equal, otherwise `false`.

`$bullets is 5`

`is not`

Evaluates to `true` if both sides are not equal.

`$friends is not $enemies`

`contains`

Evaluates to `true` if the left side contains the right side.

`"Fear" contains "ear"`

`does not contain`

Evaluates to `true` if the left side does not contain the right side.

`"Fear" does not contain "eet"`

`is in`

Evaluates to `true` if the right side contains the left side.

`"ugh" is in "Through"`

`>`

Evaluates to `true` if the left side is greater than the right side.

`$money > 3.75`

`>=`

Evaluates to `true` if the left side is greater than or equal to the right side.

`$apples >= $carrots + 5`

`<`

Evaluates to `true` if the left side is less than the right side.

`$shoes < $people * 2`

`<=`

Evaluates to `true` if the left side is less than or equal to the right side.

`65 <= $age`

`and`

Evaluates to `true` if both sides evaluates to `true`.

`$hasFriends and $hasFamily`

`or`

Evaluates to `true` if either side is `true`.

`$fruit or $vegetable`

`not`

Flips a `true` value to a `false` value, and vice versa.

`not $stabbed`

`matches`

Evaluates to `true` if one side is a pattern or [datatype](#type_datatype) describing the other.

`boolean matches true`

`does not match`

Evaluates to `true` if one side does not describe the other.

`boolean does not match "true"`

`is a`, `is an`

Evaluates to boolean `true` if the right side is `boolean` and the left side is a boolean.

`$wiretapped is a boolean`

`is not a`, `is not an`

Evaluates to boolean `true` if the right side does not describe the left side.

`"Boo" is not an empty`, `2 is not an odd`

Conditions can quickly become complicated. The best way to keep things straight is to use parentheses to group sub-statements and express order of operations.

[](#type_changer)Changer data
-----------------------------

Changers are similar to [commands](#type_command), but they only have an effect when they're attached to hooks, passage links and commands, and modify them in some manner. Macros that work like this include [(text-style:)](#macro_text-style), [(font:)](#macro_font), [(t8n:)](#macro_t8n), [(text-rotate:)](#macro_text-rotate), [(hook:)](#macro_hook), [(click:)](#macro_click), [(link:)](#macro_link), [(for:)](#macro_for), [(if:)](#macro_if), and more.

    (set: $sawDuckHarbinger to true)
    (if: $sawDuckHarbinger)[You still remember spying the black duck, harbinger of doom.]
    (t8n-depart: "dissolve")[[Return to the present]]
    

You can save changers into variables, and re-use them many times in your story:

    (set: $robotic to (font:'Courier New'))
    $robotic[Hi, it's me. Your clanky, cold friend.]
    

Alternatively, you may prefer to use the [(change:)](#macro_change) or [(enchant:)](#macro_enchant) macro to accomplish the same thing using only hook names:

    |robotic>[Hi, it's me. Your clanky, cold friend.]
    (change: ?robotic, (font:'Courier New'))
    

Changers can be combined using the `+` operator: `(text-colour: red) + (font: "Courier New")[This text is red Courier New.]` styles the text using both changers at once. These combined changers, too, can be saved in variables or used with [(change:)](#macro_change) or [(enchant:)](#macro_enchant).

    (set: _alertText to (font:"Courier New") + (text-style: "buoy")+(text-colour:"#e74"))
    _alertText[Social alert: no one read the emails you sent yesterday.]
    _alertText[Arithmetic error: I forgot my seven-times-tables.]
    

[](#type_codehook)CodeHook data
-------------------------------

Several macros, such as [(dialog:)](#macro_dialog) or [(append-with:)](#macro_append-with), are used to render some markup code stored in a [string](#type_string). However, markup code stored in strings can be difficult to write or read in the editor, because there's no syntax highlighting for the interior of string. It is also sometimes desirable to have markup code in strings appear different to other strings in Debug Mode, so that you can more easily tell what the string is used for in the game.

Code hooks can be used as alternatives to strings in these cases. You may think of them as "hooks" that are written inside macro calls, as data provided to them. Place markup code between `[` and `]` symbols, in the same way that strings are between pairs of `"` or `'` symbols.

Note that unlike strings, you can nest hooks inside code hooks without needing to escape the `]` symbol. `(print:[Good afternoon.(if:visits > 1)[ I'm glad to see you again]])` is a valid code hook.

The [(macro:)](#macro_macro) macro only accepts code hooks for the inner code of the custom macro. The contents of this hook will not be displayed when the custom macro runs, so you can put any [number](#type_number) of comments and remarks inside it, for your own benefit.

[](#type_colour)Colour data
---------------------------

Colours are special data values which can be provided to certain styling macros, such as [(bg:)](#macro_bg) or [(text-colour:)](#macro_text-colour). You can use built-in named colour values, or create other colours using the [(rgb:)](#macro_rgb) or [(hsl:)](#macro_hsl) macros.

The built-in values consist of the following:

Value

HTML colour equivalent

`red`

#e61919

`orange`

#e68019

`yellow`

#e5e619

`lime`

#80e619

`green`

#19e619

`aqua` or `cyan`

#19e5e6

`blue`

#197fe6

`navy`

#1919e6

`purple`

#7f19e6

`magenta` or `fuchsia`

#e619e5

`white`

#fff

`black`

#000

`grey` or `gray`

#888

`transparent`

transparent

(These colours were chosen to be visually pleasing when used as both background colours and text colours, without the glaring intensity that certain HTML colours, like pure #f00 red, are known to exhibit.)

In addition to these values, and the [(rgb:)](#macro_rgb) macro, you can also use HTML hex notation to specify colours, such as `#691212` or `#a4e`. (Note that these are _not_ [strings](#type_string), but bare values - `(bg: #a4e)` is valid, as is `(bg:navy)`.) Of course, HTML hex notation is notoriously hard to read and write, so this isn't recommended.

If you want to quickly obtain a colour which is the mixture of two others, you can mix them using the `+` operator: `red + orange + white` produces a mix of red and orange, tinted white. `#a4e + black` is a dim purple. Note that the `transparent` built-in value allows you to make colours partly transparent by mixing them with it. If you want to mix colours in different proportions, such as by making a 90% white, 10% yellow shade, then the [(mix:)](#macro_mix) macro is also available to use.

Like [datamaps](#type_datamap), colour values have a few read-only data names, which let you examine the **r**ed, **g**reen and **b**lue components that make up the colour, as well as its **h**ue, **s**aturation and **l**ightness, its **a**lpha transparency, and a datamap showing its **lch** form (in the same values given to the [(lch:)](#macro_lch) macro).

Data name

Example

Meaning

`r`

`$colour's r`

The red component, a whole [number](#type_number) from 0 to 255.

`g`

`$colour's g`

The green component, a whole number from 0 to 255.

`b`

`$colour's b`

The blue component, a whole number from 0 to 255.

`h`

`$colour's h`

The hue angle in degrees, a whole number from 0 to 359.

`s`

`$colour's s`

The saturation percentage, a fractional number from 0 to 1.

`l`

`$colour's l`

The lightness percentage, a fractional number from 0 to 1.

`a`

`$colour's a`

The alpha percentage, a fractional number from 0 to 1.

`lch`

`$colour's lch`

A datamap of LCH values for this colour.

These values can be used in the [(hsl:)](#macro_hsl), [(rgb:)](#macro_rgb) and [(lch:)](#macro_lch) macros to produce further colours. Note that some of these values do not transfer one-to-one between representations! For instance, the hue of a gray is essentially irrelevant, so grays will usually have a `h` value equal to 0, even if you provided a different hue to [(hsl:)](#macro_hsl). Furthermore, colours with a lightness of 1 are always white, so their saturation and hue are irrelevant.

The `lch` value produces a datamap containing these values.

Data name

Example

Meaning

`l`

`$colour's lch's l`

The lightness percentage, a fractional number from 0 to 1. (Not the same as `$colour's l`!)

`c`

`$colour's lch's c`

The chroma component, a whole number from 0 to 230 (but which is usually below 132).

`h`

`$colour's lch's h`

The hue angle in degrees, a whole number from 0 to 359.

Colours, when used in passage prose or given to [(print:)](#macro_print), produce a square swatch containing the colour. This is a `<tw-colour>` element, but otherwise has no other features or capabilities and is intended solely for debugging purposes.

[](#type_command)Command data
-----------------------------

Commands are special kinds of data which perform an effect when they're placed in the passage. Most commands are created from macros placed directly in the passage, but, like all forms of data, they can be saved into variables using [(set:)](#macro_set) and [(put:)](#macro_put), and stored for later use.

Macros that produce commands include [(alert:)](#macro_alert), [(save-game:)](#macro_save-game), [(load-game:)](#macro_load-game), and more.

Commands like [(display:)](#macro_display), [(print:)](#macro_print), [(link:)](#macro_link), [(show:)](#macro_show) and so on are used to print data or an interactive element into the passage. These elements can be styled like hooks, by attaching [changers](#type_changer) to the macro, as if it was a hook.

In addition to their visual appearance, you can also change what passage transitions links use, by applying [(t8n-depart:)](#macro_t8n-depart) and [(t8n-arrive:)](#macro_t8n-arrive). (Note that since normal passage links are identical to the [(link-goto:)](#macro_link-goto) macro, you can also attach changers to passage links.)

[](#type_custommacro)CustomMacro data
-------------------------------------

These are custom macros produced by the [(macro:)](#macro_macro) and [(partial:)](#macro_partial) macros. You can (and should) store them in variables using [(set:)](#macro_set), and call them like any other macro, by using the variable instead of a name: `($someCustomMacro:)` is how you would call a custom macro stored in the variable $someCustomMacro, and `(_anotherCustomMacro:)` is how you would call a custom macro stored in the temp variable \_anotherCustomMacro.

Custom macros created with [(macro:)](#macro_macro) have a single data name that you can examine.

Data name

Example

Meaning

`params`

`$customMacro's params`, `params of $customMacro`

An [array](#type_array) containing all of the [TypedVar](#type_typedvar) data given to the [(macro:)](#macro_macro) macro when this was created.

Placing custom macros directly into passage prose, such as by calling [(macro:)](#macro_macro) outside of a [(set:)](#macro_set) or another data-storing macro, or writing a custom macro call incorrectly, will cause an error.

For more information about custom macros, see the [(macro:)](#macro_macro) macro's article.

[](#type_datamap)Datamap data
-----------------------------

There are occasions when you may need to work with collections of values that "belong" to a specific object or entity in your story - for example, a table of numeric "statistics" for a monster - or that associate a certain kind of value with another kind, such as a combination of adjectives ("slash", "thump") that change depending on the player's weapon name ("claw", "mallet") etc. You can create datamaps to keep these values together, move them around en masse, and organise them.

Datamaps are one of the two major "data structures" you can use in Harlowe. The other, [arrays](#type_array), are created with [(a:)](#macro_a). You'll want to use datamaps if you want to store values that directly correspond to _[strings](#type_string)_, and whose _order_ and _position_ do not matter. If you need to preserve the order of the values, then an array may be better suited.

Datamaps consist of several string _name_s, each of which maps to a specific _value_. `$animals's frog` and `frog of $animals` refers to the value associated with the name 'frog'. You can add new names or change existing values by using [(set:)](#macro_set) - `(set: $animals's wolf to "howl")`. You can express the name as a bare word if it doesn't have a space or other punctuation in it - `$animals's frog` is OK, but `$animals's komodo dragon` is not. In that case, you'll need to always supply it as a string - `$animals's "komodo dragon"`. This syntax can be chained: if a datamap is inside another data structure (for instance, by `(set: $arr to (a:(dm:'name', 'silver ring', 'resaleValue', 250),(dm:'name', 'a button', 'resaleValue', 0)))`) then you can write `$arr's 1st's resaleValue` to access the 250 in the first datamap.

**Note:** While you can normally display the contents of variables by simply placing their names directly in passage prose, such as `$sandwich`, you have to use another macro, such as [(print:)](#macro_print), to display the contents of datamaps, such as `(print: $sandwich's bread)`.

Datamaps may be joined by adding them together: `(dm: "goose", "honk") + (dm: "robot", "whirr")` is the same as `(dm: "goose", "honk", "robot", "whirr")`. In the event that the second datamap has the same name as the first one, it will override the first one's value - `(dm: "dog", "woof") + (dm: "dog", "bark")` will act as `(dm: "dog", "bark")`.

You may notice that you usually need to know the names a datamap contains in order to access its values. There are certain macros which provide other ways of examining a datamap's contents: [(dm-names:)](#macro_dm-names) provides a sorted array of its names, [(dm-values:)](#macro_dm-values) provides a sorted array of its values, and [(dm-entries:)](#macro_dm-entries) provides an array of names and values.

To summarise, the following operators work on datamaps.

Operator

Purpose

Example

`is`

Evaluates to [boolean](#type_boolean) `true` if both sides contain equal names and values, otherwise `false`.

`(dm:"HP",5) is (dm:"HP",5)` (is true)

`is not`

Evaluates to `true` if both sides differ in items or ordering.

`(dm:"HP",5) is not (dm:"HP",4)` (is true)  
`(dm:"HP",5) is not (dm:"MP",5)` (is true)

`contains`

Evaluates to `true` if the left side contains the name on the right.  
(To check that a datamap contains a value, try using `contains` with [(dm-values:)](#macro_dm-values))

`(dm:"HP",5) contains "HP"` (is true)  
`(dm:"HP",5) contains 5` (is false)

`does not contain`

Evaluates to `true` if the left side does not contain the name on the right.

`(dm:"HP",5) does not contain "MP"` (is true)

`is in`

Evaluates to `true` if the right side contains the name on the left.

`"HP" is in (dm:"HP",5)` (is true)

`is not in`

Evaluates to `true` if the right side does not contain the name on the left.

`"XP" is not in (dm:"HP",5)` (is true)

`+`

Joins datamaps, using the right side's value whenever both sides contain the same name.

`(dm:"HP",5) + (dm:"MP",5)`

`'s`

Obtains the value using the name on the right. `'s` cannot have any spaces to its left.

`(dm:"love",155)'s love` (is 155).

`of`

Obtains the value using the name on the left.

`love of (dm:"love",155)` (is 155).

`matches`

Evaluates to boolean `true` if the datamap on one side matches the pattern on the other.

`(dm:"Love",2,"Fear",4) matches (dm: "Love", num, "Fear", num)`

`does not match`

Evaluates to boolean `true` if the datamap on one side does not match the pattern on the other.

`(dm:"Love",2,"Fear",4) matches (dm: "Joy", num, "Sorrow", num)`

`is a`, `is an`

Evaluates to boolean `true` if the right side is a [datatype](#type_datatype) that describes the left side.

`(dm:'a',1) is a datamap`

`is not a`, `is not an`

Evaluates to boolean `true` if the right side is a datatype that does not describe the left side.

`(dm:'a',1) is not an empty`

[](#type_dataset)Dataset data
-----------------------------

[Arrays](#type_array) are useful for dealing with a sequence of related data values, especially if they have a particular order. There are occasions, however, where you don't really care about the order, and instead would simply use the [array](#type_array) as a storage place for values - using `contains` and `is in` to check which values are inside.

Think of datasets as being like arrays, but with specific restrictions.

*   You can't access any positions within the dataset (so, for instance, the `1st`, `2ndlast` and `last` aren't available, although the `length` still is) and can only use `contains` and `is in` to see whether a value is inside (or, by using `some` and `all`, many values).
    
*   Datasets only contain unique values: adding the [string](#type_string) "Go" to a dataset already containing "Go" will do nothing. Values are considered unique if the `is` operator, when placed between them, would produce `false`.
    
*   Datasets are considered equal (by the `is` operator) if they have the same items, regardless of order (as they have no order).
    

These restrictions can be helpful in that they can stop programming mistakes from occurring - you might accidentally try to modify a position in an array, but type the name of a different array that should not be modified as such. Using a dataset for the second array, if that is what best suits it, will cause an error to occur instead of allowing this unintended operation to continue.

Operator

Purpose

Example

`is`

Evaluates to [boolean](#type_boolean) `true` if both sides contain equal items, otherwise `false`.

`(ds:1,2) is (ds 2,1)` (is true)

`is not`

Evaluates to `true` if both sides differ in items.

`(ds:5,4) is not (ds:5)` (is true)

`contains`

Evaluates to `true` if the left side contains the right side.

`(ds:"Ape") contains "Ape"`  
`(ds:(ds:99)) contains (ds:99)`  
`(ds: 1,2,3) contains all of (a:2,3)`  
`(ds: 1,2,3) contains some of (a:3,4)`

`does not contain`

Evaluates to `true` if the left side does not contain the right side.

`(ds:"Ape") does not contain "Egg"`

`is in`

Evaluates to `true` if the right side contains the left side.

`"Ape" is in (ds:"Ape")`  
`(a:3,4) is in (ds:1,2,3)`

`is not in`

Evaluates to `true` if the right side does not contain the left side.

`"Hope" is not in (ds:"Famine","Plague","Pollution")`

`+`

Joins datasets.

`(ds:1,2,3) + (ds:1,2,4)` (is `(ds:1,2,3,4)`)

`-`

Subtracts datasets.

`(ds:1,2,3) - (ds:1,3)` (is `(ds:2)`)

`...`

When used in a macro call, it separates each value in the right side.  
The dataset's values are sorted before they are spread out.

`(a: 0, ...(ds:1,2,3,4), 5)` (is `(a:0,1,2,3,4,5)`)

`matches`

Evaluates to boolean `true` if the dataset on one side matches the pattern on the other.

`(ds:2,3) matches (ds: 3, num)`, `(ds: array) matches (ds:(a: ))`

`does not match`

Evaluates to boolean `true` if the dataset on one side does not match the pattern on the other.

`(ds:2,3) does not match (a: 3, str)`, `(ds: array) does not match (ds:2)`

`is a`, `is an`

Evaluates to boolean `true` if the right side is a [datatype](#type_datatype) that describes the left side.

`(ds:2,3) is a dataset`

`is not a`, `is not an`

Evaluates to boolean `true` if the right side is a datatype that does not describe the left side.

`(ds:2,3) is an empty`

[](#type_datatype)Datatype data
-------------------------------

Datatypes are special keyword values used to confirm that a variable's data is a certain type - for instance, that a variable that should only hold a [number](#type_number) does indeed do so. They can be used to perform one-off checks using the `is a` and `matches` operators, and can be combined with variables to make [TypedVars](#type_typedvar), variables that are restricted to a certain type and that automatically perform these checks for you.

The built-in datatypes are as follows.

Value

Data type

`number`, `num`

[Numbers](#type_number)

`string`, `str`

[Strings](#type_string)

`boolean`, `bool`

[Booleans](#type_boolean)

`array`

[Arrays](#type_array)

`datamap`, `dm`

[Datamaps](#type_datamap)

`dataset`, `ds`

[Datasets](#type_dataset)

`command`

[Commands](#type_command)

`changer`

[Changers](#type_changer)

`color`, `colour`

[Colours](#type_colour)

`gradient`

[Gradients](#type_gradient)

`lambda`

[Lambdas](#type_lambda)

`macro`

[CustomMacros](#type_custommacro)

`datatype`

Datatypes

`codehook`

[CodeHooks](#type_codehook)

In addition to the above, there are a few variations of these that only match a certain subset of each type.

Value

Data type

`even`

Only matches even numbers.

`odd`

Only matches odd numbers.

`integer`, `int`

Only matches whole numbers (numbers with no fractional component, and which are positive or negative).

`empty`

Only matches these empty structures: `""` (the empty [string](#type_string)), `(a:)`, `(dm:)` and `(ds:)`.

`whitespace`

Only matches a single character of whitespace (spaces, newlines, and other kinds of space).

`lowercase`

Only matches a single lowercase character. Lowercase characters are characters that change when put through [(uppercase:)](#macro_uppercase).

`uppercase`

Only matches a single uppercase character. Uppercase characters are characters that change when put through [(lowercase:)](#macro_lowercase).

`anycase`

This matches any character which is case-sensitive - that is, where its [(lowercase:)](#macro_lowercase) form doesn't match its [(uppercase:)](#macro_uppercase) form.

`alphanumeric`, `alnum`

Only matches a single alphanumeric character (letters and numbers).

`digit`

Only matches a string consisting of exactly one of the characters '0', '1', '2', '3', '4', '5', '6', '7', '8', and '9'.

`linebreak`, `newline`

Only matches a line break character (also known as a "newline" character).

`const`

Matches nothing; Use this only with [(set:)](#macro_set) to make constants.

`any`

Matches anything; Use this with [(macro:)](#macro_macro) to make variables that accept any storable type, or with [(set:)](#macro_set) inside data structure patterns.

Finally, custom string datatypes can be created using a suite of macros, starting with [(p:)](#macro_p). If any of the string datatypes above aren't exactly suited to the task you need them to perform, consider using [(p:)](#macro_p) to create your own.

If you want to check if a variable's data is a certain type, then you can use the `is a` operator to do the comparison. To check if the data in $money is a number, write `$money is a num`.

Warning: you must write `is a` - don't write `$money is num`, because `is` by itself checks if the left side exactly equals the right side, and `num` represents all numbers, not the specific number contained in $money.

Note that data that can't be stored in a variable, such as [HookNames](#type_hookname), doesn't have a corresponding datatype name, because you won't need to compare things to it.

Additionally, along with the `is a` operator, there is a `matches` operator which is useful when you're dealing with data structures like [arrays](#type_array) or [datamaps](#type_datamap). `$pos is a array` checks if $pos is an array, but that may not be precise enough for you. `$pos matches (a: number, number)` checks to see if $pos is an array containing only two numbers in a row. A data structure with datatype names in various positions inside it is called a **pattern**, and `matches` is used to compare data values and patterns.

#### Spread datatypes:

A modified datatype can be created using the `...` syntax inside an [(a:)](#macro_a) macro call or a pattern macro call. `...str` can match any number of string values, including zero. You can think of this as a counterpart to the normal use of the spread `...` syntax - just as one array is turned into many values, so too is `...str` considered equivalent to enough `str` datatypes to match the values on the other side.

Inside a typed variable in a custom macro call defined using [(macro:)](#macro_macro)) a spread datatype refers to zero or more matching values being given at and after that variable's position in the macro call. The typed variable in `(macro: ...num-type _a, [(output:_a)])` refers to any number of numbers being given to the macro. The variable inside the code hook is an array containing all of those number values. See the [(macro:)](#macro_macro) macro's article for more details.

Inside a string pattern, like those created by [(p:)](#macro_p), spread datatypes have a slightly different meaning. They refer to zero or more sequences of the given datatype. `...whitespace` inside [(p:)](#macro_p) matches an entire string of whitespace, which can be one or more characters, as well as the empty string. `...digit` matches zero or more digit characters.

Note: outside of macro calls and typed variables, spread datatypes are considered the same as normal datatypes. So, `(a:2,3) matches ...num` produces `false` - in this case, you should write `(a:2,3) matches (a:...num)` instead.

Some more examples.

*   `(datamap:'a',2,'b',4) matches (datamap:'b',num,'a',num))` is true.
*   `(a: 2, 3, 4) matches (a: 2, int, int)` is true. (Patterns can have exact values in them, which must be equal in the matching data).
*   `(a: ...num, ...str) matches (a: 2, 3, 4, 'five')`
*   `(a: (a: 2), (a: 4)) matches (a: (a: num), (a: even))` is true.
*   `(p: (p-many:"A"), "!") matches "AAAAAAAA!"` is true.

To summarise, the datatype operators are the following.

Operator

Purpose

Example

`matches`

Evaluates to [boolean](#type_boolean) `true` if the data on the left matches the pattern on the right.

`(a:2,3) matches (a: num, num)`

`is a`, `is an`

Similar to `matches`, but requires the right side to be just a type name.

`(a:2,3) is an array`, `4.1 is a number`

`-type`

Produces a TypedVar, if a variable follows it. Note that there can't be any space between `-` and `type`.

`num-type $funds`

`...`

Produces a spread datatype, which, when used in arrays or patterns, matches zero or more values that match the type.

`(a: ...str) matches (a:'Elf','Drow','Kithkin')`

[](#type_gradient)Gradient data
-------------------------------

Gradients are special composite data values which can be provided to [(bg:)](#macro_bg) and [(meter:)](#macro_meter). Much as [colour](#type_colour) data represents a single colour that can be used with [(text-colour:)](#macro_text-colour) or [(bg:)](#macro_bg), gradients represent special computer-generated backgrounds that smoothly transition from one colour on one side, to another colour on its other side, with any [number](#type_number) of other colours in between.

For an in-depth description of how to create gradients, see the article for (gradient:).

Gradients, like colours, have a few data values you can examine, but cannot [(set:)](#macro_set).

Data name

Example

Meaning

`angle`

`$grad's angle`

The angle, a number from 0 to 359. If a value outside this range was given to `(gradient:)`, this will return that value wrapped to this range.

`stops`

`$grad's stops`

An [array](#type_array) of the gradient's colour-stops, represented as [datamaps](#type_datamap). Gradients created by (gradient:) have "percent" and "colour" data names in this datamap. For [(stripes:)](#macro_stripes) gradients, "pixels" and "colour" data names appear instead.  
`(gradient: 90, 0.2, blue, 0.8, white)'s stops` is `(a:(dm: "percent", 0.2, "colour", blue), (dm: "percent", 0.8, "colour", white))`.

Gradients, when used in passage prose or given to [(print:)](#macro_print), produce a square swatch containing the gradient. This is a `<tw-colour>` element, but otherwise has no other features or capabilities and is intended solely for debugging purposes.

[](#type_hookname)HookName data
-------------------------------

A hook name is like a variable name, but with `?` replacing the `$` sigil. When given to a macro that accepts it, it signifies that _all_ hooks with the given name should be affected by the macro. For instance, `(click: ?red)` will cause _all_ hooks with a `<red|` or `|red>` nametag to be subject to the [(click:)](#macro_click) macro's behaviour.

In earlier Harlowe versions, it was possible to also use hook names with [(set:)](#macro_set), [(put:)](#macro_put) and [(move:)](#macro_move) to modify the text of the hooks, but macros such as [(replace:)](#macro_replace) should be used to accomplish this instead.

If a hook name does not apply to a single hook in the given passage (for instance, if you type `?rde` instead of `?red`) then no error will be produced. This is to allow macros such as [(click:)](#macro_click) to be placed in the `header` or `footer` passages, and thus easily affect hooks in every passage, even if individual passages lack the given hook name. Of course, it means that you'll have to be extra careful while typing the hook name, as misspellings will not be easily identified by Harlowe itself.

If you wish to construct a hook name programmatically, based on an existing [string](#type_string) variable, then the [(hooks-named:)](#macro_hooks-named) macro may be used in place of the above syntax.

#### Built in hook names:

There are five special built-in hook names, ?Page, ?Passage, ?Sidebar, ?Link and ?Visited, which, in addition to selecting named hooks, also affect parts of the page that you can't normally style with macros. They can be styled using the [(enchant:)](#macro_enchant) macro.

*   `?Page` selects the page element (to be precise, the `<tw-story>` element) and using it with the [(background:)](#macro_background) macro lets you change the background of the entire page.
*   `?Passage` affects just the element that contains the current passage's text (to be precise, the `<tw-passage>` element) and lets you, for instance, change the [(text-colour:)](#macro_text-colour) or [(font:)](#macro_font) of all the text, or apply complex [(css:)](#macro_css) to it.
*   `?Sidebar` selects the passage's sidebar containing undo/redo icons (`<tw-sidebar>`). You can style it with styling macros, or use [(replace:)](#macro_replace) or [(append:)](#macro_append) to insert your own text into it.
*   `?Link` selects all of the links (passage links, and those created by [(link:)](#macro_link) and other macros) in the passage.

#### Data names:

If you only want some of the hooks with the given name to be affected, you can treat the hook name as a sort of read-only [array](#type_array): specify just its `1st` element (such as by `?red's 1st`) to only affect the first such named hook in the passage, access the `last` to affect the last, and so forth. You can also specify multiple elements, using syntax like `1stto3rd`, to affect all of the elements between and including those positions. Even specifying an array of arbitrary positions, like `?red's (a:1,3,7)`, will work. Unlike arrays, though, you can't access their `length`, nor can you spread them with `...`.

Moreover, a few special data names exist.

*   `chars` (as in `?title's chars`) selects each individual character inside the hook, as if it was in its own hook. This can be used for a variety of text effects - using [(enchant:)](#macro_enchant) with `?hook's chars's 1st` can be used to give a hook a styled "drop-cap" without having to explicitly style the leading character. This will NOT select whitespace characters.
*   `lines` (as in `?passage's lines`) selects individual lines of text within a hook. A line is any run of text or code between line breaks (or the passage's start and end) - a word-wrapped paragraph of prose is thus considered a single "line" as a result.
*   `links` (as in `?body's links`) is similar in use to `?link`, but only selects links within the hook.
*   `visited` (as in `?body's visited`) only selects links to visited passages. This allows you to affect and re-style these links in particular. These links normally have a different [colour](#type_colour) to normal links, but if you apply a colour to `?Link`, that colour is replaced. You can restore the distinct colour these links have by applying a colour to `visited` afterward.

**Warning:** using `chars` with [(enchant:)](#macro_enchant) may cause text-to-speech assistive programs to fail to read the enchanted passage correctly. If this would be unacceptable for you or your story, refrain from using `chars` with [(enchant:)](#macro_enchant).

**Warning:** using `chars` with [(enchant:)](#macro_enchant) to enchant very large amounts of text at once will likely cause excessive CPU load for the reader, making their browser unresponsive.

Data name

Example

Meaning

`1st`,`2nd`,`last`, etc.

`?hook's last`, `1st of ?hook`

Only one hook with the given name, at a certain position in the passage relative to the rest (first with its name, last with its name, etc).

`1stto3rd`, `4thlastto2ndlast` etc.

`?hook's 2ndto5th`

Only hooks with this name, at a certain sequence of positions (such as the first, second and third for `1stto3rd`) relative to the rest.

`chars`

`?title's chars`, `chars of ?scream`

Each individual character within the hook, as if the characters were hooks in themselves.

`links`

`?body's links`, `links of ?aside`

Each link inside the hook.

`lines`

`?passage's lines`, `lines of ?passage`

Each span of continuous text, separated by line breaks, inside the passage.

`visited`

`?passage's visited`, `visited of ?passage`

Each passage link (and [(link-goto:)](#macro_link-goto) link) inside the hook that points to an already visited passage.

#### Operators:

Unlike most forms of data, only one operator can be used with hook names.

Operator

Purpose

Example

`+`

Creates a hook name that, when given to macros, causes both of the added hooks to be affected by that macro.

`(click: ?red + ?blue's 1st)` affects all hooks tagged `red`, as well as the first hook tagged `blue`.

[](#type_instant)Instant data
-----------------------------

A few special macros in Harlowe perform actions immediately, as soon as they're evaluated. These can be used in passages, but cannot have their values saved using [(set:)](#macro_set) or [(put:)](#macro_put), or stored in data structures.

[](#type_lambda)Lambda data
---------------------------

Suppose you want to do a complicated task with an [array](#type_array), like, say, convert all of its [strings](#type_string) to lowercase, or check if its [datamaps](#type_datamap) have "health" data equal to 0, or join all of its strings together into a single string. You want to be able to tell Harlowe to search for "each string where the string's 1st letter is A". You want to write a "function" for how the search is to be conducted.

Lambdas are user-created functions that let you tell certain macros, like [(find:)](#macro_find), [(altered:)](#macro_altered) and [(folded:)](#macro_folded), precisely how to search, alter, or combine the data provided to them. Try thinking of them as stored expressions that operate on a single value in the sequence of data, which are then run on every value in turn.

There are several types of lambdas, as well as lambdas that comprise multiple types.

*   **"where"** lambdas, used by the [(find:)](#macro_find) macro, are used to search for and filter data. The lambda `_item where _item's 1st is "A"` tells the macro to searches for items whose `1st` is the string "A".
    
*   For certain macros, like [(for:)](#macro_for), you may want to use a "where" lambda that doesn't filter out any of the values - `_item where true`, for instance, will include every item. There is a special, more readable **"each"** shorthand for this type of "where" lambda: writing just `each _item` is equivalent.
    
*   **"when"** lambdas are a variant of "where" used exclusively by [(event:)](#macro_event) and [(storylet:)](#macro_storylet), and are used to specify when a hook or passage should be shown. The lambda `when $fuel > 8` tells [(event:)](#macro_event) to show the attached hook when `$fuel` is increased (due to an interaction macro like [(link-repeat:)](#macro_link-repeat), a [(live:)](#macro_live) macro, or anything else). This really shouln't be called a "lambda", but you can perhaps think of it in terms of it filtering moments in time that pass or fail the condition.
    
*   **"via"** lambdas, used by the [(altered:)](#macro_altered) and [(sorted:)](#macro_sorted) macro, are used to translate or change data. The lambda `_item via _item + "s"` tells the macro to add the string "s" to the end of each item. Only the [(altered:)](#macro_altered) macro uses this to change values: the [(sorted:)](#macro_sorted) macro uses this to sort the data value as if it was another value.
    
*   **"making"** lambdas, used by the [(folded:)](#macro_folded) are used to build or "make" a single data value by adding something from each item to it. The lambda `_item making _total via _total + (max: _item, 0)` tells the macro to add each item to the total, but only if the item is greater than 0. (Incidentally, you can also use "where" inside a "making" lambda - you could rewrite that lambda as `_item making _total via _total + _item where _item > 0`.)
    

Lambdas use temp variables to hold the actual values. For instance, in `(find: _num where _num > 2, 5,6,0)`, the temp variable `_num` is used to mean each individual value given to the macro, in turn. It will be 5, 6 and 0, respectively. Importantly, this will _not_ alter any existing temp variable called `_num` - the inside of a lambda can be thought of as a hook, so just as the inner `_x` in `(set: _x to 1) |a>[ (set:_x to 2) ]` is different from the outer `_x`, the `_num` in the lambda will not affect any other `_num`.

If you want to be extra watchful for errors and mistyped data (and if you're working on a big project, you should!), you can include a [datatype](#type_datatype) with each variable, such as by writing `str-type _a where _a contains 'e'` instead of `_a where _a contains 'e'`, to make it a [TypedVar](#type_typedvar). You may notice that `_a contains 'e'` would also be true if `_a` was `(a:'e')` rather than, as intended, a string. Adding `str-type` allows such an error to be found and reported early, and results in a less confusing error message.

You can use the "it" shorthand to save on having to write the temporary variable's name multiple times. `_num where _num > 2` can be rewritten as`_num where it > 2`. Not only that, but you can even save on naming the temporary variable at all, by just using `where` (or `via` or `making`) without the name and only using `it` to refer to the variable: `where it > 2`.

Additionally, the "pos" identifier can be used inside a lambda - it evaluates to the position of the data value (from those passed into the macro) that the lambda is currently processing. `(altered: via it + (str:pos), "A", "B", "C", "A")` produces `(a:"A1","B2","C3","A4")`.

An important feature is that you can save lambdas into variables, and reuse them in your story easily. You could, for instance, `(set: $statsReadout to (_stat making _readout via _readout + "|" + _stat's name + ":" + _stat's value))`, and then use $printStats with the [(folded:)](#macro_folded) macro in different places, such as `(folded: $statsReadout, ...(dm-entries: $playerStats))` for displaying the player's stats, `(folded: $statsReadout, ...(dm-entries: $monsterStats))` for a monster's stats, etc.

Lambdas are named after the lambda calculus, and the ["lambda"](https://en.wikipedia.org/wiki/Anonymous_function) keyword used in many popular programming languages. They may seem complicated, but as long as you think of them as just a special way of writing a repeating instruction, and understand how their macros work, you may find that they are very convenient.

[](#type_metadata)Metadata data
-------------------------------

Certain kinds of macros are not used inside the passage itself, but are used to mark the passage as being special in some way, or having certain data available to other macros that inspect the story's state, such as [(passages:)](#macro_passages) or [(open-storylets:)](#macro_open-storylets). These macros are "metadata" macros, because they attach metadata to the passage. These macros must appear at the very start of those passages, ahead of every other kind of macro. Using them in any other location will cause an error.

Every valid metadata macro is run only once, when the story begins. As such, "metadata" is not a type of data that's available to other macros, and there is no need for a [datatype](#type_datatype) called `metadata`.

[](#type_number)Number data
---------------------------

Number data is just numbers, which you can perform basic mathematical calculations with. You'll generally use numbers to keep track of statistics for characters, count how many times an event has occurred, and numerous other uses.

You can do all the basic mathematical operations you'd expect to numbers: `(1 + 2) / 0.25 + (3 + 2) * 0.2` evaluates to the number 13. The computer follows the normal order of operations in mathematics: first multiplying and dividing, then adding and subtracting. You can group subexpressions together and force them to be evaluated first with parentheses.

If you're not familiar with some of those symbols, here's a review, along with various other operations you can perform.

Operator

Function

Example

`+`

Addition.

`5 + 5` (is 10)

`-`

Subtraction. Can also be used to negate a number.

`5 - -5` (is 10)

`*`

Multiplication.

`5 * 5` (is 25)

`/`

Division.

`5 / 5` (is 1)

`%`

Modulo (remainder of a division).

`26 % 5` (is 1)

`>`

Evaluates to [boolean](#type_boolean) `true` if the left side is greater than the right side, otherwise `false`.

`$money > 3.75`

`>=`

Evaluates to boolean `true` if the left side is greater than or equal to the right side, otherwise `false`.

`$apples >= $carrots + 5`

`<`

Evaluates to boolean `true` if the left side is less than the right side, otherwise `false`.

`$shoes < $people * 2`

`<=`

Evaluates to boolean `true` if the left side is less than or equal to the right side, otherwise `false`.

`65 <= $age`

`is`

Evaluates to boolean `true` if both sides are equal, otherwise `false`.

`$agendaPoints is 2`

`is not`

Evaluates to boolean `true` if both sides are not equal, otherwise `false`.

`$agendaPoints is not 0`

`matches`

Evaluates to boolean `true` if one side describes the other.

`$bytes matches 165`, `odd matches 3`

`does not match`

Evaluates to boolean `true` if one side does not describe the other.

`$coins does not match odd`

`is a`, `is an`

Evaluates to boolean `true` if the right side is a [datatype](#type_datatype) describing the left side

`$credits is a num`, `2 is an even`

`is not a`, `is not an`

Evaluates to boolean `true` if the right side does not describe the left side.

`0 is not an odd`, `13 is not an even`

`+` can also be used by itself to check if a variable is a number: `+$result` produces an error if $result is not a number.

You can only perform these operations (apart from `is`) on two pieces of data if they're both numbers. Adding the [string](#type_string) "5" to the number 2 would produce an error, and not the number 7 nor the string "52". You must convert one side or the other using the [(num:)](#macro_num) or [(str:)](#macro_str) macros.

Finally, certain macros that accept numbers, such as `(live:)`, use those numbers as time durations. There is a special form of number data you can use for this – put "s" or "ms" at the end of the number to specify if the number indicates milliseconds or seconds. For instance, `50ms` means 50 milliseconds, and `5s` means 5 seconds (which is 5000 milliseconds). A number suffixed with `s` is the same as a number suffixed with `ms` and multiplied by 1000.

[](#type_string)String data
---------------------------

A string is just a run of text - a sequence of text characters strung together. To indicate that a sequence of characters is a string, place a matching pair of either `"` or `'` characters around them. If you want to include a `"` or `'` inside a string that is enclosed with a pair of that character, you can use the `\` symbol to escape that character. `\"` and `\"` will become a `"` and `'`, respectively. If you want to include a `\` character by itself, write `\\`.

When the `\` character precedes the letters `n`, `t`, `b`, `f`, `v`, `r`, they will both be replaced with a certain whitespace character. Except for `\n`, these are **not** intended to be used by authors for any reason, are included purely for compatibility with Javascript, and are listed here for reference.

Combination

Result

Example

`\n`

A newline (also known as a line break)

`\t`

A tab character (normally only the same size as a single space)

`\b`, `\f`, `\v`, `\r`

A zero-width character that takes up a position in the string but isn't visible in the passage (included for compatibility with Javascript)

`\x`

If the next two characters are hexadecimal digits (0-9, A-F, or a-f), all four of these are replaced with a character whose Unicode code point is the value of the digits.

`"\xFE"` (is `"þ"`)

`\u`

If the next four characters are hexadecimal digits (0-9, A-F, or a-f), OR if the next characters are `{`, one to five hexadecimal digits, and `}`, then all of these are replaced with a character whose Unicode code point is the value of the digits.

`"\u00FE"` (is `"þ"`), `"\u{1F494}"` (is `"💔"`)

Note that you don't have to use `\n` to encode line breaks inside strings. You can simply insert them directly, thus causing the strings to span multiple lines. However, you may wish to use `\n` sometimes to save vertical space in your passage code.

When making a story, you'll mostly work with strings that you intend to insert into the passage source. If a string contains markup, then the markup will be processed when it's inserted. For instance, `"The ''biiiiig'' bellyblob"` will print as "The **biiiiig** bellyblob". Even macro calls inside strings will be processed: printing `"The (print:2*3) bears"` will print "The 6 bears". If you wish to avoid this, you can include the verbatim markup inside the string:``"`It's (exactly: as planned)`"`` will print "It's (exactly: as planned)". Alternatively, you can use [(verbatim-print:)](#macro_verbatim-print) to prevent the markup from being processed.

You can add strings together to join them: `"The" + ' former ' + "Prime Minister's"` pushes the strings together, and evaluates to "The former Prime Minister's". Notice that spaces had to be added between the words in order to produce a properly spaced final string. Also, notice that you can only add strings together. You can't subtract them, much less multiply or divide them.

Strings are similar to [arrays](#type_array), in that their individual characters can be accessed: `"ABC"'s 1st` evaluates to "A", `"Gosh"'s 2ndlast` evaluates to "s", and `"Exeunt"'s last` evaluates to "t". They, too, have a "length": `"Marathon"'s length` is 8. If you can't determine the exact position of a character, you can use an expression, in brackets, after it: `$string's ($pos - 3)`. You can create a substring by providing an array of positions in place of a single position: `"Dogs"'s (a: 2,4)` is "os". And, you can create a substring of consecutive positions by specifying just the start and end position as a data name: `"Ducks"'s 1stto3rd` is "Duc", and `"Rags"'s 2ndlasttolast` is "gs".

If you want to check if a string contains any of another string's characters (without needing to be in the same order), or all of them, special `some` (also known as `any` - no relation to the `any` [datatype](#type_datatype)) and `all` data names are available for use with the `is`, `is not`, `matches` and `is a` operators - `all of $name is "A"` checks if the variable consists only of capital "A"'s, and `some of $name is a whitespace` checks if any of the variable's characters is a whitespace character (using the special "whitespace" datatype).

You can use the `contains` and `is in` operators to see if a certain string is contained within another: `"mother" contains "moth"` is true, as is `"a" is in "a"`. Again, `some` and `all` can be used with `contains` and `is in` to check all their characters - `all of $string is not "w"` is true if the string doesn't contain "w", and `$string contains some of "aeiou"` is true if the string contains those five letters. The opposite of the `is in` operator is `is not in` - `"w" is not in $string` is another way to phrase the above.

If you want to check if a string specifically starts or ends with with a certain substring, `start` and `end` data names can be used in a similar way to `some` and `all` - `start of $addr is "http://"` is the same as `$addr's 1stto7th is "http://"` (but somewhat easier to write), and `end of $angelName is "iel"` is the same as `$angelName's 3rdlasttolast is "iel"`.

Here is a table listing the aforementioned operations you can perform on strings, as well as a few others.

Operator

Function

Example

`+`

Joining.

`"A" + "Z"` (is "AZ")

`-`

Produces a copy of the left string with all occurrences of the right string removed.

`"abcdcba" - "bcd"` (is "acba")

`is`

Evaluates to [boolean](#type_boolean) `true` if both sides are equal, otherwise `false`.

`$name is "Frederika"`  
`some of "Buxom" is "x"`

`is not`

Evaluates to boolean `true` if both sides are not equal, otherwise `false`.

`$friends is not $enemies`  
`all of "Gadsby" is not "e"`

`contains`

Evaluates to boolean `true` if the left side contains the right side, otherwise `false`.

`"Fear" contains "ear"`

`does not contain`

Evaluates to boolean `true` if the left side does not contain the right side, otherwise `false`.

`"Fear" does not contain "Bee"`

`is in`

Checking if the right string contains the left string, otherwise `false`.

`"ugh" is in "Through"`

`is not in`

Evaluates to `true` if the right string does not contain the left string.

`"Blood" is not in "Stone`

`'s`

Obtains the character or substring at the right numeric position. `'s` cannot have any spaces to its left.

`"YO"'s 1st` (is "Y")  
`"PS"'s (2)` (is "S")  
`"ear"'s (a: 2,3)` (is "ar")

`of`

Obtains the character at the left numeric position.

`1st of "YO"` (is "Y")  
`(2) of "PS"` (is "S")  
`(a: 2,3) of "ear"` (is "ar")

`matches`

Evaluates to boolean `true` if the left side describes the right side.

`str matches "Contract"`, `some of "RED" matches "E"`

`does not match`

Evaluates to boolean `true` if the left side does not describe the right side.

`str does not match "Minotaur"`, `"3" does not match "Three"`

`is a`, `is an`

Evaluates to boolean `true` if the right side is a datatype describing the left side.

`"Boo" is a string`, `" " is a whitespace`, `"" is an empty`

`is not a`, `is not an`

Evaluates to boolean `true` if the right side does not describe the left side.

`"Boo" is not an empty`, `"" is not a whitespace`

And, here are the data names that can be used with strings.

Data name

Example

Meaning

`1st`,`2nd`,`last`, etc.

`$str's last`, `1st of $str`

A single character at the given position in the string. This causes an error if it passes the bounds of the string, such as `"elder"'s 8th`.

`1stto3rd`, `4thlastto2ndlast` etc.

`"aeiou"'s 2ndto5th`

A substring containing only the characters between the given positions (such as the first, second and third for `1stto3rd`). This does NOT cause an error if it passes the bounds of the string - so `"Power"'s 3rdto9th` is `"wer"`.

`length`

`"Penny"'s length`

The length (number of characters) in the string.

`some`, `any`, `all`

`all of "aeiou" is not "y"`, `some of "aaaba" is not "a"`

Usable only with comparison operators, these allow all of the characters to be quickly compared. `any` is an old alias for `some` that functions identically, but which may be removed in a future version of Harlowe.

`start`, `end`

`start of $addr is "http://"`, `end of $angelName is "iel"`

Usable only with the `is`, `is not`, `matches` and `does not match` operators, these allow you to compare the start or end of strings without having to specify an exact range of characters to compare.

`random`

A random character in the string.

`"aeiou"'s random` (is `"a"`, `"e"`, `"i"`, `"o"` or `"u"`).

[Arrays](#type_array) of [numbers](#type_number), such as `(a:3,5)`

`$str's (a:1,-1)`

A substring containing just the characters at the given positions in the string.

A note about `random`: this is one of the features that uses Harlowe's pseudo-random number generator. If you use [(seed:)](#macro_seed) at the start of the story, the selected values will be predetermined based on the seed string, and how many other random macros and features have been used before it.

[](#type_typedvar)TypedVar data
-------------------------------

Typed variable names combine a [datatype](#type_datatype) or a pattern of data, and the name of a variable, joined by adding the `-type` suffix to the datatype. `str-type _name` defines a typed variable, \_name, which can only be set to a [string](#type_string). `(a: num)-type $a` defines a typed variable, $a, which can only be set to an [array](#type_array) with 1 [number](#type_number) value inside.

Typed variable names are used in several places – [(set:)](#macro_set), [(put:)](#macro_put), [(move:)](#macro_move) and [(unpack:)](#macro_unpack) can be given typed variables in place of normal variables to restrict that variable to the given type, and ensure all future uses of that variable maintain that restriction. Typed variables are also used by the [(macro:)](#macro_macro) macro to specify the input data for your custom macros, and ensure users of that macro maintain those restrictions. The [(str-find:)](#macro_str-find) and [(str-replaced:)](#macro_str-replaced) macros allows typed variables to be used inside string patterns, to give names to sub-matches in the string being searched. Finally, typed temp variables can be used in [lambdas](#type_lambda), to guarantee that the lambda is being used with the correct type of data.

The ability to restrict the type of data that your variables and custom macros receive is a great assistance in debugging your stories, as well as understanding what the variable or macro is and does - especially if they were written by someone else and imported into the project.

TypedVars used with the [(macro:)](#macro_macro) macro support an additional feature. When a TypedVar is a plain datatype name preceded with the `...` spread operator, such as in `...str-type _a`, then it becomes a spread typed variable, which represents an arbitrary number of values. Giving multiple values of the given type at or after such a position will cause an array containing those values to be put into the named variable.

Typed variables, when retrieved from a custom macro's "params" array, have two data names that you can examine.

Data name

Example

Meaning

`name`

`$customMac's params's 1st's name`, `name of 1st of params of $customMac`

The name of the typed variable. `(num-type _grains)'s name` is `"grains"`.

`datatype`

`$customMac's params's 1st's datatype`, `datatype of 1st of params of $customMac`

The datatype of the typed variable. `(num-type _grains)'s datatype` is `num`.

For more details, consult the [(set:)](#macro_set) and [(macro:)](#macro_macro) articles.

[](#type_variabletovalue)VariableToValue data
---------------------------------------------

This is a special value that only [(set:)](#macro_set), [(put:)](#macro_put) and [(unpack:)](#macro_unpack) make use of. It's created by joining a value and a variable (or a [TypedVar](#type_typedvar), or data structure containing TypedVars) with the `to` or `into` keywords: `$emotion to 'flustered'` is an example of a VariableToValue. It exists primarily to make [(set:)](#macro_set) and [(put:)](#macro_put) more readable.

{{CHANGELOG}}

Appendix
========

[](#appendix_harlowe-4.0-roadmap)Harlowe 4.0 roadmap
----------------------------------------------------

_Last updated 2024-01-01_

Since 3.0.0, I've been stockpiling ideas for breaking changes to the Harlowe language, and the next major version is where I intend to put them into reality. Here is a decent sample of a few of them. Note that there is no guarantee that any of these will ever be implemented quite as described.

*   **Virtual DOM**: Instead of the current naïve DOM manipulation that makes macros like `(live:)` and the various transitions rather brittle, even a basic virtual DOM would provide serious performance and stability improvements. This is likely to be the trickiest feature to implement, but there's no shying away from it now.
    
*   **Eliminating enchantment wrappers from DOM structures**: This ties into the Virtual DOM, above, but a number of tough visual problems in Harlowe stem from `(enchant:)` and other macros having to add and remove wrappers from various elements in order to cause various CSS effects. Replacing these with better enchantment tracking and CSS style creation is somewhat overdue.
    
*   **Better handling of line breaks**: Past Harlowe versions have had a special case that reduces consecutive line breaks' cumulative heights, and while that has some aesthetic purpose, the resulting inconsistency has become too pesky and should really be removed. In addition to this, I want to try wrapping prose lines in DOM wrappers (not `<p>` elements per se, but something similar) and having those serve the purpose of breaking lines instead of `<br>`. This feeds into the previous feature as well, making `(line-style:)` more robust by eliminating the need for temporary wrappers.
    
*   Something I've been calling **"the syntax that should have been in 1.0"**: I've thought of a reform of the link syntax inspired by [Ink](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md). Harlowe has long been bothered by the fact that links and hooks use the same glyphs, `[]`. This new feature would confront the issue head-on.
    
    *   Placing `->` or `<-` inside any hook would transform it into a link, so you only need to type `[link->passage name]`. If you remove the passage name, then it becomes a "revealing" link `[link->]` that reveals the nearest hidden hook. Leaving off the link text (like `[->passage name]` or `[->]`) would turn it into a `(click:?page)` interaction instead of a textual link.
    *   Also, like Ink, any unnamed unattached hooks inside the link text, like `["Really[?"]->]` would be removed when it is clicked.
    *   To make the existing link syntax `[[link text->passage name]]` and `[[link]]` compatible with this new syntax, `[[` and `]]` may become special hook delimiters that force legacy rules onto its contents: when no link arrow is present, it is treated as if it was a link, and moreover, `|` is treated as equivalent to `->` (contradicting the "sequence syntax" below). Though, authors would be recommended to use the aforementioned click-page interaction `[->link]` instead. All of these changes allow in-passage revealing links to be on the same footing as between-passage links, with both using the same basic syntax. This all might seem a little abstract from just this high-level description, but I have high hopes for it and the story code it can enable.
*   In addition to the above, I also envision **new sequence hook syntax** that revives several ideas for text-revealing I'd had back in the Twine 1.4 days. The glyph `|` would split a hook into a "sequence" comprising a visible portion and several hidden portions - `[visible|hidden 1|hidden 2]`. Clicking any revealing links inside a visible portion `[visible [link->] portion|hidden portion]` would unlink the text, remove any unnamed unattached hooks in the visible portion, and reveal the next hidden portion.
    
*   **Comments that work both inside and outside macro calls**: I'm considering a special "comment" glyph, `--` (or possibly a new glyph like '!'), which turns the next element into a comment, which Harlowe will dutifully ignore. Place `--` in front of a hook to turn that entire hook into a "block comment", or place it in front of a macro call (both in-passage and inside a call) to ignore it altogether, without needing `(ignore:)`. Additionally, place it in front of any other code element, such as a number, to "cross it out". `(set: $hp to --3 2)` sets the variable to 2, ignoring the 3.
    
*   **Units as separate datatypes from numbers**: instead of the crude `s` and `ms` syntax for providing seconds to `(t8n-time:)` and other macros, having times be a special unit separate from numbers, and having sizing lines like `"==XX=="` be separate from strings, allows for better type signatures and error messages for built-in macros and custom macros alike.
    
*   **Eliminating the default 0 value for story-wide variables**: Not much to say, except that this has been in Harlowe since 1.0, and has had an overall negative effect on story debugging. Also, story-wide variables should really act more like temp variables instead of having a special case like this.
    
*   **Nullable `'s` and `of` syntax**: a feature that has long been on the horizon, this would let authors write something like `(set: $a to $b's? 1st)`, without an error occurring if $b doesn't have a `1st` value at all. The problem here has always been that it requires implementing a proper `None` value (distinct from `false`) for Harlowe, or else adding short-circuiting operators like "guard" and "default".
    
*   **Dropping Internet Explorer support**: It's sad to say, but supporting IE's older version of Javascript and CSS no longer seems like a worthwhile use of my development resources in the current browser landscape, so Harlowe 4.0 will likely drop support in favour of using the latest CSS as-is. Harlowe already provides features that only function outside of IE, so this shouldn't be entirely unexpected.
    
*   **Localisation**: Getting Harlowe up to the localisation standards of the Twine 2 user interface is also long overdue. While this will be slightly laborious (due to Harlowe's large amount of built-in message strings), it likely won't have the same infrastructural issues as other listed features (which is to say, the underlying game engine shouldn't be affected too much).
    

All that being said, here are a few things I will **not** be changing in 4.0:

*   1-indexing for sequences, or any changes for the `1st` and `last` data names. (Even if I thought this was a problem, which I don't, it's a smidge late to change something so fundamental.)
    
*   Pass-by-value for everything, including data structures. (I remain adamant that pass-by-reference is simply not beginner-friendly.) I'll likely try to add more sophisticated [copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write) optimisations, though, so that data structure copying is a bit more efficient.
    

And finally: Harlowe 4.0 currently has _no release date_. However, [unstable builds](#introduction_unstable-4.0-builds-now-available!) provide a preview of what's actually made it into code (for now…)

[](#appendix_operators-and-order-of-operations)Operators and order-of-operations
--------------------------------------------------------------------------------

The following table is a complete list of all operators and other non-identifier keywords in Harlowe, as well as the order of operations that Harlowe uses to compute expressions. This is a _rough_ summary of information found in the "Types of data" articles in this manual. For more details on these operators and how they interact with a given data type, please consult those articles.

These operators are listed in reverse order of operation. Those with a lower order number are evaluated first.

Order

Operator(s)

Syntax Description

Usage

17

`,`

Any `,` \[Any\]

Commas are not actually operators, but part of the macro syntax, used to separate expressions given to a macro. However, to express their order-of-operations relationship to the actual operators, they are listed here. Just remember: everything between commas (inside a single macro call) is evaluated separately from each other. Also note that trailing commas (commas without a right side) in macro calls are valid, even though they don't do anything

16

`to`, `into`

Variable or TypedVar `to` Any  
Any `into` Variable or TypedVar

Used only by [(set:)](#macro_set) and [(put:)](#macro_put), these put the data value into the named variable. If the variable is a TypedVar, it becomes restricted to that datatype or data pattern first (which may cause the entire operation to error).

15

`where`, `when`, `via`

\[Lambda or Variable or TypedVar\] `where` Expression  
\[Lambda or Variable or TypedVar\] `when` Expression  
\[Lambda or Variable or TypedVar\] `via` Expression  

Produces a lambda of the given type. The entire expression to the right is **not** evaluated, but stored inside the lambda. If another lambda is to the left, they are both joined into one. If a Variable or TypedVar is to the left, that becomes the name of the lambda's loop variable.

`making`, `each`

\[Lambda or Variable or TypedVar\] `making` Variable or TypedVar  
`each` Variable or TypedVar

Produces a lambda of the given type. The Variable or TypedVar becomes the name of the lambda's "making" variable if it's a `making` lambda, and otherwise it becomes the name of the lambda's loop variable. Note that `making` cannot be given to any macros without being combined with at least a `via` lambda.

14

`-type`

Any `-type` Variable

Used to create a TypedVar, which is a variable name combined with a datatype.

13

`and`, `or`

Boolean `and` Boolean‡  
Boolean `or` Boolean‡

Used to perform the basic logic operations on Boolean values, producing `true` or `false`.

12

`is`, `is not`

Any `is` Any†  
Any `is not` Any†

Produces Boolean `true` if the value on the left is exactly identical to the value on the right, and `false` otherwise.

11

`contains`, `does not contain`, `is in`, `is not in`

Array or Dataset `contains` Any†  
Array or Dataset `does not contain` Any†  
Any `is in` Array or Dataset†  
Any `is not in` Array or Dataset†

Produces Boolean `true` if the value is (or is not) inside the array or dataset as a data value, and `false` otherwise.

Datamap `contains` Any†  
Datamap `does not contain` Any†  
Any `is in` Datamap†  
Any `is not in` Datamap†

Produces Boolean `true` if the value is (or is not) a data name of the datamap, and `false` otherwise. (To check that a datamap contains a value, try using this with [(dm-values:)](#macro_dm-values))

String `contains` String†  
String `does not contain` String†  
String `is in` String†  
String `is not in` String†

Produces Boolean `true` if one of the strings is (or is not) a substring of the other, and `false` otherwise.

10

`is a`, `is not a`

Any `is a` Datatype†  
Any `is not a` Datatype†

Produces Boolean `true` if the datatype describes the value, and `false` otherwise.

`matches`, `does not match`

Any `matches` Any†  
Any `does not match` Any†

Produces Boolean `true` if one value matches the data pattern on the other, and `false` otherwise.

9

`<`, `<=`, `>=`, `>`

Number `<` Number†  
Number `<=` Number†  
Number `>=` Number†  
Number `>` Number†

Used to perform mathematical comparisons on numbers, producing `true` or `false`.

8

`+`, `-`

Number `+` Number  
Number `-` Number

Used to perform mathematical addition and subtraction on numbers.

String `+` String  
String `-` String

Used to join strings, _or_ produce a copy of the left string with all occurrences of the right string removed.

Array `+` Array  
Array `-` Array

Used to join arrays, _or_ produce a copy of the left array with all occurrences of the right array's values removed.

Dataset `+` Dataset  
Dataset `-` Dataset

Used to join datasets, _or_ produce a copy of the left datasets with all occurrences of the right datasets's values removed.

Datamap `+` Datamap

Used to join datamaps, using the right side's value whenever both sides contain the same name.

Colour `+` Colour

Used to mix colours (using the sRGB mixing algorithm).

Changer `+` Changer

Used to combine changers.

HookName `+` HookName

Produces a special complex HookName that refers to both of the HookNames' hooks.

7

`*`, `/`

Number `*` Number  
Number `/` Number

Used to perform mathematical multiplication and division on numbers.

6

`...`

`...` Array

Spreads out the individual elements of an array into the containing macro call, as if each element had been listed and separated with commas.

`...` String

Spreads out the individual characters of a string into the containing macro call, as if each character had been listed and separated with commas.

`...` Dataset

Spreads out the individual elements of a dataset into the containing macro call, in sorted order (as if by the [(sorted:)](#macro_sorted) macro).

`...` Datatype

Produces a special "spread" version of the datatype, which, when used in arrays or patterns, matches zero or more of its values. Can also be used with `-type` to make multi-value TypedVars for the [(macro:)](#macro_macro) macro.

`bind`, `2bind`

`bind` Variable  
`2bind` Variable

Used to make Binds, which allow a variable name to be "bound" to a particular interaction macro, like [(dialog:)](#macro_dialog). Two-way binds force the variable to always have the currently-selected value of the interaction element.

5

`not`

`not` Boolean

Turns `false` into `true` and vice-versa.

`+`, `-`

`+` Number  
`-` Number

`-` is used to make positive numbers negative, and vice-versa. `+` is less useful, but may be used to check if a variable is a number: `+$a` produces an error if $a does not hold a number.

4

`of`

Dataname or Number or String `of` Any

Used to obtain data values from certain data types (Array, String, Datamap, Dataset, Colour, CustomMacro, Gradient, or TypedVar).

Dataname or Number or String `of` HookName

Produces a variant of the HookName which only refers to one, two, or a subrange of the hooks with its name.

3

`'s`, `its`

Any `'s` Dataname or Number or String  
`its` Dataname or Number or String

Used to obtain data values from certain data types (Array, String, Datamap, Dataset, Colour, CustomMacro, Gradient, TypedVar). `'s` cannot have spaces between it and the value to the left. `its` is a special combination of this operator with the `it` identifier.

HookName `'s` Dataname or Number or String  
Dataname or Number or String `of` HookName

Produces a variant of the HookName which only refers to one, two, or a subrange of the hooks with its name.

2

Data values (numbers, strings, macro calls, etc.)

Again, these are not operators, but are listed here to express their order-of-operations relationship to the real operators (and to the grouping operator, below).

1

`(`, `)`

`(` Any `)`

Much like in arithmetic, brackets can be used to force a certain sub-expression to be evaluated before others.

†. When the left side is missing, Harlowe will try to infer a missing [it identifier](#keyword_it) to automatically put there, instead of just producing an error.

‡. When either side is not a Boolean, Harlowe will try to infer a missing [it identifier](#keyword_it) and a missing comparison operator to automatically put there, instead of just producing an error.

