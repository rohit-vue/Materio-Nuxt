<script setup>
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'

const breadCrumbItems = [
  {
    title: 'Help Center',
    to: { name: 'front-pages-help-center' },
  },
  { title: 'Buying and item support' },
  { title: 'Template kits' },
]

definePageMeta({
  layout: 'blank', 
})

const articleData = ref()
const { data, error } = await useApi('/pages/help-center/article')
if (error.value)
  console.log(error.value)
else
  articleData.value = data.value
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="bg-surface help-center-article">
    <!-- 👉 Navbar  -->
    <Navbar />

    <!-- 👉 Content -->
    <VContainer>
      <div
        class="d-flex gap-6 flex-lg-row flex-column"
        style=" margin-block: 9.25rem 5.25rem"
      >
        <div>
          <div>
            <VBreadcrumbs
              class="px-0 py-2 flex-wrap"
              :items="breadCrumbItems"
            >
              <template #item="{ item, index }">
                <div class="d-flex align-center">
                  <VIcon
                    size="20"
                    icon="ri-star-fill"
                    class="me-1"
                    :class="index === breadCrumbItems.length - 1 ? 'text-high-emphasis' : 'text-medium-emphasis'"
                  />
                  <div
                    class="text-body-1"
                    :class="index === breadCrumbItems.length - 1 ? 'text-high-emphasis' : 'text-medium-emphasis'"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </template>
            </VBreadcrumbs>
            <h4 class="text-h4 mb-2">
              {{ articleData?.title }}
            </h4>
            <div class="text-body-1">
              {{ articleData?.lastUpdated }}
            </div>
          </div>

          <VDivider class="my-6" />

          <div
            class="mb-6"
            v-html="articleData?.productContent"
          />

          <VImg :src="articleData?.productImg" />

          <p class="my-6 text-body-1">
            {{ articleData?.checkoutContent }}
          </p>

          <VImg :src="articleData?.checkoutImg" />
        </div>

        <div style="min-inline-size: 300px;">
          <VTextField
            prepend-inner-icon="ri-search-line"
            placeholder="Search..."
            class="pt-2 mb-6"
          />

          <div>
            <!-- 👉 Article List  -->
            <h5
              class="text-h5 px-4 py-2 mb-4 rounded"
              style="background: rgba(var(--v-theme-on-surface),var(--v-hover-opacity));"
            >
              Articles in this section
            </h5>

            <VList class="card-list">
              <VListItem
                v-for="(item, index) in articleData?.articleList"
                :key="index"
                link
              >
                <template #append>
                  <VIcon
                    size="20"
                    icon="ri-arrow-right-s-line"
                    color="disabled"
                  />
                </template>

                <VListItemTitle>
                  {{ item }}
                </VListItemTitle>
              </VListItem>
            </VList>
          </div>
        </div>
      </div>
    </VContainer>

    <!-- 👉 Footer  -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1rem;
}

.help-center-article{
  @media (min-width: 600px) and (max-width: 960px) {
    .v-container {
      padding-inline: 2rem !important;
    }
  }
}
</style>
