# Mouse & Keyboard Events Examples

This folder contains comprehensive examples of mouse and keyboard event handling in JavaScript using inline HTML event methods (onclick, onmouseover, onkeydown, etc.) instead of addEventListener.

## 📁 Files

- **`index.html`** - Main HTML file with all examples
- **`scripts.js`** - JavaScript event handlers and logic
- **`styles.css`** - CSS styling for the examples
- **`README.md`** - This documentation file

## 🖱️ Mouse Events Covered

### onClick
- **Description**: Triggered when an element is clicked
- **HTML Syntax**: `<button onclick="handleClick(event)">Click Me!</button>`
- **Features**: 
  - Click counter
  - Mouse position tracking
  - Button type detection
  - Event logging

### onDblClick
- **Description**: Triggered when an element is double-clicked
- **HTML Syntax**: `<div ondblclick="handleDoubleClick(event)">Double-click area</div>`
- **Features**:
  - Double-click counter
  - Timestamp recording
  - Visual feedback animation
  - Event logging

### onMouseOver
- **Description**: Triggered when mouse enters an element (includes child elements)
- **HTML Syntax**: `<div onmouseover="handleMouseOver(event)">Hover area</div>`
- **Features**:
  - Event bubbling demonstration
  - Parent/child element interaction
  - Related target information
  - Event counter

### onMouseMove
- **Description**: Triggered when mouse moves within an element
- **HTML Syntax**: `<div onmousemove="handleMouseMove(event)">Tracking area</div>`
- **Features**:
  - Real-time coordinate tracking
  - Mouse trail visual effect
  - Performance throttling
  - Relative and absolute positioning

### onMouseEnter & onMouseLeave
- **Description**: Enter/Leave events that don't bubble and ignore child elements
- **HTML Syntax**: 
  ```html
  <div onmouseenter="handleMouseEnter(event)" onmouseleave="handleMouseLeave(event)">
    Interactive area with nested elements
  </div>
  ```
- **Features**:
  - No event bubbling
  - Child element isolation
  - Visual feedback changes
  - Separate counters for enter/leave

## ⌨️ Keyboard Events Covered

### onKeyDown
- **Description**: Triggered when a key is pressed down (repeats while held)
- **HTML Syntax**: `<input onkeydown="handleKeyDown(event)" placeholder="Type here...">`
- **Features**:
  - Key name detection
  - Key code information
  - Repeat event handling
  - Special keys support

### onKeyPress (Deprecated)
- **Description**: Triggered for character keys (deprecated - use keydown instead)
- **HTML Syntax**: `<input onkeypress="handleKeyPress(event)" placeholder="Type here...">`
- **Features**:
  - Character code detection
  - Deprecation warning
  - Character-only events
  - Educational purposes

### onKeyUp
- **Description**: Triggered when a key is released
- **HTML Syntax**: `<input onkeyup="handleKeyUp(event)" placeholder="Type here...">`
- **Features**:
  - Key release detection
  - Timestamp recording
  - Release timing information
  - Event counting

### Combined Keyboard Events
- **Multiple Events**: Handles keydown, keypress, and keyup together
- **HTML Syntax**: 
  ```html
  <textarea onkeydown="handleCombinedKeyDown(event)" 
            onkeypress="handleCombinedKeyPress(event)" 
            onkeyup="handleCombinedKeyUp(event)">
  </textarea>
  ```
- **Features**:
  - Modifier key tracking (Ctrl, Alt, Shift, Meta)
  - Key sequence recording
  - Visual modifier indicators
  - Comprehensive event logging

## 🎯 Advanced Features

### Event Bubbling Demonstration
- Shows how events bubble up through the DOM tree
- Toggle bubbling on/off
- Visual representation with nested boxes
- Event propagation control

### Keyboard Shortcuts
- Common shortcuts (Ctrl+S, Ctrl+Z, etc.)
- Custom shortcut handling
- Event prevention
- User feedback

### Event Logging System
- Real-time event tracking
- Categorized log entries (mouse, keyboard, system)
- Timestamps (toggleable)
- Log controls (clear, pause/resume)
- Performance considerations

## 🚀 How to Use

1. Open `index.html` in a web browser
2. Interact with the various elements to trigger events
3. Watch the event log for real-time feedback
4. Try different combinations and interactions
5. Use browser developer tools for additional debugging

## 🎨 Key Differences from addEventListener

### Traditional addEventListener approach:
```javascript
element.addEventListener('click', function(event) {
    // handle click
});
```

### Inline HTML event method approach (used in this example):
```html
<button onclick="handleClick(event)">Click Me!</button>
```

### Advantages of Inline Methods:
- ✅ Simple and direct
- ✅ Easy to see which events are handled
- ✅ No need to wait for DOM ready
- ✅ Self-documenting HTML

### Disadvantages:
- ❌ Mixing HTML and JavaScript
- ❌ Harder to maintain in large applications
- ❌ Limited to one handler per event type
- ❌ Security concerns with inline JavaScript

## 📱 Browser Compatibility

All examples work in modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔧 Customization

You can customize the examples by:

1. **Modifying CSS**: Change colors, animations, and layouts in `styles.css`
2. **Adding Events**: Add new event handlers in `scripts.js`
3. **HTML Structure**: Modify the HTML structure in `index.html`
4. **Event Logic**: Customize the behavior in individual handler functions

## 📚 Educational Value

This example demonstrates:
- Different types of mouse and keyboard events
- Event object properties and methods
- Event bubbling and propagation
- Performance considerations for frequent events
- Accessibility best practices
- Modern JavaScript techniques
- CSS styling for interactive elements

## 🔍 Debugging Tips

1. **Open Developer Tools**: Press F12 to see console logs
2. **Event Log**: Use the built-in event log for real-time tracking
3. **Console Commands**: Use `simulateEvent()` function for testing
4. **Performance**: Monitor performance tab for mouse move events
5. **Accessibility**: Test with keyboard-only navigation

## 🎓 Learning Outcomes

After studying these examples, you should understand:
- How to handle mouse events using inline HTML methods
- How to handle keyboard events using inline HTML methods
- The difference between various event types
- Event object properties and their usage
- Performance considerations for event handling
- Basic accessibility principles for interactive elements

## 🔗 Related Topics

- Event delegation patterns
- Modern event handling with addEventListener
- Touch events for mobile devices
- Custom events and event dispatch
- Event-driven architecture patterns
