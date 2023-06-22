import BackgroundTimer from 'react-native-background-timer';
import io from 'socket.io-client';

// import { showLocalPushNotification } from 'helper/PushNotificationServices';

const URL = 'ws://api.masterium.ge/'; //:)
const currentTimestamp = () => {
  const d = new Date();
  const z = n => (n.toString().length == 1 ? `0${n}` : n); // Zero pad
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())} ${z(
    d.getHours(),
  )}:${z(d.getMinutes())}`;
};
let socket = io(URL, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: Infinity,
  autoConnect: true,
});

class WSService {
  initializeSocket = async () => {
    try {
        console.log(socket.on('connect'),'aaaaa');
        
      socket.on('connect', () => {
        console.log('===connect===');

        //showLocalPushNotification('Socket Say', `socket connect successfully`);
      });

      socket.on('disconnect', reason => {
        console.log(reason);
        socket.connect();

        if (reason === 'io server disconnect') {
          // the disconnection was initiated by the server, you need to reconnect manually
        }
        console.log('disconnect');
        // showLocalPushNotification('Socket Say', `socket disconnect :(`);
      });

      socket = socket.on('receive', async data => {
        console.log('receive');
        // showLocalPushNotification(
        //     'Socket Say',
        //     `${currentTimestamp()}`
        // );
        console.log(data);
      });

      socket.on('reconnect', attemptNumber => {
        console.log('reconnect');

        console.log(attemptNumber);
        // ...
      });
      socket.on('reconnect_error', error => {
        console.log('reconnect_error');

        console.log(error);
        // ...
      });

      socket.on('reconnect_failed', () => {
        console.log('reconnect_failed');
        // ...
      });

      BackgroundTimer.runBackgroundTimer(() => {
        console.log('hi');

        // showLocalPushNotification(
        //     'BackgroundTimer Say',
        //     `${value || ''}\n${currentTimestamp()}`
        // );
        socket.emit('send', {my: 'ok i get news'});

        // this.socket.emit('send', {my: 'ok i get news'});
      }, 10000);
    } catch (error) {
      console.log(error);
    }
  };
}
const socketServices = new WSService();
export default socketServices;
