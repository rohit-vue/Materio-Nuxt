<script setup>
import avatar8 from '@images/avatars/avatar-8.png'
import xls from '@images/icons/file/xls.png'
import pdf from '@images/icons/project-icons/pdf.png'
import aviato from '@images/logos/aviato.png'
import bitbank from '@images/logos/bitbank.png'
import zipcar from '@images/logos/zipcar.png'
import TimelineRectangle1 from '@images/pages/TimelineRectangle1.png'
import TimelineRectangle2 from '@images/pages/TimelineRectangle2.png'
import TimelineRectangle3 from '@images/pages/TimelineRectangle3.png'
import TimelineRectangle4 from '@images/pages/TimelineRectangle4.png'

const albumImages = [
  TimelineRectangle1,
  TimelineRectangle2,
  TimelineRectangle3,
  TimelineRectangle4,
]

const earnings = [
  {
    avatar: zipcar,
    title: 'Zipcar',
    subtitle: 'Vuejs, React & HTML',
    amount: '$24,895.65',
    progress: 'primary',
  },
  {
    avatar: bitbank,
    title: 'Bitbank',
    subtitle: 'Sketch, Figma & XD',
    amount: '$8,6500.20',
    progress: 'info',
  },
  {
    avatar: aviato,
    title: 'Aviato',
    subtitle: 'HTML & Anguler',
    amount: '$1,2450.80',
    progress: 'secondary',
  },
]
</script>

