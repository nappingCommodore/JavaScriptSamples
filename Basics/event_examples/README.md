# JavaScript Event Examples

This directory contains comprehensive examples of JavaScript events including Mouse, Keyboard, Frame/Window, and Media events.

## Files

- `index.html` - Main HTML file with event examples
- `scripts.js` - JavaScript code demonstrating various event handlers
- `styles.css` - Styling for the examples
- `README.md` - This documentation file

## Event Categories Covered

### 🖱️ Mouse Events

- **Click Events**: `click`, `dblclick`
- **Movement Events**: `mousemove`, `mouseenter`, `mouseleave`, `mouseover`, `mouseout`
- **Button Events**: `mousedown`, `mouseup`, `contextmenu`

**Examples Include:**
- Single and double click detection
- Mouse coordinate tracking
- Mouse enter/leave area detection
- Right-click context menu prevention
- Mouse button identification (left, middle, right)

### ⌨️ Keyboard Events

- **Key Events**: `keydown`, `keyup`, `keypress`
- **Special Combinations**: Ctrl, Alt, Shift, Meta key combinations
- **Key Code Detection**: KeyCode, which, code, key properties

**Examples Include:**
- Basic key press detection
- Key combination handling (Ctrl+S, Alt+A, etc.)
- Key code and character identification
- Special key location detection
- Default action prevention for shortcuts

### 🖼️ Frame/Window Events

- **Load Events**: `load`, `DOMContentLoaded`
- **Resize Events**: `resize`
- **Scroll Events**: `scroll`
- **Visibility Events**: `visibilitychange`, `focus`, `blur`
- **Navigation Events**: `beforeunload`, `pageshow`, `pagehide`
- **Hash Events**: `hashchange`
- **Connection Events**: `online`, `offline`

**Examples Include:**
- Window dimension tracking
- Scroll position monitoring
- Page visibility detection
- Focus/blur state tracking
- Unload warning implementation
- Screen information display

### 🎵 Media Events

**Video Events:**
- `loadstart`, `loadeddata`, `loadedmetadata`
- `canplay`, `canplaythrough`
- `play`, `pause`, `ended`
- `timeupdate`, `volumechange`
- `seeking`, `seeked`, `waiting`
- `stalled`, `suspend`, `abort`
- `error`, `emptied`, `ratechange`

**Audio Events:**
- All video events plus audio-specific handling
- Progress bar implementation
- Time display formatting

**Image Events:**
- `load`, `error`, `loadstart`

**Examples Include:**
- Video/audio playback controls
- Volume control with slider
- Progress tracking and display
- Error handling for media loading
- Image loading with success/error states
- Custom media player controls

## Features

### 📋 Event Logging
- Real-time event log with timestamps
- Color-coded event categories
- Pause/resume logging functionality
- Automatic log cleanup (max 100 entries)

### 🎨 Interactive UI
- Responsive design that works on mobile and desktop
- Hover effects and smooth animations
- Gradient backgrounds and modern styling
- Accessibility-friendly focus indicators

### 🔧 Technical Features
- Event delegation and bubbling examples
- Passive event listeners for performance
- Cross-browser compatibility
- Error handling and fallbacks
- Performance-optimized scroll handling

## How to Use

1. Open `index.html` in a web browser
2. Interact with different sections to trigger events
3. Watch the event log at the bottom for real-time feedback
4. Try different combinations of interactions
5. Use browser developer tools to see console messages

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (some media URLs may not work)
- Mobile browsers: Full support with responsive design

## Event Handling Best Practices Demonstrated

1. **Event Delegation**: Efficient event handling for multiple elements
2. **Passive Listeners**: Performance optimization for scroll events
3. **Error Handling**: Graceful fallbacks for media loading failures
4. **Memory Management**: Automatic cleanup of event log entries
5. **Accessibility**: Keyboard navigation and focus management
6. **Performance**: Throttled scroll and resize event handlers
7. **Cross-browser**: Feature detection and fallbacks

## Learning Objectives

After exploring these examples, you should understand:

- How to register event listeners using `addEventListener()`
- Different types of events and when they fire
- Event object properties and methods
- How to prevent default behaviors with `preventDefault()`
- Event bubbling and capturing phases
- Performance considerations for event handlers
- Media API integration with events
- Modern JavaScript event handling patterns

## Extensions

You can extend these examples by:

- Adding touch events for mobile devices
- Implementing drag and drop functionality
- Adding WebSocket events for real-time communication
- Creating custom events and dispatching them
- Adding gamepad API events for game controllers
- Implementing intersection observer for scroll-based animations

## Resources

- [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [HTML Media Events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events)
- [Keyboard Event Values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
