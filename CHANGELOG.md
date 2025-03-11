# Changelog

## [0.2.6] - 2025-03-03

### Fixed

- Resolved multiple bugs that could cause crashes in specific scenarios.
- Improved error handling to enhance stability.

### Removed

- Eliminated unnecessary dependencies to reduce package size.
- Cleaned up unused code and redundant functions.

### Improved

- Optimized internal processes for better performance and efficiency.
- Reduced memory usage and improved execution speed.

## [0.2.7] - 2025-03-03

### Fixed

- Resolved multiple bugs.

### Added

- Added emojis throughout the entire README file to improve visual presentation and make the documentation more engaging.

## [0.2.8] - 2025-03-03

### Fixed

- Resolved multiple bugs.

## [0.2.9] - 2025-03-03

### Fixed

- Resolved the issue where `bundle.js` was not being generated properly, causing the error when using the library.
- Updated webpack configuration to ensure proper output and avoid "No such file or directory" errors when using the package.

## [0.3.0] - 2025-03-03

### Fixed

- Resolved the issue where useRef was not properly updating the reference value, causing unexpected behavior in the component.
- Adjusted the logic to ensure that the reference is correctly maintained across renders, preventing any inconsistencies in the state.

## [0.5.1] - 2025-03-03

### Fixed

- Resolved the issue where useRef was not properly updating the reference value, causing unexpected behavior in the component.
- Adjusted the logic to ensure that the reference is correctly maintained across renders, preventing any inconsistencies in the state.
 
### Improved

- Improved and rebuild structure.
- Improve functions and constants name .
  
### Added

- Added constant file to store constant datas such as hours and minutes.

### Removed

- Webpack Removed 

## [0.5.2] - 2025-03-03

### Fixed

- Enhanced Safety Checks: Added if conditions to ensure hourEl.current and minuteEl.current exist before calling .scrollTo(), preventing potential runtime errors.
- Optimized Query Selection: Stored document.querySelector(":root") in a variable to avoid redundant DOM queries and improve performance.
- Implemented Optional Chaining (?.): Prevented potential crashes by ensuring document.querySelectorAll("#hour")[activeHourIndx]?.offsetTop || 0 handles out-of-range indices gracefully.
- Expanded Dependency Array: Included activeHourIndx, activeMinuteIndx, activeColor, backgroundColor, numbersColor, and textColor to ensure proper reactivity in useEffect().
- Added Cleanup (return function): Prevents memory leaks by properly removing event listeners when the component unmounts and Ensures that duplicate event listeners are not added on re-renders.
- Improved Event Listener Logic: Now, scroll events are only added if hourEl.current and minuteEl.current exist and Prevents errors caused by missing references.
 
## [0.5.2] - 2025-11-03

### Improved
Optimized Hour and Minute Management:
 - Streamlined active hour and minute index management for better performance and easier integration with the app.
 - Simplified the structure for hours and minutes, reducing unnecessary complexity.
Code Cleanup and Readability:
 - Divided the code into smaller, more manageable parts to improve maintainability and understanding.
 - Removed redundant code by consolidating similar tasks into functions and custom hooks.
 - Improved variable and function names to make the codebase easier to read.
Performance Enhancements:
 - Faster and smoother user interactions due to optimizations.
 - Reduced page load time, improving overall performance.
Tailwind CSS Implementation:
 - Applied Tailwind's @apply directive to style various elements of the time picker, reducing CSS size and boosting performance.
 - Implemented responsive design to ensure the app displays properly across all screen sizes.
 - Centralized color and design property management through custom variables in the Tailwind config file.
 Simplified State Management:
- State handling is now simpler and more efficient, leading to an improved user experience.

### Added
Custom Hooks:
- Introduced the useTimeScroller hook to manage scrolling of hours and minutes, automatically scrolling to the active item based on its index.
Benefits of Using Hooks:
- Reduced complexity in components by encapsulating logic into reusable hooks.
- Reusable hooks make the codebase more maintainable and reduce duplication.

### Fixed
Scroll Management:
- The scrolling issue for active hours and minutes was fixed to ensure the active items are always brought into view correctly.

### Removed
Redundant Code:
- Removed duplicate functions and unnecessary code blocks that were previously scattered throughout the application.
Complexity:
- Eliminated unnecessary complexity in the hour and minute management logic, improving the flow and readability of the code.

### Changed
User Interface Design:
- Updated the design to be fully responsive, ensuring the application works seamlessly on different devices and screen sizes.
- Adjusted font sizes and layout properties for better viewing on mobile, tablet, and desktop devices.

### Miscellaneous
Support for All Devices:
- Ensured the app is now fully compatible with all devices, providing a consistent experience across desktop, tablet, and smartphone.