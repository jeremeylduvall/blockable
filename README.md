Blockable is a calendar that helps you plan your day. It's related to [some concepts](https://jeremey.blog/deep-work/) I picked up from [Cal Newport](http://calnewport.com) in his book _Deep Work_. Every day, I block out specific time periods on my calendar and allocate them to a specific chunk of work. This tool is designed to replace my paper version.

As for technologies:
- [Create React App](https://github.com/facebookincubator/create-react-app) provided the initial setup.
- React and Redux form the backbone of the project.
- Component tests are written in Jest using bits of Chai and Enzyme (for `expect` and `shallow` respectively).
- [React Big Calendar](https://github.com/intljusticemission/react-big-calendar) provides the full calendar for viewing (many thanks!)
- Flexbox made the CSS much easier to write for mobile views.

The project is live on GitHub pages here:

https://jeremeylduvall.github.io/blockable/
