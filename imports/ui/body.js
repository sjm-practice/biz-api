import { Template } from 'meteor/templating';

import './body.html';
import './info.html';

Template.body.helpers({
  tasks: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' }
  ]
});
