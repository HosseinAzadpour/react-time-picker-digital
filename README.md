![TimePicker Demo](https://res.cloudinary.com/drw4j7kyd/image/upload/v1741715248/timePicker-lg.png)

# ⏰ TimePicker

A bilingual (English/Persian) and responsive digital time picker library with customizable color options. Perfect for modern web applications requiring dynamic and stylish time selection.

## 📖 Table of Contents

- [⏰ TimePicker](#-timepicker)
  - [📖 Table of Contents](#-table-of-contents)
  - [Installation](#installation)
  - [Introduction](#introduction)
  - [Interactive Demo](#interactive-demo)
  - [Features](#features)
  - [What's New](#whats-new)
    - [v0.2.6](#v026)
    - [v0.2.7](#v027)
    - [v0.2.8](#v028)
    - [v0.2.9](#v029)
    - [v0.3.0](#v030)
    - [v0.5.1](#v051)
    - [v0.5.2](#v052)
  - [Example](#example)
  - [props](#props)
  - [Tips and Tricks](#tips-and-tricks)
  - [❓ FAQ](#-faq)
  - [Contributing](#contributing)
  - [Contact Information](#contact-information)
  - [License](#license)
  - [Links](#links)


## Installation

You can install the package using npm or yarn:

```bash
npm install react-time-picker-digital
```

or

```bash
yarn add react-time-picker-digital
```

## Introduction

TimePicker is a versatile and user-friendly React component designed to allow users to select time easily. With its intuitive interface and responsive design, TimePicker ensures a seamless experience across all devices.

<br/>

**Key Features:**

Bilingual Support: TimePicker supports both English and Persian languages, making it accessible for a wider audience.
<br/>
Responsive Design: The component adapts to various screen sizes and devices, ensuring a consistent user experience whether on mobile or desktop.
<br/>
Customizable Color Options: Choose from a variety of color options to match your application's design and theme.
<br/>
Smooth Scrolling: Navigate through hours and minutes with smooth scrolling functionality.
<br/>
Easy Integration: Simply import the component and use it in your project with minimal

## Interactive Demo

Here is screenshots of the `TimePicker` component:

![TimePicker Demo](https://res.cloudinary.com/drw4j7kyd/image/upload/v1741715248/timePicker-sm.png)

## Features

- Customizable Styling: Adjust the appearance of the time picker with customizable properties such as `activeColor`, `backgroundColor`, `textColor`, and `numbersColor` to match your design needs.
- Language Support: The component supports both English and Persian (`fa`). It automatically adjusts text and layout direction based on the selected language.
- Responsive Design: The time picker is designed to be responsive and works well across different screen sizes and devices.
- Smooth Scrolling: The hour and minute selectors scroll smoothly, providing a seamless user experience.
- Active State Highlighting: The selected hour and minute are highlighted to give users clear feedback on their choices.
- Parent Communication: The `data` function allows you to send the selected hour and minute back to the parent component.
- Navigation Links: Easily navigate between pages with customizable `cancelPage` and `confirmPage` links.

## What's New

### v0.2.6

- Fixed several bugs to enhance stability and prevent crashes in edge cases.
- Removed unnecessary dependencies and optimized the codebase to reduce package size.
- Improved performance by streamlining internal processes and reducing overhead.

### v0.2.7

- Fixed several bugs.
- Added emojis to various sections of the documentation.
 
### v0.2.8

- Fixed several bugs.
 
### v0.2.9

- Fixed bundle.js bugs.
 
### v0.3.0

- Fixed useRef issues.
 
### v0.5.1

- Fixed useRef issues.
- Improved and rebuild structure.
- Improve functions and constants name .
- Added constant file to store constant datas such as hours and minutes.
  
 
### v0.5.2

- Enhanced Safety Checks.
- Implemented Optional Chaining (?.).
- Optimized Query Selection.
- Added Cleanup (return function).
- Improved Event Listener Logic.
  

For more details, see [CHANGELOG.md](./CHANGELOG.md).

## Example

Here is an example of how to use the TimePicker component in your React application:

```jsx

import React, { useState } from "react";
import { TimePicker } from "react-time-picker-digital";

function App() {
  var [hour, setHour] = useState();
  var [minute, setMinute] = useState();
  function handleData(data) {
    setHour(data.hour);
    setMinute(data.minute);
    console.log("hour", hour);
    console.log("minute", minute);
  }

  return (
   
      <TimePicker
        backgroundColor={"black"}
        activeColor={"crimson"}
        textColor={"black"}
        numbersColor={"gray"}
        language={"en"}
        cancelPage={"/"}
        confirmPage={"/about"}
        data={handleData}
      />
   
  );
}

export default App;

```

## props

Prop Type Default Description
data function Required Function to send the selected time to the parent.
cancelPage string Required Link to the previous page.
confirmPage string Required Link to the next page.

| Prop               | Type       | Default   | Description                                                                                               |
| ------------------ | ---------- | --------- | --------------------------------------------------------------------------------------------------------- |
| `data` | `function` | Required  | A callback function to send the selected hour and minute to the parent component.                         |
| `cancelPage`         | `string`   | Required  | The URL to navigate to when the back button is clicked.                                                   |
| `confirmPage`         | `string`   | Required  | The URL to navigate to when the confirm button is clicked.                                                |
| `language`         | `string`   | "en"      | Determines the language of the timepicker. The user can select between Persian ('fa') and English ('en'). |
| `activeColor`            | `string`   | "#2088B4" | Sets the color theme of the timepicker selected hour and minute. The user can select any valid CSS color. |
| `backgroundColor`  | `string`   | "#fff"    | Sets the color theme of the timepicker background color. The user can select any valid CSS color.         |
| `textColor`        | `string`   | "#000000" | Sets the color theme of the timepicker text color. The user can select any valid CSS color.               |
| `numbersColor`     | `string`   | "#bababa" | Sets the color theme of the timepicker numbers list color. The user can select any valid CSS color.       |

## Tips and Tricks

Smooth Scrolling: Ensure that your container has sufficient height to enable smooth scrolling. Adjust CSS styles if you encounter performance issues.
<br/>
Custom Styling: Use the `activeColor`, `backgroundColor`, `textColor`, and `numbersColor` props to tailor the appearance of the time picker to match your application's theme.
<br/>
Language Direction: The component automatically adjusts text direction based on the selected language. For right-to-left languages (like Persian), the layout will adapt accordingly.
<br/>
Initial Values: If you want to set default values for the hour and minute, consider using the `scrollTo` method in `useEffect` to programmatically set the initial scroll position.
<br/>
Testing: When testing the component, ensure to test across different devices and screen sizes to confirm that the responsive design works as expected.

## ❓ FAQ

Q: How do I customize the appearance of the time picker?
<br/>
A: You can customize the appearance using the activeColor, backgroundColor, textColor, and numbersColor props. These allow you to set colors for different elements within the time picker.
<br/>
Q: What languages are supported by the time picker?
<br/>
A: The time picker supports English and Persian. You can switch between these languages using the language prop.
<br/>
Q: Can I use the time picker in a non-React project?
<br/>
A: The time picker is built for React and requires React to be installed in your project. For non-React projects, you may need to find or build an alternative component.
<br/>
Q: How do I handle the selected time data?
<br/>
A: The selected time data is passed to the data callback function when the user confirms their selection. The data will include the selected hour and minute.
<br/>
Q: What should I do if the component is not rendering correctly?
<br/>
A: Ensure that the component is correctly imported and that all required props are provided. Check the console for any errors and make sure that your environment meets the necessary requirements.

## Contributing

Contributions are welcome! Please create an issue or a pull request.

## Contact Information

For any questions or feedback, please contact me via:
<br/>

Email: [hossein.azp94@gmail.com]
<br/>

LinkedIn: [https://www.linkedin.com/in/hosseinazadpour]

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Links

https://github.com/HosseinAzadpour/react-time-picker-digital
