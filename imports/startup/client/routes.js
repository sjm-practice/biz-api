import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/pages/info-page.html';

// specifically set the div in body, where BlazeLayout renders
BlazeLayout.setRoot('#layoutContainer');

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Info_page' });
  }
});
