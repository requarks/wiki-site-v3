<template>
  <HeadlessPopover class="relative">
    <HeadlessPopoverButton class="font-medium py-1.5 px-3">
      <span>Changelog</span>
      <Icon name="uil:angle-down" color="white" size="1.25em" aria-hidden="true" />
    </HeadlessPopoverButton>
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <HeadlessPopoverPanel v-slot="{ close }" class="absolute -right-3 mt-3 w-screen max-w-max">
        <div class="bg-gray-700 shadow-lg rounded-xl w-screen max-w-md overflow-hidden">
          <div class="p-4">
            Beep Boop
          </div>
          <div class="bg-gray-600 p-3">
            <NuxtLink to="/changelog" @click="close">View Changelog</NuxtLink>
          </div>
        </div>
      </HeadlessPopoverPanel>
    </transition>
  </HeadlessPopover>
</template>