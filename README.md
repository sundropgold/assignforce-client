# assignforce-client

Angular client for Assignforce

## Dev Server

Since Auth0 is the authentication provider, the dev server needs to be started with ssl.

```bash
ng serve --ssl
```

You can also run the following command to achieve the same thing.

```bash
npm run dev
```

## Dev Server using Production Environment

Run the following command

```bash
npm run dev:prod
```

## Allow Insecure in Chrome

In order to get chrome to play nicely with SSL, navigate to `chrome://flags/#allow-insecure-localhost` in the address bar. Then, set `Allow invalid certificates for resources loaded from localhost` to `enabled`.

You will need to relaunch Chrome changing this setting.

## Syncing of Upstream forks

Makes it a little bit easier to sync a forked repository with its upstream counterpart.

> This tool is compatible with Linux, MacOS, and Windows Subsystem Linux only.

1.  Change to `clientApp` directory

```bash
cd clientApp
```

2.  To view all commands

```bash
sh fsync
```

You should see the following:

```bash
sh fsync init    --> initialize upstream and sync
sh fsync sync    --> sync with upstream
sh fsync merge   --> sync with upstream, push and merge with current branch (use with caution)
```

3.  `fsync init`

Use this option when this is your first time syncing your fork with the parent repository.

```bash
sh fsync init
```

4.  `fsync sync`

Use this option each time aftwards.

```bash
sh fsync sync
```

This option will _not_ push the new changes to GitHub... Use option 5 for that.

5.  `fsync merge`

If you're feeling confident, this command will fetch from upstream, commit to the forked repository, switch to the branch you were working on, and merge staging into your branch. (use carefully)

```bash
sh fsync merge
```

> The `sync` and `merge` commands will stash any uncommitted files, and then unstash them when it completes its task.
