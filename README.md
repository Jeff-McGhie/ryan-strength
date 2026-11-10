# Ryan Strength — testing candidate, November 10, 2026

Original iPhone-first local-only PWA. Upload index.html, style.css, core.js, app.js, sw.js, manifest.webmanifest, and both PNG icons to a free HTTPS static host. Keep the same URL for future updates. No ChatGPT or paid Apple developer membership required.

## Changes from supplied source
- Parent-approved levels replace automatic increases by training week.
- Structured sets, targets, rest, variations and technique; separate side timers.
- Practice and official records remain separate. Los Angeles date boundaries; future official sessions locked until their scheduled date.
- Per-set done/skipped results, safe partial records, duplicate completion prevention, and plan snapshots.
- Validated JSON backup restore and export. Existing V2 completion flags migrate as legacy records; the old app did not retain historical plans. Old custom text plans are not silently converted to timed prescriptions; re-enter them in parent settings.
- Parent PIN gate, future cycles, checklist, optional personal bests, optional spoken prompts.
- Foreground timers pause on visibility loss; no background timer or audio promise.
- Versioned offline app shell, relative asset paths, PNG Home Screen icons.

## Verification completed
Node syntax check; assertions for Los Angeles November 15/16 transition, 90th calendar day, last session date, 39 unique scheduled sessions, fresh backup round trip, invalid backup rejection, skipped exercise completion, edited sets, and separate side holds.
Chrome UI: initial practice dashboard at 0/39, warm-up, pause, user-paced reps, skip into rest, stop with partial result, and partial persistence after reload.

## Still required before family release
Full guided sessions on all three days; parent plan editing and PIN flow; export/import using iPhone Files; mobile visual QA; offline launch after installation; service-worker update with progress retained; audio, lock/unlock, interruption and storage behavior on physical iPhones. No physical-device or production deployment test has been completed.

## iPhone acceptance checklist after hosting
1. Parent opens HTTPS URL in Safari. Confirm practice mode and 0/39.
2. Share > Add to Home Screen. Open installed app.
3. Start a supervised practice session. Check reps never count down; holds/rest do; pause/resume works; skip does not earn full completion.
4. Switch apps and return. Timer should be paused. Stop, close/reopen; partial state stays saved.
5. Set a parent PIN. Edit a practice prescription, run it, and verify actual sets/hold/rest match. Completed snapshots remain unchanged.
6. Export backup to Files, then restore and verify progress. Keep backups private: they contain local records and the casual parent PIN.
7. After two online launches, turn on Airplane Mode and open from Home Screen; check a workout loads. Turn connectivity back on.
8. Repeat on Ryan's iPhone 16 Pro. Data on parent's phone does not sync to his. Official mode begins November 16 with its own zero count.

## Updates
Export backup first. Replace app files on the SAME host/path; bump the CACHE string in sw.js for each release. Close all app tabs/windows and reopen twice online to allow the waiting service worker to activate. Verify progress, then offline behavior. Do not change localStorage key or schema without a migration. Avoid renaming repository/host/path because browser storage belongs to the origin and installation path matters for caching.

## Limits
Keep app open and screen unlocked during sessions. Local storage can be evicted or cleared; there is no cloud sync. PIN is not strong security. Browser speech varies. Partial retries start a fresh guided session. All exercise increases require parent review. Session length depends on comfortable repetition pace; never rush to hit a duration.

Publishing is pending account choice and approval. No public URL exists for this candidate.
