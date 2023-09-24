# Page Properties

The **Page Properties** dialog is where page metadata (such as title, description, etc.) can be modified.

It can be opened at any time by clicking the <i class="las la-pen-nib icon-lg icon-orange icon-border"></i> icon, found on the right side of the screen.

A quick menu is shown on the left of the dialog to quickly jump to a specific section.

## Info

| Property | Description |
|---|---|
| **Title** | The title of the page, shown at the top of the page.<br>*This field is required and cannot be empty.* |
| **Short Description** | An optional short description of the page, shown below the title. |
| **Icon** | The page icon, shown to the left of the title. Click the icon on the right to show the icon picker. |
| **Alias** | An optional alias for this page. An alias is an alternate slug that can be used to access the page, regardless of its current path.<br><br>For example, using `foo-bar` as the alias means you can access the page using `example.com/a/foo-bar`. Note that aliases cannot contain slashes, as they are meant to be quick keywords, not full paths. Aliases must be unique to the site. |

## Publishing State

A page can be in one of 3 different states:

| State | Description |
|---|---|
| **Draft** | The page is only visible to users with write access. It is also marked as "Unpublished" in the top-right corner of the screen. |
| **Published** | The page is visible to users with read access. |
| **Date Range** | The page is only visible to users with read access within the selected date range. Outside the date range, only users with write access can see it. |

## Relations

*todo*

## Scripts

*todo*

## Sidebar

| Property | Description |
|---|---|
| **Show Sidebar** | Whether to display the page sidebar (which contains the table of content, tags, etc.). Not to be confused with the Site Navigation, which is controlled at the site level. |
| **Show Table of Contents** | Whether to display the Table of Contents, located in page sidebar. Note that **Show Sidebar** must be enabled for the Table of Contents to be shown. |
| **Table of Contents > Min/Max Depth** | Select the minimum and maximum header level to be opened by default in the Table of Contents. |
| **Show Tags** | Whether to display the page tags in the sidebar. Note that **Show Sidebar** must be enabled for the tags to be shown. |

## Social

The social options below must be enabled at the site level for these settings to have any effect. Access to each feature is further controlled via group rules.

| Property | Description |
|---|---|
| **Allow Comments** | Whether to allow users to post comments on the page. |
| **Allow Contributions** | Whether to allow users to suggest changes. |
| **Allow Ratings** | Whether to allow users to leave ratings on the page. |

## Tags

Add tags to your page to categorize it and making easier to find.

## Visibility

| Property | Description |
|---|---|
| **Show in Site Navigation** | Whether to list the page in the site navigation. The page can still be accessed by users with read access but will not be listed while browsing the site via the site navigation. |
| **Require Password** | Set a password that the user must enter to view the page. Note that the user must still have read access in order to view it. Users with write access will not be prompted to enter the password. |