<template>
  <div class="my-6">
    <div>
      <h5 class="text-h5 mb-6">
        Timeline with icons
      </h5>
    </div>
    <VTimeline
      align="start"
      line-inset="20"
      truncate-line="start"
      justify="center"
      :density="$vuetify.display.smAndDown ? 'compact' : 'default'"
      class="mt-12"
    >
      <!-- SECTION Timeline Item: Document -->
      <VTimelineItem
        fill-dot
        size="small"
      >
        <template #opposite>
          <span class="app-timeline-meta">
            2 months ago
          </span>
        </template>
        <template #icon>
          <div class="v-timeline-avatar-wrapper rounded-circle">
            <VAvatar
              size="32"
              color="error"
              variant="tonal"
            >
              <VIcon
                icon="ri-file-word-line"
                size="20"
              />
            </VAvatar>
          </div>
        </template>
        <!-- 👉 Header -->
        <VCard class="mb-10 mt-n4">
          <VCardItem>
            <VCardTitle>You've uploaded doc pdf to the Themeselection project</VCardTitle>
          </VCardItem>
          <VCardText>
            <!-- 👉 Content -->
            <p class="app-timeline-text mb-3">
              he process of recording the key project details and producing the documents that are required to implement it successfully. Simply put, it's an umbrella term which includes all the documents created over the course of the project.
            </p>
            <div class="d-inline-flex align-center timeline-chip">
              <img
                :src="pdf"
                height="20"
                class="me-2"
                alt="img"
              >
              <span class="app-timeline-text font-weight-medium">
                documentation.pdf
              </span>
            </div>
          </VCardText>
        </VCard>
      </VTimelineItem>
      <!-- !SECTION -->
      <!-- SECTION Timeline Item: Image Album -->
      <VTimelineItem
        fill-dot
        size="small"
      >
        <template #opposite>
          <span class="app-timeline-meta">
            24days ago
          </span>
        </template>
        <template #icon>
          <div class="v-timeline-avatar-wrapper rounded-circle">
            <VAvatar
              size="32"
              color="success"
              variant="tonal"
            >
              <VIcon
                size="20"
                icon="ri-image-line"
              />
            </VAvatar>
          </div>
        </template>
        <VCard class="mb-10 mt-n4">
          <VCardItem>
            <VCardTitle>Heather added 4 images to the Team album</VCardTitle>
          </VCardItem>
          <VCardText>
            <p class="mb-3">
              In the Select Image for Project dialog box, choose one of the following: Under the Upload New Image section
            </p>
            <div class="d-flex gap-4 flex-wrap">
              <template
                v-for="(img, i) in albumImages"
                :key="i"
              >
                <VImg :src="img" />
              </template>
            </div>
          </VCardText>
        </VCard>
      </VTimelineItem>
      <!-- !SECTION -->
      <!-- SECTION Timeline Item: Review -->
      <VTimelineItem
        fill-dot
        size="small"
      >
        <template #opposite>
          <span class="app-timeline-meta">
            6 days ago
          </span>
        </template>
        <template #icon>
          <div class="v-timeline-avatar-wrapper rounded-circle">
            <VAvatar
              size="32"
              color="warning"
              variant="tonal"
            >
              <VIcon
                size="20"
                icon="ri-star-smile-line"
              />
            </VAvatar>
          </div>
        </template>
        <VCard class="mb-10 mt-n4">
          <VCardItem>
            <VCardTitle>
              Loretta write a review on Themeselection
            </VCardTitle>
          </VCardItem>
          <VCardText>
            <div>
              <div class="d-flex align-center mb-3">
                <VAvatar
                  size="38"
                  class="me-4"
                  :image="avatar8"
                />
                <div>
                  <h6 class="font-weight-medium text-base">
                    Loretta Moore
                  </h6>
                  <span class="text-body-2">CTO of Airbnb</span>
                </div>
              </div>
              <div class="d-flex align-center justify-space-between flex-wrap gap-2 mb-3">
                <VRating
                  size="28"
                  :model-value="5"
                />
                <VChip
                  color="success"
                  density="comfortable"
                >
                  <template #prepend>
                    <VAvatar
                      start
                      :image="avatar8"
                      size="16"
                    />
                  </template>
                  VERIFIED BUYER
                </VChip>
              </div>
              <div>
                I wish I could select more than one main reason for rating this. I love how they constantly work on to make the template better. I am so thankful for this. Also, in the past, they had responded well to my tickets. Thank you for this great theme, for such an amazing support, for the better updates. I wish I could rate this for so many times. I highly recommend this template!
              </div>
            </div>
          </VCardText>
        </VCard>
      </VTimelineItem>
      <!-- !SECTION -->
      <!-- SECTION Timeline Item: Earning Report -->
      <VTimelineItem
        fill-dot
        size="small"
      >
        <template #opposite>
          <span class="app-timeline-meta">
            2 days ago
          </span>
        </template>
        <template #icon>
          <div class="v-timeline-avatar-wrapper rounded-circle">
            <VAvatar
              size="32"
              color="info"
              variant="tonal"
            >
              <VIcon
                size="20"
                icon="ri-pie-chart-line"
              />
            </VAvatar>
          </div>
        </template>
        <VCard class="mb-10 mt-n4">
          <VCardItem>
            <VCardTitle>Julia stiles shared an earnings report</VCardTitle>
          </VCardItem>
          <VCardText>
            <div class="mb-3">
              <div class="d-flex align-center">
                <h4 class="text-h4 me-2">
                  $24,895
                </h4>
                <VIcon
                  size="30"
                  icon="ri-arrow-up-s-fill"
                  color="success"
                />
                <div class="text-body-2 font-weight-medium text-success">
                  10%
                </div>
              </div>
              <div class="text-body-2">
                Compared to $84,325 last year
              </div>
            </div>
            <VList class="card-list">
              <VListItem
                v-for="earning in earnings"
                :key="earning.title"
              >
                <template #prepend>
                  <VAvatar
                    variant="tonal"
                    rounded
                    :image="earning.avatar"
                  />
                </template>
                <VListItemTitle class="text-sm font-weight-medium mb-1">
                  {{ earning.title }}
                </VListItemTitle>
                <VListItemSubtitle class="text-xs">
                  {{ earning.subtitle }}
                </VListItemSubtitle>
                <template #append>
                  <div>
                    <h6 class="text-sm font-weight-medium mb-2">
                      {{ earning.amount }}
                    </h6>
                    <VProgressLinear
                      :color="earning.progress"
                      rounded
                      rounded-bar
                      model-value="80"
                    />
                  </div>
                </template>
              </VListItem>
            </VList>
          </VCardText>
        </VCard>
      </VTimelineItem>
      <!-- !SECTION -->
      <!-- SECTION Timeline Item: Progress Report -->
      <VTimelineItem
        fill-dot
        size="small"
      >
        <template #icon>
          <div class="v-timeline-avatar-wrapper rounded-circle">
            <VAvatar
              size="32"
              color="primary"
              variant="tonal"
            >
              <VIcon
                size="18"
                icon="ri-folder-3-line"
              />
            </VAvatar>
          </div>
        </template>
        <template #opposite>
          <span class="app-timeline-meta">
            2 days ago
          </span>
        </template>
        <VCard class="mb-10 mt-n4">
          <VCardItem>
            <VCardTitle>josh johnson shared Next js project progress report</VCardTitle>
          </VCardItem>
          <VCardText>
            <p class="mb-3">
              The structure and process are defined in the project organization considering the attainment of the corporate objectives and therefore also project objectives. The components of the project process are
            </p>
            <div class="d-inline-flex align-center timeline-chip mb-3">
              <img
                :src="xls"
                height="20"
                class="me-2"
                alt="img"
              >
              <span class="app-timeline-text font-weight-medium">
                progress-report.xls
              </span>
            </div>
            <div class="d-flex gap-4 align-center">
              <div class="flex-grow-1">
                <VProgressLinear
                  :model-value="34"
                  rounded
                  rounded-bar
                  height="6"
                />
              </div>
              <div>34%</div>
            </div>
          </VCardText>
        </VCard>
      </VTimelineItem>
      <!-- !SECTION -->
    </VTimeline>
  </div>
</template>

<style lang="scss">
.v-timeline-avatar-wrapper {
  background-color: rgb(var(--v-theme-surface));
}
</style>
