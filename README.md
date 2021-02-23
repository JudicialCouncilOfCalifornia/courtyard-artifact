# Courtyard Artifact

This is a consumable artifact for the [Courtyard Pattern Library](https://github.com/Exygy/courtyard).

It includes tooling to regenerate from the Pattern Lab and sync to this artifact.

There are temporarily 2 versions of the artifact available to support the needs of trial courts. The near furutre goal is to update all sites to use the latest version of the artifact and move to a cleaner versioning strategy for future releases of the artifact.

 - 1.x - is available at the 1.x directory in the artifact.
 - 2.x - is available at the 2.x directory in the artifact.

## Preview

 - https://jccpatternlab.z22.web.core.windows.net/1.x
 - https://jccpatternlab.z22.web.core.windows.net/2.x

Any new implementations should use the 2.x version as 1.x is deprecated.


### Instructions

#### To update the artifact from the latest source repo:

The build of this artifact is triggered automatically when the Courtyard source repo is updated.

To run an artifact build manually, with the right permissions, you can trigger the workflow on the "Actions" tab in github on the Artifact repo.

See the [Courtyard Repository](https://github.com/Exygy/courtyard) for additional information and troubleshooting.


#### Update the composer package:

The artifact will automatically increment it's patch level version on each build to trigger a new release on Packagist.

To indicate a stable release, manually increment the major or minor semver number.

Your artifact can now be installed via `composer require judicialcouncil/courtyard-artifact:~x.y.z`.

#### To test a version locally

 - Clone the courtyard artifact
 - Checkout an available tag
 - Open /path/to/artifact/2.x/public/index.html in a web browser
