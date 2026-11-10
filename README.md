# Ryan Strength — animated demonstrations update
Prepared November 10, 2026 · app-shell release 10

## What changed
- Original looping vector animations for all eight movements in the established beginner plans: incline push-ups, bird dogs, easy squats, forearm plank, dead bugs, single-leg balance, side plank from knees, and reverse lunges. A floor push-up example is also available for an explicitly named floor push-up exercise.
- Exercise previews appear before each exercise/set/side. Watch as long as needed, then tap **Start exercise**. Watching never starts a hold timer or earns completion.
- **Show exercise demonstrations** is on by default. Its setting is remembered on this device and can be changed on the dashboard or in a preview. Disabling it does not start the current preview automatically; tap Start exercise when ready.
- **View demo** remains available during exercises, even with automatic previews off. It pauses a running hold and preserves the remaining time. Start exercise returns to the exercise and resumes its remaining timer.
- Pause/replay controls, readable form cues, accessible SVG descriptions, and motion-reduction support. When Reduce Motion is enabled, the example initially stays still until Play animation is tapped.
- Animations stop when hidden or closed. Coming back does not automatically restart animation or a paused exercise timer.
- Hold examples illustrate setup, steady position, and release. They do not prescribe repeated lifts during an actual hold. Balance preview shows both legs as examples; follow the exercise's Side 1/Side 2 instruction during the hold.
- Unknown custom exercise names display a request for a parent demonstration instead of an unrelated animation. For custom variations of recognized exercises, follow the parent's approved variation; the animation is a standard example. Animation mappings do not automatically adapt to arbitrary edited exercise names or instructions.
- All animation data and rendering are in demos.js, cached as part of the offline app shell. No streaming video, external animation assets, account, or paid service is needed.

## Preserved behavior
Original youth core/calisthenics plan; parent-approved progression; 13 scheduled weeks and 39 Mon/Tue/Thu sessions; November 16, 2026 start; February 11 last scheduled session; February 13 day 90. Practice and official data remain separate. No automatic increase by week. Existing sessions retain their recorded plan snapshots. Exercise repetitions are user-paced. Skips remain partial. Stop, Back, timer pause, parent settings, backup restore/export, and optional spoken coaching remain available.

Uses the same ryanStrengthV3 storage and backup schema. It does not reset local plans, PINs, or history. Display preferences (demo visibility and selected voice) are device-local and are separate from the progress backup. Progress does not sync across phones.

## Updating the existing GitHub Pages site
1. Export a fresh backup on each phone before updating.
2. Upload every file inside ryan-strength-app to the existing repository root, replacing matching files. Include the new **demos.js**. Do not upload the enclosing folder or ryan-strength-tests folder.
3. Commit to main and wait for the newest Pages deployment to turn green.
4. End any running workout. Open the installed app online and leave the dashboard open long enough to download the update. Close/reopen once more to load it. The dashboard should now show **Show exercise demonstrations**.
5. Keep the same hosting address/path. Do not clear website data or delete the app as an update step.

Release 9's worker precaches the complete app before activating, then claims clients. It does not automatically reload a running workout or touch localStorage. A browser may continue showing already loaded code until reopened/refreshed.

## Automated verification
Run `node ryan-strength-tests/demos.test.cjs` from the extracted package parent.

Passed: a moving loop for every default exercise; finite/interpolated poses and loop endpoints; unknown movement fallback; preview/start sequencing; pause/replay controls; no timer or completion during preview; holding-time preservation during a refresher; saved toggle; manual demos with previews disabled; reduced-motion opt-in; skipped exercise bookkeeping; complete Monday/Tuesday/Thursday practice sessions with exactly three completions; previously saved official history unchanged; backup validation compatibility. JS syntax checks passed.

Chrome UI review: preview renders; rep exercises remain user-paced after Start; exercise Done leads to rest; plank preview waits; original drawings reviewed together; 393px iframe layout inspected with visible sticky Start/Back controls. This is a browser layout review, not physical iPhone animation testing or a clinical technique certification.

## Physical-device status
Previously confirmed with parent reports: parent iPhone Home Screen launch, timer controls, partial persistence, offline launch, parent PIN and plan save, export/restore, interruption pause, spoken cues (Silent Mode off), full simulated practice completion and prevention of duplicate counting. Ryan's iPhone 16 Pro: Safari Home Screen install, separate 0/39 practice state, parent PIN, interruption pause, offline launch and export/restore passed.

This new animation version is not yet published by the parent or tested on either physical iPhone. Ryan has not yet performed his first supervised practice workout. That remains the next exercise-readiness check before official use.

## Animation acceptance checklist on the phones
- Start a practice workout; bypass warm-up only for testing.
- Confirm a moving example appears before the first exercise, with no countdown running.
- Pause/replay the animation, then tap Start exercise; verify repetitions say Your pace.
- At a timed exercise preview, wait longer than the hold duration; it must stay Ready when you are. Start and let its full timer finish.
- Open View demo partway through a hold; verify the remaining time is preserved when returning.
- Turn demos off, close/reopen, and verify the setting persists. View demo must remain available.
- After installing online, repeat the demo preview offline.
- Reopen and confirm existing practice/official records and backup restore remain intact.
- Have a parent review each example with Ryan during his first practice session. Adjust range, variation, or workload for comfortable form; stop for pain or form loss.

## Coaching references
Original simplified animations and independently written cues; no third-party images or videos copied. Technique references consulted for opposite-limb core exercises:
- NASM Bird Dog: https://www.nasm.org/resource-center/exercise-library/bird-dog
- NASM Dead Bug: https://www.nasm.org/resource-center/exercise-library/dead-bug
- ACE exercise library: https://www.acefitness.org/resources/everyone/exercise-library/
These references inform movement cues, not the child's prescribed sets/reps.

## Ongoing limits
An adult supervises youth sessions. Keep the app open during a workout. Timers pause when backgrounded; no background audio/timer promise. Spoken voice quality is limited to the voices exposed by the phone; on the tested parent phone, Silent Mode must be off. Storage can be cleared or evicted; retain JSON backups. The parent PIN is a casual gate, not strong security. A retry of a partial session starts a fresh guided flow. There is no App Store/watchOS app or automatic cloud sync.

## Orientation revision — release 10
Parent feedback: the initial simple silhouettes did not make face-up versus face-down position clear enough. Added visible eyes, nose, mouth, and hair to every figure; explicit orientation and setup text; a thick labeled mat; and forearm/knee/toe contact labels for forearm planks. Kept the preview/start workflow, targets, timers, storage keys, and backup schema unchanged. Full regression tests passed again; revised face-up/face-down drawings inspected in Chrome. This revision still needs parent and physical-iPhone review before use. Only demos.js, style.css, sw.js and this README differ from release 9; uploading all 12 app files is supported.
