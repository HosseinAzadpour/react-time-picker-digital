# TimePicker

A bilingual (English/Persian) and responsive digital time picker library with customizable color options. Perfect for modern web applications requiring dynamic and stylish time selection.

## Table of Contents

- [TimePicker](#timepicker)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Introduction](#introduction)
  - [Interactive Demo](#interactive-demo)
  - [Features](#features)
  - [Example](#example)
  - [props](#props)
  - [Tips and Tricks](#tips-and-tricks)
  - [FAQ](#faq)
  - [Contributing](#contributing)
  - [Contact Information](#contact-information)
  - [License](#license)
  - [Links](#links)
  - [Keywords](#keywords)

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

<br/>
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

![TimePicker Demo](https://github.com/HosseinAzadpour/assets/blob/main/react-time-picker-digital/TimePickerDesktopSize.png)
![TimePicker Demo](https://github.com/HosseinAzadpour/assets/blob/main/react-time-picker-digital/TimePickerPhoneSize.png)

## Features

- Customizable Styling: Adjust the appearance of the time picker with customizable properties such as `color`, `backgroundColor`, `textColor`, and `numbersColor` to match your design needs.
- Language Support: The component supports both English and Persian (`fa`). It automatically adjusts text and layout direction based on the selected language.
- Responsive Design: The time picker is designed to be responsive and works well across different screen sizes and devices.
- Smooth Scrolling: The hour and minute selectors scroll smoothly, providing a seamless user experience.
- Active State Highlighting: The selected hour and minute are highlighted to give users clear feedback on their choices.
- Parent Communication: The `sendDataToParent` function allows you to send the selected hour and minute back to the parent component.
- Navigation Links: Easily navigate between pages with customizable `prevPage` and `nextPage` links.

## Example

Here is an example of how to use the TimePicker component in your React application:

```jsx

import React, { useState } from "react";
import { TimePicker } from "react-time-picker-digital";

function App() {
  var [hour, setHour] = useState();
  var [minute, setMinute] = useState();
  function handleDataFromChild(data) {
    setHour(data.hour);
    setMinute(data.minute);
    console.log("hour", hour);
    console.log("minute", minute);
  }

  return (
    <div className='App'>
      <TimePicker
        backgroundColor={"#fff"}
        color={"crimson"}
        textColor={"black"}
        numbersColor={"gray"}
        language={"en"}
        prevPage={"/"}
        nextPage={"/about"}
        sendDataToParent={handleDataFromChild}
      />
    </div>
  );
}

export default App;

```

## props

Prop Type Default Description
sendDataToParent function Required Function to send the selected time to the parent.
prevPage string Required Link to the previous page.
nextPage string Required Link to the next page.

| Prop               | Type       | Default   | Description                                                                                               |
| ------------------ | ---------- | --------- | --------------------------------------------------------------------------------------------------------- |
| `sendDataToParent` | `function` | Required  | A callback function to send the selected hour and minute to the parent component.                         |
| `prevPage`         | `string`   | Required  | The URL to navigate to when the back button is clicked.                                                   |
| `nextPage`         | `string`   | Required  | The URL to navigate to when the confirm button is clicked.                                                |
| `language`         | `string`   | "en"      | Determines the language of the timepicker. The user can select between Persian ('fa') and English ('en'). |
| `color`            | `string`   | "#2088B4" | Sets the color theme of the timepicker selected hour and minute. The user can select any valid CSS color. |
| `backgroundColor`  | `string`   | "#fff"    | Sets the color theme of the timepicker background color. The user can select any valid CSS color.         |
| `textColor`        | `string`   | "#000000" | Sets the color theme of the timepicker text color. The user can select any valid CSS color.               |
| `numbersColor`     | `string`   | "#bababa" | Sets the color theme of the timepicker numbers list color. The user can select any valid CSS color.       |

## Tips and Tricks

Smooth Scrolling: Ensure that your container has sufficient height to enable smooth scrolling. Adjust CSS styles if you encounter performance issues.
<br/>
Custom Styling: Use the `color`, `backgroundColor`, `textColor`, and `numbersColor` props to tailor the appearance of the time picker to match your application's theme.
<br/>
Language Direction: The component automatically adjusts text direction based on the selected language. For right-to-left languages (like Persian), the layout will adapt accordingly.
<br/>
Initial Values: If you want to set default values for the hour and minute, consider using the `scrollTo` method in `useEffect` to programmatically set the initial scroll position.
<br/>
Testing: When testing the component, ensure to test across different devices and screen sizes to confirm that the responsive design works as expected.

## FAQ

Q: How do I customize the appearance of the time picker?
<br/>
A: You can customize the appearance using the color, backgroundColor, textColor, and numbersColor props. These allow you to set colors for different elements within the time picker.
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
A: The selected time data is passed to the sendDataToParent callback function when the user confirms their selection. The data will include the selected hour and minute.
<br/>
Q: What should I do if the component is not rendering correctly?
<br/>
A: Ensure that the component is correctly imported and that all required props are provided. Check the console for any errors and make sure that your environment meets the necessary requirements.

## Contributing

## Contact Information

For any questions or feedback, please contact me via:
<br/>

Email: [hossein.azp94@gmail.com]
<br/>

LinkedIn: `https://www.linkedin.com/in/hosseinazadpour`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Links

https://github.com/HosseinAzadpour/react-time-picker-digital

## Keywords

react,
time-picker,
Component,
English,
Persian,
ui,
responsive,
timePicker,
theme customization,
date and time picker,
react widget,
easy to use,
open source,
clock,
digital
