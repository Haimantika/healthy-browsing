  document.getElementById('snooze').addEventListener('click', () => {
    const snoozeDuration = Number(document.getElementById('snoozeDuration').value);
    chrome.alarms.clear('healthAlarm');
    chrome.alarms.create('healthAlarm', { delayInMinutes: snoozeDuration });
    window.close(); // Close the popup
  });
