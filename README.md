# Ryan’s Strength Challenge — release 13
Prepared November 13, 2026. TrainAI online demonstration integration.

## This build
All eight established beginner movements now have an online TrainAI demonstration in the exercise preview: incline push-ups, bird dogs, easy bodyweight squats, forearm plank, dead bugs, supported single-leg balance, side plank from bent knees, and reverse lunges.

The new file is **media-demos.js**. It loads the provider’s unmodified, branded GIFs and static setup pictures from their public hosted URLs and links each demonstration to its official TrainAI exercise page. There are no downloaded provider images in this ZIP, no new account, subscription, analytics script, or payment. A direct image request sends the ordinary network information required to retrieve a file; image requests omit the referrer. Source-page links open the provider’s own website, which has its own notices and policies.

**Rights status:** TrainAI’s public download access and branding guidance were verified, but an explicit license for use inside a separate app remains unconfirmed. Remote image loading does not itself settle that permission question. This is an integration/review candidate, not a claim that provider licensing has been resolved. No provider has been contacted or paid. Do not rehost or bundle the provider’s files as an asset library. Source: https://www.trainaiapp.com/exercise-media/ and https://www.trainaiapp.com/terms-condition-1/ .

## Preserved exercise behavior
- Preview before each exercise, set and timed side. Watching never starts the exercise timer or earns completion. Tap **Start exercise** when ready.
- Repetition exercises remain self-paced. Demo motion does not set the exercise cadence.
- Hold demonstrations show setup, hold and release. Ryan holds his own position until his actual exercise timer ends, rather than copying repeated lifts in a looping demonstration.
- **Show exercise demonstrations** remains enabled by default and remembered on this device. Disabling it does not automatically start the current preview.
- **View demo** remains available even with automatic previews disabled. It pauses a running hold and preserves its remaining time.
- Pause animation freezes the current image; Play starts the short loop again. Replay restarts the GIF from a fresh request. Animation playback does not automatically resume after backgrounding.
- Reduce Motion starts on a static setup picture; animation waits for an explicit Play tap.
- The example’s incline push-up uses a bench. Ryan’s cue explicitly retains his approved sturdy fixed counter height. Squat depth remains comfortable and may be shallower than the demonstration.
- Several loops demonstrate one side only. Follow the approved targets and Side 1 / Side 2 instructions; do both sides as directed.
- The set uses male and female characters. It is not one identical coach for all eight.
- Unknown custom exercise names still ask for a parent demonstration. An explicitly named floor push-up retains its existing offline guide; no incline clip is substituted for it.

## Offline and failure behavior
The workout app and original vector guides remain offline-capable after installation. The new TrainAI images need internet. They are not added to the service-worker offline cache.

If an animation fails or takes more than 12 seconds to load, the existing local guide appears with a clear message. **Use offline guide** also selects it immediately. Start, Back, Skip and Stop remain usable during loading. Late image callbacks cannot replace a subsequent step after navigation or closing the workout. Media requests stop when the preview is destroyed.

## Plans and stored data
No changes to the core workout plans, targets, revision schema, localStorage keys, PIN, backup format or history. The app still uses `ryanStrengthV3`; demo preference still uses `ryanStrengthDemosV1`. Existing records retain their plan snapshots. Preferences and progress do not sync across phones.

The original youth core/calisthenics requirements remain: parent-supervised comfortable practice, no weights or appearance goals, no automatic progression by date, 39 Mon/Tue/Thu sessions across 13 scheduled weeks, official start November 16, 2026, last scheduled session February 11, 2027, and day 90 February 13, 2027. Practice and official completions remain separate. Wednesday/Friday are rest days; weekends are skiing.

## Verification completed
- `node ryan-strength-tests/demos.test.cjs`: full Monday, Tuesday and Thursday practice flows with the new renderer loaded; no timer/completion during preview; user-paced repetitions; hold refresher preserves remaining time; skip/partial behavior; remembered demo preference; Reduce Motion; unknown-name fallback; previous official history unchanged; backup-schema validation.
- `node ryan-strength-tests/media.test.cjs`: all eight media mappings; static initial state; direct-image playback; freeze/pause; fresh replay URL; visibility/destroy cleanup; late callbacks ignored; network failure, timeout, offline and manual fallback; provider files absent from precache.
- All app JavaScript passes syntax checks. Every precached app-shell path exists.
- All 16 source URLs (eight GIFs plus eight static pictures) returned HTTP 200 and image content. Downloaded GIF SHA-256 values match the provider catalog names. Test retrievals were not bundled into this package.
- Chrome: actual incline demonstration rendered inside the app. Pause froze a canvas frame, replay reloaded animation, Start led to **Your pace**, View demo reopened the preview, and manual offline fallback displayed the local guide. Reviewed at 393-pixel iframe width with sticky Start/Back controls.

These checks do not establish physical iPhone compatibility. This build has not been uploaded to the live GitHub Pages site. Neither phone has tested this release yet, and Ryan still needs a supervised practice session with the new examples.

## Updating the existing GitHub Pages app
Preserve the existing site address. Do not clear browser data or delete the installed app as an update procedure.

1. Export a fresh backup on each phone.
2. Download/unzip this package. The upload folder is **ryan-strength-app**.
3. Upload all **13 files inside that folder** to the existing repository root, replacing matching files. Include the new **media-demos.js**. Do not upload the enclosing folder, tests, or the old isolated side-plank preview.
4. Commit and wait for the newest Pages deployment to turn green.
5. Finish any running workout. Open the installed app online on the dashboard to receive the update, then close/reopen it. A second close/reopen may be needed for already loaded code. Dashboard footer: **App release 13 · TrainAI online demonstrations**.
6. Start practice and confirm the first exercise shows the new character before its timer starts. Check both phones separately.

The worker cache is `ryan-strength-release-13-trainai-1`. It installs the complete shell before activation and does not rewrite localStorage or reload an ongoing workout.

## Phone acceptance checks
- Confirm existing progress, PIN and plans remain present.
- Start a practice workout. Let the actual warm-up run during exercise practice; bypass only for UI testing.
- Confirm the preview shows the new character while the clock says **Ready when you are**.
- Pause/replay the animation, then Start. Repetitions must say **Your pace**.
- At a timed hold preview, wait longer than the hold duration; the hold must still have its full time when started.
- Open View demo during a hold and confirm its remaining time is preserved.
- Check both sides of knee side plank and supported balance with an adult.
- Disable demos, reopen the app, and confirm the choice persists. Manual View demo must still work.
- Try **Use offline guide** and an offline app launch after the shell has updated online.
- Export/restore a backup only as a deliberate parent-approved test; restore replaces local records.

## Remaining limits
TrainAI reuse permission is unresolved. Online images depend on the provider keeping the URLs available. The older offline guides remain basic drawings. The images are short, native-resolution loops rather than HD follow-along videos. On iOS, keep Silent Mode off for speech; voice quality depends on available system voices. Keep the app open during exercise; backgrounding pauses timers. Local browser storage can be cleared or evicted, so retain backups. The parent PIN is a casual gate, not strong security.

Historical release-12 implementation notes are retained under `ryan-strength-tests/Release_12_README.md`. The root `Side_Plank_Preview.html` is the OLD isolated vector preview, not this new integrated TrainAI player.
