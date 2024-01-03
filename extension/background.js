chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(['snoozeDuration'], (data) => {
      const snoozeDuration = data.snoozeDuration || 10;
      chrome.alarms.create('healthAlarm', { periodInMinutes: 60 });
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'healthAlarm') {
      chrome.notifications.create('reminder', {
          type: 'basic',
          iconUrl: 'images/icon48.png',
          title: 'Time for a Break!',
          message: 'Take a moment to stretch, hydrate, or rest your eyes.',
          priority: 2
      });
  }
});
