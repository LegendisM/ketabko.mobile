import notifee, { AndroidStyle } from '@notifee/react-native';

const DisplayNotification = async (title, body) => {
    // Create a channel
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    });
    // Display a notification
    await notifee.displayNotification({
        title: title,
        body: 'آماده ای ؟',
        android: {
            channelId,
            color: '#4caf50',
            smallIcon: 'ic_launcher',
            largeIcon: require('../../assets/logo/logo.png'),
            style: { type: AndroidStyle.BIGTEXT, text: body },
        },
    });
}

module.exports = {
    DisplayNotification
}