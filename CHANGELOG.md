# Changelog

## [2.2.0] - 2026-03-09

### Changed

- Removed colored progress arc — cleaner minimal design
- Target humidity number now colored by humidity level (orange → yellow → green → blue)
- Thumb colored to match target humidity level
- Circle dial enlarged 1.5× (330px default, 270px mobile, 390px desktop)
- Larger target value font (4em default, 4.5em desktop)

## [2.1.0] - 2026-03-09

### Added

- Switches (buzzer, LED, child lock) moved to header — vertical column under power button
- Water status / error indicators moved to header — under on/off state text

### Changed

- Header layout: two-column design (left: name/state/status, right: power/switches)
- Switches and status indicators removed from bottom of card for cleaner layout

### Fixed

- Arc drag: arc stays fixed during drag, only thumb + color update instantly; arc animates smoothly after release

## [2.0.0] - 2026-03-09

### Breaking Changes

- Complete visual overhaul of the humidity circle component
- Mode buttons redesigned as chips (pill-shaped)
- Removed old full-circle (360°) design in favor of 270° arc

### Added

- **Thermostat-style 270° arc** with gap at bottom (matching HA native thermostat card)
- **Draggable thumb** (circle indicator) for setting target humidity with hover/drag states
- **Current humidity marker** on the arc with pulsing glow animation
- **Color gradient** based on humidity level:
  - Orange (< 35%) — too dry
  - Yellow (35-45%) — slightly dry
  - Green (45-55%) — comfortable
  - Light blue (55-65%) — humid
  - Blue (> 65%) — very humid
- **Smooth color interpolation** between gradient stops
- **Tick marks** at 30%, 40%, 50%, 60%, 70%, 80% with numeric labels
- **+/− buttons** inside the circle with long-press repeat
- **Glow effect** on progress arc (drop-shadow filter)
- **Off state** visual: dimmed circle with reduced opacity
- **Dragging state** highlight on target value text
- **Global drag listeners** for reliable drag beyond SVG boundaries
- **Chip-style mode buttons** matching HA more-info dialog design
- **CI/CD workflow** (GitHub Actions): build validation + HACS validation
- **Release workflow** (GitHub Actions): auto-attach built JS to releases

### Changed

- Humidity circle: SVG architecture completely rewritten
- Center content: status text (on/off), large target value, small current value with water icon
- Mode buttons: from rectangular buttons to rounded chip components
- Responsive breakpoints updated: 180px / 220px / 260px circle sizes
- Target value font: 2.6em / 3.2em / 3.8em across breakpoints
- Styles moved from global `styles.ts` into individual components (scoped shadow DOM)

### Fixed

- Drag outside SVG element now works correctly (global window listeners)
- Touch events properly handled with `passive: false` for `preventDefault()`

## [1.2.1] - 2025-xx-xx

### Fixed

- Prevent duplicate custom element registration
- Multiple UI issues

## [1.2.0] - 2025-xx-xx

### Added

- Initial release with full humidity control
- Circular humidity display
- Mode selection buttons
- Auto-discovery of related entities
- Switch, sensor, number, select, button rows
- Water tank status indicators
- Visual configuration editor
- Multi-language support (English, Russian)
- Responsive design (3 breakpoints)
