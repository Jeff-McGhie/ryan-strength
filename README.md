# Ryan’s Strength Challenge — release 14
Prepared November 13, 2026.

## Five push-ups and five sit-ups on each workout day
Adds one set of five floor push-ups and one set of five **three-quarter sit-ups** to each Monday, Tuesday and Thursday workout. No extra workout or mini-session is added on Wednesday, Friday or ski weekends. Existing incline push-ups stay in the plan at their previously approved target.

Default exercise order:
- Monday: **Sit-ups (three-quarter) ×5** → incline push-ups → bird dogs → easy squats → **floor push-ups ×5** → forearm plank.
- Tuesday: dead bugs → forearm plank → bird dogs → **floor push-ups ×5** → **sit-ups (three-quarter) ×5** → single-leg balance → side plank from knees.
- Thursday: incline push-ups → **sit-ups (three-quarter) ×5** → reverse lunges → bird dogs → **floor push-ups ×5** → side plank from knees.

The new floor push-ups do not immediately follow incline push-ups. The sit-ups have pushing or standing movements next to them. Existing core exercises can still follow each other in Tuesday’s core-focused session. Normal rest remains between different exercises.

The matching online previews use the same branded TrainAI source as release 13. The sit-up is explicitly a controlled partial/three-quarter sit-up, not a full upright sit-up. If its online image cannot load, the fallback shows written technique cues and asks for a parent demonstration rather than inventing an unsupported animation. Floor push-ups have the existing original offline guide. Reduce Motion, pause/replay, preview-before-start and the remembered demo preference remain.

Five means **five total once per workout**, not five extra sets or five per side. The new exercises remain self-paced. Use the approved easier push-up incline if floor form slips; no max-effort testing.

## Existing devices update automatically without resetting records
New file: **workout-additions.js**. It upgrades current plans once on opening the updated app and upgrades old backups on import. The marker is stored in the same progress backup, so future reloads and restores do not repeatedly add exercises. Later parent edits remain editable and are not reset. Original exercise values are preserved; completed and partial session snapshots, results, PIN, personal bests, practice/official separation and cycle dates stay unchanged.

A recorded practice session stays recorded after the plan update. Use an unrecorded practice day/week to test the new flow. This update does not clear completions or retroactively require additions in historical records.

Heavily customized plans must have room within the existing 12-exercise limit. If they do not, the app preserves the existing plan and displays a parent-review notice. Custom exercise spacing is chosen from its names; parent review is needed for unusual names or variations.

## Test status
Passed additions-specific tests for all three days, spacing, exactly five repetitions once, retained parent edits, unchanged PIN/history/snapshots, one-time migration, old-backup import, duplicate prevention and self-paced completion. Full Mon/Tue/Thu guided-flow regression and media lifecycle/fallback tests passed. All JavaScript syntax and precache paths checked.

Release 13’s eight animations were reported working on both iPhones by the parent. Release 14 is a new candidate and still needs upload plus phone testing. It is not published by this package alone.

## Updating GitHub Pages
1. Export a fresh backup on each phone before updating.
2. Upload all **14 files inside ryan-strength-app** to the existing repository root, replacing matching files. Include **workout-additions.js**. Do not upload the enclosing folder or tests.
3. Commit and wait for the newest Pages deployment to turn green.
4. Finish any active workout. Open the installed app online on its dashboard, then close/reopen after the update arrives. A second reopen may be needed. Look for **App release 14 · 5 push-ups + 5 sit-ups each workout**.
5. Check each day’s exercise list for both five-repetition additions and preserved original targets. Select an unrecorded practice session to test the new previews.
6. Repeat on Ryan’s phone. Devices remain independent; a plan change on one phone does not sync to another.

Keep the same hosting address. Do not delete the app or clear browser data to update. Worker cache: `ryan-strength-release-14-workout-additions-1`.

## Preserved requirements and limits
The 39-session Mon/Tue/Thu calendar, November 16 official start, February 11 final scheduled session and February 13 day 90 remain. No automatic progression, weights, appearance metrics, account or subscription. Parent supervision and comfortable controlled technique remain essential. Repetitions are self-paced; backgrounding pauses timers. Local storage and the casual parent PIN have the same limits as before. Retain backups.

Online TrainAI demonstrations require internet and remain externally hosted with branding/source links. They are not included in the ZIP or precached. The provider’s permission for reuse in a separate app remains unconfirmed; remote loading does not establish a license. No provider has been contacted or paid.

Historical release-12 and release-13 notes are in the tests folder. The old isolated Side_Plank_Preview.html is a legacy vector preview, not the current media player.
