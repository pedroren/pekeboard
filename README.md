# PeKeboard
PeKeboard and PeKepad

## Idea
The idea was to create a split keyboard without losing some of the occasional keys for miscellaneous or occasional use, like the Function, Media keys and Arrow keys.

I took inspiration (and was about to build) on the Apiaster keyboard (https://github.com/nmunnich/apiaster) and the Soffle variant Souffle (https://github.com/climent/SouffleKeyboard).

So I decided to create a three part keyboard, composed of a pair of split sides, left and right; and a central Macropad, containing the Function and Arrows keys, and a pair of rotary encoders. This central/macropad also doubles as the Dongle, containing a display to show layer and peripherals battery information.

## Tools
- Ergogen
- Kicad
- freerouting

## Folders structure
- layout_keymap:
- pekeboard
- pekepad
- pekepad-v
- zmk-firmware
- rmk_firmware
- release
- kicad

## Subfolders
- cases
- footprints
- pcbs

## Build guide
see build_guide.md

## Todo

## Referenced libraries

- ZMK
- zmk-dongle-display (https://github.com/englmaxi/zmk-dongle-display)
- zmk-feature-status-led (https://github.com/sekigon-gonnoc/zmk-feature-status-led)