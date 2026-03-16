# Android Studio & APK Generation Guide

Follow these steps to build, run, and export your application as an APK for sharing.

## 1. Open in Android Studio
The project is already configured with Capacitor. To open it in Android Studio, run:
```bash
npx cap open android
```
This will launch Android Studio and load the `android` folder automatically.

## 2. Prepare the Web Assets
Every time you make changes to your React code, you must rebuild the web project and sync it to the android folder:
```bash
npm run build
npx cap sync android
```

## 3. Build the APK (Debug or Release)
Inside Android Studio:
1. Wait for Gradle to finish syncing (check the bottom progress bar).
2. Go to **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**.
3. Once finished, a notification will appear at the bottom right. Click **Locate** to find your `.apk` file.
4. This APK can be sent to anyone to install on an Android device.

## 4. Run on a Physical Device
1. Enable **Developer Options** and **USB Debugging** on your Android phone.
2. Connect your phone to your computer via USB.
3. In Android Studio, select your phone from the device dropdown at the top.
4. Click the **Run** button (green play icon).

## 5. Troubleshooting
- **Gradle Errors**: If you see Gradle sync errors, go to **File** > **Invalidate Caches / Restart**.
- **JDK Version**: Ensure you are using JDK 17 or higher (configured in Android Studio Settings > Build, Execution, Deployment > Build Tools > Gradle).
