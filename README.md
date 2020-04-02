# Courtyard Artifact

This is a consumable artifact for the [Courtyard Pattern Library](https://github.com/Exygy/courtyard).

It includes tooling to regenerate from the Pattern Lab and sync to this artifact.

## Tooling

### Lando

Lando is used for easy PHP and Node environments and is configured with the following commands:

```yaml
clone:
  description: Clone Courtyard to build an artifact, or for development. `lando clone`
  ...
artifact:
  description: (Re)build the artifact.
  ...
sync:
  description: Sync built assets to artifact.
  ...
```

### Instructions

#### To update the pattern library:

 - `clone [this repo]`
 - `cd [this repo directory]`
 - `lando start`
 - `lando clone [branch to checkout]` - At this time, `development` branch gives the best results. Please update this if that changes.
   - `lando clone tags/[tag to checkout]
 - `lando artifact` - will install and build the pattern library as well as sync it to the `/public` directory of this artifact.

See [Courtyard's Composer Install Wizard Docs](https://github.com/Exygy/courtyard#composer-install-wizard) for the answers to the prompts during install.

See the [Courtyard Repository](https://github.com/Exygy/courtyard) for additional information and troubleshooting.


#### Update the composer package:

 - Testing workflow TBD
 - After a new build is tested and verified commit the changes to this courtyard-artifact repo on `master` branch.
 - Add a new version tag: x.y.z
 - Push master and tag to Github
 - Packagist should be updated automatically.

Your artifact can now be installed via `composer require judicialcouncil/courtyard-artifact`.

