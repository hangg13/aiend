importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDY9DMHdqb9vLYbF1e3OrByz77olFkbvMs",
  authDomain: "aiproject-e81b4.firebaseapp.com",
  projectId: "aiproject-e81b4",
  storageBucket: "aiproject-e81b4.firebasestorage.app",
  messagingSenderId: "786735401727",
  appId: "1:786735401727:web:de79ad6866c82c8d395aca",
  measurementId: "G-CHS9ZE8N9X"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] 백그라운드 메시지:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/icon.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
