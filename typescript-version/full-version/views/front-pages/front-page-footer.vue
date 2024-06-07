<script setup lang="ts">
import appleImg from '@images/front-pages/landing-page/apple-icon.png'
import googlePlayImg from '@images/front-pages/landing-page/google-play-icon.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

interface Menu {
  name: string
  to: any
  isNew?: boolean
}

const menus: Menu[] = [
  { name: 'Pricing', to: { name: 'front-pages-pricing' } },
  { name: 'Payment', to: { name: 'front-pages-payment' }, isNew: true },
  { name: 'Maintenance', to: { name: 'pages-misc-under-maintenance' } },
  { name: 'Comming Soon', to: { name: 'pages-misc-coming-soon' } },
]
</script>

<template>
  <div class="footer">
    <VSheet
      class="footer-top pt-15"
      theme="dark"
    >
      <VContainer>
        <VRow>
          <!-- 👉 Footer  -->
          <VCol
            cols="12"
            lg="5"
          >
            <div class="mb-4 footer-form">
              <div class="d-flex align-center gap-x-3 mb-6">
                <VNodeRenderer :nodes="themeConfig.app.logo" />
                <div class="footer-title">
                  MATERIO
                </div>
              </div>
              <div class="text-body-1 footer-text mb-6">
                Most Powerful & Comprehensive 🤩 Vuejs Admin Template with Elegant Material Design & Unique Layouts.
              </div>
              <VForm class="subscribe-form d-flex align-center gap-4">
                <VTextField
                  label="Subscribe to newsletter"
                  placeholder="john@email.com"
                  theme="dark"
                  density="compact"
                  class="footer-text"
                />
                <VBtn>Subscribe</VBtn>
              </VForm>
            </div>
          </VCol>

          <!-- 👉 Pages -->
          <VCol>
            <div class="d-flex justify-space-between  flex-grow-1 gap-x-16 gap-y-8 flex-md-row flex-column">
              <div>
                <div class="footer-heading mb-6">
                  Pages
                </div>
                <ul style="list-style: none;">
                  <li
                    v-for="(item, index) in menus"
                    :key="index"
                    class="mb-4"
                  >
                    <NuxtLink
                      class="footer-text text-no-wrap"
                      :to="item.to"
                    >
                      <div class="d-flex align-center">
                        <div>{{ item.name }}</div>
                        <template v-if="item.isNew">
                          <VChip
                            color="primary"
                            variant="elevated"
                            size="small"
                            class="ms-2"
                          >
                            New
                          </VChip>
                        </template>
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <!-- 👉 Products  -->
              <div>
                <div class="footer-heading mb-6">
                  Products
                </div>
                <ul>
                  <li
                    v-for="(item, index) in ['Page Builder', 'Admin Dashboards', 'UI Kits', 'Illustrations']"
                    :key="index"
                    class="mb-4"
                    style="list-style: none;"
                  >
                    <NuxtLink
                      to=""
                      class="footer-text text-no-wrap"
                    >
                      {{ item }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <!-- 👉 Download App -->
              <div>
                <div class="footer-heading mb-6">
                  Download our app
                </div>
                <div>
                  <VBtn
                    v-for="(item, index) in [
                      { image: appleImg, store: 'App Store' },
                      { image: googlePlayImg, store: 'Google Play' },
                    ]"
                    :key="index"
                    color="#211B2C"
                    size="x-large"
                    class="mb-4 d-block"
                  >
                    <template #default>
                      <div class="d-flex gap-x-3">
                        <div>
                          <VImg
                            :src="item.image"
                            height="34"
                            width="34"
                          />
                        </div>
                        <div>
                          <div class="text-body-2 text-white">
                            Download on the
                          </div>
                          <div class="text-body-2 font-weight-medium text-white">
                            {{ item.store }}
                          </div>
                        </div>
                      </div>
                    </template>
                  </VBtn>
                </div>
              </div>
            </div>
          </VCol>
        </VRow>
      </VContainer>
    </VSheet>

    <div class="footer-line w-100">
      <VContainer>
        <div class="d-flex justify-space-between flex-wrap gap-y-4">
          <span class="d-flex align-center">
            &copy;

            {{ new Date().getFullYear() }},
            Made with ❤️  by <a
              href="https://themeselection.com"
              target="_blank"
              rel="noopener noreferrer"
              class="ms-1 font-weight-medium"
              style="color: rgba(255,255,255,var(--v-high-emphasis-opacity));"
            >ThemeSelection</a>
          </span>
          <div class="d-flex gap-x-2">
            <template
              v-for="(item, index) in [
                { title: 'github', icon: 'bxl-github', href: 'https://github.com/themeselection' },
                { title: 'facebook', icon: 'bxl-facebook', href: 'https://www.facebook.com/ThemeSelections/' },
                { title: 'twitter', icon: 'bxl-twitter', href: 'https://twitter.com/Theme_Selection' },
                { title: 'instagram', icon: 'bxl-linkedin', href: 'https://in.linkedin.com/company/themeselection' },
              ]"
              :key="index"
            >
              <IconBtn
                :href="item.href"
                size="small"
                target="_blank"
                color="#fff"
                rel="noopener noreferrer"
              >
                <VIcon :icon="item.icon" />
              </IconBtn>
            </template>
          </div>
        </div>
      </VContainer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-top {
  background: url("@images/front-pages/backgrounds/footer-bg.png") lightgray 50% / cover no-repeat;
}

.footer-heading{
  color: rgba(255, 255, 255, var(--v-high-emphasis-opacity));
  font-weight: 500;
}

.footer-text{
  color: rgba(255, 255, 255, var(--v-medium-emphasis-opacity));
}

.footer-title{
  color: rgba(255, 255, 255, var(--v-high-emphasis-opacity));
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.15px;
  line-height: 1.5rem;
}

.footer-line {
  background: #211b2c;
  color: rgba(255, 255, 255, var(--v-medium-emphasis-opacity));
  font-size: 13px;
  line-height: 20px;
}

.footer{
  color: rgba(255, 255, 255, 70%);
}
</style>

<style lang="scss">
.footer {
  @media (min-width: 600px) and (max-width: 960px) {
    .v-container {
      padding-inline: 2rem !important;
    }
  }
}

.footer-form{
  @media (min-width: 1280px) {
    max-inline-size: 400px;
  }
}
</style>
