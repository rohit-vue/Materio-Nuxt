<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import pdf from '@images/icons/project-icons/pdf.png'
import pumaShoes from '@images/pages/puma-shoes.jpeg'
</script>

<template>
  <VCard title="Basic Timeline">
    <VCardText>
      <VTimeline
        side="end"
        align="start"
        line-inset="8"
        truncate-line="start"
        density="compact"
      >
        <!-- SECTION Timeline Item: Flight -->
        <VTimelineItem
          dot-color="error"
          size="x-small"
        >
          <div class="timeline-item">
            <!-- 👉 Header -->
            <div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-2">
              <span class="app-timeline-title align-self-start">
                Get on the flight
              </span>
              <span class="app-timeline-meta">Wednesday</span>
            </div>
            <!-- 👉 Content -->
            <p class="app-timeline-text mb-2">
              <span>Charles de Gaulle Airport, Paris</span>
              <VIcon
                size="20"
                icon="ri-arrow-right-line"
                class="mx-2 flip-in-rtl"
              />
              <span>Heathrow Airport, London</span>
            </p>
            <p class="app-timeline-meta">
              6:30 AM
            </p>
            <div class="d-inline-flex align-center timeline-chip">
              <img
                :src="pdf"
                height="20"
                class="me-2"
                alt="img"
              >
              <span class="app-timeline-text font-weight-medium">
                invoice.pdf
              </span>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Interview Schedule -->
        <VTimelineItem
          size="x-small"
          dot-color="primary"
        >
          <div class="timeline-item">
            <!-- 👉 Header -->
            <div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-2">
              <span class="app-timeline-title">
                Interview Schedule
              </span>
              <span class="app-timeline-meta">April, 18</span>
            </div>
            <p class="app-timeline-text mb-0">
              Bonbon gummies caramels brownie topping <br> fruitcake gingerbread jelly-o marzipan.
            </p>
            <!-- 👉 Divider -->
            <VDivider class="my-4" />
            <!-- 👉 Person -->
            <div class="d-flex justify-space-between align-center flex-wrap">
              <!-- 👉 Avatar & Personal Info -->
              <div class="d-flex align-center">
                <VAvatar
                  size="32"
                  class="me-2"
                  :image="avatar2"
                />
                <div>
                  <div class="text-body-2 font-weight-medium text-high-emphasis">
                    Rebecca Godman
                  </div>
                  <span class="text-body-2 font-weight-normal">JavaScript Developer</span>
                </div>
              </div>
              <!-- 👉 Person Actions -->
              <div>
                <IconBtn class="me-2">
                  <VIcon
                    size="20"
                    icon="ri-message-line"
                  />
                </IconBtn>
                <IconBtn>
                  <VIcon
                    size="20"
                    icon="ri-phone-line"
                  />
                </IconBtn>
              </div>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Puma Shoes -->
        <VTimelineItem
          size="x-small"
          dot-color="info"
        >
          <div class="timeline-item">
            <div class="d-flex align-start flex-sm-row flex-column mb-3">
              <VImg
                aspect-ratio="1"
                width="100"
                :src="pumaShoes"
                class="rounded me-4 mb-4"
              />
              <div>
                <!-- Header -->
                <div class="d-flex justify-space-between align-center flex-wrap mb-2">
                  <span class="app-timeline-title">
                    Sold Puma POPX Blue Color
                  </span>
                  <span class="app-timeline-meta">January, 10</span>
                </div>
                <span class="app-timeline-text">PUMA presents the latest shoes from its collection. Light &amp; comfortable made with highly durable material.</span>
              </div>
            </div>
            <!-- 👉 Timeline Item: Meta Content -->
            <div class="d-flex justify-space-between flex-column flex-sm-row gap-3">
              <div class="text-sm-center">
                <h6 class="text-sm font-weight-medium mb-1">
                  Customer
                </h6>
                <span class="text-xs">Micheal Scott</span>
              </div>
              <div class="text-sm-center">
                <h6 class="text-sm font-weight-medium mb-1">
                  Price
                </h6>
                <span class="text-xs">$375.00</span>
              </div>
              <div class="text-sm-center">
                <h6 class="text-sm font-weight-medium mb-1">
                  Quantity
                </h6>
                <span class="text-xs">1</span>
              </div>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Design Review -->
        <VTimelineItem
          size="x-small"
          dot-color="success"
        >
          <div class="timeline-item">
            <!-- 👉 Header -->
            <div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-2">
              <span class="app-timeline-title">
                Design Review
              </span>
              <span class="app-timeline-meta">September, 20</span>
            </div>
            <!-- 👉 Content -->
            <p class="app-timeline-text">
              Weekly review of freshly prepared design for our new application.
            </p>
            <div class="d-flex align-center">
              <VAvatar
                size="32"
                :image="avatar1"
                class="me-2"
              />
              <h6 class="text-sm font-weight-medium">
                John Doe (Client)
              </h6>
            </div>
          </div>
        </VTimelineItem>
        <!-- !SECTION -->
      </VTimeline>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.timeline-item{
  margin-block-start: -2px;
}
</style>
