<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar8 from '@images/avatars/avatar-8.png'
import timelineCardHeader from '@images/cards/timeline-card-header.png'
import pdf from '@images/icons/project-icons/pdf.png'
</script>

<template>
  <VCard>
    <VImg
      cover
      height="210"
      :src="timelineCardHeader"
    />

    <VCardItem>
      <VCardTitle>Activity Timeline</VCardTitle>
    </VCardItem>

    <VCardText>
      <VTimeline
        side="end"
        align="start"
        line-inset="8"
        truncate-line="start"
        density="compact"
      >
        <VTimelineItem
          dot-color="primary"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-3">
            <div class="app-timeline-title align-self-start">
              12 Invoices have been paid
            </div>
            <div class="app-timeline-meta">
              12 min ago
            </div>
          </div>

          <p class="app-timeline-text mb-2">
            Invoices have been paid to the company.
          </p>

          <div class="d-inline-flex align-center timeline-chip mb-4">
            <img
              :src="pdf"
              height="20"
              class="me-3"
              alt="img"
            >
            <h6 class="text-h6 text-medium-emphasis">
              invoice.pdf
            </h6>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="success"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-3">
            <div class="app-timeline-title align-self-start">
              Client Meeting
            </div>
            <div class="app-timeline-meta">
              45 min ago
            </div>
          </div>

          <p class="app-timeline-text mb-2">
            Project meeting with john @10:15am
          </p>

          <div class="d-flex align-center mb-2">
            <VAvatar
              size="32"
              :image="avatar1"
              class="me-3"
            />

            <div>
              <div class="text-body-2 font-weight-medium">
                Lester McCarthy (Client)
              </div>
              <div class="text-body-2">
                CEO of ThemeSelection
              </div>
            </div>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="info"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center gap-2 flex-wrap mb-3">
            <div class="app-timeline-title align-self-start">
              Create a new project for client
            </div>
            <div class="app-timeline-meta">
              2 Day Ago
            </div>
          </div>

          <p class="mb-0 app-timeline-text mb-2">
            6 team members in a project
          </p>

          <div class="v-avatar-group">
            <VAvatar
              :size="40"
              :image="avatar1"
            />
            <VAvatar
              :size="40"
              :image="avatar8"
            />
            <VAvatar
              :size="40"
              :image="avatar6"
            />
            <VAvatar
              :color="$vuetify.theme.current.dark ? '#3A3B59' : '#F0EFF0'"
              :size="40"
            >
              +3
            </VAvatar>
          </div>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>
