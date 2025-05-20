import * as k from "karabiner_ts";

const range = (
  begin: number,
  end: number,
) => ([...Array(end - begin + 1)].map((_, i) => begin + i));

k.writeToProfile("Hamaco's profile", [
  k.rule("caps_lock -> Hyper")
    .manipulators([
      k.map({ key_code: "caps_lock", modifiers: { optional: ["any"] } })
        .toHyper(),
    ]),

  k.rule("Space and Shift")
    .manipulators([
      k.map({ key_code: "spacebar", modifiers: { optional: ["any"] } })
        .to({ key_code: "left_shift" })
        .toIfAlone({ key_code: "spacebar" }),
    ]),

  k.rule("Toggle Ghostty by Command+ESC")
    .manipulators([
      k.map("escape", "right_command")
        .to("3", "Hyper"),
    ]),

  k.rule("Command+Number to App switch")
    .manipulators([
      k.withMapper(range(1, 9))((num) =>
        k.map(num as k.NumberKeyValue, "right_command")
          .to(num as k.NumberKeyValue, "Hyper")
      ),
    ]),

  k.rule("Command+Control+L to Lock screen")
    .manipulators([
      k.map({
        key_code: "l",
        modifiers: { mandatory: ["left_command", "left_control"] },
      })
        .to({ key_code: "q", modifiers: ["left_command", "left_control"] }),
    ]),

  k.rule("Right Shift to Caret(^) and Ampersand(&)")
    .manipulators([
      k.map({ key_code: "right_shift" }).to({
        key_code: 35,
        modifiers: ["left_shift"],
      }),
      k.map({
        key_code: "right_shift",
        modifiers: { mandatory: ["left_shift"] },
      })
        .to({ key_code: 36, modifiers: ["left_shift"] }),
    ]),

  k.rule("Ctrl+n/p to Cursor key at Vivaldi", k.ifApp("Vivaldi"))
    .manipulators([
      k.map("n", "left_control").to("down_arrow"),
      k.map("p", "left_control").to("up_arrow"),
    ]),

  k.rule("macSKK for JetBrains/VSCode", k.ifApp(["^com\\.jetbrains\\.", "^com\\.microsoft\\.VSCode"]))
    .manipulators([
      k.map("j", "control").to("japanese_kana"),
    ]),

  k.simlayer("l", "launch-app").manipulators({
    c: k.toApp("Calendars"),
    e: k.toApp("Visual Studio Code"),
    f: k.toApp("Finder"),
    s: k.toApp("Slack"),
    t: k.toApp("OmniFocus"),
    v: k.toApp("Vivaldi"),
  }),
]);

// ctrl + numbers to cmd + numbers
// ctrl + n/p to cursor key(only for Obsidian.app)
// SandS
