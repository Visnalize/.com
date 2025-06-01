---
description: The default key mapping between the app's keypad and your keyboard to make Brick 1100 easy to use.
---

# Brick 1100 key mapping

<script setup lang="ts">
import KeyIcon from '@components/misc/brick1100/KeyIcon.vue';
</script>

Brick 1100 is fully functional on the web. To make it easier to use, the app has a default key mapping that allows you to control the keypad using your keyboard.

## Default key mapping

| Keypad                | Keyboard              | Description                                           |
| --------------------- | --------------------- | ----------------------------------------------------- |
| <KeyIcon s="power" /> | <kbd>Esc</kbd>        | Power key, to turn the app on or off                  |
| <KeyIcon s="navi" />  | <kbd>Enter</kbd>      | Navi key, multiple functions depending on the context |
| <KeyIcon s="clear" /> | <kbd>Backspace</kbd>  | Clear key, to clear input, go back, or exit           |
| <KeyIcon s="up" />    | <kbd>Arrow Up</kbd>   | Up key, navigate up in lists or menus                 |
| <KeyIcon s="down" />  | <kbd>Arrow Down</kbd> | Down key, navigate down in lists or menus             |
| <KeyIcon s="1" />     | <kbd>1</kbd>          | Key 1                                                 |
| <KeyIcon s="2" />     | <kbd>2</kbd>          | Key 2                                                 |
| <KeyIcon s="3" />     | <kbd>3</kbd>          | Key 3                                                 |
| <KeyIcon s="4" />     | <kbd>4</kbd>          | Key 4                                                 |
| <KeyIcon s="5" />     | <kbd>5</kbd>          | Key 5                                                 |
| <KeyIcon s="6" />     | <kbd>6</kbd>          | Key 6                                                 |
| <KeyIcon s="7" />     | <kbd>7</kbd>          | Key 7                                                 |
| <KeyIcon s="8" />     | <kbd>8</kbd>          | Key 8                                                 |
| <KeyIcon s="9" />     | <kbd>9</kbd>          | Key 9                                                 |
| <KeyIcon s="0" />     | <kbd>0</kbd>          | Key 0                                                 |
| <KeyIcon s="aste" />  | <kbd>Shift + 8</kbd>  | Asterisk key                                          |
| <KeyIcon s="hash" />  | <kbd>Shift + 3</kbd>  | Hash key                                              |

## Notes

- The press/hold behavior of the keypad keys is also supported on the keyboard. For example, pressing <kbd>Backspace</kbd> will clear a character, while holding it will clear the entire input.
- In an editing context, e.g. when entering text for a reminder or note, you can type freely with the text keys (`A-Z`) on the keyboard, hold the Shift key for uppercase letters, or use the Caps Lock key to toggle uppercase mode.
