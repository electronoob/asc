:main
    All scripts must have a ':main' label.
    The main label must be the first label.
    No code allowed to preceed :main.
:labels
    If duplicate detected then process halted.
!
    First character of line must be marked
    with '!' symbol to be understood as a
    commented line.
    Code and comment cannot be on same line.
    Comment is NOT multiline.

When importing the code into memory we strip
whitespace around code lines. This causes a
mismatch between error line number and actual
source code.
