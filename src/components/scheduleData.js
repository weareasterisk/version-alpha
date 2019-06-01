/**
 * Schedule object shape
 *
 * {
 *   event: '',
 *   time: ''
 * }
 *
 * */

const dayOne = {
  title: "Friday, May 31",
  events: [
    {
      event: 'DreamHack Doors Open',
      time: '9:00 AM'
    },
    {
      event: 'V/A Registration & Check-In',
      time: '6:00 PM - 8:00 PM'
    },
    {
      event: 'Opening Ceremony',
      time: '7:00 PM - 8:00 PM'
    },
    {
      event: 'Hacking Begins',
      time: '8:00 PM'
    },
    {
      event: 'Dinner Voucher Handout',
      time: '8:00 PM'
    },
    {
      event: 'Hardware Lab Opens',
      time: '8:15 PM'
    },
    {
      event: 'Team Building and Ideation Session',
      time: '8:15 PM - 9:15 PM'
    }
  ]
};

const dayTwo = {
  title: "Saturday, June 1",
  events: [
    {
      event: 'Quiet Hours',
      time: '2:00 AM - 5:00 AM'
    },
    {
      event: 'Quiet Hours',
      time: '5:00 AM - 7:00 AM'
    },
    {
      event: 'Voucher Handout',
      time: '8:00 AM'
    },
    {
      event: 'Game Dev 101 - IGDA',
      time: '12:00 PM - 1:00 PM'
    },
    {
      event: 'Twitch Emotes Bingo',
      time: '12:00 PM - 12:00 AM'
    },
    {
      event: 'Picture Scavenger Hunt',
      time: '12:00 PM - 12:00 AM'
    },
    {
      event: 'How to Break into the Gaming Industry',
      time: '1:00 PM - 2:00 PM'
    },
    {
      event: 'Intro to Gamification - David Fares',
      time: '2:00 PM - 3:00 PM'
    },
    {
      event: ' Bob Ross MS Paint Part',
      time: '10:00 PM - 10:30 PM'
    },
  ]
};

const dayThree = {
  title: "Sunday, June 2",
  events: [
    {
      event: 'Quiet Hours',
      time: '2:00 AM - 5:00 AM'
    },
    {
      event: 'Quiet Hours',
      time: '5:00 AM - 7:00 AM'
    },
    {
      event: 'Breakfast Voucher Handout',
      time: '8:00 AM'
    },
    {
      event: 'Play "How to Submit" Video',
      time: '8:30 AM - 8:45 AM'
    },
    {
      event: 'Devpost Submissions Due',
      time: '9:00 AM'
    },
    {
      event: '"How to Win" Workshop',
      time: '9:00 AM - 9:30 AM'
    },
    {
      event: 'Hardware Lab Closes',
      time: '9:45 AM'
    },
    {
      event: 'Hacking Ends',
      time: '10:00 AM'
    },
    {
      event: 'Judging',
      time: '10:00 AM - 11:30 AM'
    },
    {
      event: 'Lunch Voucher Handout',
      time: '11:30 AM'
    },
    {
      event: 'Final Pitch Briefing',
      time: '12:30 PM - 12:45 PM'
    },
    {
      event: 'Final Presentations',
      time: '1:00 PM - 1:30 PM'
    },
    {
      event: 'Closing Ceremony & Awards',
      time: '1:45 PM - 2:15 PM'
    },
    {
      event: 'Hardware Return Final Call',
      time: '2:15 PM - 3:00 PM'
    }
  ]
};

export default [dayOne, dayTwo, dayThree];
