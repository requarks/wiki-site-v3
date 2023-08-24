<template>
  <div class="dark:bg-gray-900 bg-gradient-to-tr from-white via-emerald-50 to-green-50 dark:from-emerald-950 dark:via-emerald-900 dark:to-emerald-800 py-16 sm:py-24 border-y border-solid border-t-emerald-200 dark:border-t-emerald-600 dark:border-b-emerald-800">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-emerald-500 dark:text-emerald-300">Versioning & Workflows</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-emerald-800 dark:text-white sm:text-4xl">Keep track of the changes</p>
        <p class="mt-6 text-lg leading-8 text-emerald-600 dark:text-emerald-200">The history of all page edits is saved so that you can quickly see what changed between edits and go back if necessary.</p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl sm:mt-14 lg:mt-18 lg:max-w-none">
        <dl class="grid max-w-none grid-cols-1 gap-x-8 gap-y-10 lg:gap-y-16 lg:grid-cols-3">

          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-emerald-600 dark:text-white">
              <Icon name="uil:layers-alt" class="h-5 w-5 flex-none text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              Versioning
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-emerald-800 dark:text-emerald-100">
              <p class="flex-auto">Compare any two versions of a page, easily go back to a previous version or branch off from a version.</p>
              <p class="mt-3"></p>
            </dd>
          </div>

          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-emerald-600 dark:text-white">
              <Icon name="uil:code-branch" class="h-5 w-5 flex-none text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              Commit Messages
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-emerald-800 dark:text-emerald-100">
              <p class="flex-auto">
                Optionally request a reason for change when editing a page and use it as the commit message for storage sync.
              </p>
              <p class="mt-3">
                <FeatureBadge>New in 3.0</FeatureBadge>
              </p>
            </dd>
          </div>

          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-emerald-600 dark:text-white">
              <Icon name="uil:file-check-alt" class="h-5 w-5 flex-none text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              Approvals
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-emerald-800 dark:text-emerald-100">
              <p class="flex-auto">
                Allow users to submit new pages / edits to existing pages to be reviewed and approved by authorized users.
              </p>
              <p class="mt-3">
                <FeatureBadge>Coming in 3.1</FeatureBadge>
              </p>
            </dd>
          </div>

        </dl>
      </div>
    </div>
  </div>
</template>