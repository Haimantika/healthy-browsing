<link rel="stylesheet" href="styles.css"></link>
document.getElementById('snooze').addEventListener('click', () => {
    // Clear the existing alarm
    chrome.alarms.clear('healthAlarm');
    // Set a new alarm for 10 minutes later
    chrome.alarms.create('healthAlarm', { delayInMinutes: 10 });
    window.close(); // Close the popup
  });
  