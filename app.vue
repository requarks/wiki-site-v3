<template>
  <HeaderNav />
  <div>
    <NuxtPage />
  </div>
  <FooterNav />
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://rsms.me/'
    },
    {
      rel: 'stylesheet',
      href: 'https://rsms.me/inter/inter.css'
    }
  ],
  script: [
    {
      innerHTML: 'window.remark_config = { site_id: "wiki", no_footer: true, theme: "dark", show_rss_subscription: false }'
    },
    {
      defer: true,
      src: 'https://comments.js.wiki/web/embed.js'
    }
  ]
})
</script>

<style lang="scss">
:root { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  :root { font-family: 'Inter var', sans-serif; }
}

body { 
  background-color: #FFF;
  color: #111827;
}

.dark body {
  background-color: #111827;
  color: #FFF;
}

.docs-styled-block {
  & + & {
    margin-top: 16px;
  }
}

.prose {
  a {
    color: #0369a1;

    @at-root .dark & {
      color: #38bdf8;
    }

    &:hover {
      color: #0284c7;
    }

    &:has(strong) {
      color: #be123c;

      @at-root .dark & {
        color: #fb7185;
      }

      &:hover {
        color: #fda4af;
        
        > strong {
          color: #fda4af;
        }
      }
    }
  }
  h1 {
    font-size: 3.25em;
    font-weight: 200;
    letter-spacing: -.06em;
    line-height: 1;
  }
  h2 {
    margin-top: 1em;
    font-size: 2.25em;
    line-height: 1;

    &[id]::before {
      content: '';
      display: block;
      height: 4em;
      margin-top: -4em;
      visibility: hidden;
    }
  }
  h3 {
    &[id]::before {
      content: '';
      display: block;
      height: 6em;
      margin-top: -6em;
      visibility: hidden;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    > a {
      color: #333;
      text-decoration: none;

      @at-root .dark & {
        color: #FFF;
      }

      &:hover {
        color: #666;

        @at-root .dark & {
          color: #f0f9ff;
        }
      }
    }
  }
  .docs-styled-block a {
    font-weight: 600;
  }
  img {
    border-radius: 0.375rem;
  }
  strong {
    color: #be123c;
    font-weight: 500;

    @at-root .dark & {
      color: #fb7185;
    }
  }
  .docs-styled-block strong {
    color: inherit;
    font-weight: 700;
  }
  code, kbd {
    color: #4c1d95;
    background-color: rgba(#4c1d95, .05);
    border: 1px solid rgba(#4c1d95, .2);
    border-radius: 4px;
    padding: 1px 5px;

    @at-root .dark & {
      color: #ddd6fe;
      background-color: rgba(#ddd6fe, .1);
      border: 1px solid rgba(#ddd6fe, .25);
    }

    &::before {
      display: none;
      content: '';
    }
    &::after {
      display: none;
      content: ''
    }
  }
  pre > code{
    color: inherit !important;
    background-color: transparent !important;
    border: none !important;
    padding: 0;
  }
  blockquote > p {
    &::before {
      display: none;
      content: '';
    }
    &::after {
      display: none;
      content: '';
    }
  }
}
</style>
