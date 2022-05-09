# Google Maps Capacitor plugin reference app

This hybrid app showcases the usage of Ionic Capacitor's Google Maps plugin for Android, iOS, and the Web.

## Getting started

1. Create a [Google Maps API key](https://console.cloud.google.com/google) with `Maps JavaScript API`, `Maps SDK for Android`, and `Maps SDK for iOS` APIs enabled.
2. Rename `.env.example` file to `.env`.
3. Add your Google Maps API key to the `.env` file.
4. Open `AndroidManifest.xml` and replace this value with your Google Maps API key

```xml
<meta-data android:name="com.google.android.geo.API_KEY" android:value="YOUR_API_KEY"/>
```

### Running the app

* Start the dev server with `npm start`
* Open the project in Android studio with `npx cap android open`
* Open the project in Xcode with `npx cap ios open`
