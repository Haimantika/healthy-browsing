chrome.runtime.onInstalled.addListener(() => {
    // Create an alarm that fires every 60 minutes
    chrome.alarms.create('healthAlarm', { periodInMinutes: 60 });
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'healthAlarm') {
      // Trigger a notification for the user
      chrome.notifications.create('reminder', {
        type: 'basic',
        iconUrl: 'images/icon48.png',
        title: 'Time for a Break!',
        message: 'Take a moment to stretch, hydrate, or rest your eyes.',
        priority: 2
      });
    }
  });
  
